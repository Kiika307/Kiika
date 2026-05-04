import type { ProtocolDetail } from "./types";

/** Big Book of NLP — Objectifs & motivation, États & ancrage, Communication & rapport */

const p_100: ProtocolDetail = {
  protocolId: 100, efficacite: "BBNLP", efficaciteSub: "Objectifs & motivation",
  description: "Formuler un objectif clair et écologique, aligné avec l'ensemble du système.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur objectifs & motivation"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Well-Defined Outcomes", icon: "◑",
    duration: "45-60 min", color: "#C8A030", recommended: true,
    description: "Protocole BBNLP — " + "Well-Defined Outcomes" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Formuler un objectif clair et écologique, aligné avec l'ensemble du système." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Well-Defined Outcomes » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Critères SMART", type: "Cadre", icon: "🎯", desc: "Objectif structuré." },
    { name: "Cadre objectif EP/ED/ECO", type: "Modèle", icon: "🗺", desc: "État présent / désiré / optimal." },
    { name: "Vérification écologique", type: "Sécurité", icon: "♻", desc: "Compatibilité globale." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Well-Defined Outcomes » sur moi", "Les techniques PNL sont théoriques"],
};

const p_101: ProtocolDetail = {
  protocolId: 101, efficacite: "BBNLP", efficaciteSub: "Objectifs & motivation",
  description: "Structurer un but sous forme d'« état désiré » émotionnel et physique.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur objectifs & motivation"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "E & E.P. Formation Pattern", icon: "◑",
    duration: "45-60 min", color: "#C8A030", recommended: true,
    description: "Protocole BBNLP — " + "E & E.P. Formation Pattern" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Structurer un but sous forme d'« état désiré » émotionnel et physique." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « E & E.P. Formation Pattern » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Critères SMART", type: "Cadre", icon: "🎯", desc: "Objectif structuré." },
    { name: "Cadre objectif EP/ED/ECO", type: "Modèle", icon: "🗺", desc: "État présent / désiré / optimal." },
    { name: "Vérification écologique", type: "Sécurité", icon: "♻", desc: "Compatibilité globale." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « E & E.P. Formation Pattern » sur moi", "Les techniques PNL sont théoriques"],
};

const p_102: ProtocolDetail = {
  protocolId: 102, efficacite: "BBNLP", efficaciteSub: "Objectifs & motivation",
  description: "Installer des croyances facilitantes au service d'un objectif.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur objectifs & motivation"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Advantageous NLP Beliefs", icon: "◑",
    duration: "45-60 min", color: "#C8A030", recommended: true,
    description: "Protocole BBNLP — " + "Advantageous NLP Beliefs" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Installer des croyances facilitantes au service d'un objectif." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Advantageous NLP Beliefs » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Critères SMART", type: "Cadre", icon: "🎯", desc: "Objectif structuré." },
    { name: "Cadre objectif EP/ED/ECO", type: "Modèle", icon: "🗺", desc: "État présent / désiré / optimal." },
    { name: "Vérification écologique", type: "Sécurité", icon: "♻", desc: "Compatibilité globale." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Advantageous NLP Beliefs » sur moi", "Les techniques PNL sont théoriques"],
};

const p_103: ProtocolDetail = {
  protocolId: 103, efficacite: "BBNLP", efficaciteSub: "Objectifs & motivation",
  description: "Pré-programmer le succès en orientant les attentes vers le résultat désiré.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur objectifs & motivation"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Creating Positive Expectations", icon: "◑",
    duration: "45-60 min", color: "#C8A030", recommended: true,
    description: "Protocole BBNLP — " + "Creating Positive Expectations" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Pré-programmer le succès en orientant les attentes vers le résultat désiré." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Creating Positive Expectations » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Critères SMART", type: "Cadre", icon: "🎯", desc: "Objectif structuré." },
    { name: "Cadre objectif EP/ED/ECO", type: "Modèle", icon: "🗺", desc: "État présent / désiré / optimal." },
    { name: "Vérification écologique", type: "Sécurité", icon: "♻", desc: "Compatibilité globale." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Creating Positive Expectations » sur moi", "Les techniques PNL sont théoriques"],
};

const p_104: ProtocolDetail = {
  protocolId: 104, efficacite: "BBNLP", efficaciteSub: "Objectifs & motivation",
  description: "Déclencher l'élan et l'envie d'agir vers un but.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur objectifs & motivation"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Basic Motivation Pattern", icon: "◑",
    duration: "45-60 min", color: "#C8A030", recommended: true,
    description: "Protocole BBNLP — " + "Basic Motivation Pattern" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Déclencher l'élan et l'envie d'agir vers un but." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Basic Motivation Pattern » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Critères SMART", type: "Cadre", icon: "🎯", desc: "Objectif structuré." },
    { name: "Cadre objectif EP/ED/ECO", type: "Modèle", icon: "🗺", desc: "État présent / désiré / optimal." },
    { name: "Vérification écologique", type: "Sécurité", icon: "♻", desc: "Compatibilité globale." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Basic Motivation Pattern » sur moi", "Les techniques PNL sont théoriques"],
};

const p_105: ProtocolDetail = {
  protocolId: 105, efficacite: "BBNLP", efficaciteSub: "Objectifs & motivation",
  description: "Identifier les valeurs profondes qui servent d'ancres motivationnelles.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur objectifs & motivation"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Honored Values Elicitation", icon: "◑",
    duration: "45-60 min", color: "#C8A030", recommended: true,
    description: "Protocole BBNLP — " + "Honored Values Elicitation" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Identifier les valeurs profondes qui servent d'ancres motivationnelles." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Honored Values Elicitation » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Critères SMART", type: "Cadre", icon: "🎯", desc: "Objectif structuré." },
    { name: "Cadre objectif EP/ED/ECO", type: "Modèle", icon: "🗺", desc: "État présent / désiré / optimal." },
    { name: "Vérification écologique", type: "Sécurité", icon: "♻", desc: "Compatibilité globale." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Honored Values Elicitation » sur moi", "Les techniques PNL sont théoriques"],
};

const p_106: ProtocolDetail = {
  protocolId: 106, efficacite: "BBNLP", efficaciteSub: "Objectifs & motivation",
  description: "Hiérarchiser les valeurs pour arbitrer les priorités de vie.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur objectifs & motivation"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Values Hierarchy Identification", icon: "◑",
    duration: "45-60 min", color: "#C8A030", recommended: true,
    description: "Protocole BBNLP — " + "Values Hierarchy Identification" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Hiérarchiser les valeurs pour arbitrer les priorités de vie." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Values Hierarchy Identification » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Critères SMART", type: "Cadre", icon: "🎯", desc: "Objectif structuré." },
    { name: "Cadre objectif EP/ED/ECO", type: "Modèle", icon: "🗺", desc: "État présent / désiré / optimal." },
    { name: "Vérification écologique", type: "Sécurité", icon: "♻", desc: "Compatibilité globale." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Values Hierarchy Identification » sur moi", "Les techniques PNL sont théoriques"],
};

const p_107: ProtocolDetail = {
  protocolId: 107, efficacite: "BBNLP", efficaciteSub: "Objectifs & motivation",
  description: "Verrouiller l'engagement envers un objectif.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur objectifs & motivation"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Commitment", icon: "◑",
    duration: "45-60 min", color: "#C8A030", recommended: true,
    description: "Protocole BBNLP — " + "Commitment" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Verrouiller l'engagement envers un objectif." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Commitment » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Critères SMART", type: "Cadre", icon: "🎯", desc: "Objectif structuré." },
    { name: "Cadre objectif EP/ED/ECO", type: "Modèle", icon: "🗺", desc: "État présent / désiré / optimal." },
    { name: "Vérification écologique", type: "Sécurité", icon: "♻", desc: "Compatibilité globale." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Commitment » sur moi", "Les techniques PNL sont théoriques"],
};

const p_108: ProtocolDetail = {
  protocolId: 108, efficacite: "BBNLP", efficaciteSub: "Objectifs & motivation",
  description: "Alimenter la curiosité comme moteur de progression continue.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur objectifs & motivation"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Curiosity Enhancement", icon: "◑",
    duration: "45-60 min", color: "#C8A030", recommended: true,
    description: "Protocole BBNLP — " + "Curiosity Enhancement" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Alimenter la curiosité comme moteur de progression continue." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Curiosity Enhancement » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Critères SMART", type: "Cadre", icon: "🎯", desc: "Objectif structuré." },
    { name: "Cadre objectif EP/ED/ECO", type: "Modèle", icon: "🗺", desc: "État présent / désiré / optimal." },
    { name: "Vérification écologique", type: "Sécurité", icon: "♻", desc: "Compatibilité globale." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Curiosity Enhancement » sur moi", "Les techniques PNL sont théoriques"],
};

const p_109: ProtocolDetail = {
  protocolId: 109, efficacite: "BBNLP", efficaciteSub: "Objectifs & motivation",
  description: "Donner du sens à l'action via le « pour quoi » et la contribution.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur objectifs & motivation"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Positive Contribution", icon: "◑",
    duration: "45-60 min", color: "#C8A030", recommended: true,
    description: "Protocole BBNLP — " + "Positive Contribution" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Donner du sens à l'action via le « pour quoi » et la contribution." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Positive Contribution » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Critères SMART", type: "Cadre", icon: "🎯", desc: "Objectif structuré." },
    { name: "Cadre objectif EP/ED/ECO", type: "Modèle", icon: "🗺", desc: "État présent / désiré / optimal." },
    { name: "Vérification écologique", type: "Sécurité", icon: "♻", desc: "Compatibilité globale." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Positive Contribution » sur moi", "Les techniques PNL sont théoriques"],
};

const p_110: ProtocolDetail = {
  protocolId: 110, efficacite: "BBNLP", efficaciteSub: "Objectifs & motivation",
  description: "Construire la légitimité intérieure et le sentiment de mérite.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur objectifs & motivation"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Positive Personal Significance", icon: "◑",
    duration: "45-60 min", color: "#C8A030", recommended: true,
    description: "Protocole BBNLP — " + "Positive Personal Significance" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Construire la légitimité intérieure et le sentiment de mérite." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Positive Personal Significance » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Critères SMART", type: "Cadre", icon: "🎯", desc: "Objectif structuré." },
    { name: "Cadre objectif EP/ED/ECO", type: "Modèle", icon: "🗺", desc: "État présent / désiré / optimal." },
    { name: "Vérification écologique", type: "Sécurité", icon: "♻", desc: "Compatibilité globale." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Positive Personal Significance » sur moi", "Les techniques PNL sont théoriques"],
};

const p_120: ProtocolDetail = {
  protocolId: 120, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Créer un déclencheur conditionné d'un état ressource.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Anchoring", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Anchoring" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Créer un déclencheur conditionné d'un état ressource." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Anchoring » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Anchoring » sur moi", "Les techniques PNL sont théoriques"],
};

const p_121: ProtocolDetail = {
  protocolId: 121, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Permettre au client d'activer seul un ancrage pré-installé.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Self Anchoring", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Self Anchoring" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Permettre au client d'activer seul un ancrage pré-installé." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Self Anchoring » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Self Anchoring » sur moi", "Les techniques PNL sont théoriques"],
};

const p_122: ProtocolDetail = {
  protocolId: 122, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Neutraliser une ancre négative par superposition d'une ancre positive.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Collapsing Anchors", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Collapsing Anchors" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Neutraliser une ancre négative par superposition d'une ancre positive." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Collapsing Anchors » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Collapsing Anchors » sur moi", "Les techniques PNL sont théoriques"],
};

const p_123: ProtocolDetail = {
  protocolId: 123, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Construire une séquence d'états progressive vers l'état cible.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Chaining States", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Chaining States" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Construire une séquence d'états progressive vers l'état cible." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Chaining States » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Chaining States » sur moi", "Les techniques PNL sont théoriques"],
};

const p_124: ProtocolDetail = {
  protocolId: 124, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Amener rapidement le client dans un état précis.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "State Induction", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "State Induction" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Amener rapidement le client dans un état précis." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « State Induction » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « State Induction » sur moi", "Les techniques PNL sont théoriques"],
};

const p_125: ProtocolDetail = {
  protocolId: 125, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Aller chercher dans le passé une ressource interne pour la mobiliser.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Accessing Resourceful States", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Accessing Resourceful States" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Aller chercher dans le passé une ressource interne pour la mobiliser." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Accessing Resourceful States » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Accessing Resourceful States » sur moi", "Les techniques PNL sont théoriques"],
};

const p_126: ProtocolDetail = {
  protocolId: 126, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Casser brutalement un état négatif par rupture de pattern.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Physiomental State Interruption", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Physiomental State Interruption" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Casser brutalement un état négatif par rupture de pattern." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Physiomental State Interruption » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Physiomental State Interruption » sur moi", "Les techniques PNL sont théoriques"],
};

