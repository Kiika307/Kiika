import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — KIIKA",
  description: "Conditions Générales de Vente de l'application KIIKA, éditée par INTIO.",
};

export default function CGVPage() {
  return (
    <LegalShell title="Conditions Générales de Vente" lastUpdated="3 mai 2026">
      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          1. Objet
        </h2>
        <p>
          Les présentes Conditions Générales de Vente (ci-après «&nbsp;CGV&nbsp;») ont pour
          objet de définir les modalités de souscription, de paiement et d&apos;exécution
          des services proposés par <strong>INTIO</strong>, dont le siège est situé au{" "}
          <strong>99 domaine de Suartello</strong>, propriété de Madame{" "}
          <strong>Varinka ROBERT</strong> (ci-après «&nbsp;l&apos;Éditeur&nbsp;»), via
          l&apos;application <strong>KIIKA</strong> accessible à l&apos;adresse{" "}
          <a href="https://kiika.intio.fr" className="text-[var(--color-gold)] hover:underline">
            https://kiika.intio.fr
          </a>{" "}
          (ci-après «&nbsp;l&apos;Application&nbsp;»).
        </p>
        <p className="mt-2">
          Les présentes CGV s&apos;appliquent à tout Utilisateur professionnel souscrivant
          un abonnement payant à l&apos;Application. Elles complètent les Conditions
          Générales d&apos;Utilisation, qui restent applicables à tout usage de
          l&apos;Application.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          2. Acceptation
        </h2>
        <p>
          La souscription à l&apos;un abonnement payant suppose l&apos;acceptation
          expresse, pleine et entière des présentes CGV par l&apos;Utilisateur, qui
          déclare en avoir pris connaissance et les comprendre.
        </p>
        <p className="mt-2">
          L&apos;Utilisateur reconnaît agir à des fins entrant dans le cadre de son
          activité professionnelle. Les CGV sont réservées aux professionnels au sens du
          Code de la consommation.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          3. Description des offres
        </h2>
        <p>
          L&apos;Application est actuellement proposée en <strong>version bêta gratuite</strong>.
          Les fonctionnalités et conditions tarifaires des futures offres payantes seront
          détaillées sur la page tarifaire de l&apos;Application avant toute souscription.
        </p>
        <p className="mt-2">
          Les offres payantes pourront comprendre, à titre indicatif, des plans mensuels ou
          annuels assortis de limites différentes en termes de Clients finaux, de stockage
          documentaire ou de fonctionnalités avancées.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          4. Prix
        </h2>
        <p>
          Les prix sont exprimés en euros (€). En l&apos;absence d&apos;assujettissement à
          la TVA, la mention «&nbsp;TVA non applicable, art. 293 B du CGI&nbsp;» figurera
          le cas échéant sur les factures.
        </p>
        <p className="mt-2">
          L&apos;Éditeur se réserve le droit de modifier les prix à tout moment. Les
          nouveaux prix s&apos;appliqueront uniquement aux souscriptions futures et aux
          renouvellements. Les Utilisateurs déjà abonnés en seront informés au moins
          trente (30) jours avant la prise d&apos;effet.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          5. Modalités de paiement
        </h2>
        <p>
          Le paiement s&apos;effectue par carte bancaire ou prélèvement SEPA via le
          prestataire de paiement sécurisé désigné par l&apos;Éditeur. L&apos;Éditeur
          n&apos;a jamais accès aux données bancaires complètes de l&apos;Utilisateur,
          celles-ci étant traitées exclusivement par le prestataire.
        </p>
        <p className="mt-2">
          En cas d&apos;échec de prélèvement, l&apos;accès aux fonctionnalités payantes
          pourra être suspendu après notification, sans préjudice du recouvrement des
          sommes dues.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          6. Durée et renouvellement
        </h2>
        <p>
          Les abonnements sont souscrits pour la durée choisie par l&apos;Utilisateur
          (mensuelle ou annuelle). Ils se renouvellent automatiquement à l&apos;échéance,
          sauf résiliation par l&apos;Utilisateur depuis son espace personnel au moins
          quarante-huit (48) heures avant le terme en cours.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          7. Droit de rétractation
        </h2>
        <p>
          La souscription étant réservée à des Utilisateurs agissant à titre
          professionnel, le droit de rétractation prévu aux articles L.221-18 et suivants
          du Code de la consommation ne s&apos;applique pas, conformément à l&apos;article
          L.221-3.
        </p>
        <p className="mt-2">
          L&apos;Utilisateur peut néanmoins résilier son abonnement à tout moment depuis
          son espace personnel, la résiliation prenant effet à l&apos;échéance de la
          période en cours, sans remboursement prorata temporis.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          8. Résiliation par l&apos;Éditeur
        </h2>
        <p>
          L&apos;Éditeur peut suspendre ou résilier l&apos;abonnement, sans préavis ni
          remboursement, en cas&nbsp;:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>de manquement grave aux CGU ou aux CGV ;</li>
          <li>d&apos;impayé non régularisé ;</li>
          <li>d&apos;usage illicite ou frauduleux de l&apos;Application ;</li>
          <li>
            de stockage de données de santé au sens médical, en violation expresse des
            CGU.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          9. Récupération des données
        </h2>
        <p>
          En cas de résiliation, l&apos;Utilisateur peut exporter ses données depuis
          l&apos;Application avant le terme effectif de l&apos;abonnement. Passé ce
          délai, les données pourront être supprimées de manière irréversible dans un
          délai maximal de trente (30) jours, sous réserve des obligations légales de
          conservation.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          10. Garanties et limitation de responsabilité
        </h2>
        <p>
          L&apos;Éditeur s&apos;engage à mettre en œuvre les moyens raisonnables pour
          assurer le bon fonctionnement de l&apos;Application. Sa responsabilité est
          strictement limitée aux dommages directs et prévisibles résultant d&apos;un
          manquement avéré à ses obligations, dans la limite des sommes effectivement
          payées par l&apos;Utilisateur au cours des douze (12) derniers mois.
        </p>
        <p className="mt-2">
          L&apos;Éditeur ne saurait être tenu responsable des dommages indirects, perte de
          chance, perte de chiffre d&apos;affaires, perte de clientèle ou atteinte à
          l&apos;image.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          11. Force majeure
        </h2>
        <p>
          Aucune des parties ne sera tenue responsable d&apos;un manquement à ses
          obligations en cas de survenance d&apos;un cas de force majeure tel que défini
          par l&apos;article 1218 du Code civil (catastrophes naturelles, pannes
          généralisées d&apos;infrastructures, conflits, décisions des autorités, etc.).
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          12. Loi applicable et règlement des litiges
        </h2>
        <p>
          Les présentes CGV sont régies par le droit français. En cas de litige,
          l&apos;Utilisateur et l&apos;Éditeur s&apos;efforceront de trouver une solution
          amiable préalable. À défaut, tout litige relèvera de la compétence exclusive des
          tribunaux français, dans le ressort du siège de l&apos;Éditeur, sauf disposition
          impérative contraire.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-3">
          13. Contact
        </h2>
        <p>
          Pour toute question relative aux présentes CGV, l&apos;Utilisateur peut
          contacter l&apos;Éditeur à l&apos;adresse postale&nbsp;: INTIO — 99 domaine de
          Suartello.
        </p>
      </section>
    </LegalShell>
  );
}
