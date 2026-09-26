// Fully synthesised soundtrack + SFX (WebAudio). Each track is a small
// generative arrangement: chords, bass, drums and a seeded melody.

type Inst = "vibes" | "pluck" | "saw" | "square" | "pizz" | "organ" | "bell" | "clav";

interface Track {
  name: string;
  bpm: number;
  swing: number;
  root: number; // midi
  scale: number[];
  chords: number[][]; // scale-degree triads/7ths per bar
  kick: string;
  snare: string;
  hat: string;
  bass: "walk" | "root8" | "funk" | "drone" | "oompah" | "pulse";
  lead: Inst;
  pad?: boolean;
  leadDensity: number;
  leadOct: number;
  gain: number;
}

const MAJ = [0, 2, 4, 5, 7, 9, 11];
const MIN = [0, 2, 3, 5, 7, 8, 10];
const DOR = [0, 2, 3, 5, 7, 9, 10];
const PHR = [0, 1, 3, 5, 7, 8, 10];

export const TRACKS: Record<string, Track> = {
  menu: {
    name: "Мурлыкающий джаз", bpm: 92, swing: 0.18, root: 50, scale: DOR,
    chords: [[0, 2, 4, 6], [3, 5, 0, 2], [6, 1, 3, 5], [4, 6, 1, 3]],
    kick: "x.......x.......", snare: "....x.......x...", hat: "x.xxx.xxx.xxx.xx",
    bass: "walk", lead: "vibes", pad: true, leadDensity: 0.45, leadOct: 2, gain: 0.8,
  },
  yard: {
    name: "Бруклинский фанк", bpm: 104, swing: 0.12, root: 52, scale: DOR,
    chords: [[0, 2, 4, 6], [0, 2, 4, 6], [3, 5, 0, 2], [4, 6, 1, 3]],
    kick: "x..x..x...x..x..", snare: "....x.......x..x", hat: "xxxxxxxxxxxxxxxx",
    bass: "funk", lead: "clav", leadDensity: 0.55, leadOct: 1, gain: 0.8,
  },
  basement: {
    name: "Сырой подвал", bpm: 72, swing: 0, root: 45, scale: MIN,
    chords: [[0, 2, 4], [5, 0, 2], [3, 5, 0], [4, 6, 1]],
    kick: "x...............", snare: "..........x.....", hat: "......x.......x.",
    bass: "drone", lead: "bell", pad: true, leadDensity: 0.18, leadOct: 2, gain: 0.9,
  },
  roofs: {
    name: "Над крышами Бруклина", bpm: 124, swing: 0, root: 55, scale: MAJ,
    chords: [[0, 2, 4], [4, 6, 1], [5, 0, 2], [3, 5, 0]],
    kick: "x...x...x...x...", snare: "....x.......x...", hat: "..x...x...x...xx",
    bass: "root8", lead: "pluck", pad: true, leadDensity: 0.6, leadOct: 2, gain: 0.75,
  },
  boss: {
    name: "Карниз атакует!", bpm: 152, swing: 0, root: 40, scale: PHR,
    chords: [[0, 2, 4], [1, 3, 5], [0, 2, 4], [6, 1, 3]],
    kick: "x.x.x.x.x.x.x.xx", snare: "....x.......x.x.", hat: "xxxxxxxxxxxxxxxx",
    bass: "pulse", lead: "saw", leadDensity: 0.7, leadOct: 2, gain: 0.7,
  },
  shop: {
    name: "Лавка Пломбира (босса-нова)", bpm: 118, swing: 0.05, root: 53, scale: MAJ,
    chords: [[0, 2, 4, 6], [1, 3, 5, 0], [4, 6, 1, 3], [0, 2, 4, 6]],
    kick: "x..x....x..x....", snare: "..x..x....x..x..", hat: "x.x.x.x.x.x.x.x.",
    bass: "walk", lead: "vibes", pad: true, leadDensity: 0.4, leadOct: 2, gain: 0.75,
  },
  comedy: {
    name: "Кошачий казус", bpm: 116, swing: 0.1, root: 48, scale: MAJ,
    chords: [[0, 2, 4], [4, 6, 1], [0, 2, 4], [3, 5, 0]],
    kick: "x.......x.......", snare: "....x.......x...", hat: "",
    bass: "oompah", lead: "pizz", leadDensity: 0.6, leadOct: 2, gain: 0.8,
  },
  tender: {
    name: "Двое в большом городе", bpm: 80, swing: 0, root: 53, scale: MAJ,
    chords: [[0, 2, 4], [5, 0, 2], [3, 5, 0], [4, 6, 1]],
    kick: "", snare: "", hat: "",
    bass: "drone", lead: "bell", pad: true, leadDensity: 0.3, leadOct: 2, gain: 0.9,
  },
};

