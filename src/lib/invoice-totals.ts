import type { Invoice, InvoiceLineItem } from "@/lib/types";

export interface InvoiceTotals {
  /** TVA applicable (régime assujetti avec taux défini). */
  isAssujetti: boolean;
  tvaRate: number;
  /** Lignes effectives (celles de la facture, ou une ligne synthétique). */
  items: InvoiceLineItem[];
  /** Total hors taxes (somme des lignes). */
  ht: number;
  /** Montant de TVA. */
  tva: number;
  /** Total toutes taxes comprises. */
  ttc: number;
  montantRegle: number;
  /** Reste dû = max(0, ttc - réglé). */
  due: number;
}

const r2 = (n: number): number => Math.round((n + Number.EPSILON) * 100) / 100;

/**
 * Calcul unique des totaux d'une facture, partagé par l'éditeur, l'aperçu
 * et le PDF — garantit une cohérence centime près sur les trois surfaces.
 *
 * Modèle : les lignes (`lineItems`) portent un prix unitaire HT. Le HT total
 * est leur somme. En franchise (non assujetti), TTC = HT. En assujetti,
 * TVA = HT × taux et TTC = HT + TVA.
 *
 * Rétro-compat : si la facture n'a pas de lignes, une ligne synthétique est
 * dérivée de `invoice.montant` (interprété comme TTC) et des notes.
 */
export function computeInvoiceTotals(
  invoice: Pick<Invoice, "lineItems" | "montant" | "montantRegle" | "notes" | "numero">,
  opts: { tvaRegime: "franchise" | "assujetti"; tvaRate: number | null },
): InvoiceTotals {
  const isAssujetti = opts.tvaRegime === "assujetti" && opts.tvaRate != null;
  const tvaRate = isAssujetti ? Number(opts.tvaRate) : 0;

  const items: InvoiceLineItem[] =
    invoice.lineItems.length > 0
      ? invoice.lineItems
      : [
          {
            description: invoice.notes?.trim() || `Prestation — ${invoice.numero}`,
            qty: 1,
            // montant est TTC ; on en déduit le HT unitaire selon le régime.
            unitPrice: isAssujetti
              ? r2(invoice.montant / (1 + tvaRate / 100))
              : invoice.montant,
          },
        ];

  const ht = r2(items.reduce((s, it) => s + it.qty * it.unitPrice, 0));
  const tva = isAssujetti ? r2(ht * (tvaRate / 100)) : 0;
  const ttc = r2(ht + tva);
  const montantRegle = invoice.montantRegle ?? 0;
  const due = r2(Math.max(0, ttc - montantRegle));

  return { isAssujetti, tvaRate, items, ht, tva, ttc, montantRegle, due };
}
