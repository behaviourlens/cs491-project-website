// Builds a URL for a file in `public/` that works under the GitHub Pages subpath.
// Pass paths without a leading slash, e.g. assetUrl('documents/analysis-report.pdf').
export const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;
