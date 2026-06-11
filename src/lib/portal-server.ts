import "server-only";
import type { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export interface PortalClient {
  id: string;
  full_name: string;
  therapist_id: string;
}

export interface PortalContext {
  supabase: Awaited<ReturnType<typeof createClient>>;
  user: User;
  client: PortalClient;
}

/**
 * Récupère le contexte portail pour une page (app) : utilisateur authentifié
 * + sa fiche client liée. Redirige proprement plutôt que de crasher si l'un
 * des deux manque (évite les 500 sur race condition / RLS).
 */
export async function requirePortalClient(): Promise<PortalContext> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/portail/login");

  const { data: client } = await supabase
    .from("clients")
    .select("id, full_name, therapist_id")
    .eq("user_id", auth.user.id)
    .maybeSingle();

  if (!client) redirect("/portail/login?error=no_client");

  return { supabase, user: auth.user, client };
}
