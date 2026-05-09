import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { PortalSidebar } from "@/components/portal/PortalSidebar";

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export default async function PortalAppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/portail/login");

  const { data: client } = await supabase
    .from("clients")
    .select("id, full_name, therapist_id, cgu_accepted_at, cgv_accepted_at, rgpd_accepted_at")
    .eq("user_id", auth.user.id)
    .maybeSingle();

  if (!client) redirect("/portail/login?error=no_client");
  const termsOk =
    !!client.cgu_accepted_at && !!client.cgv_accepted_at && !!client.rgpd_accepted_at;
  if (!termsOk) redirect("/portail/onboarding");

  const { data: therapist } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", client.therapist_id)
    .maybeSingle();

  return (
    <div
      className="flex flex-col md:flex-row min-h-[100dvh]"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <PortalSidebar
        clientName={client.full_name}
        clientInitials={initialsOf(client.full_name)}
        therapistName={therapist?.full_name ?? "votre praticien·ne"}
      />
      <main className="flex-1 px-4 py-5 sm:px-6 sm:py-6 md:px-9 md:py-8 max-w-full md:max-w-[1100px]">
        {children}
      </main>
    </div>
  );
}
