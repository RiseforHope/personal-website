/** Resolve a root-relative route under Astro's GitHub Pages base path. */
export function withBase(path: string = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalizedPath = path.replace(/^\/+/, '');
  return `${base}/${normalizedPath}`;
}
