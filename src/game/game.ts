import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Cat, CATS, COSTUMES, furWind, preloadCat, quality, type CatId, type Costume } from "./cat";
import { World } from "./world";
import { Karniz } from "./boss";
import { UI, type PanelRect } from "./ui";
import { InputManager, TouchState, type PlayerInput } from "../engine/input";
import { audio } from "../engine/audio";
import { clearSave, freshSave, loadSave, writeSave, type SaveData } from "./save";

interface Player {
  idx: number;
  cat: Cat;
  yaw: number;
  pitch: number;
  dist: number;
  fp: boolean;
  camera: THREE.PerspectiveCamera;
  rect: PanelRect;
  prompt: string;
  lastLook: number;
}

const KEY_LABEL = ["E", ";", "Num9"];
const ABILITY_LABEL = ["Q", ",", "Num1"];
const SPEAKER_COLORS: Record<string, string> = { Дымок: "#b8c0d0", Милена: "#f0f0f0", Пиксель: "#9ef59e", Карниз: "#ff9a4d", Пломбир: "#9cd8ff", Голубь: "#b5b5ff", Хозяйка: "#ffd0e0" };

export class Game {
  renderer: THREE.WebGLRenderer;
  scene = new THREE.Scene();
  world: World;
  ui: UI;
  input: InputManager;
  cats: Partial<Record<CatId, Cat>> = {};
  party: Cat[] = [];
  players: Player[] = [];
  count = 1;
  save: SaveData = freshSave();
  karniz!: Karniz;
  plombir!: Cat;
  pigeonProto: THREE.Object3D | null = null;
  portraits: Record<string, string> = {};
  state: "menu" | "play" | "cutscene" | "paused" | "modal" = "menu";
  time = 0;
  private clock = new THREE.Clock();
  private cutCam = new THREE.PerspectiveCamera(55, 1, 0.03, 600);
  private cutTarget = { pos: new THREE.Vector3(), look: new THREE.Vector3(), speed: 2 };
  private cutLook = new THREE.Vector3();
  private timers: { t: number; res: () => void }[] = [];
  private skipping = false;
  private shake = 0;
  private seenCheckpoint = "";
  private hiddenInBox: Cat | null = null;
  private qualityName = "high";
  private sun!: THREE.DirectionalLight;
  private started = false;
  private lastMusic = "";
  private bossActive = false;
  private delayed: { t: number; fn: () => void }[] = [];

  /** Game-time delay: pauses with the game and advances with debugStep. */
  private later(sec: number, fn: () => void) {
    this.delayed.push({ t: sec, fn });
  }

  constructor(private canvas: HTMLCanvasElement, uiRoot: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.setScissorTest(true);
    this.world = new World(this.scene);
    this.ui = new UI(uiRoot);
    this.input = new InputManager(canvas);
    if (matchMedia("(pointer: coarse)").matches) {
      const touchRoot = document.createElement("div");
      touchRoot.className = "touch-root";
      uiRoot.appendChild(touchRoot);
      this.input.touch = new TouchState(touchRoot);
      this.setQuality("low");
    }
    addEventListener("resize", () => this.resize());
    canvas.addEventListener("click", () => {
      audio.unlock();
      if (this.state === "play" && this.count === 1) this.input.requestPointerLock();
    });
  }

  // ------------------------------------------------------------ boot
  async init() {
    this.ui.loading("Загружаем котов из Blender…");
    this.buildSky();
    this.world.build();
    const ids: CatId[] = ["dymok", "milena", "pixel", "karniz", "plombir"];
    await Promise.all(ids.map((id) => preloadCat(id)));
    for (const id of ids) {
      const c = await new Cat(id).load();
      this.cats[id] = c;
      this.scene.add(c.root, c.rope);
    }
    const pg = await new GLTFLoader().loadAsync(`${import.meta.env.BASE_URL}models/pigeon.glb`);
    this.pigeonProto = pg.scene;
    for (const p of this.world.pigeons) {
      const m = this.pigeonProto.clone();
      m.traverse((o) => ((o as THREE.Mesh).castShadow = true));
      m.rotation.y = Math.PI;
      p.mesh.add(m);
    }
    this.karniz = new Karniz(this.cats.karniz!);
    this.karniz.onTaunt = (s) => this.ui.toast(s, 1800);
    this.cats.karniz!.root.position.copy(this.world.karnizSpawn);
    this.plombir = this.cats.plombir!;
    this.plombir.root.position.copy(this.world.plombirPos);
    this.plombir.yaw = Math.PI / 2;
    this.plombir.root.rotation.y = Math.PI / 2;
    this.plombir.play("Sit");
    this.renderPortraits();
    this.ui.loading(null);
    this.resize();
    this.showMenu();
    this.renderer.setAnimationLoop(() => this.frame());
  }

