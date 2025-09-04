import * as THREE from 'three';
import { CelestialBody } from '../data';
import store from '../state/store';
import { calculateDisplayPosition, ScaleTransition } from '../utils/scaling';
import { keplerToCartesianFromMeanAnomaly, OrbitalElements as KeplerOrbitalElements } from './kepler';
import { KM_PER_AU } from '../utils/units';

/**
 * Holds the data for a single orbit line, including the Three.js object
 * and the pre-calculated points for different levels of detail (LOD).
 * @internal
 */
interface OrbitData {
    /** The `THREE.Line` object representing the orbit path. */
    line: THREE.Line;
    /**
     * The unscaled, pre-calculated points of the orbit in AU.
     * Storing these allows for dynamic rescaling without recalculating the orbit.
     */
    auPoints: {
        /** A high-resolution set of points for when the camera is close. */
        high: THREE.Vector3[];
        /** A low-resolution set of points for when the camera is far away. */
        low: THREE.Vector3[];
    };
    /** The currently active level of detail. */
    currentLOD: 'high' | 'low';
}

/**
 * Manages the creation, display, and updating of all static orbit lines in the scene.
 * It handles different levels of detail (LOD) for performance and updates orbits
 * when the view scale changes.
 */
export class OrbitManager {
    private orbits = new Map<string, OrbitData>();
    private readonly G = 6.67430e-11; // Gravitational constant

    /**
     * @param celestialObjects An array of all celestial body data.
     * @param segmentsHigh The number of segments for high-LOD orbits.
     * @param segmentsLow The number of segments for low-LOD orbits.
     * @param color The color of the orbit lines.
     * @param opacity The opacity of the orbit lines.
     */
    constructor(
        private celestialObjects: CelestialBody[],
        private segmentsHigh = 512,
        private segmentsLow = 128,
        private color = 0xaaaaaa,
        private opacity = 0.5
    ) {}

    /**
     * Generates the points for an orbit path in unscaled Astronomical Units (AU).
     * It uses Keplerian orbital elements to calculate the path.
     * @param body The celestial body for which to create the orbit.
     * @returns An object containing high and low resolution points for the orbit.
     * @private
     */
    private createAuPoints(body: CelestialBody): { high: THREE.Vector3[]; low: THREE.Vector3[] } {
        const pointsHigh: THREE.Vector3[] = [];

        const elements = body.orbitalElements;
        const semiMajorAxisKm = elements?.aKm ?? (body.parentId === 'sun' ? body.semiMajorAxis * KM_PER_AU : body.semiMajorAxisKm!);
        if (!semiMajorAxisKm) return { high: [], low: [] };

        const eccentricity = elements?.e ?? body.eccentricity;
        const inclinationDeg = elements?.iDeg ?? body.inclination ?? 0;
        const lanDeg = elements?.lanDeg ?? 0;
        const argPeriDeg = elements?.argPeriDeg ?? 0;

        // For a stable orbit path, we don't need mean anomaly at epoch or a specific epoch.
        // We generate the path by iterating through the mean anomaly from 0 to 2*PI.
        const M0_rad = 0;
        const epoch = 0;

        let parentMassKg = 1.9885e30; // Default to Sun's mass
        if (body.parentId && body.parentId !== 'sun') {
            const parentBody = this.celestialObjects.find(b => b.id === body.parentId);
            if (parentBody?.mass) {
                parentMassKg = parentBody.mass * 1e24;
            }
        }
        const mu = this.G * parentMassKg;

        const keplerElements: KeplerOrbitalElements = {
            a_m: semiMajorAxisKm * 1000,
            e: eccentricity,
            i_rad: inclinationDeg * (Math.PI / 180),
            Omega_rad: lanDeg * (Math.PI / 180),
            omega_rad: argPeriDeg * (Math.PI / 180),
            M0_rad,
            epoch,
            mu
        };

        const AU_M = KM_PER_AU * 1000;

        for (let i = 0; i <= this.segmentsHigh; i++) {
            const M = (i / this.segmentsHigh) * 2 * Math.PI;
            const pos_m = keplerToCartesianFromMeanAnomaly(keplerElements, M);
            pointsHigh.push(new THREE.Vector3(pos_m.x / AU_M, pos_m.y / AU_M, pos_m.z / AU_M));
        }

        // Create the low-res points by sampling from the high-res array
        const pointsLow: THREE.Vector3[] = [];
        const step = this.segmentsHigh / this.segmentsLow;
        for (let i = 0; i <= this.segmentsLow; i++) {
            const index = Math.min(Math.round(i * step), pointsHigh.length - 1);
            pointsLow.push(pointsHigh[index]);
        }

        return { high: pointsHigh, low: pointsLow };
    }

