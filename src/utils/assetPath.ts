/**
 * Utility function to generate correct asset paths for both development and production
 * This handles the GitHub Pages subpath deployment correctly
 */
export function getAssetPath(path: string): string {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Get the base URL from Vite's configuration
    const base = import.meta.env.BASE_URL || '/';

    // Combine base URL with the asset path
    const fullPath = base === '/' ? `/${cleanPath}` : `${base}${cleanPath}`;

    return fullPath;
}