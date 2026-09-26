import * as THREE from "three";
import type { PhysicsWorld } from "../engine/physics";
import * as T from "../engine/textures";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

export interface WindowRow {
  sill: number;
  height: number;
}

export interface FacadeSpec {
  axis: "z" | "x"; // facade plane is perpendicular to this world axis
  plane: number; // world coordinate of the wall surface
  dir: 1 | -1; // outward direction along axis
  from: number; // span along the facade
  to: number;
  top: number; // roof height (cornice)
  bottom?: number; // skin starts here (default 0)
  centers: number[]; // window centres along the facade
  rows: WindowRow[];
  wall: THREE.Material;
  width?: number;
  lit?: number;
  seed?: number;
  custom?: Set<string>; // "<centerIndex>:<row>" openings left empty for bespoke windows
  blank?: (i: number, row: number) => boolean;
  sillColliders?: boolean;
  ac?: number; // chance of a window AC unit (with a collider, handy for parkour)
  frameColor?: number;
  cornice?: boolean;
}

const SKIN = 0.2;
const cache = new Map<string, THREE.Material>();
const m = (k: string, f: () => THREE.Material) => cache.get(k) ?? (cache.set(k, f()), cache.get(k)!);

/**
 * Builds a masonry facade with real depth: a 20 cm skin made of piers and
 * spandrels around recessed window openings, framed sashes, stone sills and
 * lintels with keystones, belt courses, a bracketed cornice and drainpipes.
 * All pieces are tagged for static batching.
 */
