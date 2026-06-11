import { AppShell } from "@/components/layout/AppShell";
import { ClientsClient } from "@/components/clients/ClientsClient";
import { getClientsRich, getProtocols, getTherapist, getClientDetailData } from "@/lib/data";

interface ClientsPageProps {
  searchParams: Promise<{ id?: string }>;
}

export default async function ClientsPage({ searchParams }: ClientsPageProps) {
  const { id } = await searchParams;
  // Chargement léger : seulement la liste + protocoles + praticien.
  // Le détail n'est chargé que pour LE client sélectionné (via ?id), au lieu
  // de 10 requêtes pour TOUS les clients au montage (perf H1). La sélection
  // navigue vers ?id=… → le serveur re-rend en chargeant un seul client.
  const [clients, protocols, therapist] = await Promise.all([
    getClientsRich(),
    getProtocols(),
    getTherapist(),
  ]);

  const selectedId =
    id && clients.some((c) => c.id === id) ? id : clients[0]?.id ?? null;
  const detail = selectedId ? await getClientDetailData(selectedId) : null;

  return (
    <AppShell>
      <ClientsClient
        clients={clients}
        protocols={protocols}
        selectedId={selectedId}
        detail={detail}
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
      />
    </AppShell>
  );
}
