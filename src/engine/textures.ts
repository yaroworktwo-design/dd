import * as THREE from "three";

// Procedural canvas textures, so the repo needs no binary texture assets.
type Painter = (g: CanvasRenderingContext2D, s: number) => void;
const cache = new Map<string, THREE.Texture>();

function rand(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function make(key: string, size: number, paint: Painter, repeat = 1, color = true) {
  const k = `${key}:${repeat}`;
  const hit = cache.get(k);
  if (hit) return hit;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d")!;
  paint(g, size);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.anisotropy = 8;
  if (color) t.colorSpace = THREE.SRGBColorSpace;
  cache.set(k, t);
  return t;
}

function speckle(g: CanvasRenderingContext2D, s: number, n: number, alpha: number, seed: number, dark = true) {
  const r = rand(seed);
  for (let i = 0; i < n; i++) {
    const v = Math.floor(r() * 255);
    g.fillStyle = dark ? `rgba(0,0,0,${r() * alpha})` : `rgba(${v},${v},${v},${r() * alpha})`;
    const w = 1 + r() * 3;
    g.fillRect(r() * s, r() * s, w, w);
  }
}

export function brick(tint = "#8a3b2a", seed = 1) {
  return make(`brick${tint}${seed}`, 512, (g, s) => {
    const r = rand(seed);
    g.fillStyle = "#b8ab98";
    g.fillRect(0, 0, s, s);
    const bh = s / 16, bw = s / 6;
    for (let row = 0; row < 16; row++) {
      const off = row % 2 ? bw / 2 : 0;
      for (let col = -1; col < 7; col++) {
        const base = new THREE.Color(tint).offsetHSL((r() - 0.5) * 0.03, (r() - 0.5) * 0.15, (r() - 0.5) * 0.12);
        g.fillStyle = `#${base.getHexString()}`;
        g.fillRect(col * bw + off + 2, row * bh + 2, bw - 4, bh - 4);
        // soot streaks and chipped corners
        if (r() < 0.2) {
          g.fillStyle = "rgba(20,15,10,0.25)";
          g.fillRect(col * bw + off + 2, row * bh + 2, bw - 4, (bh - 4) * r());
        }
      }
    }
    speckle(g, s, 6000, 0.25, seed + 7);
    const grd = g.createLinearGradient(0, 0, 0, s);
    grd.addColorStop(0, "rgba(0,0,0,0)");
    grd.addColorStop(1, "rgba(30,25,20,0.18)");
    g.fillStyle = grd;
    g.fillRect(0, 0, s, s);
  });
}

export function brickBump() {
  return make("brickbump", 512, (g, s) => {
    g.fillStyle = "#000";
    g.fillRect(0, 0, s, s);
    const bh = s / 16, bw = s / 6;
    g.fillStyle = "#fff";
    for (let row = 0; row < 16; row++) {
      const off = row % 2 ? bw / 2 : 0;
      for (let col = -1; col < 7; col++) g.fillRect(col * bw + off + 3, row * bh + 3, bw - 6, bh - 6);
    }
    speckle(g, s, 4000, 0.5, 3);
  }, 1, false);
}

export function concrete(seed = 2, tone = 128) {
  return make(`concrete${seed}${tone}`, 512, (g, s) => {
    g.fillStyle = `rgb(${tone - 4},${tone},${tone + 6})`;
    g.fillRect(0, 0, s, s);
    speckle(g, s, 20000, 0.18, seed, false);
    speckle(g, s, 8000, 0.2, seed + 1);
    const r = rand(seed + 5);
    g.strokeStyle = "rgba(0,0,0,0.25)";
    for (let i = 0; i < 6; i++) {
      g.beginPath();
      let x = r() * s, y = r() * s;
      g.moveTo(x, y);
      for (let k = 0; k < 8; k++) {
        x += (r() - 0.5) * 60;
        y += (r() - 0.5) * 60;
        g.lineTo(x, y);
      }
      g.stroke();
    }
    g.fillStyle = "rgba(0,0,0,0.12)";
    for (let i = 0; i < 8; i++) {
      g.beginPath();
      g.ellipse(r() * s, r() * s, 20 + r() * 60, 10 + r() * 40, r() * 3, 0, 7);
      g.fill();
    }
  });
}

export function asphalt() {
  return make("asphalt", 512, (g, s) => {
    g.fillStyle = "#3a3a3d";
    g.fillRect(0, 0, s, s);
    speckle(g, s, 40000, 0.35, 11, false);
    speckle(g, s, 20000, 0.4, 12);
  });
}

export function wood(seed = 4, base = "#6b4a2e") {
  return make(`wood${seed}${base}`, 256, (g, s) => {
    g.fillStyle = base;
    g.fillRect(0, 0, s, s);
    const r = rand(seed);
    for (let i = 0; i < 90; i++) {
      g.strokeStyle = `rgba(${r() < 0.5 ? "0,0,0" : "255,220,180"},${0.05 + r() * 0.1})`;
      g.lineWidth = 1 + r() * 2;
      g.beginPath();
      const y = r() * s;
      g.moveTo(0, y);
      g.bezierCurveTo(s * 0.3, y + (r() - 0.5) * 10, s * 0.6, y + (r() - 0.5) * 10, s, y);
      g.stroke();
    }
    g.fillStyle = "rgba(0,0,0,0.35)";
    for (let i = 0; i < 4; i++) g.fillRect(0, (i * s) / 4, s, 2);
  });
}

export function metal(seed = 5, base = "#4a4f55") {
  return make(`metal${seed}${base}`, 256, (g, s) => {
    g.fillStyle = base;
    g.fillRect(0, 0, s, s);
    speckle(g, s, 5000, 0.2, seed, false);
    const r = rand(seed);
    for (let i = 0; i < 40; i++) {
      g.fillStyle = `rgba(120,60,20,${r() * 0.25})`;
      g.beginPath();
      g.ellipse(r() * s, r() * s, r() * 18, r() * 10, 0, 0, 7);
      g.fill();
    }
  });
}

export function roofTar() {
  return make("tar", 512, (g, s) => {
    g.fillStyle = "#2f2d2b";
    g.fillRect(0, 0, s, s);
    speckle(g, s, 30000, 0.3, 21, false);
    g.strokeStyle = "rgba(0,0,0,0.5)";
    g.lineWidth = 3;
    for (let i = 0; i <= 4; i++) {
      g.beginPath();
      g.moveTo(0, (i * s) / 4);
      g.lineTo(s, (i * s) / 4);
      g.stroke();
    }
  });
}

/** Facade windows for the distant skyline; lit windows are emissive. */
export function windows(lit: boolean, seed = 9) {
  return make(`win${lit}${seed}`, 256, (g, s) => {
    const r = rand(seed);
    g.fillStyle = lit ? "#000" : "#3c3430";
    g.fillRect(0, 0, s, s);
    const n = 8;
    for (let y = 0; y < n; y++)
      for (let x = 0; x < n; x++) {
        const on = r() < 0.38;
        if (lit) {
          g.fillStyle = on ? ["#ffcf7a", "#ffe2a8", "#bfe0ff", "#ffb347"][Math.floor(r() * 4)] : "#000";
        } else {
          g.fillStyle = on ? "#6b5a45" : "#1b2230";
        }
        g.fillRect(x * (s / n) + 6, y * (s / n) + 5, s / n - 12, s / n - 10);
      }
  });
}

export function tiles() {
  return make("tiles", 256, (g, s) => {
    for (let y = 0; y < 8; y++)
      for (let x = 0; x < 8; x++) {
        g.fillStyle = (x + y) % 2 ? "#d9d4c7" : "#2f3a44";
        g.fillRect((x * s) / 8, (y * s) / 8, s / 8, s / 8);
      }
    speckle(g, s, 3000, 0.15, 31);
  });
}

export function sign(text: string, bg: string, fg: string, w = 512, h = 128) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d")!;
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);
  g.fillStyle = fg;
  g.font = `bold ${Math.floor(h * 0.55)}px 'Trebuchet MS', sans-serif`;
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.shadowColor = fg;
  g.shadowBlur = 18;
  g.fillText(text, w / 2, h / 2);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function fabric(seed: number, a: string, b: string) {
  return make(`fab${seed}${a}${b}`, 128, (g, s) => {
    g.fillStyle = a;
    g.fillRect(0, 0, s, s);
    g.fillStyle = b;
    for (let i = 0; i < s; i += 16) {
      g.fillRect(i, 0, 6, s);
      g.fillRect(0, i, s, 4);
    }
  });
}

