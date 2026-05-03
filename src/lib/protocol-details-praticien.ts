import type { ProtocolDetail } from "./types";
import { colors } from "./tokens";

/**
 * Fiches détaillées Praticien Hypnose Ericksonienne (IDs 900-926).
 * Source : GS Formation — Hypnose Ericksonienne Praticien V2.
 * Couverture exhaustive du module Praticien.
 */

const make = (
  id: number,
  efficacite: string,
  efficaciteSub: string,
  description: string,
  indications: string[],
  contraindications: string[],
  programTitle: string,
  duration: string,
  programColor: string,
  programDescription: string,
  seanceTitle: string,
  steps: { label: string; detail: string }[],
  outils: { name: string; type: string; icon: string; desc: string }[],
  stats: { val: string; label: string; sub: string; color: string }[],
  croyances: string[]
): ProtocolDetail => ({
  protocolId: id,
  efficacite,
  efficaciteSub,
  description,
  indications,
  contraindications,
  programs: [
    {
      id: "principal",
      title: programTitle,
      icon: "◑",
      duration,
      color: programColor,
      recommended: true,
      description: programDescription,
      seances: [{ num: 1, title: seanceTitle, steps }],
    },
  ],
  outils,
  stats,
  croyances,
});

const catalepsie = make(
  900, "Convicteur", "Bras rigide ou flottant sous suggestion",
  "Phénomène hypnotique classique : le bras du client devient cataleptique (rigide ou flottant) sous suggestion. Sert de convicteur de profondeur de transe et de tremplin pour approfondir l'état hypnotique.",
  ["Vérification de la profondeur de transe", "Renforcement de la conviction du client", "Préparation à un travail avancé"],
  ["Trouble articulaire de l'épaule", "Refus du client"],
  "Catalepsie du bras",
  "10-15 min (intégré)",
  colors.purple,
  "Suggestion + test + approfondissement.",
  "Étapes",
  [
    { label: "Préparation en transe", detail: "Le client est déjà en transe légère ou moyenne." },
    { label: "Soulever le bras", detail: "Le praticien soulève doucement le bras du client." },
    { label: "Suggestion de catalepsie", detail: "« Votre bras devient léger comme une plume — ou rigide comme une barre de fer. Choisissez. »" },
    { label: "Test", detail: "Le bras reste en place, sans effort conscient. Convicteur fort." },
    { label: "Approfondissement", detail: "« Plus votre bras reste, plus votre transe s'approfondit. »" },
    { label: "Ratification", detail: "« C'est parfait. Vous voyez la puissance de votre inconscient. »" },
    { label: "Retour", detail: "« À mon décompte, votre bras retrouve sa mobilité normale. »" },
  ],
  [
    { name: "Catalepsie test", type: "Convicteur", icon: "💪", desc: "Bras rigide ou flottant." },
    { name: "Approfondissement intégré", type: "Hypnose", icon: "⬇", desc: "Renforce la transe." },
  ],
  [
    { val: "10-15", label: "Minutes", sub: "intégré", color: colors.purple },
    { val: "Convicteur", label: "Effet", sub: "ancrage de la transe", color: colors.gold },
  ],
  ["Je fais semblant", "Je peux bouger si je veux"]
);

const levitationMain = make(
  901, "Idéomoteur", "La main se soulève seule",
  "Induction emblématique d'Erickson : la main du client se soulève seule, indépendamment de sa volonté. Approche permissive et fascinante. Idéale pour clients curieux et créatifs.",
  ["Client curieux et créatif", "Démonstration de la puissance de l'inconscient", "Préparation à un travail avancé"],
  ["Trouble musculaire de la main", "Manque de patience du client"],
  "Lévitation de la main — Induction Erickson",
  "15-25 min",
  colors.gold,
  "Concentration sur la main + suggestion idéomotrice + lévitation + approfondissement.",
  "Étapes",
  [
    { label: "Position des mains", detail: "Mains posées sur les cuisses, paumes vers le bas. Confort." },
    { label: "Concentration sur la main dominante", detail: "« Portez toute votre attention sur votre main droite. Sentez chaque doigt. »" },
    { label: "Suggestions de légèreté progressive", detail: "« Peut-être un doigt va-t-il bouger... un autre... la main devient légère, comme attachée à un ballon. »" },
    { label: "Premier mouvement idéomoteur", detail: "Un doigt frémit. « C'est bien, votre inconscient répond. »" },
    { label: "Lévitation progressive", detail: "« Votre main se soulève toute seule. À son rythme. »" },
    { label: "Ratification", detail: "« Voyez comme votre inconscient travaille pour vous. »" },
    { label: "Approfondissement", detail: "« Plus votre main monte, plus profondément vous entrez en transe. »" },
    { label: "Retour de la main", detail: "« Quand votre main touche votre visage / redescend, votre transe s'approfondit encore. »" },
  ],
  [
    { name: "Suggestion idéomotrice", type: "Technique", icon: "✋", desc: "Mouvement involontaire." },
    { name: "Patience du praticien", type: "Posture", icon: "⏳", desc: "Laisser le temps." },
  ],
  [
    { val: "15-25", label: "Minutes", sub: "induction Erickson", color: colors.gold },
    { val: "Fascination", label: "Effet", sub: "puissance de l'inconscient", color: colors.purple },
  ],
  ["Ma main ne bougera jamais seule", "C'est moi qui la bouge"]
);

const levitationBras = make(
  902, "Idéomoteur+", "Bras entier se soulève",
  "Variante de la lévitation : le bras entier se soulève. Permet d'atteindre une transe plus profonde par investissement moteur plus important. Convicteur très puissant.",
  ["Client résistant à la lévitation simple", "Recherche d'une transe profonde rapide", "Démonstration spectaculaire (formation)"],
  ["Trouble articulaire de l'épaule", "Fatigue physique"],
  "Lévitation du bras — Variante avancée",
  "15-25 min",
  colors.gold,
  "Concentration + suggestion bras entier + lévitation profonde.",
  "Étapes",
  [
    { label: "Position de départ", detail: "Bras pendant le long du corps ou posé sur la cuisse." },
    { label: "Concentration sur tout le bras", detail: "« Sentez votre bras dans son entier. Le poids, la chaleur. »" },
    { label: "Suggestion de légèreté massive", detail: "« Imaginez 10 ballons attachés à votre poignet, votre coude, votre épaule. »" },
    { label: "Premier mouvement", detail: "L'épaule se soulève d'abord, puis le coude, puis la main." },
    { label: "Lévitation complète", detail: "« Votre bras se soulève entièrement, sans effort. »" },
    { label: "Profondeur maximale", detail: "Quand le bras est haut : transe somnambulique souvent atteinte." },
    { label: "Retour lent", detail: "« Votre bras redescend doucement, et chaque centimètre approfondit la transe. »" },
  ],
  [
    { name: "Investissement moteur fort", type: "Technique", icon: "💪", desc: "Bras entier vs main seule." },
    { name: "Convicteur puissant", type: "Effet", icon: "⚡", desc: "Difficile à nier." },
  ],
  [
    { val: "Profonde", label: "Transe atteinte", sub: "souvent somnambulique", color: colors.gold },
    { val: "15-25", label: "Minutes", sub: "patience requise", color: colors.purple },
  ],
  ["C'est impossible", "Mon bras est trop lourd"]
);

