"use client";

import { useMemo, useState, useTransition } from "react";
import { Calendar, Clock, Check, ArrowLeft, Loader2 } from "lucide-react";
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
const DAY_SHORT = new Intl.DateTimeFormat("fr-FR", {
  weekday: "short",
  day: "2-digit",
  month: "short",
});

function parseDateKey(key: string): Date {
  // "YYYY-MM-DD" — Date.parse with that string yields UTC midnight, which
  // is fine for label rendering.
  const [y, m, d] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
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

  const dayMap = useMemo(() => {
    const m = new Map<string, DaySlots>();
    for (const d of slots) m.set(d.date, d);
    return m;
  }, [slots]);

  const activeDay = selectedDate ? dayMap.get(selectedDate) : null;

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

      <div className="mb-5">
        <p className="text-[11px] uppercase tracking-wide text-[var(--color-gold)] font-semibold mb-2">
          Date
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2">
          {slots.map((d) => {
            const date = parseDateKey(d.date);
            const active = selectedDate === d.date;
            return (
              <button
                key={d.date}
                type="button"
                onClick={() => {
                  setSelectedDate(d.date);
                  setSelectedTime(null);
                }}
                className="shrink-0 rounded-[12px] px-3 py-2.5 text-center min-w-[78px] transition-colors border"
                style={{
                  backgroundColor: active
                    ? "var(--color-gold)"
                    : "var(--color-white-soft)",
                  borderColor: active
                    ? "var(--color-gold)"
                    : "var(--color-light-gray)",
                  color: active ? "var(--color-navy)" : "var(--color-navy)",
                }}
              >
                <div
                  className="text-[10px] uppercase tracking-wide"
                  style={{
                    color: active ? "var(--color-navy)" : "var(--color-gray-soft)",
                  }}
                >
                  {DAY_SHORT.format(date).split(" ")[0]}
                </div>
                <div className="font-serif text-[18px] font-bold">
                  {String(date.getUTCDate()).padStart(2, "0")}
                </div>
                <div className="text-[10px] capitalize">
                  {DAY_SHORT.format(date).split(" ")[1]?.replace(".", "") ?? ""}
                </div>
              </button>
            );
          })}
        </div>
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
