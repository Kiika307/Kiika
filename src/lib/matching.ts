import type { Client, Protocol } from "@/lib/types";

// =====================================================================
// KIIKA matching engine — heuristique (déterministe, gratuite, RGPD-safe)
// =====================================================================
//
// Score sur 100 :
//   - 50 pts : intersection des motifs (Jaccard)
//   - 25 pts : alignement profil dominant ↔ catégorie/pratique
//             - Si Selene disponible : moyenne pondérée des 3 dimensions du top3
//             - Sinon : 4-axes legacy (Émotionnel/Cognitif/Somatique/Comportemental)
//   - 15 pts : adéquation du niveau (Débutant pour nouveaux, Inter sinon)
//   - 10 pts : diversité de pratiques dans le top 5

type Dominante = "Émotionnel" | "Cognitif" | "Somatique" | "Comportemental";

const DOMINANTE_KEYWORDS: Record<Dominante, string[]> = {
  Émotionnel: [
    "émotion",
    "ancrage",
    "anxiété",
    "stress",
    "recadrage",
    "parts internes",
    "humaniste",
    "ericksonienne",
    "emdr",
    "deuil",
    "trauma",
  ],
  Cognitif: [
    "croyance",
    "modélisation",
    "apprentissage",
    "langage",
    "pnl",
    "tcc",
    "analyse transactionnelle",
    "cognitive",
    "raisonnement",
  ],
  Somatique: [
    "douleur",
    "anesthésie",
    "dentaire",
    "psychosomatique",
    "sophrologie",
    "cohérence cardiaque",
    "respiration",
    "réflexologie",
    "corps",
    "magnétisme",
  ],
  Comportemental: [
    "objectif",
    "motivation",
    "confiance",
    "identité",
    "alignement",
    "transition",
    "habitude",
    "communication",
    "process communication",
    "addictions",
    "performance",
  ],
};

// Mapping Selene → mots-clés catégories/pratiques/tags pour scoring.
// Une dimension dominante haute oriente le matching vers les protocoles
// qui adressent ses tensions caractéristiques.
type SeleneDim =
  | "ESSENCE"
  | "ALTRUISME"
  | "ACCOMPLISSEMENT"
  | "AUTHENTICITE"
  | "ANALYSE"
  | "LOYAUTE"
  | "ENTHOUSIASME"
  | "LEADERSHIP"
  | "HARMONIE";

const SELENE_KEYWORDS: Record<SeleneDim, string[]> = {
  // Perfectionniste · Intégrité → recadrage du jugement, lâcher-prise, croyances
  ESSENCE: [
    "croyance",
    "recadrage",
    "perfectionnisme",
    "exigence",
    "lâcher-prise",
    "auto-compassion",
    "rigidité",
    "humaniste",
    "parts internes",
    "ancrage",
  ],
  // Aidant · Relationnel → communication, parts internes, dire non, identité
  ALTRUISME: [
    "communication",
    "rapport",
    "parts internes",
    "empathie",
    "limites",
    "identité",
    "humaniste",
    "ericksonienne",
    "famille",
    "couple",
  ],
  // Performeur · Réalisateur → objectifs, motivation, performance, authenticité
  ACCOMPLISSEMENT: [
    "objectif",
    "motivation",
    "performance",
    "confiance",
    "réussite",
    "modélisation",
    "burn-out",
    "fatigue",
    "ancrage",
    "identité",
  ],
  // Individualiste · Authenticité → identité, deuil, créativité, parts internes
  AUTHENTICITE: [
    "identité",
    "authenticité",
    "deuil",
    "trauma",
    "humaniste",
    "parts internes",
    "créativité",
    "spiritualité",
    "quête",
    "sens",
    "mélancolie",
    "ancrage",
  ],
  // Penseur · Analyse → modélisation, langage, hypnose, ancrage corporel
  ANALYSE: [
    "modélisation",
    "langage",
    "apprentissage",
    "ancrage",
    "respiration",
    "cohérence cardiaque",
    "rumination",
    "anxiété",
    "ericksonienne",
    "raisonnement",
  ],
  // Loyal · Sécurité → anxiété, peurs, sécurité, ancrage, croyances
  LOYAUTE: [
    "anxiété",
    "stress",
    "peur",
    "phobie",
    "sécurité",
    "ancrage",
    "croyance",
    "humaniste",
    "ericksonienne",
    "respiration",
  ],
  // Enthousiaste · Joie → focus, ancrage, addictions, parts internes
  ENTHOUSIASME: [
    "focus",
    "concentration",
    "addictions",
    "ancrage",
    "parts internes",
    "objectif",
    "motivation",
    "engagement",
    "transitions",
    "alignement",
  ],
  // Protecteur · Leadership → confiance, identité, parts internes, vulnérabilité
  LEADERSHIP: [
    "confiance",
    "identité",
    "parts internes",
    "humaniste",
    "vulnérabilité",
    "colère",
    "leadership",
    "communication",
    "ancrage",
    "alignement",
  ],
  // Médiateur · Paix → affirmation, décision, ancrage, parts internes
  HARMONIE: [
    "décision",
    "orientation",
    "affirmation",
    "ancrage",
    "parts internes",
    "humaniste",
    "objectif",
    "motivation",
    "alignement",
    "transitions",
  ],
};

