"use client";

import { useMemo, useState, useTransition } from "react";
import {
  Calendar,
  Clock,
  Check,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";
import type { DaySlots } from "@/lib/booking";
import {
  submitPublicBookingAction,
  type PublicBookingResult,
} from "@/app/rdv/[slug]/actions";

interface BookingPickerProps {
  slug: string;
  slots: DaySlots[];
  duration: number;
  timezone: string;
  therapistName: string;
}

const DAY_FMT = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
  day: "2-digit",
  month: "long",
});
const MONTH_FMT = new Intl.DateTimeFormat("fr-FR", {
  month: "long",
  year: "numeric",
});

const DOW_LABELS = ["L", "M", "M", "J", "V", "S", "D"];

function parseDateKey(key: string): Date {
  // "YYYY-MM-DD" — Date.parse with that string yields UTC midnight, which
  // is fine for label rendering.
  const [y, m, d] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
}

function formatDateKey(d: Date): string {
  // ISO date in UTC since the Date is normalised to UTC noon on day-d.
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

function startOfMonthUTC(d: Date): Date {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1, 12, 0, 0));
}

function addMonthsUTC(d: Date, n: number): Date {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + n, 1, 12, 0, 0));
}

/**
 * Build a 6×7 calendar grid for the given month, starting on Monday.
 * Days outside the month are still returned (faded in the UI) so the
 * grid keeps a constant 6-row height across navigation.
 */
function buildMonthGrid(viewMonth: Date): Date[] {
  const first = startOfMonthUTC(viewMonth);
  // Monday-based offset: getUTCDay() = 0 (Sun) … 6 (Sat); we want Mon=0.
  const dow = (first.getUTCDay() + 6) % 7;
  const start = new Date(first);
  start.setUTCDate(first.getUTCDate() - dow);
  const cells: Date[] = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setUTCDate(start.getUTCDate() + i);
    cells.push(d);
  }
  return cells;
}

