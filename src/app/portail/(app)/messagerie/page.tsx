import { requirePortalClient } from "@/lib/portal-server";
import { MessagerieClient, type PortalMessage } from "./MessagerieClient";

export default async function PortalMessageriePage() {
  const { supabase, client } = await requirePortalClient();

  const { data: therapist } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", client.therapist_id)
    .maybeSingle();

  const { data: rows } = await supabase
    .from("client_messages")
    .select("id, body, sender_role, created_at, read_at")
    .eq("client_id", client.id)
    .order("created_at", { ascending: true });

  // Marque comme lus les messages thérapeute non encore lus
  const unreadIds = (rows ?? [])
    .filter((m) => m.sender_role === "therapist" && !m.read_at)
    .map((m) => m.id);
  if (unreadIds.length > 0) {
    await supabase
      .from("client_messages")
      .update({ read_at: new Date().toISOString() })
      .in("id", unreadIds);
  }

  const messages: PortalMessage[] = (rows ?? []).map((m) => ({
    id: m.id,
    body: m.body,
    senderRole: m.sender_role as "therapist" | "client",
    createdAt: m.created_at,
  }));

  return (
    <MessagerieClient
      clientId={client.id}
      therapistName={therapist?.full_name ?? "votre praticien·ne"}
      messages={messages}
    />
  );
}
