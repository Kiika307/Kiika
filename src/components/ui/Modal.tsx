"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  width?: number;
}

export function Modal({ open, onClose, title, children, width = 480 }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(20,34,56,0.55)" }}
        onClick={onClose}
      />
      <div
        className="relative bg-[var(--color-white-soft)] rounded-[20px] p-9 max-h-[90vh] overflow-auto"
        style={{ width: `min(${width}px, 100%)`, boxShadow: "var(--shadow-modal)" }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-[22px] font-semibold text-[var(--color-navy)]">{title}</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--color-gray-soft)] hover:bg-[var(--color-light-gray)] transition-colors"
            aria-label="Fermer"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
