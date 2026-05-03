import { AppShell } from "@/components/layout/AppShell";
import { MessagerieClient } from "@/components/messagerie/MessagerieClient";
import { getClientsRich, getConversations } from "@/lib/data";

export default async function MessageriePage() {
  const [clients, conversations] = await Promise.all([getClientsRich(), getConversations()]);
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
      <MessagerieClient clients={clients} conversations={conversations} />
    </AppShell>
  );
}
