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