function jaccard(a: string[], b: string[]): { score: number; common: string[] } {
  if (a.length === 0 || b.length === 0) return { score: 0, common: [] };
  const setA = new Set(a.map((s) => s.toLowerCase().trim()));
  const setB = new Set(b.map((s) => s.toLowerCase().trim()));
  const common: string[] = [];
  for (const x of setA) if (setB.has(x)) common.push(x);
  if (common.length === 0) return { score: 0, common: [] };
  const union = new Set([...setA, ...setB]);
  return {
    score: common.length / union.size,
    common: a.filter((x) => common.includes(x.toLowerCase().trim())),
  };
}

function dominanteAlignment(dominante: string | null | undefined, p: Protocol): number {
  if (!dominante) return 0;
  const keys = DOMINANTE_KEYWORDS[dominante as Dominante];
  if (!keys) return 0;
  const haystack = `${p.category} ${p.practice} ${(p.tags ?? []).join(" ")}`.toLowerCase();
  let hits = 0;
  for (const k of keys) if (haystack.includes(k)) hits++;
  return Math.min(1, hits / 3);
}

// Aligns a protocol against the Selene profile.
// Uses the top 3 dimensions weighted by their normalized score.
// Returns 0..1.
function seleneAlignment(client: Client, p: Protocol): number {
  const sel = client.selene;
  if (!sel) return 0;
  const haystack = `${p.category} ${p.practice} ${(p.tags ?? []).join(" ")}`.toLowerCase();
  let weighted = 0;
  let weightSum = 0;
  for (const code of sel.top3) {
    const keys = SELENE_KEYWORDS[code as SeleneDim];
    if (!keys) continue;
    const score = sel.scores[code] ?? 0;
    if (score < 40) continue; // ignore "Secondaire"
    let hits = 0;
    for (const k of keys) if (haystack.includes(k)) hits++;
    const dimAlign = Math.min(1, hits / 3);
    weighted += dimAlign * score;
    weightSum += score;
  }
  return weightSum > 0 ? weighted / weightSum : 0;
}

function levelFit(client: Client, p: Protocol): number {
  // Default expectation: "Intermédiaire". For "nouveau" prefer "Débutant".
  const target = client.status === "nouveau" ? "Débutant" : "Intermédiaire";
  if (p.level === target) return 1;
  if (p.level === "Avancé" && client.status === "nouveau") return 0.2;
  return 0.65;
}

export interface ScoredProtocol {
  protocol: Protocol;
  score: number;          // 0-100
  motifsCommon: string[];
  reasoning: string;
}

interface MatchOptions {
  topN?: number;          // default 5
  minScore?: number;      // default 5 (filter noise)
}

