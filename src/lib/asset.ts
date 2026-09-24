/** Public files under `public/` — respects Vite `base` (e.g. GitHub Pages `/portfolio/`). */
export function asset(path: string): string {
  const clean = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${clean}`
}
