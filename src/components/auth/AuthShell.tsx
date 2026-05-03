import Link from "next/link";

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: { text: string; linkLabel: string; href: string };
}

export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "var(--color-cream)" }}>
      <div
        className="w-full max-w-[420px] rounded-[18px] px-9 py-10"
        style={{ background: "var(--color-white-soft)", boxShadow: "var(--shadow-modal)" }}
      >
        <div className="mb-6 text-center">
          <div className="font-serif text-[28px] font-bold text-[var(--color-navy)]">INTIO</div>
          <div className="mt-2 font-serif text-[20px] text-[var(--color-navy)]">{title}</div>
          <p className="mt-1 text-[13px] text-[var(--color-gray-soft)]">{subtitle}</p>
        </div>
        {children}
        <div className="mt-6 text-center text-[13px] text-[var(--color-gray-soft)]">
          {footer.text}{" "}
          <Link href={footer.href} className="font-semibold text-[var(--color-gold)] hover:underline">
            {footer.linkLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
