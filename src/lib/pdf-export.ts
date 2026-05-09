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

const BRONZE: [number, number, number] = [125, 84, 41];
const ROW_ALT: [number, number, number] = [245, 242, 235];
const TEXT_DARK: [number, number, number] = [38, 38, 38];

async function loadImageAsDataURL(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { mode: "cors" });
    if (!res.ok) return null;
    const blob = await res.blob();
    return await new Promise<string | null>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve((reader.result as string) || null);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

export async function exportInvoicePdf({
  invoice,
  client,
  therapistName,
  therapistRole,
  billing,
}: InvoicePdfInput): Promise<void> {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();

  // Bandeau bronze en haut
  doc.setFillColor(...BRONZE);
  doc.rect(0, 0, pageW, 4, "F");

  // Logo (optionnel) — top left
  let logoBottom = 0;
  if (billing.logoUrl) {
    const dataUrl = await loadImageAsDataURL(billing.logoUrl);
    if (dataUrl) {
      try {
        const fmt = dataUrl.startsWith("data:image/png") ? "PNG" : "JPEG";
        const logoH = 18;
        const logoW = 38;
        doc.addImage(dataUrl, fmt, MARGIN_X, 12, logoW, logoH, undefined, "FAST");
        logoBottom = 12 + logoH;
      } catch {
        // ignore image errors silently
      }
    }
  }

  // Émetteur (gauche, sous le logo)
  let yLeft = (logoBottom || 12) + 6;
  doc.setTextColor(...TEXT_DARK);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(billing.businessName || therapistName, MARGIN_X, yLeft);
  yLeft += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  if (billing.businessName && therapistName !== billing.businessName) {
    doc.text(`${therapistName} — ${therapistRole}`, MARGIN_X, yLeft);
    yLeft += 4;
  }
  if (billing.legalForm) {
    doc.text(billing.legalForm, MARGIN_X, yLeft);
    yLeft += 4;
  }
  if (billing.addressLine1) {
    doc.text(billing.addressLine1, MARGIN_X, yLeft);
    yLeft += 4;
  }
  if (billing.addressLine2) {
    doc.text(billing.addressLine2, MARGIN_X, yLeft);
    yLeft += 4;
  }
  const cityLine = [billing.postalCode, billing.city].filter(Boolean).join(" ");
  if (cityLine) {
    doc.text(cityLine, MARGIN_X, yLeft);
    yLeft += 4;
  }
  if (billing.country) {
    doc.text(billing.country, MARGIN_X, yLeft);
    yLeft += 4;
  }
  if (billing.siret) {
    doc.text(`N° SIRET ${billing.siret}`, MARGIN_X, yLeft);
    yLeft += 4;
  }
  if (billing.apeCode) {
    doc.text(`APE ${billing.apeCode}`, MARGIN_X, yLeft);
    yLeft += 4;
  }
  if (billing.rcs) {
    doc.text(billing.rcs, MARGIN_X, yLeft);
    yLeft += 4;
  }

  // Destinataire (droite, aligné à droite)
  let yRight = (logoBottom || 12) + 6;
  const rightX = pageW - MARGIN_X;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...TEXT_DARK);
  doc.text(client.name, rightX, yRight, { align: "right" });
  yRight += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  if (client.info?.adresse) {
    const lines = doc.splitTextToSize(client.info.adresse, 80);
    for (const line of lines) {
      doc.text(line, rightX, yRight, { align: "right" });
      yRight += 4;
    }
  }
  if (client.email) {
    doc.text(client.email, rightX, yRight, { align: "right" });
    yRight += 4;
  }
  if (client.phone) {
    doc.text(client.phone, rightX, yRight, { align: "right" });
    yRight += 4;
  }

  // Méta : N° facture / Projet à gauche, Date émission / échéance à droite (4 cellules)
  let yMeta = Math.max(yLeft, yRight) + 8;
  const colMid = pageW / 2;
  const drawMeta = (label: string, value: string, x: number, y: number) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...TEXT_DARK);
    doc.text(label, x, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(value || "—", x, y + 5);
  };

  drawMeta("N° de facture", invoice.numero, MARGIN_X, yMeta);
  drawMeta("Date d'émission", fmtDate(invoice.dateEmission), colMid, yMeta);
  yMeta += 12;
  drawMeta("Projet", invoice.project || "—", MARGIN_X, yMeta);
  drawMeta(
    "Date d'échéance",
    invoice.dateEcheance ? fmtDate(invoice.dateEcheance) : "—",
    colMid,
    yMeta,
  );
  yMeta += 14;

  // Filet séparateur
  doc.setDrawColor(220, 215, 205);
  doc.setLineWidth(0.3);
  doc.line(MARGIN_X, yMeta, pageW - MARGIN_X, yMeta);
  yMeta += 6;

  // Tableau prestations
  const isAssujetti = billing.tvaRegime === "assujetti" && billing.tvaRate != null;
  const tvaRate = isAssujetti ? Number(billing.tvaRate) : 0;
  const ttc = invoice.montant;

  const items =
    invoice.lineItems.length > 0
      ? invoice.lineItems
      : [
          {
            description: invoice.notes?.trim() || `Prestation — ${invoice.numero}`,
            qty: 1,
            unitPrice: isAssujetti ? +(ttc / (1 + tvaRate / 100)).toFixed(2) : ttc,
          },
        ];

  const subTotalHT = items.reduce((s, it) => s + it.qty * it.unitPrice, 0);
  const computedTTC = isAssujetti ? +(subTotalHT * (1 + tvaRate / 100)).toFixed(2) : subTotalHT;
  const tvaAmount = isAssujetti ? +(computedTTC - subTotalHT).toFixed(2) : 0;
  // Préfère le total saisi si cohérent, sinon le calculé
  const finalTTC = ttc || computedTTC;

  const head = isAssujetti
    ? [["Description", "Qté", "PU HT", "TVA", "Total HT"]]
    : [["Description", "Qté", "PU HT", "Total HT"]];
  const body = items.map((it) => {
    const lineHT = it.qty * it.unitPrice;
    return isAssujetti
      ? [
          it.description,
          String(it.qty),
          EUR.format(it.unitPrice),
          `${tvaRate.toFixed(2)} %`,
          EUR.format(lineHT),
        ]
      : [it.description, String(it.qty), EUR.format(it.unitPrice), EUR.format(lineHT)];
  });

  autoTable(doc, {
    startY: yMeta,
    head,
    body,
    theme: "plain",
    headStyles: {
      fillColor: [255, 255, 255],
      textColor: BRONZE,
      fontStyle: "bold",
      fontSize: 10,
      halign: "left",
      cellPadding: { top: 4, right: 3, bottom: 4, left: 3 },
      lineWidth: 0,
    },
    bodyStyles: {
      fontSize: 10,
      textColor: TEXT_DARK,
      cellPadding: { top: 3.5, right: 3, bottom: 3.5, left: 3 },
      lineWidth: 0,
    },
    alternateRowStyles: { fillColor: ROW_ALT },
    columnStyles: isAssujetti
      ? {
          0: { cellWidth: "auto" },
          1: { halign: "center", cellWidth: 18 },
          2: { halign: "right", cellWidth: 26 },
          3: { halign: "right", cellWidth: 22 },
          4: { halign: "right", cellWidth: 28 },
        }
      : {
          0: { cellWidth: "auto" },
          1: { halign: "center", cellWidth: 22 },
          2: { halign: "right", cellWidth: 32 },
          3: { halign: "right", cellWidth: 32 },
        },
    margin: { left: MARGIN_X, right: MARGIN_X },
    didDrawPage: () => {
      // Bandeau bronze redessiné si nouvelle page
      doc.setFillColor(...BRONZE);
      doc.rect(0, 0, pageW, 4, "F");
    },
  });

  type AutoTableDoc = jsPDF & { lastAutoTable?: { finalY: number } };
  const after = (doc as AutoTableDoc).lastAutoTable;
  let yt = (after?.finalY ?? yMeta) + 4;

  // Ligne sous-total / TVA / Net à payer
  const labelLeftX = MARGIN_X;
  const labelMidX = pageW - MARGIN_X - 60;
  const valueX = pageW - MARGIN_X;

  // Mention TVA à gauche
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(140, 140, 140);
  if (!isAssujetti) {
    doc.text("TVA non applicable, art. 293 B du CGI.", labelLeftX, yt + 5);
  }

  // Sous-total à droite
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...BRONZE);
  doc.text("Sous-total", labelMidX, yt + 5);
  doc.setTextColor(...TEXT_DARK);
  doc.text(EUR.format(subTotalHT), valueX, yt + 5, { align: "right" });
  yt += 10;

  if (isAssujetti) {
    doc.setTextColor(...BRONZE);
    doc.text(`TVA (${tvaRate.toFixed(2)} %)`, labelMidX, yt);
    doc.setTextColor(...TEXT_DARK);
    doc.text(EUR.format(tvaAmount), valueX, yt, { align: "right" });
    yt += 6;
  }

  doc.setTextColor(...BRONZE);
  doc.text("Net à payer", labelMidX, yt);
  doc.setTextColor(...TEXT_DARK);
  doc.text(EUR.format(finalTTC), valueX, yt, { align: "right" });
  yt += 8;

  if (invoice.montantRegle > 0 && invoice.montantRegle < finalTTC) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    doc.text("Montant réglé", labelMidX, yt);
    doc.text(EUR.format(invoice.montantRegle), valueX, yt, { align: "right" });
    yt += 5;
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...BRONZE);
    doc.text("Reste dû", labelMidX, yt);
    doc.setTextColor(...TEXT_DARK);
    doc.text(EUR.format(+(finalTTC - invoice.montantRegle).toFixed(2)), valueX, yt, {
      align: "right",
    });
    yt += 8;
  }

  // Notes libres / message client (sous le tableau)
  if (invoice.notes && invoice.lineItems.length > 0) {
    yt += 4;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...TEXT_DARK);
    const noteLines = doc.splitTextToSize(invoice.notes, pageW - MARGIN_X * 2);
    for (const line of noteLines) {
      if (yt > pageH - 30) {
        doc.addPage();
        yt = 20;
      }
      doc.text(line, MARGIN_X, yt);
      yt += 5;
    }
  }

  // Pied de page : conditions, IBAN, mentions
  const footerLines: string[] = [];
  if (billing.paymentTerms) {
    footerLines.push(`Conditions de règlement : ${billing.paymentTerms}`);
  }
  if (billing.iban) {
    footerLines.push(`IBAN : ${billing.iban}${billing.bic ? `   BIC : ${billing.bic}` : ""}`);
  }
  if (billing.bankName) {
    footerLines.push(`Banque : ${billing.bankName}`);
  }
  if (billing.invoiceFooter) {
    footerLines.push(...billing.invoiceFooter.split(/\r?\n/));
  } else {
    footerLines.push("Aucun escompte consenti pour règlement anticipé.");
    footerLines.push(
      "Tout incident de paiement est passible d'intérêts de retard au taux d'intérêt légal en vigueur.",
    );
    footerLines.push(
      "Indemnité forfaitaire pour frais de recouvrement due au créancier en cas de retard de paiement : 40 €.",
    );
  }

  // Place les mentions en bas de page
  const footerStart = Math.max(yt + 8, pageH - 8 - footerLines.length * 3.4);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(120, 120, 120);
  let yf = footerStart;
  for (const line of footerLines) {
    if (yf > pageH - 6) {
      doc.addPage();
      yf = 20;
    }
    doc.text(line, MARGIN_X, yf);
    yf += 3.4;
  }

  const safe = invoice.numero.replace(/[^\w\-]/g, "_");
  doc.save(`Facture_${safe}.pdf`);
}
