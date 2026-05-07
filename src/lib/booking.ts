/**
 * Public booking — slot computation.
 *
 * Pure utility (no IO): given working hours, duration, buffer and a list
 * of busy intervals, returns the available start times for each day in
 * the booking window. Times are kept in the praticien's local timezone
 * — the page renders them as-is and the booking action converts to UTC
 * via the same timezone before INSERT.
 */

export interface WorkingInterval {
  /** "HH:MM" 24-hour, in the praticien's timezone. */
  from: string;
  to: string;
}

export type WeekKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export type WorkingHours = Record<WeekKey, WorkingInterval[]>;

export interface BookingSettings {
  enabled: boolean;
  defaultDuration: number; // minutes
  buffer: number;          // minutes
  timezone: string;        // IANA, e.g. "Europe/Paris"
  workingHours: WorkingHours;
  advanceDays: number;
}

export interface BusyInterval {
  startsAt: string; // ISO
  durationMin: number;
}

export interface DaySlots {
  /** "YYYY-MM-DD" in praticien tz */
  date: string;
  /** "HH:MM" 24h, sorted ascending */
  times: string[];
}

const WEEK_KEYS: WeekKey[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function parseHM(hm: string): { h: number; m: number } | null {
  const m = /^(\d{1,2}):(\d{2})$/.exec(hm);
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (h < 0 || h > 23 || min < 0 || min > 59) return null;
  return { h, m: min };
}

/**
 * Convert a Date to a "YYYY-MM-DD" string in a given IANA timezone.
 * Uses Intl.DateTimeFormat parts to avoid timezone-math bugs.
 */
function dateKeyInTz(d: Date, tz: string): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(d);
  const y = parts.find((p) => p.type === "year")?.value ?? "0000";
  const m = parts.find((p) => p.type === "month")?.value ?? "01";
  const dd = parts.find((p) => p.type === "day")?.value ?? "01";
  return `${y}-${m}-${dd}`;
}

function dowInTz(d: Date, tz: string): number {
  const wd = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    weekday: "short",
  }).format(d);
  // "Sun" / "Mon" / …
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(wd);
}

function weekKeyForDow(dow: number): WeekKey {
  return WEEK_KEYS[dow];
}

/**
 * Convert a "YYYY-MM-DD" + "HH:MM" pair in a given IANA timezone to a
 * UTC Date object. Approximation good enough for civil bookings: we
 * compute the offset of that local instant by formatting it back and
 * inverting. Adequate for Europe/Paris year-round including DST.
 */
export function localToUtc(dateKey: string, hhmm: string, tz: string): Date {
  const [y, mo, dd] = dateKey.split("-").map(Number);
  const hm = parseHM(hhmm);
  if (!hm || !y || !mo || !dd) return new Date(NaN);
  // Build a Date assuming UTC then ask Intl what time that is in tz, and
  // adjust until the formatted local time matches what we want.
  // Single-iteration approximation: compute offset for a midday probe.
  const probe = new Date(Date.UTC(y, mo - 1, dd, 12, 0, 0));
  const localProbe = new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(probe);
  const [lh, lm] = localProbe.split(":").map(Number);
  const offsetMin = (lh - 12) * 60 + lm;
  const utc = new Date(
    Date.UTC(y, mo - 1, dd, hm.h, hm.m, 0) - offsetMin * 60_000,
  );
  return utc;
}

interface ComputeOpts {
  /** "now" anchor — defaults to Date.now(), overridable for tests. */
  now?: Date;
  /** Don't generate slots whose start is sooner than this many minutes from now. */
  minLeadMin?: number;
}

/**
 * Generates the per-day list of available start times.
 *
 * Algorithm:
 *   for each day d in [today, today + advanceDays]
 *     for each working_hours interval on that weekday:
 *       step = duration + buffer
 *       generate candidate times every `step` minutes from interval.from,
 *         where time + duration <= interval.to
 *       drop any that overlap with a busy interval
 *       drop any whose UTC instant is < now + minLeadMin
 */
export function computeAvailableSlots(
  settings: BookingSettings,
  busy: BusyInterval[],
  opts: ComputeOpts = {},
): DaySlots[] {
  if (!settings.enabled) return [];
  const now = opts.now ?? new Date();
  const minLead = opts.minLeadMin ?? 60; // 1h lead by default
  const tz = settings.timezone || "Europe/Paris";

  const busyIntervals = busy
    .map((b) => {
      const start = new Date(b.startsAt);
      const end = new Date(start.getTime() + b.durationMin * 60_000);
      return { start, end };
    })
    .filter((b) => !Number.isNaN(b.start.getTime()));

  const days: DaySlots[] = [];
  const dayMs = 24 * 60 * 60 * 1000;

  for (let i = 0; i <= settings.advanceDays; i++) {
    const probe = new Date(now.getTime() + i * dayMs);
    const dateKey = dateKeyInTz(probe, tz);
    const dow = dowInTz(probe, tz);
    const wk = weekKeyForDow(dow);
    const intervals = settings.workingHours[wk] ?? [];
    if (intervals.length === 0) continue;

    const times: string[] = [];
    for (const interval of intervals) {
      const fromHM = parseHM(interval.from);
      const toHM = parseHM(interval.to);
      if (!fromHM || !toHM) continue;
      const step = settings.defaultDuration + settings.buffer;
      // Walk in `step` increments
      for (
        let mins = fromHM.h * 60 + fromHM.m;
        mins + settings.defaultDuration <= toHM.h * 60 + toHM.m;
        mins += step
      ) {
        const h = Math.floor(mins / 60);
        const m = mins % 60;
        const hhmm = `${pad(h)}:${pad(m)}`;
        const slotStart = localToUtc(dateKey, hhmm, tz);
        if (Number.isNaN(slotStart.getTime())) continue;
        if (slotStart.getTime() < now.getTime() + minLead * 60_000) continue;
        const slotEnd = new Date(
          slotStart.getTime() + settings.defaultDuration * 60_000,
        );
        const collides = busyIntervals.some(
          (b) => b.start < slotEnd && b.end > slotStart,
        );
        if (collides) continue;
        times.push(hhmm);
      }
    }
    if (times.length > 0) {
      times.sort();
      days.push({ date: dateKey, times });
    }
  }

  return days;
}

const RESERVED_SLUGS = new Set([
  "api", "auth", "login", "signup", "logout", "settings", "agenda", "clients",
  "protocoles", "kiika", "messagerie", "visio", "selene", "playground",
  "cgu", "cgv", "mentions-legales", "confidentialite", "subscription",
  "rdv", "annuler", "admin", "support", "help", "about", "blog", "news",
]);

const SLUG_RE = /^[a-z0-9][a-z0-9-]{1,58}[a-z0-9]$/;

export function isValidSlug(slug: string): boolean {
  if (!SLUG_RE.test(slug)) return false;
  if (RESERVED_SLUGS.has(slug)) return false;
  if (slug.includes("--")) return false; // double dash looks bad
  return true;
}

export function suggestSlug(fullName: string): string {
  const base = fullName
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return base || "praticien";
}