    /**
     * Initializes all orbit lines, creates their Three.js objects, and adds them to the scene.
     * @param scene The main `THREE.Scene` to add the orbits to.
     * @param bodyMap A map from body ID to its scene group, used for parenting orbits correctly.
     */
    public init(scene: THREE.Scene, bodyMap: Map<string, { group: THREE.Group }>): void {
        const material = new THREE.LineBasicMaterial({
            color: this.color,
            opacity: this.opacity,
            transparent: true,
            linewidth: 1, // Note: this is not supported by all renderers/drivers
        });

        this.celestialObjects.forEach(body => {
            if (body.id === 'sun' || !body.parentId) return; // The sun doesn't orbit anything in this simulation

            const auPoints = this.createAuPoints(body);
            if (auPoints.high.length === 0) return;

            // Start with the low-LOD points
            const initialPoints = auPoints.low.map(p => calculateDisplayPosition(p, { active: false, progress: 1, fromPreset: 'realistic', toPreset: store.getState().scalePreset }));
            const geometry = new THREE.BufferGeometry().setFromPoints(initialPoints);

            const line = new THREE.Line(geometry, material);
            line.userData.name = `${body.name} Orbit`;

            // Attach the orbit line to its parent body's group
            const parent = bodyMap.get(body.parentId);
            if (parent) {
                parent.group.add(line);
            } else {
                scene.add(line); // Fallback to adding to the scene root
            }

            this.orbits.set(body.id, {
                line: line,
                auPoints: auPoints,
                currentLOD: 'low'
            });

            // Keep a reference on the body data for easy access
            body.orbit = line;
        });
    }

    /**
     * Updates the positions of all orbit vertices based on the current scale transition.
     * This is called every frame to ensure smooth scaling animations.
     * @param transition The current scale transition state.
     */
    public update(transition: ScaleTransition): void {
        this.orbits.forEach((orbit) => {
            const auPoints = orbit.currentLOD === 'high' ? orbit.auPoints.high : orbit.auPoints.low;
            const positions = orbit.line.geometry.attributes.position as THREE.BufferAttribute;

            for (let i = 0; i < auPoints.length; i++) {
                const scaledPos = calculateDisplayPosition(auPoints[i], transition);
                positions.setXYZ(i, scaledPos.x, scaledPos.y, scaledPos.z);
            }

            positions.needsUpdate = true;
            orbit.line.geometry.computeBoundingSphere();
        });
    }

    /**
     * Manually sets the Level of Detail (LOD) for a specific orbit.
     * @param bodyId The ID of the celestial body whose orbit will be changed.
     * @param lod The desired level of detail ('high' or 'low').
     */
    public setLOD(bodyId: string, lod: 'high' | 'low'): void {
        const orbit = this.orbits.get(bodyId);
        if (orbit && orbit.currentLOD !== lod) {
            const newPoints = lod === 'high' ? orbit.auPoints.high : orbit.auPoints.low;
            // To switch LOD, we replace the geometry with a new one
            orbit.line.geometry.dispose();
            orbit.line.geometry = new THREE.BufferGeometry().setFromPoints(newPoints);
            orbit.currentLOD = lod;
        }
    }

    /**
     * Automatically updates the Level of Detail (LOD) for all orbits based on their
     * distance from the camera.
     * @param camera The main scene camera.
     * @param threshold The distance threshold at which to switch from low to high LOD.
     */
    public updateLODs(camera: THREE.PerspectiveCamera, threshold: number): void {
        this.orbits.forEach((orbit, id) => {
            const body = this.celestialObjects.find(c => c.id === id);
            if (body?.group) {
                const distance = camera.position.distanceTo(body.group.position);
                const newLod = distance > threshold ? 'low' : 'high';
                this.setLOD(id, newLod);
            }
        });
    }
}
