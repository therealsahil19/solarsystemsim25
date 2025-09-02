export function scaleDistance(au: number): number {
    if (au === 0) return 0; // Sun is at the center

    // Inner planets (Mercury, Venus, Earth, Mars) - up to 1.8 AU
    if (au <= 1.8) {
        // Start at 30 to be clear of the sun, then scale linearly
        return 30 + au * 25;
    }

    // Gap, then Asteroid Belt - up to 3.5 AU
    if (au <= 3.5) {
        // Scaled position of Mars (approx) + a gap
        const marsPosition = 30 + 1.524 * 25; // ~68.1
        const gap = 30;
        const beltStart = marsPosition + gap; // ~98.1

        // Scale the region from Mars's orbit to the end of the belt region
        return beltStart + (au - 1.524) * 15;
    }

    // Gap, then Outer Planets - beyond 3.5 AU
    // Scaled position of the end of the belt region (at 3.5 AU)
    const beltEndPosition = (30 + 1.524 * 25) + 30 + (3.5 - 1.524) * 15; // ~127.74
    const outerGap = 50;
    const outerStart = beltEndPosition + outerGap; // ~177.74

    // Use a more aggressive linear scale for outer planets
    return outerStart + (au - 3.5) * 30;
}

export function scaleBodyRadius(radius: number): number {
    const scale = 0.018;
    return scale * Math.sqrt(radius);
}

// This is a placeholder for a more sophisticated ring scaling function.
// The values are divided by a constant to bring them into a similar
// scale as the planet radii in the simulation.
export function scaleRingRadius(radiusKm: number): number {
    return radiusKm / 8000;
}

export const AU_TO_M = 1.496e11;

export function speedDisplayKmPerS(speed_m_s: number): string {
  if (typeof speed_m_s !== 'number' || !isFinite(speed_m_s)) {
    return 'N/A';
  }
  return (speed_m_s / 1000).toFixed(2) + ' km/s';
}

export function getGlowColor(hexColor: number): number {
    const r = (hexColor >> 16) & 255;
    const g = (hexColor >> 8) & 255;
    const b = hexColor & 255;

    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    // If the color is dark, return a light glow color.
    // If the color is light, return a dark glow color.
    return luminance < 128 ? 0x72C8FF : 0x0000FF;
}
