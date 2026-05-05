import { escapeHtml } from "../utils";

export interface SeleneInvitationTemplateData {
  clientFirstName: string;
  therapistFullName: string;
  testUrl: string;
  expiresAtIso: string;
}

export function renderSeleneInvitationSubject(d: SeleneInvitationTemplateData): string {
  return `${d.clientFirstName}, votre test psychométrique Selene`;
}

export function renderSeleneInvitationText(d: SeleneInvitationTemplateData): string {
  const expires = formatDateFr(d.expiresAtIso);
  return [
    `Bonjour ${d.clientFirstName},`,
    "",
    `${d.therapistFullName} vous invite à compléter le test psychométrique Selene avant votre prochaine séance.`,
    "",
    "Le test prend environ 15 à 20 minutes. Faites-le dans un moment où vous serez tranquille — vos premières réponses sont souvent les plus justes.",
    "",
    `Lien personnel (valable jusqu'au ${expires}, utilisable une seule fois) :`,
    d.testUrl,
    "",
    `Vos réponses sont strictement confidentielles et ne sont partagées qu'avec ${d.therapistFullName}. Vous en discuterez ensemble lors de votre prochain rendez-vous.`,
    "",
    "À très vite,",
    `${d.therapistFullName}`,
    "",
    "— envoyé via KIIKA —",
  ].join("\n");
}

export function renderSeleneInvitationHtml(d: SeleneInvitationTemplateData): string {
  const firstName = escapeHtml(d.clientFirstName);
  const therapist = escapeHtml(d.therapistFullName);
  const url = escapeHtml(d.testUrl);
  const expires = escapeHtml(formatDateFr(d.expiresAtIso));

  // Inline-styled HTML for maximum email-client compatibility (Outlook, Gmail,
  // iCloud Mail, etc. strip <style> blocks and class names aggressively).
  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>${firstName}, votre test psychométrique Selene</title>
  </head>
  <body style="margin:0; padding:0; background-color:#FAF2DF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color:#1B2D47;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAF2DF;">
      <tr>
        <td align="center" style="padding: 32px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px; background-color:#FFFDF5; border-radius:16px; box-shadow: 0 6px 24px rgba(15,31,58,0.08); overflow:hidden;">
            <tr>
              <td style="background: linear-gradient(135deg, #1B2D47 0%, #2A3F5C 100%); padding: 36px 32px 28px; text-align:center;">
                <div style="display:inline-block; font-family: Georgia, 'Times New Roman', serif; font-size: 32px; font-weight: 700; letter-spacing: 0.18em; color: #FFFDF5;">KIIKA</div>
                <div style="margin-top: 6px; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: #C8A030;">Test psychométrique Selene</div>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px 32px 8px;">
                <p style="margin:0 0 18px; font-size: 16px; line-height: 1.55;">Bonjour <strong>${firstName}</strong>,</p>
                <p style="margin:0 0 16px; font-size: 14.5px; line-height: 1.6; color: #2A3F5C;">
                  <strong>${therapist}</strong> vous invite à compléter le test psychométrique <strong>Selene</strong> avant votre prochaine séance.
                </p>
                <p style="margin:0 0 24px; font-size: 14.5px; line-height: 1.6; color: #2A3F5C;">
                  Comptez 15 à 20 minutes. Faites-le dans un moment où vous serez tranquille — vos premières réponses sont souvent les plus justes.
                </p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 0 32px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="background-color: #C8A030; border-radius: 12px;">
                      <a href="${url}" style="display:inline-block; padding: 14px 32px; font-size: 15px; font-weight: 700; color: #1B2D47; text-decoration: none; letter-spacing: 0.02em;">
                        Commencer le test →
                      </a>
                    </td>
                  </tr>
                </table>
                <p style="margin: 16px 0 0; font-size: 12px; color: #6B7280;">
                  Lien valable jusqu'au ${expires} · utilisable une seule fois
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 32px 28px;">
                <div style="border-top: 1px solid #F3F4F6; padding-top: 20px;">
                  <p style="margin: 0; font-size: 12.5px; line-height: 1.55; color: #6B7280;">
                    🔒 Vos réponses sont strictement confidentielles. Elles ne sont partagées qu'avec ${therapist} et vous en discuterez ensemble lors de votre prochain rendez-vous.
                  </p>
                </div>
                <p style="margin: 22px 0 0; font-size: 13px; line-height: 1.55; color: #6B7280;">
                  Si vous n'arrivez pas à cliquer le bouton, copiez-collez ce lien dans votre navigateur :<br />
                  <span style="word-break: break-all; color: #5B8FB9;">${url}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td style="background-color:#1B2D47; padding: 18px 32px; text-align:center; font-size: 11px; color: #C8A030; letter-spacing: 0.2em; text-transform: uppercase;">
                Envoyé via KIIKA · Test créé par Varinka Robert
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function formatDateFr(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}