const signaling = make(
  903, "Communication", "Dialogue oui/non avec l'inconscient",
  "Communication directe avec l'inconscient via signaux idéomoteurs (doigts, tête, main). Méthode indirecte (laisse l'inconscient choisir le signal) ou directe (le praticien attribue les signaux). Outil de dialogue thérapeutique en transe.",
  ["Préparation au recadrage 6 étapes", "Vérification d'accord d'une partie", "Travail systémique inconscient", "Erickson-Rossi"],
  ["Manque de transe suffisante", "Refus de l'idéomoteur"],
  "Signaling idéomoteur",
  "20-30 min (intégré)",
  colors.clientBlue,
  "Méthode indirecte ou directe selon le client.",
  "Étapes",
  [
    { label: "Mise en transe préalable", detail: "Le client est en transe moyenne à profonde." },
    { label: "Méthode INDIRECTE", detail: "« Demandez à votre inconscient de choisir un doigt qui signifiera OUI. Attendez qu'il bouge. »" },
    { label: "Calibration du signal OUI", detail: "Vérification : « Cherchez une chose vraie. Le doigt OUI bouge ? »" },
    { label: "Calibration du signal NON", detail: "Même processus pour un autre doigt = NON." },
    { label: "Méthode DIRECTE", detail: "Variante : « Index droit = OUI, index gauche = NON. » (plus rapide, moins respectueux)." },
    { label: "Test de discrimination", detail: "Questions vraies/fausses simples pour valider les signaux." },
    { label: "Utilisation thérapeutique", detail: "Dialogue avec une partie : « Acceptes-tu d'aider X ? »" },
  ],
  [
    { name: "Méthode indirecte", type: "Technique", icon: "🤲", desc: "L'inconscient choisit le doigt." },
    { name: "Méthode directe", type: "Technique", icon: "👆", desc: "Le praticien attribue." },
    { name: "Calibration OUI/NON", type: "Test", icon: "✓✗", desc: "Validation par questions de contrôle." },
  ],
  [
    { val: "Dialogue", label: "Avec l'inconscient", sub: "via doigts ou tête", color: colors.clientBlue },
    { val: "20-30", label: "Minutes", sub: "intégré", color: colors.gold },
  ],
  ["Je n'ai pas d'inconscient qui parle", "C'est moi qui décide quel doigt bouger"]
);

const amnesie = make(
  904, "Protection", "3 méthodes pour induire l'oubli post-séance",
  "Suggestion d'amnésie pour le contenu de la séance : 3 méthodes (suggestions verbales directes, mise entre parenthèses, redirection de l'attention). Permet à l'inconscient de travailler sans interférence consciente.",
  ["Travail délicat à protéger de l'analyse consciente", "Renforcement de l'effet thérapeutique", "Suggestions post-hypnotiques"],
  ["Demande explicite de mémoriser le contenu", "Travail pédagogique"],
  "Amnésie post-hypnotique — 3 méthodes",
  "5-10 min (en fin de séance)",
  colors.navy,
  "Choix de la méthode + application + sortie.",
  "Les 3 méthodes",
  [
    { label: "Méthode 1 — Suggestions verbales directes", detail: "« Quand vous reviendrez, vous oublierez le contenu de cette séance. Seul l'effet restera. »" },
    { label: "Méthode 2 — Mise entre parenthèses", detail: "Le travail thérapeutique est encadré par deux contenus distrayants. L'inconscient garde le travail, le conscient retient les bords." },
    { label: "Méthode 3 — Redirection de l'attention juste après la sortie", detail: "Dès le réveil, parler de météo, de logistique. L'analyse consciente n'a pas le temps de saisir le contenu." },
    { label: "Combinaison des 3 méthodes", detail: "Pour une amnésie maximale, combiner les 3 approches." },
    { label: "Vérification post-séance", detail: "« Que retenez-vous de la séance ? » — souvent un flou agréable." },
    { label: "Suggestion ouverte d'émergence", detail: "« Si certaines choses doivent revenir à votre conscience, elles le feront au bon moment. »" },
  ],
  [
    { name: "3 méthodes combinables", type: "Technique", icon: "🌫", desc: "Verbal + parenthèses + redirection." },
    { name: "Inconscient préservé", type: "Effet", icon: "🛡", desc: "Travail à l'abri de l'analyse." },
  ],
  [
    { val: "3", label: "Méthodes maîtrisées", sub: "à combiner", color: colors.navy },
    { val: "Travail+", label: "Renforcé", sub: "par non-interférence consciente", color: colors.gold },
  ],
  ["Je veux tout retenir", "L'oubli est une perte"]
);

const sansContenu = make(
  905, "Radicale", "Travail sans connaître le problème",
  "Approche ericksonienne radicale : induire la transe sans connaître le problème, laisser l'inconscient travailler en silence, sortir sans débrief. Le résultat émerge sans intervention consciente du praticien.",
  ["Client refusant de verbaliser", "Praticien expérimenté en confiance avec l'inconscient", "Trauma indicible", "Approche zen / non-interventionniste"],
  ["Praticien débutant (besoin de contenu)", "Client en attente d'un cadre directif"],
  "Travail sans contenu",
  "45-60 min",
  colors.purple,
  "Induction + silence + sortie.",
  "Étapes",
  [
    { label: "Pré-talk minimal", detail: "« Vous savez ce dont vous avez besoin. Votre inconscient aussi. Faisons-lui confiance. »" },
    { label: "Induction profonde", detail: "Induction Elman ou Erickson, jusqu'à somnambulisme." },
    { label: "Suggestion de travail libre", detail: "« Votre inconscient sait quoi faire. Il a tout l'espace nécessaire. »" },
    { label: "Silence prolongé", detail: "Le praticien reste présent mais silencieux. 30-45 min de transe libre." },
    { label: "Vérification ponctuelle", detail: "Tous les 10-15 min : « Tout va bien ? » Le client confirme par un signal idéomoteur." },
    { label: "Suggestion de clôture", detail: "« Votre inconscient finit ce qu'il a à faire... » Pause. « C'est complet. »" },
    { label: "Sortie sans débrief", detail: "Réveil. Pas de question sur le contenu. Le client repart avec ce qu'il a." },
  ],
  [
    { name: "Confiance radicale", type: "Posture", icon: "🤲", desc: "Foi totale en l'inconscient." },
    { name: "Silence du praticien", type: "Technique", icon: "🤫", desc: "Présence sans intervention." },
    { name: "Pas de débrief", type: "Approche", icon: "🚫", desc: "Le contenu reste inconscient." },
  ],
  [
    { val: "45-60", label: "Minutes", sub: "transe libre", color: colors.purple },
    { val: "0", label: "Mots échangés sur le contenu", sub: "approche radicale", color: colors.gold },
  ],
  ["Le praticien doit savoir mon problème pour aider", "Sans dialogue, rien ne peut changer"]
);

const postHypnotique = make(
  906, "Différée", "Suggestion qui s'active dans une situation future",
  "Insertion de suggestions post-hypnotiques par technique de l'emballage cadeau : la suggestion est encapsulée dans un récit, une métaphore, ou un geste rituel. Activation différée dans une situation future précise.",
  ["Programmation d'un changement comportemental", "Activation contextuelle (situation déclenchante)", "Renforcement post-séance"],
  ["Manque de précision sur la situation déclenchante"],
  "Suggestions post-hypnotiques — Emballage cadeau",
  "15-20 min (intégré)",
  colors.gold,
  "Précision de la situation + emballage + remise + ouverture.",
  "Étapes",
  [
    { label: "Précision de la situation déclenchante", detail: "« Quand exactement la suggestion doit-elle s'activer ? Quel signal ? »" },
    { label: "Choix de l'emballage", detail: "Métaphore, récit, geste, mot-clé. Ce qui fait sens pour le client." },
    { label: "Mise en transe profonde", detail: "Profondeur nécessaire pour que la suggestion s'ancre durablement." },
    { label: "Remise du cadeau", detail: "« Votre inconscient reçoit ce cadeau. Il l'ouvrira au moment juste, dans la situation précise. »" },
    { label: "Insertion de la suggestion", detail: "« Quand vous serez en X, votre inconscient saura quoi faire : Y. »" },
    { label: "Amnésie protectrice", detail: "« Vous oublierez consciemment. L'inconscient se souviendra. »" },
    { label: "Pont sur le futur", detail: "Visualisation de la situation déclenchante avec activation de la suggestion." },
  ],
  [
    { name: "Métaphore d'emballage", type: "Linguistique", icon: "🎁", desc: "Récit ou geste enveloppant." },
    { name: "Suggestion contextuelle", type: "Technique", icon: "🎯", desc: "Activation par déclencheur précis." },
    { name: "Amnésie protectrice", type: "Renforcement", icon: "🛡", desc: "Évite la sabotage conscient." },
  ],
  [
    { val: "Différé", label: "Activation", sub: "situation future déclenchante", color: colors.gold },
    { val: "15-20", label: "Minutes", sub: "intégré", color: colors.purple },
  ],
  ["Une suggestion va m'imposer un comportement", "Je perds mon libre arbitre"]
);