  private buildSky() {
    const skyGeo = new THREE.SphereGeometry(400, 32, 16);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: { sunDir: { value: new THREE.Vector3(-0.6, 0.18, 0.75).normalize() } },
      vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
      fragmentShader: `varying vec3 vDir; uniform vec3 sunDir;
        void main(){
          float y = vDir.y;
          vec3 top = vec3(0.12,0.16,0.38), mid = vec3(0.85,0.45,0.42), hor = vec3(1.0,0.66,0.38);
          vec3 c = mix(hor, mid, smoothstep(0.0,0.18,y));
          c = mix(c, top, smoothstep(0.15,0.7,y));
          float s = max(dot(vDir, sunDir), 0.0);
          c += vec3(1.0,0.7,0.4) * pow(s, 60.0) * 2.0 + vec3(1.0,0.5,0.3) * pow(s, 6.0) * 0.35;
          if (y < 0.0) c = mix(hor*0.6, vec3(0.1,0.08,0.1), smoothstep(0.0,-0.2,y));
          gl_FragColor = vec4(c,1.);
        }`,
    });
    const sky = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(sky);
    // environment reflections from the same sunset sky
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const envScene = new THREE.Scene();
    envScene.add(new THREE.Mesh(skyGeo, skyMat));
    this.scene.environment = pmrem.fromScene(envScene, 0.02).texture;
    this.scene.environmentIntensity = 0.55;
    this.scene.fog = new THREE.Fog(0xc98a70, 60, 260);
    const hemi = new THREE.HemisphereLight(0xffd4b0, 0x2a2438, 0.9);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xffc38a, 3.2);
    sun.position.set(-30, 14, 36);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera;
    sc.left = -22;
    sc.right = 22;
    sc.top = 22;
    sc.bottom = -22;
    sc.near = 1;
    sc.far = 120;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.02;
    this.scene.add(sun, sun.target);
    this.sun = sun;
  }

  /** Real renders of the Blender models for HUD portraits (not painted art). */
  private renderPortraits() {
    const size = 256;
    const rt = new THREE.WebGLRenderTarget(size, size, { colorSpace: THREE.SRGBColorSpace });
    const cam = new THREE.PerspectiveCamera(30, 1, 0.01, 10);
    const scene = new THREE.Scene();
    scene.environment = this.scene.environment;
    scene.background = new THREE.Color(0x1e2230);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x444466, 1.6));
    const key = new THREE.DirectionalLight(0xffe0c0, 2.5);
    key.position.set(1, 2, 3);
    scene.add(key);
    const buf = new Uint8Array(size * size * 4);
    const cnv = document.createElement("canvas");
    cnv.width = cnv.height = size;
    const g = cnv.getContext("2d")!;
    this.renderer.setScissorTest(false);
    for (const id of ["dymok", "milena", "pixel", "karniz", "plombir"] as CatId[]) {
      const c = this.cats[id]!;
      const parent = c.root.parent;
      const saved = c.root.position.clone();
      scene.add(c.root);
      c.root.position.set(0, 0, 0);
      c.root.rotation.y = -0.35;
      c.mixer.update(0.01);
      c.root.updateMatrixWorld(true);
      const head = c.headPos;
      cam.position.set(head.x + 0.12, head.y + 0.06, head.z + 0.42);
      cam.lookAt(head.x, head.y + 0.01, head.z + 0.03);
      this.renderer.setRenderTarget(rt);
      this.renderer.render(scene, cam);
      this.renderer.readRenderTargetPixels(rt, 0, 0, size, size, buf);
      const img = g.createImageData(size, size);
      for (let y = 0; y < size; y++) img.data.set(buf.subarray((size - 1 - y) * size * 4, (size - y) * size * 4), y * size * 4);
      g.putImageData(img, 0, 0);
      this.portraits[id] = cnv.toDataURL("image/png");
      parent?.add(c.root);
      c.root.position.copy(saved);
    }
    this.renderer.setRenderTarget(null);
    this.renderer.setScissorTest(true);
    rt.dispose();
  }

  private showMenu() {
    this.state = "menu";
    document.exitPointerLock?.();
    this.ui.letterbox(false);
    this.ui.showPortraits(false);
    this.ui.setupPanels([], []);
    this.ui.setObjective("");
    this.ui.setArrow(null);
    this.ui.boss(null);
    this.menuCam();
    const saved = loadSave();
    this.ui.menu(this.portraits, !!saved, (players, cont) => {
      audio.unlock();
      this.start(cont ? 0 : players, cont ? saved : null);
    });
    audio.play("menu");
  }

  private menuCam() {
    this.cutTarget.pos.set(-2, 1.2, 9);
    this.cutTarget.look.set(5, 3.5, -11);
    this.cutCam.position.copy(this.cutTarget.pos);
    this.cutLook.copy(this.cutTarget.look);
  }

  // ------------------------------------------------------------ session
  private start(players: number, saved: SaveData | null) {
    this.save = saved ?? freshSave();
    const count = saved ? Math.max(1, Number(localStorage.getItem("dm-players") || 1)) : players;
    localStorage.setItem("dm-players", String(count));
    this.count = count;
    this.party = [this.cats.dymok!, this.cats.milena!];
    if (count === 3) this.party.push(this.cats.pixel!);
    this.cats.pixel!.root.visible = count === 3;
    this.cats.pixel!.root.position.set(0, -50, 0);
    for (const c of this.party) {
      c.health = c.maxHealth;
      c.state = "normal";
      c.setCostume(this.save.equipped[c.def.id] ?? null);
    }
    this.players = [];
    for (let i = 0; i < count; i++) {
      const cat = [this.cats.dymok!, this.cats.milena!, this.cats.pixel!][i];
      this.players.push({ idx: i, cat, yaw: Math.PI, pitch: 0.25, dist: 1.7, fp: false, camera: new THREE.PerspectiveCamera(62, 1, 0.03, 600), rect: { x: 0, y: 0, w: 1, hgt: 1 }, prompt: "", lastLook: 0 });
    }
    this.layoutViewports();
    this.world.pickups.forEach((p) => {
      p.taken = this.save.taken.includes(p.id);
      p.mesh.visible = !p.taken;
    });
    this.applyFlags();
    this.ui.setFish(this.save.fish);
    this.started = true;
    if (!this.save.flags.intro) {
      this.placeAtStart();
      this.runCutscene(() => this.introCutscene());
    } else {
      this.respawnAll();
      this.state = "play";
    }
    this.refreshPortraits();
  }

  private applyFlags() {
    const f = this.save.flags;
    const w = this.world;
    if (f.grateOpen) {
      w.grate.state = "open";
      w.grate.collider.enabled = false;
      w.grate.mesh.position.z = -17.2;
    } else {
      w.grate.state = "stuck";
      w.grate.collider.enabled = true;
      w.grate.collider.box.min.z = -16.6;
      w.grate.collider.box.max.z = -15.4;
      w.grate.mesh.position.z = -16;
    }
    w.interactables.find((i) => i.id === "latch")!.enabled = false;
    w.interactables.find((i) => i.id === "grate_push")!.enabled = !f.grateOpen;
    w.interactables.find((i) => i.id === "coop")!.enabled = !f.bracelets;
    w.window.position.y = f.intro ? 4.4 : 5.05;
    w.rain.visible = !!f.intro && !f.met;
    this.karniz.state = f.bossDefeated ? "defeated" : "inactive";
    this.cats.karniz!.root.position.copy(w.karnizSpawn);
    if (f.bossDefeated) this.cats.karniz!.root.position.set(22.6, 12.5, -18.6);
    this.bossActive = false;
  }

  private placeAtStart() {
    const d = this.cats.dymok!, m = this.cats.milena!;
    d.root.position.copy(this.world.spawn.dymok);
    d.yaw = Math.PI;
    m.root.position.copy(this.world.spawn.milenaStreet);
    if (this.count === 3) this.cats.pixel!.root.position.copy(this.world.spawn.pixel);
  }

  private checkpointFor(cat: Cat) {
    const cp = this.world.checkpoints.find((c) => c.id === this.save.checkpoint);
    if (cp) return cp.pos.clone().add(new THREE.Vector3((this.party.indexOf(cat) - 1) * 0.5, 0.05, 0.3));
    if (cat.def.id === "dymok") return this.world.spawn.dymok.clone();
    if (cat.def.id === "pixel") return this.world.spawn.pixel.clone();
    return this.count === 1 && !this.save.flags.met ? this.world.spawn.milenaBasement.clone() : new THREE.Vector3(0, 0.05, 10);
  }

  private respawnAll() {
    for (const c of this.party) {
      c.root.position.copy(this.checkpointFor(c));
      c.body.vel.set(0, 0, 0);
    }
    this.setupCompanions();
  }

  private setupCompanions() {
    const controlled = new Set(this.players.map((p) => p.cat));
    for (const c of this.party) {
      if (controlled.has(c)) c.ai = "none";
      else c.ai = this.save.flags.met ? "follow" : "wait";
    }
  }

  private layoutViewports() {
    const n = this.players.length;
    const rects: PanelRect[] = n === 1 ? [{ x: 0, y: 0, w: 1, hgt: 1 }] : n === 2 ? [{ x: 0, y: 0, w: 0.5, hgt: 1 }, { x: 0.5, y: 0, w: 0.5, hgt: 1 }] : [{ x: 0, y: 0, w: 0.5, hgt: 1 }, { x: 0.5, y: 0, w: 0.5, hgt: 0.5 }, { x: 0.5, y: 0.5, w: 0.5, hgt: 0.5 }];
    this.players.forEach((p, i) => (p.rect = rects[i]));
    this.ui.setupPanels(rects, this.players.map((p) => p.cat.def.name));
    this.ui.showPortraits(n === 1);
    this.resize();
  }

  private resize() {
    this.renderer.setSize(innerWidth, innerHeight, false);
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    for (const p of this.players) {
      p.camera.aspect = (p.rect.w * innerWidth) / (p.rect.hgt * innerHeight);
      p.camera.updateProjectionMatrix();
    }
    this.cutCam.aspect = innerWidth / innerHeight;
    this.cutCam.updateProjectionMatrix();
  }

  setQuality(q: string) {
    this.qualityName = q;
    const shells = q === "high" ? 12 : q === "med" ? 8 : 4;
    quality.shells = shells;
    // hide the outer shells instead of rebuilding materials
    for (const c of Object.values(this.cats)) {
      let i = 0;
      c?.model?.traverse((o) => {
        if (o.userData.furShell) {
          i++;
          o.visible = i % 12 < shells || shells >= 12;
        }
      });
    }
    this.renderer.setPixelRatio(q === "low" ? 1 : Math.min(devicePixelRatio, 1.5));
  }

  // ------------------------------------------------------------ portraits / switching
  private refreshPortraits() {
    if (this.count !== 1) return;
    const active = this.players[0].cat;
    const list = this.party.map((c) => ({
      id: c.def.id,
      name: c.def.name,
      img: this.portraits[c.def.id],
      active: c === active,
      locked: c !== active && !this.save.flags.grateOpen,
      order: c === active ? "" : c.ai === "follow" ? "за мной" : c.ai === "wait" ? "ждёт" : "",
    }));
    this.ui.setPortraits(list, (id) => this.switchTo(this.cats[id as CatId]!));
  }

  private switchTo(cat: Cat) {
    const p = this.players[0];
    if (cat === p.cat || this.count !== 1) return;
    if (!this.save.flags.grateOpen) {
      this.ui.toast("Сначала котам нужно помочь друг другу — тогда можно переключаться.");
      return;
    }
    const old = p.cat;
    old.ai = "follow";
    cat.ai = "none";
    p.cat = cat;
    p.yaw = cat.yaw + Math.PI;
    this.ui.soulFlash();
    audio.meow(cat.def.pitch, 0.6);
    this.refreshPortraits();
  }

  // ------------------------------------------------------------ cutscenes
  private wait(s: number) {
    return new Promise<void>((res) => {
      if (this.skipping) res();
      else this.timers.push({ t: s, res });
    });
  }

  private async say(speaker: string | null, text: string, s?: number) {
    this.ui.subtitle(speaker, text, speaker ? SPEAKER_COLORS[speaker] : "#fff");
    const cat = Object.values(this.cats).find((c) => c?.def.name === speaker);
    if (cat && !this.skipping) audio.meow(cat.def.pitch, 0.5 + Math.min(1, text.length / 60));
    await this.wait(s ?? Math.max(1.8, text.length * 0.055));
    this.ui.subtitle(null, null);
  }

  private shot(pos: THREE.Vector3, look: THREE.Vector3, cut = false, speed = 2) {
    this.cutTarget.pos.copy(pos);
    this.cutTarget.look.copy(look);
    this.cutTarget.speed = speed;
    if (cut || this.skipping) {
      this.cutCam.position.copy(pos);
      this.cutLook.copy(look);
    }
  }

  private async runCutscene(script: () => Promise<void>) {
    this.state = "cutscene";
    this.skipping = false;
    document.exitPointerLock?.();
    this.ui.letterbox(true);
    for (const c of this.party) c.state = "scripted";
    try {
      await script();
    } finally {
      this.ui.subtitle(null, null);
      this.ui.letterbox(false);
      this.skipping = false;
      this.timers = [];
      for (const c of this.party) {
        c.state = "normal";
        c.scriptedTarget = null;
      }
      writeSave(this.save);
      this.state = "play";
      for (const p of this.players) p.yaw = p.cat.yaw + Math.PI;
    }
  }

  private walk(cat: Cat, to: THREE.Vector3, speed = 1.3) {
    cat.scriptedTarget = to.clone();
    cat.scriptedSpeed = speed;
  }

  private async introCutscene() {
    const d = this.cats.dymok!, m = this.cats.milena!, w = this.world;
    audio.play("comedy");
    d.root.position.set(8.4, 3.62, -11.6);
    d.yaw = Math.PI / 2;
    w.ball.position.set(8.9, 3.69, -11.55);
    this.shot(new THREE.Vector3(11.6, 4.3, -8.6), new THREE.Vector3(8.8, 3.9, -11.5), true);
    this.ui.toast("Бруклин. Вечер. Где-то на третьем этаже…", 3000);
    await this.wait(1.2);
    await this.say("Дымок", "Мяч. Мой любимый жёлто-зелёно-оранжевый мяч. Иди к папочке.");
    d.actions.Attack?.reset();
    d.play("Attack", 0.05);
    audio.swipe();
    const ballFrom = w.ball.position.clone(), ballTo = new THREE.Vector3(10.5, 3.69, -11.2);
    for (let i = 0; i <= 20 && !this.skipping; i++) {
      w.ball.position.lerpVectors(ballFrom, ballTo, i / 20);
      w.ball.rotation.z -= 0.3;
      await this.wait(0.03);
    }
    w.ball.position.copy(ballTo);
    const pigeon = this.pigeonProto!.clone();
    pigeon.position.set(10.4, 4.54, -10.82);
    pigeon.rotation.y = -Math.PI / 2;
    this.scene.add(pigeon);
    audio.coo();
    this.shot(new THREE.Vector3(9.4, 4.3, -9.6), new THREE.Vector3(10.2, 4.1, -11.2));
    await this.say("Голубь", "Курлык. (перевод: «Какой пухлый котик»)");
    await this.say("Дымок", "ЧТО ты сказал?! Я не пухлый. Я ПУШИСТЫЙ!");
    this.walk(d, new THREE.Vector3(10.1, 3.62, -11.4), 3);
    await this.wait(0.6);
    for (let i = 0; i < 30 && !this.skipping; i++) {
      pigeon.position.add(new THREE.Vector3(0.12, 0.08, 0.1));
      await this.wait(0.02);
    }
    this.scene.remove(pigeon);
    // the wind slams the window shut
    this.shot(new THREE.Vector3(10.5, 4.2, -9.4), new THREE.Vector3(8.8, 4.3, -11.8));
    await this.wait(0.5);
    w.window.position.y = 4.4;
    audio.slam();
    this.shake = 0.5;
    d.squash = 1;
    await this.wait(0.8);
    d.scriptedTarget = null;
    d.yaw = Math.PI;
    await this.say("Дымок", "…");
    await this.say("Дымок", "Так. Спокойно. Я взрослый, самостоятельный кот.");
    audio.meow(0.7, 2.2);
    await this.say("Дымок", "ХОЗЯЙКА-А-А! ОТКРО-О-ОЙ!", 2.4);
    await this.say(null, "Хозяйка ушла в магазин. Придётся искать другой вход. Может, через подвал?", 3);
    // Milena's side of the story
    audio.play("comedy");
    this.shot(new THREE.Vector3(-0.5, 1.6, 19.5), new THREE.Vector3(-3.2, 0.5, 13.4), true);
    m.root.position.set(-3, 0.14, 13.4);
    m.yaw = Math.PI / 2;
    m.model.visible = false;
    await this.say("Хозяйка", "Осторожно с переноской! Там Милена!");
    const door = w.carrier.getObjectByName("door")!;
    door.rotation.y = -0.4;
    audio.clank();
    m.model.visible = true;
    m.root.position.set(-2.4, 0.13, 13.3);
    await this.say("Милена", "Шумно. Грузовик рычит. Люди топают. Нет, спасибо.");
    w.rain.visible = true;
    this.walk(m, new THREE.Vector3(0, 0.13, 12.8), 5);
    await this.wait(0.7);
    this.walk(m, new THREE.Vector3(0.2, 0.02, 9.5), 5);
    this.shot(new THREE.Vector3(3, 1.2, 8), new THREE.Vector3(0, 0.3, 11));
    await this.say("Хозяйка", "Милена?! Кис-кис-кис!");
    await this.say("Милена", "…И ещё дождь. Прекрасно. Просто прекрасно. Прячусь в подвал.");
    m.scriptedTarget = null;
    if (this.count === 3) {
      const px = this.cats.pixel!;
      px.root.position.copy(w.spawn.pixel);
      px.yaw = 0;
      this.shot(new THREE.Vector3(3.4, 0.9, 12.6), new THREE.Vector3(2, 0.3, 10.5), true);
      await this.say("Пиксель", "Я Пиксель, из метро. Двое потерянных котов? Звучит как приключение. Я в деле!");
    }
    this.save.flags.intro = true;
    this.save.checkpoint = "start";
    // setup after (also runs when skipped)
    w.window.position.y = 4.4;
    w.ball.position.copy(ballTo);
    d.root.position.copy(w.spawn.dymok);
    d.yaw = 0;
    if (this.count === 1) {
      m.root.position.copy(w.spawn.milenaBasement);
      m.yaw = -Math.PI / 2;
    } else m.root.position.set(0.3, 0.05, 9.8);
    this.setupCompanions();
    this.ui.toast("Глава 1 — «Бруклинский двор»", 3000);
  }

  private async meetCutscene() {
    const d = this.cats.dymok!, m = this.cats.milena!;
    audio.play("tender");
    const mid = d.root.position.clone().lerp(m.root.position, 0.5);
    d.yaw = Math.atan2(m.root.position.x - d.root.position.x, m.root.position.z - d.root.position.z);
    m.yaw = d.yaw + Math.PI;
    const side = new THREE.Vector3(Math.cos(d.yaw), 0, -Math.sin(d.yaw));
    this.shot(mid.clone().addScaledVector(side, 1.6).add(new THREE.Vector3(0, 0.5, 0)), mid.clone().add(new THREE.Vector3(0, 0.25, 0)), true);
    await this.say("Дымок", "Ой! Тут кто-то есть. Привет, я Дымок. Сразу скажу: я не толстый, я пушистый.");
    await this.say("Милена", "Я ничего не говорила.");
    await this.say("Дымок", "Ты подумала.");
    await this.say("Милена", "Милена. И я не потерялась. Я… исследую.");
    await this.say("Дымок", "Я тоже! Исследую, как попасть домой.");
    await this.say("Милена", "За той решёткой — грузовой лифт на крышу. С крыши виден весь район.");
    this.shot(new THREE.Vector3(0.4, -2, -14.3), new THREE.Vector3(-2.15, -2.4, -16), false, 1.5);
    await this.say("Дымок", "Решётка застряла? Отойди-ка. Сейчас будет… мощно.");
    await this.say("Милена", "Если сдвинешь её хоть чуть-чуть — я пролезу и открою защёлку.");
    if (this.count === 3) await this.say("Пиксель", "А я… буду морально поддерживать. Громко.");
    this.save.flags.met = true;
    this.world.rain.visible = false;
    this.setupCompanions();
  }

  private async grateOpenedCutscene() {
    const d = this.cats.dymok!, m = this.cats.milena!;
    audio.play("comedy");
    this.shot(new THREE.Vector3(-4.4, -2.2, -13.4), new THREE.Vector3(-2.2, -2.7, -16), true);
    await this.say("Милена", "Щёлк! Готово.");
    await this.say("Дымок", "Мы отличная команда. Ты — ловкая. Я — …");
    await this.say("Милена", "Пушистый. Я поняла.");
    this.addFish(20, "Совместное задание");
    this.save.flags.grateOpen = true;
    if (this.count === 1) this.ui.toast("Теперь можно переключаться между котами: Tab или портреты слева. G — «за мной / жди».", 5000);
    void d;
    void m;
    this.refreshPortraits();
  }

  private async bossIntro() {
    const k = this.cats.karniz!;
    audio.play("boss");
    k.root.position.copy(this.world.karnizSpawn);
    const lead = this.players[0].cat;
    k.yaw = Math.atan2(lead.root.position.x - k.root.position.x, lead.root.position.z - k.root.position.z);
    k.actions.Hiss?.reset();
    k.play("Hiss");
    audio.hiss();
    this.shot(k.root.position.clone().add(new THREE.Vector3(1.4, 0.7, 1.6)), k.root.position.clone().add(new THREE.Vector3(0, 0.35, 0)), true);
    await this.say("Карниз", "Стоп-стоп-стоп. Это МОЯ крыша. Мои голуби, моя антенна, мой вид на мост.");
    await this.say(lead.def.name, "Мы просто ищем дорогу домой.");
    await this.say("Карниз", "Дорога домой — через меня. Мяу-ха-ха!");
    await this.say(null, "Уклоняйся от прыжков (следи за «!»). Бей, когда Карниз выдохся и сидит со звёздочками. Шипение Милены ослепляет его, рывок Дымка бьёт сильнее.", 5);
    this.save.checkpoint = "roofB";
  }

  private async bossDefeat() {
    const k = this.cats.karniz!;
    audio.play("comedy");
    audio.fanfare();
    k.play("Sit");
    this.shot(k.root.position.clone().add(new THREE.Vector3(-1.4, 0.6, 1.2)), k.root.position.clone().add(new THREE.Vector3(0, 0.3, 0)), true);
    await this.say("Карниз", "Ладно-ладно! Сдаюсь! Вы крутые. Особенно толстый.");
    await this.say("Дымок", "ПУШИСТЫЙ!");
    await this.say("Карниз", "Внизу лавка Пломбира. Скажите, что вы от Карниза — будет скидка на сардины.");
    await this.say("Милена", "А дорогу домой подскажешь?");
    await this.say("Карниз", "Ваш дом? Хм… С той стороны парка пахнет знакомым кормом. Но это уже другая история.");
    this.save.flags.bossDefeated = true;
    this.addFish(50, "Победа над Карнизом");
    k.root.position.set(22.6, 12.5, -18.6);
    this.ui.boss(null);
    this.bossActive = false;
  }

  // ------------------------------------------------------------ gameplay helpers
  private addFish(n: number, why?: string) {
    this.save.fish += n;
    this.ui.setFish(this.save.fish);
    if (why) this.ui.toast(`+${n} 🐟 — ${why}`);
    audio.fish();
    writeSave(this.save);
  }

  private objective(): { text: string; target: THREE.Vector3 | null } {
    const f = this.save.flags;
    const lead = this.players[0]?.cat.root.position;
    if (!f.met) {
      const inBasement = lead && lead.y < -1;
      return { text: "Найди другой вход домой — спустись в подвал (лестница во дворе)", target: inBasement ? this.cats.milena!.root.position : new THREE.Vector3(0, -1, -10.5) };
    }
    if (!f.grateOpen) return { text: "Решётка: Дымок — рывок (Q) у решётки, Милена — пролезть в щель и открыть защёлку", target: new THREE.Vector3(-2.15, -2.5, -16) };
    if (!f.bracelets) return { text: "Поднимитесь на крышу (грузовой лифт или пожарная лестница) и загляните в голубятню", target: lead && lead.y < 11 && lead.y < -0.5 ? new THREE.Vector3(-10, -3, -18) : new THREE.Vector3(7, 12.5, -15.8) };
    if (!f.bossDefeated) return { text: "Перелети на соседнюю крышу: держи ПКМ / R, когда рядом светящийся крюк", target: lead && lead.x > 20 ? this.cats.karniz!.root.position : new THREE.Vector3(18, 19.6, -16) };
    if (!f.costume) return { text: "Загляни в лавку Пломбира и купи костюм", target: new THREE.Vector3(-18.6, 0.5, 0) };
    return { text: "Свободная прогулка: собирай рыбки и исследуй двор", target: null };
  }

  private tryInteract(p: Player) {
    const cat = p.cat;
    const it = this.nearestInteractable(cat);
    if (!it) {
      if (this.hiddenInBox === cat) this.exitBox();
      return;
    }
    const w = this.world;
    switch (it.id) {
      case "shop":
        this.openShop(p);
        break;
      case "cardboard":
        if (this.hiddenInBox === cat) this.exitBox();
        else if (!this.hiddenInBox) {
          this.hiddenInBox = cat;
          cat.model.visible = false;
          audio.alert();
          this.ui.toast(`${cat.def.name} в коробке. Идеальная маскировка. Никто ничего не заподозрит.`);
        }
        break;
      case "grate_push":
        this.ui.toast("Решётка застряла намертво. Нужен рывок Дымка (Q)!");
        break;
      case "latch":
        if (w.grate.state === "shifted") {
          w.grate.state = "open";
          w.grate.collider.enabled = false;
          it.enabled = false;
          audio.clank();
          const mesh = w.grate.mesh;
          const from = mesh.position.z;
          let k = 0;
          const anim = (_: number, dt: number) => {
            k = Math.min(1, k + dt * 1.5);
            mesh.position.z = from + (-17.2 - from) * k;
          };
          w.animated.push(anim);
          if (!this.save.flags.grateOpen) this.runCutscene(() => this.grateOpenedCutscene());
        }
        break;
      case "elevator": {
        const e = w.elevator;
        if (e.moving) break;
        e.target = e.y < 4 ? e.top : e.bottom;
        e.moving = true;
        audio.clank();
        this.ui.toast("Лифтовая музыка. Коты ненавидят ждать.");
        break;
      }
      case "coop":
        if (!this.save.flags.bracelets) {
          this.save.flags.bracelets = true;
          it.enabled = false;
          w.coopDoor.rotation.y = -1.8;
          audio.clank();
          audio.coo();
          for (const pg of w.pigeons) if (pg.home.y > 10) this.scarePigeon(pg, cat.root.position);
          this.ui.toast("Паутинные браслеты найдены! Держи ПКМ / R рядом со светящимися крюками.", 5000);
          this.addFish(10);
          this.save.checkpoint = "roofA";
          writeSave(this.save);
          this.later(0.6, () => this.ui.subtitle(cat.def.name, "Кто-то тут явно пересмотрел кино про пауков.", SPEAKER_COLORS[cat.def.name]));
          this.later(4, () => this.ui.subtitle(null, null));
        }
        break;
    }
  }

  private exitBox() {
    if (!this.hiddenInBox) return;
    this.hiddenInBox.model.visible = true;
    this.hiddenInBox = null;
    this.world.cardboard.position.y = 0.225;
  }

  private nearestInteractable(cat: Cat) {
    let best = null as null | (typeof this.world.interactables)[number], bd = Infinity;
    for (const it of this.world.interactables) {
      if (!it.enabled || (it.who && !it.who.includes(cat.def.id))) continue;
      const d = it.pos.distanceTo(cat.root.position);
      if (d < it.radius && d < bd && Math.abs(it.pos.y - cat.root.position.y) < 1.5) {
        bd = d;
        best = it;
      }
    }
    if (this.hiddenInBox === cat) return this.world.interactables.find((i) => i.id === "cardboard")!;
    return best;
  }

  private openShop(p: Player) {
    this.state = "modal";
    document.exitPointerLock?.();
    audio.play("shop");
    audio.meow(this.plombir.def.pitch, 1);
    const revert = () => {
      for (const c of this.party) if (c.costume !== (this.save.equipped[c.def.id] ?? null)) c.setCostume(this.save.equipped[c.def.id] ?? null);
    };
    this.ui.shop({ fish: this.save.fish, owned: [...this.save.owned], equipped: { ...this.save.equipped }, cans: this.save.cans, discount: !!this.save.flags.bossDefeated }, {
      tryOn: (c: Costume | null, catId: string) => {
        const cat = this.cats[catId as CatId]!;
        cat.setCostume(c?.id ?? null);
        this.ui.toast(`${cat.def.name} примеряет ${c?.name ?? "ничего"}. Смотрится… ${["шикарно", "дерзко", "по-бруклински", "бесценно"][Math.floor(Math.random() * 4)]}!`);
      },
      buyCostume: (c) => {
        if (this.save.fish < c.price) return false;
        this.save.fish -= c.price;
        this.save.owned.push(c.id);
        this.save.equipped[c.cat] = c.id;
        this.save.flags.costume = true;
        this.cats[c.cat]!.setCostume(c.id);
        this.ui.setFish(this.save.fish);
        audio.fanfare();
        writeSave(this.save);
        return true;
      },
      equip: (c, catId) => {
        this.save.equipped[catId] = c?.id ?? null;
        this.cats[catId as CatId]!.setCostume(c?.id ?? null);
        writeSave(this.save);
      },
      buyCans: (qty, unit) => {
        const total = qty * unit;
        if (this.save.fish < total) return false;
        this.save.fish -= total;
        this.save.cans += qty;
        this.ui.setFish(this.save.fish);
        audio.fish();
        writeSave(this.save);
        return true;
      },
      close: () => {
        revert();
        this.ui.closeModal();
        this.state = "play";
        this.lastMusic = "";
      },
    });
    void p;
  }

  private scarePigeon(pg: (typeof this.world.pigeons)[number], from: THREE.Vector3) {
    if (pg.flying > 0) return;
    const d = pg.mesh.position.clone().sub(from).setY(0).normalize();
    pg.vel.set(d.x * 4 + (Math.random() - 0.5) * 2, 5 + Math.random() * 2, d.z * 4 + (Math.random() - 0.5) * 2);
    pg.flying = 6 + Math.random() * 3;
    if (Math.random() < 0.3) audio.coo();
  }

  // ------------------------------------------------------------ frame
  /** QA helper: advance the simulation without rendering (software GL is ~1 fps). */
  async debugStep(seconds: number, keys: string[] = []) {
    keys.forEach((k) => this.input.keys.add(k));
    const n = Math.round(seconds * 30);
    for (let i = 0; i < n; i++) {
      this.frame(1 / 30, false);
      for (let k = 0; k < 8; k++) await null; // let cutscene promises advance
    }
    keys.forEach((k) => this.input.keys.delete(k));
    this.frame(1 / 30, true);
  }

  private frame(fixedDt?: number, draw = true) {
    const dt = fixedDt ?? Math.min(0.05, this.clock.getDelta());
    this.time += dt;
    furWind.value += dt * 2;
    for (const a of this.world.animated) a(this.time, dt);
    const inputs = this.players.map((p, i) => this.input.read(i, this.count));
    const p0 = inputs[0];

    if (this.state === "play" && p0?.pressed.has("pause")) this.openPause();
    else if (this.state === "modal" && this.input.wasPressed("Escape")) {
      (this.ui.modal?.querySelector("[data-close]") as HTMLButtonElement | null)?.click();
    }

    if (this.state === "cutscene") {
      if (p0?.pressed.has("skip") || this.input.wasPressed("Space")) {
        this.skipping = true;
        this.timers.forEach((t) => t.res());
        this.timers = [];
      }
      for (const t of [...this.timers]) {
        t.t -= dt;
        if (t.t <= 0) {
          this.timers.splice(this.timers.indexOf(t), 1);
          t.res();
        }
      }
      for (const c of this.party) c.update(dt, null, 0, this.world.physics, [], false);
      this.karniz.cat.mixer.update(dt);
    } else if (this.state === "play") {
      this.updatePlay(dt, inputs);
    }
    this.plombir.mixer.update(dt);
    this.updatePigeons(dt);
    this.updateCars(dt);
    this.updateElevator(dt);
    const focus = this.players[0]?.cat.root.position ?? new THREE.Vector3();
    this.world.updateRain(dt, focus);
    this.sun.target.position.copy(focus);
    this.sun.position.copy(focus).add(new THREE.Vector3(-30, 24, 36));
    this.updateMusic();
    if (draw) this.render(dt);
    else this.stepCameras(dt);
    this.input.endFrame();
  }

  private updatePlay(dt: number, inputs: PlayerInput[]) {
    for (const d of [...this.delayed]) {
      d.t -= dt;
      if (d.t <= 0) {
        this.delayed.splice(this.delayed.indexOf(d), 1);
        d.fn();
      }
    }
    const w = this.world;
    const f = this.save.flags;
    for (const p of this.players) {
      const inp = inputs[p.idx];
      const cat = p.cat;
      // camera look
      p.yaw -= inp.lookX;
      p.pitch = THREE.MathUtils.clamp(p.pitch + inp.lookY, p.fp ? -1.2 : -0.35, 1.2);
      if (Math.abs(inp.lookX) + Math.abs(inp.lookY) > 0.0001) p.lastLook = this.time;
      const autoFollow = !(p.idx === 0 && this.input.pointerLocked);
      if (autoFollow && this.time - p.lastLook > 1.2 && cat.moving > 0.5 && !p.fp) {
        let d = cat.yaw + Math.PI - p.yaw;
        d = Math.atan2(Math.sin(d), Math.cos(d));
        p.yaw += d * (1 - Math.exp(-1.5 * dt));
      }
      if (inp.pressed.has("fp")) p.fp = !p.fp;
      if (inp.pressed.has("switch") && this.count === 1) {
        const i = this.party.indexOf(cat);
        this.switchTo(this.party[(i + 1) % this.party.length]);
      }
      if (inp.pressed.has("command") && this.count === 1 && f.grateOpen) {
        for (const c of this.party) if (c !== p.cat) c.ai = c.ai === "follow" ? "wait" : "follow";
        const other = this.party.find((c) => c !== p.cat)!;
        this.ui.toast(`${other.def.name}: ${other.ai === "follow" ? "«Иду за тобой!»" : "«Жду тут. Не забудь меня.»"}`);
        this.refreshPortraits();
      }
      if (inp.pressed.has("interact")) this.tryInteract(p);

      const ev = p.cat.update(dt, inp, p.yaw, w.physics, w.anchors, !!f.bracelets);
      if (this.hiddenInBox === cat) {
        w.cardboard.position.set(cat.root.position.x, cat.root.position.y + 0.225, cat.root.position.z);
        w.cardboard.rotation.y = cat.yaw;
        if (cat.moving > 0.3 && Math.random() < dt * 0.3) this.ui.toast("*коробка подозрительно шуршит*", 1500);
      }
      if (ev.landed && ev.landed > 13) this.ui.toast("Кошки всегда приземляются на лапы. Почти всегда.", 2200);
      if (ev.attacked) this.onAttack(cat);
      if (ev.ability) this.onAbility(cat, ev.ability);
      p.prompt = "";
      const it = this.nearestInteractable(cat);
      if (it) p.prompt = `${KEY_LABEL[p.idx]} — ${it.id === "cardboard" && this.hiddenInBox === cat ? "Вылезти из коробки" : it.prompt}`;
      else if (cat.state !== "swing" && f.bracelets && w.anchors.some((a) => a.distanceTo(cat.root.position) < 12 && a.y > cat.root.position.y + 1)) p.prompt = `${p.idx === 0 ? "ПКМ / R" : p.idx === 1 ? "'" : "Num3"} — паутина`;
      if (w.hideSpots.some((h) => h.containsPoint(cat.root.position.clone().add(new THREE.Vector3(0, 0.1, 0))))) p.prompt = "Ты спрятался под машиной. Тебя никто не видит.";
    }
    if (this.input.wasPressed("KeyH")) this.eatCan(this.players[0].cat);
    this.updateCompanions(dt);

    // pickups & checkpoints
    for (const c of this.party) {
      for (const pk of w.pickups) {
        if (pk.taken) continue;
        pk.mesh.rotation.y += dt * 2;
        pk.mesh.position.y = pk.pos.y + Math.sin(this.time * 3 + pk.pos.x) * 0.04;
        if (pk.pos.distanceTo(c.root.position.clone().add(new THREE.Vector3(0, 0.2, 0))) < 0.45) {
          pk.taken = true;
          pk.mesh.visible = false;
          this.save.taken.push(pk.id);
          this.addFish(pk.value, pk.value > 1 ? "Тайник!" : undefined);
        }
      }
      for (const cp of w.checkpoints) {
        if (cp.pos.distanceTo(c.root.position) < 0.7 && this.save.checkpoint !== cp.id) {
          this.save.checkpoint = cp.id;
          this.party.forEach((x) => (x.health = x.maxHealth));
          writeSave(this.save);
          if (this.seenCheckpoint !== cp.id) this.ui.toast(`Лежанка «${cp.name}»: прогресс сохранён, здоровье восстановлено`);
          this.seenCheckpoint = cp.id;
        }
      }
      if (c.health <= 0 || c.root.position.y < -25) this.respawn(c);
    }

    // story triggers
    const d = this.cats.dymok!, m = this.cats.milena!;
    if (!f.met && d.root.position.distanceTo(m.root.position) < 3 && d.root.position.y < -1 && m.root.position.y < -1) {
      this.runCutscene(() => this.meetCutscene());
      return;
    }
    if (!f.bossDefeated && !this.bossActive && this.party.some((c) => w.bossArena.containsPoint(c.root.position) && c.body.grounded)) {
      this.bossActive = true;
      this.runCutscene(() => this.bossIntro()).then(() => this.karniz.start());
      return;
    }
    if (this.bossActive) {
      const cam = this.players[0].camera;
      this.karniz.update(dt, this.party, w, cam);
      this.ui.boss(this.karniz.hp, this.karniz.maxHp);
      if (this.karniz.state === "defeated") {
        this.bossActive = false;
        this.runCutscene(() => this.bossDefeat()).then(() => {
          this.state = "modal";
          this.ui.endCard(() => (this.state = "play"));
        });
      }
    } else {
      this.karniz.update(dt, [], w, this.players[0].camera);
    }
  }

  private eatCan(cat: Cat) {
    if (this.save.cans <= 0) {
      this.ui.toast("Консерв нет. Загляни к Пломбиру.");
      return;
    }
    if (cat.health >= cat.maxHealth) {
      this.ui.toast(`${cat.def.name} не голоден. Невероятно, но факт.`);
      return;
    }
    this.save.cans--;
    cat.health = cat.maxHealth;
    audio.fish();
    this.ui.toast(`${cat.def.name} съел сардины. Ням! (осталось ${this.save.cans})`);
    writeSave(this.save);
  }

  private respawn(c: Cat) {
    c.health = c.maxHealth;
    c.releaseSwing();
    c.root.position.copy(this.checkpointFor(c));
    c.body.vel.set(0, 0, 0);
    c.invuln = 2;
    this.ui.toast(`${c.def.name} вернулся на лежанку. Девять жизней — удобная штука.`);
  }

  private onAttack(cat: Cat) {
    const k = this.karniz;
    const kp = k.cat.root.position;
    if (this.bossActive) {
      const to = kp.clone().sub(cat.root.position);
      if (to.length() < 1.0 && to.setY(0).normalize().dot(cat.forward) > 0.3) k.hit(cat, 1);
    }
    for (const pg of this.world.pigeons) if (pg.mesh.position.distanceTo(cat.root.position) < 1.6) this.scarePigeon(pg, cat.root.position);
  }

  private onAbility(cat: Cat, kind: string) {
    const w = this.world;
    if (kind === "dash") {
      if (w.grate.state === "stuck" && cat.root.position.distanceTo(new THREE.Vector3(-2.15, -3, -16)) < 2.2) {
        this.later(0.25, () => {
          if (w.grate.state !== "stuck") return;
          w.grate.state = "shifted";
          // leave a gap only a slim cat fits through
          w.grate.collider.box.max.z = -15.64;
          w.grate.mesh.position.z = -16.24;
          audio.slam();
          this.shake = 0.3;
          w.interactables.find((i) => i.id === "latch")!.enabled = true;
          w.interactables.find((i) => i.id === "grate_push")!.enabled = false;
          this.ui.toast("БУМ! Решётка сдвинулась. Щель узкая — пролезет только стройный кот.", 4000);
          this.ui.subtitle("Дымок", "Я бы пролез. Просто не хочу.", SPEAKER_COLORS["Дымок"]);
          this.later(2.5, () => this.ui.subtitle(null, null));
        });
      }
      if (this.bossActive && cat.root.position.distanceTo(this.karniz.cat.root.position) < 2.2) {
        this.later(0.2, () => {
          if (cat.root.position.distanceTo(this.karniz.cat.root.position) < 1.1) this.karniz.hit(cat, 2);
        });
      }
    }
    if (kind === "hiss") {
      if (this.bossActive && cat.root.position.distanceTo(this.karniz.cat.root.position) < 3) this.karniz.blind();
      for (const pg of w.pigeons) if (pg.mesh.position.distanceTo(cat.root.position) < 5) this.scarePigeon(pg, cat.root.position);
    }
  }

  private updateCompanions(dt: number) {
    const leader = this.players[0].cat;
    for (const c of this.party) {
      if (this.players.some((p) => p.cat === c)) continue;
      let inp: PlayerInput | null = null;
      if (c.ai === "follow") {
        const to = leader.root.position.clone().sub(c.root.position);
        const flat = to.clone().setY(0);
        const dist = flat.length();
        if (to.length() > 16 && leader.body.grounded) {
          // off-screen catch-up so the companion never gets lost
          c.root.position.copy(leader.root.position).addScaledVector(leader.forward, -0.8);
          c.body.vel.set(0, 0, 0);
        } else if (dist > 1.4) {
          const dir = flat.normalize();
          inp = { moveX: dir.x, moveY: -dir.z, lookX: 0, lookY: 0, run: dist > 3.5, sneak: leader.sneaking, jumpHeld: false, swingHeld: false, pressed: new Set() };
          const stuck = c.moving < 0.3 && c.body.grounded;
          if ((to.y > 0.3 && dist < 2.5) || stuck) inp.pressed.add("jump");
        }
      }
      c.update(dt, inp, 0, this.world.physics, [], false);
      if (c.root.position.y < -25 || c.health <= 0) this.respawn(c);
    }
  }

  private updatePigeons(dt: number) {
    for (const pg of this.world.pigeons) {
      if (pg.flying > 0) {
        pg.flying -= dt;
        pg.vel.y -= 2 * dt;
        pg.mesh.position.addScaledVector(pg.vel, dt);
        pg.mesh.rotation.y = Math.atan2(pg.vel.x, pg.vel.z) + Math.PI;
        pg.mesh.rotation.z = Math.sin(this.time * 40) * 0.3;
        if (pg.flying <= 0) {
          pg.mesh.position.copy(pg.home);
          pg.vel.set(0, 0, 0);
          pg.mesh.rotation.z = 0;
        }
        continue;
      }
      // peck & strut
      pg.mesh.children[0] && (pg.mesh.children[0].rotation.x = Math.max(0, Math.sin(this.time * 5 + pg.home.x * 3)) * 0.5);
      if (this.state !== "play") continue;
      for (const c of this.party) {
        const dd = c.root.position.distanceTo(pg.mesh.position);
        if (dd < (c.moving > 3 ? 3 : 1.2) && !(this.hiddenInBox === c)) this.scarePigeon(pg, c.root.position);
      }
    }
  }

  private updateCars(dt: number) {
    for (const car of this.world.cars) {
      car.mesh.position.x += car.speed * dt;
      if (car.mesh.position.x > 60) car.mesh.position.x = -60;
      if (car.mesh.position.x < -60) car.mesh.position.x = 60;
      car.mesh.rotation.y = car.speed > 0 ? 0 : Math.PI;
      const p = car.mesh.position;
      car.collider.box.set(new THREE.Vector3(p.x - 2.1, 0.05, p.z - 0.9), new THREE.Vector3(p.x + 2.1, 1.7, p.z + 0.9));
      if (this.state !== "play") continue;
      for (const c of this.party) {
        const cp = c.root.position;
        if (Math.abs(cp.z - p.z) < 1.1 && Math.abs(cp.x - p.x) < 2.4 && cp.y < 1) {
          if (c.damage(1, new THREE.Vector3(p.x - Math.sign(car.speed) * 3, 0, p.z))) this.ui.toast("БИ-БИП! Осторожно, дорога!");
        }
      }
    }
  }

  private updateElevator(dt: number) {
    const e = this.world.elevator;
    if (!e.moving) {
      e.collider.velocity!.set(0, 0, 0);
      return;
    }
    const dir = Math.sign(e.target - e.y);
    const v = 1.8 * dir;
    const ny = e.y + v * dt;
    const arrived = (dir > 0 && ny >= e.target) || (dir < 0 && ny <= e.target);
    const y = arrived ? e.target : ny;
    e.collider.velocity!.set(0, arrived ? 0 : v, 0);
    const dy = y - e.y;
    e.y = y;
    e.mesh.position.y = y;
    e.collider.box.min.y += dy;
    e.collider.box.max.y += dy;
    // carry riders explicitly (keeps them glued when moving up)
    for (const c of this.party) {
      const p = c.root.position;
      if (p.x > -10.95 && p.x < -9.05 && p.z > -18.95 && p.z < -17.05 && Math.abs(p.y - (e.collider.box.max.y - dy)) < 0.15) {
        p.y = e.collider.box.max.y + 0.001;
        c.body.vel.y = Math.max(0, c.body.vel.y);
      }
    }
    if (arrived) {
      e.moving = false;
      audio.clank();
      if (e.y > 5) this.ui.toast("Динь! Крыша. Осторожно, тут ветрено.");
    }
  }

  private updateMusic() {
    let key = "menu";
    if (this.state === "cutscene") return;
    if (this.state === "menu") key = "menu";
    else if (this.state === "modal" && this.ui.modal?.classList.contains("shop")) key = "shop";
    else if (this.bossActive) key = "boss";
    else if (this.world.elevator.moving) key = "shop";
    else if (this.players[0]) key = this.world.regionAt(this.players[0].cat.root.position).music;
    if (key !== this.lastMusic) {
      this.lastMusic = key;
      audio.play(key);
      if (this.state !== "menu") this.ui.track(audio.trackName);
    }
  }

  private openPause() {
    this.state = "paused";
    document.exitPointerLock?.();
    this.ui.pause({ tracking: this.save.tracking, quality: this.qualityName, music: audio.musicVolume }, {
      resume: () => {
        this.ui.closeModal();
        this.state = "play";
      },
      tracking: (v) => {
        this.save.tracking = v;
        writeSave(this.save);
      },
      quality: (q) => this.setQuality(q),
      music: (v) => audio.setMusicVolume(v),
      menu: () => {
        writeSave(this.save);
        this.ui.closeModal();
        this.showMenu();
      },
      reset: () => {
        clearSave();
        this.ui.closeModal();
        location.reload();
      },
    });
  }

  // ------------------------------------------------------------ render
  private placeCamera(p: Player, dt: number) {
    const cat = p.cat;
    const cam = p.camera;
    if (p.fp) {
      const head = cat.headPos;
      cam.position.copy(head).add(new THREE.Vector3(0, 0.03, 0)).addScaledVector(cat.forward, 0.06);
      const dir = new THREE.Vector3(-Math.sin(p.yaw) * Math.cos(p.pitch), -Math.sin(p.pitch), -Math.cos(p.yaw) * Math.cos(p.pitch));
      cam.lookAt(cam.position.clone().add(dir));
      return;
    }
    const target = cat.root.position.clone().add(new THREE.Vector3(0, 0.32, 0));
    const dir = new THREE.Vector3(Math.sin(p.yaw) * Math.cos(p.pitch), Math.sin(p.pitch), Math.cos(p.yaw) * Math.cos(p.pitch));
    const want = p.dist + (cat.state === "swing" ? 1.5 : 0) + Math.min(1, cat.moving / 5) * 0.4;
    // keep the camera out of walls in tight rooms
    const hit = this.world.physics.raycast(target, dir, want + 0.2, "car");
    const d = Math.max(0.25, Math.min(want, hit - 0.18));
    const desired = target.clone().addScaledVector(dir, d);
    cam.position.lerp(desired, 1 - Math.exp(-(d < want ? 30 : 12) * dt));
    if (cam.position.distanceTo(desired) > 3) cam.position.copy(desired);
    cam.lookAt(target);
  }

  private stepCameras(dt: number) {
    const k = 1 - Math.exp(-this.cutTarget.speed * dt);
    this.cutCam.position.lerp(this.cutTarget.pos, k);
    this.cutLook.lerp(this.cutTarget.look, k);
    for (const p of this.players) this.placeCamera(p, dt);
  }

  private render(dt: number) {
    const W = innerWidth, H = innerHeight;
    if (this.state === "menu" || this.state === "cutscene" || !this.started) {
      if (this.state === "menu") {
        const t = this.time * 0.05;
        this.cutTarget.pos.set(Math.sin(t) * 6 + 1, 2.2 + Math.sin(t * 2) * 0.5, 7 + Math.cos(t) * 2);
      }
      const k = 1 - Math.exp(-this.cutTarget.speed * dt);
      this.cutCam.position.lerp(this.cutTarget.pos, k);
      this.cutLook.lerp(this.cutTarget.look, k);
      this.cutCam.lookAt(this.cutLook);
      if (this.shake > 0) {
        this.shake -= dt;
        this.cutCam.position.add(new THREE.Vector3((Math.random() - 0.5) * this.shake * 0.2, (Math.random() - 0.5) * this.shake * 0.2, 0));
      }
      this.renderer.setViewport(0, 0, W, H);
      this.renderer.setScissor(0, 0, W, H);
      this.renderer.render(this.scene, this.cutCam);
      return;
    }
    const obj = this.save.tracking ? this.objective() : { text: this.objective().text, target: null };
    this.ui.setObjective(obj.text);
    for (const p of this.players) {
      this.placeCamera(p, dt);
      if (this.shake > 0) p.camera.position.add(new THREE.Vector3((Math.random() - 0.5) * this.shake * 0.1, (Math.random() - 0.5) * this.shake * 0.1, 0));
      const vx = Math.floor(p.rect.x * W), vw = Math.floor(p.rect.w * W);
      const vh = Math.floor(p.rect.hgt * H), vy = H - Math.floor(p.rect.y * H) - vh;
      this.renderer.setViewport(vx, vy, vw, vh);
      this.renderer.setScissor(vx, vy, vw, vh);
      const hideSelf = p.fp;
      if (hideSelf) p.cat.model.visible = false;
      this.renderer.render(this.scene, p.camera);
      if (hideSelf) p.cat.model.visible = this.hiddenInBox !== p.cat;
      const c = p.cat;
      const ab = c.def.ability === "dash" ? "рывок" : c.def.ability === "hiss" ? "шипение-царапка" : "шипение · двойной прыжок";
      this.ui.updatePanel(p.idx, c.def.name + (c.costume ? " ✦" : ""), c.health, c.maxHealth, p.prompt, `${ABILITY_LABEL[p.idx]}: ${ab}${this.save.cans ? ` · H: сардины ×${this.save.cans}` : ""}`);
    }
    this.shake = Math.max(0, this.shake - dt);
    // navigation arrow for player 1 (only while tracking a mission)
    const p0 = this.players[0];
    if (obj.target && p0) {
      const d = obj.target.clone().sub(p0.cat.root.position);
      const fx = -Math.sin(p0.yaw), fz = -Math.cos(p0.yaw);
      const ang = Math.atan2(fx * d.z - fz * d.x, fx * d.x + fz * d.z);
      this.ui.setArrow(ang);
    } else this.ui.setArrow(null);
  }
}

export { CATS, COSTUMES };
