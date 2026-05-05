/**
 * Minimal HTML escaping for content interpolated into email templates.
 * Defense-in-depth: client/therapist names are also validated upstream.
 */
export function escapeHtml(input: string): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