const yesSet = make(
  907, "Acquiescement", "Empilement de truismes acceptés",
  "Pattern Milton : empilement de truismes acceptés par le client (« vous êtes assis, vous m'écoutez, vous respirez... »). Crée un état d'acquiescement inconscient qui prépare à l'acceptation de la suggestion thérapeutique.",
  ["Préparation à toute suggestion clé", "Construction du rapport hypnotique", "Outil quotidien du praticien"],
  ["Aucune contre-indication"],
  "Yes set — Acceptation cumulée",
  "5-10 min (intégré à l'induction)",
  colors.teal,
  "Empilement de 5-10 truismes + suggestion clé.",
  "Étapes",
  [
    { label: "Choix de la suggestion clé", detail: "Quelle suggestion thérapeutique veut-on faire accepter ?" },
    { label: "Construction du yes set", detail: "5 à 10 affirmations indiscutables : « Vous êtes assis. Vous m'écoutez. Vous respirez. Vous sentez votre dos contre le dossier. »" },
    { label: "Cadence et rythme", detail: "Voix calme, rythme lent, espace entre les affirmations pour acquiescement intérieur." },
    { label: "Insertion progressive de quasi-truismes", detail: "« Vous commencez à vous détendre. » (déjà presque une suggestion)." },
    { label: "Suggestion clé", detail: "Insérée dans le flux : « Et vous pouvez vous laisser aller plus profondément en transe. »" },
    { label: "Renforcement par lien hypnotique", detail: "« Et tout cela vous permet de... »" },
  ],
  [
    { name: "Liste de truismes", type: "Préparation", icon: "✅", desc: "5-10 affirmations indiscutables." },
    { name: "Cadence lente", type: "Voix", icon: "🎙", desc: "Espace pour acquiescement." },
    { name: "Suggestion enveloppée", type: "Technique", icon: "🎁", desc: "Glissée dans le flux." },
  ],
  [
    { val: "5-10", label: "Truismes empilés", sub: "yes set", color: colors.teal },
    { val: "Acceptation", label: "Inconsciente", sub: "ouverture à la suggestion", color: colors.gold },
  ],
  ["Je vais résister à toute suggestion", "Je dois rester critique"]
);

const tousPossibles = make(
  908, "Permissive", "Anticipe toutes les réactions possibles",
  "Induction permissive qui anticipe et inclut toutes les réactions possibles du client (« peut-être vos paupières deviennent lourdes, ou peut-être vous ressentez une chaleur, ou peut-être... »). Aucune résistance possible.",
  ["Client résistant", "Client méfiant", "Client analytique"],
  ["Client recherchant la directivité"],
  "Induction couvrant tous les possibles",
  "15-20 min",
  colors.purple,
  "Énumération de toutes les réactions possibles + ratification.",
  "Étapes",
  [
    { label: "Approche permissive d'ouverture", detail: "« Il y a plusieurs façons d'entrer en transe. Pour vous, ce sera la bonne. »" },
    { label: "Énumération sensorielle", detail: "« Peut-être vos paupières deviennent lourdes. Ou peut-être vous ressentez une chaleur dans les mains. Ou peut-être vous entendez ma voix de plus en plus distante. »" },
    { label: "Couverture émotionnelle", detail: "« Vous pourriez ressentir du calme, ou de l'amusement, ou une légère curiosité. Tout est juste. »" },
    { label: "Ratification permanente", detail: "Quoi que le client ressente, le praticien peut dire « C'est exactement ce qu'il faut. »" },
    { label: "Approfondissement souple", detail: "« Et à votre rythme, vous descendez de plus en plus profondément. »" },
    { label: "Travail thérapeutique", detail: "Une fois la transe installée, début du travail prévu." },
  ],
  [
    { name: "Énumération couvrante", type: "Linguistique", icon: "🌐", desc: "Toutes les réactions possibles." },
    { name: "Ratification permanente", type: "Posture", icon: "✓", desc: "Quoi qu'il arrive, c'est juste." },
    { name: "Aucune résistance possible", type: "Effet", icon: "🛡", desc: "Pas de point d'accroche." },
  ],
  [
    { val: "100%", label: "Couverture des réactions", sub: "induction permissive", color: colors.purple },
    { val: "15-20", label: "Minutes", sub: "induction complète", color: colors.gold },
  ],
  ["Je vais sentir quelque chose de spécial sinon ça ne marche pas", "Je résiste à tout"]
);

const autorisation = make(
  909, "Permission", "Le client entre à son rythme",
  "Induction qui donne explicitement la permission au client d'entrer en transe à son rythme, à sa façon, sans pression. Particulièrement adaptée aux clients hyper-contrôlants ou anxieux.",
  ["Client hyper-contrôlant", "Client anxieux face à l'hypnose", "Première séance"],
  ["Client recherchant le directif"],
  "Induction par autorisation",
  "15-25 min",
  colors.purple,
  "Permission explicite + entrée à rythme libre.",
  "Étapes",
  [
    { label: "Pré-talk rassurant", detail: "« Vous gardez le contrôle. Vous entrez à votre rythme. »" },
    { label: "Permission explicite", detail: "« Je vous donne la permission de fermer les yeux quand vous le souhaitez. »" },
    { label: "Permission de la transe", detail: "« Vous avez la permission d'entrer en transe à la profondeur qui vous convient. »" },
    { label: "Permission du non-changement", detail: "« Vous avez aussi la permission de rester pleinement éveillé si c'est ce qui est juste pour vous. »" },
    { label: "Approche progressive", detail: "À mesure que les permissions s'accumulent, le client se détend." },
    { label: "Travail thérapeutique", detail: "Une fois en transe, le praticien continue avec autorisation : « Vous pouvez explorer cela à votre rythme. »" },
  ],
  [
    { name: "Permissions multiples", type: "Linguistique", icon: "🔓", desc: "Liberté totale du client." },
    { name: "Anti-pression", type: "Posture", icon: "🕊", desc: "Pas d'attente ni d'objectif imposé." },
  ],
  [
    { val: "Permission", label: "Toutes les libertés", sub: "rythme, profondeur, durée", color: colors.purple },
    { val: "15-25", label: "Minutes", sub: "patience requise", color: colors.gold },
  ],
  ["Je dois performer en transe", "Si je ne change pas, c'est que j'ai échoué"]
);

