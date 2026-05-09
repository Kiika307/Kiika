import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { claimClientInvitation } from "@/lib/portal-actions";

interface Props {
  params: Promise<{ token: string }>;
}

export default async function PortalClaimPage({ params }: Props) {
  const { token } = await params;
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();

  if (!auth.user) {
    redirect(`/portail/login?next=${encodeURIComponent(`/portail/invitation/${token}`)}`);
  }

  const res = await claimClientInvitation(token);
  if (!res.ok) {
    return (
      <div
        className="min-h-[100dvh] flex items-center justify-center px-4"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div
          className="max-w-md rounded-[16px] bg-white p-6 text-center"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <h1 className="font-serif text-[20px] font-semibold text-[var(--color-navy)] mb-2">
            Lien invalide
          </h1>
          <p className="text-[13px] text-[var(--color-gray-soft)]">{res.error}</p>
          <a
            href="/portail/login"
            className="mt-4 inline-block rounded-[10px] px-4 py-2 text-[13px] font-semibold text-white"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            Retour à la connexion
          </a>
        </div>
      </div>
    );
  }

  redirect(res.needsTerms ? "/portail/onboarding" : "/portail");
}
