import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  bg?: string;
  className?: string;
}

export function Badge({ children, color = "#1B2D47", bg, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[20px] px-2.5 py-[3px] text-[11px] font-semibold tracking-wide",
        className,
      )}
      style={{
        color,
        backgroundColor: bg ?? `${color}22`,
      }}
    >
      {children}
    </span>
  );
}
