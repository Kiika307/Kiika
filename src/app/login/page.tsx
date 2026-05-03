import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";
import { KiikaStory } from "@/components/auth/KiikaStory";

interface LoginPageProps {
  searchParams: Promise<{ redirect?: string; registered?: string }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { redirect, registered } = await searchParams;

  return (
    <div
      className="min-h-[100dvh] grid lg:grid-cols-[1.05fr_1fr]"
      style={{ background: "var(--color-cream)" }}
    >
      {/* Storytelling — masqué mobile, visible lg+ */}
      <aside
        className="hidden lg:flex flex-col justify-between px-12 xl:px-16 py-12 relative overflow-hidden"
        style={{ background: "var(--color-navy)", color: "var(--color-gold-light)" }}
      >
        <KiikaStory />
      </aside>

      {/* Formulaire */}
      <main className="flex items-center justify-center px-5 sm:px-8 py-10 sm:py-14">
        <div className="w-full max-w-[420px]">
          {/* Brand mobile only */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="font-serif text-[44px] font-bold tracking-[0.18em] text-[var(--color-navy)]">
              KIIKA
            </h1>
            <p className="mt-1.5 text-[12px] uppercase tracking-[0.22em] text-[var(--color-gold)]">
              Ki · Introspection · Intuition · Ka · Alignement
            </p>
          </div>

          <div
            className="rounded-[18px] px-6 sm:px-9 py-8 sm:py-10"
            style={{
              background: "var(--color-white-soft)",
              boxShadow: "var(--shadow-modal)",
            }}
          >
            <header className="mb-6 text-center">
              <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[var(--color-navy)]">
                Connexion
              </h2>
              <p className="mt-1 text-[13px] text-[var(--color-gray-soft)]">
                Accède à ton espace praticien
              </p>
            </header>

            <LoginForm redirectTo={redirect ?? "/"} registered={registered === "1"} />

            <p className="mt-6 text-center text-[13px] text-[var(--color-gray-soft)]">
              Pas encore de compte ?{" "}
              <Link
                href="/signup"
                className="font-semibold text-[var(--color-gold)] hover:underline"
              >
                Créer un compte
              </Link>
            </p>
          </div>

          <footer className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] text-[var(--color-gray-soft)]">
            <Link href="/cgu" className="hover:text-[var(--color-navy)]">CGU</Link>
            <span aria-hidden="true">·</span>
            <Link href="/cgv" className="hover:text-[var(--color-navy)]">CGV</Link>
            <span aria-hidden="true">·</span>
            <Link href="/mentions-legales" className="hover:text-[var(--color-navy)]">
              Mentions légales
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/confidentialite" className="hover:text-[var(--color-navy)]">
              Confidentialité
            </Link>
          </footer>
        </div>
      </main>
    </div>
  );
}
