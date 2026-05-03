import type { ProtocolDetail } from "./types";
import { colors } from "./tokens";

/**
 * Fiches détaillées des 4 protocoles d'arrêt du tabac (IDs 800-803).
 * Source : "Hypnose Ericksonienne — Protocole Tabacs" V2 (GS Formation, 2023).
 *
 * Adaptation rédactionnelle pour KIIKA. Crédit GS Formation.
 */

// =====================================================================
// ID 800 — Programme arrêt tabac 2 séances
// =====================================================================
const tabac2seances: ProtocolDetail = {
  protocolId: 800,
  efficacite: "36%",
  efficaciteSub: "à 12 mois (méta-analyse 633 études — Hypnose meilleur score)",
  description:
    "Programme intensif d'arrêt du tabac en 2 séances reposant sur le choix illusoire de méthode. Le client est responsabilisé dès le contact téléphonique — il choisit entre une intervention forte (Schéma de Dickens) et une plus douce (Changement d'histoire de vie). Cette implication conditionne la réussite : la première séance sera nécessairement suivie d'une seconde, différente.",
  indications: [
    "Forte motivation à l'arrêt explicitement exprimée",
    "Peu ou pas de tentatives antérieures avec rechute",
    "Dépendance physique modérée (Fagerström ≤ 6)",
    "Dépendance comportementale ou psychologique identifiée",
    "Disponibilité pour 2 séances rapprochées (1 à 2 semaines d'écart)",
  ],
  contraindications: [
    "Trouble bipolaire en phase maniaque ou dépression sévère non stabilisée",
    "Psychose ou état dissociatif aigu",
    "Refus explicite de l'hypnose",
    "Grossesse — le sevrage doit être encadré médicalement",
    "Trauma majeur non traité (l'arrêt brutal peut décompenser)",
  ],
  programs: [
    {
      id: "schema-dickens",
      title: "Méthode A — Schéma de Dickens",
      icon: "◑",
      duration: "2 × 90 min",
      color: colors.purple,
      recommended: false,
      description:
        "Méthode d'intervention forte. Trois projections temporelles (passé, présent, futur sans changement) puis visualisation de la vie transformée. Travail symbolique sur le lien de dépendance qui est matérialisé puis sectionné.",
      seances: [
        {
          num: 1,
          title: "Anamnèse + Schéma de Dickens",
          steps: [
            { label: "Entretien téléphonique préalable", detail: "Annonce du tarif global des 2 séances, choix illusoire entre méthode A (Dickens) et B (Changement d'histoire de vie). Implication du sujet sur sa responsabilité." },
            { label: "Anamnèse complète", detail: "Recueil sur l'histoire avec le tabac, motivations positives (vers...) et négatives (s'éloigner de...), peurs (manque, irritabilité, prise de poids), écologie (vie affective, familiale, pro)." },
            { label: "Test Fagerström + HAD", detail: "Évaluation de la dépendance nicotinique + anxiété/dépression. Identifie les composantes physique, comportementale, psychologique." },
            { label: "Lettres d'adieu (à apporter en S2)", detail: "Prescription : écrire 2 lettres — une avec ce que la cigarette a apporté, l'autre avec ce qu'elle a pris. Travail de prise de conscience entre les séances." },
            { label: "Schéma de Dickens en transe", detail: "Trois projections successives : passé (coût réel cumulé), présent (réalité actuelle), futur SANS changement (10-20 ans). Puis visualisation forte de la vie transformée. Construction d'une nouvelle identité." },
            { label: "Visualisation et sectionnement du lien", detail: "Le lien de dépendance est matérialisé (forme, couleur, texture). Choix de l'endroit de séparation. Action symbolique de coupure. Disparition radicale du lien (brûlé, jeté, enterré)." },
            { label: "Sortie de transe + ancrage de bien-être", detail: "Remplacement du vide par une nouvelle énergie ou source bienfaisante (couleur). Suggestions post-hypnotiques." },
          ],
        },
        {
          num: 2,
          title: "Consolidation + Pont futur",
          steps: [
            { label: "Décompte des cigarettes de la semaine", detail: "Vérification du compte fumé. Félicitations si en baisse. Décodage des situations difficiles." },
            { label: "Lecture des lettres d'adieu", detail: "Lecture par le client à voix haute. Reformulation et recadrage des bénéfices secondaires identifiés." },
            { label: "Niveaux logiques de Dilts", detail: "Réalignement Environnement → Comportement → Capacités → Valeurs → Identité. La nouvelle identité de non-fumeur s'enracine." },
            { label: "Pièce sans tabac (visualisation)", detail: "Immersion dans une pièce où l'air est rempli de molécules pures. Le client se voit lui-même non-fumeur (teint clair, haleine fraîche, énergie, vitalité, yeux étincelants)." },
            { label: "Pont sur le futur (6 mois)", detail: "Projection 6 mois plus tard. Quelqu'un offre une cigarette. Le client dit NON. Ressenti de fierté, de contrôle, de liberté." },
            { label: "Contrat moral d'arrêt", detail: "Engagement formel signé : date d'arrêt, programme d'activités alternatives, augmentation eau et fruits. Le client repart avec son contrat." },
            { label: "Questionnaire de suivi J+21 et M+3", detail: "Envoi automatique d'évaluations. Séance de soutien gratuite si rechute (pratique recommandée GS Formation)." },
          ],
        },
      ],
    },
    {
      id: "changement-histoire",
      title: "Méthode B — Changement d'histoire de vie",
      icon: "◐",
      duration: "2 × 90 min",
      color: colors.gold,
      recommended: true,
      description:
        "Méthode plus douce. Régression progressive jusqu'à l'expérience source qui a déclenché le besoin de fumer. Recadrage de l'événement parasitant et reconstruction d'un nouveau scénario de vie satisfaisant pour la personnalité présente.",
      seances: [
        {
          num: 1,
          title: "Anamnèse + Régression à l'origine",
          steps: [
            { label: "Entretien téléphonique préalable", detail: "Choix illusoire de la méthode. Le sujet s'engage sur 2 séances rapprochées. Annonce du tarif global." },
            { label: "Anamnèse + tests", detail: "Histoire avec le tabac, motivations, peurs, écologie. Test Fagerström + HAD. Repérage de l'événement déclencheur potentiel." },
            { label: "Mise à jour des expériences répétitives", detail: "En transe, mise à jour de 3-4 expériences récentes du comportement à changer. Ancrage spatial si position debout (un pas en arrière par expérience)." },
            { label: "Régression à l'expérience source", detail: "Maintien de l'ancre. Remontée jusqu'à l'expérience présumée d'origine du besoin de fumer (souvent enfance/adolescence)." },
            { label: "Recadrage en dissocié", detail: "Le client se voit de l'extérieur (spectateur d'un film). Tire les leçons. Recherche l'intention positive du comportement (besoin masqué par la cigarette)." },
            { label: "Réécriture du scénario", detail: "Construction d'une nouvelle réponse au besoin originel sans tabac. Le client se voit agir autrement. Réassociation pour ressentir." },
            { label: "Validation du nouveau scénario", detail: "Ajustements jusqu'à pleine satisfaction. Vérification que la transformation parcourt toute la ligne du temps en grandissant en taille et en âge." },
            { label: "Pont sur le futur + sortie", detail: "Projection dans les situations à venir avec le nouveau comportement. Suggestions post-hypnotiques. Lettres d'adieu prescrites pour la S2." },
          ],
        },
        {
          num: 2,
          title: "Consolidation + Identité",
          steps: [
            { label: "Décompte + lecture des lettres", detail: "Vérification de la baisse de consommation. Lecture des 2 lettres d'adieu. Recadrage des bénéfices secondaires." },
            { label: "Travail identitaire", detail: "« Vous êtes ex-fumeur. Vous êtes fier d'être ex-fumeur. » Le « vieux vous » dépendant vs le « nouveau vous » en contrôle, calme, plus heureux." },
            { label: "Désactivation du geste automatique", detail: "« Si dans le futur votre main voulait prendre une cigarette, votre esprit qui sait ce que veut dire vous respecter rendra votre bras lourd, très lourd, aussi lourd que du plomb. »" },
            { label: "Programme post-séance", detail: "Boire beaucoup d'eau, augmenter fruits et légumes, réduire café et alcool, remplacer cendriers par verres d'eau, retirer 5 cigarettes par paquet." },
            { label: "Contrat moral signé", detail: "Date d'arrêt formalisée. 10 engagements concrets (cf. annexe Contrat d'arrêt du tabac)." },
            { label: "Suivi automatique", detail: "Questionnaire J+21 et M+3. Séance de soutien si rechute." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Choix illusoire de méthode", type: "Engagement", icon: "🎭", desc: "Schéma de Dickens vs Changement d'histoire de vie. Responsabilise le client dès le téléphone." },
    { name: "Test de Fagerström", type: "Questionnaire", icon: "📋", desc: "6 questions pour évaluer la dépendance nicotinique. Score 0-10. Oriente la profondeur du travail." },
    { name: "Test HAD (Anxiété-Dépression)", type: "Questionnaire", icon: "📊", desc: "Hospital Anxiety and Depression Scale. Détecte les comorbidités qui peuvent compliquer l'arrêt." },
    { name: "Lettres d'adieu à la cigarette", type: "Prescription", icon: "✉️", desc: "Une lettre sur ce que la cigarette a apporté, une autre sur ce qu'elle a pris. Travail de prise de conscience entre les séances." },
    { name: "Contrat moral d'arrêt", type: "Document", icon: "✍️", desc: "10 engagements concrets : changer de marque, remplacer cendriers par verres d'eau, augmenter eau et fruits, etc. Signé client + praticien." },
    { name: "Questionnaire de suivi J+21 et M+3", type: "Formulaire", icon: "📅", desc: "Évaluation à 3 semaines puis 3 mois. Détecte les signes de rechute et déclenche éventuelle séance de soutien." },
  ],
  stats: [
    { val: "36%", label: "Taux de succès à 12 mois", sub: "vs 7% sans accompagnement", color: colors.purple },
    { val: "21j", label: "Sevrage physiologique", sub: "période critique à accompagner", color: colors.gold },
    { val: "2", label: "Séances", sub: "espacées de 1-2 semaines", color: colors.teal },
    { val: "10", label: "Engagements du contrat", sub: "concrets et actionnables", color: colors.red },
  ],
  croyances: [
    "Je n'ai pas assez de volonté pour arrêter",
    "Le stress est inévitable dans ma vie",
    "Je suis fait·e comme ça, c'est ma personnalité",
    "Si j'arrête, je vais perdre quelque chose",
    "Les autres n'ont pas mes problèmes",
    "Je me connais, j'ai déjà tout essayé",
    "Le changement durable n'existe pas",
    "Mon passé détermine mon futur",
    "La cigarette m'aide à me détendre",
    "J'arrêterai quand j'aurai moins de stress",
    "Une seule cigarette ne peut pas me faire de mal",
    "Le sevrage va me faire grossir",
  ],
};

// =====================================================================
// ID 801 — Programme arrêt tabac 4 séances (recommandé)
// =====================================================================
const tabac4seances: ProtocolDetail = {
  protocolId: 801,
  efficacite: "36%+",
  efficaciteSub: "à 12 mois — meilleur taux que toute monothérapie médicamenteuse",
  description:
    "Programme complet recommandé d'arrêt du tabac en 4 séances. Approche progressive et respectueuse du rythme du client : diagnostic, intention positive, ligne du temps, schéma de Dickens, pont sur le futur. Inclut prescriptions paradoxales (changer de marque chaque jour, lettres d'adieu) et contrat moral final.",
  indications: [
    "Profil avec plusieurs tentatives antérieures et rechutes",
    "Dépendance forte (Fagerström ≥ 7) ou multi-composantes (physique + comportementale + psychologique)",
    "Comorbidité anxieuse ou dépressive modérée (HAD à monitorer)",
    "Désir d'un accompagnement progressif et structuré",
    "Disponibilité pour 4 rendez-vous sur 6-8 semaines",
  ],
  contraindications: [
    "Trouble bipolaire en phase maniaque ou dépression sévère",
    "Psychose, état dissociatif aigu",
    "Refus explicite de l'hypnose",
    "Grossesse (sevrage encadré médicalement)",
    "Trauma majeur non traité",
  ],
  programs: [
    {
      id: "principal",
      title: "Programme complet 4 séances",
      icon: "◕",
      duration: "4 × 60-90 min sur 6-8 semaines",
      color: colors.gold,
      recommended: true,
      description:
        "Programme de référence GS Formation. Structure éprouvée avec prescriptions intersé séances qui maintiennent l'engagement et préparent le terrain en profondeur.",
      seances: [
        {
          num: 1,
          title: "Diagnostic & Première induction (1h30)",
          steps: [
            { label: "Anamnèse complète", detail: "Histoire avec le tabac (début, circonstances, tentatives, raisons des rechutes), motivations positives/négatives, peurs (manque, irritabilité, poids), écologie de vie." },
            { label: "Tests Fagerström + HAD", detail: "Évaluation des 3 dépendances (physique, comportementale, psychologique). Repérage des comorbidités anxieuses/dépressives." },
            { label: "Pose du cadre + induction", detail: "Engagement à la libération. « Ces odeurs dégoûtantes et ce goût horrible ne feront plus partie de vous. » Catalepsie. Approfondissement profond." },
            { label: "Introspection du fumeur", detail: "Énumération des raisons qui amènent ici (cancers, vieillissement, dents jaunes, odeur, dépendance). Recadrage : « Toutes les raisons sont bonnes pour arrêter. »" },
            { label: "Prise de conscience", detail: "Démontage de l'illusion : la cigarette ne détend pas, ne rend pas sociable, ne rend pas confiant. C'est une auto-tromperie. Honte et culpabilité reconnues PUIS libérées." },
            { label: "Prise de décision en silence", detail: "2 minutes de silence pendant lesquelles le client se visualise dans toutes ses anciennes situations SANS cigarette. Reprogrammation inconsciente." },
            { label: "Pont vers le futur + santé", detail: "Suggestions sur les bénéfices : tension/pouls normaux dès aujourd'hui, monoxyde dissipé en 2 jours, respiration plus facile en 3 jours, peau plus claire, papilles aiguisées." },
            { label: "Suggestions paradoxales", detail: "« Si jamais vous mettez une cigarette dans votre bouche, vous toussez instantanément, brûlure de la gorge, envie de vomir, perte de temps et d'argent. »" },
            { label: "Première prescription", detail: "Changer de marque tous les jours jusqu'à la S2. Adhère au programme." },
            { label: "Deuxième prescription", detail: "Écrire 2 lettres d'adieu (positif / négatif de la cigarette). À apporter en S2." },
          ],
        },
        {
          num: 2,
          title: "Pièce sans tabac & travail identitaire",
          steps: [
            { label: "Compte de cigarettes S1→S2", detail: "Contrôle du décompte. Félicitations si baisse. Recadrage des situations difficiles." },
            { label: "Lecture des lettres d'adieu", detail: "Lecture à voix haute. Recadrage des bénéfices secondaires identifiés. Renforcement de la décision." },
            { label: "Induction de détente plus courte", detail: "Approfondissement rapide. Le client connaît déjà le chemin." },
            { label: "Pièce sans tabac (visualisation)", detail: "Pièce avec lumières, couleurs, air rempli de molécules d'énergie pure et propre. Le client se voit non-fumeur : teint clair, haleine fraîche, énergie, yeux étincelants, sens aiguisés." },
            { label: "Recadrage « ce n'est pas trop dur »", detail: "« La seule chose qui rend l'arrêt trop dur, c'est de se le dire irrationnellement. Vous avez fait des choses bien plus difficiles auparavant. »" },
            { label: "Atmosphère des non-fumeurs", detail: "Pureté ressentie. Dégoût croissant pour l'odeur du tabac froid sur les vêtements et la peau des fumeurs. Nausée à l'idée d'inhaler à nouveau." },
            { label: "Travail identitaire", detail: "« Vieux vous » dépendant vs « nouveau vous » en contrôle, plus heureux, plus calme. « Vous êtes ex-fumeur, vous êtes fier d'être ex-fumeur. »" },
            { label: "Pont futur 6 mois", detail: "Projection : quelqu'un offre une cigarette, le client dit NON immédiatement. Sentiment de contrôle, de fierté, de bien-être." },
            { label: "Programme post-séance", detail: "Boire beaucoup d'eau pour chasser la nicotine. Thé/tisane après les repas. Fruits et légumes. Réduction café/alcool." },
          ],
        },
        {
          num: 3,
          title: "Renforcement de la décision (induction longue)",
          steps: [
            { label: "Bilan + ancrage des progrès", detail: "Si arrêt effectif : célébration et félicitation. Si rechute partielle : recadrage non-jugeant et identification des déclencheurs." },
            { label: "Induction longue (relaxation profonde)", detail: "Détente cellulaire complète : visage, cou, épaules, bras, dos, jambes. Respiration abdominale. Apesanteur. État de transe profond pour ancrage durable." },
            { label: "Mise en veille du système nerveux", detail: "Régénération neurologique. Calme du mental. Réparation cellulaire pendant que le client est en transe." },
            { label: "Niveaux logiques de Dilts", detail: "Réalignement Environnement → Comportement → Capacités → Valeurs → Identité. Le non-fumeur est ancré à tous les niveaux." },
            { label: "Ligne du temps de Tad James", detail: "Réorganisation des expériences passées avec ressources adultes. Toutes les versions passées du client deviennent non-fumeurs." },
            { label: "Pont futur 1 an + 5 ans", detail: "Projections successives. Le client se voit dans 1 an puis 5 ans, en bonne santé, fier, libre. Ancrage multimodal (visuel, auditif, kinesthésique)." },
            { label: "Suggestions post-hypnotiques renforcées", detail: "« Toutes ces suggestions sont fermement implantées dans votre subconscient et deviendront de plus en plus fortes jour après jour. »" },
          ],
        },
        {
          num: 4,
          title: "Schéma de Dickens & Contrat moral",
          steps: [
            { label: "Évaluation finale", detail: "Bilan complet. Test HAD répété si pertinent. Identification des résistances résiduelles." },
            { label: "Schéma de Dickens (3 projections)", detail: "Passé (coût réel cumulé en argent, santé, relations), Présent (état actuel post-arrêt), Futur SANS l'arrêt (ce qui se serait passé)." },
            { label: "Visualisation de la vie transformée", detail: "Construction détaillée de la nouvelle vie. Identité de non-fumeur consolidée. Bénéfices visibles dans tous les domaines." },
            { label: "Désactivation du geste résiduel", detail: "« Si votre main voulait prendre une cigarette, votre esprit rendra votre bras lourd, aussi lourd que du plomb. »" },
            { label: "Contrat moral signé", detail: "Date d'arrêt officielle. 10 engagements concrets. Signature client + praticien. Le client repart avec son exemplaire." },
            { label: "Travail ordalique si résistance", detail: "Si rechute : prescription paradoxale du symptôme ritualisée (cf. protocole 803)." },
            { label: "Questionnaire de suivi J+21 et M+3", detail: "Envoi automatique. Séance de soutien gratuite proposée en cas de rechute (engagement éthique GS Formation)." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Test de Fagerström", type: "Questionnaire", icon: "📋", desc: "Évaluation de la dépendance nicotinique en 6 questions. Oriente la profondeur du travail." },
    { name: "Test HAD", type: "Questionnaire", icon: "📊", desc: "Hospital Anxiety and Depression Scale. Détecte les comorbidités anxieuses/dépressives." },
    { name: "Échelle de motivation", type: "Questionnaire", icon: "🎯", desc: "Distingue motivation vers (santé, argent, image) et motivation loin de (peur, douleur, jugement)." },
    { name: "Lettres d'adieu à la cigarette", type: "Prescription", icon: "✉️", desc: "Une lettre sur ce que la cigarette a apporté, une autre sur ce qu'elle a pris. Prise de conscience." },
    { name: "Prescription du changement de marque", type: "Prescription paradoxale", icon: "🚬", desc: "Changer de marque tous les jours jusqu'à S2. Maintient l'engagement et brise les automatismes." },
    { name: "Niveaux logiques de Dilts", type: "PNL", icon: "🪜", desc: "Environnement → Comportement → Capacités → Valeurs → Identité. Réalignement complet." },
    { name: "Ligne du temps de Tad James", type: "PNL", icon: "📍", desc: "Réorganisation des expériences passées avec ressources adultes. Toutes les versions passées deviennent non-fumeurs." },
    { name: "Schéma de Dickens", type: "Visualisation", icon: "🎬", desc: "3 projections temporelles : passé (coût), présent (réalité), futur sans changement. Puis vie transformée." },
    { name: "Contrat moral d'arrêt", type: "Document", icon: "✍️", desc: "10 engagements concrets : changer de marque, remplacer cendriers, augmenter eau et fruits, etc." },
    { name: "Questionnaire de suivi J+21 et M+3", type: "Formulaire", icon: "📅", desc: "Détection des signes de rechute. Séance de soutien si nécessaire." },
  ],
  stats: [
    { val: "36%", label: "Succès à 12 mois", sub: "vs 7% sans accompagnement", color: colors.purple },
    { val: "12", label: "Croyances limitantes ciblées", sub: "recadrage systématique", color: colors.gold },
    { val: "21j", label: "Sevrage physiologique", sub: "période critique", color: colors.teal },
    { val: "4", label: "Séances étalées", sub: "sur 6-8 semaines", color: colors.red },
  ],
  croyances: [
    "Je n'ai pas assez de volonté pour changer",
    "Le stress est inévitable dans ma vie",
    "Je suis fait·e comme ça, c'est ma personnalité",
    "Si j'arrête, je vais perdre quelque chose",
    "Les autres n'ont pas mes problèmes",
    "Je me connais, j'ai déjà tout essayé",
    "Le changement durable n'existe pas",
    "Mon passé détermine mon futur",
    "La cigarette m'aide à me détendre / réfléchir / sociabiliser",
    "J'arrêterai quand j'aurai moins de stress",
    "Une seule cigarette ne peut pas me faire de mal",
    "Le sevrage va me faire grossir",
  ],
};

// =====================================================================
// ID 802 — Programme groupe (1 séance collective)
// =====================================================================
const tabacGroupe: ProtocolDetail = {
  protocolId: 802,
  efficacite: "Variable",
  efficaciteSub: "Effet de groupe puissant — taux moyen 20-25% à 12 mois",
  description:
    "Séance collective unique d'arrêt du tabac (4 à 12 participants). Métaphore du voyage de l'île des fumeurs vers l'île des non-fumeurs. Travail symbolique d'allégement du poids, désactivation du geste, sommeil réparateur, futur sans tabac. Idéal pour entreprises et collectivités.",
  indications: [
    "Demande collective (entreprise, collectivité, association)",
    "Participants tous volontaires (pas d'imposition par l'employeur)",
    "Niveau homogène de motivation",
    "Pas de comorbidité psychiatrique connue dans le groupe",
    "Espace adapté (calme, températures stables, sièges confortables)",
  ],
  contraindications: [
    "Participation imposée plutôt que choisie",
    "Personne avec trouble psychiatrique majeur dans le groupe",
    "Groupe trop hétérogène en motivation ou dépendance",
    "Personne demandant un suivi individuel approfondi",
    "Plus de 12 participants (perte d'efficacité)",
  ],
  programs: [
    {
      id: "groupe",
      title: "Séance collective unique",
      icon: "👥",
      duration: "1 × 120-180 min",
      color: colors.teal,
      recommended: true,
      description:
        "Format atelier. Bénéficie de l'effet de groupe et de l'engagement social public. Suivi individuel optionnel proposé en fin de séance pour les participants qui en font la demande.",
      seances: [
        {
          num: 1,
          title: "Phase 1 — Accueil & Engagement (45 min)",
          steps: [
            { label: "Accueil et tour de table", detail: "Chacun se présente, expose sa motivation et le nombre de cigarettes/jour. Engagement public devant le groupe." },
            { label: "Psycho-éducation collective", detail: "Composition d'une cigarette (4000 substances, 40 cancérigènes, cadmium 70 ans). Mécanique de la dépendance. Procédés industriels secrets." },
            { label: "Test Fagerström individuel", detail: "Chacun complète son test. Permet d'identifier les profils plus difficiles." },
            { label: "Lettres d'adieu collectives", detail: "Temps d'écriture individuel des deux lettres. Lectures publiques optionnelles (renforce l'engagement social)." },
            { label: "Visualisation des deux îles", detail: "Préparation à la métaphore du voyage : île des fumeurs (lieu actuel) vs île des non-fumeurs (destination)." },
          ],
        },
        {
          num: 2,
          title: "Phase 2 — Voyage hypnotique entre les deux îles (60 min)",
          steps: [
            { label: "Induction collective", detail: "Induction de groupe synchronisée. Voix lente et profonde. Cohérence cardiaque collective. Approfondissement progressif." },
            { label: "Désactivation du geste", detail: "« Si dans le futur votre main indépendante de votre esprit voulait prendre une cigarette, votre esprit rendra votre bras lourd, très lourd, aussi lourd que du plomb. »" },
            { label: "Le poids s'en va", detail: "« Avant de partir vers l'île des non-fumeurs, je vous demande de laisser sur l'île des fumeurs tout le poids inutile aujourd'hui pour vous, pour votre bien-être et celui de vos proches. »" },
            { label: "Voyage symbolique", detail: "Plus on s'éloigne de l'île des fumeurs, plus on se sent léger. Sensation de liberté qui grandit. Vitalité qui revient." },
            { label: "Sommeil réparateur", detail: "« Comment votre corps vous remerciera de ce cadeau d'air pur, d'eau pure, d'aliments sains, en vous donnant un sommeil réparateur et profond de non-fumeur. »" },
            { label: "Futur sans tabac (cinéma intérieur)", detail: "Défilement de situations futures sans tabac : repas au restaurant, soirée entre amis, pause-café. Le client vit chaque scène comme non-fumeur." },
            { label: "Effets positifs ressentis", detail: "Air pur dans les poumons. Oxygène qui revitalise chaque cellule. Cage thoracique puissante. Vitalité restaurée." },
            { label: "Nouveau départ", detail: "« Vous commencez à avoir le sentiment de démarrer une nouvelle vie. C'est bon d'être totalement vivant, conscient, capable de penser, sentir, savoir, comprendre. »" },
            { label: "Victoire & félicitations", detail: "« Vous êtes en train de remporter une grande victoire sur vous-même. Vous êtes non-fumeur. » Sortie progressive." },
          ],
        },
        {
          num: 3,
          title: "Phase 3 — Ancrage & engagement (45 min)",
          steps: [
            { label: "Sortie progressive de transe", detail: "Réveil collectif synchronisé. Quelques minutes de silence pour intégration." },
            { label: "Phrase d'ancrage personnelle", detail: "« Me voici libre depuis le [date]. » Chacun écrit sa phrase et sa date. À répéter dans les moments difficiles." },
            { label: "Contrat moral collectif + individuel", detail: "Lecture collective des 10 engagements. Signature individuelle. Photo de groupe avec contrats (si tous d'accord)." },
            { label: "Création d'un groupe de soutien", detail: "Groupe WhatsApp/messagerie privée du collectif. Soutien mutuel les 21 premiers jours puis sur 3 mois." },
            { label: "Suivi optionnel individuel", detail: "Proposition de séance individuelle pour les participants qui ressentent un besoin d'approfondissement (rechute, résistance forte)." },
            { label: "Questionnaire J+21 et M+3", detail: "Envoi collectif. Permet de mesurer le taux de réussite du groupe et d'organiser éventuellement une session de rappel." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Métaphore du voyage entre 2 îles", type: "Métaphore centrale", icon: "🏝", desc: "Île des fumeurs (départ) → traversée → île des non-fumeurs (arrivée). Sensation de légèreté qui grandit." },
    { name: "Engagement public", type: "Effet de groupe", icon: "🤝", desc: "Présentation et lecture des lettres devant le groupe. Le contrat social renforce l'engagement individuel." },
    { name: "Cohérence cardiaque collective", type: "Préparation", icon: "💗", desc: "Synchronisation respiratoire du groupe avant l'induction. Crée un état de calme partagé." },
    { name: "Phrase d'ancrage personnelle", type: "Mantra", icon: "💬", desc: "« Me voici libre depuis le [date]. » Activable à volonté dans les moments difficiles." },
    { name: "Groupe de soutien post-séance", type: "Suivi collectif", icon: "👥", desc: "Messagerie privée du collectif pour les 21 premiers jours puis 3 mois. Soutien pair-à-pair." },
    { name: "Suivi individuel optionnel", type: "Personnalisation", icon: "🎯", desc: "Séance individuelle gratuite ou réduite proposée à ceux qui en ressentent le besoin." },
  ],
  stats: [
    { val: "20-25%", label: "Succès à 12 mois", sub: "variable selon le groupe", color: colors.teal },
    { val: "4-12", label: "Participants idéal", sub: "au-delà : perte d'efficacité", color: colors.gold },
    { val: "120-180", label: "Minutes par séance", sub: "format atelier complet", color: colors.purple },
    { val: "21j", label: "Soutien collectif intensif", sub: "puis 3 mois en suivi", color: colors.red },
  ],
  croyances: [
    "Je n'oserai jamais devant les autres",
    "Mon cas est trop particulier pour un groupe",
    "Si les autres rechutent, je rechuterai aussi",
    "Je n'ai pas le droit d'arrêter avant les autres",
    "L'effet de groupe est superficiel",
  ],
};

// =====================================================================
// ID 803 — Travail ordalique & contrat moral
// =====================================================================
const tabacOrdalique: ProtocolDetail = {
  protocolId: 803,
  efficacite: "Élevée sur les résistants",
  efficaciteSub: "Méthode de dernier recours en cas de rechute ou de blocage fort",
  description:
    "Protocole de suivi paradoxal en cas de résistance ou de rechute. Inspiré du paradoxe thérapeutique de Frankl : prescription du symptôme ritualisée pour court-circuiter la résistance inconsciente. Inclut le contrat d'arrêt formalisé en 10 engagements concrets et le questionnaire HAD pour évaluer anxiété/dépression.",
  indications: [
    "Rechute après un programme 2 ou 4 séances",
    "Résistance forte au protocole standard",
    "Composante anxieuse-dépressive importante (HAD élevé)",
    "Bénéfices secondaires majeurs identifiés",
    "Personne en demande mais en sabotage actif",
  ],
  contraindications: [
    "Premier contact (toujours commencer par le protocole standard)",
    "Trouble bipolaire en phase maniaque",
    "Tendances suicidaires ou auto-destructrices",
    "Refus du caractère paradoxal de l'intervention",
  ],
  programs: [
    {
      id: "ordalique",
      title: "Travail ordalique en séance unique",
      icon: "⚖",
      duration: "1 × 60 min",
      color: colors.red,
      recommended: true,
      description:
        "Méthode avancée. Le praticien doit maîtriser le paradoxe thérapeutique sans tomber dans la manipulation. Cadre éthique strict — toujours expliquer la démarche au client.",
      seances: [
        {
          num: 1,
          title: "Anamnèse de la résistance & cadre paradoxal",
          steps: [
            { label: "Décodage de la rechute", detail: "Histoire détaillée de la rechute : circonstances, déclencheur, ressenti pendant et après. Identification des bénéfices secondaires." },
            { label: "Test HAD répété", detail: "Évaluation anxiété/dépression. Si HAD élevé : la cigarette compense un état anxio-dépressif sous-jacent qui doit être traité en priorité." },
            { label: "Présentation transparente du paradoxe", detail: "« Je vais vous proposer quelque chose qui peut sembler contre-intuitif. Vous allez fumer, mais selon des règles précises qui vont vous rendre la cigarette désagréable. »" },
            { label: "Validation de l'engagement", detail: "Le client accepte explicitement le cadre paradoxal. Sans accord, le protocole ne fonctionne pas." },
            { label: "Identification des cigarettes-clés", detail: "Quelles cigarettes sont les plus chargées de bénéfices secondaires (matin, après repas, stress, soirée) ? Ce sont elles qui seront ritualisées." },
          ],
        },
        {
          num: 2,
          title: "Prescription paradoxale ritualisée",
          steps: [
            { label: "Règles du rituel", detail: "Pour chaque cigarette-clé : se lever, sortir dehors, fumer SEUL, en silence, sans rien faire d'autre, en se concentrant uniquement sur le goût et la sensation, sans téléphone, sans café." },
            { label: "Augmentation imposée", detail: "Pendant 1 semaine : doubler le nombre de cigarettes-clés ritualisées. Le client DOIT fumer plus. Brise l'aspect plaisant en le rendant obligatoire et méthodique." },
            { label: "Journal de bord", detail: "Noter pour chaque cigarette ritualisée : circonstance, ressenti avant, ressenti pendant, ressenti après. La cigarette devient un objet d'observation, plus de plaisir." },
            { label: "Interdiction des cigarettes plaisirs", detail: "Les cigarettes fumées en groupe, à plusieurs, en buvant un café, en téléphonant, sont INTERDITES. Seules les ritualisées sont autorisées." },
            { label: "Effet attendu", detail: "Au bout de 5-7 jours, la cigarette devient ennuyeuse, voire désagréable. Le rituel exige plus d'effort que le plaisir n'en procure. Le client demande spontanément à arrêter." },
          ],
        },
        {
          num: 3,
          title: "Contrat moral d'arrêt (10 engagements)",
          steps: [
            { label: "1. Acheter une marque différente chaque matin", detail: "Brise l'identification à la marque fétiche. Rappelle à chaque achat que le rapport au tabac change." },
            { label: "2. Acheter uniquement le matin", detail: "Pas d'achat impulsif. La cigarette devient un objet planifié, pas un réflexe." },
            { label: "3. Remplacer les cendriers par des verres d'eau", detail: "À la maison ET au travail. L'eau remplace symboliquement et physiquement la cigarette." },
            { label: "4. Ne jamais offrir ni demander", detail: "Hors de question d'offrir ou de quémander. Brise les rituels sociaux liés au tabac." },
            { label: "5. Retirer 5 cigarettes par paquet acheté", detail: "Et les jeter immédiatement. Réduction physique automatique de 25%. Symbolique forte." },
            { label: "6. Verre d'eau et question rituelle", detail: "À chaque envie : prendre un verre d'eau ET se demander « cette cigarette est-elle utile ? ». Crée la conscience à chaque envie." },
            { label: "7. Exercice de détente quotidien", detail: "5-10 min de cohérence cardiaque ou de respiration consciente. Renforce l'engagement et apaise le stress sous-jacent." },
            { label: "8. Grand A sur le calendrier au jour J", detail: "Date d'arrêt définitif marquée visiblement. Pose la réussite. Permet de compter les jours de liberté." },
            { label: "9. Augmenter eau et fruits", detail: "Hydratation + minéraux + sucres lents naturels. Aide à chasser la nicotine et à stabiliser l'humeur." },
            { label: "10. Réduire alcool et café", detail: "Excitants associés au tabac. Évite les déclencheurs de rechute." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Paradoxe thérapeutique de Frankl", type: "Concept", icon: "⚖", desc: "Prescrire le symptôme pour court-circuiter la résistance inconsciente. Méthode avancée à manier avec éthique." },
    { name: "Prescription ritualisée", type: "Prescription", icon: "📜", desc: "Règles strictes pour chaque cigarette-clé : seul, dehors, en silence, sans rien d'autre. Tue le plaisir." },
    { name: "Augmentation imposée", type: "Paradoxe", icon: "📈", desc: "Doubler le nombre de cigarettes-clés pendant 1 semaine. Brise l'aspect plaisant en rendant obligatoire." },
    { name: "Journal de bord ritualisé", type: "Outil de conscience", icon: "📔", desc: "Notation systématique avant/pendant/après chaque cigarette ritualisée." },
    { name: "Test HAD", type: "Questionnaire", icon: "📊", desc: "Détecte la composante anxio-dépressive sous-jacente qui peut motiver le tabagisme." },
    { name: "Contrat moral en 10 engagements", type: "Document", icon: "✍️", desc: "Engagements concrets et actionnables. Signé par le client et le praticien." },
  ],
  stats: [
    { val: "5-7j", label: "Délai d'efficacité du paradoxe", sub: "la cigarette devient ennuyeuse", color: colors.red },
    { val: "10", label: "Engagements du contrat", sub: "concrets et mesurables", color: colors.gold },
    { val: "2x", label: "Cigarettes pendant la phase ritualisée", sub: "augmentation imposée", color: colors.purple },
    { val: "100%", label: "Transparence du cadre", sub: "le client doit accepter explicitement", color: colors.teal },
  ],
  croyances: [
    "Je n'arriverai jamais à arrêter complètement",
    "Si j'ai rechuté, c'est que c'est impossible pour moi",
    "Mon cas est désespéré",
    "Le manque est plus fort que ma volonté",
    "Je serai fumeur jusqu'à ma mort",
    "Le paradoxe ne marchera pas sur moi",
  ],
};

// =====================================================================
// Export consolidé
// =====================================================================
export const tabacDetails: Record<number, ProtocolDetail> = {
  800: tabac2seances,
  801: tabac4seances,
  802: tabacGroupe,
  803: tabacOrdalique,
};
