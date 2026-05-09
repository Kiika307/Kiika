"use client";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import type {
  Client,
  ClientConsent,
  ClientNote,
  ClientProtocolPlan,
  ClientTask,
  Invoice,
  ProfileSnapshot,
  SessionHistoryEntry,
} from "@/lib/types";
import type { TherapistBilling } from "@/lib/data";

interface ExportInput {
  client: Client;
  notes: ClientNote[];
  history: SessionHistoryEntry[];
  plans: ClientProtocolPlan[];
  snapshots: ProfileSnapshot[];
  tasks: ClientTask[];
  invoices: Invoice[];
  consents: ClientConsent[];
  therapistName: string;
}

const NAVY: [number, number, number] = [26, 34, 56];
const GOLD: [number, number, number] = [200, 160, 48];
const GRAY: [number, number, number] = [120, 120, 130];
const PAGE_W = 210;
const MARGIN_X = 18;
const EUR = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" });

function fmtDate(iso: string | null | undefined): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
}

function addHeader(doc: jsPDF, clientName: string, therapistName: string) {
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, PAGE_W, 22, "F");
  doc.setFillColor(...GOLD);
  doc.rect(0, 22, PAGE_W, 1, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("KIIKA — Dossier client", MARGIN_X, 11);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(`${clientName}  ·  ${therapistName}`, MARGIN_X, 17);
  doc.setTextColor(...NAVY);
}

function addFooter(doc: jsPDF) {
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(...GRAY);
    const date = new Date().toLocaleDateString("fr-FR");
    doc.text(`Édité le ${date}`, MARGIN_X, 290);
    doc.text(`Page ${i} / ${pageCount}`, PAGE_W - MARGIN_X, 290, { align: "right" });
    doc.text("Document confidentiel", PAGE_W / 2, 290, { align: "center" });
    doc.setTextColor(...NAVY);
  }
}

function sectionTitle(doc: jsPDF, title: string, y: number): number {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(...NAVY);
  doc.text(title, MARGIN_X, y);
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.8);
  doc.line(MARGIN_X, y + 1.5, MARGIN_X + 30, y + 1.5);
  return y + 8;
}

function paragraph(doc: jsPDF, text: string, y: number, maxWidth = PAGE_W - MARGIN_X * 2): number {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(40, 40, 50);
  const lines = doc.splitTextToSize(text, maxWidth) as string[];
  doc.text(lines, MARGIN_X, y);
  return y + lines.length * 5 + 2;
}

function ensureSpace(doc: jsPDF, y: number, needed: number): number {
  if (y + needed > 280) {
    doc.addPage();
    return 32;
  }
  return y;
}

