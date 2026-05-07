"use client";

import { useState, useTransition } from "react";
import {
  Globe,
  Save,
  Copy,
  Check,
  Plus,
  X,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";
import { updateBookingSettings } from "@/app/settings/booking/actions";
import {
  isValidSlug,
  type WorkingHours,
  type WorkingInterval,
  type WeekKey,
} from "@/lib/booking";

interface BookingFormState {
  slug: string;
  enabled: boolean;
  defaultDuration: number;
  buffer: number;
  intro: string;
  advanceDays: number;
  workingHours: WorkingHours;
}

interface BookingSettingsFormProps {
  initial: BookingFormState;
  suggestedSlug: string;
}

const WEEK_LABELS: Record<WeekKey, string> = {
  mon: "Lundi",
  tue: "Mardi",
  wed: "Mercredi",
  thu: "Jeudi",
  fri: "Vendredi",
  sat: "Samedi",
  sun: "Dimanche",
};
const WEEK_ORDER: WeekKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

export function BookingSettingsForm({
  initial,
  suggestedSlug,
}: BookingSettingsFormProps) {
  const [state, setState] = useState<BookingFormState>(initial);
  const [pending, startTransition] = useTransition();
  const [copied, setCopied] = useState(false);

  const slug = state.slug || suggestedSlug;
  const slugValid = state.slug === "" || isValidSlug(state.slug);

  const publicUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/rdv/${slug}`
      : `https://kiika.intio.fr/rdv/${slug}`;

  const copyLink = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(publicUrl).then(() => {
      setCopied(true);
      toast.success("Lien copié");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSave = () => {
    startTransition(async () => {
      const res = await updateBookingSettings({
        slug: state.slug || null,
        enabled: state.enabled,
        defaultDuration: state.defaultDuration,
        buffer: state.buffer,
        intro: state.intro || null,
        workingHours: state.workingHours,
        advanceDays: state.advanceDays,
      });
      if (res.ok) toast.success("Réglages enregistrés");
      else toast.error(res.error ?? "Erreur");
    });
  };

  const updateInterval = (
    day: WeekKey,
    idx: number,
    patch: Partial<WorkingInterval>,
  ) => {
    setState((s) => {
      const arr = [...(s.workingHours[day] ?? [])];
      arr[idx] = { ...arr[idx], ...patch };
      return {
        ...s,
        workingHours: { ...s.workingHours, [day]: arr },
      };
    });
  };

  const addInterval = (day: WeekKey) => {
    setState((s) => {
      const arr = [...(s.workingHours[day] ?? [])];
      const last = arr[arr.length - 1];
      arr.push(
        last
          ? { from: last.to, to: addHour(last.to, 2) }
          : { from: "09:00", to: "12:00" },
      );
      return {
        ...s,
        workingHours: { ...s.workingHours, [day]: arr },
      };
    });
  };

  const removeInterval = (day: WeekKey, idx: number) => {
    setState((s) => {
      const arr = [...(s.workingHours[day] ?? [])];
      arr.splice(idx, 1);
      return {
        ...s,
        workingHours: { ...s.workingHours, [day]: arr },
      };
    });
  };

  return (
    <div className="space-y-5">
      {/* Slug + state */}
      <section
        className="rounded-[18px] p-6 sm:p-7"
        style={{
          backgroundColor: "var(--color-white-soft)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)] mb-1 inline-flex items-center gap-2">
          <Globe size={18} className="text-[var(--color-gold)]" aria-hidden="true" />
          Lien de votre page
        </h2>
        <p className="text-[12.5px] text-[var(--color-gray-soft)] leading-[1.55] mb-5">
          Ce lien est partageable sur votre site, vos cartes de visite, vos
          réseaux. Choisissez un identifiant simple à dicter au téléphone.
        </p>

        <div className="grid sm:grid-cols-[1fr_auto] gap-3 items-start">
          <div>
            <label className="block text-[12px] font-semibold text-[var(--color-navy)] mb-1.5">
              Identifiant
            </label>
            <div className="flex items-stretch rounded-[10px] border border-[var(--color-light-gray)] overflow-hidden bg-[var(--color-white-soft)] focus-within:ring-2 focus-within:ring-[var(--color-gold)]/40 focus-within:border-[var(--color-gold)]">
              <span className="px-3 py-2.5 bg-[var(--color-cream)]/60 text-[13px] text-[var(--color-gray-soft)] border-r border-[var(--color-light-gray)] tabular">
                kiika.intio.fr/rdv/
              </span>
              <input
                type="text"
                value={state.slug}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    slug: e.target.value.toLowerCase(),
                  }))
                }
                placeholder={suggestedSlug}
                pattern="[a-z0-9][a-z0-9-]{1,58}[a-z0-9]"
                maxLength={60}
                className="flex-1 min-w-0 px-3 py-2.5 text-[14px] text-[var(--color-navy)] bg-transparent focus:outline-none"
              />
            </div>
            <p className="mt-1.5 text-[11.5px] text-[var(--color-gray-soft)]">
              {slugValid
                ? state.slug
                  ? `Aperçu : ${publicUrl}`
                  : `Suggestion : ${suggestedSlug}`
                : "Minuscules, chiffres, tirets uniquement (3-60 caractères)."}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:pt-7">
            <button
              type="button"
              onClick={copyLink}
              disabled={!state.slug && !suggestedSlug}
              className="inline-flex items-center justify-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] bg-[var(--color-white-soft)] px-3.5 py-2.5 text-[12.5px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)]/40 min-h-11"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? "Copié" : "Copier"}
            </button>
            {state.enabled && state.slug && (
              <a
                href={`/rdv/${state.slug}`}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-1.5 rounded-[10px] px-3.5 py-2.5 text-[12.5px] font-semibold text-[var(--color-gold)] hover:underline min-h-11"
              >
                <ExternalLink size={13} />
                Ouvrir
              </a>
            )}
          </div>
        </div>

        <div
          className="mt-6 flex items-center justify-between rounded-[12px] p-4"
          style={{
            backgroundColor: state.enabled
              ? "rgba(46,138,123,0.08)"
              : "var(--color-cream)",
          }}
        >
          <div>
            <div className="text-[13.5px] font-semibold text-[var(--color-navy)]">
              {state.enabled ? "Page publique active" : "Page publique désactivée"}
            </div>
            <div className="text-[11.5px] text-[var(--color-gray-soft)] mt-0.5">
              {state.enabled
                ? "Les visiteurs peuvent réserver depuis votre lien."
                : "Activez quand vous êtes prêt(e) à recevoir des réservations."}
            </div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={state.enabled}
            onClick={() => setState((s) => ({ ...s, enabled: !s.enabled }))}
            className="relative inline-flex h-7 w-12 items-center rounded-full transition-colors"
            style={{
              backgroundColor: state.enabled
                ? "var(--color-teal)"
                : "var(--color-light-gray)",
            }}
          >
            <span
              className="inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform"
              style={{
                transform: state.enabled ? "translateX(22px)" : "translateX(2px)",
              }}
            />
          </button>
        </div>
      </section>

      {/* Présentation */}
      <section
        className="rounded-[18px] p-6 sm:p-7"
        style={{
          backgroundColor: "var(--color-white-soft)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)] mb-1">
          Présentation
        </h2>
        <p className="text-[12.5px] text-[var(--color-gray-soft)] mb-5 leading-[1.55]">
          Quelques lignes affichées en haut de votre page de réservation.
          Présentez votre approche, vos spécialités, ce qui se passe lors d&apos;une
          première séance.
        </p>
        <textarea
          rows={5}
          maxLength={1000}
          value={state.intro}
          onChange={(e) => setState((s) => ({ ...s, intro: e.target.value }))}
          placeholder="Hypnothérapeute spécialisée en gestion du stress et anxiété. Premières séances : 1h30, exploration du motif, mise en place d'un protocole personnalisé…"
          className="w-full rounded-[10px] border border-[var(--color-light-gray)] bg-[var(--color-white-soft)] px-3 py-2.5 text-[14px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40 focus:border-[var(--color-gold)] resize-y"
        />
        <p className="mt-1 text-[11px] text-[var(--color-gray-soft)] text-right">
          {state.intro.length} / 1000
        </p>
      </section>

      {/* Durée + tampon + horizon */}
      <section
        className="rounded-[18px] p-6 sm:p-7"
        style={{
          backgroundColor: "var(--color-white-soft)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)] mb-1">
          Format des séances
        </h2>
        <p className="text-[12.5px] text-[var(--color-gray-soft)] mb-5 leading-[1.55]">
          Durée par défaut, temps de respiration entre deux séances, et combien
          de jours à l&apos;avance les visiteurs peuvent réserver.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <NumberField
            label="Durée d'une séance"
            value={state.defaultDuration}
            onChange={(v) => setState((s) => ({ ...s, defaultDuration: v }))}
            suffix="min"
            min={15}
            max={240}
            step={15}
          />
          <NumberField
            label="Tampon entre séances"
            value={state.buffer}
            onChange={(v) => setState((s) => ({ ...s, buffer: v }))}
            suffix="min"
            min={0}
            max={120}
            step={5}
          />
          <NumberField
            label="Réservation à l'avance"
            value={state.advanceDays}
            onChange={(v) => setState((s) => ({ ...s, advanceDays: v }))}
            suffix="jours"
            min={1}
            max={90}
            step={1}
          />
        </div>
      </section>

      {/* Heures d'ouverture */}
      <section
        className="rounded-[18px] p-6 sm:p-7"
        style={{
          backgroundColor: "var(--color-white-soft)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)] mb-1">
          Disponibilités hebdomadaires
        </h2>
        <p className="text-[12.5px] text-[var(--color-gray-soft)] mb-5 leading-[1.55]">
          Configurez vos plages horaires habituelles. Vos rendez-vous existants
          dans l&apos;agenda sont automatiquement retirés des créneaux proposés.
        </p>
        <div className="space-y-3">
          {WEEK_ORDER.map((day) => (
            <div
              key={day}
              className="grid grid-cols-1 sm:grid-cols-[100px_1fr_auto] items-start gap-3 py-2 border-b border-[var(--color-light-gray)] last:border-0"
            >
              <div className="text-[13px] font-semibold text-[var(--color-navy)] pt-2">
                {WEEK_LABELS[day]}
              </div>
              <div className="space-y-2">
                {(state.workingHours[day] ?? []).map((interval, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="time"
                      value={interval.from}
                      onChange={(e) =>
                        updateInterval(day, idx, { from: e.target.value })
                      }
                      className="rounded-[8px] border border-[var(--color-light-gray)] bg-[var(--color-white-soft)] px-2.5 py-1.5 text-[13px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40 focus:border-[var(--color-gold)]"
                    />
                    <span className="text-[12px] text-[var(--color-gray-soft)]">→</span>
                    <input
                      type="time"
                      value={interval.to}
                      onChange={(e) =>
                        updateInterval(day, idx, { to: e.target.value })
                      }
                      className="rounded-[8px] border border-[var(--color-light-gray)] bg-[var(--color-white-soft)] px-2.5 py-1.5 text-[13px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40 focus:border-[var(--color-gold)]"
                    />
                    <button
                      type="button"
                      onClick={() => removeInterval(day, idx)}
                      className="rounded-[8px] p-1.5 text-[var(--color-gray-soft)] hover:text-[#B85450] hover:bg-red-50 transition-colors"
                      aria-label="Retirer cette plage"
                    >
                      <X size={14} aria-hidden="true" />
                    </button>
                  </div>
                ))}
                {(state.workingHours[day] ?? []).length === 0 && (
                  <p className="text-[11.5px] text-[var(--color-gray-soft)] italic py-1.5">
                    Fermé
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => addInterval(day)}
                className="inline-flex items-center gap-1 rounded-[8px] border border-[var(--color-light-gray)] px-2.5 py-1.5 text-[11.5px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)]/40 transition-colors self-start"
              >
                <Plus size={12} aria-hidden="true" />
                Plage
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Save bar */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleSave}
          disabled={pending || !slugValid}
          className="inline-flex items-center justify-center gap-2 rounded-[12px] px-5 py-3 text-[14px] font-semibold text-white min-h-12 transition-opacity disabled:opacity-50"
          style={{ backgroundColor: "var(--color-gold)" }}
        >
          {pending ? (
            <Loader2 size={15} className="animate-spin" aria-hidden="true" />
          ) : (
            <Save size={15} aria-hidden="true" />
          )}
          {pending ? "Enregistrement…" : "Enregistrer les réglages"}
        </button>
      </div>
    </div>
  );
}

interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
}

function NumberField({
  label,
  value,
  onChange,
  suffix,
  min,
  max,
  step,
}: NumberFieldProps) {
  return (
    <div>
      <label className="block text-[12px] font-semibold text-[var(--color-navy)] mb-1.5">
        {label}
      </label>
      <div className="flex items-stretch rounded-[10px] border border-[var(--color-light-gray)] overflow-hidden bg-[var(--color-white-soft)] focus-within:ring-2 focus-within:ring-[var(--color-gold)]/40 focus-within:border-[var(--color-gold)]">
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="flex-1 min-w-0 px-3 py-2.5 text-[14px] text-[var(--color-navy)] bg-transparent focus:outline-none tabular"
        />
        {suffix && (
          <span className="px-3 py-2.5 bg-[var(--color-cream)]/60 text-[13px] text-[var(--color-gray-soft)] border-l border-[var(--color-light-gray)]">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function addHour(hm: string, hours: number): string {
  const [h, m] = hm.split(":").map(Number);
  const total = (h * 60 + m + hours * 60) % (24 * 60);
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}
