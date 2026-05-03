import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Largeur arbitraire (px ou %). Si fournie, override w-full. */
  width?: number | string;
  /** Hauteur arbitraire. */
  height?: number | string;
  /** Forme : rectangle (par défaut) ou cercle (pour avatars). */
  shape?: "rect" | "circle";
}

/**
 * Skeleton — placeholder animé pour les zones en chargement.
 *
 * - `aria-hidden="true"` (le contenu réel sera annoncé une fois chargé)
 * - Animation `pulse` Tailwind, désactivée par `prefers-reduced-motion`
 * - Couleur cohérente avec le design system INTIO
 */
export function Skeleton({
  width,
  height,
  shape = "rect",
  className,
  style,
  ...rest
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-pulse bg-[var(--color-light-gray)]",
        shape === "circle" ? "rounded-full" : "rounded-[8px]",
        !width && "w-full",
        !height && shape === "rect" && "h-4",
        className,
      )}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        ...style,
      }}
      {...rest}
    />
  );
}

/* Helpers pour les patterns courants */

export function SkeletonText({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height={12}
          width={i === lines - 1 ? "70%" : "100%"}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[16px] bg-[var(--color-white-soft)] p-5 space-y-3",
        className,
      )}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="flex items-center gap-3">
        <Skeleton shape="circle" width={42} height={42} />
        <div className="flex-1 space-y-2">
          <Skeleton height={14} width="60%" />
          <Skeleton height={11} width="40%" />
        </div>
      </div>
      <SkeletonText lines={2} />
    </div>
  );
}
