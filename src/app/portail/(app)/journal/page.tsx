import { requirePortalClient } from "@/lib/portal-server";
import { JournalClient, type JournalEntry } from "./JournalClient";

export default async function PortalJournalPage() {
  const { supabase, client } = await requirePortalClient();

  const { data: rows } = await supabase
    .from("client_journal")
    .select("id, title, body, shared, created_at, updated_at")
    .eq("client_id", client.id)
    .order("created_at", { ascending: false });

  const entries: JournalEntry[] = (rows ?? []).map((r) => ({
    id: r.id,
    title: r.title,
    body: r.body,
    shared: r.shared,
    createdAt: r.created_at,
  }));

  return <JournalClient entries={entries} />;
}

export const metadata = {
  title: "Mon journal · Espace personnel KIIKA",
};
