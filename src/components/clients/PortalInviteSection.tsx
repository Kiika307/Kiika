"use client";

import { useState, useTransition } from "react";
import { LinkIcon, Send, Copy, CheckCircle2, UserCog } from "lucide-react";
import { toast } from "sonner";
import { inviteClientToPortal } from "@/lib/portal-actions";
import type { ClientPortalState } from "@/lib/types";

interface PortalInviteSectionProps {
  clientId: string;
  clientFirstName: string;
  hasEmail: boolean;
  portal: ClientPortalState;
}

const STATUS_LABEL = {
  active: "Espace activé",
  invited: "Invitation envoyée",
  pending: "Pas encore invité",
} as const;

export function PortalInviteSection({
  clientId,
  clientFirstName,
  hasEmail,
  portal,
}: PortalInviteSectionProps) {
  const [pending, startTransition] = useTransition();
  const [lastUrl, setLastUrl] = useState<string | null>(null);

  const status: keyof typeof STATUS_LABEL = portal.userId
    ? "active"
    : portal.invitedAt
      ? "invited"
      : "pending";

  const termsAccepted = !!(
    portal.cguAcceptedAt && portal.cgvAcceptedAt && portal.rgpdAcceptedAt
  );

  function handleInvite() {
    startTransition(async () => {
      const res = await inviteClientToPortal(clientId);
      if (!res.ok) {
        toast.error(res.error ?? "Impossible d'envoyer l'invitation");
        return;
      }
      setLastUrl(res.inviteUrl ?? null);
      if (res.sent) {
        toast.success(`Invitation envoyée à ${clientFirstName}`);
      } else if (res.error) {
        toast.warning(res.error);
      } else {
        toast.success("Lien d'invitation prêt — copiable ci-dessous");
      }
    });
  }

  function handleCopy() {
    if (!lastUrl) return;
    navigator.clipboard.writeText(lastUrl).then(
      () => toast.success("Lien copié"),
      () => toast.error("Impossible de copier"),
    );
  }

  return (
    <section
      className="relative overflow-hidden rounded-[16px] bg-[var(--color-white-soft)] p-5 lg:col-span-2"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <header className="flex items-start justify-between gap-3 flex-wrap">
        <div className="flex items-start gap-2.5">
          <UserCog
            size={18}
            className="mt-0.5"
            style={{ color: status === "active" ? "var(--color-teal)" : "var(--color-gold)" }}
            aria-hidden="true"
          />
          <div>
            <h3 className="font-serif text-[15px] font-semibold text-[var(--color-navy)]">
              Espace client
            </h3>
            <p className="mt-0.5 text-[11.5px] text-[var(--color-gray-soft)] leading-[1.5]">
              {status === "active" && (
                <>
                  {clientFirstName} a activé son espace personnel
                  {portal.invitedAt && ` · invité le ${formatDate(portal.invitedAt)}`}
                  {!termsAccepted && " · CGU/CGV/RGPD pas encore acceptés"}
                </>
              )}
              {status === "invited" && (
                <>Invitation envoyée le {formatDate(portal.invitedAt!)} — en attente d'activation</>
              )}
              {status === "pending" &&
                (hasEmail
                  ? `${clientFirstName} n'a pas encore d'espace personnel. Envoyez l'invitation pour qu'il/elle puisse consulter ses RDV, documents et messages.`
                  : "Renseignez d'abord une adresse e-mail pour pouvoir inviter.")}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleInvite}
          disabled={pending || !hasEmail}
          className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-[12px] font-semibold text-white disabled:opacity-50 transition-opacity hover:opacity-90 active:opacity-80"
          style={{
            backgroundColor: status === "active" ? "var(--color-navy)" : "var(--color-gold)",
          }}
        >
          {status === "active" ? <LinkIcon size={13} /> : <Send size={13} />}
          {pending
            ? "Envoi…"
            : status === "active"
              ? "Renvoyer un lien"
              : status === "invited"
                ? "Renvoyer l'invitation"
                : "Inviter au portail"}
        </button>
      </header>

      {lastUrl && (
        <div className="mt-3 rounded-[10px] bg-[var(--color-cream)] px-3 py-2.5 flex items-center gap-2">
          <code className="flex-1 text-[11.5px] text-[var(--color-navy)] truncate">{lastUrl}</code>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1 rounded-[8px] border border-[var(--color-light-gray)] bg-white px-2 py-1 text-[11px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)]"
          >
            <Copy size={11} />
            Copier
          </button>
        </div>
      )}

      {status === "active" && termsAccepted && (
        <div className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] text-[var(--color-teal)]">
          <CheckCircle2 size={13} />
          CGU, CGV et RGPD acceptés
        </div>
      )}
    </section>
  );
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}
