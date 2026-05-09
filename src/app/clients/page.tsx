import { AppShell } from "@/components/layout/AppShell";
import { ClientsClient } from "@/components/clients/ClientsClient";
import {
  getClientsRich,
  getProtocols,
  getTherapist,
  getAllNotesByClient,
  getAllHistoryByClient,
  getAllPlansByClient,
  getAllSnapshotsByClient,
  getAllTasksByClient,
  getAllInvoicesByClient,
  getAllDocumentsByClient,
  getAllConsentsByClient,
  getAllKiikaAnalysesByClient,
  getAllKiikaCarePlansByClient,
} from "@/lib/data";

interface ClientsPageProps {
  searchParams: Promise<{ id?: string }>;
}

export default async function ClientsPage({ searchParams }: ClientsPageProps) {
  const { id } = await searchParams;
  const [clients, protocols, therapist] = await Promise.all([
    getClientsRich(),
    getProtocols(),
    getTherapist(),
  ]);
  const ids = clients.map((c) => c.id);
  const [
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
  ] = await Promise.all([
    getAllNotesByClient(ids),
    getAllHistoryByClient(ids),
    getAllPlansByClient(ids),
    getAllSnapshotsByClient(ids),
    getAllTasksByClient(ids),
    getAllInvoicesByClient(ids),
    getAllDocumentsByClient(ids),
    getAllConsentsByClient(ids),
    getAllKiikaAnalysesByClient(ids),
    getAllKiikaCarePlansByClient(ids),
  ]);

  return (
    <AppShell>
      <ClientsClient
        clients={clients}
        protocols={protocols}
        notesByClient={notesByClient}
        historyByClient={historyByClient}
        plansByClient={plansByClient}
        snapshotsByClient={snapshotsByClient}
        tasksByClient={tasksByClient}
        invoicesByClient={invoicesByClient}
        documentsByClient={documentsByClient}
        consentsByClient={consentsByClient}
        kiikaAnalysesByClient={kiikaAnalysesByClient}
        kiikaCarePlansByClient={kiikaCarePlansByClient}
        therapistName={therapist?.fullName ?? "Thérapeute"}
        therapistRole={therapist?.role ?? "Thérapeute"}
        billing={
          therapist?.billing ?? {
            businessName: null,
            legalForm: null,
            addressLine1: null,
            addressLine2: null,
            postalCode: null,
            city: null,
            country: "France",
            phone: null,
            email: null,
            siret: null,
            apeCode: null,
            rcs: null,
            tvaNumber: null,
            tvaRegime: "franchise",
            tvaRate: null,
            iban: null,
            bic: null,
            bankName: null,
            invoiceFooter: null,
            paymentTerms: null,
            logoUrl: null,
          }
        }
        initialId={id}
      />
    </AppShell>
  );
}
