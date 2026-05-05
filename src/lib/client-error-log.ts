/**
 * Safe client-side error logger for Next.js error boundaries.
 *
 * In production, only the opaque `digest` is logged to avoid exposing
 * stack traces or PII to the browser console (which is visible to anyone
 * with DevTools open, including the client themselves).
 *
 * In development, the full error is logged to aid debugging.
 *
 * Forward to Sentry/Axiom server-side when those integrations are added.
 */
export function logClientRouteError(label: string, error: Error & { digest?: string }): void {
  if (process.env.NODE_ENV === "production") {
    // eslint-disable-next-line no-console
    console.error(`${label} (digest=${error.digest ?? "n/a"})`);
  } else {
    // eslint-disable-next-line no-console
    console.error(label, error);
  }
}
