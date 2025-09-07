/**
 * Scales a distance in Astronomical Units (AU) to a display-friendly value.
 * This function uses a non-linear scale to make the solar system easier to view.
 * It separates the inner planets, asteroid belt, and outer planets with gaps.
 * @param au The distance in AU.
 * @returns The scaled distance for display.
 */
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

/**
 * Scales the radius of a celestial body for display.
 * Uses a square root scale to make smaller bodies more visible relative to larger ones.
 * @param radius The actual radius of the body in kilometers.
 * @returns The scaled radius for display.
 */
export function scaleBodyRadius(radius: number): number {
    const scale = 0.018;
    return scale * Math.sqrt(radius);
}

/**
 * Scales the radius of a planet's rings for display.
 * @param radiusKm The actual radius of the rings in kilometers.
 * @returns The scaled radius for display.
 */
export function scaleRingRadius(radiusKm: number): number {
    return radiusKm / 8000;
}

/**
 * The number of meters in one Astronomical Unit (AU).
 */
export const AU_TO_M = 1.496e11;

/**
 * Formats a speed in meters per second to a string in kilometers per second.
 * @param speed_m_s The speed in meters per second.
 * @returns A formatted string (e.g., "12.34 km/s") or "N/A" if the input is invalid.
 */
export function speedDisplayKmPerS(speed_m_s: number): string {
  if (typeof speed_m_s !== 'number' || !isFinite(speed_m_s)) {
    return 'N/A';
  }
  return (speed_m_s / 1000).toFixed(2) + ' km/s';
}

/**
 * Determines a suitable glow color based on the luminance of a given hex color.
 * This is used to create a visible glow around a selected celestial body.
 * @param hexColor The hex color of the celestial body.
 * @returns A hex color for the glow effect.
 */
export function getGlowColor(hexColor: number): number {
    const r = (hexColor >> 16) & 255;
    const g = (hexColor >> 8) & 255;
    const b = hexColor & 255;

    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    // If the color is dark, return a light glow color.
    // If the color is light, return a dark glow color.
    return luminance < 128 ? 0x72C8FF : 0x0000FF;
}