/** Close-up window: mullions, curtains, warm room glow or dark glass. */
export function windowPane(lit: boolean) {
  return make(`pane${lit}`, 128, (g, s) => {
    if (lit) {
      const gr = g.createRadialGradient(s / 2, s * 0.6, 4, s / 2, s * 0.6, s * 0.8);
      gr.addColorStop(0, "#ffe2a8");
      gr.addColorStop(1, "#b0662a");
      g.fillStyle = gr;
    } else {
      const gr = g.createLinearGradient(0, 0, s, s);
      gr.addColorStop(0, "#39465a");
      gr.addColorStop(0.5, "#141b26");
      gr.addColorStop(1, "#253041");
      g.fillStyle = gr;
    }
    g.fillRect(0, 0, s, s);
    // curtains
    g.fillStyle = lit ? "rgba(150,40,40,0.75)" : "rgba(60,50,45,0.6)";
    g.fillRect(0, 0, s * 0.22, s);
    g.fillRect(s * 0.78, 0, s * 0.22, s);
    if (lit) {
      g.fillStyle = "rgba(60,30,10,0.5)"; // a plant silhouette on the sill
      g.beginPath();
      g.ellipse(s * 0.62, s * 0.9, 12, 16, 0, 0, 7);
      g.fill();
    }
    g.fillStyle = "#e8e0d0";
    g.fillRect(s / 2 - 3, 0, 6, s);
    g.fillRect(0, s * 0.45, s, 6);
  });
}
