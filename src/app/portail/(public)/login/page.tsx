import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LoginClient } from "./LoginClient";

interface Props {
  searchParams: Promise<{ next?: string; error?: string }>;
}

export default async function PortalLoginPage({ searchParams }: Props) {
  const { next, error } = await searchParams;
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (auth.user && (!next || !next.startsWith("/portail/invitation"))) {
    redirect(next ?? "/portail");
  }

  return <LoginClient next={next ?? "/portail"} initialError={error ?? null} />;
}

export const metadata = {
  title: "Connexion · Espace personnel KIIKA",
};
