import type { SeleneDimension } from './selene-data';
import { SELENE_DIMENSIONS } from './selene-data';

export interface SeleneScoreResult {
  dimension: SeleneDimension;
  dimensionNom: string;
  scoreBrut: number;
  scoreNormalise: number;
  rang: number;
  niveau: string;
  couleur: string;
}

export interface SeleneProfile {
  dimensionDominante: SeleneDimension;
  dimensionDominanteConfig: typeof SELENE_DIMENSIONS[0];
  top3: SeleneScoreResult[];
  scores: SeleneScoreResult[];
}

const SCORE_MAX_PAR_DIMENSION = 91; // 13 questions × 7 points max

export function calculateSeleneScores(
  reponses: Record<string, number>
): SeleneScoreResult[] {
  const rawScores: Record<SeleneDimension, number> = {
    ESSENCE: 0,
    ALTRUISME: 0,
    ACCOMPLISSEMENT: 0,
    AUTHENTICITE: 0,
    ANALYSE: 0,
    LOYAUTE: 0,
    ENTHOUSIASME: 0,
    LEADERSHIP: 0,
    HARMONIE: 0,
  };

  for (const [questionId, score] of Object.entries(reponses)) {
    const blockIndex = getBlockIndexFromId(questionId);
    if (blockIndex === null) continue;
    const dimension = SELENE_DIMENSIONS[blockIndex]?.code;
    if (!dimension) continue;
    rawScores[dimension] += score;
  }

  const results: SeleneScoreResult[] = SELENE_DIMENSIONS.map(dim => {
    const scoreBrut = rawScores[dim.code];
    const scoreNormalise = Math.round((scoreBrut / SCORE_MAX_PAR_DIMENSION) * 100);
    return {
      dimension: dim.code,
      dimensionNom: dim.nom,
      scoreBrut,
      scoreNormalise,
      rang: 0,
      niveau: getNiveau(scoreNormalise),
      couleur: dim.couleur,
    };
  });

  results.sort((a, b) => b.scoreNormalise - a.scoreNormalise);
  results.forEach((r, i) => { r.rang = i + 1; });

  return results;
}

export function buildSeleneProfile(scores: SeleneScoreResult[]): SeleneProfile {
  const sorted = [...scores].sort((a, b) => b.scoreNormalise - a.scoreNormalise);
  const dominante = sorted[0].dimension;
  const config = SELENE_DIMENSIONS.find(d => d.code === dominante)!;

  return {
    dimensionDominante: dominante,
    dimensionDominanteConfig: config,
    top3: sorted.slice(0, 3),
    scores: sorted,
  };
}

function getBlockIndexFromId(questionId: string): number | null {
  const num = parseInt(questionId.replace('SE', ''), 10);
  if (isNaN(num) || num < 1 || num > 117) return null;
  return Math.floor((num - 1) / 13);
}

function getNiveau(scoreNormalise: number): string {
  if (scoreNormalise >= 85) return 'Dominant';
  if (scoreNormalise >= 70) return 'Élevé';
  if (scoreNormalise >= 55) return 'Modéré';
  if (scoreNormalise >= 40) return 'Présent';
  return 'Secondaire';
}

export function getNiveauColor(niveau: string): string {
  switch (niveau) {
    case 'Dominant': return 'bg-amber-100 text-amber-800';
    case 'Élevé': return 'bg-blue-100 text-blue-800';
    case 'Modéré': return 'bg-emerald-100 text-emerald-800';
    case 'Présent': return 'bg-slate-100 text-slate-700';
    default: return 'bg-slate-50 text-slate-500';
  }
}
