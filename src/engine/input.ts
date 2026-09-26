export interface PlayerInput {
  moveX: number; // right +
  moveY: number; // forward +
  lookX: number; // radians this frame
  lookY: number;
  run: boolean;
  sneak: boolean;
  jumpHeld: boolean;
  swingHeld: boolean;
  pressed: Set<Action>;
}

export type Action =
  | "jump" | "attack" | "interact" | "ability" | "swing" | "switch" | "fp" | "command" | "pause" | "skip";

interface KeyLayout {
  up: string; down: string; left: string; right: string;
  camL: string; camR: string; camU?: string; camD?: string;
  jump: string[]; run: string[]; sneak: string[];
  attack: string[]; interact: string[]; ability: string[]; swing: string[];
  switch?: string[]; fp?: string[]; command?: string[];
}

// Shared-keyboard layouts. In multiplayer each player also gets a gamepad.
export const LAYOUTS: KeyLayout[] = [
  {
    up: "KeyW", down: "KeyS", left: "KeyA", right: "KeyD", camL: "KeyZ", camR: "KeyX",
    jump: ["Space"], run: ["ShiftLeft"], sneak: ["ControlLeft", "KeyC"],
    attack: ["KeyF"], interact: ["KeyE"], ability: ["KeyQ"], swing: ["KeyR"],
    switch: ["Tab"], fp: ["KeyV"], command: ["KeyG"],
  },
  {
    up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", camL: "BracketLeft", camR: "BracketRight",
    jump: ["Enter", "ControlRight"], run: ["ShiftRight"], sneak: ["Slash"],
    attack: ["Period"], interact: ["Semicolon"], ability: ["Comma"], swing: ["Quote"], fp: ["Backslash"],
  },
  {
    up: "Numpad8", down: "Numpad5", left: "Numpad4", right: "Numpad6", camL: "NumpadDivide", camR: "NumpadMultiply",
    jump: ["Numpad0"], run: ["NumpadAdd"], sneak: ["NumpadDecimal"],
    attack: ["Numpad7"], interact: ["Numpad9"], ability: ["Numpad1"], swing: ["Numpad3"], fp: ["NumpadSubtract"],
  },
];

export class InputManager {
  keys = new Set<string>();
  private edge = new Set<string>();
  private mouseDX = 0;
  private mouseDY = 0;
  private mouseButtons = new Set<number>();
  private mouseEdge = new Set<number>();
  private padPrev: boolean[][] = [];
  touch: TouchState | null = null;
  pointerLocked = false;
  sensitivity = 0.0025;

  constructor(private canvas: HTMLCanvasElement) {
    addEventListener("keydown", (e) => {
      if (e.code === "Tab" || e.code.startsWith("Arrow") || e.code === "Space" || e.code === "Quote" || e.code === "Slash") e.preventDefault();
      if (!this.keys.has(e.code)) this.edge.add(e.code);
      this.keys.add(e.code);
    });
    addEventListener("keyup", (e) => this.keys.delete(e.code));
    addEventListener("blur", () => this.keys.clear());
    canvas.addEventListener("mousedown", (e) => {
      this.mouseButtons.add(e.button);
      this.mouseEdge.add(e.button);
    });
    addEventListener("mouseup", (e) => this.mouseButtons.delete(e.button));
    canvas.addEventListener("contextmenu", (e) => e.preventDefault());
    addEventListener("mousemove", (e) => {
      if (this.pointerLocked) {
        this.mouseDX += e.movementX;
        this.mouseDY += e.movementY;
      }
    });
    document.addEventListener("pointerlockchange", () => {
      this.pointerLocked = document.pointerLockElement === canvas;
    });
  }

  requestPointerLock() {
    if (matchMedia("(pointer: coarse)").matches) return;
    this.canvas.requestPointerLock?.();
  }

  idle(): PlayerInput {
    return { moveX: 0, moveY: 0, lookX: 0, lookY: 0, run: false, sneak: false, jumpHeld: false, swingHeld: false, pressed: new Set() };
  }

  wasPressed(code: string) {
    return this.edge.has(code);
  }

