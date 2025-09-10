import { describe, it, expect } from 'vitest';
import {
    kmToAu,
    auToKm,
    kmToEarthR,
    earthRToKm,
    formatDistance,
    KM_PER_AU,
    EARTH_RADIUS_KM,
    kmPerS_to_auPerDay,
    auPerDay_to_kmPerS,
    formatVelocity
} from './units';

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

describe('velocity conversion utilities', () => {
    it('converts km/s to AU/day', () => {
        const km_s = 30; // Approximate orbital speed of Earth
        const expectedAuPerDay = (30 * 86400) / KM_PER_AU;
        expect(kmPerS_to_auPerDay(km_s)).toBeCloseTo(expectedAuPerDay);
        expect(kmPerS_to_auPerDay(0)).toBe(0);
    });

    it('converts AU/day to km/s', () => {
        const auPerDay = 0.0172; // Approximate orbital speed of Earth in AU/day
        const expectedKmS = (0.0172 * KM_PER_AU) / 86400;
        expect(auPerDay_to_kmPerS(auPerDay)).toBeCloseTo(expectedKmS);
        expect(auPerDay_to_kmPerS(0)).toBe(0);
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

describe('formatVelocity', () => {
    it('formats velocity in km/s', () => {
        expect(formatVelocity(7.89123, 'km/s')).toBe('7.891 km/s');
    });

    it('formats velocity in m/s', () => {
        expect(formatVelocity(7.89123, 'm/s')).toBe('7891.2 m/s');
    });

    it('formats velocity in AU/day', () => {
        const km_s = 30;
        const expectedAuPerDay = kmPerS_to_auPerDay(km_s).toFixed(5);
        expect(formatVelocity(km_s, 'au/day')).toBe(`${expectedAuPerDay} AU/day`);
    });
});
