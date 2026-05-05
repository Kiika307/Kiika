import type { NextConfig } from "next";

// NOTE: Content-Security-Policy temporarily removed.
// The previous static CSP (with sha256 hash for the theme script) blocked
// Next.js streaming inline scripts injected per request for RSC hydration,
// breaking the entire app (skeleton stuck loading).
//
// To re-introduce CSP safely we need a request-scoped nonce via Next.js
// middleware (read it back in layout.tsx with `headers()` and apply it to
// the inline script). Tracked separately.

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(self), microphone=(self), geolocation=(), interest-cohort=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