const p_127: ProtocolDetail = {
  protocolId: 127, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Variation kinesthésique du Swish pour basculer un état corporel.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Kinesthetic Swish Pattern", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Kinesthetic Swish Pattern" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Variation kinesthésique du Swish pour basculer un état corporel." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Kinesthetic Swish Pattern » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Kinesthetic Swish Pattern » sur moi", "Les techniques PNL sont théoriques"],
};

const p_128: ProtocolDetail = {
  protocolId: 128, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Cercle au sol qui ancre un état d'excellence accessible à la demande.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Circle of Excellence", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Circle of Excellence" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Cercle au sol qui ancre un état d'excellence accessible à la demande." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Circle of Excellence » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Circle of Excellence » sur moi", "Les techniques PNL sont théoriques"],
};

const p_129: ProtocolDetail = {
  protocolId: 129, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Constituer une banque interne de ressources mobilisables.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Collecting Resources", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Collecting Resources" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Constituer une banque interne de ressources mobilisables." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Collecting Resources » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Collecting Resources » sur moi", "Les techniques PNL sont théoriques"],
};

const p_130: ProtocolDetail = {
  protocolId: 130, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Accès à l'introspection et au temps intérieur de récupération.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Downtime", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Downtime" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Accès à l'introspection et au temps intérieur de récupération." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Downtime » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Downtime » sur moi", "Les techniques PNL sont théoriques"],
};

