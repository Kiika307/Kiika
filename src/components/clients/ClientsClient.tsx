"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { ClientList } from "./ClientList";
import { ClientDetail } from "./ClientDetail";
import type {
  Client,
  ClientKiikaAnalysis,
  ClientKiikaCarePlan,
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

interface ClientsClientProps {
  clients: Client[];
  protocols: Protocol[];
  notesByClient: Record<string, ClientNote[]>;
  historyByClient: Record<string, SessionHistoryEntry[]>;
  plansByClient: Record<string, ClientProtocolPlan[]>;
  snapshotsByClient: Record<string, ProfileSnapshot[]>;
  tasksByClient: Record<string, ClientTask[]>;
  invoicesByClient: Record<string, Invoice[]>;
  documentsByClient: Record<string, ClientDocument[]>;
  consentsByClient: Record<string, ClientConsent[]>;
  kiikaAnalysesByClient: Record<string, ClientKiikaAnalysis[]>;
  kiikaCarePlansByClient: Record<string, ClientKiikaCarePlan[]>;
  therapistName: string;
  initialId?: string;
}

export function ClientsClient({
  clients,
  protocols,
  notesByClient,
  historyByClient,
  plansByClient,
  snapshotsByClient,
  tasksByClient,
  invoicesByClient,
  documentsByClient,
  consentsByClient,
  kiikaAnalysesByClient,
  kiikaCarePlansByClient,
  therapistName,
  initialId,
}: ClientsClientProps) {
  const validInitial = initialId != null && clients.some((c) => c.id === initialId) ? initialId : null;
  const [selectedId, setSelectedId] = useState<string>(validInitial ?? clients[0]?.id ?? "");
  /** Sur mobile : "list" (liste seule) ou "detail" (fiche client). */
  const [mobileView, setMobileView] = useState<"list" | "detail">("list");
  const selected = clients.find((c) => c.id === selectedId) ?? clients[0];

  function pickClient(id: string) {
    setSelectedId(id);
    setMobileView("detail");
  }

  return (
    <div className="flex -mx-4 -my-5 sm:-mx-6 sm:-my-6 md:-mx-9 md:-my-8 min-h-[calc(100dvh-3.5rem)] md:min-h-screen">
      <div className={mobileView === "list" ? "block w-full md:block md:w-auto" : "hidden md:block"}>
        <ClientList clients={clients} selectedId={selectedId} onSelect={pickClient} />
      </div>

      {selected && (
        <div className={mobileView === "detail" ? "block w-full md:block md:flex-1" : "hidden md:block md:flex-1"}>
          {/* Bouton retour mobile */}
          <button
            type="button"
            onClick={() => setMobileView("list")}
            className="md:hidden inline-flex items-center gap-1.5 px-4 py-3 text-[13px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] w-full border-b border-[var(--color-light-gray)]"
            aria-label="Retour à la liste des clients"
          >
            <ChevronLeft size={16} aria-hidden="true" />
            Retour
          </button>

          <ClientDetail
            client={selected}
            protocols={protocols}
            notes={notesByClient[selected.id] ?? []}
            history={historyByClient[selected.id] ?? []}
            plans={plansByClient[selected.id] ?? []}
            snapshots={snapshotsByClient[selected.id] ?? []}
            tasks={tasksByClient[selected.id] ?? []}
            invoices={invoicesByClient[selected.id] ?? []}
            documents={documentsByClient[selected.id] ?? []}
            consents={consentsByClient[selected.id] ?? []}
            kiikaAnalyses={kiikaAnalysesByClient[selected.id] ?? []}
            kiikaCarePlans={kiikaCarePlansByClient[selected.id] ?? []}
            therapistName={therapistName}
          />
        </div>
      )}
    </div>
  );
}
