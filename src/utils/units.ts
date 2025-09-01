// src/utils/units.ts
export const KM_PER_AU = 149597870.7; // km
export const EARTH_RADIUS_KM = 6371.0;

export type DistanceUnit = 'km' | 'au' | 'earthR';
export type VelocityUnit = 'km/s' | 'm/s' | 'au/day';

export function kmToAu(km: number) { return km / KM_PER_AU; }
export function auToKm(au: number) { return au * KM_PER_AU; }
export function kmToEarthR(km: number) { return km / EARTH_RADIUS_KM; }
export function earthRToKm(er: number) { return er * EARTH_RADIUS_KM; }

// velocities
export function kmPerS_to_auPerDay(kms: number) {
  const kmPerDay = kms * 86400;
  return kmPerDay / KM_PER_AU;
}
export function auPerDay_to_kmPerS(aupd: number) {
  const kmPerDay = aupd * KM_PER_AU;
  return kmPerDay / 86400;
}

// format helpers
export function formatDistance(km: number, unit: DistanceUnit, sig = 4) {
  if (unit === 'km') return `${Number(km.toFixed(0)).toLocaleString()} km`;
  if (unit === 'au') return `${kmToAu(km).toFixed(sig)} AU`;
  return `${kmToEarthR(km).toFixed(sig)} R⊕`;
}
export function formatVelocity(km_s: number, unit: VelocityUnit, sig = 4) {
  if (unit === 'km/s') return `${km_s.toFixed(3)} km/s`;
  if (unit === 'm/s') return `${(km_s*1000).toFixed(1)} m/s`;
  return `${kmPerS_to_auPerDay(km_s).toFixed(5)} AU/day`;
}
