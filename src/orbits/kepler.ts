// src/orbits/kepler.ts
export interface OrbitalElements {
  a_m: number;    // semi-major axis (meters)
  e: number;      // eccentricity
  i_rad: number;  // inclination (radians)
  Omega_rad: number; // longitude of ascending node (radians)
  omega_rad: number; // argument of periapsis (radians)
  M0_rad: number;  // mean anomaly at epoch (radians)
  epoch: number;   // epoch in seconds (or ms?) - define units
  mu?: number;     // gravitational parameter (m^3/s^2) (default to Sun)
}

export interface CartesianState {
  x: number;
  y: number;
  z: number;
  r: number; // radial distance
}

export function meanMotion(a_m: number, mu = 1.32712440018e20): number {
  return Math.sqrt(mu / (a_m ** 3)); // rad/s
}

export function solveKepler(M: number, e: number, tol = 1e-9): number {
  let E = M;
  for (let i = 0; i < 50; i++) {
    const f = E - e * Math.sin(E) - M;
    const fp = 1 - e * Math.cos(E);
    const dE = f / fp;
    E -= dE;
    if (Math.abs(dE) < tol) break;
  }
  return E;
}

export function keplerToCartesian(el: OrbitalElements, t: number): CartesianState {
  const mu = el.mu ?? 1.32712440018e20;
  const n = meanMotion(el.a_m, mu);
  const M = el.M0_rad + n * (t - el.epoch);

  return keplerToCartesianFromMeanAnomaly(el, M);
}

export function keplerToCartesianFromMeanAnomaly(el: OrbitalElements, M_rad: number): CartesianState {
  const E = solveKepler(M_rad, el.e);
  const cosE = Math.cos(E), sinE = Math.sin(E);

  // Position in orbital plane
  const xP = el.a_m * (cosE - el.e);
  const yP = el.a_m * Math.sqrt(1 - el.e ** 2) * sinE;
  const r = Math.sqrt(xP * xP + yP * yP);

  // Rotation to inertial coords (classical formula)
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

const MU_SUN = 1.32712440018e20; // m^3 / s^2

export function instantaneousOrbitalSpeed({ a_m, r_m, mu = MU_SUN }: { a_m: number; r_m: number; mu?: number }): number {
  // a_m: semi-major axis in meters
  // r_m: current radius (distance from Sun) in meters
  return Math.sqrt(mu * (2 / r_m - 1 / a_m)); // m/s
}
