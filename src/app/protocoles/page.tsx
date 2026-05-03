import { AppShell } from "@/components/layout/AppShell";
import { ProtocolesClient } from "@/components/protocoles/ProtocolesClient";
import { getProtocols, getClientsRich } from "@/lib/data";

export default async function ProtocolesPage() {
  const [protocols, clients] = await Promise.all([getProtocols(), getClientsRich()]);
  return (
    <AppShell>
      <ProtocolesClient protocols={protocols} clients={clients} />
    </AppShell>
  );
}