const dissociationDoubleLien = make(
  910, "Dissociation", "Conscient écoute / inconscient travaille",
  "Technique linguistique de dissociation : « pendant que votre conscient écoute ma voix, votre inconscient travaille en silence ». Combinée au double lien (« vous pouvez entrer en transe maintenant ou dans 30 secondes »), garantit l'entrée en transe.",
  ["Client résistant", "Renforcement de l'induction", "Approche ericksonienne classique"],
  ["Aucune contre-indication"],
  "Dissociation conscient/inconscient + double lien",
  "10-15 min (intégré)",
  colors.clientBlue,
  "Dissociation linguistique + double lien.",
  "Étapes",
  [
    { label: "Dissociation linguistique", detail: "« Pendant que votre conscient écoute ma voix, votre inconscient peut commencer à travailler. »" },
    { label: "Renforcement de la dissociation", detail: "« Votre conscient peut analyser, douter, juger. Votre inconscient, lui, agit. »" },
    { label: "Double lien d'entrée en transe", detail: "« Voulez-vous entrer en transe maintenant, ou dans 30 secondes ? » Les deux options conduisent à la transe." },
    { label: "Double lien d'approfondissement", detail: "« Préférez-vous une transe légère ou profonde ? » Les deux options sont des transes." },
    { label: "Double lien thérapeutique", detail: "« Voulez-vous résoudre ce problème en 1 séance ou en 3 ? » Les deux options résolvent." },
    { label: "Combinaison fluide", detail: "Tout au long de la séance, dissociation et doubles liens se succèdent." },
  ],
  [
    { name: "Dissociation linguistique", type: "Pattern", icon: "🔀", desc: "Conscient / inconscient séparés." },
    { name: "Double lien", type: "Pattern", icon: "🔗", desc: "Choix illusoire entre 2 options désirées." },
  ],
  [
    { val: "Garantie", label: "Entrée en transe", sub: "double lien efficace", color: colors.clientBlue },
    { val: "10-15", label: "Minutes", sub: "intégré", color: colors.gold },
  ],
  ["Mon conscient va tout interférer", "Je dois être totalement inconscient pour que ça marche"]
);

const expressionsComposees = make(
  911, "Liens", "Cause-effet hypnotique",
  "Constructions linguistiques qui lient deux propositions par « pendant que », « alors que », « à mesure que »... Crée une cause-effet hypnotique qui facilite l'acceptation de la seconde proposition.",
  ["Outil quotidien d'induction", "Faciliter l'acceptation des suggestions", "Pattern Milton de base"],
  ["Aucune contre-indication"],
  "Expressions composées — Liens hypnotiques",
  "5-10 min (intégré)",
  colors.teal,
  "Maîtrise de 6 connecteurs principaux.",
  "Les connecteurs hypnotiques",
  [
    { label: "Pendant que", detail: "« Pendant que vous m'écoutez, vous vous détendez de plus en plus. »" },
    { label: "Alors que", detail: "« Alors que votre respiration ralentit, votre transe s'approfondit. »" },
    { label: "À mesure que", detail: "« À mesure que vos paupières deviennent lourdes, votre esprit se libère. »" },
    { label: "Et", detail: "« Vous êtes assis confortablement... ET vos paupières se ferment. »" },
    { label: "Parce que", detail: "« Vous pouvez vous détendre PARCE QUE votre inconscient sait faire. »" },
    { label: "Cela vous permet de", detail: "« Vous prenez une grande inspiration, CELA VOUS PERMET DE relâcher complètement. »" },
  ],
  [
    { name: "6 connecteurs maîtrisés", type: "Linguistique", icon: "🔗", desc: "Pendant, alors, à mesure, et, parce que, cela permet." },
    { name: "Cause-effet hypnotique", type: "Effet", icon: "⚡", desc: "Acceptation facilitée." },
  ],
  [
    { val: "6", label: "Connecteurs", sub: "à automatiser", color: colors.teal },
    { val: "100%", label: "Des inductions", sub: "les utilisent", color: colors.gold },
  ],
  ["Mes phrases sont plates", "Je ne saurai pas lier les idées"]
);

const archetypes = make(
  912, "Archétypes", "Voyage du héros aux 4 figures",
  "Métaphore structurée autour de 4 archétypes universels (Guerrier, Magicien, Souverain, Amant — Moore & Gillette). Le client traverse le récit et active l'archétype manquant ou déséquilibré.",
  ["Quête de sens", "Travail identitaire profond", "Particulièrement efficace pour les hommes", "Approche jungienne"],
  ["Refus du symbolique", "Manque d'imagerie mentale"],
  "Métaphore des 4 archétypes",
  "60-90 min",
  colors.purple,
  "Identification de l'archétype manquant + traversée + intégration.",
  "Étapes",
  [
    { label: "Présentation des 4 archétypes", detail: "Guerrier (force, action), Magicien (savoir, transformation), Souverain (vision, sagesse), Amant (passion, connexion)." },
    { label: "Identification de l'archétype manquant", detail: "« Lequel manque le plus dans votre vie actuelle ? »" },
    { label: "Mise en transe profonde", detail: "Induction Erickson ou Elman." },
    { label: "Voyage métaphorique", detail: "Le client rencontre les 4 figures dans un récit (forêt, château, désert, océan). Chacune lui transmet son don." },
    { label: "Activation de l'archétype manquant", detail: "Rencontre prolongée et dialogue avec l'archétype identifié." },
    { label: "Intégration", detail: "« Cet archétype est en vous. Il s'éveille pleinement maintenant. »" },
    { label: "Pont sur le futur", detail: "Application à une situation concrète où l'archétype est nécessaire." },
  ],
  [
    { name: "4 archétypes Moore & Gillette", type: "Référence", icon: "👑", desc: "Guerrier, Magicien, Souverain, Amant." },
    { name: "Voyage du héros", type: "Métaphore", icon: "🗺", desc: "Récit structuré." },
    { name: "Approche jungienne", type: "Théorie", icon: "🧠", desc: "Inconscient collectif." },
  ],
  [
    { val: "4", label: "Archétypes", sub: "universaux jungiens", color: colors.purple },
    { val: "60-90", label: "Minutes", sub: "voyage complet", color: colors.gold },
  ],
  ["Je n'ai pas de quête héroïque", "C'est trop ésotérique pour moi"]
);

const formuleMagique = make(
  913, "Construction", "Méthode pas-à-pas pour métaphore sur mesure",
  "Méthode pas-à-pas pour construire une métaphore thérapeutique : isomorphisme problème/récit, choix de l'univers, héros, obstacle, allié, ressource, transformation. Outil pédagogique pour le praticien.",
  ["Praticien construisant une métaphore en préparation", "Travail pédagogique en formation", "Personnalisation thérapeutique"],
  ["Préférence pour les métaphores spontanées"],
  "Formule magique — Construction de métaphore",
  "30-45 min (préparation)",
  colors.gold,
  "8 étapes de construction reproductibles.",
  "Les 8 étapes",
  [
    { label: "Étape 1 — Cartographier le problème", detail: "Personnages, lieu, conflit, enjeu, blocage du client." },
    { label: "Étape 2 — Choisir l'univers", detail: "Univers proche du client (sport, nature, métier...) pour isomorphisme fort." },
    { label: "Étape 3 — Le héros", detail: "Personnage isomorphe au client (âge, valeurs, situation)." },
    { label: "Étape 4 — L'obstacle", detail: "Représentation symbolique du blocage." },
    { label: "Étape 5 — L'allié", detail: "Figure ressource (mentor, animal, objet magique)." },
    { label: "Étape 6 — La ressource", detail: "Capacité ou objet permettant le franchissement." },
    { label: "Étape 7 — La transformation", detail: "Passage du héros au-delà de l'obstacle." },
    { label: "Étape 8 — La nouvelle vie", detail: "Vie du héros après transformation, image positive ouverte." },
  ],
  [
    { name: "Grille en 8 étapes", type: "Document", icon: "📋", desc: "Reproductible." },
    { name: "Banque d'univers", type: "Référence", icon: "🌍", desc: "Pour choix rapide." },
  ],
  [
    { val: "8", label: "Étapes", sub: "construction reproductible", color: colors.gold },
    { val: "30-45", label: "Minutes prep", sub: "+ narration en séance", color: colors.purple },
  ],
  ["Je ne suis pas créatif", "Je ne saurai pas inventer"]
);