export function BookingPicker({
  slug,
  slots,
  duration,
  timezone,
  therapistName,
}: BookingPickerProps) {
  const firstAvailable = slots[0]?.date ?? null;
  const [selectedDate, setSelectedDate] = useState<string | null>(firstAvailable);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmation, setConfirmation] =
    useState<PublicBookingResult | null>(null);

  // Initial visible month = month of the first available slot, or current
  // month as a fallback. Users can navigate freely with the chevrons.
  const initialView = useMemo(() => {
    const seed = firstAvailable ? parseDateKey(firstAvailable) : new Date();
    return startOfMonthUTC(seed);
  }, [firstAvailable]);
  const [viewMonth, setViewMonth] = useState<Date>(initialView);

  const dayMap = useMemo(() => {
    const m = new Map<string, DaySlots>();
    for (const d of slots) m.set(d.date, d);
    return m;
  }, [slots]);

  const grid = useMemo(() => buildMonthGrid(viewMonth), [viewMonth]);

  const lastAvailable = useMemo(() => {
    if (slots.length === 0) return null;
    return parseDateKey(slots[slots.length - 1].date);
  }, [slots]);

  const canGoPrev = useMemo(() => {
    if (!firstAvailable) return false;
    const firstAvailableMonth = startOfMonthUTC(parseDateKey(firstAvailable));
    return viewMonth.getTime() > firstAvailableMonth.getTime();
  }, [firstAvailable, viewMonth]);

  const canGoNext = useMemo(() => {
    if (!lastAvailable) return false;
    const lastMonth = startOfMonthUTC(lastAvailable);
    return viewMonth.getTime() < lastMonth.getTime();
  }, [lastAvailable, viewMonth]);

  const activeDay = selectedDate ? dayMap.get(selectedDate) : null;
  // "Today" in the user's local zone for the small marker under the day number.
  const todayKey = useMemo(() => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }, []);

  if (slots.length === 0) {
    return (
      <section
        className="rounded-[18px] p-8 text-center"
        style={{
          backgroundColor: "var(--color-white-soft)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <Calendar
          size={28}
          className="mx-auto text-[var(--color-gold)] mb-3"
          aria-hidden="true"
        />
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)]">
          Aucun créneau disponible pour le moment
        </h2>
        <p className="mt-2 text-[13.5px] text-[var(--color-gray-soft)] max-w-md mx-auto">
          Tous les créneaux ouverts sont déjà pris. Revenez plus tard ou
          contactez {therapistName} directement.
        </p>
      </section>
    );
  }

  if (confirmation?.ok) {
    return (
      <section
        className="rounded-[18px] p-8 sm:p-10 text-center"
        style={{
          backgroundColor: "var(--color-white-soft)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
          style={{ backgroundColor: "rgba(46,138,123,0.15)" }}
          aria-hidden="true"
        >
          <Check size={26} className="text-[var(--color-teal)]" />
        </div>
        <h2 className="font-serif text-[22px] font-bold text-[var(--color-navy)]">
          Rendez-vous confirmé !
        </h2>
        <p className="mt-3 text-[14px] text-[var(--color-navy)] leading-[1.6] max-w-md mx-auto">
          Votre réservation avec {therapistName} est validée. Un email de
          confirmation vient de vous être envoyé.
        </p>
        <p className="mt-2 text-[12.5px] text-[var(--color-gray-soft)]">
          Vous recevrez un rappel 24h avant la séance, avec un lien pour
          annuler en un clic si besoin.
        </p>
      </section>
    );
  }

  return (
    <section
      className="rounded-[18px] p-6 sm:p-8"
      style={{
        backgroundColor: "var(--color-white-soft)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <header className="flex items-center justify-between gap-3 flex-wrap mb-5">
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)]">
          Choisissez un créneau
        </h2>
        <p className="text-[12px] text-[var(--color-gray-soft)] inline-flex items-center gap-1.5">
          <Clock size={13} aria-hidden="true" />
          Séance de {duration} min · Fuseau {timezone.replace("_", " ")}
        </p>
      </header>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] uppercase tracking-wide text-[var(--color-gold)] font-semibold">
            Date
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setViewMonth(addMonthsUTC(viewMonth, -1))}
              disabled={!canGoPrev}
              className="inline-flex items-center justify-center w-8 h-8 rounded-[8px] border border-[var(--color-light-gray)] bg-[var(--color-white-soft)] text-[var(--color-navy)] hover:bg-[var(--color-cream)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Mois précédent"
            >
              <ChevronLeft size={14} aria-hidden="true" />
            </button>
            <div
              className="font-serif text-[15px] font-semibold text-[var(--color-navy)] capitalize min-w-[140px] text-center tabular"
              aria-live="polite"
            >
              {MONTH_FMT.format(viewMonth)}
            </div>
            <button
              type="button"
              onClick={() => setViewMonth(addMonthsUTC(viewMonth, 1))}
              disabled={!canGoNext}
              className="inline-flex items-center justify-center w-8 h-8 rounded-[8px] border border-[var(--color-light-gray)] bg-[var(--color-white-soft)] text-[var(--color-navy)] hover:bg-[var(--color-cream)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Mois suivant"
            >
              <ChevronRight size={14} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="rounded-[14px] p-3 sm:p-4"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div
            className="grid grid-cols-7 gap-1 mb-2"
            role="row"
          >
            {DOW_LABELS.map((label, i) => (
              <div
                key={i}
                className="text-center text-[10.5px] uppercase tracking-wide text-[var(--color-gray-soft)] font-semibold py-1"
              >
                {label}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1" role="grid">
            {grid.map((d) => {
              const key = formatDateKey(d);
              const inMonth = d.getUTCMonth() === viewMonth.getUTCMonth();
              const dayInfo = dayMap.get(key);
              const available = !!dayInfo;
              const active = selectedDate === key;
              const isToday = key === todayKey;
              const isWeekend = d.getUTCDay() === 0 || d.getUTCDay() === 6;
              return (
                <button
                  key={key}
                  type="button"
                  disabled={!available}
                  onClick={() => {
                    if (!available) return;
                    setSelectedDate(key);
                    setSelectedTime(null);
                  }}
                  className="aspect-square rounded-[10px] flex flex-col items-center justify-center transition-colors relative disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: active
                      ? "var(--color-gold)"
                      : available
                        ? "var(--color-white-soft)"
                        : "transparent",
                    color: active
                      ? "var(--color-navy)"
                      : available
                        ? "var(--color-navy)"
                        : "var(--color-gray-soft)",
                    opacity: !inMonth ? 0.35 : !available ? 0.55 : 1,
                    fontWeight: active ? 700 : available ? 600 : 400,
                  }}
                  aria-label={`${available ? "Réserver le " : "Indisponible le "}${DAY_FMT.format(d)}`}
                  aria-pressed={active}
                >
                  <span
                    className={
                      active
                        ? "font-serif text-[15px]"
                        : isWeekend && available
                          ? "font-serif text-[15px] italic"
                          : "font-serif text-[15px]"
                    }
                  >
                    {d.getUTCDate()}
                  </span>
                  {isToday && !active && (
                    <span
                      className="absolute bottom-1 w-1 h-1 rounded-full"
                      style={{ backgroundColor: "var(--color-gold)" }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-2.5 text-[11px] text-[var(--color-gray-soft)] inline-flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--color-gold)" }}
              aria-hidden="true"
            />
            Aujourd&apos;hui
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-[3px]"
              style={{ backgroundColor: "var(--color-white-soft)", border: "1px solid var(--color-light-gray)" }}
              aria-hidden="true"
            />
            Disponible
          </span>
        </p>
      </div>

      {activeDay && (
        <div>
          <p className="text-[11px] uppercase tracking-wide text-[var(--color-gold)] font-semibold mb-2">
            Heure
          </p>
          <div className="flex flex-wrap gap-2">
            {activeDay.times.map((t) => {
              const active = selectedTime === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedTime(t)}
                  className="rounded-[10px] px-4 py-2 text-[13px] font-semibold transition-colors border"
                  style={{
                    backgroundColor: active
                      ? "var(--color-navy)"
                      : "var(--color-white-soft)",
                    borderColor: active
                      ? "var(--color-navy)"
                      : "var(--color-light-gray)",
                    color: active ? "white" : "var(--color-navy)",
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-[11.5px] text-[var(--color-gray-soft)]">
            Capitalisé à votre fuseau · {DAY_FMT.format(parseDateKey(activeDay.date))}
          </p>
        </div>
      )}

      {selectedDate && selectedTime && (
        <BookingForm
          slug={slug}
          date={selectedDate}
          time={selectedTime}
          duration={duration}
          therapistName={therapistName}
          onBack={() => setSelectedTime(null)}
          onResult={(r) => setConfirmation(r)}
          error={confirmation && !confirmation.ok ? confirmation.error : null}
        />
      )}
    </section>
  );
}

interface BookingFormProps {
  slug: string;
  date: string;
  time: string;
  duration: number;
  therapistName: string;
  onBack: () => void;
  onResult: (r: PublicBookingResult) => void;
  error: string | null | undefined;
}

function BookingForm({
  slug,
  date,
  time,
  duration,
  therapistName,
  onBack,
  onResult,
  error,
}: BookingFormProps) {
  const [pending, startTransition] = useTransition();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [motif, setMotif] = useState("");
  const [consent, setConsent] = useState(false);

  const dateLabel = DAY_FMT.format(parseDateKey(date));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const res = await submitPublicBookingAction({
        therapistSlug: slug,
        date,
        time,
        fullName,
        email,
        phone,
        motif,
        consent,
      });
      onResult(res);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-7 pt-6 border-t border-[var(--color-light-gray)] space-y-4"
    >
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-[12px] text-[var(--color-gray-soft)] hover:text-[var(--color-navy)] transition-colors"
      >
        <ArrowLeft size={13} aria-hidden="true" />
        Choisir un autre créneau
      </button>

      <div
        className="rounded-[12px] p-4"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <p className="text-[11px] uppercase tracking-wide text-[var(--color-gold)] font-semibold mb-1">
          Récapitulatif
        </p>
        <p className="font-serif text-[15px] font-semibold text-[var(--color-navy)] capitalize">
          {dateLabel} à {time}
        </p>
        <p className="text-[12px] text-[var(--color-gray-soft)] mt-1">
          Séance de {duration} min avec {therapistName}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <Field
          label="Nom complet"
          required
          value={fullName}
          onChange={setFullName}
          autoComplete="name"
          minLength={2}
          maxLength={120}
        />
        <Field
          label="Adresse e-mail"
          type="email"
          required
          value={email}
          onChange={setEmail}
          autoComplete="email"
          maxLength={255}
        />
      </div>
      <Field
        label="Téléphone"
        type="tel"
        value={phone}
        onChange={setPhone}
        autoComplete="tel"
        maxLength={30}
      />

      <div>
        <label
          htmlFor="motif"
          className="block text-[12px] font-semibold text-[var(--color-navy)] mb-1.5"
        >
          Motif de la séance / anamnèse{" "}
          <span className="text-[var(--color-gray-soft)] font-normal">
            (optionnel)
          </span>
        </label>
        <textarea
          id="motif"
          rows={4}
          value={motif}
          onChange={(e) => setMotif(e.target.value)}
          maxLength={5000}
          placeholder="Décrivez brièvement la raison de votre venue, vos attentes, vos antécédents pertinents… Tout ce qui peut aider votre praticien à préparer la séance."
          className="w-full rounded-[10px] border border-[var(--color-light-gray)] bg-[var(--color-white-soft)] px-3 py-2.5 text-[14px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40 focus:border-[var(--color-gold)] resize-y"
        />
      </div>

      <label className="flex items-start gap-2.5 cursor-pointer select-none">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 cursor-pointer accent-[var(--color-gold)]"
        />
        <span className="text-[12px] leading-[1.55] text-[var(--color-navy)]">
          J&apos;accepte que les informations renseignées soient transmises à{" "}
          {therapistName} pour préparer la séance et confirmer le rendez-vous.
          Aucune donnée n&apos;est partagée avec des tiers.
        </span>
      </label>

      {error && (
        <p
          role="alert"
          className="rounded-[10px] bg-red-50 border border-red-200 px-3 py-2 text-[13px] text-red-700"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending || !consent}
        className="w-full inline-flex items-center justify-center gap-2 rounded-[12px] px-5 py-3 text-[14px] font-semibold text-white min-h-12 transition-opacity disabled:opacity-50"
        style={{ backgroundColor: "var(--color-gold)" }}
      >
        {pending ? (
          <Loader2 size={16} className="animate-spin" aria-hidden="true" />
        ) : (
          <Check size={16} aria-hidden="true" />
        )}
        {pending ? "Réservation en cours…" : "Confirmer ma réservation"}
      </button>
    </form>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: "text" | "email" | "tel";
  required?: boolean;
  autoComplete?: string;
  minLength?: number;
  maxLength?: number;
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
  minLength,
  maxLength,
}: FieldProps) {
  return (
    <div>
      <label className="block text-[12px] font-semibold text-[var(--color-navy)] mb-1.5">
        {label}
        {!required && (
          <span className="text-[var(--color-gray-soft)] font-normal">
            {" "}
            (optionnel)
          </span>
        )}
      </label>
      <input
        type={type}
        required={required}
        autoComplete={autoComplete}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-[10px] border border-[var(--color-light-gray)] bg-[var(--color-white-soft)] px-3 py-2.5 text-[14px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40 focus:border-[var(--color-gold)] min-h-11"
      />
    </div>
  );
}
