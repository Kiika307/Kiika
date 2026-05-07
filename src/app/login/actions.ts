"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export interface AuthState {
  error?: string;
}

function safeRelativePath(input: string): string {
  if (!input || !input.startsWith("/")) return "/";
  if (input.startsWith("//") || input.startsWith("/\\")) return "/";
  return input;
}

/**
 * Server-side password policy.
 * - Minimum 10 chars (above the OWASP 8-char floor for sensitive apps).
 * - Must contain at least 3 of the 4 character classes:
 *   lowercase, uppercase, digit, special.
 * - Rejects the most common weak passwords seen in practice.
 *
 * Returns null when valid, or a user-facing error message.
 */
function validatePasswordStrength(pw: string): string | null {
  if (pw.length < 10) {
    return "Le mot de passe doit faire au moins 10 caractères.";
  }
  if (pw.length > 128) {
    return "Le mot de passe ne peut pas dépasser 128 caractères.";
  }
  const classes = [
    /[a-z]/.test(pw),
    /[A-Z]/.test(pw),
    /[0-9]/.test(pw),
    /[^A-Za-z0-9]/.test(pw),
  ].filter(Boolean).length;
  if (classes < 3) {
    return "Le mot de passe doit combiner au moins 3 types de caractères (minuscules, majuscules, chiffres, symboles).";
  }
  // Block trivially weak passwords.
  const weak = new Set([
    "password", "motdepasse", "azerty1234", "qwerty1234",
    "12345678", "abcdef1234", "iloveyou", "kiika1234",
  ]);
  if (weak.has(pw.toLowerCase())) {
    return "Ce mot de passe est trop courant. Choisissez-en un plus difficile à deviner.";
  }
  return null;
}

export async function loginAction(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const redirectTo = safeRelativePath(String(formData.get("redirect") ?? "/"));

  if (!email || !password) {
    return { error: "Email et mot de passe requis." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  redirect(redirectTo);
}

export async function signupAction(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const fullName = String(formData.get("fullName") ?? "").trim();
  const acceptTerms = formData.get("acceptTerms") === "on";

  if (!email || !password || !fullName) {
    return { error: "Tous les champs sont requis." };
  }
  const pwError = validatePasswordStrength(password);
  if (pwError) {
    return { error: pwError };
  }
  if (!acceptTerms) {
    return { error: "Vous devez accepter les CGU et les CGV pour créer un compte." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName, terms_accepted_at: new Date().toISOString() } },
  });

  if (error) {
    return { error: error.message };
  }

  redirect("/login?registered=1");
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

/**
 * Kick off the OAuth dance with Google. Supabase generates a provider URL
 * we redirect the browser to — once the user consents, Google sends them
 * back to /auth/callback?code=… which exchanges the code for a session.
 *
 * Requires the Google provider to be enabled in Supabase Auth settings
 * (Dashboard → Authentication → Providers → Google) with a client ID and
 * client secret obtained from Google Cloud Console (OAuth 2.0 client),
 * and `https://<project-ref>.supabase.co/auth/v1/callback` registered as
 * an authorised redirect URI.
 */
export async function signInWithGoogleAction(formData: FormData): Promise<void> {
  const next = safeRelativePath(String(formData.get("next") ?? "/"));
  const supabase = await createClient();

  // Resolve the public origin from the request headers; fall back to the
  // configured site URL or localhost for safety.
  const { headers } = await import("next/headers");
  const h = await headers();
  const proto = h.get("x-forwarded-proto") ?? "https";
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const origin = `${proto}://${host}`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(next)}`,
      // Always re-prompt for account selection so users can pick which
      // Google account to use (avoids surprises on shared devices).
      queryParams: {
        access_type: "offline",
        prompt: "select_account",
      },
    },
  });

  if (error || !data?.url) {
    redirect("/login?error=google");
  }

  redirect(data.url);
}
