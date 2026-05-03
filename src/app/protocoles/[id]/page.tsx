import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { ProtocolDetailClient } from "@/components/protocoles/ProtocolDetailClient";
import { getProtocolById, getClientsRich } from "@/lib/data";
import { getProtocolDetail } from "@/lib/protocol-details";

interface ProtocolDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProtocolDetailPage({ params }: ProtocolDetailPageProps) {
  const { id } = await params;
  const protocolId = Number(id);
  const [protocol, clients] = await Promise.all([getProtocolById(protocolId), getClientsRich()]);
  if (!protocol) notFound();
  const detail = getProtocolDetail(protocolId);

  return (
    <AppShell>
      <ProtocolDetailClient protocol={protocol} detail={detail} clients={clients} />
    </AppShell>
  );
}
