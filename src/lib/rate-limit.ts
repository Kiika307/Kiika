import { headers } from "next/headers";

/**
 * Best-effort in-memory rate limiter for public unauthenticated endpoints.
 *
 * Limitations:
 * - State is per-process. Serverless platforms (Vercel) instantiate multiple
 *   processes, so the effective limit is N × maxRequests across N instances.
 *   This is still useful as a first line of defense against trivial scripts.
 * - For strong guarantees, replace with Vercel KV / Upstash Redis.
 *
 * Usage:
 *   const ip = await clientIp();
 *   const ok = bucket.consume(`selene:load:${ip}`, 30, 60_000); // 30 req/min
 *   if (!ok) return { ok: false, error: "Trop de requêtes." };
 */

interface BucketEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, BucketEntry>();
const MAX_KEYS = 5_000;

function pruneIfNeeded(now: number): void {
  if (store.size <= MAX_KEYS) return;
  // Remove all expired entries; if still too big, drop arbitrary oldest keys.
  for (const [k, v] of store) {
    if (v.resetAt <= now) store.delete(k);
  }
  if (store.size <= MAX_KEYS) return;
  const overflow = store.size - MAX_KEYS;
  let i = 0;
  for (const k of store.keys()) {
    if (i++ >= overflow) break;
    store.delete(k);
  }
}

export const rateLimit = {
  /**
   * Returns true if the request is allowed, false if the limit was exceeded.
   * The window is fixed (resets every `windowMs` after the first hit).
   */
  consume(key: string, maxRequests: number, windowMs: number): boolean {
    const now = Date.now();
    pruneIfNeeded(now);
    const entry = store.get(key);
    if (!entry || entry.resetAt <= now) {
      store.set(key, { count: 1, resetAt: now + windowMs });
      return true;
    }
    if (entry.count >= maxRequests) return false;
    entry.count += 1;
    return true;
  },
};

/**
 * Resolve the originating client IP from common proxy headers.
 * Falls back to a placeholder when running outside a request context.
 */
export async function clientIp(): Promise<string> {
  try {
    const h = await headers();
    const forwarded = h.get("x-forwarded-for");
    if (forwarded) {
      const first = forwarded.split(",")[0]?.trim();
      if (first) return first;
    }
    const real = h.get("x-real-ip");
    if (real) return real.trim();
    const cf = h.get("cf-connecting-ip");
    if (cf) return cf.trim();
  } catch {
    // headers() can throw outside a request context.
  }
  return "unknown";
}
