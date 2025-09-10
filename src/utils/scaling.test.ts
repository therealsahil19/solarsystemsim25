import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { calculateDisplayPosition, getDisplayRadius, ScaleTransition } from './scaling';

describe('scaling utilities', () => {
  describe('calculateDisplayPosition', () => {
    const position = new THREE.Vector3(1, 0, 0); // 1 AU

    it('should calculate the correct position for the "realistic" preset without transition', () => {
      const transition: ScaleTransition = {
        active: false,
        progress: 0,
        fromPreset: 'realistic',
        toPreset: 'realistic',
      };
      const displayPosition = calculateDisplayPosition(position, transition);
      expect(displayPosition.length()).toBeCloseTo(150);
    });

    it('should calculate the correct position for the "educational" preset without transition', () => {
      const transition: ScaleTransition = {
        active: false,
        progress: 0,
        fromPreset: 'educational',
        toPreset: 'educational',
      };
      const displayPosition = calculateDisplayPosition(position, transition);
      expect(displayPosition.length()).toBeCloseTo(150); // Since distance is 1 AU, pow(1, 0.6) is 1
    });

    it('should calculate the correct position for the "hybrid" preset without transition', () => {
        const transition: ScaleTransition = {
          active: false,
          progress: 0,
          fromPreset: 'hybrid',
          toPreset: 'hybrid',
        };
        const displayPosition = calculateDisplayPosition(position, transition);
        expect(displayPosition.length()).toBeCloseTo(Math.log1p(1) * 150);
      });

      it('should handle active transitions correctly', () => {
        const transition: ScaleTransition = {
          active: true,
          progress: 0.5,
          fromPreset: 'realistic',
          toPreset: 'educational',
        };
        const displayPosition = calculateDisplayPosition(position, transition);
        const realisticPos = 150;
        const educationalPos = 150;
        const expectedLength = realisticPos + (educationalPos - realisticPos) * 0.5;
        expect(displayPosition.length()).toBeCloseTo(expectedLength);
      });

    it('should return a zero vector for invalid position input', () => {
      const transition: ScaleTransition = {
        active: false,
        progress: 0,
        fromPreset: 'realistic',
        toPreset: 'realistic',
      };
      // @ts-expect-error: Testing invalid input
      const displayPosition = calculateDisplayPosition(null, transition);
      expect(displayPosition).toEqual(new THREE.Vector3(0, 0, 0));
    });

    it('should handle a zero vector as position', () => {
        const transition: ScaleTransition = {
            active: false,
            progress: 0,
            fromPreset: 'realistic',
            toPreset: 'realistic',
        };
        const displayPosition = calculateDisplayPosition(new THREE.Vector3(0, 0, 0), transition);
        expect(displayPosition).toEqual(new THREE.Vector3(0, 0, 0));
    });

    it('should handle an invalid preset', () => {
        const transition: Partial<ScaleTransition> = {
            active: false,
            progress: 0,
        };
        // @ts-expect-error: intentionally passing an invalid ScalePreset to test runtime validation
        transition.fromPreset = 'invalid';
        // @ts-expect-error: intentionally passing an invalid ScalePreset to test runtime validation
        transition.toPreset = 'invalid';

        const displayPosition = calculateDisplayPosition(position, transition as ScaleTransition);
        expect(displayPosition).toEqual(new THREE.Vector3(0, 0, 0));
    });

    it('should return a zero vector for invalid transition input', () => {
        // @ts-expect-error: Testing invalid input
        const displayPosition = calculateDisplayPosition(position, null);
        expect(displayPosition).toEqual(new THREE.Vector3(0, 0, 0));
    });
  });

  describe('getDisplayRadius', () => {
    const radiusKm = 1000;

    it('should calculate the correct radius for the "realistic" preset without transition', () => {
      const transition: ScaleTransition = {
        active: false,
        progress: 0,
        fromPreset: 'realistic',
        toPreset: 'realistic',
      };
      const displayRadius = getDisplayRadius(radiusKm, transition);
      expect(displayRadius).toBeCloseTo(1000 * 0.000005);
    });

    it('should calculate the correct radius for the "educational" preset without transition', () => {
      const transition: ScaleTransition = {
        active: false,
        progress: 0,
        fromPreset: 'educational',
        toPreset: 'educational',
      };
      const displayRadius = getDisplayRadius(radiusKm, transition);
      expect(displayRadius).toBeCloseTo(1000 * 0.0002);
    });

    it('should calculate the correct radius for the "hybrid" preset without transition', () => {
        const transition: ScaleTransition = {
          active: false,
          progress: 0,
          fromPreset: 'hybrid',
          toPreset: 'hybrid',
        };
        const displayRadius = getDisplayRadius(radiusKm, transition);
        expect(displayRadius).toBeCloseTo(1000 * 0.0001);
      });

      it('should handle active transitions correctly for radius', () => {
        const transition: ScaleTransition = {
          active: true,
          progress: 0.5,
          fromPreset: 'realistic',
          toPreset: 'educational',
        };
        const displayRadius = getDisplayRadius(radiusKm, transition);
        const realisticRadius = 1000 * 0.000005;
        const educationalRadius = 1000 * 0.0002;
        const expectedRadius = realisticRadius + (educationalRadius - realisticRadius) * 0.5;
        expect(displayRadius).toBeCloseTo(expectedRadius);
      });
  });
});
