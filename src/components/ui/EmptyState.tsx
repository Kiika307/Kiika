import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  message?: string;
  action?: ReactNode;
  compact?: boolean;
}

export function EmptyState({
  icon: Icon,
  title,
  message,
  action,
  compact = false,
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${
        compact ? "px-4 py-8" : "px-6 py-12 sm:py-16"
      }`}
    >
      {Icon && (
        <div
          className="rounded-full p-3 mb-3"
          style={{ backgroundColor: "rgba(200,160,48,0.10)" }}
          aria-hidden="true"
        >
          <Icon size={compact ? 22 : 28} className="text-[var(--color-gold)]" />
        </div>
      )}
      <h3
        className={`font-serif font-semibold text-[var(--color-navy)] ${
          compact ? "text-[15px]" : "text-[17px] sm:text-[18px]"
        }`}
      >
        {title}
      </h3>
      {message && (
        <p
          className={`mt-1.5 max-w-sm text-[var(--color-gray-soft)] leading-[1.5] ${
            compact ? "text-[12px]" : "text-[13px] sm:text-[14px]"
          }`}
        >
          {message}
        </p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
