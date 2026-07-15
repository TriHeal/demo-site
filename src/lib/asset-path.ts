// When deployed behind a path prefix (e.g. dev-spirit.com/tri-heal), Next's
// basePath auto-prefixes next/link and next/image, but NOT raw <img src="/...">
// pointing at files in /public. Every hardcoded public-asset path needs to go
// through this helper so it still resolves once NEXT_PUBLIC_BASE_PATH is set.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}
