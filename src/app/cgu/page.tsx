import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — INTIO",
  description: "Conditions Générales d'Utilisation de l'application INTIO.",
};

export default function CGUPage() {
  return (
    <LegalShell title="Conditions Générales d'Utilisation" lastUpdated="3 mai 2026">
      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          1. Préambule
        </h2>
        <p>
          Les présentes Conditions Générales d&apos;Utilisation (ci-après «&nbsp;CGU&nbsp;»)
          régissent l&apos;accès et l&apos;utilisation de l&apos;application en ligne
          <strong> INTIO</strong> (ci-après «&nbsp;l&apos;Application&nbsp;»), accessible à
          l&apos;adresse{" "}
          <a href="https://kiika.intio.fr" className="text-[var(--color-gold)] hover:underline">
            https://kiika.intio.fr
          </a>
          .
        </p>
        <p className="mt-2">
          L&apos;Application est éditée par <strong>INTIO</strong>, dont le siège est situé
          au <strong>99 domaine de Suartello</strong>, propriété de Madame{" "}
          <strong>Varinka ROBERT</strong>.
        </p>
        <p className="mt-2">
          L&apos;utilisation de l&apos;Application implique l&apos;acceptation pleine et
          entière des présentes CGU par l&apos;Utilisateur.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          2. Définitions
        </h2>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>
            <strong>Éditeur</strong> : INTIO, représentée par Varinka ROBERT, propriétaire
            de l&apos;Application.
          </li>
          <li>
            <strong>Utilisateur</strong> : toute personne physique majeure disposant
            d&apos;un compte sur l&apos;Application, exerçant à titre professionnel une
            activité de <strong>coaching ou d&apos;accompagnement holistique</strong>{" "}
            (hypnothérapeute, sophrologue, énergéticien, praticien en PNL, EFT, et autres
            disciplines apparentées).
          </li>
          <li>
            <strong>Client final</strong> : personne accompagnée par l&apos;Utilisateur,
            dont les informations sont enregistrées dans l&apos;Application.
          </li>
          <li>
            <strong>Compte</strong> : espace personnel de l&apos;Utilisateur, accessible
            via identifiants personnels.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          3. Public concerné — Exclusions
        </h2>
        <p>
          L&apos;Application est <strong>strictement réservée aux professionnels du
          coaching et de l&apos;accompagnement holistique</strong> dont l&apos;activité ne
          relève pas de la médecine ni des professions de santé réglementées au sens du
          Code de la santé publique.
        </p>
        <p className="mt-2">
          <strong>L&apos;Application ne peut pas être utilisée par&nbsp;:</strong>
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>les médecins, psychiatres, psychologues, infirmiers, kinésithérapeutes ;</li>
          <li>
            tout professionnel de santé inscrit à un ordre professionnel ou exerçant un
            acte médical ou paramédical réglementé ;
          </li>
          <li>tout établissement de soins ou structure médicale.</li>
        </ul>
        <p className="mt-2">
          L&apos;Application n&apos;est pas conçue pour héberger des données de santé au
          sens de l&apos;article L.1111-8 du Code de la santé publique. Elle n&apos;est pas
          certifiée HDS (Hébergeur de Données de Santé). L&apos;Utilisateur s&apos;engage
          à ne saisir aucune donnée à caractère médical au sens strict, y compris
          diagnostic, prescription, ou information susceptible de relever du secret
          médical.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          4. Création de compte
        </h2>
        <p>
          L&apos;accès à l&apos;Application nécessite la création d&apos;un compte
          personnel. L&apos;Utilisateur s&apos;engage à fournir des informations exactes,
          complètes et à jour (nom, prénom, adresse e-mail). Il est seul responsable de la
          confidentialité de son mot de passe et de toute activité effectuée depuis son
          compte.
        </p>
        <p className="mt-2">
          L&apos;Éditeur se réserve le droit de suspendre ou de supprimer tout compte en
          cas de manquement aux présentes CGU, d&apos;usage frauduleux ou
          d&apos;utilisation contraire à la loi.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          5. Description du service
        </h2>
        <p>
          L&apos;Application propose à l&apos;Utilisateur un ensemble d&apos;outils
          permettant la gestion administrative de son activité&nbsp;:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>gestion d&apos;une base de Clients finaux ;</li>
          <li>agenda de rendez-vous, en présentiel ou en visioconférence ;</li>
          <li>messagerie privée avec les Clients finaux ;</li>
          <li>
            bibliothèque de protocoles d&apos;accompagnement (à titre purement
            informatif) ;
          </li>
          <li>
            prise de notes, plans d&apos;accompagnement, suivi de tâches, export PDF,
            facturation, gestion documentaire et de consentements.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          6. Obligations de l&apos;Utilisateur
        </h2>
        <p>
          L&apos;Utilisateur s&apos;engage à&nbsp;:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            recueillir le consentement libre, éclairé et écrit de chaque Client final avant
            d&apos;enregistrer ses données dans l&apos;Application ;
          </li>
          <li>
            ne pas utiliser l&apos;Application pour stocker des données médicales au sens
            strict ;
          </li>
          <li>
            respecter la confidentialité des informations relatives à ses Clients finaux ;
          </li>
          <li>
            ne pas utiliser l&apos;Application à des fins illicites, frauduleuses ou
            contraires aux bonnes mœurs ;
          </li>
          <li>
            ne pas tenter de contourner les mesures de sécurité ni de porter atteinte à
            l&apos;intégrité de l&apos;Application ;
          </li>
          <li>
            informer l&apos;Éditeur sans délai de tout accès non autorisé à son compte.
          </li>
        </ul>
        <p className="mt-2">
          L&apos;Utilisateur agit en qualité de <strong>responsable de traitement</strong>{" "}
          au sens du RGPD vis-à-vis des données de ses Clients finaux. INTIO agit en
          qualité de <strong>sous-traitant</strong>.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          7. Propriété intellectuelle
        </h2>
        <p>
          L&apos;ensemble des éléments composant l&apos;Application (code source, design,
          textes, logo, base documentaire) est la propriété exclusive de l&apos;Éditeur ou
          de ses partenaires. Toute reproduction, représentation, modification ou
          adaptation, totale ou partielle, est strictement interdite sans autorisation
          écrite préalable.
        </p>
        <p className="mt-2">
          Les contenus saisis par l&apos;Utilisateur (notes, plans, documents) restent sa
          propriété. Il concède à l&apos;Éditeur une licence non exclusive,
          gratuite et limitée à la stricte exécution du service.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          8. Disponibilité du service
        </h2>
        <p>
          L&apos;Éditeur s&apos;efforce de maintenir l&apos;Application accessible 24h/24
          et 7j/7. Toutefois, aucun engagement de disponibilité n&apos;est garanti. Des
          interruptions peuvent survenir pour maintenance, mise à jour ou en cas de force
          majeure. L&apos;Éditeur ne pourra être tenu responsable des conséquences de
          telles interruptions.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          9. Limitation de responsabilité
        </h2>
        <p>
          L&apos;Application est fournie «&nbsp;en l&apos;état&nbsp;». L&apos;Éditeur ne
          peut être tenu responsable&nbsp;:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            des conséquences directes ou indirectes liées à l&apos;utilisation de
            l&apos;Application par l&apos;Utilisateur ou ses Clients finaux ;
          </li>
          <li>
            des choix professionnels effectués par l&apos;Utilisateur sur la base des
            outils ou contenus proposés (la bibliothèque de protocoles est purement
            informative) ;
          </li>
          <li>
            de la perte de données résultant d&apos;un acte de l&apos;Utilisateur, d&apos;un
            tiers, ou d&apos;une cause extérieure ;
          </li>
          <li>
            de l&apos;usage non conforme par l&apos;Utilisateur, notamment en cas de
            stockage de données de santé.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          10. Données personnelles
        </h2>
        <p>
          Le traitement des données personnelles est encadré par la{" "}
          <a href="/confidentialite" className="text-[var(--color-gold)] hover:underline">
            Politique de confidentialité
          </a>
          , qui fait partie intégrante des présentes CGU.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          11. Modification des CGU
        </h2>
        <p>
          L&apos;Éditeur se réserve le droit de modifier les présentes CGU à tout moment.
          Toute modification substantielle sera notifiée à l&apos;Utilisateur par e-mail
          ou via l&apos;Application. La poursuite de l&apos;utilisation après notification
          vaut acceptation des nouvelles CGU.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          12. Droit applicable et juridiction
        </h2>
        <p>
          Les présentes CGU sont régies par le droit français. Tout litige relatif à leur
          interprétation ou à leur exécution relève de la compétence exclusive des
          tribunaux français, sous réserve des dispositions impératives applicables aux
          consommateurs.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          13. Contact
        </h2>
        <p>
          Pour toute question relative aux présentes CGU, l&apos;Utilisateur peut contacter
          l&apos;Éditeur à l&apos;adresse postale&nbsp;: INTIO — 99 domaine de Suartello.
        </p>
      </section>
    </LegalShell>
  );
}
