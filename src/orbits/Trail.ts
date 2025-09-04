import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';

export class Trail {
    line: Line2;
    material: LineMaterial;
    geometry: LineGeometry;
    private maxPoints: number;
    private baseColor: THREE.Color;

    constructor(maxPoints: number, color = new THREE.Color(0xffffff)) {
        this.maxPoints = maxPoints;
        this.baseColor = color;

        this.geometry = new LineGeometry();
        this.material = new LineMaterial({
            color: 0xffffff, // This will be multiplied by vertex colors
            linewidth: 1, // in pixels
            vertexColors: true,
            transparent: true,
            opacity: 0.4, // Base opacity as requested by user
            resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
        });

        this.line = new Line2(this.geometry, this.material);
        this.line.frustumCulled = false;
    }

    updateFromSampledPoints(sampledPositions: THREE.Vector3[]) {
        const numPoints = Math.min(this.maxPoints, sampledPositions.length);

        if (numPoints < 2) {
            this.geometry.setPositions([]);
            return;
        }

        const positions = new Float32Array(numPoints * 3);
        const colors = new Float32Array(numPoints * 3);

        // The tail of the trail is at the beginning of the array (oldest points).
        // We fade the first 5% of the trail to black to simulate fading out.
        const fadeEndIndex = Math.ceil(numPoints * 0.05);

        for (let i = 0; i < numPoints; i++) {
            const p = sampledPositions[i];
            positions[i * 3] = p.x;
            positions[i * 3 + 1] = p.y;
            positions[i * 3 + 2] = p.z;

            let fade = 1.0;
            if (i < fadeEndIndex) {
                // Linearly fade in from the start of the tail
                fade = i / fadeEndIndex;
            }

            colors[i * 3] = this.baseColor.r * fade;
            colors[i * 3 + 1] = this.baseColor.g * fade;
            colors[i * 3 + 2] = this.baseColor.b * fade;
        }

        this.geometry.setPositions(positions);
        this.geometry.setColors(colors);
    }

    updateResolution(x: number, y: number) {
        this.material.resolution.set(x, y);
    }

    setVisible(visible: boolean) {
        this.line.visible = visible;
    }
}