  /** Build the input for player `idx` of `count` players. */
  read(idx: number, count: number): PlayerInput {
    const L = LAYOUTS[idx];
    const k = (c: string) => this.keys.has(c);
    const any = (a?: string[]) => !!a && a.some(k);
    const edge = (a?: string[]) => !!a && a.some((c) => this.edge.has(c));
    const inp: PlayerInput = {
      moveX: (k(L.right) ? 1 : 0) - (k(L.left) ? 1 : 0),
      moveY: (k(L.up) ? 1 : 0) - (k(L.down) ? 1 : 0),
      lookX: ((k(L.camR) ? 1 : 0) - (k(L.camL) ? 1 : 0)) * 0.04,
      lookY: 0,
      run: any(L.run),
      sneak: any(L.sneak),
      jumpHeld: any(L.jump),
      swingHeld: any(L.swing),
      pressed: new Set(),
    };
    const map: [Action, string[] | undefined][] = [
      ["jump", L.jump], ["attack", L.attack], ["interact", L.interact], ["ability", L.ability],
      ["swing", L.swing], ["switch", L.switch], ["fp", L.fp], ["command", L.command],
    ];
    for (const [a, codes] of map) if (edge(codes)) inp.pressed.add(a);
    if (idx === 0) {
      if (this.edge.has("Escape") || this.edge.has("KeyP")) inp.pressed.add("pause");
      if (this.edge.has("Escape") || this.edge.has("Enter")) inp.pressed.add("skip");
    }
    // mouse belongs to player 1
    if (idx === 0) {
      inp.lookX += this.mouseDX * this.sensitivity;
      inp.lookY += this.mouseDY * this.sensitivity;
      if (this.mouseEdge.has(0) && this.pointerLocked) inp.pressed.add("attack");
      if (this.mouseEdge.has(2)) inp.pressed.add("swing");
      if (this.mouseButtons.has(2)) inp.swingHeld = true;
    }
    // gamepad: pad i drives player i
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    const pad = pads[idx];
    if (pad && pad.connected) this.applyPad(pad, idx, inp);
    // touch belongs to player 1 in single-player
    if (idx === 0 && count === 1 && this.touch) this.touch.apply(inp);
    const len = Math.hypot(inp.moveX, inp.moveY);
    if (len > 1) {
      inp.moveX /= len;
      inp.moveY /= len;
    }
    return inp;
  }

  private applyPad(pad: Gamepad, idx: number, inp: PlayerInput) {
    const dz = (v: number) => (Math.abs(v) < 0.18 ? 0 : v);
    const b = pad.buttons.map((x) => x.pressed);
    const prev = this.padPrev[idx] || [];
    const down = (i: number) => b[i] && !prev[i];
    const mx = dz(pad.axes[0] ?? 0), my = -dz(pad.axes[1] ?? 0);
    if (mx || my) {
      inp.moveX = mx;
      inp.moveY = my;
    }
    inp.lookX += dz(pad.axes[2] ?? 0) * 0.05;
    inp.lookY += dz(pad.axes[3] ?? 0) * 0.035;
    inp.run ||= b[10] || b[7] || Math.hypot(mx, my) > 0.92;
    inp.sneak ||= b[11] || b[6];
    inp.jumpHeld ||= b[0];
    inp.swingHeld ||= b[5];
    if (down(0)) inp.pressed.add("jump");
    if (down(2)) inp.pressed.add("attack");
    if (down(1)) inp.pressed.add("ability");
    if (down(3)) inp.pressed.add("interact");
    if (down(5)) inp.pressed.add("swing");
    if (down(4)) inp.pressed.add("switch");
    if (down(12)) inp.pressed.add("fp");
    if (down(13)) inp.pressed.add("command");
    if (down(9)) {
      inp.pressed.add("pause");
      inp.pressed.add("skip");
    }
    this.padPrev[idx] = b;
  }

  endFrame() {
    this.edge.clear();
    this.mouseEdge.clear();
    this.mouseDX = this.mouseDY = 0;
    this.touch?.endFrame();
  }
}

/** On-screen joystick + camera drag + action buttons (iOS / touch). */
export class TouchState {
  moveX = 0;
  moveY = 0;
  lookX = 0;
  lookY = 0;
  held = new Set<string>();
  pressed = new Set<Action>();
  private stickId: number | null = null;
  private lookId: number | null = null;
  private lookLast = { x: 0, y: 0 };
  private stickOrigin = { x: 0, y: 0 };