const nettoyagePrintemps = make(
  914, "Libération", "Tri symbolique de la maison intérieure",
  "Métaphore puissante de nettoyage intérieur : le client visualise sa maison intérieure, identifie ce qui doit partir (objets, mémoires, croyances), procède au tri et au nettoyage symbolique. Renouveau intérieur.",
  ["Sentiment d'encombrement intérieur", "Fin de cycle de vie", "Burn-out, fatigue mentale", "Préparation à un nouveau projet"],
  ["Trauma actif (fragilise les défenses)"],
  "Le nettoyage de printemps",
  "60-75 min",
  colors.teal,
  "Visualisation de la maison + tri + nettoyage + renouveau.",
  "Étapes",
  [
    { label: "Mise en transe profonde", detail: "Induction Erickson ou Elman." },
    { label: "Visualisation de la maison intérieure", detail: "« Imaginez la maison qui vous représente. Ses pièces, ses objets, son atmosphère. »" },
    { label: "Tour de la maison", detail: "Le client visite chaque pièce, observe l'état, le contenu." },
    { label: "Identification de ce qui doit partir", detail: "Objets, photos, papiers, meubles symbolisant des charges anciennes." },
    { label: "Tri", detail: "« Que gardez-vous ? Que jetez-vous ? Que donnez-vous ? »" },
    { label: "Nettoyage symbolique", detail: "Le client nettoie, range, aère. Visualisation du processus." },
    { label: "Maison renouvelée", detail: "« Comment est votre maison maintenant ? Plus claire, plus libre, plus vous. »" },
    { label: "Suggestion de continuité", detail: "« Cette propreté intérieure se reflète dans votre vie quotidienne. »" },
  ],
  [
    { name: "Métaphore de la maison", type: "Hypnose", icon: "🏠", desc: "Espace intérieur visualisable." },
    { name: "Tri symbolique", type: "Technique", icon: "📦", desc: "Garder, jeter, donner." },
    { name: "Nettoyage processus", type: "Visualisation", icon: "🧹", desc: "Action symbolique." },
  ],
  [
    { val: "60-75", label: "Minutes", sub: "séance complète", color: colors.teal },
    { val: "Renouveau", label: "Effet", sub: "espace intérieur libéré", color: colors.gold },
  ],
  ["Je suis trop encombré pour changer", "Je dois tout garder de mon passé"]
);

const transformationInstantanee = make(
  915, "Rapide", "Changement ressenti dès la sortie",
  "Protocole rapide de transformation d'un état ou d'un comportement en transe profonde. Visualisation de soi transformé, association immédiate, ancrage. Effet souvent ressenti dès la sortie de séance.",
  ["Démarrage thérapeutique percutant", "Renforcement de la conviction du client", "Préparation à un travail plus profond"],
  ["Demande de transformation profonde non réaliste en 1 séance"],
  "Transformation Instantanée",
  "30-45 min",
  colors.red,
  "Visualisation + association + ancrage + sortie.",
  "Étapes",
  [
    { label: "Précision de la transformation visée", detail: "« Qu'est-ce qui change précisément ? Sur quel plan ? »" },
    { label: "Mise en transe profonde", detail: "Induction Erickson ou Elman." },
    { label: "Visualisation dissociée du soi transformé", detail: "« Voyez-vous, à 1 mètre devant vous, transformé. Comment êtes-vous ? »" },
    { label: "Calibration de la version transformée", detail: "Posture, expression, ressenti." },
    { label: "Association massive", detail: "« Entrez dans cette version transformée. Devenez-la pleinement. »" },
    { label: "Amplification", detail: "« Encore plus... ressentez chaque cellule changer. »" },
    { label: "Ancrage", detail: "Geste d'ancrage de la nouvelle version." },
    { label: "Sortie avec maintien", detail: "« Vous restez cette nouvelle version. C'est vous, désormais. »" },
  ],
  [
    { name: "Visualisation dissociée", type: "PNL", icon: "🎬", desc: "Vue extérieure du soi transformé." },
    { name: "Association massive", type: "Technique", icon: "👤", desc: "Devenir pleinement." },
    { name: "Ancrage de continuité", type: "PNL", icon: "📍", desc: "Maintien post-séance." },
  ],
  [
    { val: "30-45", label: "Minutes", sub: "transformation rapide", color: colors.red },
    { val: "Immédiat", label: "Effet ressenti", sub: "dès la sortie", color: colors.gold },
  ],
  ["Le changement profond demande des mois", "Une séance ne suffit pas"]
);

const superObjectif = make(
  916, "SUPER", "Spécifique-Utile-Positif-Écologique-Réaliste",
  "Méthode d'anamnèse SUPER : Spécifique, Utile, Positif, Écologique, Réaliste. Structure de premier entretien pour formaliser l'objectif thérapeutique de manière précise et engageante.",
  ["Premier entretien standardisé", "Cadrage d'un parcours thérapeutique", "Coaching"],
  ["Demande de simple soutien (sans objectif)"],
  "Méthode du SUPER objectif",
  "60 min (1ère séance)",
  colors.clientBlue,
  "5 critères + formulation finale + engagement.",
  "Les 5 critères SUPER",
  [
    { label: "S — Spécifique", detail: "« Précisément, qu'est-ce qui change ? Comment le saurez-vous ? Critères observables. »" },
    { label: "U — Utile", detail: "« En quoi ce changement vous sera-t-il utile ? Quel bénéfice concret ? »" },
    { label: "P — Positif", detail: "« Formulé en positif : VERS quoi vous voulez aller, pas LOIN DE quoi. »" },
    { label: "E — Écologique", detail: "« Compatible avec votre vie globale, vos relations, vos valeurs ? »" },
    { label: "R — Réaliste", detail: "« Atteignable dans le délai imparti ? Avec les ressources disponibles ? »" },
    { label: "Reformulation finale", detail: "Le client reformule son objectif en respectant les 5 critères." },
    { label: "Engagement", detail: "« Êtes-vous prêt à vous engager dans ce parcours pour atteindre cet objectif ? »" },
  ],
  [
    { name: "Grille SUPER", type: "Document", icon: "📋", desc: "5 critères de validation." },
    { name: "Reformulation finale", type: "Cadrage", icon: "🎯", desc: "Objectif clair signé." },
  ],
  [
    { val: "5", label: "Critères SUPER", sub: "validation complète", color: colors.clientBlue },
    { val: "60", label: "Minutes 1ère séance", sub: "anamnèse + objectif", color: colors.gold },
  ],
  ["Je ne sais pas vraiment ce que je veux", "C'est trop technique de définir un objectif"]
);

