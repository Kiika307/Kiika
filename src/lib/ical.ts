/**
 * Minimal RFC 5545 iCalendar builder.
 *
 * Subset we emit: VCALENDAR + N × VEVENT, no recurrence, no alarms.
 * We use UTC timestamps everywhere (Z suffix), so no VTIMEZONE block
 * is required — clients just convert to the user's local zone.
 */

export interface IcalEvent {
  uid: string;
  summary: string;
  description?: string | null;
  location?: string | null;
  startsAt: Date;
  endsAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
  status?: "CONFIRMED" | "CANCELLED" | "TENTATIVE";
}

/**
 * Escape a text value per RFC 5545 §3.3.11.
 *
 * Order matters: backslash first, then comma/semicolon, then newline.
 * Newlines must be replaced with literal "\n" (two chars), not the
 * escape sequence — most parsers tolerate either.
 */
function escapeText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r\n|\r|\n/g, "\\n");
}

/**
 * Format a Date as a UTC iCal timestamp (basic format YYYYMMDDTHHMMSSZ).
 * RFC 5545 §3.3.5 calls this "DATE-TIME, form #2 (UTC)".
 */
function formatUtc(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  const hh = String(date.getUTCHours()).padStart(2, "0");
  const mm = String(date.getUTCMinutes()).padStart(2, "0");
  const ss = String(date.getUTCSeconds()).padStart(2, "0");
  return `${y}${m}${d}T${hh}${mm}${ss}Z`;
}

/**
 * RFC 5545 §3.1: lines must be <= 75 octets and continuation lines
 * begin with a single space. We fold on character boundaries here —
 * adequate for ASCII content; the upstream caller is responsible for
 * keeping non-ASCII payloads short enough that a mid-codepoint split
 * is unlikely (UTF-8 is tolerated by most parsers anyway).
 */
function fold(line: string): string {
  if (line.length <= 75) return line;
  const parts: string[] = [];
  let remaining = line;
  parts.push(remaining.slice(0, 75));
  remaining = remaining.slice(75);
  while (remaining.length > 0) {
    parts.push(" " + remaining.slice(0, 74));
    remaining = remaining.slice(74);
  }
  return parts.join("\r\n");
}

export interface IcalCalendar {
  productId: string;
  calendarName: string;
  events: IcalEvent[];
  /** Subscriber refresh hint (minutes); some clients honour this. */
  refreshIntervalMinutes?: number;
}

export function buildIcal(input: IcalCalendar): string {
  const lines: string[] = [];
  lines.push("BEGIN:VCALENDAR");
  lines.push("VERSION:2.0");
  lines.push(`PRODID:${escapeText(input.productId)}`);
  lines.push("CALSCALE:GREGORIAN");
  lines.push("METHOD:PUBLISH");
  lines.push(`X-WR-CALNAME:${escapeText(input.calendarName)}`);
  if (input.refreshIntervalMinutes) {
    const mins = input.refreshIntervalMinutes;
    lines.push(`X-PUBLISHED-TTL:PT${mins}M`);
    lines.push(`REFRESH-INTERVAL;VALUE=DURATION:PT${mins}M`);
  }

  for (const ev of input.events) {
    lines.push("BEGIN:VEVENT");
    lines.push(`UID:${escapeText(ev.uid)}`);
    lines.push(`DTSTAMP:${formatUtc(ev.updatedAt ?? new Date())}`);
    lines.push(`DTSTART:${formatUtc(ev.startsAt)}`);
    lines.push(`DTEND:${formatUtc(ev.endsAt)}`);
    if (ev.createdAt) lines.push(`CREATED:${formatUtc(ev.createdAt)}`);
    if (ev.updatedAt) lines.push(`LAST-MODIFIED:${formatUtc(ev.updatedAt)}`);
    lines.push(`SUMMARY:${escapeText(ev.summary)}`);
    if (ev.description) lines.push(`DESCRIPTION:${escapeText(ev.description)}`);
    if (ev.location) lines.push(`LOCATION:${escapeText(ev.location)}`);
    lines.push(`STATUS:${ev.status ?? "CONFIRMED"}`);
    lines.push(`TRANSP:${ev.status === "CANCELLED" ? "TRANSPARENT" : "OPAQUE"}`);
    lines.push("END:VEVENT");
  }

  lines.push("END:VCALENDAR");

  // Fold long lines and join with CRLF as RFC 5545 §3.1 requires.
  return lines.map(fold).join("\r\n") + "\r\n";
}
