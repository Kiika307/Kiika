"use client";

import { useEffect, useState, useTransition } from "react";
import {
  Calendar,
  Copy,
  Check,
  Loader2,
  Link2,
  Unlink,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";
import {
  disconnectGoogleCalendarAction,
  rotateIcalTokenAction,
  setGoogleCalendarSyncEnabledAction,
} from "@/app/settings/calendar/actions";

interface CalendarSettingsProps {
  icalToken: string;
  googleConnected: boolean;
  googleEmail: string | null;
  googleSyncEnabled: boolean;
  googleConfigured: boolean;
  status: string | null;
  error: string | null;
}

export function CalendarSettings({
  icalToken: initialToken,
  googleConnected: initialConnected,
  googleEmail: initialEmail,
  googleSyncEnabled: initialSyncEnabled,
  googleConfigured,
  status,
  error,
}: CalendarSettingsProps) {
  const [icalToken, setIcalToken] = useState(initialToken);
  const [connected, setConnected] = useState(initialConnected);
  const [googleEmail, setGoogleEmail] = useState(initialEmail);
  const [syncEnabled, setSyncEnabled] = useState(initialSyncEnabled);
  const [pending, startTransition] = useTransition();
  const [copied, setCopied] = useState(false);
  const [origin, setOrigin] = useState("https://kiika.intio.fr");

  useEffect(() => {
    if (typeof window !== "undefined") setOrigin(window.location.origin);
  }, []);

  // Surface the OAuth callback flash messages once.
  useEffect(() => {
    if (status === "connected") toast.success("Google Calendar connecté");
    if (error) toast.error(humanizeError(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const icalUrl = `${origin}/ical/${icalToken}.ics`;
  const webcalUrl = icalUrl.replace(/^https?:/, "webcal:");

  const copyIcal = (url: string) => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      toast.success("Lien copié");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const rotate = () => {
    startTransition(async () => {
      const res = await rotateIcalTokenAction();
      if (res.ok && res.token) {
        setIcalToken(res.token);
        toast.success("Lien régénéré — les anciens abonnements ne reçoivent plus rien");
      } else {
        toast.error(res.error ?? "Erreur");
      }
    });
  };

  const disconnect = () => {
    startTransition(async () => {
      const res = await disconnectGoogleCalendarAction();
      if (res.ok) {
        setConnected(false);
        setGoogleEmail(null);
        setSyncEnabled(false);
        toast.success("Google Calendar déconnecté");
      } else {
        toast.error(res.error ?? "Erreur");
      }
    });
  };

  const toggleSync = (next: boolean) => {
    const previous = syncEnabled;
    setSyncEnabled(next);
    startTransition(async () => {
      const res = await setGoogleCalendarSyncEnabledAction(next);
      if (!res.ok) {
        setSyncEnabled(previous);
        toast.error(res.error ?? "Erreur");
        return;
      }
      toast.success(
        next
          ? "Synchronisation Google Calendar activée"
          : "Synchronisation Google Calendar mise en pause",
      );
    });
  };

  return (
    <div className="space-y-5">
      {/* Google Calendar */}
      <section
        className="rounded-[18px] p-6 sm:p-7"
        style={{
          backgroundColor: "var(--color-white-soft)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)] mb-1 inline-flex items-center gap-2">
          <Calendar size={18} className="text-[var(--color-gold)]" aria-hidden="true" />
          Google Calendar
        </h2>
        <p className="text-[12.5px] text-[var(--color-gray-soft)] leading-[1.55] mb-5">
          Une fois connecté, chaque rendez-vous KIIKA est ajouté à votre Google
          Calendar. Vos événements personnels existants bloquent automatiquement
          les créneaux proposés sur votre page de réservation publique.
        </p>

        {!googleConfigured && (
          <div
            className="rounded-[12px] p-4 flex items-start gap-2.5 mb-4"
            style={{ backgroundColor: "rgba(184,84,80,0.08)" }}
          >
            <AlertCircle size={16} className="text-[#B85450] mt-0.5" aria-hidden="true" />
            <div>
              <div className="text-[13px] font-semibold text-[var(--color-navy)]">
                Pas encore activé côté serveur
              </div>
              <p className="text-[11.5px] text-[var(--color-gray-soft)] mt-0.5">
                L&apos;administrateur doit configurer un client OAuth Google
                (variables <code>GOOGLE_CALENDAR_CLIENT_ID</code> +{" "}
                <code>GOOGLE_CALENDAR_CLIENT_SECRET</code>).
              </p>
            </div>
          </div>
        )}

        {connected ? (
          <div className="space-y-4">
            <div
              className="flex items-center justify-between gap-4 rounded-[12px] p-4"
              style={{ backgroundColor: "rgba(46,138,123,0.08)" }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] shrink-0"
                  style={{ backgroundColor: "rgba(46,138,123,0.15)", color: "var(--color-teal)" }}
                  aria-hidden="true"
                >
                  <Link2 size={18} />
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-[var(--color-navy)]">
                    Connecté
                  </div>
                  <div className="text-[11.5px] text-[var(--color-gray-soft)]">
                    {googleEmail ?? "Compte Google connecté"}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={disconnect}
                disabled={pending}
                className="inline-flex items-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] px-3.5 py-2 text-[12.5px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)]/40 disabled:opacity-50 min-h-9"
              >
                <Unlink size={13} aria-hidden="true" />
                Déconnecter
              </button>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-[12px] p-4 border border-[var(--color-light-gray)]">
              <div>
                <div className="text-[13px] font-semibold text-[var(--color-navy)]">
                  Synchronisation active
                </div>
                <div className="text-[11.5px] text-[var(--color-gray-soft)] mt-0.5">
                  {syncEnabled
                    ? "Les nouveaux RDV KIIKA sont poussés vers Google Calendar."
                    : "Synchronisation en pause — vos RDV ne sont plus poussés."}
                </div>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={syncEnabled}
                onClick={() => toggleSync(!syncEnabled)}
                disabled={pending}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors disabled:opacity-50 shrink-0"
                style={{
                  backgroundColor: syncEnabled
                    ? "var(--color-teal)"
                    : "var(--color-light-gray)",
                }}
              >
                <span
                  className="inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform"
                  style={{
                    transform: syncEnabled ? "translateX(22px)" : "translateX(2px)",
                  }}
                />
              </button>
            </div>
          </div>
        ) : (
          <a
            href="/api/google-calendar/connect"
            className={`inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white min-h-11 transition-opacity ${
              !googleConfigured ? "opacity-50 pointer-events-none" : "hover:opacity-90"
            }`}
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            <Calendar size={14} aria-hidden="true" />
            Connecter mon Google Calendar
          </a>
        )}
      </section>

      {/* iCal feed */}
      <section
        className="rounded-[18px] p-6 sm:p-7"
        style={{
          backgroundColor: "var(--color-white-soft)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)] mb-1 inline-flex items-center gap-2">
          <Calendar size={18} className="text-[var(--color-gold)]" aria-hidden="true" />
          Flux iCal — Apple Calendar / Outlook / Google
        </h2>
        <p className="text-[12.5px] text-[var(--color-gray-soft)] leading-[1.55] mb-5">
          Lien d&apos;abonnement <strong>en lecture seule</strong>. Vos clients
          calendrier le rafraîchissent automatiquement (~1× par heure) — vos
          modifications dans KIIKA apparaissent sans intervention de votre part.
          Conservez ce lien privé : quiconque l&apos;obtient peut voir vos
          rendez-vous (sans noms complets, juste les créneaux).
        </p>

        <div className="space-y-3">
          <div>
            <label className="block text-[12px] font-semibold text-[var(--color-navy)] mb-1.5">
              URL HTTPS (Google Calendar, Outlook web)
            </label>
            <div className="flex items-stretch rounded-[10px] border border-[var(--color-light-gray)] overflow-hidden bg-[var(--color-white-soft)]">
              <input
                type="text"
                readOnly
                value={icalUrl}
                onClick={(e) => e.currentTarget.select()}
                className="flex-1 min-w-0 px-3 py-2.5 text-[13px] text-[var(--color-navy)] bg-transparent focus:outline-none tabular"
              />
              <button
                type="button"
                onClick={() => copyIcal(icalUrl)}
                className="inline-flex items-center gap-1.5 px-3.5 bg-[var(--color-cream)] text-[12.5px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)]/40 border-l border-[var(--color-light-gray)]"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                Copier
              </button>
            </div>
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[var(--color-navy)] mb-1.5">
              URL webcal:// (Apple Calendar, ouvre l&apos;app directement)
            </label>
            <div className="flex items-stretch rounded-[10px] border border-[var(--color-light-gray)] overflow-hidden bg-[var(--color-white-soft)]">
              <input
                type="text"
                readOnly
                value={webcalUrl}
                onClick={(e) => e.currentTarget.select()}
                className="flex-1 min-w-0 px-3 py-2.5 text-[13px] text-[var(--color-navy)] bg-transparent focus:outline-none tabular"
              />
              <a
                href={webcalUrl}
                className="inline-flex items-center gap-1.5 px-3.5 bg-[var(--color-cream)] text-[12.5px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)]/40 border-l border-[var(--color-light-gray)]"
              >
                Ouvrir
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={rotate}
          disabled={pending}
          className="mt-5 inline-flex items-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] bg-[var(--color-white-soft)] px-3.5 py-2 text-[12.5px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)]/40 disabled:opacity-50 min-h-9"
        >
          {pending ? (
            <Loader2 size={13} className="animate-spin" aria-hidden="true" />
          ) : (
            <RefreshCw size={13} aria-hidden="true" />
          )}
          Régénérer le lien (révoque les anciens abonnements)
        </button>
      </section>
    </div>
  );
}

function humanizeError(code: string): string {
  switch (code) {
    case "missing_code":
      return "Le retour Google est incomplet. Réessayez.";
    case "invalid_state":
      return "Lien d'autorisation invalide ou expiré.";
    case "exchange_failed":
      return "Google a refusé d'échanger le code. Réessayez.";
    case "google_not_configured":
      return "L'intégration Google n'est pas activée côté serveur.";
    case "server_misconfigured":
      return "Configuration serveur incomplète.";
    case "db_failed":
      return "Sauvegarde impossible — réessayez.";
    case "access_denied":
      return "Vous avez refusé l'accès. La synchronisation reste désactivée.";
    default:
      return "Une erreur s'est produite. Réessayez.";
  }
}