export function exportClientDossier(input: ExportInput): void {
  const { client, notes, history, plans, snapshots, tasks, invoices, consents, therapistName } =
    input;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  addHeader(doc, client.name, therapistName);

  let y = 32;

  // Identity
  y = sectionTitle(doc, "Identité", y);
  const identityRows: Array<[string, string]> = [
    ["Nom", client.name],
    ["Âge", client.age ? `${client.age} ans` : "—"],
    ["Email", client.email || "—"],
    ["Téléphone", client.phone || "—"],
    ["Statut", client.status],
    ["Date de naissance", fmtDate(client.info.dateNaissance)],
    ["Sexe", client.info.sexe ?? "—"],
    ["Profession", client.info.profession ?? "—"],
    ["Situation familiale", client.info.situationFamiliale ?? "—"],
    ["Adresse", client.info.adresse ?? "—"],
    ["Médecin traitant", client.info.medecinTraitant ?? "—"],
    ["Personne référente", client.info.personneReferente ?? "—"],
  ];
  autoTable(doc, {
    startY: y,
    body: identityRows,
    theme: "plain",
    styles: { fontSize: 9, cellPadding: 1.5 },
    columnStyles: {
      0: { fontStyle: "bold", textColor: GRAY, cellWidth: 50 },
      1: { textColor: NAVY },
    },
    margin: { left: MARGIN_X, right: MARGIN_X },
  });
  // @ts-expect-error - autoTable mutates doc
  y = (doc.lastAutoTable?.finalY ?? y) + 6;

  // Antecedents
  if (
    client.info.antecedentsMedicaux ||
    client.info.antecedentsPsy ||
    client.info.traitementsEnCours
  ) {
    y = ensureSpace(doc, y, 30);
    y = sectionTitle(doc, "Antécédents & traitements", y);
    if (client.info.antecedentsMedicaux) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text("Médicaux", MARGIN_X, y);
      y = paragraph(doc, client.info.antecedentsMedicaux, y + 4);
    }
    if (client.info.antecedentsPsy) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text("Psychologiques", MARGIN_X, y);
      y = paragraph(doc, client.info.antecedentsPsy, y + 4);
    }
    if (client.info.traitementsEnCours) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text("Traitements en cours", MARGIN_X, y);
      y = paragraph(doc, client.info.traitementsEnCours, y + 4);
    }
    y += 4;
  }

  // Profil psychométrique
  if (client.profile) {
    y = ensureSpace(doc, y, 30);
    y = sectionTitle(doc, "Profil psychométrique", y);
    doc.setFontSize(9);
    doc.setTextColor(...GRAY);
    doc.text(`Dominante : ${client.profile.dominante}`, MARGIN_X, y);
    y += 6;
    autoTable(doc, {
      startY: y,
      body: Object.entries(client.profile.axes).map(([k, v]) => [k, `${v} %`]),
      theme: "plain",
      styles: { fontSize: 9, cellPadding: 1.5 },
      columnStyles: { 0: { fontStyle: "bold", textColor: GRAY, cellWidth: 50 } },
      margin: { left: MARGIN_X, right: MARGIN_X },
    });
    // @ts-expect-error
    y = (doc.lastAutoTable?.finalY ?? y) + 6;
  }

  // Plan de soin
  if (plans.length > 0) {
    y = ensureSpace(doc, y, 30);
    y = sectionTitle(doc, "Plan de soin", y);
    autoTable(doc, {
      startY: y,
      head: [["Protocole", "Pratique", "Statut", "Séances", "Démarré le"]],
      body: plans.map((p) => [
        p.protocolName,
        p.practice,
        p.status,
        `${p.sessionsDone} / ${p.sessionsTotal ?? "?"}`,
        fmtDate(p.startedAt),
      ]),
      headStyles: { fillColor: NAVY, textColor: 255, fontSize: 9 },
      bodyStyles: { fontSize: 9 },
      margin: { left: MARGIN_X, right: MARGIN_X },
    });
    // @ts-expect-error
    y = (doc.lastAutoTable?.finalY ?? y) + 6;
  }

  // Snapshots
  if (snapshots.length > 0) {
    y = ensureSpace(doc, y, 30);
    y = sectionTitle(doc, "Évolution du profil", y);
    autoTable(doc, {
      startY: y,
      head: [["Date", "Émot.", "Cogn.", "Soma.", "Comp.", "Dominante"]],
      body: snapshots.map((s) => [
        fmtDate(s.takenAt),
        String(s.axes["Émotionnel"] ?? "—"),
        String(s.axes.Cognitif ?? "—"),
        String(s.axes.Somatique ?? "—"),
        String(s.axes.Comportemental ?? "—"),
        s.dominante ?? "—",
      ]),
      headStyles: { fillColor: NAVY, textColor: 255, fontSize: 9 },
      bodyStyles: { fontSize: 9 },
      margin: { left: MARGIN_X, right: MARGIN_X },
    });
    // @ts-expect-error
    y = (doc.lastAutoTable?.finalY ?? y) + 6;
  }

  // Historique séances
  if (history.length > 0) {
    y = ensureSpace(doc, y, 30);
    y = sectionTitle(doc, "Historique des séances", y);
    autoTable(doc, {
      startY: y,
      head: [["#", "Date", "Mode", "Statut", "Protocole", "Humeur av/ap"]],
      body: history.map((h) => [
        String(h.num),
        `${h.dateLabel} ${h.timeLabel}`,
        h.mode === "visio" ? "Visio" : "Présentiel",
        h.status,
        h.protocolName ?? "—",
        h.moodBefore != null || h.moodAfter != null
          ? `${h.moodBefore ?? "—"} / ${h.moodAfter ?? "—"}`
          : "—",
      ]),
      headStyles: { fillColor: NAVY, textColor: 255, fontSize: 9 },
      bodyStyles: { fontSize: 9 },
      margin: { left: MARGIN_X, right: MARGIN_X },
    });
    // @ts-expect-error
    y = (doc.lastAutoTable?.finalY ?? y) + 6;
  }

  // Comptes-rendus
  const cr = history.filter((h) => h.compteRendu).map((h) => ({ entry: h, note: h.compteRendu! }));
  if (cr.length > 0) {
    doc.addPage();
    y = 32;
    y = sectionTitle(doc, "Comptes-rendus de séance", y);
    for (const { entry, note } of cr) {
      y = ensureSpace(doc, y, 20);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...NAVY);
      doc.text(
        `Séance #${entry.num} · ${entry.dateLabel} ${entry.timeLabel}` +
          (entry.protocolName ? ` · ${entry.protocolName}` : ""),
        MARGIN_X,
        y,
      );
      y = paragraph(doc, note.body, y + 5);
      y += 4;
    }
  }

  // Journal libre
  const journal = notes.filter((n) => n.kind === "libre");
  if (journal.length > 0) {
    doc.addPage();
    y = 32;
    y = sectionTitle(doc, "Journal de suivi", y);
    for (const note of journal) {
      y = ensureSpace(doc, y, 20);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...NAVY);
      const head = note.title
        ? `${note.title} — ${fmtDate(note.createdAt)}`
        : fmtDate(note.createdAt);
      doc.text(head, MARGIN_X, y);
      y = paragraph(doc, note.body, y + 5);
      y += 4;
    }
  }

  // Tâches
  if (tasks.length > 0) {
    y = ensureSpace(doc, y, 30);
    y = sectionTitle(doc, "Tâches & exercices", y);
    autoTable(doc, {
      startY: y,
      head: [["Tâche", "Échéance", "Statut"]],
      body: tasks.map((t) => [
        t.title + (t.description ? `\n${t.description}` : ""),
        t.dueDate ? fmtDate(t.dueDate) : "—",
        t.completedAt ? "Terminée" : "À faire",
      ]),
      headStyles: { fillColor: NAVY, textColor: 255, fontSize: 9 },
      bodyStyles: { fontSize: 9 },
      margin: { left: MARGIN_X, right: MARGIN_X },
    });
    // @ts-expect-error
    y = (doc.lastAutoTable?.finalY ?? y) + 6;
  }

  // Factures
  if (invoices.length > 0) {
    y = ensureSpace(doc, y, 30);
    y = sectionTitle(doc, "Facturation", y);
    autoTable(doc, {
      startY: y,
      head: [["Numéro", "Émise le", "Montant", "Réglé", "Statut"]],
      body: invoices.map((inv) => [
        inv.numero,
        fmtDate(inv.dateEmission),
        EUR.format(inv.montant),
        EUR.format(inv.montantRegle),
        inv.statut,
      ]),
      headStyles: { fillColor: NAVY, textColor: 255, fontSize: 9 },
      bodyStyles: { fontSize: 9 },
      margin: { left: MARGIN_X, right: MARGIN_X },
    });
    // @ts-expect-error
    y = (doc.lastAutoTable?.finalY ?? y) + 6;
  }

  // Consentements
  if (consents.length > 0) {
    y = ensureSpace(doc, y, 30);
    y = sectionTitle(doc, "Consentements RGPD", y);
    autoTable(doc, {
      startY: y,
      head: [["Date", "Méthode", "Version", "Notes"]],
      body: consents.map((c) => [
        fmtDate(c.signedAt),
        c.signatureMethod,
        c.version,
        c.notes ?? "",
      ]),
      headStyles: { fillColor: NAVY, textColor: 255, fontSize: 9 },
      bodyStyles: { fontSize: 9 },
      margin: { left: MARGIN_X, right: MARGIN_X },
    });
  }

  addFooter(doc);

  const safeName = client.name.replace(/[^\w\- ]/g, "").replace(/\s+/g, "_");
  doc.save(`Dossier_${safeName}_${new Date().toISOString().slice(0, 10)}.pdf`);
}