const distorsionTemps = make(
  917, "Subjectif", "5 min ressenties comme 1 heure (ou inverse)",
  "Phénomène hypnotique d'altération de la perception subjective du temps : 5 minutes ressenties comme 1 heure (expansion) ou 1 heure ressentie comme 5 minutes (contraction). Utile pour douleur chronique et apprentissage accéléré.",
  ["Douleur chronique (raccourcir le ressenti)", "Apprentissage accéléré (allonger le temps)", "Examen redouté (raccourcir)", "Plaisir à savourer (allonger)"],
  ["Aucune contre-indication majeure"],
  "Distorsion du temps",
  "20-30 min (intégré)",
  colors.navy,
  "Mise en transe profonde + suggestion de distorsion + ancrage.",
  "Étapes",
  [
    { label: "Précision de l'objectif", detail: "Allonger ou raccourcir ? Pour quelle situation ?" },
    { label: "Mise en transe profonde", detail: "Somnambulisme requis pour distorsion efficace." },
    { label: "Démonstration en séance", detail: "« Quelques secondes ressenties comme plusieurs minutes » — vérification." },
    { label: "Suggestion ciblée", detail: "Pour douleur : « 5 minutes de douleur ressenties comme 30 secondes. » Pour plaisir : inverse." },
    { label: "Ancrage post-hypnotique", detail: "Activation par mot-clé ou geste dans la situation cible." },
    { label: "Test in situ (à distance)", detail: "Le client rapporte la prochaine fois l'effet ressenti dans la situation cible." },
  ],
  [
    { name: "Somnambulisme requis", type: "Profondeur", icon: "💤", desc: "Distorsion efficace en transe profonde." },
    { name: "Suggestion contextuelle", type: "Technique", icon: "⏰", desc: "Activation par déclencheur." },
  ],
  [
    { val: "Subjectif", label: "Temps modifié", sub: "expansion ou contraction", color: colors.navy },
    { val: "Somnambulique", label: "Profondeur requise", sub: "obligatoire", color: colors.gold },
  ],
  ["Le temps est objectif", "On ne peut pas modifier sa perception"]
);

const permission = make(
  918, "Libération", "Lever un interdit hérité",
  "Protocole pour lever un interdit interne hérité (ne pas réussir, ne pas être heureux, ne pas dire non). Le praticien donne en transe la permission explicite et solennelle. Particulièrement puissant pour les injonctions parentales.",
  ["Injonction parentale identifiée", "Auto-sabotage récurrent", "Sentiment de ne pas avoir le droit"],
  ["Trauma actif (préférer trauma)"],
  "Installer une permission",
  "45-60 min",
  colors.gold,
  "Identification + cérémonie de permission + ancrage.",
  "Étapes",
  [
    { label: "Identification de l'interdit", detail: "« Qu'est-ce que vous ne vous autorisez pas ? D'où cela vient-il ? »" },
    { label: "Recherche de l'origine", detail: "Souvent une figure parentale, scolaire, religieuse." },
    { label: "Mise en transe profonde", detail: "Profondeur nécessaire pour l'ancrage." },
    { label: "Cérémonie de permission", detail: "« Au nom de votre vie, je vous donne solennellement la permission de [X]. »" },
    { label: "Validation par l'inconscient", detail: "Signaling : « Votre inconscient accepte-t-il cette permission ? »" },
    { label: "Ancrage par geste", detail: "Geste rituel marquant la permission (signature, sceau symbolique)." },
    { label: "Pont sur le futur", detail: "Visualisation de l'usage de la permission dans une situation concrète." },
  ],
  [
    { name: "Cérémonie solennelle", type: "Technique", icon: "🕯", desc: "Permission ritualisée." },
    { name: "Validation idéomotrice", type: "Test", icon: "✓", desc: "Accord de l'inconscient." },
    { name: "Ancrage rituel", type: "PNL", icon: "📜", desc: "Geste marquant." },
  ],
  [
    { val: "Solennelle", label: "Cérémonie", sub: "marque psychique forte", color: colors.gold },
    { val: "45-60", label: "Minutes", sub: "rituel complet", color: colors.purple },
  ],
  ["Je n'ai pas le droit", "Mes parents ne me pardonneraient pas", "C'est mal de réussir"]
);

const augmentationEtat = make(
  919, "Pic", "Amplification jusqu'au maximum",
  "Technique d'amplification d'un état ressource (joie, calme, force) en transe. Le praticien guide la montée en intensité jusqu'au pic, puis ancre l'état. Particulièrement utile en préparation d'un événement.",
  ["Préparation à performance / examen / événement", "Renforcement d'une ressource avant ancrage", "Coaching de pic"],
  ["État négatif (à dissocier au contraire)"],
  "Augmentation de l'état",
  "20-30 min (intégré)",
  colors.gold,
  "Accès à la ressource + amplification + ancrage au pic.",
  "Étapes",
  [
    { label: "Choix de l'état ressource", detail: "Confiance, joie, calme, force, créativité." },
    { label: "Accès initial", detail: "Revivification d'un moment où l'état était présent." },
    { label: "Calibration de l'intensité initiale", detail: "« Sur 10, où êtes-vous ? »" },
    { label: "Amplification progressive", detail: "« Encore plus... encore plus... 6, 7, 8, 9, 10 ! »" },
    { label: "Détails sensoriels au pic", detail: "« Que voyez-vous ? Qu'entendez-vous ? Que ressentez-vous précisément ? »" },
    { label: "Ancrage au pic", detail: "Geste, mot, ou simple respiration pour fixer l'état." },
    { label: "Test", detail: "Briser l'état, réactiver l'ancre. Vérification." },
  ],
  [
    { name: "Amplification progressive", type: "Technique", icon: "📈", desc: "Échelle 1-10." },
    { name: "Ancrage au pic", type: "PNL", icon: "📍", desc: "Moment d'intensité maximale." },
  ],
  [
    { val: "10/10", label: "Pic visé", sub: "intensité maximale", color: colors.gold },
    { val: "20-30", label: "Minutes", sub: "intégré à la séance", color: colors.purple },
  ],
  ["Mes ressources me lâchent", "Je ne peux pas l'augmenter à volonté"]
);

const ericksonRossi = make(
  920, "Idéodynamique", "Co-construction avec l'inconscient via signaling",
  "Protocole co-créé par Erickson et Rossi : utilisation des signaux idéomoteurs pour explorer les ressources inconscientes, dialoguer avec une partie symptomatique, et co-construire la solution. Approche profondément respectueuse.",
  ["Symptôme à fonction protectrice forte", "Travail systémique inconscient", "Approche respectueuse pour clients sensibles"],
  ["Refus de l'idéomoteur", "Manque de transe suffisante"],
  "Technique Erickson-Rossi",
  "60-90 min",
  colors.clientBlue,
  "Installation signaling + dialogue + co-construction.",
  "Étapes",
  [
    { label: "Mise en transe profonde", detail: "Somnambulisme léger ou profond." },
    { label: "Installation des signaux idéomoteurs", detail: "OUI, NON, JE NE VEUX PAS DIRE — sur 3 doigts différents." },
    { label: "Identification de la partie concernée", detail: "« Y a-t-il une partie de vous responsable du symptôme X ? » Réponse OUI." },
    { label: "Dialogue d'intention positive", detail: "« Cette partie a-t-elle une intention positive ? » OUI." },
    { label: "Recherche de l'intention", detail: "« Acceptes-tu de la révéler ? » OUI/NON. Si OUI, le client la dit à voix haute." },
    { label: "Génération de solutions alternatives", detail: "« Acceptes-tu de chercher d'autres moyens d'atteindre ce but ? » OUI." },
    { label: "Validation des solutions", detail: "« 3 nouvelles solutions sont-elles trouvées ? » OUI. « Acceptes-tu de les tester ? » OUI." },
    { label: "Vérification écologique", detail: "« Une autre partie a-t-elle une objection ? » NON. Sinon, retour au dialogue." },
  ],
  [
    { name: "3 signaux idéomoteurs", type: "Technique", icon: "🤲", desc: "OUI, NON, je ne veux pas." },
    { name: "Dialogue avec partie", type: "Approche", icon: "💬", desc: "Respectueux, négocié." },
    { name: "Co-construction", type: "Posture", icon: "🤝", desc: "Solution émergente." },
  ],
  [
    { val: "Erickson-Rossi", label: "Co-création", sub: "années 1970", color: colors.clientBlue },
    { val: "60-90", label: "Minutes", sub: "séance dialogue complète", color: colors.gold },
  ],
  ["Je n'ai pas de parties intérieures", "L'inconscient ne parle pas"]
);

