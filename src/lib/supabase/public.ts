import { createServerClient } from "@supabase/ssr";

/**
 * Server-side Supabase client for public (unauthenticated) endpoints.
 *
 * Used by routes accessed by people who do not have a KIIKA account
 * (e.g. clients taking the Selene test via an invitation link).
 *
 * No cookies are read or set — every request is anonymous and goes
 * through the anon key. RPC functions marked SECURITY DEFINER perform
 * the privileged work scoped by the invitation token.
 */
export async function createPublicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase env vars missing (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY)",
    );
  }

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return [];
      },
      setAll() {
        // intentionally no-op — public anonymous client
      },
    },
  });
}
