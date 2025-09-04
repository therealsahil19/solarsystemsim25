// timeScaleMap.ts

/**
 * Configuration for the time scale mapping functions.
 */
export type TimeScaleConfig = {
  /** The smallest non-zero time scale (e.g., 1e-6 for one microsecond of simulation time per real second). */
  minNonZero: number;
  /** The time scale value at the midpoint (0.5) of the slider (e.g., 10x). */
  midScale: number;
  /** The highest allowed time scale (e.g., 1e8). */
  maxScale: number;
  /** The threshold below which the simulation is considered paused. */
  pauseThreshold: number;
};

/**
 * Maps a linear slider position `s` in the range [0, 1] to a non-linear time scale.
 * A value of `s = 0` results in a time scale of 0 (paused).
 * For `s > 0`, a piecewise exponential map is used to provide finer control at lower speeds
 * and broader range at higher speeds.
 * @param s The slider position, a number between 0 and 1.
 * @param cfg The time scale configuration object.
 * @returns The calculated time scale, which is >= 0.
 */
export function sliderToTimeScale(s: number, cfg: TimeScaleConfig) {
  if (s <= 0) return 0;
  const { minNonZero, midScale, maxScale } = cfg;
  const half = 0.5;
  if (s <= half) {
    // map (0,half] -> (minNonZero, midScale] exponentially
    const t = s / half; // 0..1
    // expo interpolation base form
    const val = minNonZero * Math.pow(midScale / minNonZero, t);
    return val;
  } else {
    // map (half,1] -> (midScale, maxScale] exponentially
    const t = (s - half) / (1 - half); // 0..1
    const val = midScale * Math.pow(maxScale / midScale, t);
    return val;
  }
}

/**
 * The inverse of `sliderToTimeScale`. Maps a time scale value back to a linear slider position [0, 1].
 * This is useful for synchronizing a UI slider with the current time scale state.
 * @param scale The time scale value.
 * @param cfg The time scale configuration object.
 * @returns The corresponding slider position, a number between 0 and 1.
 */
export function timeScaleToSlider(scale: number, cfg: TimeScaleConfig) {
  const { minNonZero, midScale, maxScale } = cfg;
  if (scale <= 0) return 0;
  if (scale <= midScale) {
    const t = Math.log(scale / minNonZero) / Math.log(midScale / minNonZero);
    return t * 0.5;
  } else {
    const t = Math.log(scale / midScale) / Math.log(maxScale / midScale);
    return 0.5 + t * 0.5;
  }
}
