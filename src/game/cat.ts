import * as THREE from "three";
import { GLTFLoader, type GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";
import { addFur } from "./fur";
import { moveBody, type Body, type MoveEvents, type PhysicsWorld } from "../engine/physics";
import type { PlayerInput } from "../engine/input";
import { audio } from "../engine/audio";
import { fabric } from "../engine/textures";

export type CatId = "dymok" | "milena" | "pixel" | "karniz" | "plombir";

export interface CatDef {
  id: CatId;
  name: string;
  walk: number;
  run: number;
  jump: number;
  half: number;
  height: number;
  strength: number;
  ability: "dash" | "hiss" | "doublejump" | "none";
  fur: number;
  density: number;
  pitch: number;
  color: string;
}

export const CATS: Record<CatId, CatDef> = {
  dymok: { id: "dymok", name: "Дымок", walk: 1.3, run: 4.3, jump: 5.3, half: 0.16, height: 0.36, strength: 2, ability: "dash", fur: 0.014, density: 360, pitch: 0.72, color: "#5b5d66" },
  milena: { id: "milena", name: "Милена", walk: 1.5, run: 5.1, jump: 6.1, half: 0.1, height: 0.32, strength: 0, ability: "hiss", fur: 0.011, density: 420, pitch: 1.25, color: "#c9ccd3" },
  pixel: { id: "pixel", name: "Пиксель", walk: 1.5, run: 5.2, jump: 5.8, half: 0.11, height: 0.32, strength: 1, ability: "doublejump", fur: 0.008, density: 440, pitch: 1.05, color: "#222" },
  karniz: { id: "karniz", name: "Карниз", walk: 1.4, run: 5.5, jump: 6, half: 0.18, height: 0.4, strength: 2, ability: "none", fur: 0.013, density: 360, pitch: 0.6, color: "#d66a1c" },
  plombir: { id: "plombir", name: "Пломбир", walk: 1, run: 2, jump: 3, half: 0.16, height: 0.36, strength: 0, ability: "none", fur: 0.02, density: 380, pitch: 0.9, color: "#f3f1ea" },
};

const loader = new GLTFLoader();
const gltfCache = new Map<string, Promise<GLTF>>();
export const furWind = { value: 0 };
export const quality = { shells: 12 };

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
    this.model.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      m.castShadow = true;
      const mat = m.material as THREE.MeshStandardMaterial;
      if (mat.name === "eye_iris") {
        m.material = new THREE.MeshPhysicalMaterial({ color: mat.color, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.03, emissive: mat.color, emissiveIntensity: 0.18 });
      } else if (mat.name === "eye_pupil") {
        m.material = new THREE.MeshPhysicalMaterial({ color: 0x050505, roughness: 0.1, clearcoat: 1 });
      } else if (mat.name === "whisker") {
        m.castShadow = false;
      }
    });
    addFur(this.model, { shells: quality.shells, length: this.def.fur, density: this.def.density, tipLighten: this.def.id === "dymok" ? 0.9 : 0.4 }, furWind);
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

  damage(n: number, from?: THREE.Vector3) {
    if (this.invuln > 0 || this.state === "scripted") return false;
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
    let speed = this.sneaking ? this.def.walk * 0.6 : run ? this.def.run : this.def.walk * 1.4;
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
      if (this.current !== "Jump") this.play("Jump", 0.15, 0.8);
      return;
    }
    const v = this.moving;
    if (v < 0.15) this.play(this.sneaking ? "Sneak" : "Idle", 0.25, this.sneaking ? 0 : 1);
    else if (this.sneaking) this.play("Sneak", 0.2, v / 0.9);
    else if (v < 2.6) this.play("Walk", 0.2, v / 1.4);
    else this.play("Run", 0.2, v / 4.5);
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
}
