import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GTAOPass } from "three/examples/jsm/postprocessing/GTAOPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

export type Quality = "high" | "med" | "low";

const GradeShader = {
  uniforms: { tDiffuse: { value: null }, uVignette: { value: 0.32 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uVignette; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      // gentle S-curve and split toning: warm highlights, cool shadows
      vec3 x = c.rgb;
      x = mix(x, x * x * (3.0 - 2.0 * x), 0.18);
      float l = dot(x, vec3(0.299, 0.587, 0.114));
      x += (vec3(0.02, 0.008, -0.015) * l) + vec3(-0.008, 0.0, 0.014) * (1.0 - l);
      float d = distance(vUv, vec2(0.5));
      x *= 1.0 - uVignette * smoothstep(0.35, 0.85, d);
      gl_FragColor = vec4(x, c.a);
    }`,
};

/** Render pipeline: MSAA scene -> GTAO -> bloom -> tone map/sRGB -> grade. */
export class Post {
  composer: EffectComposer;
  private renderPass: RenderPass;
  private gtao: GTAOPass;
  private bloom: UnrealBloomPass;
  enabled = true;

  constructor(private renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) {
    const size = renderer.getDrawingBufferSize(new THREE.Vector2());
    // multisampled target: needed for alpha-to-coverage fur and clean geometry edges
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 4 });
    this.composer = new EffectComposer(renderer, rt);
    this.renderPass = new RenderPass(scene, camera);
    this.gtao = new GTAOPass(scene, camera, size.x, size.y);
    this.gtao.blendIntensity = 0.85;
    this.gtao.updateGtaoMaterial({ radius: 0.6, distanceExponent: 1.4, thickness: 1.2, scale: 1.0, samples: 12 });
    this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.45, 0.6, 0.92);
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.gtao);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
    this.composer.addPass(new ShaderPass(GradeShader));
  }

  setCamera(cam: THREE.Camera) {
    this.renderPass.camera = cam;
    this.gtao.camera = cam;
  }

  setQuality(q: Quality) {
    this.enabled = q !== "low";
    this.gtao.enabled = q === "high";
    this.bloom.enabled = q !== "low";
  }

  setSize(w: number, h: number) {
    this.composer.setPixelRatio(this.renderer.getPixelRatio());
    this.composer.setSize(w, h);
  }

  render(scene: THREE.Scene, cam: THREE.Camera) {
    if (!this.enabled) {
      this.renderer.render(scene, cam);
      return;
    }
    this.setCamera(cam);
    this.composer.render();
  }
}
