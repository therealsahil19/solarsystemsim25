import * as THREE from 'three';

/**
 * Prepends the Vite base URL to a given asset path.
 * This ensures that assets are loaded correctly from the /public directory
 * both in development and in a production deployment with a subpath.
 * @param path The relative path to the asset from the /public directory.
 * @returns A full, correct path to the asset.
 */
export function getAssetUrl(path: string): string {
  // This uses the `new URL(path, import.meta.url)` pattern, which is the
  // standard way Vite handles resolving assets in JavaScript/TypeScript.
  return new URL(`../${path}`, import.meta.url).href;
}

const PLACEHOLDER_CANVAS_SIZE = 16;

function makePlaceholderTexture(): THREE.Texture {
  const size = PLACEHOLDER_CANVAS_SIZE;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#111';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#444';
  ctx.fillRect(2, 2, size - 4, size - 4);
  return new THREE.CanvasTexture(canvas);
}

/**
 * Safely resolves a texture. Never throws; always resolves to a Texture (fallback when needed).
 * - `name` should be the filename as stored in public/assets (e.g. "earth.jpg").
 */
export async function safeLoadTexture(name?: string | null): Promise<THREE.Texture> {
  if (!name) {
    console.warn('[safeLoadTexture] called with empty name — returning placeholder texture.');
    return makePlaceholderTexture();
  }

  // Respect Vite's base URL for GH Pages or other base deployments
  const base = (import.meta as any).env?.BASE_URL ?? '/';
  // If name already contains a path, you can support that too:
  const url = `${base}assets/${encodeURIComponent(name)}`;

  return new Promise((resolve) => {
    const loader = new THREE.TextureLoader();
    loader.load(
      url,
      (tex) => resolve(tex),
      undefined,
      (err) => {
        console.error(`[safeLoadTexture] failed to load "${url}". Using placeholder.`, err);
        resolve(makePlaceholderTexture());
      }
    );
  });
}
