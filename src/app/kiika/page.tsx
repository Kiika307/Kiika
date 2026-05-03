import { AppShell } from "@/components/layout/AppShell";
import { KiikaAssistant } from "@/components/kiika/KiikaAssistant";
import { getClientsRich } from "@/lib/data";

export default async function KiikaPage() {
  const clients = await getClientsRich();
  const llmEnabled = process.env.KIIKA_ENABLE_LLM_ANALYSIS === "true";

  return (
    <AppShell>
      <KiikaAssistant clients={clients} llmEnabled={llmEnabled} />
    </AppShell>
  );
}
