"use client";

import { useState, useTransition, useMemo } from "react";
import { Plus, Trash2, ChevronUp, ChevronDown, Play, CheckCircle2, X, BookOpen } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/Badge";
import { FormField, FormSelect, FormTextarea } from "@/components/ui/FormField";
import { EmptyState } from "@/components/ui/EmptyState";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import {
  assignProtocolToClient,
  updateClientProtocol,
  removeClientProtocol,
} from "@/lib/actions";
import type { ClientProtocolPlan, PlanStatus, Protocol } from "@/lib/types";

interface PlanTabProps {
  clientId: string;
  plans: ClientProtocolPlan[];
  protocols: Protocol[];
}

const STATUS_LABEL: Record<PlanStatus, string> = {
  planned: "Planifié",
  in_progress: "En cours",
  done: "Terminé",
  abandoned: "Abandonné",
};

const STATUS_COLOR: Record<PlanStatus, string> = {
  planned: "#5B8FB9",
  in_progress: "#C8A030",
  done: "#2E8A7B",
  abandoned: "#999999",
};

export function PlanTab({ clientId, plans, protocols }: PlanTabProps) {
  const [adding, setAdding] = useState(false);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const { confirm, dialog } = useConfirm();

  const assignedIds = useMemo(() => new Set(plans.map((p) => p.protocolId)), [plans]);
  const available = useMemo(
    () => protocols.filter((p) => !assignedIds.has(p.id)),
    [protocols, assignedIds],
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)]">
          Plan de soin
          <span className="ml-2 text-[12px] font-normal text-[var(--color-gray-soft)]">
            {plans.length} protocole{plans.length > 1 ? "s" : ""}
          </span>
        </h2>
        {!adding && (
          <button
            type="button"
            onClick={() => setAdding(true)}
            className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-[12px] font-semibold text-white"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            <Plus size={14} />
            Assigner un protocole
          </button>
        )}
      </div>

      {error && (
        <div className="rounded-[10px] bg-red-50 border border-red-200 px-4 py-2 text-[13px] text-red-700">
          {error}
        </div>
      )}

      {adding && (
        <AddProtocolForm
          available={available}
          pending={pending}
          onCancel={() => setAdding(false)}
          onSubmit={(protocolId, sessionsTotal, notes) => {
            setError(null);
            startTransition(async () => {
              const res = await assignProtocolToClient({
                clientId,
                protocolId,
                sessionsTotal,
                notes,
              });
              if (res.ok) {
                setAdding(false);
                toast.success("Protocole assigné");
              } else {
                setError(res.error ?? "Erreur");
                toast.error(res.error ?? "Impossible d'assigner");
              }
            });
          }}
        />
      )}

      {plans.length === 0 && !adding && (
        <div
          className="rounded-[16px]"
          style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
        >
          <EmptyState
            icon={BookOpen}
            title="Aucun protocole dans le plan de soin"
            message="Assignez un protocole de la bibliothèque pour structurer l'accompagnement."
            action={
              <button
                type="button"
                onClick={() => setAdding(true)}
                className="inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white min-h-11"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                <Plus size={14} aria-hidden="true" />
                Premier protocole
              </button>
            }
          />
        </div>
      )}

      <div className="space-y-3">
        {plans.map((plan) => (
          <PlanRow
            key={plan.id}
            plan={plan}
            pending={pending}
            onUpdate={(patch) => {
              setError(null);
              startTransition(async () => {
                const res = await updateClientProtocol(plan.id, patch);
                if (res.ok) {
                  if (patch.status) toast.success(`Statut : ${STATUS_LABEL[patch.status]}`);
                } else {
                  setError(res.error ?? "Erreur");
                  toast.error(res.error ?? "Impossible de mettre à jour");
                }
              });
            }}
            onRemove={async () => {
              const ok = await confirm({
                title: "Retirer le protocole",
                message: "Retirer ce protocole du plan de soin ? Les sessions associées resteront dans l'historique.",
                confirmLabel: "Retirer",
                destructive: true,
              });
              if (!ok) return;
              setError(null);
              startTransition(async () => {
                const res = await removeClientProtocol(plan.id);
                if (res.ok) {
                  toast.success("Protocole retiré du plan");
                } else {
                  setError(res.error ?? "Erreur");
                  toast.error(res.error ?? "Impossible de retirer");
                }
              });
            }}
          />
        ))}
      </div>
      {dialog}
    </div>
  );
}

