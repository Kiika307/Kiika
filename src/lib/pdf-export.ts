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
