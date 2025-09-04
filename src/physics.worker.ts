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
        // Use absolute simulation time from main thread
        simulationTime = payload.simTimeInDays;
        postPositions();
    }
};

function updatePhysics(dt: number) {
    // Not used anymore, keeping for compatibility
    simulationTime += dt;
}

function postPositions() {
    if (!bodies || !Array.isArray(bodies) || bodies.length <= 0) {
        console.warn('postPositions: Invalid or empty bodies array:', bodies);
        return;
    }

    const validBodies = bodies.filter(body => body && typeof body.name === 'string' && typeof body.semiMajorAxis === 'number' && body.semiMajorAxis >= 0);

    if (validBodies.length !== bodies.length) {
        console.warn('postPositions: Filtered out invalid bodies. Original count:', bodies.length, 'Valid count:', validBodies.length);
    }

    const positions = new Float32Array(validBodies.length * 3);

    validBodies.forEach((body, i) => {
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