  constructor(root: HTMLElement) {
    const zone = document.createElement("div");
    zone.className = "touch-zone";
    const knob = document.createElement("div");
    knob.className = "touch-knob";
    const base = document.createElement("div");
    base.className = "touch-base";
    base.appendChild(knob);
    zone.appendChild(base);
    root.appendChild(zone);
    const btns = document.createElement("div");
    btns.className = "touch-buttons";
    const defs: [string, Action | "run" | "sneak", string][] = [
      ["⤒", "jump", "Прыжок"], ["🐾", "attack", "Удар"], ["✦", "ability", "Умение"],
      ["🕸", "swing", "Паутина"], ["✋", "interact", "Действие"], ["⇄", "switch", "Сменить кота"],
      ["»", "run", "Бег"], ["…", "sneak", "Красться"],
    ];
    for (const [icon, act, title] of defs) {
      const b = document.createElement("button");
      b.textContent = icon;
      b.title = title;
      b.className = `tb tb-${act}`;
      b.addEventListener("touchstart", (e) => {
        e.preventDefault();
        if (act === "run" || act === "sneak") {
          this.held.has(act) ? this.held.delete(act) : this.held.add(act);
          b.classList.toggle("on", this.held.has(act));
          return;
        }
        this.pressed.add(act);
        this.held.add(act);
      });
      b.addEventListener("touchend", (e) => {
        e.preventDefault();
        if (act !== "run" && act !== "sneak") this.held.delete(act);
      });
      btns.appendChild(b);
    }
    root.appendChild(btns);
    const fp = document.createElement("button");
    fp.className = "tb tb-fp";
    fp.textContent = "👁";
    fp.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.pressed.add("fp");
    });
    root.appendChild(fp);

    zone.addEventListener("touchstart", (e) => {
      e.preventDefault();
      const t = e.changedTouches[0];
      this.stickId = t.identifier;
      this.stickOrigin = { x: t.clientX, y: t.clientY };
      base.style.left = `${t.clientX - 60}px`;
      base.style.top = `${t.clientY - 60}px`;
      base.style.opacity = "1";
    });
    const look = root.parentElement ?? document.body;
    look.addEventListener("touchstart", (e) => {
      for (const t of Array.from(e.changedTouches)) {
        if (t.clientX > innerWidth * 0.4 && this.lookId === null && !(t.target as HTMLElement).closest("button")) {
          this.lookId = t.identifier;
          this.lookLast = { x: t.clientX, y: t.clientY };
        }
      }
    });
    addEventListener("touchmove", (e) => {
      for (const t of Array.from(e.changedTouches)) {
        if (t.identifier === this.stickId) {
          const dx = t.clientX - this.stickOrigin.x, dy = t.clientY - this.stickOrigin.y;
          const len = Math.min(50, Math.hypot(dx, dy));
          const a = Math.atan2(dy, dx);
          knob.style.transform = `translate(${Math.cos(a) * len}px, ${Math.sin(a) * len}px)`;
          this.moveX = (Math.cos(a) * len) / 50;
          this.moveY = -(Math.sin(a) * len) / 50;
        } else if (t.identifier === this.lookId) {
          this.lookX += (t.clientX - this.lookLast.x) * 0.006;
          this.lookY += (t.clientY - this.lookLast.y) * 0.005;
          this.lookLast = { x: t.clientX, y: t.clientY };
        }
      }
    }, { passive: true });
    addEventListener("touchend", (e) => {
      for (const t of Array.from(e.changedTouches)) {
        if (t.identifier === this.stickId) {
          this.stickId = null;
          this.moveX = this.moveY = 0;
          knob.style.transform = "";
          base.style.opacity = "0.35";
        }
        if (t.identifier === this.lookId) this.lookId = null;
      }
    });
  }

  apply(inp: PlayerInput) {
    if (this.moveX || this.moveY) {
      inp.moveX = this.moveX;
      inp.moveY = this.moveY;
    }
    inp.lookX += this.lookX;
    inp.lookY += this.lookY;
    inp.run ||= this.held.has("run") || Math.hypot(this.moveX, this.moveY) > 0.95;
    inp.sneak ||= this.held.has("sneak");
    inp.jumpHeld ||= this.held.has("jump");
    inp.swingHeld ||= this.held.has("swing");
    for (const p of this.pressed) inp.pressed.add(p);
  }

  endFrame() {
    this.lookX = this.lookY = 0;
    this.pressed.clear();
  }
}