const STATUT_LABEL_FR: Record<Invoice["statut"], string> = {
  en_attente: "En attente",
  envoyee: "Envoyée",
  reglee: "Réglée",
  relance: "Relance",
  annulee: "Annulée",
};

const MODE_LABEL_FR: Record<NonNullable<Invoice["modeFinancement"]>, string> = {
  autofinancement: "Autofinancement",
  cpf: "CPF",
  mutuelle: "Mutuelle",
  employeur: "Employeur",
  autre: "Autre",
};

export interface InvoicePdfInput {
  invoice: Invoice;
  client: Client;
  therapistName: string;
  therapistRole: string;
  billing: TherapistBilling;
}

export function exportInvoicePdf({
  invoice,
  client,
  therapistName,
  therapistRole,
  billing,
}: InvoicePdfInput) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();

  // Bandeau supérieur navy + filet doré
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, pageW, 18, "F");
  doc.setFillColor(...GOLD);
  doc.rect(0, 18, pageW, 0.8, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("FACTURE", MARGIN_X, 11);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(invoice.numero, pageW - MARGIN_X, 11, { align: "right" });

  // Émetteur
  doc.setTextColor(...NAVY);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  let y = 30;
  doc.text(billing.businessName || therapistName, MARGIN_X, y);
  y += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...GRAY);
  if (billing.businessName && therapistName !== billing.businessName) {
    doc.text(`${therapistName} — ${therapistRole}`, MARGIN_X, y);
    y += 4;
  } else if (therapistRole) {
    doc.text(therapistRole, MARGIN_X, y);
    y += 4;
  }
  if (billing.legalForm) {
    doc.text(billing.legalForm, MARGIN_X, y);
    y += 4;
  }
  if (billing.addressLine1) {
    doc.text(billing.addressLine1, MARGIN_X, y);
    y += 4;
  }
  if (billing.addressLine2) {
    doc.text(billing.addressLine2, MARGIN_X, y);
    y += 4;
  }
  const cityLine = [billing.postalCode, billing.city].filter(Boolean).join(" ");
  if (cityLine) {
    doc.text(cityLine, MARGIN_X, y);
    y += 4;
  }
  if (billing.country) {
    doc.text(billing.country, MARGIN_X, y);
    y += 4;
  }
  if (billing.phone) {
    doc.text(`Tél : ${billing.phone}`, MARGIN_X, y);
    y += 4;
  }
  if (billing.email) {
    doc.text(`Email : ${billing.email}`, MARGIN_X, y);
    y += 4;
  }
  if (billing.siret) {
    doc.text(`SIRET : ${billing.siret}`, MARGIN_X, y);
    y += 4;
  }
  if (billing.apeCode) {
    doc.text(`Code APE : ${billing.apeCode}`, MARGIN_X, y);
    y += 4;
  }
  if (billing.rcs) {
    doc.text(billing.rcs, MARGIN_X, y);
    y += 4;
  }
  if (billing.tvaRegime === "assujetti" && billing.tvaNumber) {
    doc.text(`N° TVA : ${billing.tvaNumber}`, MARGIN_X, y);
    y += 4;
  }

  // Bloc client (à droite)
  const clientX = pageW / 2 + 10;
  let yc = 30;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...NAVY);
  doc.text("Facturé à", clientX, yc);
  yc += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...GRAY);
  doc.text(client.name, clientX, yc);
  yc += 4;
  if (client.info?.adresse) {
    const lines = doc.splitTextToSize(client.info.adresse, pageW - clientX - MARGIN_X);
    for (const line of lines) {
      doc.text(line, clientX, yc);
      yc += 4;
    }
  }
  if (client.email) {
    doc.text(client.email, clientX, yc);
    yc += 4;
  }
  if (client.phone) {
    doc.text(client.phone, clientX, yc);
    yc += 4;
  }

  // Méta-données facture (dates, mode)
  let yMeta = Math.max(y, yc) + 6;
  doc.setDrawColor(220, 220, 220);
  doc.line(MARGIN_X, yMeta, pageW - MARGIN_X, yMeta);
  yMeta += 6;
  const metaCols: Array<[string, string]> = [
    ["Date d'émission", fmtDate(invoice.dateEmission)],
    ["Date d'échéance", invoice.dateEcheance ? fmtDate(invoice.dateEcheance) : "—"],
    [
      "Mode de financement",
      invoice.modeFinancement ? MODE_LABEL_FR[invoice.modeFinancement] : "—",
    ],
    ["Statut", STATUT_LABEL_FR[invoice.statut]],
  ];
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const colW = (pageW - MARGIN_X * 2) / metaCols.length;
  metaCols.forEach(([label, value], i) => {
    const x = MARGIN_X + colW * i;
    doc.setTextColor(...GRAY);
    doc.text(label.toUpperCase(), x, yMeta);
    doc.setTextColor(...NAVY);
    doc.setFont("helvetica", "bold");
    doc.text(value, x, yMeta + 5);
    doc.setFont("helvetica", "normal");
  });
  yMeta += 12;

  // Tableau des prestations
  const ttc = invoice.montant;
  const isAssujetti = billing.tvaRegime === "assujetti" && billing.tvaRate != null;
  const tvaRate = isAssujetti ? Number(billing.tvaRate) : 0;
  const ht = isAssujetti ? +(ttc / (1 + tvaRate / 100)).toFixed(2) : ttc;
  const tva = isAssujetti ? +(ttc - ht).toFixed(2) : 0;
  const description = invoice.notes?.trim() || `Prestation — ${invoice.numero}`;

  autoTable(doc, {
    startY: yMeta,
    head: [["Description", "Qté", "P.U. HT", isAssujetti ? "TVA" : "", "Total HT"]],
    body: [
      [
        description,
        "1",
        EUR.format(ht),
        isAssujetti ? `${tvaRate.toFixed(2)} %` : "—",
        EUR.format(ht),
      ],
    ],
    headStyles: { fillColor: NAVY, textColor: 255, fontSize: 9 },
    bodyStyles: { fontSize: 9, textColor: [40, 40, 50] },
    margin: { left: MARGIN_X, right: MARGIN_X },
  });

  type AutoTableDoc = jsPDF & { lastAutoTable?: { finalY: number } };
  const after = (doc as AutoTableDoc).lastAutoTable;
  let yt = (after?.finalY ?? yMeta) + 6;

  // Totaux
  const totalsX = pageW - MARGIN_X - 70;
  const totalsW = 70;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...NAVY);

  if (isAssujetti) {
    doc.text("Total HT", totalsX, yt);
    doc.text(EUR.format(ht), totalsX + totalsW, yt, { align: "right" });
    yt += 5;
    doc.text(`TVA (${tvaRate.toFixed(2)} %)`, totalsX, yt);
    doc.text(EUR.format(tva), totalsX + totalsW, yt, { align: "right" });
    yt += 5;
  }
  doc.setDrawColor(200, 200, 200);
  doc.line(totalsX, yt, totalsX + totalsW, yt);
  yt += 4;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Total TTC", totalsX, yt);
  doc.text(EUR.format(ttc), totalsX + totalsW, yt, { align: "right" });
  yt += 5;
  if (invoice.montantRegle > 0) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text("Montant réglé", totalsX, yt);
    doc.text(EUR.format(invoice.montantRegle), totalsX + totalsW, yt, { align: "right" });
    yt += 4;
    const due = +(ttc - invoice.montantRegle).toFixed(2);
    if (due > 0) {
      doc.setFont("helvetica", "bold");
      doc.text("Reste à payer", totalsX, yt);
      doc.text(EUR.format(due), totalsX + totalsW, yt, { align: "right" });
      yt += 5;
    }
  }
  yt += 4;

  // Mention TVA et conditions
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8.5);
  doc.setTextColor(...GRAY);
  if (!isAssujetti) {
    doc.text("TVA non applicable, art. 293 B du CGI.", MARGIN_X, yt);
    yt += 4;
  }
  if (billing.paymentTerms) {
    doc.setFont("helvetica", "normal");
    doc.text(`Conditions de règlement : ${billing.paymentTerms}`, MARGIN_X, yt);
    yt += 4;
  }
  if (billing.iban || billing.bic || billing.bankName) {
    doc.setFont("helvetica", "normal");
    const banky = yt + 2;
    doc.setFillColor(248, 245, 235);
    doc.rect(MARGIN_X, banky, pageW - MARGIN_X * 2, 18, "F");
    doc.setTextColor(...NAVY);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("Coordonnées bancaires", MARGIN_X + 4, banky + 5);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    let by = banky + 10;
    if (billing.bankName) {
      doc.text(`Banque : ${billing.bankName}`, MARGIN_X + 4, by);
      by += 4;
    }
    if (billing.iban) {
      doc.text(`IBAN : ${billing.iban}`, MARGIN_X + 4, by);
    }
    if (billing.bic) {
      doc.text(`BIC : ${billing.bic}`, pageW / 2, by);
    }
    yt = banky + 24;
  }

  if (billing.invoiceFooter) {
    doc.setFont("helvetica", "italic");
    doc.setTextColor(...GRAY);
    doc.setFontSize(8);
    const lines = doc.splitTextToSize(billing.invoiceFooter, pageW - MARGIN_X * 2);
    for (const line of lines) {
      if (yt > pageH - 15) {
        doc.addPage();
        yt = 20;
      }
      doc.text(line, MARGIN_X, yt);
      yt += 3.5;
    }
  }

  // Pied de page
  doc.setFont("helvetica", "italic");
  doc.setFontSize(7.5);
  doc.setTextColor(...GRAY);
  const footer = `${billing.businessName || therapistName} — Facture ${invoice.numero} — ${new Date().toLocaleDateString("fr-FR")}`;
  doc.text(footer, pageW / 2, pageH - 8, { align: "center" });

  const safe = invoice.numero.replace(/[^\w\-]/g, "_");
  doc.save(`Facture_${safe}.pdf`);
}
