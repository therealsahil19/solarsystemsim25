import { describe, it, expect } from 'vitest';
import { kmToAu, auToKm, kmToEarthR, earthRToKm, formatDistance, KM_PER_AU, EARTH_RADIUS_KM } from './units';

describe('unit conversion utilities', () => {
    it('converts kilometers to astronomical units', () => {
        expect(kmToAu(KM_PER_AU)).toBe(1);
        expect(kmToAu(0)).toBe(0);
        expect(kmToAu(KM_PER_AU * 2.5)).toBe(2.5);
    });

    it('converts astronomical units to kilometers', () => {
        expect(auToKm(1)).toBe(KM_PER_AU);
        expect(auToKm(0)).toBe(0);
        expect(auToKm(2.5)).toBe(KM_PER_AU * 2.5);
    });

    it('converts kilometers to Earth radii', () => {
        expect(kmToEarthR(EARTH_RADIUS_KM)).toBe(1);
        expect(kmToEarthR(0)).toBe(0);
        expect(kmToEarthR(EARTH_RADIUS_KM * 3)).toBe(3);
    });

    it('converts Earth radii to kilometers', () => {
        expect(earthRToKm(1)).toBe(EARTH_RADIUS_KM);
        expect(earthRToKm(0)).toBe(0);
        expect(earthRToKm(3)).toBe(EARTH_RADIUS_KM * 3);
    });
});

describe('formatDistance', () => {
    it('formats distance in kilometers', () => {
        expect(formatDistance(12345, 'km')).toBe('12,345 km');
    });

    it('formats distance in astronomical units', () => {
        expect(formatDistance(KM_PER_AU, 'au')).toBe('1.0000 AU');
    });

    it('formats distance in Earth radii', () => {
        expect(formatDistance(EARTH_RADIUS_KM * 2, 'earthR')).toBe('2.0000 R⊕');
    });
});
