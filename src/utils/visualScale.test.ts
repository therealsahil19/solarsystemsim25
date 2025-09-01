import { describe, it, expect } from 'vitest';
import { computeDistanceAlpha, compressDistance, computeDisplayRadius } from './visualScale';

describe('visualScale utilities', () => {
    it('computes distance alpha correctly', () => {
        expect(computeDistanceAlpha(0)).toBe(1.0); // t=0 is real scale
        expect(computeDistanceAlpha(1, 0.25)).toBe(0.25); // t=1 is visual scale
        expect(computeDistanceAlpha(0.5, 0.25)).toBe(0.625); // halfway between 1.0 and 0.25
    });

    it('compresses distance correctly', () => {
        const realKm = 1000;
        // At t=0, should be same as real
        expect(compressDistance(realKm, 0)).toBe(realKm);
        // At t=1, should be compressed
        expect(compressDistance(realKm, 1, 1, 0.5)).toBe(Math.pow(realKm, 0.5));

        // Check with a specific alpha calculation
        const t = 0.5;
        const alphaVisual = 0.5;
        const expectedAlpha = 1.0 * (1 - t) + alphaVisual * t; // 0.75
        const expectedCompression = Math.pow(realKm, expectedAlpha);
        expect(compressDistance(realKm, t, 1, alphaVisual)).toBeCloseTo(expectedCompression);
    });

    it('computes display radius correctly', () => {
        const realRadius = 100;
        // At t=0, should be same as real
        expect(computeDisplayRadius(realRadius, 0)).toBe(realRadius);
        // At t=1, should be exaggerated
        expect(computeDisplayRadius(realRadius, 1, 200)).toBe(realRadius * 200);
        // At t=0.5, should be halfway
        expect(computeDisplayRadius(realRadius, 0.5, 200)).toBe(realRadius * (1 * 0.5 + 200 * 0.5));
    });
});
