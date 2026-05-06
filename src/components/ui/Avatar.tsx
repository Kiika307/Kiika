import { cn } from "@/lib/cn";

interface AvatarProps {
  initials: string;
  color: string;
  size?: number;
  className?: string;
  /** Optional uploaded photo URL — when set, displays the image instead of initials. */
  photoUrl?: string | null;
}

export function Avatar({ initials, color, size = 40, className, photoUrl }: AvatarProps) {
  if (photoUrl) {
    return (
      <span
        className={cn("inline-block rounded-full overflow-hidden shrink-0", className)}
        style={{ width: size, height: size }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoUrl}
          alt={initials}
          width={size}
          height={size}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </span>
    );
  }
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full font-semibold text-white shrink-0",
        className,
      )}
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
