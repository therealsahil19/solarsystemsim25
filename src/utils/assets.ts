/**
 * Prepends the Vite base URL to a given asset path.
 * This ensures that assets are loaded correctly from the /public directory
 * both in development and in a production deployment with a subpath.
 * @param path The relative path to the asset from the /public directory.
 * @returns A full, correct path to the asset.
 */
export function getAssetUrl(path: string): string {
  // import.meta.env.BASE_URL is a Vite feature that provides the base public path.
  // It includes a trailing slash, and our asset paths in data.ts do not have a leading slash,
  // so we can concatenate them directly.
  return `${import.meta.env.BASE_URL}${path}`;
}
