// src/utils/units.ts

/** The standard number of kilometers per Astronomical Unit. */
export const KM_PER_AU = 149597870.7; // km
/** The standard radius of Earth in kilometers. */
export const EARTH_RADIUS_KM = 6371.0;

/** Represents the possible units for measuring distance. */
export type DistanceUnit = 'km' | 'au' | 'earthR';
/** Represents the possible units for measuring velocity. */
export type VelocityUnit = 'km/s' | 'm/s' | 'au/day';

/** Converts kilometers to Astronomical Units (AU). */
export function kmToAu(km: number) { return km / KM_PER_AU; }
/** Converts Astronomical Units (AU) to kilometers. */
export function auToKm(au: number) { return au * KM_PER_AU; }
/** Converts kilometers to Earth Radii. */
export function kmToEarthR(km: number) { return km / EARTH_RADIUS_KM; }
/** Converts Earth Radii to kilometers. */
export function earthRToKm(er: number) { return er * EARTH_RADIUS_KM; }

// velocities
/** Converts kilometers per second to Astronomical Units per day. */
export function kmPerS_to_auPerDay(kms: number) {
  const kmPerDay = kms * 86400;
  return kmPerDay / KM_PER_AU;
}
/** Converts Astronomical Units per day to kilometers per second. */
export function auPerDay_to_kmPerS(aupd: number) {
  const kmPerDay = aupd * KM_PER_AU;
  return kmPerDay / 86400;
}

/**
 * Formats a distance in kilometers into a human-readable string with a specified unit.
 * @param km The distance in kilometers.
 * @param unit The target unit to format the distance in.
 * @param sig The number of significant figures for 'au' and 'earthR' units. Defaults to 4.
 * @returns A formatted string representing the distance (e.g., "1,234 km", "0.008 AU").
 */
export function formatDistance(km: number, unit: DistanceUnit, sig = 4) {
  if (unit === 'km') return `${Number(km.toFixed(0)).toLocaleString()} km`;
  if (unit === 'au') return `${kmToAu(km).toFixed(sig)} AU`;
  return `${kmToEarthR(km).toFixed(sig)} R⊕`;
}

/**
 * Formats a velocity in kilometers per second into a human-readable string with a specified unit.
 * @param km_s The velocity in kilometers per second.
 * @param unit The target unit to format the velocity in.
 * @returns A formatted string representing the velocity (e.g., "7.890 km/s", "0.00005 AU/day").
 */
export function formatVelocity(km_s: number, unit: VelocityUnit) {
  if (unit === 'km/s') return `${km_s.toFixed(3)} km/s`;
  if (unit === 'm/s') return `${(km_s * 1000).toFixed(1)} m/s`;
  return `${kmPerS_to_auPerDay(km_s).toFixed(5)} AU/day`;
}
