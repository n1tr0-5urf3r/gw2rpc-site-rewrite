// Build a list of all showcase images found under the public folder at
// /static/img/showcases. Vite's glob import with `as: 'url'` returns fully
// resolved URLs that work both in dev and in the production bundle.
// Note: Public assets live under /static, which is the served base path.
// Vite supports globbing for assets when using `as: 'url'`.
const showcaseGlobs = import.meta.glob('/static/img/showcases/*.{png,jpg,jpeg,webp,gif}', {
  eager: true,
  as: 'url',
}) as Record<string, string>

export const showcaseImages: string[] = Object.values(showcaseGlobs)
  // Keep ordering stable by sorting on URL
  .sort((a, b) => a.localeCompare(b))
