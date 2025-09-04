import { describe, it, expect } from 'vitest';
import {
  scaleDistance,
  scaleBodyRadius,
  scaleRingRadius,
  speedDisplayKmPerS,
  getGlowColor,
} from './misc';

describe('misc utilities', () => {
  describe('scaleDistance', () => {
    it('should return 0 for an input of 0', () => {
      expect(scaleDistance(0)).toBe(0);
    });

    it('should correctly scale distances for inner planets', () => {
      expect(scaleDistance(1)).toBe(30 + 25);
    });

    it('should correctly scale distances for the asteroid belt', () => {
      const marsPosition = 30 + 1.524 * 25;
      const gap = 30;
      const beltStart = marsPosition + gap;
      expect(scaleDistance(3)).toBeCloseTo(beltStart + (3 - 1.524) * 15);
    });

    it('should correctly scale distances for outer planets', () => {
      const beltEndPosition = (30 + 1.524 * 25) + 30 + (3.5 - 1.524) * 15;
      const outerGap = 50;
      const outerStart = beltEndPosition + outerGap;
      expect(scaleDistance(5)).toBeCloseTo(outerStart + (5 - 3.5) * 30);
    });
  });

  describe('scaleBodyRadius', () => {
    it('should correctly scale the body radius', () => {
      const radius = 10000;
      expect(scaleBodyRadius(radius)).toBe(0.018 * Math.sqrt(radius));
    });
  });

  describe('scaleRingRadius', () => {
    it('should correctly scale the ring radius', () => {
      const radius = 100000;
      expect(scaleRingRadius(radius)).toBe(radius / 8000);
    });
  });

  describe('speedDisplayKmPerS', () => {
    it('should format the speed correctly', () => {
      expect(speedDisplayKmPerS(12345)).toBe('12.35 km/s');
    });

    it('should handle invalid inputs', () => {
      // @ts-ignore
      expect(speedDisplayKmPerS(null)).toBe('N/A');
      // @ts-ignore
      expect(speedDisplayKmPerS(undefined)).toBe('N/A');
      expect(speedDisplayKmPerS(NaN)).toBe('N/A');
    });
  });

  describe('getGlowColor', () => {
    it('should return a light glow for a dark color', () => {
      const darkColor = 0x000000; // Black
      expect(getGlowColor(darkColor)).toBe(0x72C8FF);
    });

    it('should return a dark glow for a light color', () => {
      const lightColor = 0xFFFFFF; // White
      expect(getGlowColor(lightColor)).toBe(0x0000FF);
    });
  });
});
