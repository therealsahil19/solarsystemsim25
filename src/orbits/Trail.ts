import * as THREE from 'three';

export class Trail {
  positions: Float32Array;
  alphas: Float32Array;
  geom: THREE.BufferGeometry;
  material: THREE.ShaderMaterial;
  line: THREE.Line;
  maxPoints: number;

  constructor(maxPoints: number, color = new THREE.Color(0xffffff)) {
    this.maxPoints = maxPoints;
    this.positions = new Float32Array(maxPoints * 3);
    this.alphas = new Float32Array(maxPoints);
    this.geom = new THREE.BufferGeometry();
    this.geom.setAttribute('position', new THREE.BufferAttribute(this.positions, 3).setUsage(THREE.DynamicDrawUsage));
    this.geom.setAttribute('alpha', new THREE.BufferAttribute(this.alphas, 1).setUsage(THREE.DynamicDrawUsage));

    this.material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { uColor: { value: color } },
      vertexShader: `
        attribute float alpha;
        varying float vAlpha;
        void main() {
          vAlpha = alpha;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          if (vAlpha < 0.01) discard;
          gl_FragColor = vec4(uColor, vAlpha);
        }
      `
    });

    this.line = new THREE.Line(this.geom, this.material);
    this.line.frustumCulled = false;
  }

  updateFromSampledPoints(sampledPositions: THREE.Vector3[], fadePower = 1.0) {
    const N = Math.min(this.maxPoints, sampledPositions.length);
    for (let i = 0; i < N; i++) {
      // The shader expects newest point first for the fade effect
      const p = sampledPositions[sampledPositions.length - N + i];
      const idx = i * 3;
      this.positions[idx] = p.x;
      this.positions[idx + 1] = p.y;
      this.positions[idx + 2] = p.z;

      const alpha = Math.pow(1.0 - (i / (N - 1)), fadePower);
      this.alphas[i] = alpha;
    }

    // Hide unused points by setting alpha to 0
    for (let i = N; i < this.maxPoints; i++) {
        this.alphas[i] = 0;
    }

    (this.geom.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.geom.attributes.alpha as THREE.BufferAttribute).needsUpdate = true;
    this.geom.setDrawRange(0, N);
  }

  setVisible(visible: boolean) {
      this.line.visible = visible;
  }
}
