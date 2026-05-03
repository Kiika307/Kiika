import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Politique de confidentialité — KIIKA",
  description: "Politique de confidentialité et traitement des données personnelles de l'application KIIKA, éditée par INTIO.",
};

export default function ConfidentialitePage() {
  return (
    <LegalShell title="Politique de confidentialité" lastUpdated="3 mai 2026">
      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          1. Responsable du traitement
        </h2>
        <p>
          Pour les données du compte Utilisateur (nom, e-mail, mot de passe haché),
          INTIO — propriété de Madame Varinka ROBERT, 99 domaine de Suartello — est
          responsable du traitement.
        </p>
        <p className="mt-2">
          Pour les données saisies par l&apos;Utilisateur sur ses Clients finaux,
          l&apos;Utilisateur est <strong>responsable de traitement</strong> et INTIO agit
          en qualité de <strong>sous-traitant</strong> au sens de l&apos;article 28 du
          RGPD.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          2. Données collectées
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Compte Utilisateur</strong>&nbsp;: nom, prénom, adresse e-mail, mot de
            passe haché, préférences d&apos;interface.
          </li>
          <li>
            <strong>Données de Clients finaux</strong> (saisies par l&apos;Utilisateur)&nbsp;:
            identité, coordonnées, antécédents déclarés, notes d&apos;accompagnement,
            documents joints, historique de séances, plans, factures, consentements.
          </li>
          <li>
            <strong>Données techniques</strong>&nbsp;: cookies de session strictement
            nécessaires, journaux applicatifs, adresse IP au moment de la connexion.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          3. Finalités
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>fourniture du service de gestion de cabinet ;</li>
          <li>authentification et sécurité du compte ;</li>
          <li>communication transactionnelle (e-mails de confirmation, alertes) ;</li>
          <li>amélioration et maintenance technique de l&apos;Application.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          4. Base légale
        </h2>
        <p>
          Les traitements reposent sur l&apos;exécution du contrat (acceptation des CGU)
          pour le compte Utilisateur, et sur l&apos;intérêt légitime du professionnel à
          gérer son activité, ainsi que sur le consentement du Client final pour les
          données saisies par l&apos;Utilisateur.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          5. Destinataires
        </h2>
        <p>Les données sont accessibles à&nbsp;:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>l&apos;Utilisateur titulaire du compte ;</li>
          <li>l&apos;équipe technique de l&apos;Éditeur (accès strictement nécessaire) ;</li>
          <li>les sous-traitants techniques (Vercel pour l&apos;hébergement applicatif, Supabase pour la base de données et le stockage).</li>
        </ul>
        <p className="mt-2">
          Aucune donnée n&apos;est transmise à des tiers à des fins commerciales.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          6. Durée de conservation
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Données de compte&nbsp;: pendant la durée d&apos;utilisation, supprimées dans
            un délai de trente (30) jours après suppression du compte.
          </li>
          <li>
            Données de Clients finaux&nbsp;: sous la responsabilité de l&apos;Utilisateur,
            conformément aux durées légales applicables à son activité.
          </li>
          <li>
            Journaux techniques&nbsp;: douze (12) mois maximum.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          7. Vos droits (RGPD)
        </h2>
        <p>Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants&nbsp;:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>droit d&apos;accès à vos données ;</li>
          <li>droit de rectification ;</li>
          <li>droit à l&apos;effacement (« droit à l&apos;oubli ») ;</li>
          <li>droit à la limitation du traitement ;</li>
          <li>droit à la portabilité (export PDF disponible depuis l&apos;Application) ;</li>
          <li>droit d&apos;opposition.</li>
        </ul>
        <p className="mt-2">
          Pour exercer ces droits, contactez l&apos;Éditeur via l&apos;adresse postale
          INTIO — 99 domaine de Suartello. Un justificatif d&apos;identité pourra être
          demandé. Vous pouvez également introduire une réclamation auprès de la CNIL (
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-gold)] hover:underline"
          >
            www.cnil.fr
          </a>
          ).
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          8. Sécurité
        </h2>
        <p>
          L&apos;Éditeur met en œuvre des mesures techniques (chiffrement HTTPS,
          isolation des données par utilisateur via Row-Level Security au niveau base de
          données, mots de passe hachés) et organisationnelles destinées à protéger la
          confidentialité, l&apos;intégrité et la disponibilité des données.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          9. Cookies
        </h2>
        <p>
          L&apos;Application utilise uniquement des cookies strictement nécessaires à la
          connexion et au fonctionnement (session d&apos;authentification, préférence de
          thème). Aucun cookie publicitaire ni de mesure d&apos;audience tiers n&apos;est
          déposé sans votre consentement.
        </p>
      </section>
    </LegalShell>
  );
}
