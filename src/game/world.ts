import * as THREE from "three";
import { PhysicsWorld, type Collider } from "../engine/physics";
import * as T from "../engine/textures";
import { batchStatic, buildFacade, centersThrough } from "./facade";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";

export interface Interactable {
  id: string;
  pos: THREE.Vector3;
  radius: number;
  prompt: string;
  enabled: boolean;
  who?: string[]; // restrict to cat ids
}

export interface Pickup {
  mesh: THREE.Object3D;
  pos: THREE.Vector3;
  value: number;
  taken: boolean;
  id: string;
}

export interface Checkpoint {
  id: string;
  pos: THREE.Vector3;
  name: string;
  mesh: THREE.Object3D;
}

export interface Region {
  name: string;
  music: string;
  box: THREE.Box3;
}

export interface Pigeon {
  mesh: THREE.Object3D;
  home: THREE.Vector3;
  vel: THREE.Vector3;
  flying: number;
}

export interface Car {
  mesh: THREE.Object3D;
  lane: number;
  speed: number;
  collider: Collider;
}

const mats = new Map<string, THREE.Material>();
function mat(key: string, make: () => THREE.Material) {
  if (!mats.has(key)) mats.set(key, make());
  return mats.get(key)!;
}

/** Scale box UVs to world metres so textures tile at a constant density. */
function worldUV(g: THREE.BoxGeometry, sx: number, sy: number, sz: number, tile: number) {
  const uv = g.attributes.uv as THREE.BufferAttribute;
  // face order: +x, -x, +y, -y, +z, -z ; 4 verts each
  const dims = [[sz, sy], [sz, sy], [sx, sz], [sx, sz], [sx, sy], [sx, sy]];
  for (let f = 0; f < 6; f++)
    for (let v = 0; v < 4; v++) {
      const i = f * 4 + v;
      uv.setXY(i, (uv.getX(i) * dims[f][0]) / tile, (uv.getY(i) * dims[f][1]) / tile);
    }
  uv.needsUpdate = true;
}

