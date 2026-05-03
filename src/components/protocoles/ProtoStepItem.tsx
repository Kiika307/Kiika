"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import type { ProtoStep } from "@/lib/types";

interface ProtoStepItemProps {
  step: ProtoStep;
  idx: number;
  color: string;
}

export function ProtoStepItem({ step, idx, color }: ProtoStepItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="w-full text-left rounded-[12px] px-4 py-3 mb-2 transition-all"
      style={{
        border: `1px solid ${open ? color + "44" : "#E9EBF0"}`,
        background: open ? color + "08" : "var(--color-white-soft)",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[11px] font-bold transition-all"
          style={{
            background: open ? color : color + "22",
            color: open ? "white" : color,
          }}
        >
          {idx + 1}
        </div>
        <span className="text-[13px] font-semibold text-[var(--color-navy)] flex-1">{step.label}</span>
        <ChevronRight
          size={16}
          strokeWidth={2}
          className="text-[var(--color-gray-soft)] transition-transform"
          style={{ transform: open ? "rotate(90deg)" : "none" }}
          aria-hidden="true"
        />
      </div>
      {open && (
        <div
          className="mt-2.5 ml-9 text-[13px] text-[var(--color-gray-soft)] leading-[1.7] pt-2.5"
          style={{ borderTop: "1px solid #F0F0EE" }}
        >
          {step.detail}
        </div>
      )}
    </button>
  );
}
