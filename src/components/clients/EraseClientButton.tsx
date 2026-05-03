"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Trash2, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { eraseClient } from "@/lib/actions";

interface EraseClientButtonProps {
  clientId: string;
  clientName: string;
}

export function EraseClientButton({ clientId, clientName }: EraseClientButtonProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [reason, setReason] = useState("");
  const [pending, startTransition] = useTransition();

  const matches = confirmText.trim().toLowerCase() === clientName.trim().toLowerCase();

  const handleConfirm = () => {
    if (!matches) return;
    startTransition(async () => {
      const res = await eraseClient({
        clientId,
        confirmName: confirmText,
        reason: reason || null,
      });
      if (res.ok) {
        toast.success(`Client effacé définitivement (RGPD art. 17)`);
        setOpen(false);
        router.push("/clients");
        router.refresh();
      } else {
        toast.error(res.error ?? "Erreur lors de l'effacement");
      }
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-[10px] border border-red-200 bg-white px-3 py-2.5 text-[13px] font-semibold text-red-600 hover:bg-red-50 min-h-11"
        title="Effacer définitivement (RGPD)"
        aria-label="Effacer définitivement le client (droit à l'effacement RGPD)"
      >
        <Trash2 size={14} aria-hidden="true" />
        <span className="hidden sm:inline">Effacer</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="erase-title"
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        >
          <button
            type="button"
            onClick={() => !pending && setOpen(false)}
            aria-label="Fermer"
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
          />
          <div
            className="relative w-full max-w-lg rounded-[16px] bg-[var(--color-white-soft)] p-5 sm:p-6"
            style={{ boxShadow: "0 20px 60px rgba(15,31,58,0.35)" }}
          >
            <div className="flex items-start gap-3 mb-4">
              <div
                className="flex-shrink-0 rounded-full p-2"
                style={{ backgroundColor: "rgba(184,84,80,0.15)" }}
                aria-hidden="true"
              >
                <AlertTriangle size={22} className="text-[#B85450]" />
              </div>
              <div className="flex-1 min-w-0">
                <h2
                  id="erase-title"
                  className="font-serif text-[18px] sm:text-[20px] font-bold text-[var(--color-navy)]"
                >
                  Effacer définitivement {clientName} ?
                </h2>
                <p className="mt-1.5 text-[13px] text-[var(--color-gray-soft)] leading-[1.5]">
                  Cette action exécute le <strong>droit à l&apos;effacement (RGPD art. 17)</strong>.
                  Toutes les données liées à ce client seront supprimées de manière{" "}
                  <strong>irréversible</strong>&nbsp;: notes, plans de soin, séances,
                  documents, factures, consentements, messages, snapshots de profil.
                </p>
                <p className="mt-2 text-[12px] text-[var(--color-gray-soft)]">
                  Une preuve d&apos;effacement (initiales seules) sera conservée à des fins
                  de traçabilité réglementaire.
                </p>
              </div>
            </div>

            <div className="space-y-3 mt-5">
              <label className="block">
                <span className="block text-[12px] font-semibold uppercase tracking-wide text-[var(--color-navy)] mb-1.5">
                  Tapez le nom complet pour confirmer
                  <span className="text-red-600">&nbsp;*</span>
                </span>
                <input
                  type="text"
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  disabled={pending}
                  autoComplete="off"
                  placeholder={clientName}
                  className="w-full rounded-[10px] border border-[var(--color-light-gray)] bg-white px-3 py-2.5 text-[14px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-red-300 min-h-11"
                  aria-required="true"
                />
              </label>
              <label className="block">
                <span className="block text-[12px] font-semibold uppercase tracking-wide text-[var(--color-navy)] mb-1.5">
                  Motif (optionnel)
                </span>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  disabled={pending}
                  rows={2}
                  maxLength={500}
                  placeholder="Demande du client, fin de relation, doublon…"
                  className="w-full rounded-[10px] border border-[var(--color-light-gray)] bg-white px-3 py-2 text-[13px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40 resize-none"
                />
              </label>
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 mt-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                disabled={pending}
                className="rounded-[10px] border border-[var(--color-light-gray)] bg-white px-4 py-2.5 text-[13px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] min-h-11 disabled:opacity-50"
              >
                Annuler
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                disabled={pending || !matches}
                className="rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white min-h-11 transition-opacity disabled:opacity-50"
                style={{ backgroundColor: "#B85450" }}
              >
                {pending ? "Effacement…" : "Effacer définitivement"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