const p_131: ProtocolDetail = {
  protocolId: 131, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Lire les réponses non-conscientes (idéomoteur, micro-mouvements).",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Eliciting Subconscious Responses", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Eliciting Subconscious Responses" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Lire les réponses non-conscientes (idéomoteur, micro-mouvements)." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Eliciting Subconscious Responses » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Eliciting Subconscious Responses » sur moi", "Les techniques PNL sont théoriques"],
};

const p_132: ProtocolDetail = {
  protocolId: 132, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Transférer les qualités d'une expérience à une autre via les sous-modalités.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Submodality Overlapping", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Submodality Overlapping" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Transférer les qualités d'une expérience à une autre via les sous-modalités." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Submodality Overlapping » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Submodality Overlapping » sur moi", "Les techniques PNL sont théoriques"],
};

const p_133: ProtocolDetail = {
  protocolId: 133, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Calibrer les seuils de déclenchement aux stimuli externes.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "External Stimulus Threshold", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "External Stimulus Threshold" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Calibrer les seuils de déclenchement aux stimuli externes." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « External Stimulus Threshold » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « External Stimulus Threshold » sur moi", "Les techniques PNL sont théoriques"],
};

const p_134: ProtocolDetail = {
  protocolId: 134, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Développer la conscience en temps réel de son propre état.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "State Of Consciousness Awareness", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "State Of Consciousness Awareness" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Développer la conscience en temps réel de son propre état." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « State Of Consciousness Awareness » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « State Of Consciousness Awareness » sur moi", "Les techniques PNL sont théoriques"],
};

