import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronLeft } from "lucide-react";

interface LegalShellProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalShell({ title, lastUpdated, children }: LegalShellProps) {
  return (
    <div className="min-h-[100dvh] bg-[var(--color-cream)] py-8 sm:py-12 px-4">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-navy)] hover:text-[var(--color-gold)] mb-6 min-h-11"
        >
          <ChevronLeft size={16} aria-hidden="true" />
          Retour à la connexion
        </Link>

        <article
          className="rounded-[16px] bg-[var(--color-white-soft)] p-6 sm:p-10"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <header className="mb-8 pb-6 border-b border-[var(--color-light-gray)]">
            <h1 className="font-serif text-[26px] sm:text-[32px] font-bold text-[var(--color-navy)] leading-tight">
              {title}
            </h1>
            <p className="mt-2 text-[13px] text-[var(--color-gray-soft)]">
              Dernière mise à jour : {lastUpdated}
            </p>
          </header>

          <div className="legal-prose text-[14px] sm:text-[15px] text-[var(--color-navy)] leading-[1.7] space-y-6">
            {children}
          </div>

          <footer className="mt-10 pt-6 border-t border-[var(--color-light-gray)] flex flex-wrap gap-x-5 gap-y-2 text-[12px]">
            <Link href="/cgu" className="font-semibold text-[var(--color-gold)] hover:underline">
              CGU
            </Link>
            <Link href="/cgv" className="font-semibold text-[var(--color-gold)] hover:underline">
              CGV
            </Link>
            <Link href="/mentions-legales" className="font-semibold text-[var(--color-gold)] hover:underline">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="font-semibold text-[var(--color-gold)] hover:underline">
              Politique de confidentialité
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
}
