"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createPublicClient } from "@/lib/supabase/public";
import { calculateSeleneScores, buildSeleneProfile } from "@/lib/selene-scoring";
import type { SeleneDimension } from "@/lib/selene-data";
import { rateLimit, clientIp } from "@/lib/rate-limit";

// ============================================================
// Génération de lien d'invitation au test (thérapeute)
// ============================================================

function randomToken(): string {
  // 32 chars URL-safe random
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSeleneInvitation(
  clientId: string,
): Promise<{ ok: boolean; token?: string; url?: string; expiresAt?: string; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  // Vérifier ownership du client
  const { data: client } = await supabase
    .from("clients")
    .select("id, full_name")
    .eq("id", clientId)
    .eq("therapist_id", auth.user.id)
    .maybeSingle();

  if (!client) return { ok: false, error: "Client introuvable" };

  const token = randomToken();
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

  const { error } = await supabase.from("selene_invitations").insert({
    token,
    therapist_id: auth.user.id,
    client_id: clientId,
    expires_at: expiresAt,
  });

  if (error) return { ok: false, error: error.message };

  // Construit l'URL absolue à partir du Site URL Supabase ou du domaine de prod connu.
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ?? "https://kiika.intio.fr";
  const url = `${baseUrl}/selene/${token}`;

  revalidatePath("/clients");
  return { ok: true, token, url, expiresAt };
}

// ============================================================
// Soumission du test (client final, public)
// ============================================================

export interface SeleneInvitationContext {
  ok: boolean;
  invitationId?: string;
  clientId?: string;
  clientFirstName?: string;
  expiresAt?: string;
  alreadyUsed?: boolean;
  error?: string;
}

export async function loadSeleneInvitation(token: string): Promise<SeleneInvitationContext> {
  // Rate limit: 30 lookups per minute per IP. Protects against brute-force
  // enumeration of invitation tokens.
  const ip = await clientIp();
  if (!rateLimit.consume(`selene:load:${ip}`, 30, 60_000)) {
    return { ok: false, error: "Trop de requêtes. Réessayez dans une minute." };
  }

  const supabase = await createPublicClient();
  const { data, error } = await supabase
    .rpc("get_selene_invitation", { p_token: token })
    .single();

  if (error || !data) {
    return { ok: false, error: "Invitation invalide ou expirée." };
  }
  const row = data as {
    invitation_id: string;
    client_id: string;
    client_first_name: string;
    expires_at: string;
    already_used: boolean;
  };

  return {
    ok: true,
    invitationId: row.invitation_id,
    clientId: row.client_id,
    clientFirstName: row.client_first_name,
    expiresAt: row.expires_at,
    alreadyUsed: row.already_used,
  };
}

export async function submitSeleneResponses(
  token: string,
  responses: Record<string, number>,
): Promise<{ ok: boolean; error?: string; dominante?: string }> {
  // Rate limit: 5 attempts per IP per hour for a costly write+RPC path.
  const ip = await clientIp();
  if (!rateLimit.consume(`selene:submit:${ip}`, 5, 60 * 60 * 1000)) {
    return { ok: false, error: "Trop de tentatives de soumission. Réessayez plus tard." };
  }

  // Validation basique côté serveur
  const ids = Object.keys(responses);
  if (ids.length < 100) return { ok: false, error: "Réponses incomplètes" };
  for (const id of ids) {
    const v = responses[id];
    if (typeof v !== "number" || v < 1 || v > 7 || !Number.isFinite(v)) {
      return { ok: false, error: `Réponse invalide pour ${id}` };
    }
  }

  // Calcul du score côté serveur (autorité, le client peut être falsifié)
  const scoreResults = calculateSeleneScores(responses);
  const profile = buildSeleneProfile(scoreResults);

  const scoresMap: Record<string, number> = {};
  for (const r of scoreResults) {
    scoresMap[r.dimension] = r.scoreNormalise;
  }
  const top3: SeleneDimension[] = profile.top3.map((s) => s.dimension);

  const supabase = await createPublicClient();
  const { data, error } = await supabase
    .rpc("submit_selene_response", {
      p_token: token,
      p_responses: responses,
      p_scores: scoresMap,
      p_dominante: profile.dimensionDominante,
      p_top3: top3,
    })
    .single();

  if (error) return { ok: false, error: error.message };
  const row = data as { success: boolean; message: string };
  if (!row.success) return { ok: false, error: row.message };

  return { ok: true, dominante: profile.dimensionDominante };
}
