"use client";

import { useState, useTransition, useMemo } from "react";
import Link from "next/link";
import { Plus, Trash2, Pencil, Save, X, FileText, Receipt, Eye, Send, Download } from "lucide-react";
import { toast } from "sonner";
import { FormField, FormSelect, FormTextarea } from "@/components/ui/FormField";
import { EmptyState } from "@/components/ui/EmptyState";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import { addInvoice, updateInvoice, deleteInvoice } from "@/lib/actions";
import { exportInvoicePdf } from "@/lib/pdf-export";
import type { TherapistBilling } from "@/lib/data";
import type { Client, Invoice, InvoiceStatut, ModeFinancement } from "@/lib/types";

interface InvoicesTabProps {
  clientId: string;
  client: Client;
  invoices: Invoice[];
  therapistName: string;
  therapistRole: string;
  billing: TherapistBilling;
}

const STATUT_LABEL: Record<InvoiceStatut, string> = {
  en_attente: "En attente",
  envoyee: "Envoyée",
  reglee: "Réglée",
  relance: "Relance",
  annulee: "Annulée",
};

const STATUT_COLOR: Record<InvoiceStatut, string> = {
  en_attente: "#5B8FB9",
  envoyee: "#C8A030",
  reglee: "#2E8A7B",
  relance: "#D4622A",
  annulee: "#999999",
};

const MODE_LABEL: Record<ModeFinancement, string> = {
  autofinancement: "Autofinancement",
  cpf: "CPF",
  mutuelle: "Mutuelle",
  employeur: "Employeur",
  autre: "Autre",
};

const EUR = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" });