export function rankProtocolsForClient(
  client: Client,
  protocols: Protocol[],
  opts: MatchOptions = {},
): ScoredProtocol[] {
  const topN = opts.topN ?? 5;
  const minScore = opts.minScore ?? 5;

  const profile = client.profile;
  const sel = client.selene;
  const clientMotifs: string[] = [
    ...(profile?.themes ?? []),
    ...(profile?.objectifs ?? []),
  ];
  const dominante = profile?.dominante ?? null;
  const useSelene = !!sel;

  const candidates: ScoredProtocol[] = [];

  for (const p of protocols) {
    const m = jaccard(clientMotifs, p.motifs ?? []);
    const motifsScore = m.score * 50;
    // Selene prend la priorité quand le test a été fait. Le scoring legacy
    // 4-axes reste actif si seul l'ancien profil est renseigné.
    const dominanteScore = useSelene
      ? seleneAlignment(client, p) * 25
      : dominanteAlignment(dominante, p) * 25;
    const levelScore = levelFit(client, p) * 15;
    const baseScore = motifsScore + dominanteScore + levelScore;

    if (baseScore < minScore) continue;

    candidates.push({
      protocol: p,
      score: Math.round(baseScore),
      motifsCommon: m.common,
      reasoning: buildReasoning(client, p, m.common),
    });
  }

  // Sort by score, then apply diversity bonus on practice (small reshuffling).
  candidates.sort((a, b) => b.score - a.score);

  const top = candidates.slice(0, Math.min(topN * 2, candidates.length));
  const seenPractices = new Set<string>();
  const finalTop: ScoredProtocol[] = [];

  for (const c of top) {
    if (finalTop.length >= topN) break;
    const isNewPractice = !seenPractices.has(c.protocol.practice);
    if (finalTop.length >= 3 && !isNewPractice) continue; // diversify after top 3
    seenPractices.add(c.protocol.practice);
    finalTop.push(c);
  }

  // Backfill if diversity filter dropped too many.
  if (finalTop.length < topN) {
    for (const c of top) {
      if (finalTop.length >= topN) break;
      if (!finalTop.includes(c)) finalTop.push(c);
    }
  }

  return finalTop.slice(0, topN);
}

function buildReasoning(client: Client, p: Protocol, motifsCommon: string[]): string {
  const parts: string[] = [];
  const sel = client.selene;
  const legacyDom = client.profile?.dominante ?? null;

  if (motifsCommon.length > 0) {
    parts.push(
      `${motifsCommon.length} motif${motifsCommon.length > 1 ? "s" : ""} en commun : ${motifsCommon.join(", ")}.`,
    );
  } else {
    parts.push(`Pas de motif explicite partagé — pertinence basée sur le profil et la pratique.`);
  }

  if (sel) {
    // Find the Selene dimensions that actually matched the protocol.
    const haystack = `${p.category} ${p.practice}`.toLowerCase();
    const matchedDims: string[] = [];
    for (const code of sel.top3) {
      const keys = SELENE_KEYWORDS[code as SeleneDim] ?? [];
      if (keys.some((k) => haystack.includes(k))) matchedDims.push(code);
    }
    if (matchedDims.length > 0) {
      const labels = matchedDims.map((d) => `*${d}*`).join(", ");
      parts.push(
        `Selene : ${labels} (top 3 de ${client.name.split(" ")[0]}) résonne avec ${p.practice}.`,
      );
    } else {
      parts.push(
        `Selene : profil dominant *${sel.dominante}* — ${p.practice} peut élargir le champ d'accompagnement.`,
      );
    }
  } else if (legacyDom) {
    const haystack = `${p.category} ${p.practice}`.toLowerCase();
    const keys = DOMINANTE_KEYWORDS[legacyDom as Dominante] ?? [];
    const matchedKeys = keys.filter((k) => haystack.includes(k));
    if (matchedKeys.length > 0) {
      parts.push(`Profil ancien (4 axes) : *${legacyDom}* aligné avec ${p.practice} (${p.category}).`);
    } else {
      parts.push(`Pratique ${p.practice} — peut compléter le profil ${legacyDom}.`);
    }
  } else {
    parts.push(`Aucun test psychométrique encore réalisé — envoi d'un lien Selene recommandé.`);
  }

  if (client.status === "nouveau" && p.level === "Débutant") {
    parts.push(`Niveau Débutant adapté à un premier accompagnement.`);
  } else if (p.level === "Avancé") {
    parts.push(`Niveau avancé — à proposer après quelques séances de mise en confiance.`);
  }

  return parts.join(" ");
}

