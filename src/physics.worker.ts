/**
 * Interface for the simplified celestial body data used within the physics worker.
 * This contains only the information necessary for calculating orbital positions.
 */
interface CelestialBodyData {
    name: string;
    semiMajorAxis: number;
    eccentricity: number;
    orbitalPeriod: number;
}

/** The array of celestial bodies being simulated. @private */
let bodies: CelestialBodyData[] = [];
/** The current simulation time in days. @private */
let simulationTime = 0;

/**
 * The main message handler for the web worker. It listens for commands from the main thread.
 * 'init': Initializes the worker with the celestial body data.
 * 'update': Receives the absolute simulation time from the main thread and triggers a position calculation.
 */
self.onmessage = (e: MessageEvent) => {
    const { command, payload } = e.data;

    if (command === 'init') {
        bodies = payload.bodies;
    } else if (command === 'update') {
        // Use the absolute simulation time from the main thread for calculations.
        simulationTime = payload.simTimeInDays;
        postPositions();
    }
};

/**
 * Calculates the positions of all celestial bodies for the current `simulationTime`
 * and posts the results back to the main thread.
 * @private
 */
function postPositions() {
    if (!bodies || !Array.isArray(bodies) || bodies.length <= 0) {
        console.warn('postPositions: Invalid or empty bodies array:', bodies);
        return;
    }

    // Filter out any invalid body data to prevent calculation errors.
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

        // Simplified 2D orbital calculation based on mean anomaly.
        // This assumes a non-inclined, co-planar orbit.
        const a = body.semiMajorAxis;
        const e = body.eccentricity;
        const b = a * Math.sqrt(1 - e * e); // Semi-minor axis
        const c = a * e; // Distance from center to focus

        const planetAngle = (2 * Math.PI * simulationTime) / body.orbitalPeriod;
        const x = a * Math.cos(planetAngle) - c;
        const z = b * Math.sin(planetAngle);
        const y = 0; // Assume all orbits are on the same plane for this simplified model.

        positions[i * 3 + 0] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
    });

    // Post the positions back to the main thread. The buffer is transferred for efficiency.
    self.postMessage({ type: 'update', positions: positions.buffer }, [positions.buffer]);
}
