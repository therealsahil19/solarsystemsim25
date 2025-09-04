import * as THREE from 'three';
import { CelestialBody } from '../data';
import store from '../state/store';
import { Trail } from './Trail';
import { calculateDisplayPosition, ScaleTransition } from '../utils/scaling';
import { SceneBody } from '../types/scene';

interface HistoryPoint {
    time: number; // simTime in days
    position: THREE.Vector3; // unscaled AU position
}

export class TrailManager {
    private trails = new Map<string, Trail>();
    private trailHistories = new Map<string, HistoryPoint[]>();
    private bodyMap = new Map<string, SceneBody>();

    constructor(private bodies: SceneBody[], private scene: THREE.Scene) {
        this.bodies.forEach(b => this.bodyMap.set(b.id, b));
    }

    public init() {
        this.bodies.forEach(body => {
            if (body.id !== 'sun') {
                const trail = new Trail(8000, new THREE.Color(body.color)); // 8000 = generous max points
                this.trails.set(body.id, trail);
                this.trailHistories.set(body.id, []);
                this.scene.add(trail.line);
            }
        });
    }

    public update(scaleTransition: ScaleTransition) {
        const { trailsEnabled, simTime } = store.getState();

        this.trails.forEach((trail, id) => {
            trail.setVisible(trailsEnabled);
            if (!trailsEnabled) return;

            const body = this.bodyMap.get(id);
            if (!body?.group) return;

            const history = this.trailHistories.get(id)!;

            // Add current position to history. The `body` object is a reference
            // from the main celestialObjects array, so its physicsPosition is updated each frame.
            history.push({
                time: simTime,
                position: body.physicsPosition.clone(),
            });

            // Determine trail duration and prune history
            const isMoon = body.parentId !== 'sun' && body.parentId !== null;
            const trailDurationDays = body.orbitalPeriod * (isMoon ? 0.5 : 2);

            const cutoffTime = simTime - trailDurationDays;
            const firstValidIndex = history.findIndex(p => p.time >= cutoffTime);

            if (firstValidIndex > 0) {
                history.splice(0, firstValidIndex);
            }

            // Scale points and update trail geometry
            const scaledPoints = history.map(p => calculateDisplayPosition(p.position, scaleTransition));
            trail.updateFromSampledPoints(scaledPoints);
        });
    }

    public updateResolutions(x: number, y: number) {
        this.trails.forEach(trail => trail.updateResolution(x, y));
    }
}
