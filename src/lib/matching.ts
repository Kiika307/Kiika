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

export interface LLMRecommendation {
  protocolId: number;
  rank: number;
  reasoning: string;
}

export interface LLMDeepAnalysis {
  ok: boolean;
  insight?: string;          // markdown, ~400-600 mots
  alternativeAngles?: string[];
  cautionPoints?: string[];
  /** LLM-curated re-ranking of the candidate pool. Empty when not provided. */
  recommended?: LLMRecommendation[];
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
    // Objectif SMART de la 1ère séance — pierre angulaire du parcours.
    smart_objective: client.smartObjective
      ? {
          specifique: sanitizeForPrompt(client.smartObjective.specific),
          mesurable: sanitizeForPrompt(client.smartObjective.measurable),
          atteignable: sanitizeForPrompt(client.smartObjective.achievable),
          realiste: sanitizeForPrompt(client.smartObjective.realistic),
          temporel: sanitizeForPrompt(client.smartObjective.temporal),
        }
      : null,
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

/**
 * Best-effort repair of a JSON string that was truncated mid-output (typical
 * when an LLM hits its max_tokens budget). Closes a dangling string then any
 * unclosed `[` / `{` so the partial response can still be parsed.
 *
 * Not a general-purpose JSON fixer — only handles truncation, not structural
 * corruption. Returns the input unchanged if no repair seems applicable.
 */
function repairTruncatedJson(s: string): string {
  let out = s;
  // Count quotes that are not escaped to detect an open string.
  let inString = false;
  let escape = false;
  const stack: string[] = [];
  for (let i = 0; i < out.length; i++) {
    const c = out[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (c === "\\") {
      escape = true;
      continue;
    }
    if (c === '"') {
      inString = !inString;
      continue;
    }
    if (inString) continue;
    if (c === "{" || c === "[") stack.push(c);
    else if (c === "}" || c === "]") stack.pop();
  }
  if (inString) {
    // Strip trailing comma artefacts inside an open string then close it.
    out = out.replace(/[,\s]+$/u, "") + '"';
  }
  while (stack.length) {
    const open = stack.pop();
    out += open === "{" ? "}" : "]";
  }
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
  // We send a wider pool (top 25) without the long descriptions, so the model
  // has enough breadth to surface non-obvious choices but stays within a tight
  // token budget. Heuristic score is shared as a hint, not a verdict.
  const candidates = topCandidates.slice(0, 25).map((c) => ({
    id: c.protocol.id,
    name: c.protocol.name,
    practice: c.protocol.practice,
    category: c.protocol.category,
    level: c.protocol.level,
    motifs_couverts: c.motifsCommon,
    motifs_protocole: c.protocol.motifs ?? [],
    heuristic_score: c.score,
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

TÂCHE :
On te fournit un panel de 25 protocoles candidats déjà filtrés par un algorithme de matching local.
Ton travail : RE-CLASSER ce panel pour produire ton propre top 5-7 le plus pertinent pour ce profil
spécifique, puis livrer une lecture qualitative de ton choix.

FORMAT DE RÉPONSE — JSON STRICT :
{
  "recommended": [
    { "protocolId": <int>, "rank": 1, "reasoning": "1-2 phrases expliquant pourquoi CE protocole pour CE profil." },
    { "protocolId": <int>, "rank": 2, "reasoning": "..." },
    ...jusqu'à 5-7 protocoles
  ],
  "insight": "Analyse en français, 350-500 mots, markdown léger. Structure : (1) Lecture du profil Selene (dimensions dominantes, tensions, ressources) (2) Pourquoi ce parcours plutôt qu'un autre (3) Ordre conseillé d'engagement et signaux à observer.",
  "alternativeAngles": ["3-4 angles courts en une phrase chacun — protocoles ou approches que tu n'as pas mis dans ton top mais qui mériteraient d'être considérés selon le retour du client"],
  "cautionPoints": ["1-3 points de vigilance, contre-indications relatives, ou éléments qui nécessitent une réorientation médicale"]
}

Le champ "recommended" est OBLIGATOIRE — n'utilise QUE des protocolId présents dans la liste fournie.
Réponds UNIQUEMENT avec ce JSON, rien d'autre.`;

  const userPrompt = `Profil client (anonymisé) :
${JSON.stringify(anonClient, null, 2)}

Panel de ${candidates.length} protocoles candidats (pré-filtrés par l'algorithme local) :
${JSON.stringify(candidates, null, 2)}

Re-classe ce panel pour ce profil, puis livre ton analyse.`;

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
        // 4000 leaves enough headroom for: 5-7 recommended reasonings (~70w each)
        // + insight 350-500w + 3-4 angles + 1-3 cautions, with margin so the
        // response never truncates mid-JSON (which would otherwise surface as
        // "Unterminated string in JSON at position X" on parse).
        max_tokens: 4000,
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
      stop_reason?: string;
    };
    const text = data.content.find((c) => c.type === "text")?.text ?? "";

    // Parse the JSON returned by the model. Strip optional ```json fences.
    const cleaned = text
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();

    let parsed: {
      insight?: string;
      alternativeAngles?: string[];
      cautionPoints?: string[];
      recommended?: Array<{ protocolId?: number; rank?: number; reasoning?: string }>;
    };
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      // Best-effort recovery when the model output got truncated mid-string
      // (stop_reason "max_tokens") — close the dangling string + close any
      // open brackets so we still surface the recommendations + whatever
      // insight made it through.
      const repaired = repairTruncatedJson(cleaned);
      try {
        parsed = JSON.parse(repaired);
      } catch {
        return {
          ok: false,
          error:
            data.stop_reason === "max_tokens"
              ? "Réponse trop longue — réessayez, le budget tokens a été élargi."
              : "Réponse IA illisible — réessayez dans quelques secondes.",
        };
      }
    }

    // Validate the LLM's recommended list — only keep entries whose protocolId
    // actually exists in the candidate pool we sent. This prevents hallucinated
    // protocols from appearing in the UI.
    const validIds = new Set(candidates.map((c) => c.id));
    const recommended: LLMRecommendation[] = (parsed.recommended ?? [])
      .filter(
        (r): r is { protocolId: number; rank: number; reasoning: string } =>
          typeof r.protocolId === "number" &&
          validIds.has(r.protocolId) &&
          typeof r.reasoning === "string",
      )
      .map((r, i) => ({
        protocolId: r.protocolId,
        rank: typeof r.rank === "number" ? r.rank : i + 1,
        reasoning: r.reasoning,
      }))
      .sort((a, b) => a.rank - b.rank)
      .slice(0, 7);

    return {
      ok: true,
      insight: parsed.insight ?? "",
      alternativeAngles: parsed.alternativeAngles ?? [],
      cautionPoints: parsed.cautionPoints ?? [],
      recommended,
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Erreur inconnue lors de l'appel LLM",
    };
  }
}

// =====================================================================
// LLM Care Plan — parcours 10 séances
// =====================================================================
//
// One-shot prompt: the model reads the anonymised client profile + a
// pre-filtered protocol catalog (~40 candidates) and returns a
// structured 10-session journey. Same gating + sanitisation as the
// matching analysis above.

export interface LLMCarePlanSession {
  num: number;
  title: string;
  objective: string;
  protocolIds: number[];
  homework: string | null;
  signals: string[];
}

export interface LLMCarePlan {
  ok: boolean;
  diagnostic?: string;
  direction?: string;
  sessions?: LLMCarePlanSession[];
  metrics?: string[];
  redFlags?: string[];
  error?: string;
}

export async function generateCarePlanWithLLM(
  client: Client,
  candidates: ScoredProtocol[],
  opts?: { sessionCount?: number },
): Promise<LLMCarePlan> {
  // Durée du parcours choisie par le praticien (5 à 10), défaut 10.
  const sessionCount = Math.min(10, Math.max(5, Math.round(opts?.sessionCount ?? 10)));
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const enabled = process.env.KIIKA_ENABLE_LLM_ANALYSIS === "true";
  if (!enabled) {
    return {
      ok: false,
      error: "Conseil KIIKA désactivé. Activez KIIKA_ENABLE_LLM_ANALYSIS côté serveur.",
    };
  }
  if (!apiKey) return { ok: false, error: "Clé API Anthropic manquante côté serveur." };

  const anonClient = anonymizeForLLM(client);
  // Send a broader catalog (top 40) — the model needs real choice across
  // 10 sessions. We strip descriptions to keep the input tight.
  const catalog = candidates.slice(0, 40).map((c) => ({
    id: c.protocol.id,
    name: c.protocol.name,
    practice: c.protocol.practice,
    category: c.protocol.category,
    level: c.protocol.level,
    motifs: c.protocol.motifs ?? [],
    heuristic_score: c.score,
  }));

  const systemPrompt = `Tu es KIIKA, assistant pour praticiens et accompagnants holistiques.
On te demande de bâtir un PARCOURS COMPLET D'ACCOMPAGNEMENT SUR ${sessionCount} SÉANCES pour un client donné.

CONTEXTE CRITIQUE :
- Tu n'es PAS un médecin, tu n'établis aucun diagnostic médical.
- Tu n'as PAS accès aux données identifiantes du client (initiales seulement).
- Tu suggères des pistes d'accompagnement holistique, pas une prescription.
- Si le profil contient des signaux dépassant le cadre coaching/holistique (idéations suicidaires, dépression sévère, trauma complexe non traité, dissociation pathologique), tu le signales clairement dans "redFlags" et tu adaptes le parcours pour stabiliser plutôt que creuser.

POINT DE DÉPART DU PARCOURS :
- Si "smart_objective" est présent dans le payload, c'est L'OBJECTIF CENTRAL fixé avec le client en 1ère séance (méthode SMART). TOUT le parcours doit converger vers cet objectif : le critère "mesurable" et l'échéance "temporel" guident tes "metrics" et le rythme des ${sessionCount} séances.
- Si "selene" est présent, fonde ta lecture psychométrique dessus en priorité (9 dimensions) ; sinon utilise legacy_profile.
- Croise objectif SMART + profil Selene pour personnaliser réellement.

PRINCIPES DE CONSTRUCTION DU PARCOURS :
1. La 1ère séance ancre l'objectif SMART et sécurise : alliance, ressources internes, clarification de l'objectif.
2. Les séances du milieu ciblent le cœur du problème par approches complémentaires (jamais la même chose répétée).
3. La/les dernière(s) consolident : intégration, métacompétences, autonomisation, mesure de l'atteinte de l'objectif.
4. Chaque séance combine 1-3 protocoles cohérents (au moins 1, jusqu'à 3 si vraiment justifiés).
5. Tu n'utilises QUE les protocolId présents dans la liste fournie. Ne JAMAIS inventer un id.
6. "homework" est une amorce simple entre séances (5-10 min/jour) — peut être null si pas pertinent.
7. "signals" = 2-4 indicateurs courts à observer dans la séance pour ajuster.

FORMAT — JSON STRICT, RIEN D'AUTRE :
{
  "diagnostic": "Markdown 200-300 mots. Lecture du profil au regard de l'objectif SMART : dimensions dominantes, tensions internes, ressources disponibles, hypothèses (au sens holistique), faisabilité de l'objectif dans l'échéance fixée.",
  "direction": "1-2 phrases : la trajectoire d'accompagnement vers l'objectif, en une ligne stratégique.",
  "sessions": [
    {
      "num": 1,
      "title": "Titre court de la séance",
      "objective": "Objectif spécifique à cette séance (1 phrase)",
      "protocolIds": [<int>, ...],
      "homework": "Devoir d'intersession (ou null)",
      "signals": ["signal 1", "signal 2", "signal 3"]
    },
    ... ${sessionCount} séances au total, num: 1 à ${sessionCount}
  ],
  "metrics": ["3-5 indicateurs d'évolution mesurables, alignés sur le critère mesurable de l'objectif SMART"],
  "redFlags": ["1-3 signaux qui justifieraient une réorientation médicale/psychologique (laisse vide [] si rien)"]
}`;

  const userPrompt = `Profil client (anonymisé) :
${JSON.stringify(anonClient, null, 2)}

Bibliothèque de protocoles disponibles (${catalog.length} entrées, pré-filtrées par pertinence locale) :
${JSON.stringify(catalog, null, 2)}

Construis un parcours complet sur ${sessionCount} séances, ancré sur l'objectif SMART du client.`;

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
        // Generous budget: 10 sessions × ~150 tokens each + diagnostic 300w
        // + metrics + red flags ≈ 3500-4500 tokens. 6000 leaves headroom.
        max_tokens: 6000,
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
      stop_reason?: string;
    };
    const text = data.content.find((c) => c.type === "text")?.text ?? "";
    const cleaned = text
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();

    let parsed: {
      diagnostic?: string;
      direction?: string;
      sessions?: Array<{
        num?: number;
        title?: string;
        objective?: string;
        protocolIds?: number[];
        homework?: string | null;
        signals?: string[];
      }>;
      metrics?: string[];
      redFlags?: string[];
    };
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      try {
        parsed = JSON.parse(repairTruncatedJson(cleaned));
      } catch {
        return {
          ok: false,
          error:
            data.stop_reason === "max_tokens"
              ? "Réponse trop longue — réessayez."
              : "Réponse IA illisible — réessayez.",
        };
      }
    }