export function InvoicesTab({
  clientId,
  client,
  invoices,
  therapistName,
  therapistRole,
  billing,
}: InvoicesTabProps) {
  const [adding, setAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const { confirm, dialog } = useConfirm();
  const previewInvoice = previewId ? invoices.find((i) => i.id === previewId) ?? null : null;

  const totals = useMemo(() => {
    let billed = 0;
    let paid = 0;
    let outstanding = 0;
    for (const inv of invoices) {
      if (inv.statut === "annulee") continue;
      billed += inv.montant;
      paid += inv.montantRegle;
      if (inv.statut !== "reglee") outstanding += inv.montant - inv.montantRegle;
    }
    return { billed, paid, outstanding };
  }, [invoices]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)]">
          Facturation
          <span className="ml-2 text-[12px] font-normal text-[var(--color-gray-soft)]">
            {invoices.length} facture{invoices.length > 1 ? "s" : ""}
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
            Nouvelle facture
          </button>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3">
        <SummaryCard label="Facturé" value={EUR.format(totals.billed)} color="#5B8FB9" />
        <SummaryCard label="Encaissé" value={EUR.format(totals.paid)} color="#2E8A7B" />
        <SummaryCard label="En attente" value={EUR.format(totals.outstanding)} color="#D4622A" />
      </div>

      {error && (
        <div className="rounded-[10px] bg-red-50 border border-red-200 px-4 py-2 text-[13px] text-red-700">
          {error}
        </div>
      )}

      {adding && (
        <InvoiceEditor
          pending={pending}
          onCancel={() => setAdding(false)}
          onSubmit={(input) => {
            setError(null);
            startTransition(async () => {
              const res = await addInvoice({ clientId, ...input });
              if (res.ok) {
                setAdding(false);
                toast.success("Facture créée");
              } else {
                setError(res.error ?? "Erreur");
                toast.error(res.error ?? "Impossible de créer la facture");
              }
            });
          }}
        />
      )}

      {invoices.length === 0 && !adding && (
        <div
          className="rounded-[16px]"
          style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
        >
          <EmptyState
            icon={Receipt}
            title="Aucune facture émise"
            message="Créez la première facture pour ce client (séances, forfaits, accompagnements)."
            action={
              <button
                type="button"
                onClick={() => setAdding(true)}
                className="inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white min-h-11"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                <Plus size={14} aria-hidden="true" />
                Première facture
              </button>
            }
          />
        </div>
      )}

      <div className="space-y-2">
        {invoices.map((inv) =>
          editingId === inv.id ? (
            <InvoiceEditor
              key={inv.id}
              initial={inv}
              pending={pending}
              onCancel={() => setEditingId(null)}
              onSubmit={(input) => {
                setError(null);
                startTransition(async () => {
                  const res = await updateInvoice(inv.id, input);
                  if (res.ok) {
                    setEditingId(null);
                    toast.success("Facture mise à jour");
                  } else {
                    setError(res.error ?? "Erreur");
                    toast.error(res.error ?? "Impossible de mettre à jour");
                  }
                });
              }}
            />
          ) : (
            <InvoiceRow
              key={inv.id}
              invoice={inv}
              pending={pending}
              onPreview={() => setPreviewId(inv.id)}
              onEdit={() => setEditingId(inv.id)}
              onDelete={async () => {
                const ok = await confirm({
                  title: "Supprimer la facture",
                  message: `Supprimer la facture ${inv.numero} (${EUR.format(inv.montant)}) ? Cette action est irréversible.`,
                  confirmLabel: "Supprimer",
                  destructive: true,
                });
                if (!ok) return;
                startTransition(async () => {
                  const res = await deleteInvoice(inv.id);
                  if (res.ok) {
                    toast.success("Facture supprimée");
                  } else {
                    setError(res.error ?? "Erreur");
                    toast.error(res.error ?? "Impossible de supprimer");
                  }
                });
              }}
              onStatusChange={(statut) => {
                startTransition(async () => {
                  const patch: Parameters<typeof updateInvoice>[1] = { statut };
                  if (statut === "reglee") patch.montantRegle = inv.montant;
                  const res = await updateInvoice(inv.id, patch);
                  if (res.ok) {
                    toast.success(`Statut : ${STATUT_LABEL[statut]}`);
                  } else {
                    setError(res.error ?? "Erreur");
                    toast.error(res.error ?? "Impossible de changer le statut");
                  }
                });
              }}
            />
          ),
        )}
      </div>
      {previewInvoice && (
        <InvoicePreviewModal
          invoice={previewInvoice}
          client={client}
          therapistName={therapistName}
          therapistRole={therapistRole}
          billing={billing}
          pending={pending}
          onClose={() => setPreviewId(null)}
          onSend={() => {
            startTransition(async () => {
              const res = await updateInvoice(previewInvoice.id, { statut: "envoyee" });
              if (res.ok) {
                toast.success(`Facture ${previewInvoice.numero} marquée comme envoyée`);
                setPreviewId(null);
              } else {
                setError(res.error ?? "Erreur");
                toast.error(res.error ?? "Impossible de marquer comme envoyée");
              }
            });
          }}
          onDownload={() => {
            exportInvoicePdf({
              invoice: previewInvoice,
              client,
              therapistName,
              therapistRole,
              billing,
            });
          }}
        />
      )}
      {dialog}
    </div>
  );
}

function SummaryCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div
      className="rounded-[14px] bg-white p-4"
      style={{ boxShadow: "var(--shadow-card)", borderTop: `3px solid ${color}` }}
    >
      <div className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
        {label}
      </div>
      <div className="mt-1 font-serif text-[20px] font-bold text-[var(--color-navy)] tabular">{value}</div>
    </div>
  );
}

