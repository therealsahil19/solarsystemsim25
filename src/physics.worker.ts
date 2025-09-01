interface CelestialBodyData {
    name: string;
    semiMajorAxis: number;
    eccentricity: number;
    orbitalPeriod: number;
}

let bodies: CelestialBodyData[] = [];
let simulationTime = 0;
const FIXED_DT = 1 / 60;
let accumulator = 0;

self.onmessage = (e: MessageEvent) => {
    const { command, payload } = e.data;

    if (command === 'init') {
        bodies = payload.bodies;
    } else if (command === 'update') {
        accumulator += payload.deltaTime;

        while (accumulator >= FIXED_DT) {
            updatePhysics(FIXED_DT);
            accumulator -= FIXED_DT;
        }

        postPositions();
    }
};

function updatePhysics(dt: number) {
    // In this simple simulation, we just advance the global time.
    // A more complex simulation would update velocities, etc. here.
    simulationTime += dt;
}

function postPositions() {
    if (!bodies.length) {
        return;
    }

    const positions = new Float32Array(bodies.length * 3);

    bodies.forEach((body, i) => {
        if (body.name === 'Sun') {
            positions[i * 3 + 0] = 0;
            positions[i * 3 + 1] = 0;
            positions[i * 3 + 2] = 0;
            return;
        }

        const a = body.semiMajorAxis;
        const e = body.eccentricity;
        const b = a * Math.sqrt(1 - e * e);
        const c = a * e;

        const planetAngle = (2 * Math.PI * simulationTime) / body.orbitalPeriod;
        const x = a * Math.cos(planetAngle) - c;
        const z = b * Math.sin(planetAngle);
        const y = 0;

        positions[i * 3 + 0] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
    });

    self.postMessage({ type: 'update', positions: positions.buffer });
}
