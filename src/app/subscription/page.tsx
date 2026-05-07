import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Sparkles,
  Check,
  Brain,
  Bell,
  Calendar,
  Users,
  ShieldCheck,
  CreditCard,
  AlertCircle,
} from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { createClient } from "@/lib/supabase/server";
import { isSubscriptionActive } from "@/lib/stripe";
import { startCheckoutAction, openBillingPortalAction } from "./actions";

export const metadata: Metadata = {
  title: "Abonnement — KIIKA",
};

interface PageProps {
  searchParams: Promise<{ status?: string; error?: string }>;
}

const FEATURES: Array<{ icon: React.ElementType; label: string }> = [
  { icon: Users, label: "Gestion clients illimitée + dossier complet" },
  { icon: Calendar, label: "Agenda + rappels automatiques 24h / 1h" },
  { icon: Brain, label: "Assistance KIIKA IA (lecture profil + parcours 10 séances)" },
  { icon: Sparkles, label: "Bibliothèque de 600+ protocoles holistiques" },
  { icon: Bell, label: "Messagerie privée avec vos clients" },
  { icon: ShieldCheck, label: "RGPD + chiffrement de bout en bout" },
];

const FR_DATE = new Intl.DateTimeFormat("fr-FR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default async function SubscriptionPage({ searchParams }: PageProps) {
  const { status, error } = await searchParams;

  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/login?redirect=/subscription");

  const { data: profile } = await supabase
    .from("profiles")
    .select(
      "subscription_status, current_period_end, trial_end, cancel_at_period_end, stripe_customer_id",
    )
    .eq("id", auth.user.id)
    .maybeSingle();

  const active = isSubscriptionActive(profile?.subscription_status);
  const trialing = profile?.subscription_status === "trialing";
  const cancelling = profile?.cancel_at_period_end ?? false;

  return (
    <AppShell>
      <header className="mb-6 sm:mb-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)] mb-2">
          Abonnement
        </p>
        <h1 className="font-serif text-[26px] sm:text-[30px] font-bold text-[var(--color-navy)] leading-tight">
          {active ? "Votre abonnement KIIKA" : "Passez à l'abonnement complet"}
        </h1>
        <p className="mt-1.5 text-[13px] sm:text-[14px] text-[var(--color-gray-soft)]">
          {active
            ? "Toutes les fonctionnalités sont actives. Vous pouvez gérer votre paiement et résilier à tout moment depuis le portail Stripe."
            : "Démarrez avec 14 jours d'essai gratuit. Sans engagement — résiliable en un clic."}
        </p>
      </header>

      {status === "success" && (
        <div
          className="mb-5 rounded-[14px] p-4 flex items-start gap-3"
          style={{ backgroundColor: "rgba(46,138,123,0.10)" }}
        >
          <Check size={18} className="text-[var(--color-teal)] mt-0.5" />
          <div>
            <div className="text-[14px] font-semibold text-[var(--color-navy)]">
              Bienvenue dans KIIKA !
            </div>
            <p className="text-[12.5px] text-[var(--color-gray-soft)] mt-0.5">
              Votre abonnement est actif. Vous ne serez prélevé qu&apos;à la fin de la
              période d&apos;essai.
            </p>
          </div>
        </div>
      )}
      {error && (
        <div
          className="mb-5 rounded-[14px] p-4 flex items-start gap-3"
          style={{ backgroundColor: "rgba(184,84,80,0.10)" }}
        >
          <AlertCircle size={18} className="text-[#B85450] mt-0.5" />
          <div>
            <div className="text-[14px] font-semibold text-[var(--color-navy)]">
              Une erreur est survenue
            </div>
            <p className="text-[12.5px] text-[var(--color-gray-soft)] mt-0.5">
              {humanizeError(error)}
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <section
          className="rounded-[18px] p-7 sm:p-8 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--gradient-feature-from) 0%, var(--gradient-feature-to) 100%)",
            color: "var(--color-gold-light)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold mb-3">
            KIIKA — Plan unique
          </p>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-serif text-[44px] font-bold text-white leading-none tabular">
              37
            </span>
            <span className="text-[16px] text-white/70">€ TTC / mois</span>
          </div>
          <p className="text-[13px] text-white/75 leading-[1.55] max-w-md">
            Toutes les fonctionnalités. Sans engagement. Résiliable depuis votre
            espace en un clic. <strong>14 jours d&apos;essai gratuit</strong> —
            aucune carte requise pour démarrer un test, mais le paiement passe
            automatiquement à la fin de la période si vous n&apos;avez pas annulé.
          </p>

          <div className="mt-7">
            {active ? (
              <ActiveBlock
                status={profile?.subscription_status ?? null}
                trialEnd={profile?.trial_end ?? null}
                periodEnd={profile?.current_period_end ?? null}
                cancelling={cancelling}
                trialing={trialing}
              />
            ) : (
              <form action={startCheckoutAction}>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-[12px] px-6 py-3.5 text-[14.5px] font-semibold text-[var(--color-navy)] min-h-12 transition-opacity hover:opacity-95"
                  style={{ backgroundColor: "var(--color-gold-light)" }}
                >
                  <Sparkles size={16} aria-hidden="true" />
                  Démarrer mes 14 jours gratuits
                </button>
                <p className="mt-3 text-[11.5px] text-white/55">
                  Paiement sécurisé via Stripe. CB ou prélèvement SEPA.
                </p>
              </form>
            )}
          </div>
        </section>

        <section
          className="rounded-[18px] p-6 sm:p-7"
          style={{
            backgroundColor: "var(--color-white-soft)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h2 className="font-serif text-[16px] font-semibold text-[var(--color-navy)] mb-4">
            Ce qui est inclus
          </h2>
          <ul className="space-y-3">
            {FEATURES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-3">
                <div
                  className="inline-flex items-center justify-center w-8 h-8 rounded-[8px] shrink-0"
                  style={{
                    backgroundColor: "var(--color-cream)",
                    color: "var(--color-gold)",
                  }}
                  aria-hidden="true"
                >
                  <Icon size={15} />
                </div>
                <span className="text-[13px] text-[var(--color-navy)] leading-[1.55] pt-1">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <p className="mt-6 text-[11.5px] text-[var(--color-gray-soft)] leading-[1.5]">
        En souscrivant, vous acceptez les{" "}
        <Link
          href="/cgv"
          target="_blank"
          rel="noopener"
          className="underline underline-offset-2 hover:text-[var(--color-gold)]"
        >
          Conditions Générales de Vente
        </Link>
        . Le paiement est traité par Stripe Payments Europe Ltd. Aucune donnée
        bancaire n&apos;est conservée par KIIKA.
      </p>
    </AppShell>
  );
}

interface ActiveBlockProps {
  status: string | null;
  trialEnd: string | null;
  periodEnd: string | null;
  cancelling: boolean;
  trialing: boolean;
}

function ActiveBlock({
  status,
  trialEnd,
  periodEnd,
  cancelling,
  trialing,
}: ActiveBlockProps) {
  const nextChargeOrEnd = trialing
    ? trialEnd
    : cancelling
      ? periodEnd
      : periodEnd;
  const formatted = nextChargeOrEnd
    ? FR_DATE.format(new Date(nextChargeOrEnd))
    : null;

  return (
    <div className="space-y-4">
      <div
        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-semibold"
        style={{ backgroundColor: "rgba(46,138,123,0.18)", color: "#9DD9CB" }}
      >
        <Check size={13} aria-hidden="true" />
        {trialing
          ? "Période d'essai en cours"
          : cancelling
            ? "Résilié — actif jusqu'à la fin de la période"
            : "Abonnement actif"}
      </div>

      {formatted && (
        <p className="text-[13px] text-white/80">
          {trialing
            ? `Premier prélèvement le ${formatted} — 37 € TTC.`
            : cancelling
              ? `Accès maintenu jusqu'au ${formatted}.`
              : `Prochain prélèvement le ${formatted}.`}
        </p>
      )}

      <form action={openBillingPortalAction}>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-white/5 transition-colors min-h-11"
        >
          <CreditCard size={14} aria-hidden="true" />
          Gérer mon abonnement
        </button>
      </form>
      <p className="text-[10.5px] text-white/55">
        Statut Stripe : {status ?? "—"}. Le portail vous permet de mettre à jour
        votre carte, télécharger les factures ou résilier.
      </p>
    </div>
  );
}

function humanizeError(code: string): string {
  switch (code) {
    case "stripe_not_configured":
      return "Le paiement n'est pas encore branché côté serveur.";
    case "stripe_price_missing":
      return "Le tarif Stripe n'est pas configuré.";
    case "session":
      return "Impossible de créer la session de paiement. Réessayez.";
    case "no_customer":
      return "Aucun moyen de paiement enregistré. Démarrez d'abord un abonnement.";
    default:
      return "Réessayez ou contactez le support.";
  }
}
