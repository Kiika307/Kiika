import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: ReactNode;
  sub?: string;
  color?: string;
}

export function StatCard({ label, value, icon, sub, color = "#2E8A7B" }: StatCardProps) {
  return (
    <div
      className="rounded-[16px] bg-white-soft px-4 sm:px-[22px] py-4 sm:py-5"
      style={{ boxShadow: "var(--shadow-card)", backgroundColor: "var(--color-white-soft)" }}
    >
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
      <div className="font-serif text-[24px] sm:text-[30px] leading-tight font-bold text-[var(--color-navy)] tabular">{value}</div>
      <div className="mt-1 text-[11px] sm:text-[12px] text-[var(--color-gray-soft)] uppercase tracking-wide">{label}</div>
    </div>
  );
}
