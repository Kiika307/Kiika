import type { ProtocolDetail } from "./types";
import { colors } from "./tokens";

/**
 * Fiches détaillées TCA & Poids (IDs 810-812).
 * Sources : "La Gastroplastie Hypnotique V2" + "Balance Tout — STOP Pulsion alimentaire"
 * (GS Formation). Adaptation rédactionnelle pour KIIKA.
 */

// =====================================================================
// ID 810 — Gastroplastie hypnotique 4 séances
// =====================================================================
const gastroplastie: ProtocolDetail = {
  protocolId: 810,
  efficacite: "Comparable",
  efficaciteSub: "Aux résultats de la chirurgie réelle, sans risque ni effets secondaires",
  description:
    "Pose d'un anneau gastrique virtuel par hypnose pour les personnes en surpoids (≥10 kg ou IMC ≥35). Recalibre le système hormonal et nerveux de la digestion sans chirurgie. L'inconscient utilise les images de l'opération pour reproduire physiologiquement les effets de l'anneau réel : satiété précoce, signaux clairs, modification durable du rapport à la nourriture.",
  indications: [
    "Surpoids de 10 kg ou plus / IMC ≥ 30",
    "Échec des régimes répétés (effet yo-yo)",
    "Refus ou contre-indication à la chirurgie bariatrique",
    "Personne avec bonne capacité de visualisation",
    "Engagement à modifier les habitudes alimentaires",
  ],
  contraindications: [
    "Anorexie ou trouble alimentaire restrictif",
    "Grossesse ou allaitement",
    "Trouble psychiatrique majeur non stabilisé",
    "IMC < 25 (autres méthodes plus appropriées)",
    "Refus ou méfiance envers la métaphore chirurgicale",
  ],
  programs: [
    {
      id: "principal",
      title: "Programme complet 4 séances",
      icon: "◕",
      duration: "4 × 90 min sur 4-6 semaines",
      color: colors.red,
      recommended: true,
      description:
        "Programme de référence GS Formation. Visualisation chirurgicale progressive sur 4 séances avec ancrage des 4 règles d'or alimentaires. Suivi à 3 mois recommandé.",
      seances: [
        {
          num: 1,
          title: "Préparation & installation initiale",
          steps: [
            { label: "Anamnèse complète", detail: "Histoire pondérale (régimes essayés, plus haut/plus bas poids, déclencheurs). Évaluation IMC. Motivation. Peurs (manque, échec, jugement). Écologie globale." },
            { label: "Bilan médical recommandé", detail: "S'assurer de l'absence de pathologies somatiques (thyroïde, diabète) ou psychiatriques (TCA restrictif). Validation par médecin traitant." },
            { label: "Pose des 4 règles d'or", detail: "Quand vous avez faim, mangez. Mangez ce que vous voulez. Mangez consciemment. Quand rassasié, cessez. Présentation détaillée et engagement du client." },
            { label: "Clonage / valeur personnelle", detail: "Travail PNL : entrer en contact avec sa valeur personnelle. Le client se voit déjà au poids souhaité, ressent les bénéfices, ancre cet état." },
            { label: "Préparation à l'installation de l'anneau", detail: "Visualisation préparatoire : la salle d'opération, l'équipe, les instruments. Mise en confiance. Acceptation par l'inconscient." },
            { label: "Script séance initiale", detail: "Induction profonde + visualisation de l'opération préparatoire (anesthésie, désinfection, marquage). Pas encore de pose effective." },
            { label: "Suggestions post-hypnotiques", detail: "« Votre inconscient va commencer à recalibrer dès aujourd'hui les signaux de faim et de satiété. »" },
          ],
        },
        {
          num: 2,
          title: "Visualisation de la satiété & renforcement",
          steps: [
            { label: "Bilan inter-séances", detail: "Premier ressenti des 4 règles. Modifications éventuelles déjà perçues (lenteur de mastication, écoute du corps)." },
            { label: "Induction profonde", detail: "Approfondissement plus rapide. Le client connaît le chemin. Catalepsie cataloguée." },
            { label: "Visualisation de la satiété physique", detail: "Le client visualise précisément la sensation de satiété : poche gastrique pleine, signal nerveux, hormone GLP-1, message au cerveau. Détail physiologique." },
            { label: "Recalibrage des signaux", detail: "L'inconscient reprogramme les seuils de faim et de satiété. Les nouvelles consignes sont enregistrées au niveau cellulaire et hormonal." },
            { label: "Script de renforcement", detail: "« À chaque repas désormais, votre estomac vous enverra un signal clair quand il sera plein. Vous l'entendrez et vous arrêterez. »" },
            { label: "Suggestions post-hypnotiques", detail: "« Plus vous mâchez lentement, plus le signal de satiété arrive vite. La nourriture devient meilleure car vous lui prêtez attention. »" },
          ],
        },
        {
          num: 3,
          title: "Contraction de l'estomac",
          steps: [
            { label: "Bilan des progrès", detail: "Pesée optionnelle. Quantité moyenne par repas. Sensations de satiété. Adhésion aux 4 règles." },
            { label: "Induction & approfondissement", detail: "Transe profonde. Le client est prêt pour le travail physiologique avancé." },
            { label: "Visualisation de la contraction de l'estomac", detail: "L'estomac est visualisé dans sa taille actuelle (« comme un melon »). Puis progressivement, il rétrécit jusqu'à la taille d'une « balle de tennis »." },
            { label: "Script contraction", detail: "« Vos parois gastriques se rapprochent doucement, votre estomac retrouve sa taille naturelle. Désormais, peu de nourriture suffira pour vous sentir plein. »" },
            { label: "Ancrage physiologique", detail: "Le client ressent (souvent réellement) une sensation dans la zone abdominale. La transe profonde permet ces réponses corporelles." },
            { label: "Pont vers la séance 4", detail: "« La prochaine fois, nous installerons définitivement l'anneau. Votre corps est prêt. »" },
          ],
        },
        {
          num: 4,
          title: "Chirurgie de l'anneau gastrique (la séance clé)",
          steps: [
            { label: "Préparation finale", detail: "Le client est mentalement et physiologiquement prêt après les 3 séances précédentes. Vérification de l'engagement final." },
            { label: "Induction très profonde", detail: "État proche de la transe somnambulique. Peut nécessiter induction longue (Dave Elman ou similaire)." },
            { label: "Visualisation chirurgicale complète", detail: "Salle d'opération. Équipe. Anesthésie générale. Le client se sent partir. Incision. Manipulation. Pose de l'anneau autour de la partie supérieure de l'estomac." },
            { label: "Script chirurgie", detail: "« Le chirurgien place l'anneau autour de votre estomac. Il l'ajuste. Il le sécurise. À partir de cet instant, votre estomac est définitivement réduit. »" },
            { label: "Réveil post-opératoire (toujours en transe)", detail: "Salle de réveil. Soulagement. Sentiment de réussite. L'anneau est en place. Visualisation du résultat." },
            { label: "Ancrage permanent", detail: "« Cet anneau est définitif. Il fait partie de vous. Personne ne peut l'enlever. Il vous accompagnera toute votre vie. »" },
            { label: "Sortie de transe progressive", detail: "Réveil lent. Sensation de plénitude. Engagement renouvelé envers les 4 règles." },
            { label: "Suivi recommandé", detail: "Pesée hebdomadaire. Journal alimentaire les 2 premières semaines. Contrôle d'après séance à 1 mois (peaufinage si besoin)." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Les 4 règles d'or alimentaires", type: "Cadre comportemental", icon: "📜", desc: "Quand faim → mangez. Pas d'interdit. Manger consciemment (mâcher 20×). Quand rassasié → stop." },
    { name: "Langage figuré chargé d'affects", type: "Linguistique hypnotique", icon: "🎭", desc: "Images vives (train qui arrive, opération chirurgicale) qui déclenchent des réponses corporelles réelles." },
    { name: "Visualisation de la contraction gastrique", type: "Visualisation", icon: "🍅", desc: "Estomac qui passe de la taille d'un melon à celle d'une balle de tennis. Réponse physiologique réelle." },
    { name: "Métaphore chirurgicale complète", type: "Visualisation", icon: "🏥", desc: "Salle d'opération, équipe, anesthésie, pose de l'anneau, réveil. L'inconscient enregistre comme une vraie opération." },
    { name: "Recalibrage hormonal", type: "Concept clé", icon: "⚖", desc: "L'hypnose ne réduit pas seulement l'espace gastrique imaginaire — elle reprogramme GLP-1 et signaux de satiété au niveau physiologique." },
    { name: "Contrôle d'après séance", type: "Suivi", icon: "📅", desc: "Séance optionnelle 1 mois après pour peaufiner l'anneau si nécessaire." },
  ],
  stats: [
    { val: "≥35", label: "IMC cible idéal", sub: "ou surpoids ≥ 10 kg", color: colors.red },
    { val: "4", label: "Séances", sub: "sur 4-6 semaines", color: colors.gold },
    { val: "20×", label: "Mastication par bouchée", sub: "règle d'or n°3", color: colors.purple },
    { val: "0%", label: "Risques chirurgicaux", sub: "vs vraie chirurgie bariatrique", color: colors.teal },
  ],
  croyances: [
    "J'ai déjà tout essayé, rien ne marche",
    "Je ne pourrai jamais maigrir vraiment",
    "C'est génétique chez moi",
    "Je dois me priver pour perdre du poids",
    "Si je commence un régime, je vais craquer",
    "La nourriture est ma seule consolation",
    "Je n'ai pas la volonté nécessaire",
    "Mon métabolisme est cassé",
    "L'hypnose ne marchera pas sur moi",
  ],
};

// =====================================================================
// ID 811 — Balance Tout (pulsions alimentaires)
// =====================================================================
const balanceTout: ProtocolDetail = {
  protocolId: 811,
  efficacite: "Élevée",
  efficaciteSub: "Soulagement immédiat des pulsions chez 70% des clients dès la 1re séance",
  description:
    "Script hypnotique métaphorique pour libérer les liens émotionnels et schémas comportementaux liés à la pulsion alimentaire (ennui, stress, émotions non gérées). Le client visualise un sac invisible rempli d'habitudes anciennes et le balance dans une rivière ou depuis une falaise. Réécriture du nouveau comportement.",
  indications: [
    "Grignotage émotionnel récurrent",
    "Compulsions alimentaires (chocolat, sucré, salé)",
    "Hyperphagie en réponse au stress, à l'ennui, à la solitude",
    "Crises de boulimie sans purge",
    "Échec des régimes restrictifs",
    "Rapport conflictuel à la nourriture",
  ],
  contraindications: [
    "Anorexie ou trouble alimentaire restrictif sévère",
    "Boulimie avec purge (suivi médical prioritaire)",
    "Trouble bipolaire en phase",
    "Dépression majeure non traitée",
  ],
  programs: [
    {
      id: "principal",
      title: "Séance unique — Nettoyage métaphorique",
      icon: "🌊",
      duration: "1 × 60 min",
      color: colors.red,
      recommended: true,
      description:
        "Pratique idéale en séance unique pour les pulsions modérées. Peut être répétée 1-2 fois en cas de pulsions ancrées. Combine bien avec un programme nutritionnel ou la gastroplastie hypnotique.",
      seances: [
        {
          num: 1,
          title: "Phase 1 — Anamnèse & cartographie des pulsions",
          steps: [
            { label: "Anamnèse pulsionnelle", detail: "Quels aliments ? Dans quelles circonstances (ennui, stress, fatigue, solitude, colère, frustration) ? À quels moments de la journée ? Avec quel ressenti avant/pendant/après ?" },
            { label: "Distinction faim physique / émotionnelle", detail: "Apprentissage : la vraie faim est progressive, située dans l'estomac, ouverte à tout aliment. La faim émotionnelle est soudaine, située dans la tête/poitrine, cible un aliment précis (souvent réconfort)." },
            { label: "Identification du besoin masqué", detail: "Derrière chaque pulsion, un besoin émotionnel inentendu. Sécurité, douceur, énergie, plaisir, réconfort, distraction ?" },
          ],
        },
        {
          num: 2,
          title: "Phase 2 — Induction & visualisation du sac",
          steps: [
            { label: "Induction lâcher-prise", detail: "« Installe-toi confortablement, commence à te laisser aller, doucement... à ton rythme. Ton souffle s'apaise comme une vague. » Approfondissement progressif." },
            { label: "Visualisation du sac invisible", detail: "« Imagine que tu tiens un sac... un sac invisible mais bien réel, que tu portes depuis longtemps sans t'en rendre compte. Un sac rempli d'habitudes, d'automatismes, de réactions. »" },
            { label: "Inventaire conscient du sac", detail: "« Toutes ces impulsions alimentaires qui t'ont accompagné(e). Tous ces moments où la nourriture était une réponse — peut-être à l'ennui, au stress, à une émotion que tu ne savais pas où ranger. »" },
            { label: "Reconnaissance des éléments hérités", detail: "« Certaines de ces choses ne t'appartiennent même pas. Elles viennent d'ailleurs — d'habitudes apprises, d'anciens réflexes, d'une époque où tu avais besoin de ça. Mais plus maintenant. »" },
            { label: "Choix conscient", detail: "« Prends un instant et décide. Qu'est-ce que tu es prêt(e) à relâcher ? »" },
          ],
        },
        {
          num: 3,
          title: "Phase 3 — Le grand nettoyage",
          steps: [
            { label: "Visualisation du lieu de libération", detail: "« Devant toi, il y a une rivière... ou peut-être une grande falaise... Un endroit où tu peux tout déposer, tout lâcher. »" },
            { label: "Acte de libération", detail: "« Prends ce sac et balance tout. Vois ces anciens schémas, ces pulsions, ces habitudes qui ne te servent plus disparaître, se dissoudre, comme si le vent les emportait, comme si l'eau les nettoyait. »" },
            { label: "Ressenti de la légèreté", detail: "« Ressens cette légèreté. Cette libération. Ce vide, mais un vide agréable, un espace libre en toi. »" },
            { label: "Affirmation identitaire", detail: "« À partir d'aujourd'hui, tu ne réagis plus comme avant. Tu es maître(sse) de tes choix, de tes sensations, de tes actions. »" },
          ],
        },
        {
          num: 4,
          title: "Phase 4 — Réécriture & ancrage",
          steps: [
            { label: "Espace libéré", detail: "« Maintenant que cet espace est libéré, il est temps d'y mettre autre chose. »" },
            { label: "Visualisation du nouveau chemin", detail: "« Imagine un nouveau chemin — plus fluide, plus naturel. Un chemin où ton corps et ton esprit communiquent en harmonie. »" },
            { label: "Ancrage du nouveau comportement", detail: "Le client se voit gérer une situation déclenchante (ennui, stress) avec une nouvelle réponse (respiration, marche, écoute du besoin réel)." },
            { label: "Pont sur le futur", detail: "Projection sur 3 jours, 1 semaine, 1 mois. Le client se voit en pleine conscience face à la nourriture, mangeant ce dont son corps a vraiment besoin." },
            { label: "Suggestions post-hypnotiques", detail: "« À chaque envie soudaine, tu prendras 3 respirations conscientes et tu te demanderas : ai-je vraiment faim ? Si oui, je mange. Si non, j'écoute le besoin réel. »" },
            { label: "Sortie de transe douce", detail: "Retour progressif. Sentiment de légèreté souvent immédiat. Quelques minutes de récupération en silence." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Le sac invisible", type: "Métaphore centrale", icon: "👜", desc: "Tout ce que le client porte sans le savoir : pulsions, automatismes, schémas hérités." },
    { name: "Distinction faim physique / émotionnelle", type: "Cadre cognitif", icon: "🤔", desc: "Faim physique = progressive, estomac, ouverte. Faim émotionnelle = soudaine, tête, cible précise." },
    { name: "Rivière ou falaise (lieu de libération)", type: "Visualisation", icon: "🌊", desc: "Lieu symbolique où le sac est balancé et les pulsions dissoutes." },
    { name: "3 respirations conscientes", type: "Suggestion post-hypnotique", icon: "🫁", desc: "À chaque envie soudaine — créent l'espace pour distinguer faim réelle et besoin émotionnel." },
    { name: "Question rituelle", type: "Ancrage cognitif", icon: "❓", desc: "« Ai-je vraiment faim ? » — devient un réflexe automatique après la séance." },
  ],
  stats: [
    { val: "70%", label: "Soulagement immédiat", sub: "dès la première séance", color: colors.red },
    { val: "60 min", label: "Séance unique", sub: "répétable si pulsions ancrées", color: colors.gold },
    { val: "1-3", label: "Respirations conscientes", sub: "déclenchées à chaque envie", color: colors.purple },
    { val: "0", label: "Aliment interdit", sub: "ce n'est pas un régime", color: colors.teal },
  ],
  croyances: [
    "Je suis incapable de me contrôler",
    "Le chocolat / sucre est plus fort que moi",
    "Quand je suis stressé(e), je dois manger",
    "Manger me console toujours",
    "Je ne sais pas ce que je ressens vraiment",
    "Mes émotions sont insupportables sans nourriture",
    "Je suis seul(e) avec mes pulsions",
  ],
};

// =====================================================================
// ID 812 — Anneau post-gastrique (après chirurgie réelle)
// =====================================================================
const anneauPostGastrique: ProtocolDetail = {
  protocolId: 812,
  efficacite: "Élevée",
  efficaciteSub: "Renforce les effets de la chirurgie et prévient les rechutes comportementales",
  description:
    "Protocole d'accompagnement hypnotique pour les personnes ayant subi une chirurgie d'anneau gastrique réelle (ou sleeve, bypass). Renforce les effets de la pose, recadre les comportements alimentaires résiduels, et accompagne la perte de poids dans la durée. Indispensable en complément du suivi nutritionnel post-opératoire.",
  indications: [
    "Post-pose d'anneau gastrique (1 mois à 2 ans après)",
    "Post-sleeve gastrectomie",
    "Post-bypass gastrique",
    "Plateau de perte de poids après chirurgie",
    "Comportements de contournement (boissons sucrées, grignotage)",
    "Anxiété face au changement corporel rapide",
  ],
  contraindications: [
    "Avant la chirurgie (utiliser plutôt protocole 810 préparatoire)",
    "Complications chirurgicales aiguës",
    "Trouble psychiatrique majeur non stabilisé",
    "Sans suivi nutritionnel parallèle",
  ],
  programs: [
    {
      id: "principal",
      title: "Séance(s) de renforcement post-chirurgical",
      icon: "🔄",
      duration: "1-2 × 75 min",
      color: colors.teal,
      recommended: true,
      description:
        "Une séance suffit dans les cas simples. Une seconde 1 mois après est utile pour ancrer les changements dans la durée. Toujours en complément d'un suivi médical et nutritionnel.",
      seances: [
        {
          num: 1,
          title: "Bilan & renforcement de la pose",
          steps: [
            { label: "Bilan post-opératoire", detail: "Date de la chirurgie. Poids initial / actuel. Effets ressentis. Difficultés (vomissements, reflux, blocages). Comportements résiduels (boissons sucrées, grignotage)." },
            { label: "Identification des résistances inconscientes", detail: "Bénéfices secondaires possibles à conserver le surpoids (protection, identité, lien familial). À traiter si présents." },
            { label: "Induction profonde", detail: "Approfondissement classique. Le client est généralement très réceptif après la chirurgie (motivation forte)." },
            { label: "Visualisation de l'anneau in situ", detail: "Le client visualise précisément l'anneau (ou la sleeve) en place. Connexion sensorielle directe avec l'organe modifié." },
            { label: "Renforcement de la fonction", detail: "« Cet anneau fait parfaitement son travail. À chaque bouchée, il vous envoie le signal de plénitude. Vous l'entendez clairement. »" },
            { label: "Recadrage des comportements de contournement", detail: "Suggestions précises contre boissons sucrées, grignotage haute densité calorique, mâchage rapide. Le corps les rejette désormais." },
            { label: "Ancrage des 4 règles d'or", detail: "Cf. protocole 810. Les règles deviennent automatiques. La conscience alimentaire devient seconde nature." },
          ],
        },
        {
          num: 2,
          title: "Consolidation 1 mois plus tard (optionnelle)",
          steps: [
            { label: "Bilan des 4 semaines", detail: "Progrès, difficultés résiduelles, écarts éventuels et leurs déclencheurs." },
            { label: "Travail sur les déclencheurs identifiés", detail: "Si des situations spécifiques posent problème (sorties, restaurants, stress), travail ciblé en transe." },
            { label: "Visualisation du futur poids cible", detail: "Le client se voit au poids souhaité, ressent les bénéfices (énergie, image, santé), ancre cet état." },
            { label: "Pont sur le futur (6 mois, 1 an)", detail: "Projection à long terme. Stabilité du poids. Nouveaux habitudes ancrées. Identité de personne mince consolidée." },
            { label: "Suggestions post-hypnotiques durables", detail: "« Vos nouvelles habitudes sont désormais inscrites en vous. Elles deviennent plus fortes chaque jour. »" },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Visualisation de l'anneau in situ", type: "Visualisation", icon: "🔵", desc: "Connexion sensorielle directe avec l'anneau réel — renforce ses effets physiologiques." },
    { name: "Recadrage des contournements", type: "Suggestions ciblées", icon: "🚫", desc: "Boissons sucrées, grignotage haute densité, mâchage rapide — comportements désormais rejetés par le corps." },
    { name: "Identification des bénéfices secondaires", type: "Travail psychologique", icon: "🔍", desc: "Pourquoi inconsciemment garder du poids ? Protection, identité, lien — à traiter si présents." },
    { name: "Suivi nutritionnel parallèle", type: "Pluridisciplinarité", icon: "🥗", desc: "Toujours en complément d'un suivi diététique et médical post-bariatrique." },
  ],
  stats: [
    { val: "1-2", label: "Séances suffisent", sub: "selon la complexité", color: colors.teal },
    { val: "75 min", label: "Durée par séance", sub: "induction approfondie", color: colors.gold },
    { val: "6 mois", label: "Délai avant consolidation", sub: "souvent suffisant", color: colors.purple },
    { val: "100%", label: "Pluridisciplinarité requise", sub: "médecin + nutritionniste obligatoires", color: colors.red },
  ],
  croyances: [
    "L'anneau ne fait pas son travail correctement",
    "Je vais reprendre tout mon poids",
    "Je ne supporte pas mon nouveau corps",
    "Si je triche un peu, ce n'est pas grave",
    "Je perds mon identité de personne forte",
    "Mes proches me regardent différemment",
  ],
};

// =====================================================================
// Export consolidé
// =====================================================================
export const tcaDetails: Record<number, ProtocolDetail> = {
  810: gastroplastie,
  811: balanceTout,
  812: anneauPostGastrique,
};
