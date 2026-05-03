export type SeleneDimension =
  | 'ESSENCE'
  | 'ALTRUISME'
  | 'ACCOMPLISSEMENT'
  | 'AUTHENTICITE'
  | 'ANALYSE'
  | 'LOYAUTE'
  | 'ENTHOUSIASME'
  | 'LEADERSHIP'
  | 'HARMONIE';

export interface SeleneQuestion {
  id: string;
  blockIndex: number;
  questionIndex: number;
  text: string;
  dimension: SeleneDimension;
  reversed: boolean;
}

export interface SeleneDimensionConfig {
  code: SeleneDimension;
  nom: string;
  sousNom: string;
  description: string;
  couleur: string;
  couleurLight: string;
  icone: string;
  motsClefs: string[];
}

export const SELENE_DIMENSIONS: SeleneDimensionConfig[] = [
  {
    code: 'ESSENCE',
    nom: 'ESSENCE',
    sousNom: 'Perfectionniste · Intégrité',
    description: 'Vous êtes guidé par un sens profond de l\'idéal et de l\'éthique. Votre quête de perfection et d\'intégrité oriente chacune de vos actions.',
    couleur: '#E8C547',
    couleurLight: '#FDF8E1',
    icone: 'Star',
    motsClefs: ['Perfectionnisme', 'Intégrité', 'Éthique', 'Idéal', 'Rigueur'],
  },
  {
    code: 'ALTRUISME',
    nom: 'ALTRUISME',
    sousNom: 'Aidant · Relationnel',
    description: 'Votre force réside dans votre capacité à ressentir et répondre aux besoins des autres. L\'aide et la relation humaine sont au cœur de votre identité.',
    couleur: '#E87A5D',
    couleurLight: '#FDF0ED',
    icone: 'Heart',
    motsClefs: ['Empathie', 'Bienveillance', 'Service', 'Connexion', 'Soutien'],
  },
  {
    code: 'ACCOMPLISSEMENT',
    nom: 'ACCOMPLISSEMENT',
    sousNom: 'Performeur · Réalisateur',
    description: 'Vous êtes orienté vers le succès et l\'efficacité. Votre capacité à vous adapter et à atteindre vos objectifs vous distingue.',
    couleur: '#5EA8E8',
    couleurLight: '#EDF5FD',
    icone: 'Trophy',
    motsClefs: ['Performance', 'Succès', 'Efficacité', 'Ambition', 'Résultats'],
  },
  {
    code: 'AUTHENTICITE',
    nom: 'AUTHENTICITÉ',
    sousNom: 'Individualiste · Créatif',
    description: 'Vous aspirez à l\'authenticité et à l\'expression unique de votre identité. Votre sensibilité et votre créativité sont vos dons les plus précieux.',
    couleur: '#9B6BCE',
    couleurLight: '#F5F0FD',
    icone: 'Palette',
    motsClefs: ['Créativité', 'Singularité', 'Sensibilité', 'Expression', 'Profondeur'],
  },
  {
    code: 'ANALYSE',
    nom: 'ANALYSE',
    sousNom: 'Observateur · Investigateur',
    description: 'Vous cherchez à comprendre le monde par l\'observation et l\'analyse. Votre intellect curieux accumule le savoir pour mieux agir.',
    couleur: '#47B8A0',
    couleurLight: '#E8F7F4',
    icone: 'Search',
    motsClefs: ['Curiosité', 'Observation', 'Savoir', 'Analyse', 'Discernement'],
  },
  {
    code: 'LOYAUTE',
    nom: 'LOYAUTÉ',
    sousNom: 'Loyal · Sécuritaire',
    description: 'Vous êtes profondément attaché à la sécurité et à la loyauté envers vos engagements. Votre vigilance protège votre entourage.',
    couleur: '#5B7FD4',
    couleurLight: '#EDF1FB',
    icone: 'Shield',
    motsClefs: ['Fidélité', 'Sécurité', 'Engagement', 'Vigilance', 'Confiance'],
  },
  {
    code: 'ENTHOUSIASME',
    nom: 'ENTHOUSIASME',
    sousNom: 'Enthousiaste · Épicurien',
    description: 'Votre énergie et votre positivité sont contagieuses. Vous cherchez constamment de nouvelles expériences et de nouvelles possibilités.',
    couleur: '#E8A247',
    couleurLight: '#FDF5E1',
    icone: 'Zap',
    motsClefs: ['Joie', 'Optimisme', 'Curiosité', 'Liberté', 'Aventure'],
  },
  {
    code: 'LEADERSHIP',
    nom: 'LEADERSHIP',
    sousNom: 'Leader · Protecteur',
    description: 'Vous exercez votre force pour protéger et guider ceux qui vous entourent. Votre courage et votre détermination inspirent les autres.',
    couleur: '#D45B5B',
    couleurLight: '#FBF0F0',
    icone: 'Crown',
    motsClefs: ['Force', 'Protection', 'Décision', 'Courage', 'Autorité'],
  },
  {
    code: 'HARMONIE',
    nom: 'HARMONIE',
    sousNom: 'Médiateur · Pacificateur',
    description: 'Vous recherchez la paix et l\'harmonie dans votre environnement. Votre capacité à voir tous les points de vue crée un équilibre précieux.',
    couleur: '#6BBF7A',
    couleurLight: '#EEF8F0',
    icone: 'Leaf',
    motsClefs: ['Paix', 'Équilibre', 'Médiation', 'Sérénité', 'Acceptation'],
  },
];