function PlanRow({
  plan,
  pending,
  onUpdate,
  onRemove,
}: {
  plan: ClientProtocolPlan;
  pending: boolean;
  onUpdate: (
    patch: Parameters<typeof updateClientProtocol>[1],
  ) => void;
  onRemove: () => void;
}) {
  const total = plan.sessionsTotal ?? 0;
  const progress = total > 0 ? Math.min(100, Math.round((plan.sessionsDone / total) * 100)) : 0;

  return (
    <article
      className="rounded-[16px] bg-white p-5"
      style={{ boxShadow: "var(--shadow-card)", borderLeft: `4px solid ${plan.protocolColor}` }}
    >
      <header className="flex items-start gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-[15px] font-semibold text-[var(--color-navy)]">
            {plan.protocolName}
          </h3>
          <div className="mt-1 flex items-center gap-2 text-[11px] text-[var(--color-gray-soft)]">
            <span>{plan.practice}</span>
            <span>·</span>
            <span>
              {plan.sessionsDone} / {plan.sessionsTotal ?? "?"} séances
            </span>
          </div>
        </div>
        <Badge color={STATUS_COLOR[plan.status]}>{STATUS_LABEL[plan.status]}</Badge>
        <button
          type="button"
          onClick={onRemove}
          disabled={pending}
          className="rounded p-1.5 text-[var(--color-gray-soft)] hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
          title="Retirer"
          aria-label="Retirer ce protocole du plan"
        >
          <Trash2 size={14} aria-hidden="true" />
        </button>
      </header>

      {total > 0 && (
        <div className="mb-3">
          <div className="h-2 rounded-full bg-[var(--color-light-gray)] overflow-hidden">
            <div
              className="h-full transition-all"
              style={{ width: `${progress}%`, backgroundColor: plan.protocolColor }}
            />
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => onUpdate({ sessionsDone: Math.max(0, plan.sessionsDone - 1) })}
          disabled={pending || plan.sessionsDone === 0}
          className="inline-flex items-center justify-center w-8 h-8 rounded-[8px] border border-[var(--color-light-gray)] text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-30"
          title="Séance −"
        >
          <ChevronDown size={14} />
        </button>
        <button
          type="button"
          onClick={() => onUpdate({ sessionsDone: plan.sessionsDone + 1 })}
          disabled={pending}
          className="inline-flex items-center justify-center w-8 h-8 rounded-[8px] border border-[var(--color-light-gray)] text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
          title="Séance +"
        >
          <ChevronUp size={14} />
        </button>

        <div className="flex-1" />

        {plan.status === "planned" && (
          <button
            type="button"
            onClick={() => onUpdate({ status: "in_progress" })}
            disabled={pending}
            className="inline-flex items-center gap-1.5 rounded-[8px] px-3 py-1.5 text-[12px] font-semibold text-white disabled:opacity-50"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            <Play size={12} />
            Démarrer
          </button>
        )}
        {plan.status === "in_progress" && (
          <button
            type="button"
            onClick={() => onUpdate({ status: "done" })}
            disabled={pending}
            className="inline-flex items-center gap-1.5 rounded-[8px] px-3 py-1.5 text-[12px] font-semibold text-white disabled:opacity-50"
            style={{ backgroundColor: "#2E8A7B" }}
          >
            <CheckCircle2 size={12} />
            Marquer terminé
          </button>
        )}
        {(plan.status === "planned" || plan.status === "in_progress") && (
          <button
            type="button"
            onClick={() => onUpdate({ status: "abandoned" })}
            disabled={pending}
            className="inline-flex items-center gap-1.5 rounded-[8px] border border-[var(--color-light-gray)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-gray-soft)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
          >
            <X size={12} />
            Abandonner
          </button>
        )}
        {(plan.status === "done" || plan.status === "abandoned") && (
          <button
            type="button"
            onClick={() => onUpdate({ status: "in_progress" })}
            disabled={pending}
            className="inline-flex items-center gap-1.5 rounded-[8px] border border-[var(--color-light-gray)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
          >
            Réouvrir
          </button>
        )}
      </div>

      {plan.notes && (
        <p className="mt-3 text-[12px] text-[var(--color-gray-soft)] whitespace-pre-wrap">
          {plan.notes}
        </p>
      )}
    </article>
  );
}

function AddProtocolForm({
  available,
  pending,
  onCancel,
  onSubmit,
}: {
  available: Protocol[];
  pending: boolean;
  onCancel: () => void;
  onSubmit: (protocolId: number, sessionsTotal: number | null, notes: string | null) => void;
}) {
  const [protocolId, setProtocolId] = useState<string>("");
  const [sessionsTotal, setSessionsTotal] = useState<string>("");
  const [notes, setNotes] = useState("");

  const selected = protocolId ? available.find((p) => p.id === Number(protocolId)) : null;

  return (
    <div className="rounded-[16px] bg-white p-5 space-y-3" style={{ boxShadow: "var(--shadow-card)" }}>
      <FormSelect
        label="Protocole"
        value={protocolId}
        onChange={(e) => {
          setProtocolId(e.target.value);
          const p = available.find((x) => x.id === Number(e.target.value));
          if (p) setSessionsTotal(String(p.sessions));
        }}
        required
      >
        <option value="">Choisir un protocole…</option>
        {available.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name} — {p.practice}
          </option>
        ))}
      </FormSelect>

      {selected && (
        <p className="text-[12px] text-[var(--color-gray-soft)]">{selected.description}</p>
      )}

      <div className="grid grid-cols-2 gap-3">
        <FormField
          label="Séances prévues"
          type="number"
          min={1}
          value={sessionsTotal}
          onChange={(e) => setSessionsTotal(e.target.value)}
        />
      </div>

      <FormTextarea
        label="Notes"
        rows={3}
        placeholder="Notes (optionnel)…"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          disabled={pending}
          className="rounded-[10px] border border-[var(--color-light-gray)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
        >
          Annuler
        </button>
        <button
          type="button"
          onClick={() =>
            protocolId &&
            onSubmit(
              Number(protocolId),
              sessionsTotal ? Number(sessionsTotal) : null,
              notes.trim() || null,
            )
          }
          disabled={pending || !protocolId}
          className="rounded-[10px] px-3 py-1.5 text-[12px] font-semibold text-white disabled:opacity-50"
          style={{ backgroundColor: "var(--color-gold)" }}
        >
          {pending ? "…" : "Assigner"}
        </button>
      </div>
    </div>
  );
}
