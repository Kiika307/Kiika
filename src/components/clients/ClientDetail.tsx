"use client";

import { useState } from "react";
import { Mail, Phone, Calendar, Download } from "lucide-react";
import { exportClientDossier } from "@/lib/pdf-export";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { EraseClientButton } from "./EraseClientButton";
import { ProfilTab } from "./ProfilTab";
import { MatchingTab } from "./MatchingTab";
import { HistoriqueTab } from "./HistoriqueTab";
import { InformationsTab } from "./InformationsTab";
import { NotesTab } from "./NotesTab";
import { PlanTab } from "./PlanTab";
import { TasksTab } from "./TasksTab";
import { InvoicesTab } from "./InvoicesTab";
import { DocumentsTab } from "./DocumentsTab";
import type {
  Client,
  ClientNote,
  ClientProtocolPlan,
  ClientTask,
  ClientConsent,
  ClientDocument,
  Invoice,
  ProfileSnapshot,
  Protocol,
  SessionHistoryEntry,
} from "@/lib/types";

type Tab =
  | "informations"
  | "profil"
  | "plan"
  | "tasks"
  | "notes"
  | "matching"
  | "historique"
  | "facturation"
  | "documents";

interface ClientDetailProps {
  client: Client;
  protocols: Protocol[];
  notes: ClientNote[];
  history: SessionHistoryEntry[];
  plans: ClientProtocolPlan[];
  snapshots: ProfileSnapshot[];
  tasks: ClientTask[];
  invoices: Invoice[];
  documents: ClientDocument[];
  consents: ClientConsent[];
  therapistName: string;
}

const tabs: Array<{ id: Tab; label: string }> = [
  { id: "informations", label: "Informations" },
  { id: "profil", label: "Profil psychométrique" },
  { id: "plan", label: "Plan de soin" },
  { id: "tasks", label: "Tâches" },
  { id: "notes", label: "Notes" },
  { id: "matching", label: "Matching IA" },
  { id: "historique", label: "Historique" },
  { id: "facturation", label: "Facturation" },
  { id: "documents", label: "Documents" },
];

export function ClientDetail({
  client,
  protocols,
  notes,
  history,
  plans,
  snapshots,
  tasks,
  invoices,
  documents,
  consents,
  therapistName,
}: ClientDetailProps) {
  const [tab, setTab] = useState<Tab>("informations");

  return (
    <section className="flex-1 px-4 py-5 sm:px-6 sm:py-6 md:px-9 md:py-8 overflow-y-auto md:h-[calc(100vh-64px)]">
      <header className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5 mb-6 sm:mb-7">
        <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
          <Avatar initials={client.initials} color={client.color} size={56} />
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <h1 className="font-serif text-[22px] sm:text-[26px] font-bold text-[var(--color-navy)]">{client.name}</h1>
              <Badge color={client.color}>{client.age} ans</Badge>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1 text-[12px] sm:text-[13px] text-[var(--color-gray-soft)]">
              <span className="inline-flex items-center gap-1.5">
                <Mail size={14} aria-hidden="true" />
                <span className="truncate max-w-[180px] sm:max-w-none">{client.email}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone size={14} aria-hidden="true" />
                {client.phone}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} aria-hidden="true" />
                Suivi depuis {client.since}
              </span>
              <span>{client.sessions} séances</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 sm:flex-shrink-0">
          <button
            type="button"
            onClick={() =>
              exportClientDossier({
                client,
                notes,
                history,
                plans,
                snapshots,
                tasks,
                invoices,
                consents,
                therapistName,
              })
            }
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] bg-white px-3 py-2.5 text-[13px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] min-h-11"
            title="Exporter le dossier en PDF"
            aria-label="Exporter le dossier client en PDF"
          >
            <Download size={14} aria-hidden="true" />
            <span className="hidden sm:inline">Exporter</span>
            <span className="sm:hidden">PDF</span>
          </button>
          <button
            className="flex-1 sm:flex-initial rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white min-h-11"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            Nouveau RDV
          </button>
          <EraseClientButton clientId={client.id} clientName={client.name} />
        </div>
      </header>

      <nav
        className="flex gap-1 border-b mb-6 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ borderColor: "var(--color-light-gray)" }}
        aria-label="Sections de la fiche client"
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="relative px-4 py-2.5 text-[13px] font-semibold transition-colors whitespace-nowrap min-h-11"
            style={{
              color: tab === t.id ? "var(--color-navy)" : "var(--color-gray-soft)",
            }}
            aria-current={tab === t.id ? "page" : undefined}
          >
            {t.label}
            {tab === t.id && (
              <span
                className="absolute left-0 right-0 -bottom-px h-[2px] rounded-full"
                style={{ backgroundColor: "var(--color-gold)" }}
                aria-hidden="true"
              />
            )}
          </button>
        ))}
      </nav>

      {tab === "informations" && <InformationsTab client={client} consents={consents} />}
      {tab === "profil" && <ProfilTab client={client} snapshots={snapshots} />}
      {tab === "plan" && <PlanTab clientId={client.id} plans={plans} protocols={protocols} />}
      {tab === "tasks" && <TasksTab clientId={client.id} tasks={tasks} />}
      {tab === "notes" && <NotesTab clientId={client.id} notes={notes} />}
      {tab === "matching" && <MatchingTab client={client} protocols={protocols} />}
      {tab === "historique" && <HistoriqueTab clientId={client.id} history={history} />}
      {tab === "facturation" && <InvoicesTab clientId={client.id} invoices={invoices} />}
      {tab === "documents" && <DocumentsTab clientId={client.id} documents={documents} />}
    </section>
  );
}
