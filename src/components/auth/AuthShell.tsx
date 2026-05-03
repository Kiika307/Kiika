import Link from "next/link";

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: { text: string; linkLabel: string; href: string };
}

export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <div
      className="min-h-[100dvh] flex items-center justify-center px-5 py-10 sm:px-6 sm:py-14"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="w-full max-w-[440px]">
        <div className="text-center mb-8">
          <h1 className="font-serif text-[44px] sm:text-[52px] font-bold tracking-[0.18em] text-[var(--color-navy)] leading-none">
            KIIKA
          </h1>
          <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">
            Ki · Introspection · Intuition · Ka · Alignement
          </p>
        </div>

        <div
          className="rounded-[18px] px-6 sm:px-9 py-8 sm:py-10"
          style={{ background: "var(--color-white-soft)", boxShadow: "var(--shadow-modal)" }}
        >
          <header className="mb-6 text-center">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[var(--color-navy)]">
              {title}
            </h2>
            <p className="mt-1 text-[13px] text-[var(--color-gray-soft)]">{subtitle}</p>
          </header>
          {children}
          <p className="mt-6 text-center text-[13px] text-[var(--color-gray-soft)]">
            {footer.text}{" "}
            <Link
              href={footer.href}
              className="font-semibold text-[var(--color-gold)] hover:underline"
            >
              {footer.linkLabel}
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
    </div>
  );
}
