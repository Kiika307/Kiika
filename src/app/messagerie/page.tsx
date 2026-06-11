import { AppShell } from "@/components/layout/AppShell";
import { MessagerieClient } from "@/components/messagerie/MessagerieClient";
import { getClientsRich, getConversations, getTherapist } from "@/lib/data";

export default async function MessageriePage() {
  const [clients, conversations, therapist] = await Promise.all([
    getClientsRich(),
    getConversations(),
    getTherapist(),
  ]);
  return (
    <AppShell>
      <div className="flex items-baseline justify-between mb-5">
        <div>
          <h1 className="font-serif text-[28px] font-bold text-[var(--color-navy)]">Messagerie</h1>
          <p className="mt-1 text-[13px] text-[var(--color-gray-soft)]">
            Conversations sécurisées avec vos clients.
          </p>
        </div>
      </div>
      <MessagerieClient
        clients={clients}
        conversations={conversations}
        therapistId={therapist?.id ?? ""}
      />
    </AppShell>
  );
}
