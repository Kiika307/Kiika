"use client";

import Link from "next/link";
import { Sparkles, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { protocolDetails } from "@/lib/protocol-details";
import type { Protocol } from "@/lib/types";

interface ProtocolCardProps {
  protocol: Protocol;
  matchScore?: number | null;
}

export function ProtocolCard({ protocol, matchScore }: ProtocolCardProps) {
  const hasDetail = !!protocolDetails[protocol.id];
  return (
    <Link
      href={`/protocoles/${protocol.id}`}
      className="group relative block rounded-[16px] bg-[var(--color-white-soft)] p-[22px] transition-all duration-200 hover:-translate-y-0.5 press-feedback focus-ring virtualized-card"
      style={{
        borderTop: `3px solid ${protocol.color}`,
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div
        className="absolute inset-0 rounded-[16px] opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none"
        style={{ boxShadow: "var(--shadow-card-hover)" }}
      />
      {hasDetail && (
        <div
          className="absolute top-3 right-3 text-[10px] font-bold tracking-wider rounded-[8px] px-2 py-0.5"
          style={{ color: protocol.color, backgroundColor: protocol.color + "14" }}
        >
          FICHE COMPLÈTE
        </div>
      )}
      <div className="flex items-center justify-between mb-2.5">
        <Badge color={protocol.color}>{protocol.category}</Badge>
        {matchScore != null && (
          <div className="inline-flex items-center gap-1 text-[13px] font-bold tabular" style={{ color: protocol.color }}>
            <Sparkles size={13} strokeWidth={2.2} aria-hidden="true" />
            {matchScore}%
          </div>
        )}
      </div>
      <h3
        className="font-serif text-[17px] mb-2 text-[var(--color-navy)]"
        style={{ paddingRight: hasDetail ? 70 : 0 }}
      >
        {protocol.name}
      </h3>
      <p className="text-[13px] leading-[1.65] text-[var(--color-gray-soft)] mb-3.5">
        {protocol.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-3.5">
        {protocol.tags.map((t) => (
          <span
            key={t}
            className="text-[11px] text-[var(--color-gray-soft)] bg-[var(--color-light-gray)] rounded-[10px] px-2.5 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>
      <div
        className="flex items-center justify-between pt-3 text-[12px] text-[var(--color-gray-soft)]"
        style={{ borderTop: "1px solid #F0F0EE" }}
      >
        <span className="inline-flex items-center gap-1.5">
          <Clock size={12} strokeWidth={1.8} aria-hidden="true" />
          {protocol.duration} · {protocol.level}
        </span>
        <span className="font-semibold" style={{ color: protocol.color }}>
          Voir la fiche →
        </span>
      </div>
    </Link>
  );
}