export function buildFacade(scene: THREE.Scene, physics: PhysicsWorld, f: FacadeSpec) {
  let seed = f.seed ?? 1;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const ww = f.width ?? 1.1;
  const bottom = f.bottom ?? 0;
  const stoneM = m("stone", () => new THREE.MeshStandardMaterial({ map: T.stone(12), roughness: 0.85 }));
  const frameM = m(`frame${f.frameColor ?? 0xe8e2d4}`, () => new THREE.MeshStandardMaterial({ color: f.frameColor ?? 0xe8e2d4, roughness: 0.6 }));
  const darkGlass = m("dglass", () => new THREE.MeshPhysicalMaterial({ color: 0x0d1118, roughness: 0.05, metalness: 0.0, clearcoat: 1, envMapIntensity: 1.6 }));
  const metalM = m("acmetal", () => new THREE.MeshStandardMaterial({ color: 0xbfc3c6, roughness: 0.45, metalness: 0.6 }));
  const pipeM = m("pipe", () => new THREE.MeshStandardMaterial({ color: 0x3a3d40, roughness: 0.5, metalness: 0.7 }));
  const litMats = [0, 1, 2, 3, 4, 5].map((i) =>
    m(`room${i}`, () => {
      const t = T.roomInterior(i + 1);
      return new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: 1.1, roughness: 0.3 });
    }),
  );

  // local (u along facade, v up, w outward) -> world box
  const toWorld = (u0: number, u1: number, v0: number, v1: number, w0: number, w1: number) => {
    const a = f.plane + f.dir * w0, b = f.plane + f.dir * w1;
    const [p0, p1] = [Math.min(a, b), Math.max(a, b)];
    return f.axis === "z"
      ? new THREE.Box3(new THREE.Vector3(u0, v0, p0), new THREE.Vector3(u1, v1, p1))
      : new THREE.Box3(new THREE.Vector3(p0, v0, u0), new THREE.Vector3(p1, v1, u1));
  };
  const piece = (u0: number, u1: number, v0: number, v1: number, w0: number, w1: number, mat: THREE.Material, collide = false, shadow = true) => {
    if (u1 - u0 < 1e-3 || v1 - v0 < 1e-3) return;
    const bx = toWorld(u0, u1, v0, v1, w0, w1);
    const size = bx.getSize(new THREE.Vector3());
    const g = new THREE.BoxGeometry(size.x, size.y, size.z);
    // world-scaled UVs so brick courses line up across pieces
    const uv = g.attributes.uv as THREE.BufferAttribute;
    const pos = g.attributes.position as THREE.BufferAttribute;
    const nrm = g.attributes.normal as THREE.BufferAttribute;
    const c = bx.getCenter(new THREE.Vector3());
    for (let i = 0; i < uv.count; i++) {
      const px = pos.getX(i) + c.x, py = pos.getY(i) + c.y, pz = pos.getZ(i) + c.z;
      const nx = Math.abs(nrm.getX(i)), ny = Math.abs(nrm.getY(i));
      if (ny > 0.5) uv.setXY(i, px / 2, pz / 2);
      else if (nx > 0.5) uv.setXY(i, pz / 2, py / 2);
      else uv.setXY(i, px / 2, py / 2);
    }
    const mesh = new THREE.Mesh(g, mat);
    mesh.position.copy(c);
    mesh.castShadow = shadow;
    mesh.receiveShadow = true;
    mesh.userData.batch = true;
    scene.add(mesh);
    if (collide) physics.add(bx);
  };
  const plane = (u: number, v: number, w: number, pw: number, ph: number, mat: THREE.Material) => {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(pw, ph), mat);
    const wpos = f.plane + f.dir * w;
    if (f.axis === "z") {
      p.position.set(u, v, wpos);
      p.rotation.y = f.dir > 0 ? 0 : Math.PI;
    } else {
      p.position.set(wpos, v, u);
      p.rotation.y = f.dir > 0 ? Math.PI / 2 : -Math.PI / 2;
    }
    p.userData.batch = true;
    p.receiveShadow = true;
    scene.add(p);
  };

  const rows = [...f.rows].sort((a, b) => a.sill - b.sill);
  const cs = [...f.centers].sort((a, b) => a - b);
  const isOpen = (i: number, r: number) => !(f.blank?.(i, r) ?? false);
  let vPrev = bottom;
  rows.forEach((row, r) => {
    const v0 = row.sill, v1 = row.sill + row.height;
    piece(f.from, f.to, vPrev, v0, 0, SKIN, f.wall); // spandrel below
    let uPrev = f.from;
    cs.forEach((cu, i) => {
      const a = cu - ww / 2, b = cu + ww / 2;
      if (!isOpen(i, r)) return;
      piece(uPrev, a, v0, v1, 0, SKIN, f.wall); // pier
      uPrev = b;
      const key = `${i}:${r}`;
      // stone sill, lintel + keystone
      piece(a - 0.1, b + 0.1, v0 - 0.09, v0, 0, SKIN + 0.12, stoneM, f.sillColliders ?? false);
      piece(a - 0.08, b + 0.08, v1, v1 + 0.22, 0, SKIN + 0.04, stoneM);
      piece(cu - 0.1, cu + 0.1, v1 - 0.04, v1 + 0.26, 0, SKIN + 0.07, stoneM);
      if (f.custom?.has(key)) return;
      // frame, meeting rail, glass set back in the reveal
      piece(a, b, v0, v0 + 0.06, 0.02, 0.1, frameM, false, false);
      piece(a, b, v1 - 0.06, v1, 0.02, 0.1, frameM, false, false);
      piece(a, a + 0.06, v0, v1, 0.02, 0.1, frameM, false, false);
      piece(b - 0.06, b, v0, v1, 0.02, 0.1, frameM, false, false);
      piece(a, b, v0 + row.height * 0.52, v0 + row.height * 0.52 + 0.05, 0.03, 0.09, frameM, false, false);
      const lit = rnd() < (f.lit ?? 0.4);
      plane(cu, (v0 + v1) / 2, 0.05, ww - 0.1, row.height - 0.1, lit ? litMats[Math.floor(rnd() * litMats.length)] : darkGlass);
      if (rnd() < (f.ac ?? 0.12) && row.height > 1.3) {
        piece(cu - 0.34, cu + 0.34, v0 + 0.02, v0 + 0.42, 0.1, SKIN + 0.42, metalM, true);
        piece(cu - 0.3, cu + 0.3, v0 + 0.06, v0 + 0.38, SKIN + 0.42, SKIN + 0.43, pipeM, false, false);
      }
    });
    piece(uPrev, f.to, v0, v1, 0, SKIN, f.wall);
    // blank bays are filled solid
    cs.forEach((cu, i) => {
      if (!isOpen(i, r)) piece(cu - ww / 2, cu + ww / 2, v0, v1, 0, SKIN, f.wall);
    });
    vPrev = v1;
    // belt course between floors
    if (r < rows.length - 1) piece(f.from, f.to, v1 + 0.34, v1 + 0.44, 0, SKIN + 0.06, stoneM);
  });
  piece(f.from, f.to, vPrev, f.top, 0, SKIN, f.wall);
  physics.add(toWorld(f.from, f.to, bottom, f.top, 0, SKIN));
  if (f.cornice !== false) {
    piece(f.from - 0.1, f.to + 0.1, f.top - 0.75, f.top - 0.5, 0, SKIN + 0.1, stoneM);
    piece(f.from - 0.25, f.to + 0.25, f.top - 0.22, f.top, 0, SKIN + 0.5, stoneM, true);
    piece(f.from - 0.2, f.to + 0.2, f.top - 0.3, f.top - 0.22, 0, SKIN + 0.4, stoneM);
    for (let u = f.from + 0.3; u < f.to - 0.2; u += 0.9) piece(u - 0.07, u + 0.07, f.top - 0.5, f.top - 0.22, 0, SKIN + 0.36, stoneM);
  }
  // drainpipes at both ends
  for (const u of [f.from + 0.2, f.to - 0.2]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, f.top - bottom, 8), pipeM);
    const w = f.plane + f.dir * (SKIN + 0.07);
    if (f.axis === "z") p.position.set(u, (f.top + bottom) / 2, w);
    else p.position.set(w, (f.top + bottom) / 2, u);
    p.castShadow = true;
    p.userData.batch = true;
    scene.add(p);
  }
}

