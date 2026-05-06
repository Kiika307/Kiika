/**
 * Photothèque Dark Academia (Unsplash, free-to-use under Unsplash License).
 *
 * Toutes les URLs utilisent les paramètres Unsplash de transformation à la
 * volée (`?w=`, `?h=`, `?fit=crop`, `?q=`, `&auto=format`) — on n'héberge rien
 * localement, le CDN s'occupe du resize/format.
 *
 * Si Unsplash redirige ou tombe, basculer vers /public/academia/*.jpg.
 */
const BASE = "https://images.unsplash.com";
const Q = "auto=format&fit=crop&q=75";

/**
 * 4 stat cards on dashboard — small landscape crops.
 */
export const academiaStatPhotos = {
  /** Old library hallway — clients */
  clients: `${BASE}/photo-1481627834876-b7833e8f5570?${Q}&w=520&h=320`,
  /** Coffee + book on desk — séances */
  sessions: `${BASE}/photo-1455390582262-044cdead277a?${Q}&w=520&h=320`,
  /** Plant in dark interior — taux de suivi */
  followup: `${BASE}/photo-1545241047-6083a3684587?${Q}&w=520&h=320`,
  /** Stacked old books with candle — protocoles */
  protocols: `${BASE}/photo-1507842217343-583bb7270b66?${Q}&w=520&h=320`,
};

/**
 * Featured cards — wider/larger.
 */
export const academiaFeaturePhotos = {
  /** Vintage brass lamp on wooden desk — KIIKA assistant card */
  kiikaAssistant: `${BASE}/photo-1506880018603-83d5b814b5a6?${Q}&w=720&h=520`,
  /** Plant + cup of tea — weekly recap */
  weeklyRecap: `${BASE}/photo-1453928582365-b6ad33cbcf64?${Q}&w=720&h=420`,
  /** Library bottom of sidebar — vase + dried flowers + books */
  sidebarFooter: `${BASE}/photo-1518791841217-8f162f1e1131?${Q}&w=300&h=460`,
};
