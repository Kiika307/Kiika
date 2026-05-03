import type { Metadata } from "next";
import { loadSeleneInvitation } from "@/lib/selene-actions";
import { SeleneTestClient } from "@/components/selene/SeleneTestClient";
import { SeleneInvalid } from "@/components/selene/SeleneInvalid";
import { SeleneAlreadyTaken } from "@/components/selene/SeleneAlreadyTaken";

export const metadata: Metadata = {
  title: "Test Selene — KIIKA",
  description:
    "Test psychométrique Selene : 9 dimensions de personnalité créées par Varinka ROBERT.",
  robots: { index: false, follow: false },
};

interface PageProps {
  params: Promise<{ token: string }>;
}

export default async function SelenePage({ params }: PageProps) {
  const { token } = await params;
  const inv = await loadSeleneInvitation(token);

  if (!inv.ok) {
    return <SeleneInvalid reason={inv.error ?? "Lien invalide."} />;
  }
  if (inv.alreadyUsed) {
    return <SeleneAlreadyTaken />;
  }

  return <SeleneTestClient token={token} firstName={inv.clientFirstName ?? "Bonjour"} />;
}