function InvoiceRow({
  invoice,
  pending,
  onPreview,
  onEdit,
  onDelete,
  onStatusChange,
}: {
  invoice: Invoice;
  pending: boolean;
  onPreview: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onStatusChange: (s: InvoiceStatut) => void;
}) {
  return (
    <article
      className="rounded-[12px] bg-white px-4 py-3"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="flex items-center gap-4">
        <FileText size={18} className="text-[var(--color-gray-soft)]" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-semibold text-[var(--color-navy)]">
              {invoice.numero}
            </span>
            {invoice.modeFinancement && (
              <span className="text-[11px] text-[var(--color-gray-soft)]">
                · {MODE_LABEL[invoice.modeFinancement]}
              </span>
            )}
          </div>
          <div className="text-[11px] text-[var(--color-gray-soft)]">
            Émise le {formatDate(invoice.dateEmission)}
            {invoice.dateEcheance && ` · échéance ${formatDate(invoice.dateEcheance)}`}
          </div>
        </div>
        <div className="text-right">
          <div className="font-serif text-[15px] font-bold text-[var(--color-navy)] tabular">
            {EUR.format(invoice.montant)}
          </div>
          {invoice.montantRegle > 0 && invoice.montantRegle < invoice.montant && (
            <div className="text-[11px] text-[var(--color-teal)] tabular">
              {EUR.format(invoice.montantRegle)} payé
            </div>
          )}
        </div>
        <select
          value={invoice.statut}
          onChange={(e) => onStatusChange(e.target.value as InvoiceStatut)}
          disabled={pending}
          className="rounded-[8px] border border-[var(--color-light-gray)] px-2 py-1 text-[12px] font-semibold disabled:opacity-50 min-h-9"
          style={{ color: STATUT_COLOR[invoice.statut] }}
        >
          {(Object.keys(STATUT_LABEL) as InvoiceStatut[]).map((s) => (
            <option key={s} value={s}>{STATUT_LABEL[s]}</option>
          ))}
        </select>
        <button
          type="button"
          onClick={onPreview}
          disabled={pending}
          className="inline-flex items-center justify-center rounded text-[var(--color-gray-soft)] hover:bg-[var(--color-light-gray)] hover:text-[var(--color-navy)] disabled:opacity-50 min-h-9 min-w-9"
          title="Aperçu"
          aria-label="Voir l'aperçu de la facture"
        >
          <Eye size={13} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onEdit}
          disabled={pending}
          className="inline-flex items-center justify-center rounded text-[var(--color-gray-soft)] hover:bg-[var(--color-light-gray)] hover:text-[var(--color-navy)] disabled:opacity-50 min-h-9 min-w-9"
          title="Modifier"
          aria-label="Modifier la facture"
        >
          <Pencil size={13} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onDelete}
          disabled={pending}
          className="inline-flex items-center justify-center rounded text-[var(--color-gray-soft)] hover:bg-red-50 hover:text-red-600 disabled:opacity-50 min-h-9 min-w-9"
          title="Supprimer"
          aria-label="Supprimer la facture"
        >
          <Trash2 size={13} aria-hidden="true" />
        </button>
      </div>
      {invoice.notes && (
        <p className="mt-2 text-[12px] text-[var(--color-gray-soft)] whitespace-pre-wrap pl-7">
          {invoice.notes}
        </p>
      )}
    </article>
  );
}

interface EditorInput {
  numero: string;
  montant: number;
  modeFinancement?: ModeFinancement | null;
  dateEmission?: string;
  dateEcheance?: string | null;
  notes?: string | null;
}

