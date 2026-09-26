import * as THREE from "three";

/**
 * Shell fur over the Blender mesh.
 *
 * Each shell is a skinned copy of the body pushed out along the normal and
 * combed along the body (towards the tail, downwards on legs), so strands lie
 * on the coat instead of sticking straight out. Strand coverage comes from 3D
 * value noise sampled at the root position: round cross-sections on any
 * surface orientation, tapering as the threshold rises per shell. Alpha is
 * anti-aliased with fwidth and resolved through alpha-to-coverage (MSAA), and
 * fades to average coverage when strands get smaller than a pixel.
 */
export interface FurOptions {
  shells: number;
  length: number; // metres
  density: number; // strand cells per metre
  comb: number; // how far strands lean along the body (x length)
  tipLighten: number;
  rim: number;
  /** bind-space spheres where fur fades out (eyes, nose) so it never covers them */
  masks?: { p: THREE.Vector3; r: number }[];
}

const NOISE = /* glsl */ `
float furH(vec3 p){ p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float furNoise(vec3 p){
  vec3 i = floor(p); vec3 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(furH(i), furH(i + vec3(1,0,0)), f.x), mix(furH(i + vec3(0,1,0)), furH(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(furH(i + vec3(0,0,1)), furH(i + vec3(1,0,1)), f.x), mix(furH(i + vec3(0,1,1)), furH(i + vec3(1,1,1)), f.x), f.y), f.z);
}
`;

export const furWind = { value: 0 };

function furMaterial(base: THREE.MeshStandardMaterial, shell: number, o: FurOptions) {
  const mat = new THREE.MeshStandardMaterial({ map: base.map, color: 0xffffff, roughness: shell > 0 ? 1 : 0.92, metalness: 0 });
  mat.name = shell > 0 ? "furShell" : "fur";
  if (shell > 0) mat.alphaToCoverage = true;
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uShell = { value: shell };
    sh.uniforms.uFurLen = { value: o.length };
    sh.uniforms.uDensity = { value: o.density };
    sh.uniforms.uComb = { value: o.comb };
    sh.uniforms.uTip = { value: o.tipLighten };
    sh.uniforms.uRim = { value: o.rim };
    sh.uniforms.uWind = furWind;
    const ms = (o.masks ?? []).slice(0, 4);
    while (ms.length < 4) ms.push({ p: new THREE.Vector3(1e3, 1e3, 1e3), r: 0.001 });
    sh.uniforms.uMask = { value: ms.map((x) => x.p) };
    sh.uniforms.uMaskR = { value: ms.map((x) => x.r) };
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nuniform float uShell; uniform float uFurLen; uniform float uComb; uniform float uWind; uniform vec3 uMask[4]; uniform float uMaskR[4]; varying vec3 vFurPos; varying float vFurLen;")
      .replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
        vFurPos = position;
        {
          // lean: backwards along the body, downwards on the legs (bind pose: +Y up, +Z forward)
          vec3 lean = mix(vec3(0.0, -1.0, -0.2), normalize(vec3(0.0, -0.45, -1.0)), smoothstep(0.07, 0.16, position.y));
          vec3 comb = lean - normal * dot(lean, normal);
          float h = uShell;
          float k = 1.0;
          for (int i = 0; i < 4; i++) k = min(k, smoothstep(uMaskR[i] * 1.05, uMaskR[i] * 2.1, distance(position, uMask[i])));
          vFurLen = k;
          h *= k;
          transformed += normal * uFurLen * h + comb * uFurLen * uComb * h * h;
          transformed.x += sin(uWind + position.z * 60.0 + position.y * 40.0) * uFurLen * 0.12 * h * h;
        }`,
      );
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", `#include <common>\nuniform float uShell; uniform float uDensity; uniform float uTip; uniform float uRim; varying vec3 vFurPos; varying float vFurLen;${NOISE}`)
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        {
          vec3 q = vFurPos * uDensity;
          float n = furNoise(q) * 0.72 + furNoise(q * 2.37 + 11.0) * 0.28;
          float h = uShell;
          if (h > 0.0) {
            if (vFurLen < 0.2) discard; // bare skin around eyes/nose: shells would z-fight
            float th = mix(0.22, 0.97, h);
            float fw = fwidth(n) * 1.3 + 1e-3;
            float a = smoothstep(th - fw, th + fw, n);
            // strands under a pixel: resolve to their average coverage instead of shimmering
            float cellsPerPx = length(fwidth(q));
            a = mix(a, clamp((0.97 - th) * 1.3, 0.0, 1.0), smoothstep(0.4, 1.2, cellsPerPx));
            diffuseColor.a = a;
            if (a < 0.01) discard;
          }
          float v = furH(floor(q));
          diffuseColor.rgb *= mix(0.58, 1.0, sqrt(h)) * (0.92 + 0.16 * v);
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.35 + 0.025, uTip * h * h);
        }`,
      )
      .replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
        {
          // soft sheen on the silhouette so dark coats still read against dark backgrounds
          float rimF = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 3.0);
          totalEmissiveRadiance += (diffuseColor.rgb * 0.7 + 0.05) * uRim * rimF * (0.3 + 0.7 * uShell);
        }`,
      );
  };
  mat.customProgramCacheKey = () => (shell > 0 ? "fur-shell" : "fur-base");
  return mat;
}

interface FurState {
  body: THREE.SkinnedMesh;
  base: THREE.MeshStandardMaterial;
  opts: FurOptions;
  shells: THREE.SkinnedMesh[];
}

export function addFur(root: THREE.Object3D, o: FurOptions) {
  const states: FurState[] = [];
  root.traverse((c) => {
    const m = c as THREE.SkinnedMesh;
    if (m.isSkinnedMesh && (m.material as THREE.Material).name === "fur") {
      states.push({ body: m, base: m.material as THREE.MeshStandardMaterial, opts: o, shells: [] });
    }
  });
  for (const s of states) {
    s.body.material = furMaterial(s.base, 0, o);
    s.body.castShadow = true;
    s.body.receiveShadow = true;
    s.body.frustumCulled = false;
    buildShells(s);
  }
  root.userData.fur = states;
}

function buildShells(s: FurState) {
  for (const sh of s.shells) {
    sh.parent?.remove(sh);
    (sh.material as THREE.Material).dispose();
  }
  s.shells = [];
  const n = s.opts.shells;
  for (let i = 1; i <= n; i++) {
    const m = new THREE.SkinnedMesh(s.body.geometry, furMaterial(s.base, i / n, s.opts));
    m.bind(s.body.skeleton, s.body.bindMatrix);
    m.position.copy(s.body.position);
    m.quaternion.copy(s.body.quaternion);
    m.scale.copy(s.body.scale);
    m.frustumCulled = false;
    m.castShadow = false;
    m.receiveShadow = true;
    m.renderOrder = i;
    m.userData.furShell = true;
    s.body.parent!.add(m);
    s.shells.push(m);
  }
}

export function setFurShells(root: THREE.Object3D, shells: number) {
  const states = root.userData.fur as FurState[] | undefined;
  if (!states) return;
  for (const s of states) {
    if (s.opts.shells === shells) continue;
    s.opts = { ...s.opts, shells };
    buildShells(s);
  }
}
