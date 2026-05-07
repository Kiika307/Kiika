import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { BookingSettingsForm } from "@/components/settings/BookingSettingsForm";
import { createClient } from "@/lib/supabase/server";
import type { WorkingHours } from "@/lib/booking";
import { suggestSlug } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Page de réservation publique — KIIKA",
};

const DEFAULT_WORKING_HOURS: WorkingHours = {
  mon: [{ from: "09:00", to: "12:00" }, { from: "14:00", to: "18:00" }],
  tue: [{ from: "09:00", to: "12:00" }, { from: "14:00", to: "18:00" }],
  wed: [{ from: "09:00", to: "12:00" }, { from: "14:00", to: "18:00" }],
  thu: [{ from: "09:00", to: "12:00" }, { from: "14:00", to: "18:00" }],
  fri: [{ from: "09:00", to: "12:00" }, { from: "14:00", to: "18:00" }],
  sat: [],
  sun: [],
};

interface ProfileRow {
  full_name: string | null;
  booking_slug: string | null;
  booking_enabled: boolean;
  booking_default_duration: number;
  booking_buffer: number;
  booking_intro: string | null;
  booking_advance_days: number;
  booking_working_hours: unknown;
}

function safeWorkingHours(value: unknown): WorkingHours {
  if (typeof value !== "object" || value === null) return DEFAULT_WORKING_HOURS;
  const v = value as Record<string, unknown>;
  const out: WorkingHours = { ...DEFAULT_WORKING_HOURS };
  for (const k of ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const) {
    const arr = v[k];
    if (!Array.isArray(arr)) continue;
    out[k] = arr
      .filter(
        (it): it is { from: string; to: string } =>
          typeof it === "object" &&
          it !== null &&
          typeof (it as Record<string, unknown>).from === "string" &&
          typeof (it as Record<string, unknown>).to === "string",
      )
      .map((it) => ({ from: it.from, to: it.to }));
  }
  return out;
}

export default async function BookingSettingsPage() {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/login?redirect=/settings/booking");

  const { data } = await supabase
    .from("profiles")
    .select(
      "full_name, booking_slug, booking_enabled, booking_default_duration, booking_buffer, booking_intro, booking_advance_days, booking_working_hours",
    )
    .eq("id", auth.user.id)
    .maybeSingle();
  const row = (data ?? {}) as ProfileRow;

  return (
    <AppShell>
      <header className="mb-6 sm:mb-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)] mb-2">
          Réglages
        </p>
        <h1 className="font-serif text-[24px] sm:text-[28px] font-bold text-[var(--color-navy)]">
          Page de réservation publique
        </h1>
        <p className="mt-1 text-[13px] sm:text-[14px] text-[var(--color-gray-soft)]">
          Partagez un lien avec vos prospects pour qu&apos;ils prennent rendez-vous
          en autonomie. KIIKA crée le client et envoie une confirmation
          automatique.
        </p>
      </header>

      <BookingSettingsForm
        suggestedSlug={suggestSlug(row.full_name ?? "praticien")}
        initial={{
          slug: row.booking_slug ?? "",
          enabled: row.booking_enabled ?? false,
          defaultDuration: row.booking_default_duration ?? 60,
          buffer: row.booking_buffer ?? 15,
          intro: row.booking_intro ?? "",
          advanceDays: row.booking_advance_days ?? 30,
          workingHours: safeWorkingHours(row.booking_working_hours),
        }}
      />
    </AppShell>
  );
}