function InvoiceEditor({
  initial,
  pending,
  onCancel,
  onSubmit,
}: {
  initial?: Invoice;
  pending: boolean;
  onCancel: () => void;
  onSubmit: (input: EditorInput) => void;
}) {
  const [numero, setNumero] = useState(initial?.numero ?? autoNumero());
  const [montant, setMontant] = useState(String(initial?.montant ?? ""));
  const [modeFinancement, setModeFinancement] = useState<ModeFinancement | "">(
    initial?.modeFinancement ?? "",
  );
  const [dateEmission, setDateEmission] = useState(
    initial?.dateEmission ?? new Date().toISOString().slice(0, 10),
  );
  const [dateEcheance, setDateEcheance] = useState(initial?.dateEcheance ?? "");
  const [notes, setNotes] = useState(initial?.notes ?? "");

  return (
    <div className="rounded-[12px] bg-white p-4 space-y-3" style={{ boxShadow: "var(--shadow-card)" }}>
      <div className="grid grid-cols-3 gap-3">
        <FormField
          label="Numéro"
          type="text"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          required
        />
        <FormField
          label="Montant (€)"
          type="number"
          min={0}
          step={0.01}
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
          required
        />
        <FormSelect
          label="Mode de financement"
          value={modeFinancement}
          onChange={(e) => setModeFinancement(e.target.value as ModeFinancement | "")}
        >
          <option value="">—</option>
          {(Object.keys(MODE_LABEL) as ModeFinancement[]).map((m) => (
            <option key={m} value={m}>{MODE_LABEL[m]}</option>
          ))}
        </FormSelect>
        <FormField
          label="Date d'émission"
          type="date"
          value={dateEmission}
          onChange={(e) => setDateEmission(e.target.value)}
        />
        <FormField
          label="Date d'échéance"
          type="date"
          value={dateEcheance}
          onChange={(e) => setDateEcheance(e.target.value)}
        />
      </div>
      <FormTextarea
        label="Notes"
        rows={2}
        placeholder="Notes (optionnel)…"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          disabled={pending}
          className="inline-flex items-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
        >
          <X size={12} />
          Annuler
        </button>
        <button
          type="button"
          onClick={() =>
            onSubmit({
              numero: numero.trim(),
              montant: Number(montant) || 0,
              modeFinancement: modeFinancement || null,
              dateEmission: dateEmission || undefined,
              dateEcheance: dateEcheance || null,
              notes: notes.trim() || null,
            })
          }
          disabled={pending || !numero.trim() || !montant}
          className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-1.5 text-[12px] font-semibold text-white disabled:opacity-50"
          style={{ backgroundColor: "var(--color-gold)" }}
        >
          <Save size={12} />
          {pending ? "…" : "Enregistrer"}
        </button>
      </div>
    </div>
  );
}

function autoNumero(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hhmm = String(now.getHours()).padStart(2, "0") + String(now.getMinutes()).padStart(2, "0");
  return `F-${yyyy}${mm}${dd}-${hhmm}`;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" });
}

