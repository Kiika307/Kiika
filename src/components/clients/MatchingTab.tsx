import { Sparkles, Lightbulb, ArrowRight } from "lucide-react";
import { MatchBar } from "@/components/ui/MatchBar";
import { Badge } from "@/components/ui/Badge";
import type { Client, Protocol } from "@/lib/types";

interface MatchingTabProps {
  client: Client;
  protocols: Protocol[];
}

export function MatchingTab({ client, protocols }: MatchingTabProps) {
  if (!client.testDone || client.topProtocols.length === 0) {
    return (
      <div
        className="rounded-[16px] p-10 text-center"
        style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
      >
        <p className="text-[14px] text-[var(--color-gray-soft)]">
          Le matching sera disponible après le test psychométrique.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section
        className="rounded-[18px] p-6"
        style={{ backgroundColor: "var(--color-navy)", color: "var(--color-gold-light)" }}
      >
        <header className="flex items-center gap-2 mb-3">
          <Sparkles size={18} strokeWidth={1.8} className="text-[var(--color-gold)]" aria-hidden="true" />
          <h3 className="font-serif text-[16px] font-semibold">Lecture IA du profil</h3>
        </header>
        <p className="text-[13px] text-white/80 leading-relaxed">
          Profil <span className="text-[var(--color-gold-light)] font-semibold">{client.profile?.dominante}</span> avec
          des axes {Object.entries(client.profile?.axes ?? {})
            .sort((a, b) => b[1] - a[1])
            .slice(0, 2)
            .map(([k]) => k.toLowerCase())
            .join(" et ")}{" "}
          marqués. Recommandations basées sur la compatibilité du profil et des objectifs.
        </p>
      </section>

      {client.topProtocols.map((tp, idx) => {
        const protocol = protocols.find((p) => p.id === tp.id);
        if (!protocol) return null;
        return (
          <article
            key={tp.id}
            className="rounded-[16px] p-6"
            style={{
              backgroundColor: "var(--color-white-soft)",
              boxShadow: "var(--shadow-card)",
              borderLeft: `4px solid ${protocol.color}`,
            }}
          >
            <header className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-serif font-bold text-white text-[14px]"
                style={{ backgroundColor: protocol.color }}
              >
                {idx + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-[17px] font-semibold text-[var(--color-navy)]">{protocol.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge color={protocol.color}>{protocol.category}</Badge>
                  <span className="text-[11px] text-[var(--color-gray-soft)]">
                    {protocol.duration} · {protocol.level}
                  </span>
                </div>
              </div>
            </header>

            <MatchBar score={tp.score} color={protocol.color} />

            <p
              className="mt-4 text-[13px] text-[var(--color-navy)] leading-relaxed rounded-[12px] px-4 py-3 inline-flex gap-2"
              style={{ backgroundColor: "#F8F9FA" }}
            >
              <Lightbulb size={14} strokeWidth={2} className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>{tp.reason}</span>
            </p>

            <div className="flex gap-3 mt-4">
              <button
                className="flex-1 rounded-[10px] py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: protocol.color }}
              >
                Utiliser ce protocole
              </button>
              <button
                className="rounded-[10px] border px-5 py-2.5 text-[13px] font-semibold transition-colors hover:bg-[var(--color-light-gray)] inline-flex items-center gap-1.5"
                style={{ borderColor: protocol.color, color: protocol.color }}
              >
                Fiche
                <ArrowRight size={13} strokeWidth={2.2} aria-hidden="true" />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
