import type { Client, Protocol } from "@/lib/types";

// =====================================================================
// KIIKA matching engine — heuristique (déterministe, gratuite, RGPD-safe)
// =====================================================================
//
// Score sur 100 :
//   - 50 pts : intersection des motifs (Jaccard)
//   - 25 pts : alignement profil dominant ↔ catégorie/pratique
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
  const clientMotifs: string[] = [
    ...(profile?.themes ?? []),
    ...(profile?.objectifs ?? []),
  ];
  const dominante = profile?.dominante ?? null;

  const candidates: ScoredProtocol[] = [];

  for (const p of protocols) {
    const m = jaccard(clientMotifs, p.motifs ?? []);
    const motifsScore = m.score * 50;
    const dominanteScore = dominanteAlignment(dominante, p) * 25;
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
  const dominante = client.profile?.dominante ?? null;

  if (motifsCommon.length > 0) {
    parts.push(
      `${motifsCommon.length} motif${motifsCommon.length > 1 ? "s" : ""} en commun : ${motifsCommon.join(", ")}.`,
    );
  } else {
    parts.push(`Pas de motif explicite partagé — pertinence basée sur le profil et la pratique.`);
  }

  if (dominante) {
    const haystack = `${p.category} ${p.practice}`.toLowerCase();
    const keys = DOMINANTE_KEYWORDS[dominante as Dominante] ?? [];
    const matchedKeys = keys.filter((k) => haystack.includes(k));
    if (matchedKeys.length > 0) {
      parts.push(
        `Profil dominant *${dominante}* aligné avec ${p.practice} (${p.category}).`,
      );
    } else {
      parts.push(`Pratique ${p.practice} — peut compléter le profil ${dominante}.`);
    }
  } else {
    parts.push(`Profil psychométrique non encore évalué — proposition basée sur les thèmes déclarés.`);
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
    profile_dominante: client.profile?.dominante ?? null,
    profile_axes: client.profile?.axes ?? null,
    themes: client.profile?.themes ?? [],
    objectifs: client.profile?.objectifs ?? [],
    blocages: client.profile?.blocages ?? [],
    sessions_count: client.sessions ?? 0,
    status: client.status,
  };
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

FORMAT DE RÉPONSE — JSON STRICT :
{
  "insight": "Analyse en français, 400-600 mots, markdown léger. Structure : (1) Lecture du profil (2) Pourquoi ces protocoles ont du sens (3) Ordre conseillé d'engagement.",
  "alternativeAngles": ["3-4 angles alternatifs courts en une phrase chacun"],
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
