"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { acceptPortalTerms } from "@/lib/portal-actions";

interface OnboardingFormProps {
  clientFirstName: string;
}

export function OnboardingForm({ clientFirstName }: OnboardingFormProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [cgu, setCgu] = useState(false);
  const [cgv, setCgv] = useState(false);
  const [rgpd, setRgpd] = useState(false);
  const allChecked = cgu && cgv && rgpd;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!allChecked) return;
    startTransition(async () => {
      const res = await acceptPortalTerms({ cgu, cgv, rgpd });
      if (res.ok) {
        toast.success("Bienvenue !");
        router.push("/portail");
        router.refresh();
      } else {
        toast.error(res.error ?? "Impossible d'enregistrer");
      }
    });
  }

  return (
    <div
      className="min-h-[100dvh] flex items-center justify-center px-4 py-8"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-[20px] bg-[var(--color-white-soft)] p-8 space-y-5"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <header className="text-center">
          <div className="font-serif text-[24px] tracking-[0.18em] font-bold text-[var(--color-navy)]">
            KIIKA
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Activation de votre espace
          </div>
        </header>

        <div>
          <h1 className="font-serif text-[19px] font-semibold text-[var(--color-navy)]">
            Bienvenue {clientFirstName}
          </h1>
          <p className="mt-1 text-[13px] text-[var(--color-gray-soft)] leading-[1.55]">
            Avant d'accéder à votre espace, merci d'accepter les conditions ci-dessous. Ces
            consentements sont conservés (date et heure) à des fins légales.
          </p>
        </div>

        <CheckRow checked={cgu} onChange={setCgu} id="cgu">
          <strong>J&apos;accepte les Conditions Générales d&apos;Utilisation</strong> de la
          plateforme KIIKA.{" "}
          <Link
            href="/cgu"
            target="_blank"
            className="underline text-[var(--color-gold)] hover:opacity-80"
          >
            Lire les CGU →
          </Link>
        </CheckRow>

        <CheckRow checked={cgv} onChange={setCgv} id="cgv">
          <strong>J&apos;accepte les Conditions Générales de Vente</strong> applicables aux
          prestations de mon praticien·ne.{" "}
          <Link
            href="/cgv"
            target="_blank"
            className="underline text-[var(--color-gold)] hover:opacity-80"
          >
            Lire les CGV →
          </Link>
        </CheckRow>

        <CheckRow checked={rgpd} onChange={setRgpd} id="rgpd">
          <strong>Je consens au traitement de mes données personnelles</strong> dans le cadre de
          mon accompagnement (RGPD). Je peux retirer ce consentement à tout moment et exercer
          mes droits d&apos;accès, rectification et suppression.{" "}
          <Link
            href="/confidentialite"
            target="_blank"
            className="underline text-[var(--color-gold)] hover:opacity-80"
          >
            Politique de confidentialité →
          </Link>
        </CheckRow>

        <button
          type="submit"
          disabled={!allChecked || pending}
          className="w-full inline-flex items-center justify-center gap-2 rounded-[12px] px-4 py-3 text-[14px] font-semibold text-white disabled:opacity-50"
          style={{ backgroundColor: "var(--color-gold)" }}
        >
          <CheckCircle2 size={16} />
          {pending ? "Enregistrement…" : "Activer mon espace"}
        </button>
      </form>
    </div>
  );
}

function CheckRow({
  checked,
  onChange,
  id,
  children,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-start gap-3 rounded-[12px] border px-4 py-3 cursor-pointer transition-colors"
      style={{
        borderColor: checked ? "var(--color-gold)" : "var(--color-light-gray)",
        backgroundColor: checked ? "rgba(200,160,48,0.08)" : "white",
      }}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 accent-[var(--color-gold)] cursor-pointer"
      />
      <span className="text-[13px] leading-[1.55] text-[var(--color-navy)]">{children}</span>
    </label>
  );
}
