import nodemailer, { type Transporter } from "nodemailer";

/**
 * Lazy-initialized SMTP transporter (SiteGround SMTP for KIIKA).
 *
 * Required env vars:
 *   SMTP_HOST       e.g. "smtp.siteground.com" or "mail.intio.fr"
 *   SMTP_PORT       465 (SSL) or 587 (STARTTLS)
 *   SMTP_USER       e.g. "selene@kiika.intio.fr"
 *   SMTP_PASSWORD   the mailbox password
 *   SMTP_SECURE     "true" for port 465, "false" for 587 (default: true)
 *
 * Optional:
 *   EMAIL_FROM      "KIIKA <selene@kiika.intio.fr>" (default: SMTP_USER)
 *
 * Returns null when SMTP is not configured so callers can degrade gracefully.
 */
let cached: Transporter | null | undefined;

export function getSmtpTransporter(): Transporter | null {
  if (cached !== undefined) return cached;

  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !portRaw || !user || !pass) {
    cached = null;
    return null;
  }

  const port = Number(portRaw);
  const secure =
    typeof process.env.SMTP_SECURE === "string"
      ? process.env.SMTP_SECURE.toLowerCase() === "true"
      : port === 465;

  cached = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    // SiteGround uses standard certs; default Node TLS works.
    pool: true,
    maxConnections: 3,
    maxMessages: 50,
    connectionTimeout: 15_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });

  return cached;
}

export function emailFrom(): string {
  return process.env.EMAIL_FROM ?? process.env.SMTP_USER ?? "noreply@kiika.intio.fr";
}