// =====================================================================
// LLM Adapter — Anthropic Claude via fetch (gated)
// =====================================================================
//
// Le payload envoyé à Anthropic est anonymisé : initiales seulement,
// pas d'e-mail, pas de téléphone, pas de nom complet, pas de date de
// naissance précise (seul l'âge), antécédents tronqués à 800 caractères.
//
// Activation requise : ANTHROPIC_API_KEY + KIIKA_ENABLE_LLM_ANALYSIS=true

export interface LLMDeepAnalysis {
  ok: boolean;
  insight?: string;          // markdown, ~400-600 mots
  alternativeAngles?: string[];
  cautionPoints?: string[];
  error?: string;
}

function clientInitials(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase() + ".";
  return (
    parts[0]!.charAt(0).toUpperCase() +
    "." +
    parts[parts.length - 1]!.charAt(0).toUpperCase() +
    "."
  );
}

function anonymizeForLLM(client: Client) {
  return {
    initials: clientInitials(client.name),
    age: client.age ?? null,
    sessions_count: client.sessions ?? 0,
    status: client.status,
    // Selene (test principal) — 9 dimensions psychométriques
    selene: client.selene
      ? {
          dominante: client.selene.dominante,
          top3: client.selene.top3,
          scores: client.selene.scores,
        }
      : null,
    // Profil legacy 4-axes (si Selene non disponible ou en complément)
    legacy_profile: client.profile
      ? {
          dominante: client.profile.dominante,
          axes: client.profile.axes,
        }
      : null,
    themes: (client.profile?.themes ?? []).map(sanitizeForPrompt),
    objectifs: (client.profile?.objectifs ?? []).map(sanitizeForPrompt),
    blocages: (client.profile?.blocages ?? []).map(sanitizeForPrompt),
  };
}

/**
 * Sanitize free-text strings before injecting them into an LLM prompt.
 *
 * - Strips control characters and zero-width chars.
 * - Removes lines that look like prompt-injection attempts (system/user role
 *   markers, instruction overrides, JSON delimiters trying to escape the
 *   surrounding payload).
 * - Caps the length to MAX_FIELD_LEN to bound the attack surface and cost.
 *
 * Defence-in-depth only — the LLM is also instructed via systemPrompt to ignore
 * instructions found in the client payload.
 */
