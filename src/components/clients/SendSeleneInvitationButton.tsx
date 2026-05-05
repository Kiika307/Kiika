"use client";

import { useState, useTransition } from "react";
import { Send, Copy, Check, ExternalLink, Sparkles, Mail, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { createSeleneInvitation, sendSeleneInvitationByEmail } from "@/lib/selene-actions";

interface Props {
  clientId: string;
  clientName: string;
  hasTakenTest?: boolean;
}

export function SendSeleneInvitationButton({ clientId, clientName, hasTakenTest }: Props) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [emailSentTo, setEmailSentTo] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [sendPending, startSendTransition] = useTransition();

  const generate = () => {
    startTransition(async () => {
      const res = await createSeleneInvitation(clientId);
      if (!res.ok || !res.url) {
        toast.error(res.error ?? "Impossible de générer le lien");
        return;
      }
      setUrl(res.url);
      setEmailSentTo(null);
      setOpen(true);
    });
  };

  const sendByEmail = () => {
    startSendTransition(async () => {
      const res = await sendSeleneInvitationByEmail(clientId);
      if (!res.ok) {
        toast.error(res.error ?? "Échec de l'envoi");
        return;
      }
      setEmailSentTo(res.sentTo ?? null);
      toast.success(`Test envoyé à ${res.sentTo}`);
    });
  };

  const copyToClipboard = async () => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Lien copié dans le presse-papier");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Impossible de copier le lien");
    }
  };

  const mailto = url
    ? `mailto:?subject=${encodeURIComponent(
        `${clientName.split(" ")[0]}, votre test psychométrique Selene`,
      )}&body=${encodeURIComponent(
        `Bonjour ${clientName.split(" ")[0]},\n\nVoici le lien vers votre test psychométrique Selene. Comptez environ 15 à 20 minutes pour le compléter, dans un moment où vous serez tranquille.\n\n${url}\n\nVos réponses ne sont partagées qu'avec moi et nous en discuterons lors de notre prochaine séance.\n\nÀ très vite,`,
      )}`
    : "";

  return (
    <>
      <button
        type="button"
        onClick={generate}
        disabled={pending}
        className="inline-flex items-center justify-center gap-1.5 rounded-[10px] border border-[var(--color-gold)]/30 bg-[var(--color-gold-light)] px-3 py-2 text-[12px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-gold)]/20 disabled:opacity-50 transition-colors"
        title={hasTakenTest ? "Renvoyer un nouveau lien (l'ancien sera désactivé)" : "Générer un lien d'invitation au test Selene"}
      >
        <Send size={13} aria-hidden="true" />
        {pending ? "…" : hasTakenTest ? "Renvoyer le test" : "Envoyer le test Selene"}
      </button>

      {open && url && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="selene-link-title"
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          <div
            className="relative w-full max-w-lg rounded-[16px] bg-[var(--color-white-soft)] p-5 sm:p-6"
            style={{ boxShadow: "0 20px 60px rgba(15,31,58,0.25)" }}
          >
            <div className="flex items-start gap-3 mb-4">
              <div
                className="flex-shrink-0 inline-flex items-center justify-center rounded-full p-2"
                style={{ background: "linear-gradient(135deg, #C8A030 0%, #F5E8C0 100%)" }}
                aria-hidden="true"
              >
                <Sparkles size={20} className="text-[var(--color-navy)]" />
              </div>
              <div className="flex-1 min-w-0">
                <h2
                  id="selene-link-title"
                  className="font-serif text-[18px] sm:text-[20px] font-bold text-[var(--color-navy)]"
                >
                  Lien d&apos;invitation Selene
                </h2>
                <p className="mt-1 text-[13px] text-[var(--color-gray-soft)] leading-[1.5]">
                  Partagez ce lien avec <strong>{clientName}</strong>. Il pourra réaliser
                  le test depuis n&apos;importe quel appareil. Le lien est valable
                  <strong> 30 jours</strong> et fonctionne <strong>une seule fois</strong>.
                </p>
              </div>
            </div>

            <div className="rounded-[10px] border border-[var(--color-light-gray)] bg-white p-3 mb-4 break-all">
              <code className="text-[12px] text-[var(--color-navy)] font-mono">{url}</code>
            </div>

            {/* Primary action: KIIKA-branded email send */}
            {emailSentTo ? (
              <div
                className="flex items-center gap-2 rounded-[10px] px-4 py-3 text-[13px] mb-3"
                style={{ backgroundColor: "rgba(46, 138, 123, 0.10)", color: "var(--color-teal)" }}
              >
                <Check size={16} aria-hidden="true" />
                Envoyé à <strong>{emailSentTo}</strong>
              </div>
            ) : (
              <button
                type="button"
                onClick={sendByEmail}
                disabled={sendPending}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold mb-3 min-h-11 disabled:opacity-60"
                style={{ backgroundColor: "var(--color-gold)", color: "var(--color-navy)" }}
              >
                {sendPending ? (
                  <Loader2 size={14} className="animate-spin" aria-hidden="true" />
                ) : (
                  <Mail size={14} aria-hidden="true" />
                )}
                {sendPending ? "Envoi en cours…" : "Envoyer via KIIKA (recommandé)"}
              </button>
            )}

            {/* Secondary fallbacks */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={copyToClipboard}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] bg-white px-4 py-2.5 text-[12px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] min-h-10"
              >
                {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                {copied ? "Copié !" : "Copier le lien"}
              </button>
              <a
                href={mailto}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] bg-white px-4 py-2.5 text-[12px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] min-h-10"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Mon client mail
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-3 w-full text-[12px] text-[var(--color-gray-soft)] hover:text-[var(--color-navy)] py-2"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
