import { createClient } from "@/lib/supabase/server";
import { DevoirsClient, type Devoir } from "./DevoirsClient";

export default async function PortalDevoirsPage() {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  const { data: client } = await supabase
    .from("clients")
    .select("id")
    .eq("user_id", auth.user!.id)
    .single();

  const { data: tasks } = await supabase
    .from("client_tasks")
    .select("id, title, description, due_date, completed_at, client_feedback")
    .eq("client_id", client!.id)
    .order("completed_at", { ascending: true })
    .order("due_date", { ascending: true });

  const items: Devoir[] = (tasks ?? []).map((t) => ({
    id: t.id,
    title: t.title,
    description: t.description,
    dueDate: t.due_date,
    completedAt: t.completed_at,
    clientFeedback: t.client_feedback,
  }));

  return <DevoirsClient items={items} />;
}
