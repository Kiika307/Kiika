"use client";

import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label"> {
  /** Required: visible accessible name for screen readers. */
  label: string;
  children: ReactNode;
}

/**
 * IconButton — bouton icône-seule accessible.
 *
 * Force le `aria-label` (via prop `label`), pose le `title` automatiquement,
 * applique un focus-ring conforme WCAG, et enveloppe l'enfant avec aria-hidden.
 *
 * Usage :
 *   <IconButton label="Modifier" onClick={...}><Pencil size={14} /></IconButton>
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { label, children, className, type = "button", ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      title={label}
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center rounded-[8px] p-1.5 transition-colors",
        "text-[var(--color-gray-soft)] hover:bg-[var(--color-light-gray)] hover:text-[var(--color-navy)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        className,
      )}
      {...rest}
    >
      <span aria-hidden="true" className="inline-flex">
        {children}
      </span>
    </button>
  );
});