const regressionAge = make(
  921, "Progressive", "Recadrage avec ressources adultes",
  "Protocole complet de régression en âge : contrat de sécurité, induction profonde, pont d'affect, retour à l'événement, recadrage avec ressources adultes, pont sur le futur. Différent de la régression Elman par l'approche progressive et permissive.",
  ["Trauma léger à modéré identifié", "Schéma identitaire à reconstruire", "Émotion ancienne bloquante"],
  ["Trauma sévère (préférer trauma complexe)", "Dissociation pathologique"],
  "Régression en âge — Protocole complet",
  "60-90 min",
  colors.purple,
  "Sécurisation + régression progressive + recadrage + intégration.",
  "Étapes",
  [
    { label: "Contrat de sécurité", detail: "Lieu sûr installé, ressource adulte ancrée, signal d'arrêt convenu." },
    { label: "Induction profonde", detail: "Erickson ou Elman, somnambulisme atteint." },
    { label: "Pont d'affect", detail: "« Reconnectez à l'émotion qui accompagne le symptôme. Laissez-la vous guider en arrière. »" },
    { label: "Régression progressive", detail: "« Vous reculez doucement dans le temps. À votre rythme. À 5 ans... 4 ans... 3 ans... »" },
    { label: "Identification de la scène", detail: "Le client décrit la scène : âge, lieu, personnes." },
    { label: "Présence de l'adulte ressource", detail: "« Votre vous adulte arrive dans la scène pour aider l'enfant. »" },
    { label: "Recadrage avec ressources", detail: "L'adulte fait, dit, donne ce qui aurait dû arriver. Réparation symbolique." },
    { label: "Pont sur le futur", detail: "« Avec cette nouvelle compréhension, comment voyez-vous votre vie maintenant ? »" },
  ],
  [
    { name: "Lieu sûr", type: "Ressource", icon: "🏝", desc: "Pré-installé pour sécurité." },
    { name: "Adulte ressource", type: "Ressource", icon: "🛡", desc: "Soi adulte protecteur." },
    { name: "Recadrage symbolique", type: "Technique", icon: "✨", desc: "Réparation in situ." },
  ],
  [
    { val: "60-90", label: "Minutes", sub: "séance complète", color: colors.purple },
    { val: "Progressive", label: "Approche", sub: "vs Elman directe", color: colors.gold },
  ],
  ["Je vais revivre la douleur", "Mon enfance est trop loin"]
);

const traumaProcessus = make(
  922, "Sans revivification", "Approche douce par dissociation",
  "Protocole hypnotique de traitement du trauma sans revivification directe : stabilisation, écran protecteur, dissociation, recadrage symbolique, reconstruction. Adapté pour traumatismes simples et modérés.",
  ["Trauma simple à modéré", "Patient en sécurité émotionnelle", "Échec d'autres approches", "Préférence pour la douceur"],
  ["Trauma complexe (préférer trauma complexe 844)", "Dissociation pathologique non stabilisée"],
  "Processus pour les traumatismes",
  "60-90 min × 3-6 séances",
  colors.red,
  "Stabilisation + écran + recadrage + reconstruction.",
  "Étapes du parcours",
  [
    { label: "Phase 1 — Stabilisation (1-2 séances)", detail: "Lieu sûr, ressources, signaling, contrat de sécurité." },
    { label: "Phase 2 — Écran protecteur", detail: "Le client visualise l'événement à distance, sur un écran de cinéma. Dissociation visuelle." },
    { label: "Modulation des sous-modalités", detail: "Distance, taille, N&B, son baissé. L'événement perd de son intensité." },
    { label: "Recadrage symbolique", detail: "« Que ferait l'adulte d'aujourd'hui pour aider l'enfant ? » Sans entrer dans la scène." },
    { label: "Phase 3 — Reconstruction identitaire", detail: "« Qui êtes-vous au-delà de cet événement ? » Travail Self." },
    { label: "Phase 4 — Pont sur le futur", detail: "Visualisation de la vie sans l'emprise du trauma." },
    { label: "Intégration & autonomie", detail: "Outils d'auto-régulation enseignés. Espacement progressif des séances." },
  ],
  [
    { name: "Écran protecteur", type: "Technique", icon: "📺", desc: "Distance dissociative." },
    { name: "Lieu sûr", type: "Ressource", icon: "🏝", desc: "Stabilisation phase 1." },
    { name: "Recadrage symbolique", type: "Technique", icon: "✨", desc: "Sans revivification." },
  ],
  [
    { val: "3-6", label: "Séances", sub: "selon complexité", color: colors.red },
    { val: "Sans", label: "Revivification directe", sub: "approche douce", color: colors.gold },
  ],
  ["Je vais devoir tout revivre", "Mon trauma me définit"]
);

const ordalique = make(
  923, "Épreuve", "Tâche pénible chaque fois que le symptôme apparaît",
  "Méthode ericksonienne d'épreuve : le client doit accomplir une tâche pénible chaque fois que le symptôme apparaît (lever 30 min plus tôt, écrire 20 pages...). L'inconscient préfère renoncer au symptôme plutôt que subir l'ordalie.",
  ["Symptôme résistant aux approches directes", "Insomnie, tic, comportement compulsif léger", "Client volontaire et engagé"],
  ["Substances", "Auto-mutilation", "Pathologie psychiatrique sévère", "Manque de rapport et de confiance"],
  "Thérapie Ordalique",
  "1-3 séances de 60 min",
  colors.navy,
  "Reformulation + prescription d'ordalie + suivi + ajustement.",
  "Étapes",
  [
    { label: "Évaluation du symptôme", detail: "Précision : fréquence, intensité, contexte." },
    { label: "Reformulation paradoxale", detail: "« Pour vaincre votre symptôme, il faudra le rendre plus coûteux que sa fonction protectrice. »" },
    { label: "Choix de l'ordalie", detail: "Tâche pénible mais inoffensive : se lever 30 min plus tôt, écrire 20 pages, faire 50 pompes." },
    { label: "Cadre rituel strict", detail: "« Chaque fois que [symptôme] apparaît, vous DEVEZ faire [ordalie] dans les 24h. Sans exception. »" },
    { label: "Engagement écrit", detail: "Le client signe son engagement. Marque psychique." },
    { label: "Suivi à 1 semaine", detail: "Vérification de l'application + effet observé." },
    { label: "Ajustement", detail: "Si symptôme baisse : continuer. Si pas d'effet : intensifier ou changer l'ordalie." },
    { label: "Sortie progressive", detail: "Quand le symptôme s'éteint, arrêt progressif de l'ordalie." },
  ],
  [
    { name: "Reformulation paradoxale", type: "Linguistique", icon: "🔄", desc: "L'ordalie comme outil." },
    { name: "Cadre rituel strict", type: "Cadre", icon: "🕯", desc: "Sans exception, dans les 24h." },
    { name: "Engagement écrit", type: "Document", icon: "📜", desc: "Marque psychique forte." },
  ],
  [
    { val: "1-3", label: "Séances", sub: "rapide si efficace", color: colors.navy },
    { val: "Erickson", label: "Origine", sub: "années 1950-60", color: colors.gold },
  ],
  ["C'est absurde", "Mon symptôme va empirer", "Je ne tiendrai pas l'ordalie"]
);