const p_135: ProtocolDetail = {
  protocolId: 135, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Concevoir un Swish sur mesure pour un comportement spécifique.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Pragmagraphic Swish Design", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Pragmagraphic Swish Design" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Concevoir un Swish sur mesure pour un comportement spécifique." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Pragmagraphic Swish Design » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Pragmagraphic Swish Design » sur moi", "Les techniques PNL sont théoriques"],
};

const p_136: ProtocolDetail = {
  protocolId: 136, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Associer du plaisir à une tâche utile mais ingrate.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Pleasure Installation", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Pleasure Installation" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Associer du plaisir à une tâche utile mais ingrate." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Pleasure Installation » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Pleasure Installation » sur moi", "Les techniques PNL sont théoriques"],
};

const p_137: ProtocolDetail = {
  protocolId: 137, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Déconditionner un plaisir toxique (junk food, écrans, etc.).",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Pleasure Reduction", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Pleasure Reduction" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Déconditionner un plaisir toxique (junk food, écrans, etc.)." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Pleasure Reduction » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Pleasure Reduction » sur moi", "Les techniques PNL sont théoriques"],
};

const p_138: ProtocolDetail = {
  protocolId: 138, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Relier un plaisir intense à une discipline pour la rendre désirable.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Godiva Chocolate Pattern", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Godiva Chocolate Pattern" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Relier un plaisir intense à une discipline pour la rendre désirable." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Godiva Chocolate Pattern » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Godiva Chocolate Pattern » sur moi", "Les techniques PNL sont théoriques"],
};

