import { redirect } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { ProfileForm } from "@/components/settings/ProfileForm";
import { RemindersToggle } from "@/components/settings/RemindersToggle";
import { getTherapist } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Mon profil — KIIKA",
};

export default async function ProfileSettingsPage() {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/login?redirect=/settings/profile");

  const therapist = await getTherapist();

  return (
    <AppShell>
      <header className="mb-6 sm:mb-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)] mb-2">
          Réglages
        </p>
        <h1 className="font-serif text-[24px] sm:text-[28px] font-bold text-[var(--color-navy)]">
          Mon profil
        </h1>
        <p className="mt-1 text-[13px] sm:text-[14px] text-[var(--color-gray-soft)]">
          Identité affichée dans la barre latérale, vos en-têtes d&apos;e-mail et le portail Selene.
        </p>
      </header>

      <ProfileForm
        initialFullName={therapist?.fullName ?? ""}
        initialRole={therapist?.role ?? ""}
        initialAvatarUrl={therapist?.avatarUrl ?? null}
        initials={therapist?.initials ?? "?"}
        email={auth.user.email ?? ""}
      />

      <div className="mt-6">
        <RemindersToggle initialEnabled={therapist?.remindersEnabled ?? true} />
      </div>

      <div className="mt-6">
        <a
          href="/subscription"
          className="block rounded-[18px] p-6 transition-colors hover:bg-[var(--color-cream)]/40"
          style={{
            backgroundColor: "var(--color-white-soft)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)] mb-1">
                Mon abonnement
              </h2>
              <p className="text-[12.5px] text-[var(--color-gray-soft)] leading-[1.55]">
                Gérer le paiement, télécharger les factures, résilier.
              </p>
            </div>
            <span
              className="text-[13px] font-semibold"
              style={{ color: "var(--color-gold)" }}
            >
              Voir →
            </span>
          </div>
        </a>
      </div>
    </AppShell>
  );
}
