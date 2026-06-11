"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { ClientList } from "./ClientList";
import { ClientDetail } from "./ClientDetail";
import type { Client, Protocol } from "@/lib/types";
import type { TherapistBilling, ClientDetailData } from "@/lib/data";

interface ClientsClientProps {
  clients: Client[];
  protocols: Protocol[];
  /** Client sélectionné (depuis ?id), ou le premier de la liste. */
  selectedId: string | null;
  /** Détail du SEUL client sélectionné, chargé côté serveur. */
  detail: ClientDetailData | null;
  therapistName: string;
  therapistRole: string;
  billing: TherapistBilling;
}

const EMPTY_DETAIL: ClientDetailData = {
  notes: [],
  history: [],
  plans: [],
  snapshots: [],
  tasks: [],
  invoices: [],
  documents: [],
  consents: [],
  kiikaAnalyses: [],
  kiikaCarePlans: [],
};

export function ClientsClient({
  clients,
  protocols,
  selectedId,
  detail,
  therapistName,
  therapistRole,
  billing,
}: ClientsClientProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  /** Sur mobile : "list" (liste seule) ou "detail" (fiche client). */
  const [mobileView, setMobileView] = useState<"list" | "detail">("list");
  const selected = clients.find((c) => c.id === selectedId) ?? clients[0] ?? null;
  const d = detail ?? EMPTY_DETAIL;

  function pickClient(id: string) {
    setMobileView("detail");
    if (id === selectedId) return;
    // Navigation serveur vers ?id=… : le serveur re-rend en ne chargeant que ce
    // client (perf). On efface ?tab au changement.
    startTransition(() => {
      router.push(`/clients?id=${id}`);
    });
  }

  return (
    <div className="flex -mx-4 -my-5 sm:-mx-6 sm:-my-6 md:-mx-9 md:-my-8 min-h-[calc(100dvh-3.5rem)] md:min-h-screen">
      <div className={mobileView === "list" ? "block w-full md:block md:w-auto" : "hidden md:block"}>
        <ClientList clients={clients} selectedId={selected?.id ?? null} onSelect={pickClient} />
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

          <div
            className={pending ? "opacity-50 pointer-events-none transition-opacity" : "transition-opacity"}
          >
            <ClientDetail
              key={selected.id}
              client={selected}
              protocols={protocols}
              notes={d.notes}
              history={d.history}
              plans={d.plans}
              snapshots={d.snapshots}
              tasks={d.tasks}
              invoices={d.invoices}
              documents={d.documents}
              consents={d.consents}
              kiikaAnalyses={d.kiikaAnalyses}
              kiikaCarePlans={d.kiikaCarePlans}
              therapistName={therapistName}
              therapistRole={therapistRole}
              billing={billing}
            />
          </div>
        </div>
      )}
    </div>
  );
}