/** Evenly spaced window centres that include `anchor` (e.g. a scripted window). */
export function centersThrough(from: number, to: number, bay: number, anchor: number, margin = 0.9) {
  const out: number[] = [];
  const k0 = Math.ceil((from + margin - anchor) / bay), k1 = Math.floor((to - margin - anchor) / bay);
  for (let k = k0; k <= k1; k++) out.push(anchor + k * bay);
  return out;
}

/** Merge tagged static meshes per material: thousands of facade pieces become a few draw calls. */
export function batchStatic(scene: THREE.Scene) {
  const groups = new Map<string, THREE.Mesh[]>();
  scene.updateMatrixWorld(true);
  scene.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh || !mesh.userData.batch || Array.isArray(mesh.material)) return;
    const key = `${(mesh.material as THREE.Material).uuid}|${mesh.castShadow}|${mesh.geometry.index ? 1 : 0}`;
    (groups.get(key) ?? groups.set(key, []).get(key)!).push(mesh);
  });
  for (const list of groups.values()) {
    if (list.length < 2) continue;
    const geos = list.map((ms) => {
      const g = ms.geometry.clone();
      g.applyMatrix4(ms.matrixWorld);
      for (const k of Object.keys(g.attributes)) if (!["position", "normal", "uv"].includes(k)) g.deleteAttribute(k);
      return g;
    });
    const merged = mergeGeometries(geos, false);
    if (!merged) continue;
    const out = new THREE.Mesh(merged, list[0].material);
    out.castShadow = list[0].castShadow;
    out.receiveShadow = true;
    scene.add(out);
    for (const ms of list) {
      ms.parent?.remove(ms);
      ms.geometry.dispose();
    }
    geos.forEach((g) => g.dispose());
  }
}
