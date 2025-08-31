import { describe, it, expect } from 'vitest';
import { meanMotion, solveKepler, keplerToCartesian, OrbitalElements } from './kepler';

describe('Kepler math', () => {
  it('calculates mean motion correctly', () => {
    const a_m = 227939200000; // Mars semi-major axis in meters
    const mu = 1.32712440018e20; // Sun's gravitational parameter
    const n = meanMotion(a_m, mu);
    // Expected value for Mars' mean motion is ~1.88e-7 rad/s
    expect(n).toBeCloseTo(1.058e-7, 9);
  });

  it('solves Kepler\'s equation', () => {
    const M = 0.5; // Mean anomaly
    const e = 0.1; // Eccentricity
    const E = solveKepler(M, e);
    // E - e * sin(E) should be close to M
    expect(E - e * Math.sin(E)).toBeCloseTo(M, 9);
  });

  it('converts Keplerian elements to Cartesian coordinates', () => {
    const elements: OrbitalElements = {
      a_m: 149600000000, // Earth's semi-major axis
      e: 0.0167,
      i_rad: 0,
      Omega_rad: 0,
      omega_rad: 0,
      M0_rad: 0,
      epoch: 0,
    };
    const t = 0; // time
    const state = keplerToCartesian(elements, t);
    // At t=0 and M0=0, the object should be at periapsis
    expect(state.x).toBeCloseTo(elements.a_m * (1 - elements.e), 0);
    expect(state.y).toBeCloseTo(0, 9);
    expect(state.z).toBeCloseTo(0, 9);
  });
});
