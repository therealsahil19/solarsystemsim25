// src/utils/three-helpers.ts
// Minimal, defensive helpers for Three.js arrays and userData handling.

/**
 * A type representing any Three.js geometry-like object that has an optional
 * `setPositions` method and a `visible` property. This is used for objects
 * like `LineGeometry` from `three/examples/jsm/lines/LineGeometry`.
 * @private
 */
type AnyGeometryWithSetPositions = { setPositions?: (p: any) => void; visible?: boolean; };

/**
 * A Set to keep track of keys for which a warning has already been issued.
 * @private
 */
const _warned = new Set<string>();

/**
 * Displays a console warning only once for a given key.
 * Subsequent calls with the same key will be ignored.
 * @param key A unique string identifier for the warning.
 * @param args The arguments to pass to `console.warn`.
 */
export function warnOnce(key: string, ...args: any[]) {
  if (_warned.has(key)) return;
  _warned.add(key);

  console.warn(...args);
}

/**
 * A safe wrapper for updating the positions of a `LineGeometry` or `LineSegmentsGeometry`.
 * It performs several checks to prevent errors, such as validating the positions array length.
 * If the input is invalid, it hides the geometry and logs a warning.
 * @param geometry The geometry object to update (must have a `setPositions` method).
 * @param positions The array of positions (e.g., `[x1, y1, z1, x2, y2, z2, ...]`). Can be an `Array<number>` or `Float32Array`.
 * @param opts Optional parameters.
 * @param opts.isSegments If true, validates that the positions array length is a multiple of 6 (for line segments). Defaults to false.
 * @param opts.nameForWarnings A name to use in warning messages for easier debugging. Defaults to 'geometry'.
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
 * Ensures that a Three.js object has a `userData` property and a `userData.data` property.
 * If `userData` or `userData.data` is missing, it initializes them.
 * @param obj The Three.js object (e.g., Mesh, Group, etc.).
 * @param defaultData An object to set as `userData.data` if it doesn't already exist. Defaults to an empty object.
 */
export function initUserDataIfMissing(obj: any, defaultData: any = {}) {
  if (!obj) return;
  obj.userData = obj.userData || {};
  if (!obj.userData.data) {
    obj.userData.data = defaultData;
  }
}
