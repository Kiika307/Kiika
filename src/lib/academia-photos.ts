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

/**
 * Pool d'images utilisable comme fond décoratif (cartes, encarts).
 * Toutes en WebP, déjà optimisées.
 */
export const academiaBackgroundPool: readonly string[] = [
  `${BASE}/atmosphere-chaleureuse-de-bureau-ancien.webp`,
  `${BASE}/atmosphere-chaleureuse-pour-la-lecture.webp`,
  `${BASE}/coin-bureau-chaleureux-et-intime.webp`,
  `${BASE}/coin-de-bureau-chaleureux-et-vintage.webp`,
  `${BASE}/coin-de-lecture-minimaliste-et-chaleureux.webp`,
  `${BASE}/coin-etude-vintage-eclaire-par-le-soleil.webp`,
  `${BASE}/coin-lecture-chaleureux-et-intime.webp`,
  `${BASE}/coin-lecture-cosy-et-lumineux.webp`,
  `${BASE}/ecriture-elegante-sur-bureau-rustique.webp`,
  `${BASE}/etude-chaleureuse-et-intime-avec-bibliotheque.webp`,
  `${BASE}/moment-paisible-autour-d-une-tasse-de-cafe.webp`,
  `${BASE}/pile-de-livres-anciens-et-decorations-vintage.webp`,
  `${BASE}/pluie-urbaine-a-travers-une-fenetre.webp`,
  `${BASE}/vase-en-verre-et-feuillage-delicat.webp`,
  `${BASE}/vignette-de-lumiere-doree-et-serenite.webp`,
];

/**
 * Sélection déterministe d'une image dans le pool à partir d'une clé
 * (id, slug…). Garantit qu'un même protocole conserve toujours la même image.
 */
export function pickBackgroundImage(key: string | number): string {
  const str = String(key);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  const idx = Math.abs(hash) % academiaBackgroundPool.length;
  return academiaBackgroundPool[idx];
}
