// src/utils/visualScale.ts

/**
 * Power-law compression for distances.
 * t in [0,1] where 0 = real, 1 = visual (compressed).
 * alphaVisual = typical exponent to compress distances at t=1 (e.g., 0.2).
 */
export function computeDistanceAlpha(t: number, alphaVisual = 0.25) {
  return 1.0 * (1 - t) + alphaVisual * t; // linear mix of exponents
}

/**
 * Transform a real distance (km) into a display distance (km) using power-law compression.
 * scaleBase is a normalization base, e.g. 1 AU in km or 1 km depending on your domain.
 */
export function compressDistance(realKm: number, t: number, scaleBaseKm = 1, alphaVisual = 0.25) {
  const alpha = computeDistanceAlpha(t, alphaVisual);
  // Normalize by scaleBase to avoid huge powers; restore later.
  const normalized = Math.abs(realKm) / scaleBaseKm;
  const compressed = Math.pow(normalized, alpha) * scaleBaseKm;
  return Math.sign(realKm) * compressed;
}

/**
 * Compute display radius (exaggerates radii as t -> 1).
 * radiusFactorAt1 is how many times bigger radii appear at t=1 (e.g., 200).
 */
export function computeDisplayRadius(realRadiusKm: number, t: number, radiusFactorAt1 = 200) {
  const factor = 1 * (1 - t) + radiusFactorAt1 * t;
  return realRadiusKm * factor;
}
