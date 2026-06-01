export function appHref(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const basePath = new URL(import.meta.env.BASE_URL, window.location.origin).pathname.replace(/\/+$/, "");

  if (!basePath) return normalizedPath;
  if (normalizedPath === "/") return `${basePath}/`;
  return `${basePath}${normalizedPath}`;
}
