interface SectionCardProps {
  title: string;
  action?: { label: string; href?: string };
  children: React.ReactNode;
}

export function SectionCard({ title, action, children }: SectionCardProps) {
  return (
    <section
      className="rounded-[16px] p-6"
      style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
    >
      <header className="flex items-center justify-between mb-5">
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)]">{title}</h2>
        {action && (
          <a
            href={action.href ?? "#"}
            className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-gold)] hover:underline"
          >
            {action.label}
          </a>
        )}
      </header>
      {children}
    </section>
  );
}
