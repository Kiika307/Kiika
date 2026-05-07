"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { isValidSlug, type WorkingHours } from "@/lib/booking";

export interface BookingSettingsInput {
  slug: string | null;
  enabled: boolean;
  defaultDuration: number;
  buffer: number;
  intro: string | null;
  workingHours: WorkingHours;
  advanceDays: number;
}

export async function updateBookingSettings(
  input: BookingSettingsInput,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const slug = input.slug?.trim().toLowerCase() || null;

  if (input.enabled && !slug) {
    return { ok: false, error: "Choisissez un identifiant pour votre page publique." };
  }
  if (slug && !isValidSlug(slug)) {
    return {
      ok: false,
      error:
        "Identifiant invalide : minuscules, chiffres et tirets uniquement (3-60 caractères, sans tiret au début/fin).",
    };
  }
  if (slug) {
    const { data: existing } = await supabase
      .from("profiles")
      .select("id")
      .eq("booking_slug", slug)
      .neq("id", auth.user.id)
      .maybeSingle();
    if (existing) {
      return { ok: false, error: "Cet identifiant est déjà pris." };
    }
  }
  if (input.defaultDuration < 15 || input.defaultDuration > 240) {
    return { ok: false, error: "Durée de séance entre 15 et 240 minutes." };
  }
  if (input.buffer < 0 || input.buffer > 120) {
    return { ok: false, error: "Tampon entre 0 et 120 minutes." };
  }
  if (input.advanceDays < 1 || input.advanceDays > 90) {
    return { ok: false, error: "Réservation à l'avance entre 1 et 90 jours." };
  }

  const { error } = await supabase
    .from("profiles")
    .update({
      booking_slug: slug,
      booking_enabled: input.enabled,
      booking_default_duration: input.defaultDuration,
      booking_buffer: input.buffer,
      booking_intro: input.intro?.slice(0, 1000) ?? null,
      booking_working_hours: input.workingHours,
      booking_advance_days: input.advanceDays,
      updated_at: new Date().toISOString(),
    })
    .eq("id", auth.user.id);
  if (error) return { ok: false, error: error.message };

  revalidatePath("/settings/booking");
  return { ok: true };
}
