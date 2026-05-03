import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Mentions légales — INTIO",
  description: "Mentions légales de l'application INTIO.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalShell title="Mentions légales" lastUpdated="3 mai 2026">
      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          Éditeur du site
        </h2>
        <p>
          <strong>INTIO</strong>
          <br />
          Propriétaire&nbsp;: Madame Varinka ROBERT
          <br />
          Siège&nbsp;: 99 domaine de Suartello
          <br />
          Contact&nbsp;: voir formulaire de contact dans l&apos;application
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          Directrice de la publication
        </h2>
        <p>Madame Varinka ROBERT.</p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          Hébergement
        </h2>
        <p>
          L&apos;application est hébergée par Vercel Inc., 440 N Barranca Avenue #4133,
          Covina, CA 91723, États-Unis (
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-gold)] hover:underline"
          >
            vercel.com
          </a>
          ).
        </p>
        <p className="mt-2">
          Les données sont stockées via Supabase (Supabase Inc., 970 Toa Payoh North
          #07-04, Singapore 318992 — données hébergées dans la région UE).
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          Propriété intellectuelle
        </h2>
        <p>
          L&apos;ensemble du contenu présent sur l&apos;application (textes, design, code,
          marques, logos) est protégé par le droit d&apos;auteur et reste la propriété
          exclusive de l&apos;Éditeur ou de ses partenaires. Toute reproduction non
          autorisée est interdite.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          Crédits
        </h2>
        <p>
          Icônes&nbsp;: Lucide (licence ISC). Polices&nbsp;: DM Sans et Playfair Display
          (Google Fonts, Open Font License).
        </p>
      </section>
    </LegalShell>
  );
}
