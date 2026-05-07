import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { CalendarSettings } from "@/components/settings/CalendarSettings";
import { createClient } from "@/lib/supabase/server";
import { getCalendarSyncSettings } from "@/lib/data";
import { isGoogleCalendarConfigured } from "@/lib/google-calendar";

export const metadata: Metadata = {
  title: "Synchronisation calendrier — KIIKA",
};

interface PageProps {
  searchParams: Promise<{ status?: string; error?: string }>;
}

export default async function CalendarSettingsPage({ searchParams }: PageProps) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/login?redirect=/settings/calendar");

  const settings = await getCalendarSyncSettings();
  const { status, error } = await searchParams;

  return (
    <AppShell>
      <header className="mb-6 sm:mb-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)] mb-2">
          Réglages
        </p>
        <h1 className="font-serif text-[24px] sm:text-[28px] font-bold text-[var(--color-navy)]">
          Synchronisation calendrier
        </h1>
        <p className="mt-1 text-[13px] sm:text-[14px] text-[var(--color-gray-soft)]">
          Connectez votre Google Calendar pour synchroniser les rendez-vous,
          ou abonnez-vous au flux iCal depuis Apple Calendar / Outlook /
          Google.
        </p>
      </header>

      <CalendarSettings
        icalToken={settings?.icalToken ?? ""}
        googleConnected={settings?.googleConnected ?? false}
        googleEmail={settings?.googleEmail ?? null}
        googleSyncEnabled={settings?.googleSyncEnabled ?? false}
        googleConfigured={isGoogleCalendarConfigured()}
        status={status ?? null}
        error={error ?? null}
      />
    </AppShell>
  );
}
