import * as THREE from "three";
import { Cat } from "./cat";
import type { PlayerInput } from "../engine/input";
import type { World } from "./world";
import { audio } from "../engine/audio";

type State = "inactive" | "stalk" | "windup" | "feint" | "pounce" | "swipeWind" | "swipe" | "dizzy" | "blind" | "stagger" | "defeated";

const TAUNTS = [
  "Карниз: Это МОЯ крыша!",
  "Карниз: Ты бегаешь как пылесос!",
  "Карниз: Мяу-ха-ха!",
  "Карниз: Голуби за меня болеют!",
  "Карниз: Где твоя хозяйка, пушистик?",
];

/** Karniz: telegraphed pounces, feints, swipes. Vulnerable only while dizzy/blind. */
export class Karniz {
  cat: Cat;
  state: State = "inactive";
  t = 0;
  hp = 8;
  maxHp = 8;
  target: Cat | null = null;
  pounceDir = new THREE.Vector3();
  stars: THREE.Group;
  warn: THREE.Mesh;
  onTaunt: (s: string) => void = () => {};
  private tauntCd = 3;
  private strafe = 1;

  constructor(cat: Cat) {
    this.cat = cat;
    this.stars = new THREE.Group();
    const sm = new THREE.MeshBasicMaterial({ color: 0xffe066, toneMapped: false });
    for (let i = 0; i < 5; i++) {
      const s = new THREE.Mesh(new THREE.OctahedronGeometry(0.035), sm);
      s.position.set(Math.cos((i / 5) * Math.PI * 2) * 0.16, 0, Math.sin((i / 5) * Math.PI * 2) * 0.16);
      this.stars.add(s);
    }
    this.stars.visible = false;
    this.warn = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.3), new THREE.MeshBasicMaterial({ map: excl(), transparent: true, toneMapped: false, depthTest: false }));
    this.warn.visible = false;
    this.warn.renderOrder = 10;
    cat.root.add(this.stars);
  }

  get vulnerable() {
    return this.state === "dizzy" || this.state === "blind" || this.state === "stagger";
  }

  start() {
    this.state = "stalk";
    this.t = 0;
    this.hp = this.maxHp;
  }

  private input(dir: THREE.Vector3 | null, run = false): PlayerInput {
    // camYaw 0: forward = -Z, right = +X
    return { moveX: dir ? dir.x : 0, moveY: dir ? -dir.z : 0, lookX: 0, lookY: 0, run, sneak: false, jumpHeld: false, swingHeld: false, pressed: new Set() };
  }

  update(dt: number, players: Cat[], world: World, camera: THREE.Camera) {
    const c = this.cat;
    this.t += dt;
    this.warn.quaternion.copy(camera.quaternion);
    this.stars.visible = this.state === "dizzy" || this.state === "blind";
    this.stars.position.set(0, 0.55, 0.25);
    this.stars.rotation.y += dt * 6;
    if (this.state === "inactive" || this.state === "defeated") {
      c.update(dt, this.input(null), 0, world.physics, [], false);
      return;
    }
    // closest living player inside the arena
    const inArena = players.filter((p) => world.bossArena.containsPoint(p.root.position) && p.health > 0);
    this.target = inArena.sort((a, b) => a.root.position.distanceTo(c.root.position) - b.root.position.distanceTo(c.root.position))[0] ?? null;
    const tp = this.target?.root.position;
    const toT = tp ? tp.clone().sub(c.root.position).setY(0) : new THREE.Vector3();
    const dist = toT.length();
    const dirT = toT.clone().normalize();
    const phase2 = this.hp <= this.maxHp / 2;
    this.tauntCd -= dt;
    let inp = this.input(null);

    switch (this.state) {
      case "stalk": {
        if (!tp) break;
        // circle the player at mid range
        const side = new THREE.Vector3(-dirT.z, 0, dirT.x).multiplyScalar(this.strafe);
        const want = dist > 3.2 ? dirT.clone() : dist < 2.2 ? dirT.clone().negate() : side;
        inp = this.input(want.normalize(), dist > 5);
        if (Math.random() < dt * 0.4) this.strafe *= -1;
        if (this.tauntCd < 0) {
          this.onTaunt(TAUNTS[Math.floor(Math.random() * TAUNTS.length)]);
          this.tauntCd = 5 + Math.random() * 4;
        }
        if (dist < 1.3 && this.t > 0.8) this.go("swipeWind");
        else if (this.t > (phase2 ? 1.4 : 2.2)) this.go(Math.random() < 0.3 ? "feint" : "windup");
        break;
      }
      case "windup":
      case "feint": {
        c.sneaking = true;
        c.yaw = Math.atan2(dirT.x, dirT.z);
        this.warn.visible = true;
        this.warn.position.set(0, 0.62 + Math.sin(this.t * 30) * 0.02, 0);
        if (!this.warn.parent) c.root.add(this.warn);
        const wind = phase2 ? 0.55 : 0.8;
        if (this.state === "feint" && this.t > wind * 0.8) {
          // fake-out: hop backwards and laugh
          c.body.vel.set(-dirT.x * 3, 3, -dirT.z * 3);
          this.onTaunt("Карниз: Ха! Купился!");
          audio.meow(0.55, 0.4);
          this.go("stalk");
        } else if (this.state === "windup" && this.t > wind) {
          this.pounceDir.copy(dirT);
          c.body.vel.set(dirT.x * (phase2 ? 9.5 : 8), 4.2, dirT.z * (phase2 ? 9.5 : 8));
          c.sneaking = false;
          audio.meow(0.5, 0.7);
          this.go("pounce");
        }
        break;
      }
      case "pounce": {
        this.warn.visible = false;
        c.body.vel.x = this.pounceDir.x * (phase2 ? 9.5 : 8);
        c.body.vel.z = this.pounceDir.z * (phase2 ? 9.5 : 8);
        for (const p of players) {
          if (p.root.position.distanceTo(c.root.position) < 0.55) p.damage(1, c.root.position);
        }
        const hitWall = Math.abs(c.body.vel.x) < 0.5 && Math.abs(c.body.vel.z) < 0.5;
        if ((c.body.grounded && this.t > 0.25) || hitWall) {
          c.body.vel.set(0, 0, 0);
          if (hitWall) this.onTaunt("Карниз: Ай! Кто поставил тут кондиционер?!");
          this.go(phase2 && Math.random() < 0.4 && !hitWall ? "windup" : "dizzy");
        }
        break;
      }
      case "swipeWind":
        c.yaw = Math.atan2(dirT.x, dirT.z);
        if (this.t > 0.35) {
          c.actions.Attack?.reset();
          c.play("Attack", 0.05, 1.4);
          audio.swipe();
          if (tp && dist < 1.2 && this.target) this.target.damage(1, c.root.position);
          this.go("swipe");
        }
        break;
      case "swipe":
        if (this.t > 0.5) this.go("dizzy", 0.4);
        break;
      case "dizzy":
      case "blind":
      case "stagger": {
        const dur = this.state === "blind" ? 2.6 : this.state === "stagger" ? 0.7 : 1.7;
        if (this.state === "blind") inp = this.input(new THREE.Vector3(Math.sin(this.t * 3), 0, Math.cos(this.t * 2)));
        if (this.t > dur) this.go("stalk");
        break;
      }
    }
    if (this.state !== "windup" && this.state !== "feint") {
      this.warn.visible = false;
      c.sneaking = false;
    }
    c.update(dt, inp, 0, world.physics, [], false);
    if (this.state === "dizzy" || this.state === "blind") c.play("Sit", 0.3);
  }

  go(s: State, tOffset = 0) {
    this.state = s;
    this.t = tOffset;
  }

  /** Returns true when the hit landed. */
  hit(from: Cat, dmg: number) {
    if (this.state === "defeated" || this.state === "inactive") return false;
    if (!this.vulnerable) {
      // parried: shoves the attacker back
      this.onTaunt("Карниз: Мимо! Жди, когда я выдохнусь.");
      const d = from.root.position.clone().sub(this.cat.root.position).setY(0).normalize();
      from.body.vel.add(d.multiplyScalar(4));
      return false;
    }
    this.hp -= dmg;
    audio.hit();
    audio.meow(0.6, 0.5);
    const d = this.cat.root.position.clone().sub(from.root.position).setY(0).normalize();
    this.cat.body.vel.set(d.x * 5, 3, d.z * 5);
    if (this.hp <= 0) {
      this.state = "defeated";
      return true;
    }
    this.go("stagger");
    return true;
  }

  blind() {
    if (this.state === "defeated" || this.state === "inactive") return;
    this.onTaunt("Карниз: Аааа! Шерсть в глаза!");
    this.go("blind");
  }
}

function excl() {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 160;
  const g = c.getContext("2d")!;
  g.fillStyle = "#ff3b30";
  g.font = "bold 150px sans-serif";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.shadowColor = "#fff";
  g.shadowBlur = 10;
  g.fillText("!", 32, 85);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
