/**
 * Photothèque Dark Academia — fichiers locaux dans /public/images/kiika/.
 * Originaux PNG convertis en WebP via scripts/convert-kiika-images.mjs
 * (-96% de poids, qualité visuelle équivalente). Toutes les images sont
 * resized par next/image / Vercel à la volée si <Image /> est utilisé.
 */
const BASE = "/images/kiika";

/**
 * 4 stat cards on dashboard — small landscape crops.
 */
export const academiaStatPhotos = {
  /** Bibliothèque chaleureuse — clients */
  clients: `${BASE}/etude-chaleureuse-et-intime-avec-bibliotheque.webp`,
  /** Café + livre — séances */
  sessions: `${BASE}/moment-paisible-autour-d-une-tasse-de-cafe.webp`,
  /** Coin lecture cosy — taux de suivi */
  followup: `${BASE}/coin-lecture-chaleureux-et-intime.webp`,
  /** Pile de livres anciens — protocoles */
  protocols: `${BASE}/pile-de-livres-anciens-et-decorations-vintage.webp`,
};

/**
 * Featured cards — wider/larger.
 */
export const academiaFeaturePhotos = {
  /** Bureau vintage avec lampe — KIIKA assistant card */
  kiikaAssistant: `${BASE}/bureau-vintage-illumine-par-une-lampe.webp`,
  /** Lumière dorée — weekly recap */
  weeklyRecap: `${BASE}/vignette-de-lumiere-doree-et-serenite.webp`,
  /** Vase + branchages d'olivier (portrait) — bas de la sidebar */
  sidebarFooter: `${BASE}/vase-en-ceramique-et-branchages-d-olivier.webp`,
};
