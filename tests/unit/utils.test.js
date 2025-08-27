import { scaleDistance, scaleBodyRadius, scaleRingRadius } from '../../js/utils.js';

describe('scaleDistance', () => {
  test('should return 0 for the Sun (au = 0)', () => {
    expect(scaleDistance(0)).toBe(0);
  });

  test('should correctly scale inner planets (au <= 1.8)', () => {
    // Earth's distance is 1 AU
    expect(scaleDistance(1)).toBe(30 + 1 * 25); // 55
  });

  test('should correctly scale the asteroid belt (1.8 < au <= 3.5)', () => {
    // A value in the middle of the belt
    const au = 2.7;
    const marsPosition = 30 + 1.524 * 25;
    const gap = 30;
    const beltStart = marsPosition + gap;
    const expected = beltStart + (au - 1.524) * 15;
    expect(scaleDistance(au)).toBeCloseTo(expected);
  });

  test('should correctly scale outer planets (au > 3.5)', () => {
    // Jupiter's distance is ~5.2 AU
    const au = 5.2;
    const beltEndPosition = (30 + 1.524 * 25) + 30 + (3.5 - 1.524) * 15;
    const outerGap = 50;
    const outerStart = beltEndPosition + outerGap;
    const expected = outerStart + (au - 3.5) * 30;
    expect(scaleDistance(au)).toBeCloseTo(expected);
  });
});

describe('scaleBodyRadius', () => {
  test('should correctly scale the radius of a celestial body', () => {
    // Earth's radius is 6371 km
    const radius = 6371;
    const expected = 0.018 * Math.sqrt(radius);
    expect(scaleBodyRadius(radius)).toBeCloseTo(expected);
  });

  test('should return 0 for a radius of 0', () => {
    expect(scaleBodyRadius(0)).toBe(0);
  });
});

describe('scaleRingRadius', () => {
  test('should correctly scale the radius of a ring system', () => {
    const radiusKm = 140000; // Approx outer radius of Saturn's A ring
    expect(scaleRingRadius(radiusKm)).toBe(140000 / 8000);
  });

  test('should return 0 for a radius of 0', () => {
    expect(scaleRingRadius(0)).toBe(0);
  });
});