function mtof(m: number) {
  return 440 * Math.pow(2, (m - 69) / 12);
}

function rng(seed: number) {
  let s = seed;
  return () => ((s = (s * 16807) % 2147483647) / 2147483647);
}

export class AudioEngine {
  ctx: AudioContext | null = null;
  private master!: GainNode;
  private musicBus!: GainNode;
  private sfxBus!: GainNode;
  private reverb!: ConvolverNode;
  private noiseBuf!: AudioBuffer;
  private current: { track: Track; gain: GainNode; step: number; next: number; rand: () => number; melody: number } | null = null;
  private timer = 0;
  trackName = "";
  musicVolume = 0.55;

  unlock() {
    if (this.ctx) {
      this.ctx.resume();
      return;
    }
    const ctx = new AudioContext();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = 0.9;
    const comp = ctx.createDynamicsCompressor();
    this.master.connect(comp).connect(ctx.destination);
    this.musicBus = ctx.createGain();
    this.musicBus.gain.value = this.musicVolume;
    this.sfxBus = ctx.createGain();
    this.sfxBus.gain.value = 0.9;
    this.musicBus.connect(this.master);
    this.sfxBus.connect(this.master);
    this.reverb = ctx.createConvolver();
    const len = ctx.sampleRate * 2.2;
    const ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = ir.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    }
    this.reverb.buffer = ir;
    const rv = ctx.createGain();
    rv.gain.value = 0.35;
    this.reverb.connect(rv).connect(this.master);
    this.noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const nd = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    this.timer = window.setInterval(() => this.schedule(), 25);
  }

  play(key: keyof typeof TRACKS | string) {
    const track = TRACKS[key];
    if (!this.ctx || !track || this.current?.track === track) return;
    const ctx = this.ctx;
    if (this.current) {
      const g = this.current.gain;
      g.gain.setTargetAtTime(0, ctx.currentTime, 0.4);
      setTimeout(() => g.disconnect(), 3000);
    }
    const gain = ctx.createGain();
    gain.gain.value = 0;
    gain.gain.setTargetAtTime(track.gain, ctx.currentTime + 0.05, 0.5);
    gain.connect(this.musicBus);
    gain.connect(this.reverb);
    this.current = { track, gain, step: 0, next: ctx.currentTime + 0.1, rand: rng(key.length * 977 + track.bpm), melody: 3 };
    this.trackName = track.name;
  }

  private schedule() {
    const cur = this.current;
    if (!cur || !this.ctx) return;
    const t = cur.track;
    const sixteenth = 60 / t.bpm / 4;
    while (cur.next < this.ctx.currentTime + 0.12) {
      const s = cur.step % 16;
      const bar = Math.floor(cur.step / 16) % t.chords.length;
      const time = cur.next + (s % 2 ? t.swing * sixteenth : 0);
      this.playStep(cur, t, s, bar, time, sixteenth);
      cur.step++;
      cur.next += sixteenth;
    }
  }

  private deg(t: Track, d: number, oct = 0) {
    const o = Math.floor(d / 7);
    return t.root + t.scale[((d % 7) + 7) % 7] + 12 * (o + oct);
  }

  private playStep(cur: NonNullable<AudioEngine["current"]>, t: Track, s: number, bar: number, time: number, st: number) {
    const out = cur.gain;
    const chord = t.chords[bar];
    if (t.kick[s] === "x") this.kick(time, out);
    if (t.snare[s] === "x") this.snare(time, out, t.bpm > 140 ? 0.5 : 0.35);
    if (t.hat[s] === "x") this.hat(time, out, s % 4 === 2 ? 0.12 : 0.06);
    // bass
    const r = this.deg(t, chord[0], -1);
    switch (t.bass) {
      case "walk":
        if (s % 4 === 0) this.tone(time, mtof(this.deg(t, chord[(s / 4) % chord.length], -1)), st * 3.5, "triangle", 0.32, out, 900);
        break;
      case "root8":
        if (s % 2 === 0) this.tone(time, mtof(r), st * 1.6, "sawtooth", 0.16, out, 500);
        break;
      case "funk":
        if ([0, 3, 6, 10, 11, 14].includes(s)) this.tone(time, mtof(s === 11 ? r + 12 : r), st * 1.2, "sawtooth", 0.22, out, 700);
        break;
      case "pulse":
        this.tone(time, mtof(r), st * 0.8, "sawtooth", 0.14, out, 400 + (s % 4) * 200);
        break;
      case "drone":
        if (s === 0) this.tone(time, mtof(r), st * 16, "sine", 0.3, out, 300);
        break;
      case "oompah":
        if (s % 8 === 0) this.tone(time, mtof(r), st * 1.5, "sine", 0.45, out, 600);
        if (s % 8 === 4) this.tone(time, mtof(this.deg(t, chord[2], -1)), st * 1.5, "sine", 0.35, out, 600);
        break;
    }
    // pad
    if (t.pad && s === 0) {
      for (const d of chord) this.tone(time, mtof(this.deg(t, d, 0)), st * 16, "sawtooth", 0.035, out, 1200, 0.6);
    }
    if (t.bass === "oompah" && (s % 8 === 2 || s % 8 === 6)) {
      for (const d of chord) this.pluckInst("pizz", time, mtof(this.deg(t, d, 1)), 0.05, out);
    }
    // melody: random walk that prefers chord tones on strong beats
    const rand = cur.rand;
    const strong = s % 4 === 0;
    if (rand() < t.leadDensity * (strong ? 1.2 : 0.6)) {
      const step = Math.floor(rand() * 5) - 2;
      cur.melody = Math.max(-2, Math.min(9, cur.melody + step));
      let d = cur.melody;
      if (strong) d = chord.reduce((a, b) => (Math.abs(b - d) < Math.abs(a - d) ? b : a), chord[0]) + (d > 6 ? 7 : 0);
      this.pluckInst(t.lead, time, mtof(this.deg(t, d, t.leadOct - 1)), 0.11, out, st * (strong ? 3 : 1.5));
    }
  }

  private env(g: GainNode, time: number, peak: number, attack: number, dur: number) {
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(peak, time + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, time + attack + dur);
  }

  private tone(time: number, f: number, dur: number, type: OscillatorType, vol: number, out: AudioNode, cutoff = 2000, attack = 0.01) {
    const ctx = this.ctx!;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.value = f;
    const flt = ctx.createBiquadFilter();
    flt.type = "lowpass";
    flt.frequency.value = cutoff;
    const g = ctx.createGain();
    this.env(g, time, vol, attack, dur);
    o.connect(flt).connect(g).connect(out);
    o.start(time);
    o.stop(time + attack + dur + 0.05);
  }

  private pluckInst(inst: Inst, time: number, f: number, vol: number, out: AudioNode, dur = 0.3) {
    switch (inst) {
      case "vibes":
        this.tone(time, f, dur * 2 + 0.5, "sine", vol * 1.2, out, 4000);
        this.tone(time, f * 4, 0.15, "sine", vol * 0.2, out, 6000);
        break;
      case "bell":
        this.tone(time, f, 1.6, "sine", vol, out, 5000);
        this.tone(time, f * 2.76, 0.6, "sine", vol * 0.3, out, 8000);
        break;
      case "pluck":
        this.tone(time, f, 0.25, "triangle", vol * 1.2, out, 3000);
        this.tone(time, f * 2, 0.08, "square", vol * 0.15, out, 2500);
        break;
      case "clav":
        this.tone(time, f, 0.12, "square", vol * 0.5, out, 1800);
        break;
      case "saw":
        this.tone(time, f, dur, "sawtooth", vol * 0.55, out, 2200);
        this.tone(time, f * 1.01, dur, "sawtooth", vol * 0.4, out, 2200);
        break;
      case "square":
        this.tone(time, f, dur, "square", vol * 0.4, out, 2500);
        break;
      case "pizz":
        this.tone(time, f, 0.12, "triangle", vol * 1.4, out, 2000, 0.003);
        break;
      case "organ":
        this.tone(time, f, dur, "sine", vol, out);
        this.tone(time, f * 2, dur, "sine", vol * 0.5, out);
        break;
    }
  }

  private noise(time: number, dur: number, vol: number, out: AudioNode, type: BiquadFilterType, freq: number, q = 1) {
    const ctx = this.ctx!;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    this.env(g, time, vol, 0.004, dur);
    src.connect(f).connect(g).connect(out);
    src.start(time, Math.random() * 0.5);
    src.stop(time + dur + 0.05);
    return f;
  }

  private kick(time: number, out: AudioNode) {
    const ctx = this.ctx!;
    const o = ctx.createOscillator();
    o.frequency.setValueAtTime(140, time);
    o.frequency.exponentialRampToValueAtTime(40, time + 0.15);
    const g = ctx.createGain();
    this.env(g, time, 0.7, 0.003, 0.25);
    o.connect(g).connect(out);
    o.start(time);
    o.stop(time + 0.3);
  }

  private snare(time: number, out: AudioNode, vol: number) {
    this.noise(time, 0.16, vol, out, "bandpass", 1800, 0.8);
    this.tone(time, 190, 0.08, "triangle", vol * 0.5, out);
  }

  private hat(time: number, out: AudioNode, vol: number) {
    this.noise(time, 0.04, vol, out, "highpass", 8000);
  }

  // ------------------------------------------------------------ SFX
  private get now() {
    return this.ctx!.currentTime;
  }

  /** Formant-synth "мяу". pitch 1 = average cat. */
  meow(pitch = 1, long = 1) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = this.now, d = 0.45 * long;
    const o = ctx.createOscillator();
    o.type = "sawtooth";
    const f0 = 480 * pitch;
    o.frequency.setValueAtTime(f0 * 0.8, t);
    o.frequency.linearRampToValueAtTime(f0 * 1.25, t + d * 0.35);
    o.frequency.linearRampToValueAtTime(f0 * 0.7, t + d);
    const g = ctx.createGain();
    this.env(g, t, 0.35, 0.05, d);
    const mix = ctx.createGain();
    for (const [a, b, q] of [[700, 1300, 6], [1500, 2400, 8], [3000, 3400, 10]]) {
      const f = ctx.createBiquadFilter();
      f.type = "bandpass";
      f.Q.value = q;
      f.frequency.setValueAtTime(a * pitch, t);
      f.frequency.linearRampToValueAtTime(b * pitch, t + d * 0.4); // "ми-я"
      f.frequency.linearRampToValueAtTime(a * 0.7 * pitch, t + d); // "-у"
      o.connect(f).connect(mix);
    }
    mix.connect(g).connect(this.sfxBus);
    g.connect(this.reverb);
    o.start(t);
    o.stop(t + d + 0.1);
  }

  hiss() {
    if (!this.ctx) return;
    this.noise(this.now, 0.6, 0.35, this.sfxBus, "highpass", 3500);
  }

  coo() {
    if (!this.ctx) return;
    const t = this.now;
    for (let i = 0; i < 3; i++) this.tone(t + i * 0.13, 380 - i * 30, 0.12, "sine", 0.18, this.sfxBus, 1200, 0.03);
  }

  fish() {
    if (!this.ctx) return;
    const t = this.now;
    [0, 4, 7, 12].forEach((n, i) => this.tone(t + i * 0.05, mtof(84 + n), 0.18, "triangle", 0.18, this.sfxBus, 6000));
  }

  jump() {
    if (!this.ctx) return;
    const f = this.noise(this.now, 0.18, 0.12, this.sfxBus, "bandpass", 600, 2);
    f.frequency.exponentialRampToValueAtTime(2400, this.now + 0.18);
  }

  land(heavy: number) {
    if (!this.ctx) return;
    this.tone(this.now, 70, 0.15, "sine", Math.min(0.6, 0.15 * heavy), this.sfxBus);
    this.noise(this.now, 0.08, 0.1, this.sfxBus, "lowpass", 500);
  }

  hit() {
    if (!this.ctx) return;
    this.noise(this.now, 0.12, 0.45, this.sfxBus, "lowpass", 1400);
    this.tone(this.now, 110, 0.1, "square", 0.2, this.sfxBus, 800);
  }

  swipe() {
    if (!this.ctx) return;
    const f = this.noise(this.now, 0.14, 0.2, this.sfxBus, "bandpass", 3000, 1.5);
    f.frequency.exponentialRampToValueAtTime(900, this.now + 0.14);
  }

  thwip() {
    if (!this.ctx) return;
    const f = this.noise(this.now, 0.22, 0.3, this.sfxBus, "bandpass", 5000, 4);
    f.frequency.exponentialRampToValueAtTime(700, this.now + 0.22);
  }

  slam() {
    if (!this.ctx) return;
    this.noise(this.now, 0.35, 0.8, this.sfxBus, "lowpass", 900);
    this.tone(this.now, 55, 0.3, "sine", 0.6, this.sfxBus);
  }

  clank() {
    if (!this.ctx) return;
    this.tone(this.now, 520, 0.4, "square", 0.08, this.sfxBus, 3000);
    this.tone(this.now, 780, 0.3, "triangle", 0.1, this.sfxBus, 3000);
    this.noise(this.now, 0.1, 0.3, this.sfxBus, "bandpass", 2500, 3);
  }

  alert() {
    if (!this.ctx) return;
    // the famous "!" sting, as a nod to cardboard-box stealth games
    const t = this.now;
    this.tone(t, 988, 0.25, "square", 0.12, this.sfxBus, 5000);
    this.tone(t + 0.02, 1318, 0.25, "square", 0.1, this.sfxBus, 5000);
  }

  fanfare() {
    if (!this.ctx) return;
    const t = this.now;
    [0, 4, 7, 12, 7, 12, 16].forEach((n, i) => this.tone(t + i * 0.11, mtof(67 + n), 0.3, "square", 0.08, this.sfxBus, 4000));
  }

  boing() {
    if (!this.ctx) return;
    const ctx = this.ctx, t = this.now;
    const o = ctx.createOscillator();
    o.frequency.setValueAtTime(180, t);
    o.frequency.exponentialRampToValueAtTime(520, t + 0.25);
    const g = ctx.createGain();
    this.env(g, t, 0.25, 0.01, 0.3);
    o.connect(g).connect(this.sfxBus);
    o.start(t);
    o.stop(t + 0.35);
  }

  setMusicVolume(v: number) {
    this.musicVolume = v;
    if (this.musicBus) this.musicBus.gain.value = v;
  }

  stop() {
    clearInterval(this.timer);
  }
}

export const audio = new AudioEngine();
