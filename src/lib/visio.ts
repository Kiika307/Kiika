/**
 * URL de salle visio pour un rendez-vous.
 *
 * - Si une URL dédiée (`dailyRoomUrl`) a été configurée (ex. Daily.co), on
 *   l'utilise.
 * - Sinon on dérive une salle Jitsi Meet déterministe et privée par RDV :
 *   gratuite, sans clé API, chiffrée, même salle côté praticien et côté client.
 *
 * Le nom de salle inclut l'id du RDV (UUID) → non devinable en pratique.
 */
export function visioRoomUrl(appointmentId: string, dailyRoomUrl?: string | null): string {
  if (dailyRoomUrl && /^https?:\/\//.test(dailyRoomUrl)) return dailyRoomUrl;
  return `https://meet.jit.si/kiika-${appointmentId}`;
}

/**
 * Fenêtre pendant laquelle le bouton « Rejoindre » est pertinent :
 * de 10 min avant le début jusqu'à la fin théorique de la séance + 15 min.
 */
export function isVisioJoinable(startsAtIso: string, durationMin: number, now = Date.now()): boolean {
  const start = new Date(startsAtIso).getTime();
  if (Number.isNaN(start)) return false;
  const open = start - 10 * 60_000;
  const close = start + (durationMin + 15) * 60_000;
  return now >= open && now <= close;
}
