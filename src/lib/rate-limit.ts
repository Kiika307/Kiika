import { headers } from "next/headers";

/**
 * Rate limiter pour endpoints publics non authentifiés.
 *
 * Deux backends :
 *  1. Durable (recommandé prod) — Upstash Redis via API REST (fetch, sans SDK).
 *     Actif dès que UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN sont
 *     définis. Partagé entre toutes les instances Vercel → limite réelle.
 *  2. Fallback mémoire — par process. Utilisé si Upstash non configuré ou en
 *     cas d'erreur réseau (fail-open vers une limite locale, jamais "no limit").
 *
 * Usage (toujours await) :
 *   const ip = await clientIp();
 *   if (!(await checkRateLimit(`selene:load:${ip}`, 30, 60_000))) { ... }
 */

interface BucketEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, BucketEntry>();
const MAX_KEYS = 5_000;

function pruneIfNeeded(now: number): void {
  if (store.size <= MAX_KEYS) return;
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

function consumeInMemory(key: string, maxRequests: number, windowMs: number): boolean {
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
}

function upstashConfig(): { url: string; token: string } | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return { url: url.replace(/\/$/, ""), token };
}

/**
 * Fenêtre fixe via Upstash : INCR puis PEXPIRE au premier hit.
 * Retourne true si autorisé, false si quota dépassé, null si erreur (le caller
 * bascule alors sur le backend mémoire).
 */
async function consumeUpstash(
  cfg: { url: string; token: string },
  key: string,
  maxRequests: number,
  windowMs: number,
): Promise<boolean | null> {
  const k = encodeURIComponent(`rl:${key}`);
  try {
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 1500);
    const res = await fetch(`${cfg.url}/incr/${k}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${cfg.token}` },
      signal: ctrl.signal,
      cache: "no-store",
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const body = (await res.json()) as { result?: number };
    const count = body.result ?? 0;
    if (count === 1) {
      // Premier hit de la fenêtre → pose le TTL (best-effort, non bloquant).
      void fetch(`${cfg.url}/pexpire/${k}/${windowMs}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${cfg.token}` },
        cache: "no-store",
      }).catch(() => {});
    }
    return count <= maxRequests;
  } catch {
    return null;
  }
}

/**
 * Consomme un jeton. true = autorisé, false = quota dépassé.
 */
export async function checkRateLimit(
  key: string,
  maxRequests: number,
  windowMs: number,
): Promise<boolean> {
  const cfg = upstashConfig();
  if (cfg) {
    const durable = await consumeUpstash(cfg, key, maxRequests, windowMs);
    if (durable !== null) return durable;
  }
  return consumeInMemory(key, maxRequests, windowMs);
}

/**
 * Resolve the originating client IP from common proxy headers.
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