    // Validate the sessions: only keep entries whose protocolIds all exist
    // in the catalog we sent. Drop unknown ids; drop sessions left empty.
    const validIds = new Set(catalog.map((c) => c.id));
    const sessions: LLMCarePlanSession[] = (parsed.sessions ?? [])
      .filter(
        (s): s is {
          num: number;
          title: string;
          objective: string;
          protocolIds: number[];
          homework: string | null;
          signals: string[];
        } =>
          typeof s.num === "number" &&
          typeof s.title === "string" &&
          typeof s.objective === "string" &&
          Array.isArray(s.protocolIds),
      )
      .map((s) => ({
        num: s.num,
        title: s.title,
        objective: s.objective,
        protocolIds: s.protocolIds.filter((id) => validIds.has(id)),
        homework:
          typeof s.homework === "string" && s.homework.trim() !== "" ? s.homework : null,
        signals: Array.isArray(s.signals)
          ? s.signals.filter((x): x is string => typeof x === "string")
          : [],
      }))
      .filter((s) => s.protocolIds.length > 0)
      .sort((a, b) => a.num - b.num)
      .slice(0, 10);

    return {
      ok: true,
      diagnostic: parsed.diagnostic ?? "",
      direction: parsed.direction ?? "",
      sessions,
      metrics: Array.isArray(parsed.metrics)
        ? parsed.metrics.filter((x): x is string => typeof x === "string")
        : [],
      redFlags: Array.isArray(parsed.redFlags)
        ? parsed.redFlags.filter((x): x is string => typeof x === "string")
        : [],
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Erreur inconnue lors de l'appel LLM",
    };
  }
}
