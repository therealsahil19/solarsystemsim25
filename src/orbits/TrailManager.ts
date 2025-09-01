import * as THREE from 'three';
import { CelestialBody } from '../data';
import { store } from '../state/store';
import { Trail } from './Trail';
import { keplerToCartesian, OrbitalElements } from './kepler';
import { KM_PER_AU } from '../utils/units';
import { scaleDistance } from '../utils/misc';

function getPositionAtTime(body: CelestialBody, time: number): THREE.Vector3 {
    // This is a simplified model for circular orbits, similar to what's used for moons in main.ts
    // It will be used as a fallback if keplerian elements are not available.
    if (body.orbitalElements) {
        // Convert to the format keplerToCartesian expects
        const elements: OrbitalElements = {
            a_m: body.orbitalElements.aKm * 1000,
            e: body.orbitalElements.e,
            i_rad: body.orbitalElements.iDeg * (Math.PI / 180),
            Omega_rad: body.orbitalElements.lanDeg * (Math.PI / 180),
            omega_rad: body.orbitalElements.argPeriDeg * (Math.PI / 180),
            M0_rad: body.orbitalElements.meanAnomalyDeg * (Math.PI / 180),
            epoch: new Date(body.orbitalElements.epochISO).getTime() / 1000,
        };
        const cartesian = keplerToCartesian(elements, time);
        return new THREE.Vector3(scaleDistance(cartesian.x / KM_PER_AU / 1000), scaleDistance(cartesian.y / KM_PER_AU / 1000), scaleDistance(cartesian.z / KM_PER_AU / 1000));
    }

    // Fallback to simple circular orbit calculation
    const angle = (2 * Math.PI * time) / (body.orbitalPeriod * 24 * 3600); // time in seconds
    const radius = scaleDistance(body.semiMajorAxis);
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);
    return new THREE.Vector3(x, 0, z);
}

export class TrailManager {
    private trails = new Map<string, Trail>();

    constructor(private bodies: CelestialBody[], private scene: THREE.Scene) {}

    init() {
        this.bodies.forEach(body => {
            if (body.name !== 'Sun') {
                const trail = new Trail(2000, new THREE.Color(body.color)); // Max 2000 points
                this.trails.set(body.id, trail);
                this.scene.add(trail.line);
            }
        });
    }

    update() {
        const { trailsEnabled, trailLength, simTime } = store.getState();

        this.trails.forEach((trail, id) => {
            const body = this.bodies.find(b => b.id === id);
            if (!body) return;

            trail.setVisible(trailsEnabled);

            if (trailsEnabled) {
                const samplePoints: THREE.Vector3[] = [];
                const resolution = 200; // Fixed resolution for now
                const trailDurationSeconds = trailLength * 24 * 3600;

                for (let i = 0; i < resolution; i++) {
                    const time = simTime - (trailDurationSeconds * (1 - i / (resolution -1)));
                    const pos = getPositionAtTime(body, time);

                    // If the body has a parent, the position is relative to the parent
                    const parent = this.bodies.find(b => b.id === body.parentId);
                    if(parent && parent.group) {
                        pos.add(parent.group.position);
                    }
                    samplePoints.push(pos);
                }
                trail.updateFromSampledPoints(samplePoints);
            }
        });
    }
}