const douleur = make(
  924, "Multi-techniques", "Gant, transformation, déplacement, dissociation, distorsion",
  "Protocole complet de gestion de la douleur en hypnose : évaluation sensorielle (SUDS, qualité), choix de la technique (gant anesthésique, transformation, déplacement, dissociation, distorsion temps), application, ancrage, autonomisation.",
  ["Douleur chronique", "Douleur aiguë gérable", "Préparation à un soin médical", "Complément à un suivi médical"],
  ["Douleur signalant pathologie non diagnostiquée (urgence)", "Substitution complète au médical (jamais)"],
  "Contrôler la douleur — Protocole complet",
  "45-60 min × 3-5 séances",
  colors.red,
  "Évaluation + choix de technique + application + autonomisation.",
  "Étapes",
  [
    { label: "Évaluation SUDS", detail: "Échelle 0-10 d'intensité. Mesure pré/post." },
    { label: "Description sensorielle de la douleur", detail: "Forme, couleur, taille, texture, mouvement de la douleur." },
    { label: "Mise en transe profonde", detail: "Somnambulisme requis pour analgésie efficace." },
    { label: "Technique 1 — Gant anesthésique", detail: "Insensibilisation de la main, transfert sur la zone douloureuse." },
    { label: "Technique 2 — Transformation", detail: "Modifier la couleur, la forme, la taille de la douleur. Réduire jusqu'à dissolution." },
    { label: "Technique 3 — Déplacement", detail: "Déplacer la douleur à un endroit moins gênant (petit doigt) puis la laisser partir." },
    { label: "Technique 4 — Dissociation", detail: "« La douleur existe mais à distance, dans un autre corps. »" },
    { label: "Technique 5 — Distorsion temporelle", detail: "« 10 min de douleur ressenties comme 30 secondes. »" },
    { label: "Choix par le client de la technique préférée", detail: "Test des 5, choix de celle qui fonctionne le mieux." },
    { label: "Auto-hypnose enseignée", detail: "Le client apprend à activer seul sa technique antalgique." },
  ],
  [
    { name: "Échelle SUDS", type: "Évaluation", icon: "📏", desc: "Mesure 0-10 pré/post." },
    { name: "5 techniques", type: "Catalogue", icon: "🧰", desc: "Gant, transfo, déplacement, dissoc, distorsion." },
    { name: "Auto-hypnose", type: "Autonomie", icon: "🔄", desc: "Le client devient autonome." },
  ],
  [
    { val: "5", label: "Techniques disponibles", sub: "à tester", color: colors.red },
    { val: "−40 à −80%", label: "Réduction SUDS", sub: "selon technique et client", color: colors.gold },
  ],
  ["L'hypnose ne peut pas vraiment supprimer ma douleur", "C'est dans ma tête, pas réel"]
);

const recadrageEnTranse = make(
  925, "Inconscient", "Reframing au niveau profond",
  "Recadrage classique exécuté en transe profonde : changement de signification ou de contexte d'un événement ou comportement. Plus puissant que le recadrage en état conscient car les nouvelles significations sont ancrées au niveau inconscient.",
  ["Croyance limitante identifiée", "Comportement à recadrer", "Travail sur signification d'un événement"],
  ["Aucune contre-indication"],
  "Recadrage en transe — Reframing profond",
  "45-60 min",
  colors.purple,
  "Mise en transe + identification + recadrage + ancrage.",
  "Étapes",
  [
    { label: "Identification du contenu à recadrer", detail: "Croyance, comportement, événement. Précision." },
    { label: "Mise en transe profonde", detail: "Erickson ou Elman, somnambulisme atteint." },
    { label: "Recadrage de signification", detail: "« Cet événement signifie X. Et si cela signifiait aussi Y ? Et Z ? »" },
    { label: "OU recadrage de contexte", detail: "« Ce comportement est inadapté ICI. Mais utile DANS QUEL contexte ? »" },
    { label: "Validation par signaling", detail: "« Votre inconscient accepte-t-il ce nouveau cadre ? » OUI/NON." },
    { label: "Ancrage du nouveau cadre", detail: "Geste, image, mot pour fixer la nouvelle signification." },
    { label: "Pont sur le futur", detail: "Application à une situation déclenchante." },
  ],
  [
    { name: "Recadrage de signification", type: "Linguistique", icon: "💭", desc: "Changement de sens." },
    { name: "Recadrage de contexte", type: "Linguistique", icon: "🔄", desc: "Changement de cadre." },
    { name: "Validation idéomotrice", type: "Test", icon: "✓", desc: "Accord de l'inconscient." },
  ],
  [
    { val: "Profond", label: "Niveau d'ancrage", sub: "inconscient", color: colors.purple },
    { val: "45-60", label: "Minutes", sub: "séance complète", color: colors.gold },
  ],
  ["Le sens des choses est fixe", "Je ne peux pas changer ce que je crois"]
);

const senois = make(
  926, "Onirique", "Apprivoisement de la peur via le rêve",
  "Inspiré du peuple Senoi (Malaisie) qui apprend à ses enfants à dialoguer avec leurs cauchemars. Le client en transe revient à son rêve/cauchemar, dialogue avec la figure menaçante, négocie un cadeau ou une transformation.",
  ["Cauchemar récurrent", "Phobie diffuse", "Travail créatif et symbolique", "Approche ethno-hypnotique"],
  ["Trauma sévère (préférer trauma complexe)"],
  "Processus de peur des Sénois",
  "60 min",
  colors.purple,
  "Retour au rêve + dialogue + cadeau + intégration.",
  "Étapes",
  [
    { label: "Récit du rêve/cauchemar", detail: "Le client raconte le rêve, la figure menaçante." },
    { label: "Mise en transe profonde", detail: "Erickson ou Elman, retour à l'espace onirique." },
    { label: "Retour à la scène", detail: "Le client revient dans le rêve, mais avec ses ressources adultes." },
    { label: "Confrontation à la figure", detail: "« Approche-la. Demande-lui : qui es-tu ? Que me veux-tu ? »" },
    { label: "Dialogue", detail: "La figure répond. Souvent, elle révèle une intention positive cachée." },
    { label: "Demande d'un cadeau", detail: "« Demande à cette figure de te donner un cadeau, un don. »" },
    { label: "Réception du cadeau", detail: "Symbole, qualité, ressource." },
    { label: "Pont sur le futur", detail: "Visualisation : le cauchemar revient, le client reconnaît la figure et son cadeau." },
  ],
  [
    { name: "Approche ethno-hypnotique", type: "Référence", icon: "🌏", desc: "Peuple Senoi (Malaisie)." },
    { name: "Dialogue avec la figure", type: "Technique", icon: "💬", desc: "Pas de fuite ni de combat." },
    { name: "Cadeau symbolique", type: "Ressource", icon: "🎁", desc: "Don de la figure." },
  ],
  [
    { val: "Senoi", label: "Origine", sub: "peuple Malaisie", color: colors.purple },
    { val: "60", label: "Minutes", sub: "séance complète", color: colors.gold },
  ],
  ["Mes cauchemars sont incontrôlables", "Si je leur parle, ce sera pire"]
);

export const praticienDetails: Record<number, ProtocolDetail> = {
  900: catalepsie,
  901: levitationMain,
  902: levitationBras,
  903: signaling,
  904: amnesie,
  905: sansContenu,
  906: postHypnotique,
  907: yesSet,
  908: tousPossibles,
  909: autorisation,
  910: dissociationDoubleLien,
  911: expressionsComposees,
  912: archetypes,
  913: formuleMagique,
  914: nettoyagePrintemps,
  915: transformationInstantanee,
  916: superObjectif,
  917: distorsionTemps,
  918: permission,
  919: augmentationEtat,
  920: ericksonRossi,
  921: regressionAge,
  922: traumaProcessus,
  923: ordalique,
  924: douleur,
  925: recadrageEnTranse,
  926: senois,
};
