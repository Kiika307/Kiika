import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: ReactNode;
  sub?: string;
  color?: string;
  /** Optional decorative photo URL — only displayed in academia theme via CSS. */
  photoUrl?: string;
  /** When set, the whole card becomes a link to this route. */
  href?: string;
}

export function StatCard({
  label,
  value,
  icon,
  sub,
  color = "#2E8A7B",
  photoUrl,
  href,
}: StatCardProps) {
  const cardStyle: CSSProperties = {
    boxShadow: "var(--shadow-card)",
    backgroundColor: "var(--color-white-soft)",
  };
  if (photoUrl) {
    (cardStyle as Record<string, string>)["--aca-photo"] = `url(${photoUrl})`;
  }

  const inner = (
    <>
      <div className="relative z-[1]">
        <div className="flex items-center justify-between mb-3">
          <span
            className="inline-flex items-center justify-center rounded-[10px] w-9 h-9"
            style={{ backgroundColor: `${color}15`, color }}
          >
            {icon}
          </span>
          {sub && (
            <span className="text-[11px] font-medium" style={{ color }}>
              {sub}
            </span>
          )}
        </div>
        <div className="font-serif text-[24px] sm:text-[30px] leading-tight font-bold text-[var(--color-navy)] tabular">
          {value}
        </div>
        <div className="mt-1 text-[11px] sm:text-[12px] text-[var(--color-gray-soft)] uppercase tracking-wide">
          {label}
        </div>
      </div>
      {photoUrl && <div className="aca-photo" aria-hidden="true" />}
    </>
  );

  const baseClass =
    "relative rounded-[16px] bg-white-soft px-4 sm:px-[22px] py-4 sm:py-5 overflow-hidden block";

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClass} transition-transform hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/50`}
        style={cardStyle}
        aria-label={`${label} — ${value}`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className={baseClass} style={cardStyle}>
      {inner}
    </div>
  );
}
