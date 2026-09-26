import * as THREE from "three";

/**
 * Shell-fur: N extra skinned copies of the body, each pushed out along the
 * skinned normal and alpha-tested against a per-strand hash. Gives real
 * silhouette fluff on top of the Blender mesh instead of a smooth "clay" look.
 */
export interface FurOptions {
  shells: number;
  length: number; // metres
  density: number; // strands per metre
  tipLighten: number;
}

const HASH = /* glsl */ `
float furHash(vec3 p){ p = fract(p*0.3183099+.1); p *= 17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
`;

function patch(mat: THREE.MeshStandardMaterial, shell: number, o: FurOptions, wind: { value: number }) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uShell = { value: shell };
    sh.uniforms.uFurLen = { value: o.length };
    sh.uniforms.uDensity = { value: o.density };
    sh.uniforms.uTip = { value: o.tipLighten };
    sh.uniforms.uWind = wind;
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nuniform float uShell; uniform float uFurLen; uniform float uWind; varying vec3 vFurPos;")
      .replace(
        "#include <skinning_vertex>",
        `#include <skinning_vertex>
        vFurPos = position;
        transformed += normalize(objectNormal) * uFurLen * uShell;
        transformed.y -= uFurLen * 0.35 * uShell * uShell;
        transformed.x += sin(uWind + position.z * 40.0) * uFurLen * 0.15 * uShell * uShell;`,
      );
    sh.fragmentShader = sh.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>\nuniform float uShell; uniform float uDensity; uniform float uTip; varying vec3 vFurPos;${HASH}`,
      )
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        {
          vec3 cell = floor(vFurPos * uDensity);
          vec3 f = fract(vFurPos * uDensity) - 0.5;
          float h = furHash(cell);
          if (uShell > 0.0) {
            float taper = 0.5 * (1.0 - uShell * h);
            if (h < uShell * 0.95 || length(f.xz) > taper + 0.08) discard;
          }
          // self-shadowing at the roots, lighter tips
          diffuseColor.rgb *= mix(0.55, 1.0, uShell) * (0.9 + 0.2 * h);
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.35 + 0.03, uTip * uShell * uShell);
        }`,
      );
  };
  mat.customProgramCacheKey = () => "fur-shell";
}

export function addFur(root: THREE.Object3D, o: FurOptions, wind: { value: number }) {
  const bodies: THREE.SkinnedMesh[] = [];
  root.traverse((c) => {
    const m = c as THREE.SkinnedMesh;
    if (m.isSkinnedMesh && (m.material as THREE.Material).name === "fur") bodies.push(m);
  });
  for (const body of bodies) {
    const base = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0, name: "fur" });
    patch(base, 0, o, wind);
    body.material = base;
    body.castShadow = true;
    body.receiveShadow = true;
    body.frustumCulled = false;
    for (let i = 1; i <= o.shells; i++) {
      const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0 });
      patch(mat, i / o.shells, o, wind);
      const s = new THREE.SkinnedMesh(body.geometry, mat);
      s.bind(body.skeleton, body.bindMatrix);
      s.position.copy(body.position);
      s.quaternion.copy(body.quaternion);
      s.scale.copy(body.scale);
      s.frustumCulled = false;
      s.castShadow = false;
      s.receiveShadow = true;
      s.userData.furShell = true;
      body.parent!.add(s);
    }
  }
}
