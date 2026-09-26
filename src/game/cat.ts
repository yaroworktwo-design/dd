import * as THREE from "three";
import { GLTFLoader, type GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";
import { addFur, furWind, setFurShells } from "./fur";
import { moveBody, type Body, type MoveEvents, type PhysicsWorld } from "../engine/physics";
import type { PlayerInput } from "../engine/input";
import { audio } from "../engine/audio";
import { fabric } from "../engine/textures";

export type CatId = "dymok" | "milena" | "pixel" | "karniz" | "plombir";

export interface FurDef {
  length: number;
  density: number;
  comb: number;
  tip: number;
  rim: number;
}

export interface CatDef {
  id: CatId;
  name: string;
  walk: number; // slowest analog speed
  trot: number; // default movement
  run: number;
  sneak: number;
  jump: number;
  half: number;
  height: number;
  strength: number;
  ability: "dash" | "hiss" | "doublejump" | "none";
  fur: FurDef;
  pitch: number;
  color: string;
}

export const CATS: Record<CatId, CatDef> = {
  dymok: { id: "dymok", name: "Дымок", walk: 0.35, trot: 1.05, run: 3.0, sneak: 0.32, jump: 5.3, half: 0.16, height: 0.36, strength: 2, ability: "dash", fur: { length: 0.009, density: 950, comb: 1.1, tip: 0.55, rim: 0.5 }, pitch: 0.72, color: "#5b5d66" },
  milena: { id: "milena", name: "Милена", walk: 0.35, trot: 1.15, run: 3.6, sneak: 0.36, jump: 6.1, half: 0.1, height: 0.32, strength: 0, ability: "hiss", fur: { length: 0.007, density: 1050, comb: 1.1, tip: 0.2, rim: 0.3 }, pitch: 1.25, color: "#c9ccd3" },
  pixel: { id: "pixel", name: "Пиксель", walk: 0.35, trot: 1.15, run: 3.6, sneak: 0.36, jump: 5.8, half: 0.11, height: 0.32, strength: 1, ability: "doublejump", fur: { length: 0.005, density: 1150, comb: 1.0, tip: 0.1, rim: 0.7 }, pitch: 1.05, color: "#222" },
  karniz: { id: "karniz", name: "Карниз", walk: 0.35, trot: 1.2, run: 4.0, sneak: 0.4, jump: 6, half: 0.18, height: 0.4, strength: 2, ability: "none", fur: { length: 0.008, density: 950, comb: 1.1, tip: 0.25, rim: 0.3 }, pitch: 0.6, color: "#d66a1c" },
  plombir: { id: "plombir", name: "Пломбир", walk: 0.3, trot: 0.6, run: 1.5, sneak: 0.3, jump: 3, half: 0.16, height: 0.36, strength: 0, ability: "none", fur: { length: 0.016, density: 800, comb: 1.5, tip: 0.15, rim: 0.2 }, pitch: 0.9, color: "#f3f1ea" },
};

/** Ground speed of each baked clip at timeScale 1 (stride / (duty * cycle)), see make_cats.py. */
const CLIP_SPEED: Record<string, number> = { Walk: 0.242, Trot: 0.667, Run: 2.03, Sneak: 0.185 };

const loader = new GLTFLoader();
const gltfCache = new Map<string, Promise<GLTF>>();
export { furWind };
export const quality = { shells: 16 };

export function preloadCat(id: CatId) {
  if (!gltfCache.has(id)) gltfCache.set(id, loader.loadAsync(`${import.meta.env.BASE_URL}models/${id}.glb`));
  return gltfCache.get(id)!;
}

export const GRAVITY = 14;

export interface Costume {
  id: string;
  cat: CatId;
  name: string;
  desc: string;
  price: number;
}

export const COSTUMES: Costume[] = [
  { id: "brooklyn", cat: "dymok", name: "«Бруклин»", desc: "Красная бандана и кепка задом наперёд. +10% к уверенности, −0% к весу.", price: 40 },
  { id: "nighthero", cat: "dymok", name: "«Ночной герой»", desc: "Маска супергероя. Голуби больше не узнают Дымка (он так думает).", price: 60 },
  { id: "seeker", cat: "milena", name: "«Искательница»", desc: "Зелёный шарф и шляпа исследователя. Идеально для подвалов.", price: 40 },
  { id: "star", cat: "milena", name: "«Звёздная»", desc: "Розовые очки-звёздочки. Мир сразу выглядит лучше.", price: 55 },
];

export class Cat {
  def: CatDef;
  root = new THREE.Group();
  model!: THREE.Object3D;
  mixer!: THREE.AnimationMixer;
  actions: Record<string, THREE.AnimationAction> = {};
  current = "";
  body: Body;
  yaw = 0; // facing
  health = 5;
  maxHealth = 5;
  invuln = 0;
  state: "normal" | "swing" | "stunned" | "hidden" | "scripted" = "normal";
  anchor: THREE.Vector3 | null = null;
  ropeLen = 0;
  rope: THREE.Line;
  jumpBuffer = 0;
  coyote = 0;
  airJumps = 0;
  actionLock = 0;
  abilityCd = 0;
  squash = 0;
  sneaking = false;
  moving = 0;
  headBone?: THREE.Object3D;
  neckBone?: THREE.Object3D;
  costume: string | null = null;
  private costumeParts: THREE.Object3D[] = [];
  lastEvents: MoveEvents = {};
  ai: "follow" | "wait" | "none" = "none";
  scriptedTarget: THREE.Vector3 | null = null;
  scriptedSpeed = 1.3;
  onGroundTime = 0;

  constructor(id: CatId) {
    this.def = CATS[id];
    this.body = {
      pos: this.root.position,
      vel: new THREE.Vector3(),
      half: this.def.half,
      height: this.def.height,
      grounded: false,
      strength: this.def.strength,
      stepHeight: 0.22,
    };
    const g = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
    this.rope = new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0xf2f6ff, transparent: true, opacity: 0.9 }));
    this.rope.visible = false;
    this.rope.frustumCulled = false;
  }

  async load() {
    const gltf = await preloadCat(this.def.id);
    this.model = SkeletonUtils.clone(gltf.scene);
    const masks: { p: THREE.Vector3; r: number }[] = [];
    this.model.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      m.castShadow = true;
      const mat = m.material as THREE.MeshStandardMaterial;
      if (mat.name === "eye_iris" || mat.name === "nose") {
        // bind-space centres of each eyeball / the nose, used to keep fur off them
        const pos = m.geometry.attributes.position as THREE.BufferAttribute;
        for (const side of mat.name === "nose" ? [0] : [-1, 1]) {
          const box = new THREE.Box3();
          const v = new THREE.Vector3();
          for (let i = 0; i < pos.count; i++) {
            v.fromBufferAttribute(pos, i);
            if (side === 0 || Math.sign(v.x) === side) box.expandByPoint(v);
          }
          const size = box.getSize(new THREE.Vector3());
          masks.push({ p: box.getCenter(new THREE.Vector3()), r: Math.max(size.x, size.y, size.z) * 0.5 });
        }
      }
      if (mat.name === "eye_iris") {
        // wet cornea: clear-coat highlight over the painted iris, faint tapetum glow
        m.material = new THREE.MeshPhysicalMaterial({ map: mat.map, roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.02, emissiveMap: mat.map, emissive: 0xffffff, emissiveIntensity: 0.12, envMapIntensity: 1.4 });
        m.castShadow = false;
      } else if (mat.name === "whisker") {
        m.castShadow = false;
      }
    });
    addFur(this.model, { shells: quality.shells, length: this.def.fur.length, density: this.def.fur.density, comb: this.def.fur.comb, tipLighten: this.def.fur.tip, rim: this.def.fur.rim, masks });
    this.root.add(this.model);
    this.mixer = new THREE.AnimationMixer(this.model);
    for (const clip of gltf.animations) {
      const a = this.mixer.clipAction(clip);
      if (["Jump", "Attack", "Hiss"].includes(clip.name)) {
        a.setLoop(THREE.LoopOnce, 1);
        a.clampWhenFinished = true;
      }
      this.actions[clip.name] = a;
    }
    this.headBone = this.model.getObjectByName("head");
    this.neckBone = this.model.getObjectByName("neck");
    this.play("Idle");
    return this;
  }

  play(name: string, fade = 0.18, timeScale = 1) {
    const a = this.actions[name];
    if (!a) return;
    a.timeScale = timeScale;
    if (this.current === name) return;
    const prev = this.actions[this.current];
    a.reset().play();
    if (prev) a.crossFadeFrom(prev, fade, false);
    this.current = name;
  }

  get headPos() {
    const v = new THREE.Vector3();
    (this.headBone ?? this.root).getWorldPosition(v);
    return v;
  }

  get forward() {
    return new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
  }

  /** Host side: damage to a cat owned by another player is forwarded to them. */
  damageProxy?: (n: number, from?: THREE.Vector3) => void;

  damage(n: number, from?: THREE.Vector3) {
    if (this.invuln > 0 || this.state === "scripted") return false;
    if (this.damageProxy) {
      this.invuln = 1.1;
      this.damageProxy(n, from);
      return true;
    }
    this.health = Math.max(0, this.health - n);
    this.invuln = 1.1;
    audio.hit();
    audio.meow(this.def.pitch * 1.3, 0.5);
    if (from) {
      const d = this.root.position.clone().sub(from).setY(0).normalize();
      this.body.vel.set(d.x * 6, 4, d.z * 6);
    }
    if (this.state === "swing") this.releaseSwing();
    return true;
  }

  releaseSwing() {
    this.state = "normal";
    this.anchor = null;
    this.rope.visible = false;
  }

  /** Core per-frame controller. camYaw orients input; returns events for game logic. */
  update(dt: number, inp: PlayerInput | null, camYaw: number, world: PhysicsWorld, anchors: THREE.Vector3[], canSwing: boolean) {
    const b = this.body;
    this.invuln = Math.max(0, this.invuln - dt);
    this.actionLock = Math.max(0, this.actionLock - dt);
    this.abilityCd = Math.max(0, this.abilityCd - dt);
    this.jumpBuffer = Math.max(0, this.jumpBuffer - dt);
    const events: { attacked?: boolean; ability?: string; landed?: number } = {};

    let mx = 0, my = 0, run = false;
    if (inp && this.state !== "stunned") {
      mx = inp.moveX;
      my = inp.moveY;
      run = inp.run;
      this.sneaking = inp.sneak;
    }
    if (this.state === "scripted" && this.scriptedTarget) {
      const d = this.scriptedTarget.clone().sub(b.pos).setY(0);
      if (d.length() > 0.08) {
        d.normalize();
        const fx = Math.sin(camYaw), fz = Math.cos(camYaw);
        // convert world direction into camera-relative stick input
        my = -(d.x * fx + d.z * fz);
        mx = d.x * Math.cos(camYaw) - d.z * Math.sin(camYaw);
        run = this.scriptedSpeed > 2;
      }
    }

    // headroom: stay crouched in low ducts
    const standBox = new THREE.Box3(
      new THREE.Vector3(b.pos.x - b.half, b.pos.y + 0.02, b.pos.z - b.half),
      new THREE.Vector3(b.pos.x + b.half, b.pos.y + this.def.height, b.pos.z + b.half),
    );
    if (world.overlaps(standBox)) this.sneaking = true;
    b.height = this.sneaking ? this.def.height * 0.66 : this.def.height;

    const fwd = new THREE.Vector3(-Math.sin(camYaw), 0, -Math.cos(camYaw));
    const right = new THREE.Vector3(Math.cos(camYaw), 0, -Math.sin(camYaw));
    const wish = fwd.multiplyScalar(my).add(right.multiplyScalar(mx));
    const wishLen = Math.min(1, wish.length());
    // gentle stick = walk, full stick = trot, run button = gallop
    let speed = this.sneaking ? this.def.sneak : run ? this.def.run : THREE.MathUtils.lerp(this.def.walk, this.def.trot, THREE.MathUtils.smoothstep(wishLen, 0.35, 0.8));
    if (this.actionLock > 0 && b.grounded) speed *= 0.3;

    if (this.state === "swing" && this.anchor) {
      b.vel.y -= GRAVITY * dt;
      b.vel.addScaledVector(wish, 6 * dt);
      if (inp?.jumpHeld) this.ropeLen = Math.max(1.5, this.ropeLen - 3 * dt);
      const r = b.pos.clone().sub(this.anchor);
      const dist = r.length();
      r.divideScalar(dist || 1);
      if (dist >= this.ropeLen) {
        const out = b.vel.dot(r);
        if (out > 0) b.vel.addScaledVector(r, -out);
      }
      this.lastEvents = moveBody(world, b, dt, 0);
      const r2 = b.pos.clone().sub(this.anchor);
      if (r2.length() > this.ropeLen) b.pos.copy(this.anchor).addScaledVector(r2.normalize(), this.ropeLen);
      const hv = b.vel.clone().setY(0);
      if (hv.lengthSq() > 0.3) this.yaw = Math.atan2(hv.x, hv.z);
      this.rope.geometry.setFromPoints([this.root.position.clone().add(new THREE.Vector3(0, 0.25, 0)), this.anchor]);
      this.rope.visible = true;
      this.play("Jump", 0.1);
      if (b.grounded || (inp && !inp.swingHeld)) {
        this.releaseSwing();
        if (!b.grounded) b.vel.y += 1.5; // release pop keeps momentum and adds lift
      }
    } else {
      const target = wish.clone().multiplyScalar(speed * wishLen);
      const accel = b.grounded ? 22 : 5;
      const hv = new THREE.Vector3(b.vel.x, 0, b.vel.z);
      // dash keeps inertia: don't clamp speed down quickly while above run speed
      const over = hv.length() > this.def.run + 0.5;
      hv.lerp(target, 1 - Math.exp(-(over ? 2 : accel) * dt));
      b.vel.x = hv.x;
      b.vel.z = hv.z;

      if (inp?.pressed.has("jump")) this.jumpBuffer = 0.14;
      if (b.grounded) {
        this.coyote = 0.12;
        this.airJumps = this.def.ability === "doublejump" ? 1 : 0;
      } else this.coyote -= dt;
      if (this.jumpBuffer > 0 && this.state === "normal") {
        if (this.coyote > 0) {
          b.vel.y = this.def.jump * (this.sneaking ? 0.8 : 1);
          this.coyote = 0;
          this.jumpBuffer = 0;
          this.play("Jump", 0.05, 1.6);
          audio.jump();
        } else if (this.airJumps > 0) {
          this.airJumps--;
          b.vel.y = this.def.jump * 0.85;
          this.jumpBuffer = 0;
          this.actions.Jump?.reset();
          audio.boing();
        }
      }
      if (inp?.pressed.has("swing") && canSwing) this.trySwing(anchors, camYaw);

      const g = b.vel.y < 0 && inp?.jumpHeld ? GRAVITY * 0.85 : GRAVITY;
      const wasAir = !b.grounded;
      this.lastEvents = moveBody(world, b, dt, g);
      if (this.lastEvents.landedSpeed && wasAir) {
        events.landed = this.lastEvents.landedSpeed;
        this.squash = Math.min(1, this.lastEvents.landedSpeed / 9) * (this.def.id === "dymok" ? 1.6 : 0.7);
        audio.land(this.lastEvents.landedSpeed / 3);
      }
      if (hv.lengthSq() > 0.02) {
        const want = Math.atan2(hv.x, hv.z);
        let d = want - this.yaw;
        d = Math.atan2(Math.sin(d), Math.cos(d));
        this.yaw += d * (1 - Math.exp(-12 * dt));
      }
      this.moving = hv.length();

      if (inp?.pressed.has("attack") && this.actionLock <= 0) {
        this.actionLock = 0.45;
        this.actions.Attack?.reset();
        this.play("Attack", 0.05, 1.3);
        audio.swipe();
        events.attacked = true;
      }
      if (inp?.pressed.has("ability") && this.abilityCd <= 0) {
        events.ability = this.useAbility();
      }
      if (b.pos.y < -10) b.vel.set(0, 0, 0);
      if (this.actionLock <= 0 || this.current !== "Attack") this.pickAnim();
    }

    this.squash = Math.max(0, this.squash - dt * 3);
    const s = this.squash;
    // belly bounce on landing
    this.model.scale.set(1 + s * 0.25 * Math.sin(s * 9), 1 - s * 0.35 * Math.abs(Math.sin(s * 9)), 1 + s * 0.2);
    this.root.rotation.y = this.yaw;
    this.model.visible = !(this.invuln > 0 && Math.floor(this.invuln * 12) % 2 === 0 && this.state !== "scripted");
    this.mixer.update(dt);
    if (b.grounded) this.onGroundTime += dt;
    else this.onGroundTime = 0;
    return events;
  }

  private pickAnim() {
    const b = this.body;
    if (this.current === "Hiss" && this.actionLock > 0) return;
    if (!b.grounded) {
      if (this.current !== "Jump") this.play("Jump", 0.12, 1);
      return;
    }
    this.play(Cat.gaitFor(this.moving, this.sneaking), 0.22);
    this.syncGait();
  }

  static gaitFor(v: number, sneaking: boolean) {
    if (v < 0.08) return sneaking ? "Sneak" : "Idle";
    if (sneaking) return "Sneak";
    if (v < 0.6) return "Walk";
    if (v < 2.1) return "Trot";
    return "Run";
  }

  /** Match cadence to ground speed so planted paws don't skate. */
  syncGait() {
    const clip = CLIP_SPEED[this.current];
    const a = this.actions[this.current];
    if (clip && a) a.timeScale = this.moving < 0.05 ? 0 : THREE.MathUtils.clamp(this.moving / clip, 0.3, 2.4);
  }

  setFurQuality(shells: number) {
    setFurShells(this.model, shells);
  }

  private useAbility() {
    this.abilityCd = 1.2;
    if (this.def.ability === "dash") {
      // momentum-keeping belly charge that shoves boxes and enemies
      const f = this.forward;
      this.body.vel.x = f.x * 9;
      this.body.vel.z = f.z * 9;
      if (this.body.grounded) this.body.vel.y = 1.5;
      this.actionLock = 0.3;
      audio.meow(this.def.pitch * 0.9, 0.6);
      return "dash";
    }
    if (this.def.ability === "hiss" || this.def.ability === "doublejump") {
      this.actionLock = 0.8;
      this.actions.Hiss?.reset();
      this.play("Hiss", 0.1);
      audio.hiss();
      return "hiss";
    }
    return undefined;
  }

  trySwing(anchors: THREE.Vector3[], camYaw: number) {
    const pos = this.body.pos;
    const look = new THREE.Vector3(-Math.sin(camYaw), 0, -Math.cos(camYaw));
    let best: THREE.Vector3 | null = null, bestScore = Infinity;
    for (const a of anchors) {
      const d = a.clone().sub(pos);
      const dist = d.length();
      if (dist > 16 || dist < 1.5 || d.y < 1) continue;
      const facing = d.clone().setY(0).normalize().dot(look);
      if (facing < -0.2) continue;
      const score = dist - facing * 6 - d.clone().setY(0).dot(look) * 0.5;
      if (score < bestScore) {
        bestScore = score;
        best = a;
      }
    }
    if (!best) return false;
    this.anchor = best;
    // a shorter rope than the current distance yanks the cat up into the arc
    this.ropeLen = best.distanceTo(pos) * 0.86;
    this.state = "swing";
    if (this.body.grounded) this.body.vel.y = 3;
    this.body.grounded = false;
    if (this.body.vel.y < 0) this.body.vel.y *= 0.5;
    audio.thwip();
    return true;
  }

  setCostume(id: string | null) {
    for (const p of this.costumeParts) p.parent?.remove(p);
    this.costumeParts = [];
    this.costume = id;
    if (!id || !this.headBone || !this.neckBone) return;
    // Build in model space at bind pose, then re-parent to the bone keeping transform.
    const savedYaw = this.root.rotation.y, savedPos = this.root.position.clone(), savedScale = this.model.scale.clone();
    this.root.rotation.y = 0;
    this.root.position.set(0, 0, 0);
    this.model.scale.set(1, 1, 1);
    this.mixer.stopAllAction();
    const skinned = this.model.getObjectByProperty("isSkinnedMesh", true) as THREE.SkinnedMesh | undefined;
    skinned?.skeleton.pose();
    this.model.updateMatrixWorld(true);
    const head = new THREE.Vector3(), neck = new THREE.Vector3();
    this.headBone.getWorldPosition(head);
    this.neckBone.getWorldPosition(neck);
    const hs = this.def.id === "dymok" ? 1.12 : 1;
    const grp = new THREE.Group();
    const mat = (c: number, map?: THREE.Texture) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.8, ...(map ? { map } : {}) });
    const neckMid = head.clone().lerp(neck, 0.35);
    const faceDir = new THREE.Vector3(0, 0, 1);
    if (id === "brooklyn" || id === "seeker") {
      const tex = id === "brooklyn" ? fabric(1, "#b3121b", "#e8d7c0") : fabric(2, "#2e6b3a", "#9cc28a");
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.058 * hs * (this.def.id === "dymok" ? 1.25 : 1), 0.016, 8, 20), mat(0xffffff, tex));
      ring.position.copy(neckMid).add(new THREE.Vector3(0, -0.035, -0.01));
      ring.rotation.x = Math.PI / 2 - 0.5;
      const flap = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.07, 3), mat(0xffffff, tex));
      flap.position.copy(ring.position).add(new THREE.Vector3(0, -0.05, 0.05));
      flap.rotation.x = Math.PI;
      grp.add(ring, flap);
      if (id === "brooklyn") {
        const cap = new THREE.Mesh(new THREE.SphereGeometry(0.05 * hs, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(0x1d3f8a));
        cap.position.copy(head).add(new THREE.Vector3(0, 0.09 * hs, -0.035));
        const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.006, 16, 1, false, 0, Math.PI), mat(0x1d3f8a));
        brim.position.copy(cap.position).add(new THREE.Vector3(0, 0, -0.04));
        brim.rotation.y = Math.PI / 2;
        grp.add(cap, brim);
      } else {
        const hat = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.045, 16), mat(0xb99b6b));
        hat.position.copy(head).add(new THREE.Vector3(0, 0.1, -0.03));
        const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.006, 20), mat(0xb99b6b));
        brim.position.copy(hat.position).add(new THREE.Vector3(0, -0.02, 0));
        const band = new THREE.Mesh(new THREE.CylinderGeometry(0.0455, 0.0455, 0.012, 16), mat(0x5a3b1c));
        band.position.copy(hat.position).add(new THREE.Vector3(0, -0.012, 0));
        grp.add(hat, brim, band);
      }
    } else if (id === "nighthero") {
      const m = new THREE.Mesh(new THREE.TorusGeometry(0.075 * hs, 0.012, 8, 24, Math.PI * 1.2), mat(0x111111));
      m.position.copy(head).add(new THREE.Vector3(0, 0.045, 0.02));
      m.rotation.set(0, 0, -Math.PI * 0.1);
      m.rotation.x = 0.2;
      m.lookAt(m.position.clone().add(faceDir));
      m.rotateZ(-Math.PI * 0.1);
      const cape = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.28), new THREE.MeshStandardMaterial({ color: 0x7a0f1d, side: THREE.DoubleSide, roughness: 0.7 }));
      cape.position.copy(neck).add(new THREE.Vector3(0, 0.02, -0.14));
      cape.rotation.x = -Math.PI / 2 + 0.25;
      grp.add(m, cape);
    } else if (id === "star") {
      for (const s of [-1, 1]) {
        const star = new THREE.Mesh(new THREE.TorusGeometry(0.018, 0.004, 6, 5), mat(0xff5fa8));
        star.position.copy(head).add(new THREE.Vector3(s * 0.03, 0.04, 0.085));
        grp.add(star);
      }
      const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.004, 0.004), mat(0xff5fa8));
      bridge.position.copy(head).add(new THREE.Vector3(0, 0.04, 0.086));
      grp.add(bridge);
    }
    this.model.add(grp);
    // collars follow the neck, hats/masks/glasses follow the head
    for (const child of [...grp.children]) {
      (child.position.y < neckMid.y - 0.01 ? this.neckBone : this.headBone).attach(child);
      this.costumeParts.push(child);
    }
    this.model.remove(grp);
    this.root.rotation.y = savedYaw;
    this.root.position.copy(savedPos);
    this.model.scale.copy(savedScale);
    this.current = "";
    this.play("Idle", 0);
  }

  // ------------------------------------------------------------ network puppets
  private remote: { t: number; p: THREE.Vector3; yaw: number; v: number }[] = [];

  pushRemote(p: [number, number, number], yaw: number, anim: string, v: number, sneak: boolean) {
    this.remote.push({ t: performance.now(), p: new THREE.Vector3(...p), yaw, v });
    if (this.remote.length > 20) this.remote.shift();
    this.sneaking = sneak;
    if (anim && anim !== this.current && this.actions[anim]) {
      if (["Jump", "Attack", "Hiss"].includes(anim)) this.actions[anim].reset();
      this.play(anim, 0.15);
    }
  }

  /** Interpolated playback ~100 ms behind the latest packet. */
  updateRemote(dt: number) {
    const buf = this.remote;
    if (buf.length) {
      const t = performance.now() - 100;
      let a = buf[0], b = buf[buf.length - 1];
      for (let i = 0; i < buf.length - 1; i++) {
        if (buf[i].t <= t && buf[i + 1].t >= t) {
          a = buf[i];
          b = buf[i + 1];
          break;
        }
      }
      const k = b.t > a.t ? THREE.MathUtils.clamp((t - a.t) / (b.t - a.t), 0, 1) : 1;
      this.root.position.lerpVectors(a.p, b.p, k);
      let d = b.yaw - a.yaw;
      d = Math.atan2(Math.sin(d), Math.cos(d));
      this.yaw = a.yaw + d * k;
      this.moving = a.v + (b.v - a.v) * k;
    }
    this.root.rotation.y = this.yaw;
    this.syncGait();
    this.mixer.update(dt);
  }
}
