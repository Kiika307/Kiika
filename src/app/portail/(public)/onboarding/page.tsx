import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { OnboardingForm } from "./OnboardingForm";

export default async function PortalOnboardingPage() {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/portail/login");

  const { data: client } = await supabase
    .from("clients")
    .select("full_name, cgu_accepted_at, cgv_accepted_at, rgpd_accepted_at")
    .eq("user_id", auth.user.id)
    .maybeSingle();

  if (!client) redirect("/portail/login?error=no_client");
  if (client.cgu_accepted_at && client.cgv_accepted_at && client.rgpd_accepted_at) {
    redirect("/portail");
  }

  return <OnboardingForm clientFirstName={(client.full_name ?? "").split(" ")[0]} />;
}

export const metadata = {
  title: "Activation · Espace personnel KIIKA",
};
