import { describe, it, expect } from 'vitest';
import { sliderToTimeScale, timeScaleToSlider, TimeScaleConfig } from './timeScaleMap';

const testConfig: TimeScaleConfig = {
    minNonZero: 1e-6,
    midScale: 100,
    maxScale: 1e8,
    pauseThreshold: 1e-7,
};

describe('timeScaleMap utilities', () => {
    it('maps slider position to timescale correctly', () => {
        expect(sliderToTimeScale(0, testConfig)).toBe(0);
        expect(sliderToTimeScale(0.5, testConfig)).toBe(testConfig.midScale);
        expect(sliderToTimeScale(1, testConfig)).toBe(testConfig.maxScale);

        // Test a value in the lower half
        expect(sliderToTimeScale(0.25, testConfig)).toBeCloseTo(Math.sqrt(testConfig.minNonZero * testConfig.midScale));
    });

    it('maps timescale to slider position correctly (inverse)', () => {
        expect(timeScaleToSlider(0, testConfig)).toBe(0);
        expect(timeScaleToSlider(testConfig.midScale, testConfig)).toBe(0.5);
        expect(timeScaleToSlider(testConfig.maxScale, testConfig)).toBe(1);

        // Test a value in the upper half
        const testScale = testConfig.midScale * Math.sqrt(testConfig.maxScale / testConfig.midScale);
        expect(timeScaleToSlider(testScale, testConfig)).toBeCloseTo(0.75);
    });

    it('handles inverse mapping for values close to zero', () => {
        expect(timeScaleToSlider(testConfig.minNonZero, testConfig)).toBeCloseTo(0);
    });
});
