import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { safeSetPositions } from '../utils/three-helpers';

/**
 * Represents the dynamic orbital trail of a single celestial body.
 * This class manages the `Line2` object from Three.js, which allows for
 * lines with controllable width, and handles updating the line's geometry
 * and appearance based on the body's recent positions.
 */
export class Trail {
    /** The underlying `Line2` object that is rendered in the scene. */
    line: Line2;
    /** The material used for the trail, allowing for color, width, and opacity control. */
    material: LineMaterial;
    /** The geometry of the trail, which stores the vertex positions and colors. */
    geometry: LineGeometry;
    private maxPoints: number;
    private baseColor: THREE.Color;

    /**
     * @param maxPoints The maximum number of points the trail can have.
     * @param color The base color of the trail. Defaults to white.
     */
    constructor(maxPoints: number, color = new THREE.Color(0xffffff)) {
        this.maxPoints = maxPoints;
        this.baseColor = color;

        this.geometry = new LineGeometry();
        this.material = new LineMaterial({
            color: 0xffffff, // This is multiplied by vertex colors, so white is neutral.
            linewidth: 1, // in pixels
            vertexColors: true,
            transparent: true,
            opacity: 0.4,
            resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
        });

        this.line = new Line2(this.geometry, this.material);
        // Disable frustum culling to ensure trails are always visible, even if the
        // center of the geometry is off-screen.
        this.line.frustumCulled = false;
    }

    /**
     * Updates the trail's geometry and colors from an array of recent positions.
     * The trail fades out at its tail (the oldest points).
     * @param sampledPositions An array of `THREE.Vector3` points representing the recent path.
     */
    updateFromSampledPoints(sampledPositions: THREE.Vector3[]) {
        if (!sampledPositions || sampledPositions.length < 2) {
            safeSetPositions(this.geometry, []);
            return;
        }

        const numPoints = Math.min(this.maxPoints, sampledPositions.length);

        const positions = new Float32Array(numPoints * 3);
        const colors = new Float32Array(numPoints * 3);

        // The tail of the trail is at the beginning of the array (oldest points).
        // We fade the first 5% of the trail to black to simulate it fading out.
        const fadeEndIndex = Math.ceil(numPoints * 0.05);

        for (let i = 0; i < numPoints; i++) {
            const p = sampledPositions[i];

            // Check if the point is a valid Vector3 to prevent errors.
            if (!p || typeof p.x !== 'number' || typeof p.y !== 'number' || typeof p.z !== 'number') {
                console.warn(`updateFromSampledPoints: Invalid point at index ${i}:`, p);
                // Use fallback coordinates to avoid breaking the trail.
                positions[i * 3] = 0;
                positions[i * 3 + 1] = 0;
                positions[i * 3 + 2] = 0;
            } else {
                positions[i * 3] = p.x;
                positions[i * 3 + 1] = p.y;
                positions[i * 3 + 2] = p.z;
            }

            let fade = 1.0;
            if (i < fadeEndIndex) {
                // Linearly fade in from the start of the tail.
                fade = i / fadeEndIndex;
            }

            colors[i * 3] = this.baseColor.r * fade;
            colors[i * 3 + 1] = this.baseColor.g * fade;
            colors[i * 3 + 2] = this.baseColor.b * fade;
        }

        this.geometry.setColors(colors);
        safeSetPositions(this.geometry, positions, { nameForWarnings: 'trail-line' });
    }

    /**
     * Updates the resolution of the `LineMaterial`. This should be called on window resize.
     * @param x The new width of the renderer.
     * @param y The new height of the renderer.
     */
    updateResolution(x: number, y: number) {
        this.material.resolution.set(x, y);
    }

    /**
     * Sets the visibility of the trail.
     * @param visible Whether the trail should be visible.
     */
    setVisible(visible: boolean) {
        this.line.visible = visible;
    }
}
