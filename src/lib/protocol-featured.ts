/**
 * Liste des protocoles "Recommandés par KIIKA" — sélection éditoriale des
 * outils les plus utiles au quotidien d'un thérapeute.
 *
 * Ces protocoles sont :
 * - largement réutilisables (multi-clients, multi-motifs)
 * - issus du tronc commun PNL/hypnose
 * - efficaces dès la 1ère séance
 *
 * L'ordre du tableau est l'ordre d'affichage dans la section "Recommandé KIIKA".
 */
export const FEATURED_PROTOCOL_IDS: readonly number[] = [
  916, // Méthode SUPER objectif — anamnèse structurée (Maître Praticien Hypnose)
  854, // SCORE — Diagnostic systémique (Maître Praticien PNL)
  894, // EP/ED/ECO — Modèle de changement (Technicien)
  850, // Méta-modèle PNL — Précision linguistique
  851, // Niveaux logiques de Dilts — Réalignement complet
  852, // Ligne du temps — Tad James
  857, // Négociation entre parties — Conflit espace-temps (Praticien PNL)
  872, // Recadrage en 6 étapes — Intention positive
  874, // Cercle d'excellence — Ancrage de ressources
  914, // Le nettoyage de printemps — Libération symbolique (Praticien Hypnose)
];

export function isFeaturedProtocol(id: number): boolean {
  return FEATURED_PROTOCOL_IDS.includes(id);
}
