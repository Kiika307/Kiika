"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { checkRateLimit, clientIp } from "@/lib/rate-limit";

export interface PortalLoginState {
  error?: string;
  sent?: boolean;
}

function appUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL ?? "https://kiika.intio.fr";
}

function safeNext(input: string | null | undefined): string {
  const fallback = "/portail";
  if (!input || !input.startsWith("/")) return fallback;
  if (input.startsWith("//") || input.startsWith("/\\")) return fallback;
  if (!input.startsWith("/portail")) return fallback;
  return input;
}

export async function sendPortalMagicLink(
  _prev: PortalLoginState,
  formData: FormData,
): Promise<PortalLoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const next = safeNext(String(formData.get("next") ?? "/portail"));
  if (!email) return { error: "Adresse e-mail requise" };

  // Limite l'envoi de liens magiques (anti-spam / anti-énumération d'e-mails).
  const ip = await clientIp();
  if (!(await checkRateLimit(`portal:magic:${ip}`, 5, 60_000))) {
    return { error: "Trop de tentatives. Réessayez dans une minute." };
  }

  const supabase = await createClient();
  const redirectTo = `${appUrl()}/auth/callback?next=${encodeURIComponent(next)}`;

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: redirectTo },
  });
  if (error) return { error: error.message };
  return { sent: true };
}

export async function startGoogleSignIn(formData: FormData): Promise<void> {
  const next = safeNext(String(formData.get("next") ?? "/portail"));
  const supabase = await createClient();
  const redirectTo = `${appUrl()}/auth/callback?next=${encodeURIComponent(next)}`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo },
  });
  if (error || !data?.url) {
    redirect(`/portail/login?error=${encodeURIComponent(error?.message ?? "oauth_failed")}`);
  }
  redirect(data.url);
}

export async function portalSignOut(): Promise<void> {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/portail/login");
}
