import { escapeHtml } from "../utils";

export interface PortalInvitationTemplateData {
  clientFirstName: string;
  therapistFullName: string;
  portalUrl: string;
  expiresAtIso: string;
}

export function renderPortalInvitationSubject(d: PortalInvitationTemplateData): string {
  return `${d.clientFirstName}, votre espace personnel KIIKA`;
}

export function renderPortalInvitationText(d: PortalInvitationTemplateData): string {
  const expires = formatDateFr(d.expiresAtIso);
  return [
    `Bonjour ${d.clientFirstName},`,
    "",
    `${d.therapistFullName} vous invite à activer votre espace personnel KIIKA.`,
    "",
    "Depuis cet espace, vous pourrez :",
    "  • consulter vos prochains rendez-vous",
    "  • retrouver les documents partagés par votre praticien·ne",
    "  • compléter les exercices et devoirs entre les séances",
    "  • échanger avec votre praticien·ne via la messagerie",
    "",
    `Lien personnel (valable jusqu'au ${expires}) :`,
    d.portalUrl,
    "",
    "Vous pourrez vous connecter avec votre adresse e-mail (lien magique) ou avec votre compte Google. À la première connexion, vous accepterez les CGU, CGV et le consentement RGPD.",
    "",
    `À très vite,`,
    `${d.therapistFullName}`,
    "",
    "— envoyé via KIIKA —",
  ].join("\n");
}

export function renderPortalInvitationHtml(d: PortalInvitationTemplateData): string {
  const firstName = escapeHtml(d.clientFirstName);
  const therapist = escapeHtml(d.therapistFullName);
  const url = escapeHtml(d.portalUrl);
  const expires = escapeHtml(formatDateFr(d.expiresAtIso));

  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>${firstName}, votre espace KIIKA</title>
  </head>
  <body style="margin:0; padding:0; background-color:#FAF2DF; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif; color:#1B2D47;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAF2DF;">
      <tr><td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background-color:#FFFDF5;border-radius:16px;box-shadow:0 6px 24px rgba(15,31,58,0.08);overflow:hidden;">
          <tr><td style="background:linear-gradient(135deg,#1B2D47 0%,#2A3F5C 100%);padding:36px 32px 28px;text-align:center;">
            <div style="display:inline-block;font-family:Georgia,'Times New Roman',serif;font-size:32px;font-weight:700;letter-spacing:0.18em;color:#FFFDF5;">KIIKA</div>
            <div style="margin-top:6px;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#C8A030;">Votre espace personnel</div>
          </td></tr>
          <tr><td style="padding:32px 32px 8px;">
            <p style="margin:0 0 18px;font-size:16px;line-height:1.55;">Bonjour <strong>${firstName}</strong>,</p>
            <p style="margin:0 0 16px;font-size:14.5px;line-height:1.6;color:#2A3F5C;">
              <strong>${therapist}</strong> vous invite à activer votre espace personnel KIIKA pour mieux suivre votre accompagnement entre les séances.
            </p>
            <ul style="margin:0 0 22px;padding-left:18px;font-size:14px;line-height:1.7;color:#2A3F5C;">
              <li>Consulter vos prochains rendez-vous</li>
              <li>Retrouver les documents partagés</li>
              <li>Réaliser les exercices et devoirs</li>
              <li>Échanger en messagerie sécurisée</li>
            </ul>
          </td></tr>
          <tr><td align="center" style="padding:0 32px 32px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr><td align="center" style="background-color:#C8A030;border-radius:12px;">
                <a href="${url}" style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:700;color:#1B2D47;text-decoration:none;letter-spacing:0.02em;">Activer mon espace →</a>
              </td></tr>
            </table>
            <p style="margin:16px 0 0;font-size:12px;color:#6B7280;">Lien valable jusqu'au ${expires}</p>
          </td></tr>
          <tr><td style="padding:0 32px 28px;">
            <div style="border-top:1px solid #F3F4F6;padding-top:20px;">
              <p style="margin:0;font-size:12.5px;line-height:1.55;color:#6B7280;">🔒 Connexion par lien magique e-mail ou compte Google. Vous accepterez les CGU, CGV et le consentement RGPD à la première connexion.</p>
            </div>
            <p style="margin:22px 0 0;font-size:13px;line-height:1.55;color:#6B7280;">Si le bouton ne fonctionne pas, copiez-collez ce lien :<br /><span style="word-break:break-all;color:#5B8FB9;">${url}</span></p>
          </td></tr>
          <tr><td style="background-color:#1B2D47;padding:18px 32px;text-align:center;font-size:11px;color:#C8A030;letter-spacing:0.2em;text-transform:uppercase;">Envoyé via KIIKA · ${therapist}</td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

function formatDateFr(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return iso;
  }
}
