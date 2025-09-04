// src/orbits/kepler.ts

/**
 * Defines the set of classical orbital elements used to describe the orbit of a celestial body.
 * All angular values are in radians, and distances are in meters.
 */
export interface OrbitalElements {
  /** Semi-major axis in meters. */
  a_m: number;
  /** Eccentricity of the orbit (0 for circular, <1 for elliptical). */
  e: number;
  /** Inclination of the orbit in radians. */
  i_rad: number;
  /** Longitude of the ascending node in radians (Ω). */
  Omega_rad: number;
  /** Argument of periapsis in radians (ω). */
  omega_rad: number;
  /** Mean anomaly at the epoch in radians (M₀). */
  M0_rad: number;
  /** The reference time (epoch) in seconds, typically relative to a standard epoch like J2000. */
  epoch: number;
  /** The gravitational parameter (G * M) of the central body in m³/s². Defaults to the Sun's value. */
  mu?: number;
}

/**
 * Represents the state of a body in 3D Cartesian coordinates.
 */
export interface CartesianState {
  /** The x-coordinate in meters. */
  x: number;
  /** The y-coordinate in meters. */
  y: number;
  /** The z-coordinate in meters. */
  z: number;
  /** The radial distance from the origin (r) in meters. */
  r: number;
}

/** The standard gravitational parameter of the Sun in m³/s². */
const MU_SUN = 1.32712440018e20;

/**
 * Calculates the mean motion (average angular speed) of an orbiting body.
 * @param a_m The semi-major axis of the orbit in meters.
 * @param mu The gravitational parameter of the central body. Defaults to the Sun's.
 * @returns The mean motion in radians per second.
 */
export function meanMotion(a_m: number, mu = MU_SUN): number {
  return Math.sqrt(mu / (a_m ** 3)); // rad/s
}

/**
 * Solves Kepler's equation (M = E - e * sin(E)) for the eccentric anomaly (E)
 * using an iterative Newton-Raphson method.
 * @param M The mean anomaly in radians.
 * @param e The eccentricity of the orbit.
 * @param tol The tolerance for the solution. Defaults to 1e-9.
 * @returns The eccentric anomaly (E) in radians.
 */
export function solveKepler(M: number, e: number, tol = 1e-9): number {
  let E = M; // Initial guess
  for (let i = 0; i < 50; i++) { // Limit iterations to prevent infinite loops
    const f = E - e * Math.sin(E) - M;
    const fp = 1 - e * Math.cos(E);
    const dE = f / fp;
    E -= dE;
    if (Math.abs(dE) < tol) break;
  }
  return E;
}

/**
 * Converts a set of orbital elements to Cartesian coordinates at a specific time `t`.
 * @param el The orbital elements of the body.
 * @param t The time in seconds since the epoch.
 * @returns The Cartesian state (x, y, z, r) of the body.
 */
export function keplerToCartesian(el: OrbitalElements, t: number): CartesianState {
  const mu = el.mu ?? MU_SUN;
  const n = meanMotion(el.a_m, mu);
  const M = el.M0_rad + n * (t - el.epoch);

  return keplerToCartesianFromMeanAnomaly(el, M);
}

/**
 * Converts a set of orbital elements to Cartesian coordinates given a specific mean anomaly.
 * This is the core calculation step, separated for potential reuse.
 * @param el The orbital elements of the body.
 * @param M_rad The mean anomaly in radians for which to calculate the position.
 * @returns The Cartesian state (x, y, z, r) of the body.
 */
export function keplerToCartesianFromMeanAnomaly(el: OrbitalElements, M_rad: number): CartesianState {
  const E = solveKepler(M_rad, el.e);
  const cosE = Math.cos(E), sinE = Math.sin(E);

  // Position in the orbital plane (perifocal frame)
  const xP = el.a_m * (cosE - el.e);
  const yP = el.a_m * Math.sqrt(1 - el.e ** 2) * sinE;
  const r = Math.sqrt(xP * xP + yP * yP);

  // Rotate to inertial coordinates using classical rotation matrices
  const cosO = Math.cos(el.Omega_rad);
  const sinO = Math.sin(el.Omega_rad);
  const cosi = Math.cos(el.i_rad);
  const cosw = Math.cos(el.omega_rad);
  const sinw = Math.sin(el.omega_rad);
  const sini = Math.sin(el.i_rad);

  const x = (cosO * cosw - sinO * sinw * cosi) * xP + (-cosO * sinw - sinO * cosw * cosi) * yP;
  const y = (sinO * cosw + cosO * sinw * cosi) * xP + (-sinO * sinw + cosO * cosw * cosi) * yP;
  const z = (sinw * sini) * xP + (cosw * sini) * yP;

  return { x, y, z, r };
}

/**
 * Calculates the instantaneous orbital speed of a body using the vis-viva equation.
 * @param a_m The semi-major axis of the orbit in meters.
 * @param r_m The current radial distance from the central body in meters.
 * @param mu The gravitational parameter of the central body. Defaults to the Sun's.
 * @returns The orbital speed in meters per second.
 */
export function instantaneousOrbitalSpeed({ a_m, r_m, mu = MU_SUN }: { a_m: number; r_m: number; mu?: number }): number {
  return Math.sqrt(mu * (2 / r_m - 1 / a_m)); // m/s
}
