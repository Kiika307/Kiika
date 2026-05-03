import { cn } from "@/lib/cn";

interface AvatarProps {
  initials: string;
  color: string;
  size?: number;
  className?: string;
}

export function Avatar({ initials, color, size = 40, className }: AvatarProps) {
  return (
    <div
      className={cn("flex items-center justify-center rounded-full font-semibold text-white shrink-0", className)}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        fontSize: Math.round(size * 0.34),
        fontFamily: "var(--font-sans)",
      }}
    >
      {initials}
    </div>
  );
}
