// src/utils/three-helpers.ts
// Minimal, defensive helpers for Three.js arrays and userData handling.

type AnyGeometryWithSetPositions = { setPositions?: (p: any) => void; visible?: boolean; };

// Warn once per key (uuid or custom string)
const _warned = new Set<string>();
export function warnOnce(key: string, ...args: any[]) {
  if (_warned.has(key)) return;
  _warned.add(key);
  // eslint-disable-next-line no-console
  console.warn(...args);
}

/**
 * Safe wrapper for LineGeometry / LineSegmentsGeometry setPositions.
 * - positions may be Array<number> or Float32Array.
 * - If isSegments = true, we require length % 6 === 0 (pairs).
 * - Otherwise require length % 3 === 0 (xyz triplets).
 */
export function safeSetPositions(
  geometry: AnyGeometryWithSetPositions,
  positions: ArrayLike<number> | null | undefined,
  opts?: { isSegments?: boolean; nameForWarnings?: string }
) {
  if (!geometry || typeof geometry.setPositions !== 'function') {
    return;
  }
  const isSegments = !!opts?.isSegments;
  const nameForWarnings = opts?.nameForWarnings ?? 'geometry';

  if (!positions) {
    geometry.visible = false;
    return;
  }

  const len = (positions as any).length ?? 0;
  if (len === 0) {
    geometry.visible = false;
    return;
  }

  if (len % 3 !== 0) {
    warnOnce(`invalid_len_${nameForWarnings}`, `[safeSetPositions] skipping invalid positions length=${len} for ${nameForWarnings} (expected multiple of 3).`);
    geometry.visible = false;
    return;
  }

  if (isSegments && (len % 6 !== 0)) {
    warnOnce(`invalid_segments_len_${nameForWarnings}`, `[safeSetPositions] skipping invalid segments length=${len} for ${nameForWarnings} (expected multiple of 6).`);
    geometry.visible = false;
    return;
  }

  try {
    geometry.setPositions(positions);
    geometry.visible = true;
  } catch (err) {
    warnOnce(`setPositions_throw_${nameForWarnings}`, `[safeSetPositions] setPositions failed for ${nameForWarnings}:`, err);
    geometry.visible = false;
  }
}

/**
 * Ensure object has userData.data (optionally fill with defaultData)
 */
export function initUserDataIfMissing(obj: any, defaultData: any = {}) {
  if (!obj) return;
  obj.userData = obj.userData || {};
  if (!obj.userData.data) {
    obj.userData.data = defaultData;
  }
}
