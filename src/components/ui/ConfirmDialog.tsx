"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { AlertTriangle } from "lucide-react";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
  onConfirm: () => void | Promise<void>;
  onCancel: () => void;
}

export function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel = "Confirmer",
  cancelLabel = "Annuler",
  destructive = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const confirmRef = useRef<HTMLButtonElement>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!open) return;
    confirmRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onCancel]);

  if (!open) return null;

  const handleConfirm = async () => {
    setPending(true);
    try {
      await onConfirm();
    } finally {
      setPending(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
      aria-describedby="confirm-message"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
    >
      <button
        type="button"
        onClick={onCancel}
        aria-label="Fermer la boîte de dialogue"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />
      <div
        className="relative w-full max-w-md rounded-[16px] bg-[var(--color-white-soft)] p-5 sm:p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150"
        style={{ boxShadow: "0 20px 60px rgba(15,31,58,0.25)" }}
      >
        <div className="flex items-start gap-3 mb-4">
          {destructive && (
            <div
              className="flex-shrink-0 rounded-full p-2"
              style={{ backgroundColor: "rgba(184,84,80,0.12)" }}
              aria-hidden="true"
            >
              <AlertTriangle size={20} className="text-[var(--color-red,#B85450)]" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h2
              id="confirm-title"
              className="font-serif text-[18px] font-bold text-[var(--color-navy)]"
            >
              {title}
            </h2>
            <p
              id="confirm-message"
              className="mt-1 text-[13px] text-[var(--color-gray-soft)] leading-[1.5]"
            >
              {message}
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            disabled={pending}
            className="rounded-[10px] border border-[var(--color-light-gray)] bg-white px-4 py-2.5 text-[13px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50 min-h-11"
          >
            {cancelLabel}
          </button>
          <button
            ref={confirmRef}
            type="button"
            onClick={handleConfirm}
            disabled={pending}
            className="rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50 min-h-11"
            style={{
              backgroundColor: destructive ? "#B85450" : "var(--color-gold)",
            }}
          >
            {pending ? "..." : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export function useConfirm() {
  const [state, setState] = useState<{
    open: boolean;
    title: string;
    message: string;
    confirmLabel?: string;
    destructive?: boolean;
    resolve?: (v: boolean) => void;
  }>({ open: false, title: "", message: "" });

  const confirm = useCallback(
    (opts: {
      title: string;
      message: string;
      confirmLabel?: string;
      destructive?: boolean;
    }): Promise<boolean> => {
      return new Promise((resolve) => {
        setState({ ...opts, open: true, resolve });
      });
    },
    [],
  );

  const handleConfirm = () => {
    state.resolve?.(true);
    setState((s) => ({ ...s, open: false }));
  };
  const handleCancel = () => {
    state.resolve?.(false);
    setState((s) => ({ ...s, open: false }));
  };

  const dialog = (
    <ConfirmDialog
      open={state.open}
      title={state.title}
      message={state.message}
      confirmLabel={state.confirmLabel}
      destructive={state.destructive}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );

  return { confirm, dialog };
}
