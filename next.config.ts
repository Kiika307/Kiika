import type { NextConfig } from "next";

// SHA-256 hash of the inline theme-detection script in src/app/layout.tsx.
// If that script changes, recompute via:
//   node -e "console.log('sha256-'+require('crypto').createHash('sha256').update(SCRIPT).digest('base64'))"
const INLINE_THEME_SCRIPT_HASH = "'sha256-DI0l3YjRl48PMkQq/mskYFV+VYz9vGNST/bae6NooXU='";

const SUPABASE_HOST = "https://*.supabase.co";

const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' ${INLINE_THEME_SCRIPT_HASH}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  `img-src 'self' data: blob: ${SUPABASE_HOST}`,
  `connect-src 'self' ${SUPABASE_HOST} wss://*.supabase.co https://api.anthropic.com`,
  `media-src 'self' blob: ${SUPABASE_HOST}`,
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: cspDirectives,
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