const MAX_FIELD_LEN = 500;
const INJECTION_PATTERNS = [
  /^\s*(?:system|assistant|user)\s*[:>]/i,
  /ignore\s+(?:all\s+)?previous\s+instructions/i,
  /disregard\s+(?:the\s+)?(?:above|previous|system)/i,
  /^\s*```/,
  /<\|im_(?:start|end)\|>/i,
  /<\/?(?:system|instructions?)>/i,
];

function sanitizeForPrompt(input: string): string {
  if (typeof input !== "string") return "";
  // Strip control chars (incl. NUL, BEL, BS, DEL) and zero-width markers.
  let out = input.replace(/[\x00-\x1f\x7f\u200b-\u200f\u2028\u2029\ufeff]/g, " ");
  // Drop lines that match prompt-injection signatures.
  out = out
    .split(/\r?\n/)
    .filter((line) => !INJECTION_PATTERNS.some((re) => re.test(line)))
    .join(" ");
  // Collapse repeated whitespace.
  out = out.replace(/\s{2,}/g, " ").trim();
  if (out.length > MAX_FIELD_LEN) out = out.slice(0, MAX_FIELD_LEN) + "…";
  return out;
}

export async function deepAnalyzeWithLLM(
  client: Client,
  topCandidates: ScoredProtocol[],
): Promise<LLMDeepAnalysis> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const enabled = process.env.KIIKA_ENABLE_LLM_ANALYSIS === "true";

  if (!enabled) {
    return {
      ok: false,
      error:
        "Analyse approfondie désactivée. Pour l'activer, contactez l'éditeur (INTIO) et fournissez une clé API Anthropic.",
    };
  }
  if (!apiKey) {
    return { ok: false, error: "Clé API Anthropic manquante côté serveur." };
  }

  const anonClient = anonymizeForLLM(client);
  const candidates = topCandidates.slice(0, 5).map((c) => ({
    name: c.protocol.name,
    practice: c.protocol.practice,
    category: c.protocol.category,
    description: c.protocol.description,
    motifs_couverts: c.motifsCommon,
    score: c.score,
  }));

  const systemPrompt = `Tu es KIIKA, un assistant pour praticiens et accompagnants holistiques (hypnose, sophrologie, PNL, EMDR, énergétique). Ton rôle : analyser le profil d'un client et proposer une lecture nuancée du matching de protocoles.

CONTEXTE CRITIQUE :
- Tu n'es PAS un professionnel de santé. Tu n'établis aucun diagnostic médical.
- Tu n'as PAS accès aux données identifiantes du client (nom, contact). Seulement initiales + profil psychométrique anonymisé.
- Tu ne donnes PAS de prescription. Tu suggères des pistes d'accompagnement holistique.
- Si tu détectes des éléments qui semblent dépasser le cadre du coaching/accompagnement (idées suicidaires, dépression sévère, trauma complexe), tu le signales explicitement dans cautionPoints.

LECTURE DU PROFIL SELENE :
Le test Selene (créé par Varinka ROBERT, 9 dimensions, 117 questions) est l'instrument principal.
Quand "selene" est présent dans le payload, fonde TOUTE ton analyse dessus en priorité.
Les 9 dimensions et leur essence :
- ESSENCE (Perfectionniste · Intégrité) — quête de perfection, sens éthique, rigueur
- ALTRUISME (Aidant · Relationnel) — empathie, don de soi, besoin d'être nécessaire
- ACCOMPLISSEMENT (Performeur · Réalisateur) — orientation succès, image, efficacité
- AUTHENTICITE (Individualiste · Authenticité) — singularité, profondeur émotionnelle, créativité
- ANALYSE (Penseur · Analyse) — observation, retrait, raisonnement, indépendance intellectuelle
- LOYAUTE (Loyal · Sécurité) — vigilance, anxiété, fidélité, besoin de cadre
- ENTHOUSIASME (Enthousiaste · Joie) — optimisme, multiplicité, fuite des émotions douloureuses
- LEADERSHIP (Protecteur · Leadership) — courage, intensité, contrôle, défense des vulnérables
- HARMONIE (Médiateur · Paix) — adaptabilité, médiation, évitement des conflits, procrastination

Lis le top 3 + les scores normalisés (0-100, ≥85 = Dominant). Le profil "legacy_profile" 4-axes est secondaire et ancien.

FORMAT DE RÉPONSE — JSON STRICT :
{
  "insight": "Analyse en français, 400-600 mots, markdown léger. Structure : (1) Lecture du profil Selene (dimensions dominantes, tensions, ressources) (2) Pourquoi ces protocoles ont du sens pour CE profil (3) Ordre conseillé d'engagement.",
  "alternativeAngles": ["3-4 angles alternatifs courts en une phrase chacun, qui sortent du top 5 algorithmique"],
  "cautionPoints": ["1-3 points de vigilance ou contre-indications relatives"]
}

Réponds UNIQUEMENT avec ce JSON, rien d'autre.`;

  const userPrompt = `Profil client (anonymisé) :
${JSON.stringify(anonClient, null, 2)}

Top 5 protocoles candidats (pré-sélection algorithmique) :
${JSON.stringify(candidates, null, 2)}

Analyse ce profil et donne ta lecture des protocoles candidats.`;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1500,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return { ok: false, error: `API Anthropic ${res.status} : ${errText.slice(0, 200)}` };
    }

    const data = (await res.json()) as {
      content: Array<{ type: string; text: string }>;
    };
    const text = data.content.find((c) => c.type === "text")?.text ?? "";

    // Parse the JSON returned by the model. Strip optional ```json fences.
    const cleaned = text
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();

    const parsed = JSON.parse(cleaned) as {
      insight?: string;
      alternativeAngles?: string[];
      cautionPoints?: string[];
    };

    return {
      ok: true,
      insight: parsed.insight ?? "",
      alternativeAngles: parsed.alternativeAngles ?? [],
      cautionPoints: parsed.cautionPoints ?? [],
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Erreur inconnue lors de l'appel LLM",
    };
  }
}