function InvoicePreviewModal({
  invoice,
  client,
  therapistName,
  therapistRole,
  billing,
  pending,
  onClose,
  onSend,
  onDownload,
}: {
  invoice: Invoice;
  client: Client;
  therapistName: string;
  therapistRole: string;
  billing: TherapistBilling;
  pending: boolean;
  onClose: () => void;
  onSend: () => void;
  onDownload: () => void;
}) {
  const alreadySent =
    invoice.statut === "envoyee" || invoice.statut === "reglee" || invoice.statut === "relance";
  const isAssujetti = billing.tvaRegime === "assujetti" && billing.tvaRate != null;
  const tvaRate = isAssujetti ? Number(billing.tvaRate) : 0;
  const ttc = invoice.montant;
  const ht = isAssujetti ? +(ttc / (1 + tvaRate / 100)).toFixed(2) : ttc;
  const tva = isAssujetti ? +(ttc - ht).toFixed(2) : 0;
  const due = +(ttc - invoice.montantRegle).toFixed(2);

  // Mentions obligatoires manquantes (FR) : nom + adresse + SIRET au minimum
  const missingMandatory: string[] = [];
  if (!billing.businessName && !therapistName) missingMandatory.push("nom / raison sociale");
  if (!billing.addressLine1 || !billing.city || !billing.postalCode)
    missingMandatory.push("adresse complète");
  if (!billing.siret) missingMandatory.push("SIRET");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="invoice-preview-title"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-[16px] bg-white"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-[var(--color-light-gray)]">
          <h2
            id="invoice-preview-title"
            className="font-serif text-[18px] font-semibold text-[var(--color-navy)]"
          >
            Aperçu de la facture
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-[var(--color-gray-soft)] hover:bg-[var(--color-light-gray)]"
            aria-label="Fermer l'aperçu"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>

        {missingMandatory.length > 0 && (
          <div className="mx-6 mt-4 rounded-[10px] bg-amber-50 border border-amber-200 px-4 py-3 text-[12.5px] text-amber-900">
            <div className="font-semibold mb-1">Mentions obligatoires manquantes</div>
            <p>
              Pour qu'une facture soit valable, il manque : {missingMandatory.join(", ")}.
              {" "}
              <Link href="/settings/profile" className="underline font-semibold">
                Compléter dans Réglages → Mon profil
              </Link>
              .
            </p>
          </div>
        )}

        {/* Aperçu format facture */}
        <div className="px-8 py-8 text-[13px] text-[var(--color-navy)]">
          {/* En-tête facture */}
          <div className="flex items-start justify-between gap-6 pb-6 border-b border-[var(--color-light-gray)]">
            <div>
              <div className="font-serif text-[24px] font-bold">FACTURE</div>
              <div className="mt-1 text-[var(--color-gray-soft)]">N° {invoice.numero}</div>
            </div>
            <span
              className="inline-block rounded-[8px] px-3 py-1 text-[12px] font-semibold text-white"
              style={{ backgroundColor: STATUT_COLOR[invoice.statut] }}
            >
              {STATUT_LABEL[invoice.statut]}
            </span>
          </div>

          {/* Émetteur / Destinataire */}
          <div className="grid grid-cols-2 gap-8 py-6 border-b border-[var(--color-light-gray)]">
            <div>
              <div className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)] mb-2">
                Émetteur
              </div>
              <div className="font-semibold">{billing.businessName || therapistName}</div>
              {billing.businessName && therapistName !== billing.businessName && (
                <div className="text-[12px] text-[var(--color-gray-soft)]">
                  {therapistName} — {therapistRole}
                </div>
              )}
              {billing.legalForm && (
                <div className="text-[12px] text-[var(--color-gray-soft)]">{billing.legalForm}</div>
              )}
              <div className="mt-2 text-[12.5px] leading-snug whitespace-pre-line">
                {[
                  billing.addressLine1,
                  billing.addressLine2,
                  [billing.postalCode, billing.city].filter(Boolean).join(" "),
                  billing.country,
                ]
                  .filter(Boolean)
                  .join("\n") || "—"}
              </div>
              <div className="mt-2 text-[12px] text-[var(--color-gray-soft)] space-y-0.5">
                {billing.phone && <div>Tél : {billing.phone}</div>}
                {billing.email && <div>Email : {billing.email}</div>}
                {billing.siret && <div>SIRET : {billing.siret}</div>}
                {billing.apeCode && <div>Code APE : {billing.apeCode}</div>}
                {billing.rcs && <div>{billing.rcs}</div>}
                {isAssujetti && billing.tvaNumber && <div>N° TVA : {billing.tvaNumber}</div>}
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)] mb-2">
                Facturé à
              </div>
              <div className="font-semibold">{client.name}</div>
              {client.info?.adresse && (
                <div className="mt-1 text-[12.5px] whitespace-pre-line">{client.info.adresse}</div>
              )}
              <div className="mt-2 text-[12px] text-[var(--color-gray-soft)] space-y-0.5">
                {client.email && <div>{client.email}</div>}
                {client.phone && <div>{client.phone}</div>}
              </div>
            </div>
          </div>

          {/* Méta */}
          <div className="grid grid-cols-3 gap-4 py-5 border-b border-[var(--color-light-gray)]">
            <PreviewField label="Date d'émission" value={formatDate(invoice.dateEmission)} />
            <PreviewField
              label="Date d'échéance"
              value={invoice.dateEcheance ? formatDate(invoice.dateEcheance) : "—"}
            />
            <PreviewField
              label="Mode de financement"
              value={invoice.modeFinancement ? MODE_LABEL[invoice.modeFinancement] : "—"}
            />
          </div>

          {/* Tableau prestations */}
          <table className="w-full mt-6 text-[12.5px]">
            <thead>
              <tr className="bg-[var(--color-navy)] text-white">
                <th className="text-left px-3 py-2 font-semibold">Description</th>
                <th className="text-right px-3 py-2 font-semibold w-16">Qté</th>
                <th className="text-right px-3 py-2 font-semibold w-28">P.U. HT</th>
                {isAssujetti && (
                  <th className="text-right px-3 py-2 font-semibold w-20">TVA</th>
                )}
                <th className="text-right px-3 py-2 font-semibold w-28">Total HT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[var(--color-light-gray)]">
                <td className="px-3 py-3">
                  {invoice.notes?.trim() || `Prestation — ${invoice.numero}`}
                </td>
                <td className="px-3 py-3 text-right tabular">1</td>
                <td className="px-3 py-3 text-right tabular">{EUR.format(ht)}</td>
                {isAssujetti && (
                  <td className="px-3 py-3 text-right tabular">{tvaRate.toFixed(2)} %</td>
                )}
                <td className="px-3 py-3 text-right tabular">{EUR.format(ht)}</td>
              </tr>
            </tbody>
          </table>

          {/* Totaux */}
          <div className="flex justify-end mt-4">
            <div className="w-full max-w-xs space-y-1.5 text-[13px]">
              {isAssujetti && (
                <>
                  <div className="flex justify-between">
                    <span>Total HT</span>
                    <span className="tabular">{EUR.format(ht)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TVA ({tvaRate.toFixed(2)} %)</span>
                    <span className="tabular">{EUR.format(tva)}</span>
                  </div>
                </>
              )}
              <div className="flex justify-between font-bold text-[15px] pt-2 border-t border-[var(--color-light-gray)]">
                <span>Total TTC</span>
                <span className="tabular">{EUR.format(ttc)}</span>
              </div>
              {invoice.montantRegle > 0 && (
                <>
                  <div className="flex justify-between text-[var(--color-gray-soft)]">
                    <span>Montant réglé</span>
                    <span className="tabular">{EUR.format(invoice.montantRegle)}</span>
                  </div>
                  {due > 0 && (
                    <div className="flex justify-between font-semibold">
                      <span>Reste à payer</span>
                      <span className="tabular">{EUR.format(due)}</span>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Mentions / RIB / pied */}
          <div className="mt-8 space-y-3 text-[11.5px] text-[var(--color-gray-soft)] italic leading-relaxed">
            {!isAssujetti && <p>TVA non applicable, art. 293 B du CGI.</p>}
            {billing.paymentTerms && (
              <p className="not-italic">Conditions de règlement : {billing.paymentTerms}</p>
            )}
            {(billing.iban || billing.bic || billing.bankName) && (
              <div className="rounded-[10px] bg-[var(--color-cream)] px-4 py-3 not-italic text-[12px] text-[var(--color-navy)]">
                <div className="font-semibold mb-1">Coordonnées bancaires</div>
                {billing.bankName && <div>Banque : {billing.bankName}</div>}
                {billing.iban && <div>IBAN : {billing.iban}</div>}
                {billing.bic && <div>BIC : {billing.bic}</div>}
              </div>
            )}
            {billing.invoiceFooter && <p className="whitespace-pre-line">{billing.invoiceFooter}</p>}
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-2 px-6 py-4 border-t border-[var(--color-light-gray)]">
          <button
            type="button"
            onClick={onClose}
            disabled={pending}
            className="inline-flex items-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
          >
            Fermer
          </button>
          <button
            type="button"
            onClick={onDownload}
            disabled={pending}
            className="inline-flex items-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
          >
            <Download size={13} aria-hidden="true" />
            Télécharger PDF
          </button>
          {!alreadySent && (
            <button
              type="button"
              onClick={onSend}
              disabled={pending}
              className="inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50"
              style={{ backgroundColor: "var(--color-gold)" }}
            >
              <Send size={13} aria-hidden="true" />
              {pending ? "…" : "Marquer comme envoyée"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function PreviewField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
        {label}
      </div>
      <div className="mt-1 text-[13px] font-semibold text-[var(--color-navy)]">{value}</div>
    </div>
  );
}