export class World {
  scene: THREE.Scene;
  physics = new PhysicsWorld();
  anchors: THREE.Vector3[] = [];
  interactables: Interactable[] = [];
  pickups: Pickup[] = [];
  checkpoints: Checkpoint[] = [];
  regions: Region[] = [];
  pigeons: Pigeon[] = [];
  cars: Car[] = [];
  animated: ((t: number, dt: number) => void)[] = [];
  spawn: Record<string, THREE.Vector3> = {};
  // puzzle objects
  grate!: { mesh: THREE.Mesh; collider: Collider; state: "stuck" | "shifted" | "open" };
  elevator!: { mesh: THREE.Group; collider: Collider; y: number; target: number; bottom: number; top: number; moving: boolean };
  coopDoor!: THREE.Object3D;
  window!: THREE.Object3D;
  readonly windowOpenY = 5.15;
  readonly windowClosedY = 4.34;
  ball!: THREE.Mesh;
  rain!: THREE.LineSegments;
  sun!: THREE.DirectionalLight;
  bossArena = new THREE.Box3(new THREE.Vector3(21.3, 12, -19.7), new THREE.Vector3(30.7, 20, 5.7));
  hideSpots: THREE.Box3[] = [];
  karnizSpawn = new THREE.Vector3(26, 12.5, -6);
  plombirPos = new THREE.Vector3(-19.6, 1.05, 0);
  lights: THREE.PointLight[] = [];
  truck!: THREE.Group;
  carrier!: THREE.Group;
  cardboard!: THREE.Mesh;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  // ------------------------------------------------------------ helpers
  box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, m: THREE.Material | null, collide = true, extra: Partial<Collider> = {}, tile = 2) {
    const sx = x1 - x0, sy = y1 - y0, sz = z1 - z0;
    let mesh: THREE.Mesh | null = null;
    if (m) {
      const g = new THREE.BoxGeometry(sx, sy, sz);
      worldUV(g, sx, sy, sz, tile);
      mesh = new THREE.Mesh(g, m);
      mesh.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
      mesh.castShadow = sy > 0.05 && Math.max(sx, sz) < 40;
      mesh.receiveShadow = true;
      mesh.userData.batch = true;
      this.scene.add(mesh);
    }
    let collider: Collider | undefined;
    if (collide) collider = this.physics.add(new THREE.Box3(new THREE.Vector3(x0, y0, z0), new THREE.Vector3(x1, y1, z1)), extra);
    return { mesh, collider };
  }

  private M = {
    brickRed: () => mat("brickRed", () => new THREE.MeshStandardMaterial({ map: T.brick("#8a3b2a", 1), bumpMap: T.brickBump(), bumpScale: 2, roughness: 0.9 })),
    brickBrown: () => mat("brickBrown", () => new THREE.MeshStandardMaterial({ map: T.brick("#6e4630", 2), bumpMap: T.brickBump(), bumpScale: 2, roughness: 0.9 })),
    brickYellow: () => mat("brickYellow", () => new THREE.MeshStandardMaterial({ map: T.brick("#a0784a", 3), bumpMap: T.brickBump(), bumpScale: 2, roughness: 0.9 })),
    concrete: () => mat("concrete", () => new THREE.MeshStandardMaterial({ map: T.concrete(2, 130), roughness: 0.95 })),
    darkConcrete: () => mat("dconcrete", () => new THREE.MeshStandardMaterial({ map: T.concrete(3, 85), roughness: 0.95 })),
    asphalt: () => mat("asphalt", () => new THREE.MeshStandardMaterial({ map: T.asphalt(), roughness: 0.85 })),
    wood: () => mat("wood", () => new THREE.MeshStandardMaterial({ map: T.wood(4), roughness: 0.8 })),
    crate: () => mat("crate", () => new THREE.MeshStandardMaterial({ map: T.wood(7, "#8b6a3e"), roughness: 0.8 })),
    metal: () => mat("metal", () => new THREE.MeshStandardMaterial({ map: T.metal(5), roughness: 0.55, metalness: 0.6 })),
    ironBlack: () => mat("iron", () => new THREE.MeshStandardMaterial({ color: 0x1c1d20, roughness: 0.5, metalness: 0.8 })),
    dumpster: () => mat("dumpster", () => new THREE.MeshStandardMaterial({ map: T.metal(6, "#2f5a3a"), roughness: 0.6, metalness: 0.4 })),
    tar: () => mat("tar", () => new THREE.MeshStandardMaterial({ map: T.roofTar(), roughness: 0.95 })),
    tiles: () => mat("tiles", () => new THREE.MeshStandardMaterial({ map: T.tiles(), roughness: 0.4 })),
    glassLit: () => mat("glassLit", () => {
      const t = T.windowPane(true);
      return new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: 0.9, roughness: 0.2 });
    }),
    glassDark: () => mat("glassDark", () => new THREE.MeshStandardMaterial({ map: T.windowPane(false), roughness: 0.12, metalness: 0.3, envMapIntensity: 0.6 })),
    trim: () => mat("trim", () => new THREE.MeshStandardMaterial({ color: 0xd8cfc0, roughness: 0.8 })),
  };

  // ------------------------------------------------------------ build
  build() {
    this.buildGround();
    this.buildNorthBuilding();
    this.buildWestBuildingAndShop();
    this.buildEastBuilding();
    this.buildYardProps();
    this.buildFireEscape();
    this.buildBasement();
    this.buildRoofA();
    this.buildRoofB();
    this.buildStreet();
    this.buildBrownstones();
    this.buildSkyline();
    this.buildRain();
    this.regions.push(
      { name: "Лавка Пломбира", music: "shop", box: new THREE.Box3(new THREE.Vector3(-21, 0, -4), new THREE.Vector3(-15.2, 3, 4)) },
      { name: "Подвал", music: "basement", box: new THREE.Box3(new THREE.Vector3(-13, -3.6, -20), new THREE.Vector3(7, -0.4, -9.4)) },
      { name: "Крыша Карниза", music: "roofs", box: new THREE.Box3(new THREE.Vector3(20.5, 11.5, -21), new THREE.Vector3(32, 30, 7)) },
      { name: "Крыши Бруклина", music: "roofs", box: new THREE.Box3(new THREE.Vector3(-16, 8.5, -21), new THREE.Vector3(21, 30, -9)) },
      { name: "Двор", music: "yard", box: new THREE.Box3(new THREE.Vector3(-60, -2, -60), new THREE.Vector3(60, 30, 60)) },
    );
    this.spawn.dymok = new THREE.Vector3(8.8, 3.62, -11.4);
    this.spawn.milenaStreet = new THREE.Vector3(-4, 0.02, 16.3);
    this.spawn.milenaBasement = new THREE.Vector3(3.5, -2.98, -17.5);
    this.spawn.pixel = new THREE.Vector3(2, 0.02, 10.5);
    batchStatic(this.scene);
  }

  private buildGround() {
    // yard slab with a pit (areaway) for the basement stairs at x -2..2, z -12..-9.5
    const c = this.M.concrete();
    // no slab above the basement footprint (x -13.5..7.5, z -20.5..-12.3): the lift shaft passes through
    this.box(-60, -0.6, -9.5, 60, 0, 12, c);
    this.box(-60, -0.6, -40, -13.5, 0, -9.5, c);
    this.box(7.5, -0.6, -40, 60, 0, -9.5, c);
    this.box(-13.5, -0.6, -40, 7.5, 0, -20.5, c);
    this.box(-13.5, -0.6, -12.3, -2, 0, -9.5, c);
    this.box(2, -0.6, -12.3, 7.5, 0, -9.5, c);
    this.box(-60, -0.6, 25, 60, 0, 60, c);
    // street + sidewalk
    this.box(-60, -0.6, 12, 60, 0.12, 14.5, this.M.concrete()); // sidewalk (kerb)
    this.box(-60, -0.6, 14.5, 60, -0.02, 23, this.M.asphalt(), true, {}, 6);
    this.box(-60, -0.6, 23, 60, 0.12, 25, this.M.concrete());
    // lane markings
    const lm = mat("lane", () => new THREE.MeshStandardMaterial({ color: 0xe8c040, roughness: 0.6 }));
    for (let x = -58; x < 60; x += 4) this.box(x, -0.02, 18.65, x + 2, 0.0, 18.85, lm, false);
    // puddles: mirror-like after the rain
    const pm = mat("puddle", () => new THREE.MeshPhysicalMaterial({ color: 0x223040, roughness: 0.04, metalness: 0.0, transparent: true, opacity: 0.8, clearcoat: 1 }));
    for (const [x, z, r] of [[-4, 3, 1.2], [6, -3, 0.8], [-9, -4, 1.0], [11, 8, 0.7], [3, 18, 1.4]]) {
      const p = new THREE.Mesh(new THREE.CircleGeometry(r, 24), pm);
      p.rotation.x = -Math.PI / 2;
      p.scale.y = 0.6;
      p.position.set(x, z > 14 ? 0.0 : 0.012, z);
      p.receiveShadow = true;
      this.scene.add(p);
    }
  }

  private buildNorthBuilding() {
    const b = this.M.brickRed();
    // leaves the basement (y<0), and an elevator shaft x -11..-9, z -19..-17
    this.box(-15, 0, -20, -11, 12, -12, b);
    this.box(-9, 0, -20, 15, 12, -12, b);
    this.box(-11, 0, -17, -9, 12, -12, b);
    this.box(-11, 0, -20, -9, 12, -19.2, b);
    buildFacade(this.scene, this.physics, {
      axis: "z", plane: -12, dir: 1, from: -15, to: 15, top: 12, seed: 3, lit: 0.45, ac: 0.15, sillColliders: true,
      centers: centersThrough(-15, 15, 2.6, 8.8),
      rows: [{ sill: 0.9, height: 1.7 }, { sill: 3.9, height: 1.7 }, { sill: 7.1, height: 1.7 }, { sill: 10.2, height: 1.1 }],
      wall: this.M.brickRed(), custom: new Set([`${centersThrough(-15, 15, 2.6, 8.8).indexOf(8.8)}:1`]),
      // keep the basement areaway and the fire-escape awning clear of ground-floor windows
      blank: (i, r) => r === 0 && [-1.6, 1.0, 6.2].includes(+centersThrough(-15, 15, 2.6, 8.8)[i].toFixed(1)),
    });
    // Dymok's apartment window: warm room, a sash the wind can slam shut
    const room = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.6), mat("aptroom", () => {
      const t = T.roomInterior(9);
      return new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: 1.3 });
    }));
    room.position.set(8.8, 4.75, -11.97);
    const frameM = mat("aptframe", () => new THREE.MeshStandardMaterial({ color: 0xe8e2d4, roughness: 0.6 }));
    for (const [w, h, x, y] of [[1.1, 0.06, 8.8, 3.93], [1.1, 0.06, 8.8, 5.57], [0.06, 1.7, 8.28, 4.75], [0.06, 1.7, 9.32, 4.75]]) {
      const f = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.08), frameM);
      f.position.set(x, y, -11.94);
      this.scene.add(f);
    }
    const pane = new THREE.Group();
    const glass = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.78, 0.02), mat("pane", () => new THREE.MeshPhysicalMaterial({ color: 0xa9c1d4, roughness: 0.05, transparent: true, opacity: 0.28 })));
    const sash = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.8, 0.05), frameM);
    sash.scale.set(1, 1, 1);
    const inner = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.7, 0.06), glass.material);
    pane.add(glass, inner);
    pane.add(new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.05, 0.05), frameM).translateY(0.38), new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.05, 0.05), frameM).translateY(-0.38));
    pane.position.set(8.8, this.windowOpenY, -11.9);
    this.window = pane;
    this.scene.add(room, pane);
    // flower box under the window
    const pot = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.2, 0.25), this.M.wood());
    pot.position.set(8.8, 3.72, -11.7);
    this.scene.add(pot);
    // basement door in the pit
    const door = this.M.darkConcrete();
    this.box(-2, -3, -12.3, -0.6, 0, -12, door, true);
    this.box(0.6, -3, -12.3, 2, 0, -12, door, true);
    this.box(-0.6, -0.8, -12.3, 0.6, 0, -12, door, true);
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.3), new THREE.MeshBasicMaterial({ map: T.sign("ПОДВАЛ", "#243040", "#9fd4ff", 256, 64) }));
    plate.position.set(0, -0.55, -11.98);
    this.scene.add(plate);
  }

  private buildWestBuildingAndShop() {
    const b = this.M.brickYellow();
    // shop room interior x -21..-15.3, z -4..4, y 0..3 ; door at z -0.6..0.6
    this.box(-24, 0, -20, -15, 12, -4, b);
    this.box(-24, 0, 4, -15, 12, 12, b);
    this.box(-24, 3, -4, -15, 12, 4, b);
    this.box(-24, 0, -4, -21, 3, 4, b);
    this.box(-15.3, 0, -4, -15, 3, -0.6, b);
    this.box(-15.3, 0, 0.6, -15, 3, 4, b);
    this.box(-15.3, 2.2, -0.6, -15, 3, 0.6, b);
    buildFacade(this.scene, this.physics, {
      axis: "x", plane: -15, dir: 1, from: -20, to: 12, top: 12, bottom: 3.05, seed: 7, lit: 0.5, ac: 0.1,
      centers: centersThrough(-20, 12, 2.4, 0), rows: [{ sill: 4.1, height: 1.7 }, { sill: 7.3, height: 1.7 }, { sill: 10.2, height: 1.1 }],
      wall: this.M.brickYellow(), frameColor: 0x2f4a3a,
    });
    // shop windows (big display)
    for (const zc of [-2.4, 2.4]) {
      const w = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.6), this.M.glassLit());
      w.position.set(-14.97, 1.4, zc);
      w.rotation.y = Math.PI / 2;
      this.scene.add(w);
    }
    // awning + neon
    const aw = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.08, 8.4), mat("awning", () => new THREE.MeshStandardMaterial({ map: T.fabric(3, "#1f5f8b", "#f2efe6"), roughness: 0.8 })));
    aw.position.set(-14.3, 2.7, 0);
    aw.rotation.z = -0.25;
    aw.castShadow = true;
    this.scene.add(aw);
    const neon = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 0.8), new THREE.MeshBasicMaterial({ map: T.sign("РЫБА • FISH", "#0b0b12", "#5ff3ff"), toneMapped: false }));
    neon.position.set(-14.76, 3.55, 0);
    neon.rotation.y = Math.PI / 2;
    this.scene.add(neon);
    this.animated.push((t) => {
      // occasional neon flicker
      const f = Math.sin(t * 23) > 0.97 || (t % 7 > 6.8) ? 0.25 : 1;
      (neon.material as THREE.MeshBasicMaterial).color.setScalar(f);
    });
    // interior
    this.box(-21, -0.05, -4, -15.3, 0.005, 4, mat("planks", () => new THREE.MeshStandardMaterial({ map: T.planks(), roughness: 0.55, envMapIntensity: 0.6 })), false, {}, 2.5);
    // wainscot + tin-ceiling trim to read as an old Brooklyn corner shop
    const wains = mat("wainscot", () => new THREE.MeshStandardMaterial({ color: 0x3c5a48, roughness: 0.6 }));
    this.box(-20.99, 0, -3.99, -20.9, 1.0, 3.99, wains, false);
    this.box(-20.99, 2.85, -3.99, -15.31, 3.0, 3.99, mat("tin", () => new THREE.MeshStandardMaterial({ color: 0xd9d2c0, roughness: 0.35, metalness: 0.4 })), false);
    const counter = this.box(-20.4, 0, -1.6, -19.0, 1.0, 1.6, this.M.wood());
    counter.mesh!.castShadow = true;
    for (const z of [-3.6, 3.2]) {
      this.box(-20.8, 0, z, -16, 2.2, z + 0.4, this.M.wood());
      for (let i = 0; i < 10; i++)
        for (const y of [0.6, 1.2, 1.8]) {
          const can = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.1, 12), mat(`can${i % 3}`, () => new THREE.MeshStandardMaterial({ color: [0xc0392b, 0x2e86c1, 0xf1c40f][i % 3], metalness: 0.7, roughness: 0.3 })));
          can.position.set(-20.5 + i * 0.45, y + 0.05, z + 0.2);
          this.scene.add(can);
        }
    }
    // mirror for trying costumes on
    const mirror = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.6), new THREE.MeshPhysicalMaterial({ color: 0xcfd8e0, metalness: 1, roughness: 0.03 }));
    mirror.position.set(-20.95, 1.1, 2.4);
    mirror.rotation.y = Math.PI / 2;
    this.scene.add(mirror);
    const lamp = new THREE.PointLight(0xffd9a0, 6, 9, 1.6);
    lamp.position.set(-18, 2.7, 0);
    this.scene.add(lamp);
    this.lights.push(lamp);
    this.interactables.push({ id: "shop", pos: new THREE.Vector3(-18.6, 0, 0), radius: 1.3, prompt: "Поговорить с Пломбиром (магазин)", enabled: true });
    const fish = new THREE.Mesh(new THREE.PlaneGeometry(2, 0.5), new THREE.MeshBasicMaterial({ map: T.sign("ЛАВКА ПЛОМБИРА", "#f6efe0", "#1f5f8b", 512, 128) }));
    fish.position.set(-20.95, 2.5, -0.2);
    fish.rotation.y = Math.PI / 2;
    this.scene.add(fish);
  }

  private buildEastBuilding() {
    const b = this.M.brickBrown();
    this.box(21, 0, -20, 31, 12.5, 6, b);
    buildFacade(this.scene, this.physics, {
      axis: "x", plane: 21, dir: -1, from: -20, to: 6, top: 12.5, seed: 11, lit: 0.55, ac: 0.2,
      centers: centersThrough(-20, 6, 2.5, -7), rows: [{ sill: 0.9, height: 1.7 }, { sill: 4.1, height: 1.7 }, { sill: 7.3, height: 1.7 }, { sill: 10.4, height: 1.2 }],
      wall: this.M.brickBrown(), frameColor: 0x1d2a3a,
    });
    // alley fence between yard and alley with a hole cats can use
    const fence = mat("chain", () => new THREE.MeshStandardMaterial({ color: 0x8a9096, metalness: 0.8, roughness: 0.4, transparent: true, opacity: 0.55 }));
    this.box(15, 0, -12, 15.08, 2.4, 3, fence);
    this.box(15, 0.3, 3, 15.08, 2.4, 3.5, fence);
    this.box(15, 0, 3.5, 15.08, 2.4, 12, fence);
    // alley dumpsters as a parkour way up nowhere (fun dead end with fish)
    this.box(17, 0, -8, 19, 1.3, -6.5, this.M.dumpster());
  }

  private dumpster(x: number, z: number, rot = 0) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.15, 1.2), this.M.dumpster());
    body.position.y = 0.6;
    const lid = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.08, 1.25), mat("lid", () => new THREE.MeshStandardMaterial({ color: 0x1f3a26, roughness: 0.6 })));
    lid.position.y = 1.22;
    lid.rotation.x = -0.05;
    g.add(body, lid);
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    g.traverse((o) => ((o as THREE.Mesh).castShadow = true));
    this.scene.add(g);
    this.box(x - 0.9, 0, z - 0.6, x + 0.9, 1.26, z + 0.6, null);
  }

  crate(x: number, y: number, z: number, s = 0.6, pushable = false, heavy = false, limit?: THREE.Box3) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), this.M.crate());
    m.position.set(x, y + s / 2, z);
    m.castShadow = m.receiveShadow = true;
    this.scene.add(m);
    const box = new THREE.Box3(new THREE.Vector3(x - s / 2, y, z - s / 2), new THREE.Vector3(x + s / 2, y + s, z + s / 2));
    return this.physics.add(box, pushable ? { pushable: { mesh: m, heavy, limit } } : {});
  }

  private fishPickup(x: number, y: number, z: number, value = 1) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 8), mat("fishgold", () => new THREE.MeshStandardMaterial({ color: 0xffb627, emissive: 0xff8a00, emissiveIntensity: 0.6, metalness: 0.6, roughness: 0.3 })));
    body.scale.set(1.6, 0.9, 0.5);
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.08, 3), body.material);
    tail.rotation.z = Math.PI / 2;
    tail.position.x = -0.13;
    g.add(body, tail);
    if (value > 1) g.scale.setScalar(1.6);
    g.position.set(x, y + 0.25, z);
    this.scene.add(g);
    this.pickups.push({ mesh: g, pos: g.position.clone(), value, taken: false, id: `fish_${this.pickups.length}` });
  }

  private checkpoint(id: string, name: string, x: number, y: number, z: number) {
    const g = new THREE.Group();
    const bed = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.1, 10, 24), mat("bed", () => new THREE.MeshStandardMaterial({ color: 0xc0504d, roughness: 0.9 })));
    bed.rotation.x = Math.PI / 2;
    bed.position.y = 0.08;
    const cushion = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.06, 20), mat("cush", () => new THREE.MeshStandardMaterial({ color: 0xf1e2c4, roughness: 1 })));
    cushion.position.y = 0.04;
    const glow = new THREE.Mesh(new THREE.RingGeometry(0.4, 0.46, 32), new THREE.MeshBasicMaterial({ color: 0x9cf6ff, transparent: true, opacity: 0.6, side: THREE.DoubleSide }));
    glow.rotation.x = -Math.PI / 2;
    glow.position.y = 0.02;
    g.add(bed, cushion, glow);
    g.position.set(x, y, z);
    this.scene.add(g);
    this.animated.push((t) => glow.scale.setScalar(1 + 0.08 * Math.sin(t * 3)));
    this.checkpoints.push({ id, name, pos: g.position.clone(), mesh: g });
  }

  private buildYardProps() {
    // Parkour route: crate -> dumpster -> fence -> awning -> fire escape
    this.crate(2.1, 0, -8.2, 0.62);
    this.dumpster(3.9, -9.9);
    this.box(5.3, 0, -11.95, 5.45, 2.0, -8.0, this.M.wood()); // fence you can walk along
    for (let z = -11.8; z < -8; z += 0.5) this.box(5.28, 0, z, 5.47, 2.08, z + 0.12, this.M.wood(), false);
    const aw = this.box(5.45, 2.72, -12, 7.2, 2.8, -10.9, mat("awning2", () => new THREE.MeshStandardMaterial({ map: T.fabric(4, "#a8322d", "#efe6d6"), roughness: 0.8 })));
    aw.mesh!.castShadow = true;
    // second dumpster + crates cluster (hiding, fish)
    this.dumpster(-6.5, -10.3);
    this.crate(-8.2, 0, -10.6, 0.7);
    this.crate(-8.2, 0.7, -10.6, 0.5);
    this.crate(-9.0, 0, -10.2, 0.6);
    // cardboard box: the best hiding spot a cat can ask for
    const cb = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.45, 0.55), mat("cardboard", () => new THREE.MeshStandardMaterial({ color: 0xb08a58, roughness: 1 })));
    cb.position.set(-10, 0.225, 6);
    cb.castShadow = true;
    this.scene.add(cb);
    this.cardboard = cb;
    this.interactables.push({ id: "cardboard", pos: new THREE.Vector3(-10, 0, 6), radius: 0.9, prompt: "Залезть в коробку", enabled: true });
    // parked car you can hide under (collider sits above cat height when sneaking)
    this.parkedCar(8, 4, 0x7b1e22);
    // bench, tree, lamp
    this.box(-4, 0.42, 7, -2, 0.5, 7.5, this.M.wood());
    this.box(-3.9, 0, 7.1, -3.8, 0.42, 7.4, this.M.ironBlack(), false);
    this.box(-2.2, 0, 7.1, -2.1, 0.42, 7.4, this.M.ironBlack(), false);
    this.tree(-7, 3);
    this.tree(10, -6);
    this.streetLamp(0, 11.2);
    this.streetLamp(-12, -2);
    // laundry lines swaying above the yard
    this.laundry(new THREE.Vector3(-14.9, 6.5, -6), new THREE.Vector3(-3, 7, -11.9));
    this.laundry(new THREE.Vector3(-14.9, 9.5, 2), new THREE.Vector3(2, 9.8, -11.9));
    // flower pots + bikes
    for (const [x, z] of [[-14, 9], [-13.2, 9.4], [12, 10.8]]) {
      const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.18, 0.4, 12), mat("pot", () => new THREE.MeshStandardMaterial({ color: 0xa0522d, roughness: 0.9 })));
      pot.position.set(x, 0.2, z);
      const bush = new THREE.Mesh(new THREE.IcosahedronGeometry(0.35, 1), mat("leaf", () => new THREE.MeshStandardMaterial({ color: 0x3f7a3a, roughness: 0.9, flatShading: true })));
      bush.position.set(x, 0.6, z);
      pot.castShadow = bush.castShadow = true;
      this.scene.add(pot, bush);
      this.box(x - 0.25, 0, z - 0.25, x + 0.25, 0.4, z + 0.25, null);
    }
    // pigeons in the yard
    for (let i = 0; i < 7; i++) this.pigeon(new THREE.Vector3(-1 + Math.cos(i * 1.7) * 2.5, 0, 2 + Math.sin(i * 2.3) * 2));
    // fish around the yard
    const fish: [number, number, number][] = [[2.1, 0.62, -8.2], [3.9, 1.26, -9.9], [5.37, 2, -9.5], [6.3, 2.8, -11.4], [-8.2, 1.2, -10.6], [-10, 0, 8], [8, 0, 4], [-3, 0.5, 7.2], [17.5, 1.3, -7.2], [0, 0, 5], [-12, 0, 10], [12, 0, -2], [18, 0, 8], [-6.5, 1.26, -10.3]];
    fish.forEach(([x, y, z]) => this.fishPickup(x, y, z));
    this.checkpoint("yard", "Двор", -1.5, 0, 9);
    // home: Dymok's ball
    const ballMat = new THREE.MeshStandardMaterial({ map: this.ballTexture(), roughness: 0.5 });
    this.ball = new THREE.Mesh(new THREE.SphereGeometry(0.07, 20, 14), ballMat);
    this.ball.castShadow = true;
    this.ball.position.set(8.3, 3.67, -11.5);
    this.scene.add(this.ball);
  }

  private ballTexture() {
    const c = document.createElement("canvas");
    c.width = 128;
    c.height = 64;
    const g = c.getContext("2d")!;
    ["#f4d31b", "#7ac943", "#f7931e"].forEach((col, i) => {
      g.fillStyle = col;
      g.fillRect(0, (i * 64) / 3, 128, 64 / 3 + 1);
    });
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }

  /** Sedan built from rounded shells: body, glasshouse with pillars, chrome, lamps, wheels with rims. */
  carModel(color: number, taxi = false) {
    const g = new THREE.Group();
    const paint = new THREE.MeshPhysicalMaterial({ color, metalness: 0.55, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.04 });
    const glass = mat("carglass", () => new THREE.MeshPhysicalMaterial({ color: 0x0b0f14, roughness: 0.04, metalness: 0.2, clearcoat: 1, envMapIntensity: 1.8 }));
    const chrome = mat("chrome", () => new THREE.MeshStandardMaterial({ color: 0xdfe3e6, metalness: 1, roughness: 0.18 }));
    const rubber = mat("tyre", () => new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.9 }));
    const trim = mat("cartrim", () => new THREE.MeshStandardMaterial({ color: 0x111214, roughness: 0.6 }));
    const add = (geo: THREE.BufferGeometry, m: THREE.Material, x: number, y: number, z: number) => {
      const o = new THREE.Mesh(geo, m);
      o.position.set(x, y, z);
      g.add(o);
      return o;
    };
    add(new RoundedBoxGeometry(4.3, 0.62, 1.82, 4, 0.22), paint, 0, 0.66, 0);
    add(new RoundedBoxGeometry(4.34, 0.16, 1.84, 2, 0.06), trim, 0, 0.42, 0); // rocker/bumper band
    add(new RoundedBoxGeometry(2.25, 0.62, 1.62, 4, 0.2), glass, -0.25, 1.22, 0);
    add(new RoundedBoxGeometry(2.0, 0.08, 1.58, 2, 0.04), paint, -0.25, 1.55, 0); // roof skin
    for (const px of [-1.3, -0.25, 0.8]) add(new THREE.BoxGeometry(0.08, 0.55, 1.64), paint, px, 1.2, 0); // pillars
    for (const s of [-1, 1]) {
      add(new RoundedBoxGeometry(0.1, 0.12, 1.7, 2, 0.04), chrome, s * 2.17, 0.5, 0); // bumpers
      const lamp = mat(s > 0 ? "headlamp" : "taillamp", () => new THREE.MeshStandardMaterial({ color: s > 0 ? 0xffffff : 0x550000, emissive: s > 0 ? 0xfff0c8 : 0xff2a1a, emissiveIntensity: s > 0 ? 2.2 : 1.4 }));
      for (const z of [-0.62, 0.62]) add(new RoundedBoxGeometry(0.06, 0.14, 0.34, 2, 0.03), lamp, s * 2.16, 0.78, z);
      add(new THREE.BoxGeometry(0.12, 0.08, 0.14), paint, 0.55, 1.02, s * 0.93); // mirrors
    }
    add(new THREE.BoxGeometry(0.04, 0.16, 0.9), chrome, 2.16, 0.66, 0); // grille
    for (const [wx, wz] of [[-1.35, 0.82], [1.35, 0.82], [-1.35, -0.82], [1.35, -0.82]]) {
      const tyre = add(new THREE.TorusGeometry(0.26, 0.1, 10, 24), rubber, wx, 0.36, wz);
      const rim = add(new THREE.CylinderGeometry(0.2, 0.2, 0.2, 16), chrome, wx, 0.36, wz);
      rim.rotation.x = Math.PI / 2;
      tyre.rotation.y = 0;
      add(new THREE.CylinderGeometry(0.4, 0.4, 0.3, 16, 1, true, 0, Math.PI), trim, wx, 0.4, wz).rotation.set(Math.PI / 2, 0, 0); // wheel arch
    }
    if (taxi) {
      add(new RoundedBoxGeometry(0.62, 0.22, 0.24, 2, 0.05), new THREE.MeshStandardMaterial({ color: 0xfff3b0, emissive: 0xffe066, emissiveIntensity: 0.8 }), -0.25, 1.7, 0);
      add(new THREE.BoxGeometry(2.6, 0.08, 1.845), new THREE.MeshStandardMaterial({ color: 0x111111 }), 0, 0.72, 0); // checker stripe
    }
    g.traverse((o) => {
      const ms = o as THREE.Mesh;
      if (ms.isMesh) {
        ms.castShadow = true;
        ms.receiveShadow = true;
      }
    });
    return g;
  }

  private parkedCar(x: number, z: number, color: number, rotY = 0) {
    const g = this.carModel(color);
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    g.traverse((o) => ((o as THREE.Mesh).castShadow = true));
    this.scene.add(g);
    // body collider starts at 0.37 so cats can sneak underneath
    const hw = rotY ? 0.9 : 2.1, hd = rotY ? 2.1 : 0.9;
    this.box(x - hw, 0.37, z - hd, x + hw, 1.7, z + hd, null);
    this.hideSpots.push(new THREE.Box3(new THREE.Vector3(x - hw, 0, z - hd), new THREE.Vector3(x + hw, 0.37, z + hd)));
    return g;
  }

  private tree(x: number, z: number) {
    const bark = mat("bark", () => new THREE.MeshStandardMaterial({ map: T.wood(41, "#4a3a2c"), roughness: 1 }));
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.22, 3.2, 10), bark);
    trunk.position.set(x, 1.6, z);
    trunk.castShadow = true;
    this.scene.add(trunk);
    // leafy crown: many lumpy, smooth-shaded clusters with per-vertex colour variation
    const leaves = mat("leaves2", () => new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 }));
    const crown = new THREE.Group();
    let seed = Math.floor(Math.abs(x * 31 + z * 17)) + 1;
    const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < 14; i++) {
      const g = mergeVertices(new THREE.IcosahedronGeometry(0.55 + r() * 0.45, 3));
      const pos = g.attributes.position as THREE.BufferAttribute;
      const cols = new Float32Array(pos.count * 3);
      const v = new THREE.Vector3();
      for (let k = 0; k < pos.count; k++) {
        v.fromBufferAttribute(pos, k);
        const n = Math.sin(v.x * 9 + i) * Math.sin(v.y * 11) * Math.sin(v.z * 7 + i * 2);
        v.multiplyScalar(1 + n * 0.18);
        pos.setXYZ(k, v.x, v.y, v.z);
        const c = new THREE.Color().setHSL(0.22 + r() * 0.06, 0.45, 0.18 + (v.y > 0 ? 0.1 : 0) + r() * 0.06);
        cols.set([c.r, c.g, c.b], k * 3);
      }
      g.setAttribute("color", new THREE.BufferAttribute(cols, 3));
      g.computeVertexNormals();
      const b = new THREE.Mesh(g, leaves);
      const a = r() * Math.PI * 2, rad = r() * 1.1;
      b.position.set(Math.cos(a) * rad, 3.1 + r() * 1.3, Math.sin(a) * rad);
      b.castShadow = true;
      b.receiveShadow = true;
      crown.add(b);
    }
    crown.position.set(x, 0, z);
    this.scene.add(crown);
    this.animated.push((t) => (crown.rotation.z = Math.sin(t * 0.8 + x) * 0.012));
    this.box(x - 0.2, 0, z - 0.2, x + 0.2, 3.2, z + 0.2, null);
    // a branch you can sit on
    const branch = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 1.4, 8), bark);
    branch.rotation.z = Math.PI / 2;
    branch.position.set(x + 0.6, 2.28, z);
    branch.castShadow = true;
    this.scene.add(branch);
    this.box(x - 0.1, 2.2, z - 0.1, x + 1.3, 2.35, z + 0.1, null);
  }

  private streetLamp(x: number, z: number) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 4.2, 8), this.M.ironBlack());
    pole.position.set(x, 2.1, z);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 8), new THREE.MeshStandardMaterial({ color: 0xfff1c8, emissive: 0xffc979, emissiveIntensity: 3 }));
    head.position.set(x, 4.25, z);
    pole.castShadow = true;
    this.scene.add(pole, head);
    const l = new THREE.PointLight(0xffc27a, 12, 14, 1.5);
    l.position.set(x, 4.0, z);
    this.scene.add(l);
    this.lights.push(l);
    this.box(x - 0.08, 0, z - 0.08, x + 0.08, 4.2, z + 0.08, null);
  }

  private laundry(a: THREE.Vector3, b: THREE.Vector3) {
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([a, b]), new THREE.LineBasicMaterial({ color: 0xdddddd }));
    this.scene.add(line);
    const colors = [0xe74c3c, 0xf5f5f5, 0x3498db, 0xf1c40f, 0x9b59b6, 0x2ecc71];
    const n = Math.floor(a.distanceTo(b) / 1.3);
    for (let i = 1; i < n; i++) {
      const p = a.clone().lerp(b, i / n);
      const cloth = new THREE.Mesh(new THREE.PlaneGeometry(0.6 + (i % 2) * 0.3, 0.8, 4, 4), new THREE.MeshStandardMaterial({ color: colors[i % colors.length], side: THREE.DoubleSide, roughness: 0.9 }));
      cloth.geometry.translate(0, -0.4, 0);
      cloth.position.copy(p);
      cloth.lookAt(p.clone().add(new THREE.Vector3(b.z - a.z, 0, a.x - b.x)));
      cloth.castShadow = true;
      this.scene.add(cloth);
      this.animated.push((t) => (cloth.rotation.x = Math.sin(t * 1.7 + i) * 0.18));
    }
    this.anchors.push(a.clone().lerp(b, 0.5));
  }

  private pigeon(pos: THREE.Vector3) {
    const holder = new THREE.Group();
    holder.position.copy(pos);
    holder.rotation.y = Math.random() * 6;
    this.scene.add(holder);
    this.pigeons.push({ mesh: holder, home: pos.clone(), vel: new THREE.Vector3(), flying: 0 });
  }

  private buildFireEscape() {
    const iron = this.M.ironBlack();
    const grateMat = mat("fegrate", () => new THREE.MeshStandardMaterial({ color: 0x25272b, roughness: 0.6, metalness: 0.7 }));
    // platforms at 3.6, 6.8, 10.0 (x 6.5..10.8, z -12..-10.8)
    for (const y of [3.6, 6.8, 10.0]) {
      this.box(6.5, y - 0.06, -11.95, 10.8, y, -10.8, grateMat);
      // railings (visual only, cats slip between bars)
      this.box(6.5, y + 0.9, -10.84, 10.8, y + 0.94, -10.8, iron, false);
      for (let x = 6.5; x <= 10.8; x += 0.35) this.box(x, y, -10.84, x + 0.03, y + 0.92, -10.8, iron, false);
    }
    // flights (outside the platforms, alternating z bands)
    const flight = (xStart: number, xEnd: number, y0: number, y1: number, z0: number, z1: number) => {
      const n = Math.round((y1 - y0) / 0.2);
      for (let i = 0; i < n; i++) {
        const f0 = i / n, f1 = (i + 1) / n;
        const xa = xStart + (xEnd - xStart) * f0, xb = xStart + (xEnd - xStart) * f1;
        this.box(Math.min(xa, xb), y0 + (i + 1) * 0.2 - 0.05, z0, Math.max(xa, xb), y0 + (i + 1) * 0.2, z1, grateMat);
      }
      const len = Math.hypot(xEnd - xStart, y1 - y0);
      const rail = new THREE.Mesh(new THREE.BoxGeometry(len, 0.04, 0.04), iron);
      rail.position.set((xStart + xEnd) / 2, (y0 + y1) / 2 + 0.9, z1);
      rail.rotation.z = Math.atan2(y1 - y0, xEnd - xStart);
      this.scene.add(rail);
    };
    flight(10.7, 6.6, 3.6, 6.8, -10.8, -10.25);
    flight(6.6, 10.7, 6.8, 10.0, -10.25, -9.7);
    this.box(10.7, 9.94, -11.95, 11.2, 10.0, -9.7, grateMat); // landing to platform 3
    this.box(6.2, 6.74, -10.8, 6.6, 6.8, -9.7, grateMat); // turn landing
    // ladder to the roof (steep steps against the wall, x 6.5 -> 4.3)
    const n = 12;
    for (let i = 0; i < n; i++) {
      const x1 = 6.5 - i * 0.18;
      this.box(x1 - 0.18, 10 + (i + 1) * 0.2 - 0.04, -11.95, x1, 10 + (i + 1) * 0.2, -11.45, iron);
    }
    this.box(4.0, 12.36, -12.3, 4.34, 12.4, -11.45, iron); // top rung to parapet
    this.checkpoint("fe3", "Пожарная лестница", 8.6, 10.0, -11.4);
    this.fishPickup(9.5, 6.8, -11.4);
    this.fishPickup(7.5, 10.0, -11.4);
  }

  private buildBasement() {
    const floorM = this.M.darkConcrete();
    // floor + pit
    this.box(-13, -3.6, -20, 7, -3, -9.5, floorM, true, {}, 3);
    // ceiling slab under the north building (y -0.4..0)
    this.box(-13, -0.4, -20, 7, 0, -12.3, floorM, false);
    // outer walls
    this.box(-13.5, -3, -20.5, 7.5, -0.4, -20, floorM);
    this.box(-13.5, -3, -20, -13, -0.4, -12, floorM);
    this.box(7, -3, -20, 7.5, -0.4, -9.5, floorM);
    this.box(-13, -3, -12.3, -2, -0.4, -12, floorM);
    this.box(2, -3, -12.3, 7, -0.4, -12, floorM);
    // pit walls + stairs down (x from 1.8 to -1.8, going down in z? keep along z)
    this.box(-2.3, -3, -12, -2, 0, -9.5, floorM);
    this.box(2, -3, -12, 2.3, 0, -9.5, floorM);
    this.box(-2.3, -3, -9.5, 2.3, 0, -9.2, floorM);
    for (let i = 0; i < 14; i++) {
      const z1 = -9.5 - i * 0.18;
      const top = -0.2 * (i + 1);
      this.box(-2, -3, z1 - 0.18, 0.2, top, z1, this.M.concrete());
    }
    // interior dividing wall with the grate opening at z -16.6..-15.4
    this.box(-2.3, -3, -20, -2, -0.4, -16.6, floorM);
    this.box(-2.3, -3, -15.4, -2, -0.4, -12.3, floorM);
    this.box(-2.3, -1.6, -16.6, -2, -0.4, -15.4, floorM);
    const grateMesh = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.4, 1.2), mat("grate", () => {
      const c = document.createElement("canvas");
      c.width = c.height = 128;
      const g = c.getContext("2d")!;
      g.clearRect(0, 0, 128, 128);
      g.strokeStyle = "#555a60";
      g.lineWidth = 8;
      for (let i = 8; i < 128; i += 21) {
        g.beginPath();
        g.moveTo(i, 0);
        g.lineTo(i, 128);
        g.stroke();
      }
      g.strokeRect(0, 0, 128, 128);
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      return new THREE.MeshStandardMaterial({ map: t, transparent: true, alphaTest: 0.3, metalness: 0.8, roughness: 0.4, side: THREE.DoubleSide });
    }));
    grateMesh.position.set(-2.15, -2.3, -16.0);
    grateMesh.castShadow = true;
    this.scene.add(grateMesh);
    const gc = this.physics.add(new THREE.Box3(new THREE.Vector3(-2.3, -3, -16.6), new THREE.Vector3(-2, -1.6, -15.4)));
    this.grate = { mesh: grateMesh, collider: gc, state: "stuck" };
    this.interactables.push({ id: "grate_push", pos: new THREE.Vector3(-1.7, -3, -16), radius: 1.2, prompt: "Решётка застряла. Дымок, рывок (Q)!", enabled: true, who: ["dymok"] });
    this.interactables.push({ id: "latch", pos: new THREE.Vector3(-2.8, -3, -15.2), radius: 0.8, prompt: "Открыть защёлку", enabled: false });
    const latch = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.12, 0.2), this.M.metal());
    latch.position.set(-2.35, -2.2, -15.3);
    this.scene.add(latch);
    // room A props: washing machines, heavy crate, boiler
    for (let i = 0; i < 3; i++) {
      const x = 0 + i * 0.9;
      const wm = this.box(x, -3, -19.9, x + 0.8, -2.1, -19.2, mat("wm", () => new THREE.MeshStandardMaterial({ color: 0xe8e8e8, roughness: 0.4 })));
      const drum = new THREE.Mesh(new THREE.CircleGeometry(0.25, 20), mat("drum", () => new THREE.MeshStandardMaterial({ color: 0x223344, roughness: 0.1, metalness: 0.6 })));
      drum.position.set(x + 0.4, -2.55, -19.19);
      this.scene.add(drum);
      if (i === 1 && wm.mesh) {
        wm.mesh.userData.batch = false; // it shakes during the spin cycle
        this.animated.push((t) => wm.mesh && (wm.mesh.position.x = x + 0.4 + Math.sin(t * 40) * 0.006));
      }
    }
    this.box(4.5, -3, -19.8, 6.8, -1.0, -18.4, this.M.metal()); // boiler
    const boilerGlow = new THREE.PointLight(0xff6a2a, 3, 5, 2);
    boilerGlow.position.set(5.6, -2.2, -18.2);
    this.scene.add(boilerGlow);
    this.lights.push(boilerGlow);
    this.crate(3.5, -3, -14, 0.9, true, true, new THREE.Box3(new THREE.Vector3(-2, -3.1, -19.9), new THREE.Vector3(6.9, 0, -12.4)));
    this.crate(5.9, -3, -13.2, 0.6, true, false, new THREE.Box3(new THREE.Vector3(-2, -3.1, -19.9), new THREE.Vector3(6.9, 0, -12.4)));
    // shelves
    this.box(-1.9, -2.0, -19.9, 0, -1.94, -19.2, this.M.wood());
    this.fishPickup(-1, -1.94, -19.5);
    // bulbs
    for (const [x, z] of [[2.5, -16], [-7.5, -16]]) {
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffe2a0 }));
      bulb.position.set(x, -0.7, z);
      this.scene.add(bulb);
      const l = new THREE.PointLight(0xffd08a, 9, 11, 1.6);
      l.position.set(x, -0.8, z);
      this.scene.add(l);
      this.lights.push(l);
      this.animated.push((t) => (l.intensity = 9 + (Math.sin(t * 17 + x) > 0.98 ? -5 : 0)));
    }
    // room B: checkpoint, stash, freight elevator in shaft x -11..-9, z -19..-17
    this.checkpoint("basement", "Подвал", -5, -3, -14);
    for (const [x, z] of [[-6, -18], [-7, -18], [-8, -13], [-4, -19]]) this.fishPickup(x, -3, z);
    this.fishPickup(-12.3, -3, -12.8, 5);
    const el = new THREE.Group();
    const plat = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.12, 1.9), this.M.metal());
    el.add(plat);
    for (const [x, z] of [[-0.9, -0.9], [0.9, -0.9], [-0.9, 0.9], [0.9, 0.9]]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.06, 2.2, 0.06), this.M.ironBlack());
      post.position.set(x, 1.1, z);
      el.add(post);
    }
    const btn = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.2, 0.05), new THREE.MeshStandardMaterial({ color: 0xff3b30, emissive: 0xff3b30, emissiveIntensity: 1 }));
    btn.position.set(0.8, 0.5, 0.92);
    el.add(btn);
    el.position.set(-10, -3.06, -18);
    this.scene.add(el);
    const ec = this.physics.add(new THREE.Box3(new THREE.Vector3(-10.95, -3.12, -18.95), new THREE.Vector3(-9.05, -3.0, -17.05)), { velocity: new THREE.Vector3() });
    this.elevator = { mesh: el, collider: ec, y: -3.06, target: -3.06, bottom: -3.06, top: 11.94, moving: false };
    this.interactables.push({ id: "elevator", pos: new THREE.Vector3(-10, -3, -18), radius: 1.1, prompt: "Нажать кнопку лифта", enabled: true });
    // shaft walls in the basement part
    this.box(-11.3, -3, -19.3, -11, -0.4, -16.7, floorM);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.3), new THREE.MeshBasicMaterial({ map: T.sign("ГРУЗОВОЙ ЛИФТ", "#402020", "#ffcf6a", 256, 64) }));
    sign.position.set(-8.9, -1.0, -16.8);
    sign.rotation.y = Math.PI / 2;
    this.scene.add(sign);
  }

  private waterTower(x: number, y: number, z: number, anchor = true) {
    const wood = mat("tower", () => new THREE.MeshStandardMaterial({ map: T.wood(12, "#7a5a3a"), roughness: 0.9 }));
    const tank = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, 3.2, 20, 1), wood);
    tank.position.set(x, y + 4.6, z);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(2, 1.2, 20), this.M.metal());
    cap.position.set(x, y + 6.8, z);
    tank.castShadow = cap.castShadow = true;
    this.scene.add(tank, cap);
    for (const [dx, dz] of [[-1.2, -1.2], [1.2, -1.2], [-1.2, 1.2], [1.2, 1.2]]) {
      this.box(x + dx - 0.1, y, z + dz - 0.1, x + dx + 0.1, y + 3, z + dz + 0.1, this.M.ironBlack());
    }
    this.box(x - 1.6, y + 2.9, z - 1.6, x + 1.6, y + 3.0, z + 1.6, this.M.wood());
    this.box(x - 1.8, y + 3.0, z - 1.8, x + 1.8, y + 6.2, z + 1.8, null);
    if (anchor) this.anchors.push(new THREE.Vector3(x + 2.1, y + 3.2, z), new THREE.Vector3(x - 2.1, y + 3.2, z));
    // bands
    for (const hy of [3.6, 4.6, 5.6]) {
      const band = new THREE.Mesh(new THREE.TorusGeometry(1.82, 0.03, 6, 32), this.M.ironBlack());
      band.rotation.x = Math.PI / 2;
      band.position.set(x, y + hy, z);
      this.scene.add(band);
    }
  }

  private parapet(x0: number, z0: number, x1: number, z1: number, y: number, h = 0.4) {
    const m = this.M.trim();
    this.box(x0, y, z0, x1, y + h, z0 + 0.3, m);
    this.box(x0, y, z1 - 0.3, x1, y + h, z1, m);
    this.box(x0, y, z0, x0 + 0.3, y + h, z1, m);
    this.box(x1 - 0.3, y, z0, x1, y + h, z1, m);
  }

  private steamVent(x: number, y: number, z: number) {
    this.box(x - 0.3, y, z - 0.3, x + 0.3, y + 0.8, z + 0.3, this.M.metal());
    const puffs: THREE.Mesh[] = [];
    const pm = new THREE.MeshBasicMaterial({ color: 0xdde3ea, transparent: true, opacity: 0.25, depthWrite: false });
    for (let i = 0; i < 8; i++) {
      const p = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 6), pm.clone());
      this.scene.add(p);
      puffs.push(p);
    }
    this.animated.push((t) => {
      puffs.forEach((p, i) => {
        const k = (t * 0.35 + i / puffs.length) % 1;
        p.position.set(x + Math.sin(k * 5 + i) * 0.2 + k * 0.8, y + 0.9 + k * 2.5, z);
        p.scale.setScalar(0.5 + k * 2);
        (p.material as THREE.MeshBasicMaterial).opacity = 0.28 * (1 - k);
      });
    });
  }

  private stringLights(a: THREE.Vector3, b: THREE.Vector3, n = 14) {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= n; i++) {
      const p = a.clone().lerp(b, i / n);
      p.y -= Math.sin((i / n) * Math.PI) * 0.6;
      pts.push(p);
    }
    this.scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x222222 })));
    const cols = [0xffd27a, 0xff7a7a, 0x7affc1, 0x7ab8ff];
    pts.forEach((p, i) => {
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), new THREE.MeshBasicMaterial({ color: cols[i % 4], toneMapped: false }));
      bulb.position.copy(p).add(new THREE.Vector3(0, -0.06, 0));
      this.scene.add(bulb);
    });
  }

  private buildRoofA() {
    const y = 12;
    this.box(-15, y, -20, 15, y + 0.015, -12, this.M.tar(), false, {}, 4);
    this.parapet(-15.2, -20.2, 15.2, -11.9, y);
    this.waterTower(-4, y, -16.5);
    // pigeon coop with the bracelets stash
    const coop = new THREE.Group();
    const shed = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.8, 1.6), this.M.wood());
    shed.position.y = 0.9;
    const roofM = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.1, 1.9), this.M.metal());
    roofM.position.y = 1.85;
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.9), mat("mesh", () => new THREE.MeshStandardMaterial({ color: 0x888888, transparent: true, opacity: 0.5, side: THREE.DoubleSide })));
    mesh.position.set(0, 1.1, 0.81);
    const door = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.04), this.M.crate());
    door.geometry.translate(0.25, 0, 0);
    door.position.set(-0.25, 0.35, 0.82);
    coop.add(shed, roofM, mesh, door);
    coop.position.set(7, y, -17);
    coop.traverse((o) => ((o as THREE.Mesh).castShadow = true));
    this.scene.add(coop);
    this.coopDoor = door;
    this.box(5.8, y, -17.8, 8.2, y + 1.9, -16.2, null);
    this.interactables.push({ id: "coop", pos: new THREE.Vector3(7, y, -15.8), radius: 1.1, prompt: "Заглянуть в голубятню", enabled: true });
    for (let i = 0; i < 4; i++) this.pigeon(new THREE.Vector3(6 + i * 0.6, y + 1.9, -17));
    // AC units, chimneys, skylight, antenna, plants, elevator hut
    for (const [x, z] of [[-11, -14], [-9.6, -14], [2, -19], [11, -18.5]]) this.box(x - 0.55, y, z - 0.45, x + 0.55, y + 0.9, z + 0.45, this.M.metal());
    this.box(-13.5, y, -19.5, -12.5, y + 2.2, -18.5, this.M.brickRed());
    this.box(12.5, y, -15.5, 13.5, y + 1.6, -14.5, this.M.brickRed());
    this.steamVent(0, y, -14.5);
    this.box(-11.2, y, -19.2, -8.8, y + 2.8, -19, this.M.concrete());
    this.box(-11.2, y, -19, -11, y + 2.8, -16.8, this.M.concrete());
    this.box(-9, y, -19, -8.8, y + 2.8, -17.6, this.M.concrete());
    this.box(-11.2, y + 2.6, -19.2, -8.8, y + 2.8, -16.8, this.M.concrete());
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 6, 6), this.M.ironBlack());
    mast.position.set(13.5, y + 3, -18.5);
    this.scene.add(mast);
    this.anchors.push(new THREE.Vector3(13.5, y + 5.8, -18.5));
    this.stringLights(new THREE.Vector3(-14.8, y + 2.4, -12.2), new THREE.Vector3(-4, y + 4.5, -16.5));
    this.stringLights(new THREE.Vector3(14.8, y + 2.4, -12.2), new THREE.Vector3(-4, y + 4.5, -16.5));
    // a lounge chair and a funny sign
    this.box(-1, y, -19, 0.8, y + 0.35, -18.2, this.M.wood());
    const s = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.4), new THREE.MeshBasicMaterial({ map: T.sign("НЕ КОРМИТЬ ГОЛУБЕЙ", "#f2f2f2", "#b3121b", 512, 128) }));
    s.position.set(7, y + 1.3, -16.18);
    this.scene.add(s);
    // billboard truss over the alley: anchors for the swing to Karniz's roof
    const trussM = this.M.ironBlack();
    // the hook hangs high over the middle of the alley so the arc clears Karniz's parapet
    this.box(14.9, y, -18.4, 15.2, y + 9, -18.0, trussM);
    this.box(20.8, y + 0.5, -18.4, 21.1, y + 9, -18.0, trussM);
    this.box(14.9, y + 8.7, -18.4, 21.1, y + 9, -18.0, trussM, false);
    this.box(17.9, y + 8.7, -18.2, 18.1, y + 8.85, -14.3, trussM, false); // cantilever arm with the hooks
    const bb = new THREE.Mesh(new THREE.PlaneGeometry(6, 2.2), new THREE.MeshBasicMaterial({ map: T.sign("КОРМ «МУРКА» — ВКУС ПОБЕДЫ", "#ffcc00", "#c0392b", 1024, 256), side: THREE.DoubleSide }));
    bb.position.set(18, y + 10.2, -18.2);
    this.scene.add(bb);
    const hookM = mat("hook", () => new THREE.MeshStandardMaterial({ color: 0x9cf6ff, emissive: 0x3cc8ff, emissiveIntensity: 1.5 }));
    for (const z of [-16, -14.5]) {
      const hook = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.035, 6, 12), hookM);
      hook.position.set(18, y + 8.5, z);
      this.scene.add(hook);
      this.anchors.push(hook.position.clone());
    }
    this.checkpoint("roofA", "Крыша", -12, y, -13.2);
    const fish: [number, number, number][] = [[-12, y, -18], [-9, y + 0.9, -14], [2, y + 0.9, -19], [11, y + 0.9, -18.5], [-4, y + 3, -15], [-13, y + 2.2, -19]];
    fish.forEach(([x, yy, z]) => this.fishPickup(x, yy, z));
  }

  private buildRoofB() {
    const y = 12.5;
    this.box(21, y, -20, 31, y + 0.015, 6, this.M.tar(), false, {}, 4);
    this.parapet(20.8, -20.2, 31.2, 6.2, y, 0.35);
    this.waterTower(28, y, 2.5);
    for (const [x, z] of [[24, -12], [27.5, -8], [24, -3], [28.5, 0 - 14]]) this.box(x - 0.6, y, z - 0.5, x + 0.6, y + 1.0, z + 0.5, this.M.metal());
    this.steamVent(29.5, y, -17.5);
    const neon = new THREE.Mesh(new THREE.PlaneGeometry(5, 1.4), new THREE.MeshBasicMaterial({ map: T.sign("КАРНИЗ ТУТ ГЛАВНЫЙ", "#12060a", "#ff4f8b", 1024, 256), toneMapped: false }));
    neon.position.set(26, y + 2.8, -19.7);
    this.scene.add(neon);
    this.box(23.4, y, -19.9, 28.6, y + 2, -19.7, this.M.ironBlack(), false);
    const glow = new THREE.PointLight(0xff4f8b, 8, 12, 1.5);
    glow.position.set(26, y + 2.5, -18.5);
    this.scene.add(glow);
    this.lights.push(glow);
    this.checkpoint("roofB", "Крыша Карниза", 22.5, y, -16);
    // fire escape down to the street side (x 31..32.4)
    const iron = mat("fegrate", () => new THREE.MeshStandardMaterial({ color: 0x25272b }));
    for (let i = 0; i < 20; i++) {
      const top = y - i * 0.6;
      this.box(31, top - 0.06, 6 + i * 0.3, 32.4, top, 6.3 + i * 0.3, iron);
    }
    for (const [x, z] of [[25, -16], [29, -5], [23, 2], [26, -1]]) this.fishPickup(x, y, z);
  }

  private buildStreet() {
    // moving truck of Milena's family
    this.truck = new THREE.Group();
    const box = new THREE.Mesh(new THREE.BoxGeometry(5, 2.6, 2.3), new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.6 }));
    box.position.set(-0.8, 1.8, 0);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.9, 2.2), new THREE.MeshStandardMaterial({ color: 0xd35400, roughness: 0.5 }));
    cab.position.set(2.7, 1.45, 0);
    const logo = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 0.8), new THREE.MeshBasicMaterial({ map: T.sign("ПЕРЕЕЗД-ЭКСПРЕСС", "#ffffff", "#d35400", 512, 128) }));
    logo.position.set(-0.8, 2.0, -1.16);
    logo.rotation.y = Math.PI;
    this.truck.add(box, cab, logo);
    for (const wx of [-2.4, 0.8, 2.7])
      for (const wz of [-1.1, 1.1]) {
        const w = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.3, 16), new THREE.MeshStandardMaterial({ color: 0x111111 }));
        w.rotation.x = Math.PI / 2;
        w.position.set(wx, 0.45, wz);
        this.truck.add(w);
      }
    this.truck.position.set(-6, 0, 16.2);
    this.truck.traverse((o) => ((o as THREE.Mesh).castShadow = true));
    this.scene.add(this.truck);
    this.box(-9.3, 0, 15, -2.3, 3.1, 17.4, null);
    // pet carrier on the sidewalk
    this.carrier = new THREE.Group();
    const cm = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.4, 0.4), new THREE.MeshStandardMaterial({ color: 0x9b59b6, roughness: 0.7 }));
    cm.position.y = 0.32;
    const cdoor = new THREE.Mesh(new THREE.PlaneGeometry(0.36, 0.3), new THREE.MeshStandardMaterial({ color: 0x777777, metalness: 0.8, side: THREE.DoubleSide }));
    cdoor.geometry.translate(0.18, 0, 0);
    cdoor.position.set(0.31, 0.32, -0.18);
    cdoor.rotation.y = Math.PI / 2;
    cdoor.name = "door";
    this.carrier.add(cm, cdoor);
    this.carrier.position.set(-3, 0.12, 13.4);
    this.scene.add(this.carrier);
    // yard gate + fence to the street
    const iron = this.M.ironBlack();
    for (let x = -15; x < 15; x += 0.3) {
      if (x > -1.6 && x < 1.6) continue;
      this.box(x, 0, 11.95, x + 0.04, 1.8, 11.99, iron, false);
    }
    this.box(-15, 1.75, 11.9, -1.6, 1.82, 12.05, iron);
    this.box(1.6, 1.75, 11.9, 15, 1.82, 12.05, iron);
    this.box(-15, 0, 11.9, -1.6, 0.12, 12.05, iron);
    // invisible fence body with gaps cats slip through at the bottom (bars are too thin to block a cat... mostly)
    this.box(-15, 0.35, 11.9, -1.6, 1.8, 12.05, null);
    this.box(1.6, 0.35, 11.9, 15, 1.8, 12.05, null);
    // parked cars along the far kerb + traffic
    this.parkedCar(8, 15.6, 0x2c3e50);
    this.parkedCar(-16, 21.9, 0xbfbfbf);
    this.parkedCar(20, 21.9, 0x1e6f5c);
    for (let i = 0; i < 4; i++) {
      const lane = i % 2;
      const g = this.carModel([0xf2b705, 0x8e1b1b, 0x1d4e89, 0xd9dcdf][i], i === 0);
      g.position.set(-50 + i * 27, 0, lane ? 20.8 : 16.8);
      this.scene.add(g);
      const col2 = this.physics.add(new THREE.Box3(), { tag: "car" });
      this.cars.push({ mesh: g, lane, speed: (lane ? -1 : 1) * (7 + i), collider: col2 });
    }
  }

  private buildBrownstones() {
    const stoneM = mat("brownstone", () => new THREE.MeshStandardMaterial({ map: T.stone(21, "#7b5442"), roughness: 0.92 }));
    const iron = this.M.ironBlack();
    const stepM = mat("stoop", () => new THREE.MeshStandardMaterial({ map: T.stone(22, "#6d4a3a"), roughness: 0.9 }));
    const doorM = mat("door", () => new THREE.MeshStandardMaterial({ map: T.wood(31, "#3b2416"), roughness: 0.5 }));
    const zf = 25.8;
    let seed = 5;
    const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < 11; i++) {
      const x0 = -44 + i * 8, x1 = x0 + 8;
      const h = 11 + Math.floor(r() * 3) * 0.9;
      this.box(x0, 0, zf, x1, h, 34, stoneM, true, {}, 2);
      buildFacade(this.scene, this.physics, {
        axis: "z", plane: zf, dir: -1, from: x0, to: x1, top: h, seed: 20 + i, lit: 0.55, ac: 0.05,
        centers: [x0 + 1.7, x0 + 4.1, x0 + 6.3], width: 1.15,
        rows: [{ sill: 0.45, height: 0.95 }, { sill: 2.2, height: 2.0 }, { sill: 5.5, height: 1.8 }, { sill: 8.4, height: 1.6 }].filter((row) => row.sill + row.height < h - 0.9),
        wall: stoneM, frameColor: i % 3 === 0 ? 0x1f3326 : i % 3 === 1 ? 0x2a2320 : 0xe6dfd0, custom: new Set(["0:1"]),
      });
      // parlour door with transom + a stoop down to the sidewalk (walkable)
      const door = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.75), doorM);
      door.position.set(x0 + 1.7, 2.2 + 0.88, zf - 0.04);
      door.rotation.y = Math.PI;
      const transom = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.22), this.M.glassLit());
      transom.position.set(x0 + 1.7, 4.07, zf - 0.04);
      transom.rotation.y = Math.PI;
      this.scene.add(door, transom);
      const steps = 10;
      for (let k = 0; k < steps; k++) {
        const y1 = 0.12 + ((k + 1) / steps) * 2.08;
        const z0 = 23.6 + (k / steps) * 1.9;
        this.box(x0 + 1.05, 0, z0, x0 + 2.35, y1, zf - 0.2, stepM);
      }
      for (const sx of [x0 + 1.02, x0 + 2.38]) {
        const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.9, 6), iron);
        rail.position.set(sx, 2.0, 24.6);
        // handrail follows the stoop pitch (rise 2.08 over run 1.9)
        rail.rotation.x = Math.atan2(1.9, 2.08);
        rail.userData.batch = true;
        this.scene.add(rail);
        for (let k = 0; k < 6; k++) this.box(sx - 0.015, 0.1, 23.7 + k * 0.36, sx + 0.015, 0.1 + 0.9 + k * 0.38, 23.73 + k * 0.36, iron, false);
      }
      // areaway railing in front of the garden-level windows
      this.box(x0 + 2.6, 0.12, 23.5, x1 - 0.2, 1.0, 23.54, iron, false);
      for (let xx = x0 + 2.6; xx < x1 - 0.2; xx += 0.14) this.box(xx, 0.12, 23.5, xx + 0.02, 1.0, 23.53, iron, false);
      if (i % 2 === 0) this.tree(x0 + 5, 23.6);
    }
  }

  private buildSkyline() {
    const litTex = T.windows(true, 3);
    const dayTex = T.windows(false, 3);
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const m = new THREE.MeshStandardMaterial({ map: dayTex, emissiveMap: litTex, emissive: 0xffffff, emissiveIntensity: 0.4, roughness: 0.9 });
    // world-space UVs: one texture tile = 8x8 windows of 3 m x 3.2 m, whatever the tower's size
    m.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader
        .replace("#include <common>", "#include <common>\nvarying vec3 vSkyPos; varying vec3 vSkyN;")
        .replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\n{ mat4 im = modelMatrix * instanceMatrix; vSkyPos = (im * vec4(transformed, 1.0)).xyz; vSkyN = normalize(mat3(im) * objectNormal); }");
      sh.fragmentShader = sh.fragmentShader
        .replace("#include <common>", "#include <common>\nvarying vec3 vSkyPos; varying vec3 vSkyN;")
        .replace("#include <map_fragment>", `
          vec2 wuv = (abs(vSkyN.x) > 0.5 ? vSkyPos.zy : vSkyPos.xy) / vec2(24.0, 25.6);
          bool roof = abs(vSkyN.y) > 0.5;
          vec4 texelColor = roof ? vec4(0.22, 0.2, 0.19, 1.0) : texture2D(map, wuv);
          diffuseColor *= texelColor;`)
        .replace("#include <emissivemap_fragment>", "if (!roof) totalEmissiveRadiance *= texture2D(emissiveMap, wuv).rgb; else totalEmissiveRadiance *= 0.0;");
    };
    m.customProgramCacheKey = () => "skyline";
    const count = 170;
    const inst = new THREE.InstancedMesh(geo, m, count);
    const d = new THREE.Object3D();
    let seed = 7;
    const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    let k = 0;
    for (let i = 0; i < count; i++) {
      const a = r() * Math.PI * 2;
      const dist = 55 + r() * 90;
      const x = Math.cos(a) * dist, z = Math.sin(a) * dist;
      if (Math.abs(x) < 40 && z > -35 && z < 35) continue;
      const w = 8 + r() * 14, h = 14 + r() * (dist > 100 ? 90 : 45), dd = 8 + r() * 14;
      d.position.set(x, h / 2, z);
      d.scale.set(w, h, dd);
      d.rotation.y = Math.round(r() * 4) * (Math.PI / 2) + (r() - 0.5) * 0.2;
      d.updateMatrix();
      inst.setMatrixAt(k, d.matrix);
      inst.setColorAt(k, new THREE.Color().setHSL(0.05 + r() * 0.08, 0.25, 0.35 + r() * 0.3));
      k++;
    }
    inst.count = k;
    this.scene.add(inst);
    // setbacks and rooftop water towers break up the box silhouettes
    const top = new THREE.InstancedMesh(geo, m, k);
    const towers = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.5, 0.5, 1, 10), mat("skytower", () => new THREE.MeshStandardMaterial({ color: 0x5a4632, roughness: 1 })), k);
    const caps = new THREE.InstancedMesh(new THREE.ConeGeometry(0.58, 0.5, 10), mat("skycap", () => new THREE.MeshStandardMaterial({ color: 0x3a3a3a, roughness: 0.7 })), k);
    const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), ps = new THREE.Vector3();
    let nt = 0, nw = 0;
    for (let i = 0; i < k; i++) {
      inst.getMatrixAt(i, mtx);
      mtx.decompose(ps, q, sc);
      const roof = ps.y + sc.y / 2;
      if (r() < 0.55) {
        d.position.set(ps.x, roof + sc.y * 0.12, ps.z);
        d.quaternion.copy(q);
        d.scale.set(sc.x * 0.65, sc.y * 0.24, sc.z * 0.65);
        d.updateMatrix();
        top.setMatrixAt(nt, d.matrix);
        top.setColorAt(nt, new THREE.Color().setHSL(0.06 + r() * 0.06, 0.2, 0.3 + r() * 0.25));
        nt++;
      } else if (r() < 0.7) {
        const tx = ps.x + (r() - 0.5) * sc.x * 0.5, tz = ps.z + (r() - 0.5) * sc.z * 0.5;
        d.quaternion.identity();
        d.position.set(tx, roof + 3, tz);
        d.scale.set(3.4, 2.6, 3.4);
        d.updateMatrix();
        towers.setMatrixAt(nw, d.matrix);
        d.position.set(tx, roof + 4.55, tz);
        d.scale.set(3.4, 1.8, 3.4);
        d.updateMatrix();
        caps.setMatrixAt(nw, d.matrix);
        nw++;
      }
    }
    top.count = nt;
    towers.count = nw;
    caps.count = nw;
    this.scene.add(top, towers, caps);
    // Brooklyn bridge silhouette far away
    const bm = new THREE.MeshStandardMaterial({ color: 0x6b5a4a, roughness: 1 });
    for (const x of [-60, 60]) {
      const tower = new THREE.Mesh(new THREE.BoxGeometry(8, 45, 5), bm);
      tower.position.set(x, 22, 170);
      this.scene.add(tower);
    }
    const deck = new THREE.Mesh(new THREE.BoxGeometry(260, 2, 8), bm);
    deck.position.set(0, 14, 170);
    this.scene.add(deck);
    const cables: THREE.Vector3[] = [];
    for (let i = 0; i <= 40; i++) {
      const x = -130 + i * 6.5;
      const t = (x + 60) / 120;
      const yv = Math.abs(x) <= 60 ? 44 - Math.sin(t * Math.PI) * 26 : 44 - (Math.abs(x) - 60) * 0.42;
      cables.push(new THREE.Vector3(x, yv, 170));
    }
    this.scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(cables), new THREE.LineBasicMaterial({ color: 0x3a3028 })));
    // warm bulbs along the bridge
    for (let x = -120; x <= 120; x += 12) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.7, 6, 4), new THREE.MeshBasicMaterial({ color: 0xffd28a, toneMapped: false }));
      b.position.set(x, 15.5, 166);
      this.scene.add(b);
    }
  }

  private buildRain() {
    const n = 1800;
    const pos = new Float32Array(n * 6);
    for (let i = 0; i < n; i++) {
      const x = (Math.random() - 0.5) * 40, y = Math.random() * 25, z = (Math.random() - 0.5) * 40;
      pos.set([x, y, z, x + 0.02, y - 0.35, z], i * 6);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    this.rain = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0xa8c0d8, transparent: true, opacity: 0.35 }));
    this.rain.frustumCulled = false;
    this.rain.visible = false;
    this.scene.add(this.rain);
  }

  updateRain(dt: number, center: THREE.Vector3) {
    if (!this.rain.visible) return;
    const p = this.rain.geometry.attributes.position as THREE.BufferAttribute;
    const a = p.array as Float32Array;
    for (let i = 0; i < a.length; i += 6) {
      a[i + 1] -= 14 * dt;
      a[i + 4] -= 14 * dt;
      if (a[i + 1] < 0) {
        const x = (Math.random() - 0.5) * 40, z = (Math.random() - 0.5) * 40;
        a[i] = x;
        a[i + 2] = z;
        a[i + 3] = x + 0.02;
        a[i + 5] = z;
        a[i + 1] = 20 + Math.random() * 5;
        a[i + 4] = a[i + 1] - 0.35;
      }
    }
    p.needsUpdate = true;
    this.rain.position.set(center.x, center.y - 8, center.z);
  }

  regionAt(p: THREE.Vector3) {
    return this.regions.find((r) => r.box.containsPoint(p)) ?? this.regions[this.regions.length - 1];
  }
}
