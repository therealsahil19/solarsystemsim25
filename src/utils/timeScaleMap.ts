// timeScaleMap.ts
export type TimeScaleConfig = {
  minNonZero: number;   // smallest nonzero scale (e.g., 1e-6 -> 1 micro-second of sim / real second)
  midScale: number;     // split-scale at s=0.5, e.g., 10x
  maxScale: number;     // highest allowed (e.g., 1e8)
  pauseThreshold: number; // threshold below which considered "paused"
};

/**
 * Map slider s in [0,1] to a timescale >= 0.
 * s == 0 -> 0 (paused). For s>0 a piecewise exponential map is used.
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

/** Optional inverse: get slider position from timescale (useful to update UI). */
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