const p_139: ProtocolDetail = {
  protocolId: 139, efficacite: "BBNLP", efficaciteSub: "États & ancrage",
  description: "Reprogrammer le rapport à l'alimentation.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur états & ancrage"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Smart Eating Pattern", icon: "◑",
    duration: "45-60 min", color: "#7C5CBF", recommended: true,
    description: "Protocole BBNLP — " + "Smart Eating Pattern" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Reprogrammer le rapport à l'alimentation." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Smart Eating Pattern » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Ancrage VAK", type: "PNL", icon: "📍", desc: "Multimodal." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Micro-changements." },
    { name: "Sous-modalités", type: "Modulation", icon: "🎚", desc: "Brillance, taille, distance." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Smart Eating Pattern » sur moi", "Les techniques PNL sont théoriques"],
};

const p_150: ProtocolDetail = {
  protocolId: 150, efficacite: "BBNLP", efficaciteSub: "Communication & rapport",
  description: "Se synchroniser au rythme et au registre de l'autre pour créer le rapport.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur communication & rapport"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Pacing and Matching", icon: "◑",
    duration: "45-60 min", color: "#2E8A7B", recommended: true,
    description: "Protocole BBNLP — " + "Pacing and Matching" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Se synchroniser au rythme et au registre de l'autre pour créer le rapport." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Pacing and Matching » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Synchronisation", type: "Posture", icon: "🔄", desc: "Posture, rythme, langage." },
    { name: "Méta-modèle", type: "Linguistique", icon: "🔍", desc: "Questionnement précis." },
    { name: "Pacing & leading", type: "Technique", icon: "🤝", desc: "Suivre puis guider." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Pacing and Matching » sur moi", "Les techniques PNL sont théoriques"],
};

const p_151: ProtocolDetail = {
  protocolId: 151, efficacite: "BBNLP", efficaciteSub: "Communication & rapport",
  description: "Refléter posture, énergie et tonalité de l'autre.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur communication & rapport"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Mirroring", icon: "◑",
    duration: "45-60 min", color: "#2E8A7B", recommended: true,
    description: "Protocole BBNLP — " + "Mirroring" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Refléter posture, énergie et tonalité de l'autre." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Mirroring » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Synchronisation", type: "Posture", icon: "🔄", desc: "Posture, rythme, langage." },
    { name: "Méta-modèle", type: "Linguistique", icon: "🔍", desc: "Questionnement précis." },
    { name: "Pacing & leading", type: "Technique", icon: "🤝", desc: "Suivre puis guider." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Mirroring » sur moi", "Les techniques PNL sont théoriques"],
};

const p_152: ProtocolDetail = {
  protocolId: 152, efficacite: "BBNLP", efficaciteSub: "Communication & rapport",
  description: "Imiter discrètement les comportements observables.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur communication & rapport"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Behavioral Mirroring", icon: "◑",
    duration: "45-60 min", color: "#2E8A7B", recommended: true,
    description: "Protocole BBNLP — " + "Behavioral Mirroring" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Imiter discrètement les comportements observables." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Behavioral Mirroring » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Synchronisation", type: "Posture", icon: "🔄", desc: "Posture, rythme, langage." },
    { name: "Méta-modèle", type: "Linguistique", icon: "🔍", desc: "Questionnement précis." },
    { name: "Pacing & leading", type: "Technique", icon: "🤝", desc: "Suivre puis guider." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Behavioral Mirroring » sur moi", "Les techniques PNL sont théoriques"],
};

const p_153: ProtocolDetail = {
  protocolId: 153, efficacite: "BBNLP", efficaciteSub: "Communication & rapport",
  description: "Refléter par métaphore ce que l'autre vit ou exprime.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur communication & rapport"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Symbolic Mirroring", icon: "◑",
    duration: "45-60 min", color: "#2E8A7B", recommended: true,
    description: "Protocole BBNLP — " + "Symbolic Mirroring" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Refléter par métaphore ce que l'autre vit ou exprime." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Symbolic Mirroring » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Synchronisation", type: "Posture", icon: "🔄", desc: "Posture, rythme, langage." },
    { name: "Méta-modèle", type: "Linguistique", icon: "🔍", desc: "Questionnement précis." },
    { name: "Pacing & leading", type: "Technique", icon: "🤝", desc: "Suivre puis guider." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Symbolic Mirroring » sur moi", "Les techniques PNL sont théoriques"],
};

const p_154: ProtocolDetail = {
  protocolId: 154, efficacite: "BBNLP", efficaciteSub: "Communication & rapport",
  description: "Synchroniser sur un canal différent (geste → ton, etc.).",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur communication & rapport"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Exchanged Matches", icon: "◑",
    duration: "45-60 min", color: "#2E8A7B", recommended: true,
    description: "Protocole BBNLP — " + "Exchanged Matches" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Synchroniser sur un canal différent (geste → ton, etc.)." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Exchanged Matches » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Synchronisation", type: "Posture", icon: "🔄", desc: "Posture, rythme, langage." },
    { name: "Méta-modèle", type: "Linguistique", icon: "🔍", desc: "Questionnement précis." },
    { name: "Pacing & leading", type: "Technique", icon: "🤝", desc: "Suivre puis guider." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Exchanged Matches » sur moi", "Les techniques PNL sont théoriques"],
};

const p_155: ProtocolDetail = {
  protocolId: 155, efficacite: "BBNLP", efficaciteSub: "Communication & rapport",
  description: "Reconnaître les situations où le mirroring nuit (colère, manipulation).",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur communication & rapport"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "When NOT to Mirror or Match", icon: "◑",
    duration: "45-60 min", color: "#2E8A7B", recommended: true,
    description: "Protocole BBNLP — " + "When NOT to Mirror or Match" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Reconnaître les situations où le mirroring nuit (colère, manipulation)." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « When NOT to Mirror or Match » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Synchronisation", type: "Posture", icon: "🔄", desc: "Posture, rythme, langage." },
    { name: "Méta-modèle", type: "Linguistique", icon: "🔍", desc: "Questionnement précis." },
    { name: "Pacing & leading", type: "Technique", icon: "🤝", desc: "Suivre puis guider." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « When NOT to Mirror or Match » sur moi", "Les techniques PNL sont théoriques"],
};

const p_156: ProtocolDetail = {
  protocolId: 156, efficacite: "BBNLP", efficaciteSub: "Communication & rapport",
  description: "Établir le rapport via les catégories de Satir.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur communication & rapport"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Category Rapport-Building", icon: "◑",
    duration: "45-60 min", color: "#2E8A7B", recommended: true,
    description: "Protocole BBNLP — " + "Category Rapport-Building" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Établir le rapport via les catégories de Satir." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Category Rapport-Building » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Synchronisation", type: "Posture", icon: "🔄", desc: "Posture, rythme, langage." },
    { name: "Méta-modèle", type: "Linguistique", icon: "🔍", desc: "Questionnement précis." },
    { name: "Pacing & leading", type: "Technique", icon: "🤝", desc: "Suivre puis guider." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Category Rapport-Building » sur moi", "Les techniques PNL sont théoriques"],
};

const p_157: ProtocolDetail = {
  protocolId: 157, efficacite: "BBNLP", efficaciteSub: "Communication & rapport",
  description: "Lecture fine des signaux internes via les changements physiologiques.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur communication & rapport"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Calibration", icon: "◑",
    duration: "45-60 min", color: "#2E8A7B", recommended: true,
    description: "Protocole BBNLP — " + "Calibration" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Lecture fine des signaux internes via les changements physiologiques." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Calibration » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Synchronisation", type: "Posture", icon: "🔄", desc: "Posture, rythme, langage." },
    { name: "Méta-modèle", type: "Linguistique", icon: "🔍", desc: "Questionnement précis." },
    { name: "Pacing & leading", type: "Technique", icon: "🤝", desc: "Suivre puis guider." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Calibration » sur moi", "Les techniques PNL sont théoriques"],
};

const p_158: ProtocolDetail = {
  protocolId: 158, efficacite: "BBNLP", efficaciteSub: "Communication & rapport",
  description: "Aiguiser les 5 sens pour percevoir plus finement l'autre et le monde.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur communication & rapport"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Developing Sensory Acuity", icon: "◑",
    duration: "45-60 min", color: "#2E8A7B", recommended: true,
    description: "Protocole BBNLP — " + "Developing Sensory Acuity" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Aiguiser les 5 sens pour percevoir plus finement l'autre et le monde." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Developing Sensory Acuity » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Synchronisation", type: "Posture", icon: "🔄", desc: "Posture, rythme, langage." },
    { name: "Méta-modèle", type: "Linguistique", icon: "🔍", desc: "Questionnement précis." },
    { name: "Pacing & leading", type: "Technique", icon: "🤝", desc: "Suivre puis guider." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Developing Sensory Acuity » sur moi", "Les techniques PNL sont théoriques"],
};

const p_159: ProtocolDetail = {
  protocolId: 159, efficacite: "BBNLP", efficaciteSub: "Communication & rapport",
  description: "Décoder les signaux non-verbaux (micro-expressions, posture, regard).",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur communication & rapport"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Non-Verbal Cues Recognition", icon: "◑",
    duration: "45-60 min", color: "#2E8A7B", recommended: true,
    description: "Protocole BBNLP — " + "Non-Verbal Cues Recognition" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Décoder les signaux non-verbaux (micro-expressions, posture, regard)." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Non-Verbal Cues Recognition » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Synchronisation", type: "Posture", icon: "🔄", desc: "Posture, rythme, langage." },
    { name: "Méta-modèle", type: "Linguistique", icon: "🔍", desc: "Questionnement précis." },
    { name: "Pacing & leading", type: "Technique", icon: "🤝", desc: "Suivre puis guider." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Non-Verbal Cues Recognition » sur moi", "Les techniques PNL sont théoriques"],
};

const p_160: ProtocolDetail = {
  protocolId: 160, efficacite: "BBNLP", efficaciteSub: "Communication & rapport",
  description: "Maintenir le focus d'un groupe ou d'une personne dans la durée.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur communication & rapport"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Holding Attention", icon: "◑",
    duration: "45-60 min", color: "#2E8A7B", recommended: true,
    description: "Protocole BBNLP — " + "Holding Attention" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Maintenir le focus d'un groupe ou d'une personne dans la durée." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Holding Attention » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Synchronisation", type: "Posture", icon: "🔄", desc: "Posture, rythme, langage." },
    { name: "Méta-modèle", type: "Linguistique", icon: "🔍", desc: "Questionnement précis." },
    { name: "Pacing & leading", type: "Technique", icon: "🤝", desc: "Suivre puis guider." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Holding Attention » sur moi", "Les techniques PNL sont théoriques"],
};

const p_161: ProtocolDetail = {
  protocolId: 161, efficacite: "BBNLP", efficaciteSub: "Communication & rapport",
  description: "Utiliser une gestuelle intentionnelle pour appuyer le discours.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur communication & rapport"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Nuanced Gesturing", icon: "◑",
    duration: "45-60 min", color: "#2E8A7B", recommended: true,
    description: "Protocole BBNLP — " + "Nuanced Gesturing" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Utiliser une gestuelle intentionnelle pour appuyer le discours." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Nuanced Gesturing » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Synchronisation", type: "Posture", icon: "🔄", desc: "Posture, rythme, langage." },
    { name: "Méta-modèle", type: "Linguistique", icon: "🔍", desc: "Questionnement précis." },
    { name: "Pacing & leading", type: "Technique", icon: "🤝", desc: "Suivre puis guider." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Nuanced Gesturing » sur moi", "Les techniques PNL sont théoriques"],
};

const p_162: ProtocolDetail = {
  protocolId: 162, efficacite: "BBNLP", efficaciteSub: "Communication & rapport",
  description: "Typologie de Virginia Satir : Blamer, Placater, Computer, Distracter, Leveler.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur communication & rapport"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Satir Categories", icon: "◑",
    duration: "45-60 min", color: "#2E8A7B", recommended: true,
    description: "Protocole BBNLP — " + "Satir Categories" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Typologie de Virginia Satir : Blamer, Placater, Computer, Distracter, Leveler." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Satir Categories » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Synchronisation", type: "Posture", icon: "🔄", desc: "Posture, rythme, langage." },
    { name: "Méta-modèle", type: "Linguistique", icon: "🔍", desc: "Questionnement précis." },
    { name: "Pacing & leading", type: "Technique", icon: "🤝", desc: "Suivre puis guider." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Satir Categories » sur moi", "Les techniques PNL sont théoriques"],
};

const p_163: ProtocolDetail = {
  protocolId: 163, efficacite: "BBNLP", efficaciteSub: "Communication & rapport",
  description: "Changer de canal ou de registre à la volée selon la réponse de l'autre.",
  indications: ["Pratique PNL niveau Intermédiaire", "Travail structuré sur communication & rapport"],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{
    id: "principal", title: "Utilizing Flexibility", icon: "◑",
    duration: "45-60 min", color: "#2E8A7B", recommended: true,
    description: "Protocole BBNLP — " + "Utilizing Flexibility" + ".",
    seances: [{ num: 1, title: "Étapes du protocole", steps: [
      { label: "Cadrage", detail: "Identifier précisément la situation/objectif visé. Changer de canal ou de registre à la volée selon la réponse de l'autre." },
      { label: "Calibration initiale", detail: "Établir l'état présent (EP) du client : sensations, pensées, comportements observables." },
      { label: "Mise en œuvre", detail: "Application structurée de la technique « Utilizing Flexibility » selon le protocole BBNLP." },
      { label: "Test & ajustement", detail: "Vérification du changement par calibration. Ajustement si nécessaire." },
      { label: "Pont sur le futur", detail: "Visualisation d'une situation future où le changement sera mobilisé. Ancrage." }
    ] }],
  }],
  outils: [
    { name: "Synchronisation", type: "Posture", icon: "🔄", desc: "Posture, rythme, langage." },
    { name: "Méta-modèle", type: "Linguistique", icon: "🔍", desc: "Questionnement précis." },
    { name: "Pacing & leading", type: "Technique", icon: "🤝", desc: "Suivre puis guider." }
  ],
  stats: [
    { val: "Interméd", label: "Niveau", sub: "BBNLP", color: "#7C5CBF" },
    { val: "5", label: "Étapes", sub: "protocole structuré", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser « Utilizing Flexibility » sur moi", "Les techniques PNL sont théoriques"],
};

export const bbnlp1Details: Record<number, ProtocolDetail> = {
  100: p_100,
  101: p_101,
  102: p_102,
  103: p_103,
  104: p_104,
  105: p_105,
  106: p_106,
  107: p_107,
  108: p_108,
  109: p_109,
  110: p_110,
  120: p_120,
  121: p_121,
  122: p_122,
  123: p_123,
  124: p_124,
  125: p_125,
  126: p_126,
  127: p_127,
  128: p_128,
  129: p_129,
  130: p_130,
  131: p_131,
  132: p_132,
  133: p_133,
  134: p_134,
  135: p_135,
  136: p_136,
  137: p_137,
  138: p_138,
  139: p_139,
  150: p_150,
  151: p_151,
  152: p_152,
  153: p_153,
  154: p_154,
  155: p_155,
  156: p_156,
  157: p_157,
  158: p_158,
  159: p_159,
  160: p_160,
  161: p_161,
  162: p_162,
  163: p_163,
};