export const SELENE_QUESTIONS: SeleneQuestion[] = [
  // Bloc 0 — ESSENCE (questions SE001–SE013)
  { id: 'SE001', blockIndex: 0, questionIndex: 0, text: 'J\'ai des normes élevées pour moi-même et j\'essaie toujours de faire les choses correctement.', dimension: 'ESSENCE', reversed: false },
  { id: 'SE002', blockIndex: 0, questionIndex: 1, text: 'Je remarque facilement les erreurs et les imperfections dans mon travail ou celui des autres.', dimension: 'ESSENCE', reversed: false },
  { id: 'SE003', blockIndex: 0, questionIndex: 2, text: 'Je me sens souvent coupable lorsque je ne respecte pas mes propres standards.', dimension: 'ESSENCE', reversed: false },
  { id: 'SE004', blockIndex: 0, questionIndex: 3, text: 'L\'intégrité et l\'honnêteté sont des valeurs fondamentales dans ma façon de vivre.', dimension: 'ESSENCE', reversed: false },
  { id: 'SE005', blockIndex: 0, questionIndex: 4, text: 'Je suis exigeant(e) envers moi-même mais j\'apprends à accepter mes limites.', dimension: 'ESSENCE', reversed: false },
  { id: 'SE006', blockIndex: 0, questionIndex: 5, text: 'J\'ai tendance à critiquer ce qui n\'est pas fait selon les règles.', dimension: 'ESSENCE', reversed: false },
  { id: 'SE007', blockIndex: 0, questionIndex: 6, text: 'Je suis rarement satisfait(e) de mes propres accomplissements.', dimension: 'ESSENCE', reversed: false },
  { id: 'SE008', blockIndex: 0, questionIndex: 7, text: 'Je me fixe des objectifs très précis et m\'en veux quand je ne les atteins pas.', dimension: 'ESSENCE', reversed: false },
  { id: 'SE009', blockIndex: 0, questionIndex: 8, text: 'Je peux être impatient(e) face aux comportements peu éthiques autour de moi.', dimension: 'ESSENCE', reversed: false },
  { id: 'SE010', blockIndex: 0, questionIndex: 9, text: 'Je prends ma responsabilité très au sérieux, même dans les petites choses.', dimension: 'ESSENCE', reversed: false },
  { id: 'SE011', blockIndex: 0, questionIndex: 10, text: 'Je trouve difficile de déléguer car j\'ai peur que les choses soient mal faites.', dimension: 'ESSENCE', reversed: false },
  { id: 'SE012', blockIndex: 0, questionIndex: 11, text: 'Je ressens un fort sentiment de devoir moral dans mes actions quotidiennes.', dimension: 'ESSENCE', reversed: false },
  { id: 'SE013', blockIndex: 0, questionIndex: 12, text: 'Je suis naturellement orienté(e) vers la qualité plutôt que la quantité.', dimension: 'ESSENCE', reversed: false },

  // Bloc 1 — ALTRUISME (questions SE014–SE026)
  { id: 'SE014', blockIndex: 1, questionIndex: 0, text: 'Je ressens un besoin profond d\'aider les autres et de répondre à leurs besoins.', dimension: 'ALTRUISME', reversed: false },
  { id: 'SE015', blockIndex: 1, questionIndex: 1, text: 'Je suis très attentif(ve) aux émotions et aux états d\'âme de mon entourage.', dimension: 'ALTRUISME', reversed: false },
  { id: 'SE016', blockIndex: 1, questionIndex: 2, text: 'Il m\'arrive de négliger mes propres besoins pour mieux répondre à ceux des autres.', dimension: 'ALTRUISME', reversed: false },
  { id: 'SE017', blockIndex: 1, questionIndex: 3, text: 'Ma relation aux autres est une source importante de sens et de satisfaction.', dimension: 'ALTRUISME', reversed: false },
  { id: 'SE018', blockIndex: 1, questionIndex: 4, text: 'Je me sens utile seulement lorsque je contribue au bien-être de ceux qui m\'entourent.', dimension: 'ALTRUISME', reversed: false },
  { id: 'SE019', blockIndex: 1, questionIndex: 5, text: 'Je peux avoir du mal à dire non lorsque quelqu\'un demande mon aide.', dimension: 'ALTRUISME', reversed: false },
  { id: 'SE020', blockIndex: 1, questionIndex: 6, text: 'Je développe des liens affectifs forts et durables avec les personnes importantes pour moi.', dimension: 'ALTRUISME', reversed: false },
  { id: 'SE021', blockIndex: 1, questionIndex: 7, text: 'J\'aime me sentir indispensable pour ceux qui me sont proches.', dimension: 'ALTRUISME', reversed: false },
  { id: 'SE022', blockIndex: 1, questionIndex: 8, text: 'L\'empathie est l\'une de mes forces les plus naturelles.', dimension: 'ALTRUISME', reversed: false },
  { id: 'SE023', blockIndex: 1, questionIndex: 9, text: 'Je perçois facilement les non-dits et les besoins implicites des autres.', dimension: 'ALTRUISME', reversed: false },
  { id: 'SE024', blockIndex: 1, questionIndex: 10, text: 'Je me sens valorisé(e) lorsque l\'on me remercie ou reconnaît mon aide.', dimension: 'ALTRUISME', reversed: false },
  { id: 'SE025', blockIndex: 1, questionIndex: 11, text: 'Je peux être blessé(e) lorsque mon aide n\'est pas appréciée à sa juste valeur.', dimension: 'ALTRUISME', reversed: false },
  { id: 'SE026', blockIndex: 1, questionIndex: 12, text: 'Je trouve facilement les mots pour réconforter et soutenir quelqu\'un en difficulté.', dimension: 'ALTRUISME', reversed: false },

  // Bloc 2 — ACCOMPLISSEMENT (questions SE027–SE039)
  { id: 'SE027', blockIndex: 2, questionIndex: 0, text: 'Je suis naturellement orienté(e) vers la réussite et la performance.', dimension: 'ACCOMPLISSEMENT', reversed: false },
  { id: 'SE028', blockIndex: 2, questionIndex: 1, text: 'J\'adapte mon image et mon comportement selon les attentes et le contexte.', dimension: 'ACCOMPLISSEMENT', reversed: false },
  { id: 'SE029', blockIndex: 2, questionIndex: 2, text: 'J\'ai une grande capacité à identifier les objectifs prioritaires et à les atteindre.', dimension: 'ACCOMPLISSEMENT', reversed: false },
  { id: 'SE030', blockIndex: 2, questionIndex: 3, text: 'Le succès et la reconnaissance sont des moteurs importants dans ma vie.', dimension: 'ACCOMPLISSEMENT', reversed: false },
  { id: 'SE031', blockIndex: 2, questionIndex: 4, text: 'Je suis efficace et productif(ve) dans la plupart des situations.', dimension: 'ACCOMPLISSEMENT', reversed: false },
  { id: 'SE032', blockIndex: 2, questionIndex: 5, text: 'Je suis compétitif(ve) et j\'aime surpasser mes propres records.', dimension: 'ACCOMPLISSEMENT', reversed: false },
  { id: 'SE033', blockIndex: 2, questionIndex: 6, text: 'L\'image que je donne aux autres a de l\'importance pour moi.', dimension: 'ACCOMPLISSEMENT', reversed: false },
  { id: 'SE034', blockIndex: 2, questionIndex: 7, text: 'Je peux parfois sacrifier l\'authenticité au profit de l\'efficacité.', dimension: 'ACCOMPLISSEMENT', reversed: false },
  { id: 'SE035', blockIndex: 2, questionIndex: 8, text: 'J\'ai une vision claire de ce que je veux accomplir à court et long terme.', dimension: 'ACCOMPLISSEMENT', reversed: false },
  { id: 'SE036', blockIndex: 2, questionIndex: 9, text: 'Je suis à l\'aise pour présenter mes réussites et mes compétences.', dimension: 'ACCOMPLISSEMENT', reversed: false },
  { id: 'SE037', blockIndex: 2, questionIndex: 10, text: 'L\'échec m\'affecte profondément mais me motive à m\'améliorer.', dimension: 'ACCOMPLISSEMENT', reversed: false },
  { id: 'SE038', blockIndex: 2, questionIndex: 11, text: 'J\'ai souvent plusieurs projets en parallèle pour maximiser mon potentiel.', dimension: 'ACCOMPLISSEMENT', reversed: false },
  { id: 'SE039', blockIndex: 2, questionIndex: 12, text: 'Je mesure ma valeur par mes réalisations et mon impact visible.', dimension: 'ACCOMPLISSEMENT', reversed: false },

  // Bloc 3 — AUTHENTICITE (questions SE040–SE052)
  { id: 'SE040', blockIndex: 3, questionIndex: 0, text: 'Je vis souvent des émotions intenses que je peine à partager avec les autres.', dimension: 'AUTHENTICITE', reversed: false },
  { id: 'SE041', blockIndex: 3, questionIndex: 1, text: 'Je me sens différent(e) des autres et cherche à comprendre ce qui me rend unique.', dimension: 'AUTHENTICITE', reversed: false },
  { id: 'SE042', blockIndex: 3, questionIndex: 2, text: 'L\'expression artistique ou créative est une nécessité pour moi.', dimension: 'AUTHENTICITE', reversed: false },
  { id: 'SE043', blockIndex: 3, questionIndex: 3, text: 'Je suis particulièrement sensible à la beauté, à l\'esthétique et à l\'authenticité.', dimension: 'AUTHENTICITE', reversed: false },
  { id: 'SE044', blockIndex: 3, questionIndex: 4, text: 'Je peux me sentir nostalgique ou mélancolique sans raison apparente.', dimension: 'AUTHENTICITE', reversed: false },
  { id: 'SE045', blockIndex: 3, questionIndex: 5, text: 'Je recherche une connexion profonde et authentique dans mes relations.', dimension: 'AUTHENTICITE', reversed: false },
  { id: 'SE046', blockIndex: 3, questionIndex: 6, text: 'Je souffre parfois d\'un sentiment d\'incomplétude ou de manque.', dimension: 'AUTHENTICITE', reversed: false },
  { id: 'SE047', blockIndex: 3, questionIndex: 7, text: 'Mon monde intérieur est riche et complexe, avec une vie émotionnelle très développée.', dimension: 'AUTHENTICITE', reversed: false },
  { id: 'SE048', blockIndex: 3, questionIndex: 8, text: 'J\'ai du mal à me conformer à ce que la société attend de moi.', dimension: 'AUTHENTICITE', reversed: false },
  { id: 'SE049', blockIndex: 3, questionIndex: 9, text: 'Je valorise l\'originalité et l\'expression personnelle par-dessus tout.', dimension: 'AUTHENTICITE', reversed: false },
  { id: 'SE050', blockIndex: 3, questionIndex: 10, text: 'Les convenances et les normes sociales me semblent souvent contraignantes.', dimension: 'AUTHENTICITE', reversed: false },
  { id: 'SE051', blockIndex: 3, questionIndex: 11, text: 'J\'ai besoin que les autres reconnaissent et comprennent ma singularité.', dimension: 'AUTHENTICITE', reversed: false },
  { id: 'SE052', blockIndex: 3, questionIndex: 12, text: 'Je suis profondément touché(e) par la musique, l\'art, la littérature et la nature.', dimension: 'AUTHENTICITE', reversed: false },

  // Bloc 4 — ANALYSE (questions SE053–SE065)
  { id: 'SE053', blockIndex: 4, questionIndex: 0, text: 'J\'ai soif de savoir et je cherche constamment à comprendre comment les choses fonctionnent.', dimension: 'ANALYSE', reversed: false },
  { id: 'SE054', blockIndex: 4, questionIndex: 1, text: 'J\'observe et analyse les situations avant d\'agir ou de prendre position.', dimension: 'ANALYSE', reversed: false },
  { id: 'SE055', blockIndex: 4, questionIndex: 2, text: 'J\'ai besoin de temps seul(e) pour recharger mes énergies et réfléchir.', dimension: 'ANALYSE', reversed: false },
  { id: 'SE056', blockIndex: 4, questionIndex: 3, text: 'Je préfère maîtriser un domaine en profondeur plutôt que de rester en surface.', dimension: 'ANALYSE', reversed: false },
  { id: 'SE057', blockIndex: 4, questionIndex: 4, text: 'Je me sens parfois envahi(e) par les demandes émotionnelles des autres.', dimension: 'ANALYSE', reversed: false },
  { id: 'SE058', blockIndex: 4, questionIndex: 5, text: 'Je protège mon espace personnel et mes ressources avec soin.', dimension: 'ANALYSE', reversed: false },
  { id: 'SE059', blockIndex: 4, questionIndex: 6, text: 'Les discussions intellectuelles et les débats d\'idées me stimulent profondément.', dimension: 'ANALYSE', reversed: false },
  { id: 'SE060', blockIndex: 4, questionIndex: 7, text: 'Je me méfie de mes propres émotions et préfère raisonner de façon objective.', dimension: 'ANALYSE', reversed: false },
  { id: 'SE061', blockIndex: 4, questionIndex: 8, text: 'Je suis à l\'aise dans la complexité et les problèmes qui demandent une réflexion approfondie.', dimension: 'ANALYSE', reversed: false },
  { id: 'SE062', blockIndex: 4, questionIndex: 9, text: 'Je préfère observer depuis les coulisses plutôt que d\'être au centre de l\'action.', dimension: 'ANALYSE', reversed: false },
  { id: 'SE063', blockIndex: 4, questionIndex: 10, text: 'Je peux paraître distant(e) ou froid(e) alors que je suis simplement dans ma réflexion.', dimension: 'ANALYSE', reversed: false },
  { id: 'SE064', blockIndex: 4, questionIndex: 11, text: 'J\'accumule des connaissances avant de me sentir prêt(e) à agir.', dimension: 'ANALYSE', reversed: false },
  { id: 'SE065', blockIndex: 4, questionIndex: 12, text: 'La précision et la logique sont des qualités que j\'apprécie particulièrement.', dimension: 'ANALYSE', reversed: false },

  // Bloc 5 — LOYAUTE (questions SE066–SE078)
  { id: 'SE066', blockIndex: 5, questionIndex: 0, text: 'Je suis très attentif(ve) aux risques et aux dangers potentiels dans mon environnement.', dimension: 'LOYAUTE', reversed: false },
  { id: 'SE067', blockIndex: 5, questionIndex: 1, text: 'La loyauté et la fidélité sont des valeurs centrales dans ma vie.', dimension: 'LOYAUTE', reversed: false },
  { id: 'SE068', blockIndex: 5, questionIndex: 2, text: 'J\'ai tendance à remettre en question les autorités et les institutions.', dimension: 'LOYAUTE', reversed: false },
  { id: 'SE069', blockIndex: 5, questionIndex: 3, text: 'Je me sens plus en sécurité lorsque j\'ai des règles et des cadres clairs.', dimension: 'LOYAUTE', reversed: false },
  { id: 'SE070', blockIndex: 5, questionIndex: 4, text: 'Je suis une personne de confiance sur laquelle on peut compter en toutes circonstances.', dimension: 'LOYAUTE', reversed: false },
  { id: 'SE071', blockIndex: 5, questionIndex: 5, text: 'Je peux anticiper les problèmes avant qu\'ils ne surviennent.', dimension: 'LOYAUTE', reversed: false },
  { id: 'SE072', blockIndex: 5, questionIndex: 6, text: 'J\'ai parfois peur de prendre des décisions importantes sans soutien.', dimension: 'LOYAUTE', reversed: false },
  { id: 'SE073', blockIndex: 5, questionIndex: 7, text: 'Je suis profondément dévoué(e) aux personnes et aux causes en lesquelles je crois.', dimension: 'LOYAUTE', reversed: false },
  { id: 'SE074', blockIndex: 5, questionIndex: 8, text: 'L\'incertitude et l\'ambiguïté me génèrent souvent de l\'anxiété.', dimension: 'LOYAUTE', reversed: false },
  { id: 'SE075', blockIndex: 5, questionIndex: 9, text: 'Je protège naturellement mon groupe et ceux en qui j\'ai confiance.', dimension: 'LOYAUTE', reversed: false },
  { id: 'SE076', blockIndex: 5, questionIndex: 10, text: 'Je remets parfois en question mes propres décisions, même après les avoir prises.', dimension: 'LOYAUTE', reversed: false },
  { id: 'SE077', blockIndex: 5, questionIndex: 11, text: 'Je suis sensible aux menaces potentielles, même celles que les autres ne perçoivent pas.', dimension: 'LOYAUTE', reversed: false },
  { id: 'SE078', blockIndex: 5, questionIndex: 12, text: 'La trahison est l\'une des choses que j\'accepte le plus difficilement.', dimension: 'LOYAUTE', reversed: false },

  // Bloc 6 — ENTHOUSIASME (questions SE079–SE091)
  { id: 'SE079', blockIndex: 6, questionIndex: 0, text: 'Je suis naturellement optimiste et je vois les possibilités là où d\'autres voient des obstacles.', dimension: 'ENTHOUSIASME', reversed: false },
  { id: 'SE080', blockIndex: 6, questionIndex: 1, text: 'Je cherche constamment de nouvelles expériences, de nouvelles idées et de nouvelles aventures.', dimension: 'ENTHOUSIASME', reversed: false },
  { id: 'SE081', blockIndex: 6, questionIndex: 2, text: 'J\'ai du mal à rester concentré(e) sur une seule chose lorsque d\'autres opportunités m\'attirent.', dimension: 'ENTHOUSIASME', reversed: false },
  { id: 'SE082', blockIndex: 6, questionIndex: 3, text: 'La spontanéité et la flexibilité sont des qualités que j\'apprécie en moi.', dimension: 'ENTHOUSIASME', reversed: false },
  { id: 'SE083', blockIndex: 6, questionIndex: 4, text: 'Je préfère éviter la douleur et les émotions négatives en me tournant vers des activités positives.', dimension: 'ENTHOUSIASME', reversed: false },
  { id: 'SE084', blockIndex: 6, questionIndex: 5, text: 'Ma vivacité d\'esprit et mon enthousiasme sont souvent contagieux pour mon entourage.', dimension: 'ENTHOUSIASME', reversed: false },
  { id: 'SE085', blockIndex: 6, questionIndex: 6, text: 'J\'ai tendance à commencer beaucoup de projets mais à avoir du mal à les terminer tous.', dimension: 'ENTHOUSIASME', reversed: false },
  { id: 'SE086', blockIndex: 6, questionIndex: 7, text: 'Je relie facilement des idées et des domaines qui semblent sans rapport les uns avec les autres.', dimension: 'ENTHOUSIASME', reversed: false },
  { id: 'SE087', blockIndex: 6, questionIndex: 8, text: 'La routine et la répétition me pèsent rapidement.', dimension: 'ENTHOUSIASME', reversed: false },
  { id: 'SE088', blockIndex: 6, questionIndex: 9, text: 'Je suis une source d\'idées créatives et j\'aime brainstormer avec d\'autres.', dimension: 'ENTHOUSIASME', reversed: false },
  { id: 'SE089', blockIndex: 6, questionIndex: 10, text: 'Je cherche à maintenir un niveau d\'énergie et de plaisir élevé dans mes activités quotidiennes.', dimension: 'ENTHOUSIASME', reversed: false },
  { id: 'SE090', blockIndex: 6, questionIndex: 11, text: 'J\'aime planifier des activités et des voyages qui m\'apporteront de la joie et de la nouveauté.', dimension: 'ENTHOUSIASME', reversed: false },
  { id: 'SE091', blockIndex: 6, questionIndex: 12, text: 'Je peux parfois agir de manière impulsive sous l\'influence de mon enthousiasme.', dimension: 'ENTHOUSIASME', reversed: false },

  // Bloc 7 — LEADERSHIP (questions SE092–SE104)
  { id: 'SE092', blockIndex: 7, questionIndex: 0, text: 'Je n\'hésite pas à prendre le contrôle dans les situations qui le requièrent.', dimension: 'LEADERSHIP', reversed: false },
  { id: 'SE093', blockIndex: 7, questionIndex: 1, text: 'Je suis courageux(se) et j\'affronte les défis de front.', dimension: 'LEADERSHIP', reversed: false },
  { id: 'SE094', blockIndex: 7, questionIndex: 2, text: 'Je protège naturellement les personnes vulnérables ou en difficulté autour de moi.', dimension: 'LEADERSHIP', reversed: false },
  { id: 'SE095', blockIndex: 7, questionIndex: 3, text: 'J\'ai du mal à accepter d\'être dirigé(e) par quelqu\'un que je juge incompétent.', dimension: 'LEADERSHIP', reversed: false },
  { id: 'SE096', blockIndex: 7, questionIndex: 4, text: 'Mon intensité et mon énergie peuvent parfois dépasser les autres.', dimension: 'LEADERSHIP', reversed: false },
  { id: 'SE097', blockIndex: 7, questionIndex: 5, text: 'Je prends rapidement des décisions en situation de pression ou de crise.', dimension: 'LEADERSHIP', reversed: false },
  { id: 'SE098', blockIndex: 7, questionIndex: 6, text: 'Je suis direct(e) dans ma communication, parfois au détriment de la diplomatie.', dimension: 'LEADERSHIP', reversed: false },
  { id: 'SE099', blockIndex: 7, questionIndex: 7, text: 'La vulnérabilité est quelque chose que j\'ai du mal à montrer aux autres.', dimension: 'LEADERSHIP', reversed: false },
  { id: 'SE100', blockIndex: 7, questionIndex: 8, text: 'J\'ai un fort sens de la justice et je ne supporte pas l\'injustice ou l\'oppression.', dimension: 'LEADERSHIP', reversed: false },
  { id: 'SE101', blockIndex: 7, questionIndex: 9, text: 'Je suis capable de mobiliser et d\'inspirer les autres autour d\'une vision commune.', dimension: 'LEADERSHIP', reversed: false },
  { id: 'SE102', blockIndex: 7, questionIndex: 10, text: 'J\'aime avoir le dernier mot et prendre les décisions finales.', dimension: 'LEADERSHIP', reversed: false },
  { id: 'SE103', blockIndex: 7, questionIndex: 11, text: 'Mon besoin d\'autonomie est très fort et je supporte mal qu\'on me contrôle.', dimension: 'LEADERSHIP', reversed: false },
  { id: 'SE104', blockIndex: 7, questionIndex: 12, text: 'Lorsque je crois en quelque chose, je suis prêt(e) à me battre pour le défendre.', dimension: 'LEADERSHIP', reversed: false },

  // Bloc 8 — HARMONIE (questions SE105–SE117)
  { id: 'SE105', blockIndex: 8, questionIndex: 0, text: 'Je cherche naturellement à maintenir la paix et l\'harmonie dans mes relations.', dimension: 'HARMONIE', reversed: false },
  { id: 'SE106', blockIndex: 8, questionIndex: 1, text: 'J\'ai du mal à exprimer mes désaccords de peur de blesser ou de provoquer un conflit.', dimension: 'HARMONIE', reversed: false },
  { id: 'SE107', blockIndex: 8, questionIndex: 2, text: 'Je peux facilement adopter le point de vue des autres et comprendre différentes perspectives.', dimension: 'HARMONIE', reversed: false },
  { id: 'SE108', blockIndex: 8, questionIndex: 3, text: 'Ma présence calme et rassurante est souvent remarquée par mon entourage.', dimension: 'HARMONIE', reversed: false },
  { id: 'SE109', blockIndex: 8, questionIndex: 4, text: 'Je m\'adapte facilement à ce que les autres souhaitent faire ou décider.', dimension: 'HARMONIE', reversed: false },
  { id: 'SE110', blockIndex: 8, questionIndex: 5, text: 'Je peux parfois perdre de vue mes propres désirs en me concentrant sur ceux des autres.', dimension: 'HARMONIE', reversed: false },
  { id: 'SE111', blockIndex: 8, questionIndex: 6, text: 'L\'environnement dans lequel je vis et travaille a un impact important sur mon bien-être.', dimension: 'HARMONIE', reversed: false },
  { id: 'SE112', blockIndex: 8, questionIndex: 7, text: 'Je suis un médiateur(trice) naturel(le) dans les conflits entre personnes.', dimension: 'HARMONIE', reversed: false },
  { id: 'SE113', blockIndex: 8, questionIndex: 8, text: 'Je peux me laisser distraire et procrastiner pour éviter les décisions difficiles.', dimension: 'HARMONIE', reversed: false },
  { id: 'SE114', blockIndex: 8, questionIndex: 9, text: 'La connexion avec la nature, les animaux ou des activités contemplatives me ressource.', dimension: 'HARMONIE', reversed: false },
  { id: 'SE115', blockIndex: 8, questionIndex: 10, text: 'J\'ai parfois du mal à identifier clairement ce que je veux ou ce qui m\'importe vraiment.', dimension: 'HARMONIE', reversed: false },
  { id: 'SE116', blockIndex: 8, questionIndex: 11, text: 'Je suis très sensible aux tensions et aux conflits dans mon environnement.', dimension: 'HARMONIE', reversed: false },
  { id: 'SE117', blockIndex: 8, questionIndex: 12, text: 'Je crois profondément à la capacité de chacun à trouver sa propre voie.', dimension: 'HARMONIE', reversed: false },
];

export const SELENE_BLOCKS = SELENE_DIMENSIONS.map((dim, i) => ({
  index: i,
  dimension: dim,
  questions: SELENE_QUESTIONS.filter(q => q.blockIndex === i),
}));

export function getDimensionConfig(code: SeleneDimension): SeleneDimensionConfig {
  return SELENE_DIMENSIONS.find(d => d.code === code)!;
}
