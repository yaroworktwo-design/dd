import * as THREE from "three";

export interface Collider {
  box: THREE.Box3;
  enabled: boolean;
  tag?: string;
  /** pushable boxes move when a strong cat walks into them */
  pushable?: { mesh: THREE.Object3D; heavy: boolean; limit?: THREE.Box3 };
  /** moving platforms carry what stands on them */
  velocity?: THREE.Vector3;
  /** surfaces a cat can hide under / inside */
  hide?: boolean;
  /** one-way platform: only collides from above */
  oneWay?: boolean;
}

export class PhysicsWorld {
  colliders: Collider[] = [];

  add(box: THREE.Box3, extra: Partial<Collider> = {}) {
    const c: Collider = { box, enabled: true, ...extra };
    this.colliders.push(c);
    return c;
  }

  addFromObject(obj: THREE.Object3D, extra: Partial<Collider> = {}) {
    obj.updateWorldMatrix(true, true);
    return this.add(new THREE.Box3().setFromObject(obj), extra);
  }

  /** Raycast against collider boxes; returns hit distance or Infinity. */
  raycast(origin: THREE.Vector3, dir: THREE.Vector3, maxDist: number, ignoreTag?: string) {
    const ray = new THREE.Ray(origin, dir);
    const hit = new THREE.Vector3();
    let best = maxDist;
    for (const c of this.colliders) {
      if (!c.enabled || c.oneWay || (ignoreTag && c.tag === ignoreTag)) continue;
      if (c.box.containsPoint(origin)) continue;
      if (ray.intersectBox(c.box, hit)) {
        const d = hit.distanceTo(origin);
        if (d < best) best = d;
      }
    }
    return best;
  }

  overlaps(box: THREE.Box3) {
    return this.colliders.some((c) => c.enabled && !c.oneWay && hits(c.box, box));
  }
}

export interface Body {
  pos: THREE.Vector3; // feet centre
  vel: THREE.Vector3;
  half: number; // horizontal half extent
  height: number;
  grounded: boolean;
  ground?: Collider;
  strength: number; // 0 none, 1 light boxes, 2 heavy boxes
  stepHeight: number;
}

const tmp = new THREE.Box3();
const EPS = 1e-3;

/** Strict overlap: touching faces (standing on a floor) do not count. */
export function hits(a: THREE.Box3, b: THREE.Box3) {
  return a.max.x > b.min.x + EPS && a.min.x < b.max.x - EPS &&
    a.max.y > b.min.y + EPS && a.min.y < b.max.y - EPS &&
    a.max.z > b.min.z + EPS && a.min.z < b.max.z - EPS;
}

function bodyBox(b: Body, out: THREE.Box3, p = b.pos) {
  out.min.set(p.x - b.half, p.y, p.z - b.half);
  out.max.set(p.x + b.half, p.y + b.height, p.z + b.half);
  return out;
}

export interface MoveEvents {
  pushed?: Collider;
  blockedHeavy?: Collider;
  landedSpeed?: number;
}

export function moveBody(world: PhysicsWorld, b: Body, dt: number, gravity: number, ev: MoveEvents = {}) {
  const steps = Math.max(1, Math.ceil(dt / (1 / 120)));
  const h = dt / steps;
  for (let s = 0; s < steps; s++) {
    if (b.grounded && b.ground?.velocity) b.pos.addScaledVector(b.ground.velocity, h);
    b.vel.y -= gravity * h;
    const wasGrounded = b.grounded;
    const prevVy = b.vel.y;
    b.grounded = false;
    b.ground = undefined;
    for (const axis of ["x", "z"] as const) {
      const d = b.vel[axis] * h;
      if (d === 0) continue;
      b.pos[axis] += d;
      bodyBox(b, tmp);
      for (const c of world.colliders) {
        if (!c.enabled || c.oneWay || !hits(c.box, tmp)) continue;
        const rise = c.box.max.y - b.pos.y;
        if (rise > 0 && rise <= b.stepHeight && wasGrounded) {
          // step up if there is headroom
          const trial = b.pos.clone();
          trial.y = c.box.max.y + 0.001;
          if (!world.overlaps(bodyBox(b, new THREE.Box3(), trial))) {
            b.pos.y = trial.y;
            bodyBox(b, tmp);
            continue;
          }
        }
        if (c.pushable && tryPush(world, c, b, axis, d)) {
          ev.pushed = c;
          continue;
        }
        if (c.pushable && c.pushable.heavy) ev.blockedHeavy = c;
        if (d > 0) b.pos[axis] = c.box.min[axis] - b.half - 1e-4;
        else b.pos[axis] = c.box.max[axis] + b.half + 1e-4;
        b.vel[axis] = 0;
        bodyBox(b, tmp);
      }
    }
    b.pos.y += b.vel.y * h;
    bodyBox(b, tmp);
    for (const c of world.colliders) {
      // vertical pass: strict on x/z, inclusive on y so resting contact is kept
      if (!c.enabled) continue;
      const bx = c.box;
      if (!(tmp.max.x > bx.min.x + EPS && tmp.min.x < bx.max.x - EPS && tmp.max.z > bx.min.z + EPS &&
        tmp.min.z < bx.max.z - EPS && tmp.min.y < bx.max.y && tmp.max.y > bx.min.y + EPS)) continue;
      if (c.oneWay && (b.vel.y > 0 || b.pos.y - b.vel.y * h < c.box.max.y - 0.05)) continue;
      if (b.vel.y <= 0 && b.pos.y - b.vel.y * h >= c.box.max.y - 0.08) {
        b.pos.y = c.box.max.y + 1e-4;
        if (!wasGrounded && prevVy < -3) ev.landedSpeed = -prevVy;
        b.vel.y = 0;
        b.grounded = true;
        b.ground = c;
      } else if (b.vel.y > 0) {
        b.pos.y = c.box.min.y - b.height - 1e-4;
        b.vel.y = 0;
      } else {
        // penetrating sideways while falling: resolve on the shallowest axis
        const dx1 = tmp.max.x - c.box.min.x, dx2 = c.box.max.x - tmp.min.x;
        const dz1 = tmp.max.z - c.box.min.z, dz2 = c.box.max.z - tmp.min.z;
        const m = Math.min(dx1, dx2, dz1, dz2);
        const up = bx.max.y - b.pos.y;
        // deep overlap (e.g. a platform rising into us): pop on top instead of flinging sideways
        if (m > 0.3 && up < 0.5) {
          b.pos.y = bx.max.y + 1e-4;
          b.vel.y = Math.max(0, b.vel.y);
          b.grounded = true;
          b.ground = c;
        } else if (m === dx1) b.pos.x -= dx1;
        else if (m === dx2) b.pos.x += dx2;
        else if (m === dz1) b.pos.z -= dz1;
        else b.pos.z += dz2;
      }
      bodyBox(b, tmp);
    }
  }
  return ev;
}

function tryPush(world: PhysicsWorld, c: Collider, b: Body, axis: "x" | "z", d: number) {
  const p = c.pushable!;
  if (b.strength < (p.heavy ? 2 : 1) || !b.grounded && Math.abs(b.vel.y) > 0.1) return false;
  const moved = c.box.clone();
  const dd = d * 0.6;
  moved.min[axis] += dd;
  moved.max[axis] += dd;
  if (p.limit && !p.limit.containsBox(moved)) return false;
  c.enabled = false;
  const blocked = world.overlaps(moved);
  c.enabled = true;
  if (blocked) return false;
  c.box.copy(moved);
  p.mesh.position[axis] += dd;
  b.pos[axis] -= d - dd;
  return true;
}
