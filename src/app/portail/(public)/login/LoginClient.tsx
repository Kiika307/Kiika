"use client";

import { useActionState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { sendPortalMagicLink, startGoogleSignIn } from "./actions";
import type { PortalLoginState } from "./actions";

const ERROR_MAP: Record<string, string> = {
  no_client:
    "Votre adresse e-mail n'est pas reliée à un dossier. Demandez à votre praticien·ne de vous renvoyer un lien d'invitation.",
  callback: "La connexion a échoué. Réessayez ou demandez un nouveau lien.",
  oauth_failed: "La connexion Google a échoué. Réessayez ou utilisez un lien magique.",
};

export function LoginClient({
  next,
  initialError,
}: {
  next: string;
  initialError: string | null;
}) {
  const [state, action, pending] = useActionState<PortalLoginState, FormData>(
    sendPortalMagicLink,
    {},
  );
  const errorText = state.error ?? (initialError ? ERROR_MAP[initialError] ?? initialError : null);

  return (
    <div
      className="min-h-[100dvh] flex items-center justify-center px-4 py-8"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div
        className="w-full max-w-md rounded-[20px] bg-[var(--color-white-soft)] p-8"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="text-center mb-6">
          <div className="font-serif text-[28px] tracking-[0.18em] font-bold text-[var(--color-navy)]">
            KIIKA
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Espace personnel
          </div>
        </div>

        <h1 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] text-center mb-1">
          Connexion à votre espace
        </h1>
        <p className="text-[12.5px] text-[var(--color-gray-soft)] text-center mb-6">
          Recevez un lien magique par e-mail ou utilisez votre compte Google.
        </p>

        {errorText && (
          <div className="mb-4 rounded-[10px] border border-red-200 bg-red-50 px-3 py-2 text-[12.5px] text-red-700">
            {errorText}
          </div>
        )}

        {state.sent ? (
          <div className="rounded-[12px] border border-emerald-200 bg-emerald-50 px-4 py-4 text-[13px] text-emerald-800 flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <div>
              <div className="font-semibold mb-1">Lien envoyé !</div>
              Ouvrez l'e-mail que nous venons de vous envoyer pour vous connecter.
            </div>
          </div>
        ) : (
          <>
            <form action={action} className="space-y-3">
              <input type="hidden" name="next" value={next} />
              <label className="flex flex-col gap-1">
                <span className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
                  Votre e-mail
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoFocus
                  placeholder="vous@exemple.fr"
                  className="rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2.5 text-[14px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
                />
              </label>
              <button
                type="submit"
                disabled={pending}
                className="w-full inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white disabled:opacity-50"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                <Mail size={14} />
                {pending ? "Envoi…" : "M'envoyer un lien magique"}
              </button>
            </form>

            <div className="my-4 flex items-center gap-3 text-[11px] text-[var(--color-gray-soft)]">
              <span className="flex-1 h-px bg-[var(--color-light-gray)]" />
              ou
              <span className="flex-1 h-px bg-[var(--color-light-gray)]" />
            </div>

            <form action={startGoogleSignIn}>
              <input type="hidden" name="next" value={next} />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-[10px] border border-[var(--color-light-gray)] bg-white px-4 py-2.5 text-[13px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)]"
              >
                <GoogleIcon />
                Continuer avec Google
              </button>
            </form>

            <p className="mt-5 text-[11px] text-[var(--color-gray-soft)] text-center leading-[1.6]">
              En vous connectant, vous accepterez à la première étape les CGU, CGV et le
              consentement RGPD.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.5-5.9 7.5-11.3 7.5-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.5 29.3 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5c11.5 0 19.5-8.4 19.5-19.5 0-1.2-.1-2.3-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.5 29.3 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 43.5c5.2 0 9.9-1.9 13.5-5.1l-6.2-5.2c-2 1.5-4.6 2.3-7.3 2.3-5.4 0-9.9-3.4-11.4-8l-6.5 5C9.5 39.2 16.2 43.5 24 43.5z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.7 2-2 3.7-3.6 5l6.2 5.2c-.4.4 6.6-4.8 6.6-14.2 0-1.2-.1-2.3-.4-3.5z"
      />
    </svg>
  );
}
