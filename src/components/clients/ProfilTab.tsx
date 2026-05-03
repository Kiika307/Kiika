"use client";

import { useTransition, useState } from "react";
import { Camera, Check, Zap } from "lucide-react";
import { toast } from "sonner";
import { RadarChart } from "@/components/ui/RadarChart";
import { Badge } from "@/components/ui/Badge";
import { EvolutionChart } from "./EvolutionChart";
import { recordProfileSnapshot } from "@/lib/actions";
import type { Client, ProfileSnapshot } from "@/lib/types";

interface ProfilTabProps {
  client: Client;
  snapshots: ProfileSnapshot[];
}

export function ProfilTab({ client, snapshots }: ProfilTabProps) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  if (!client.profile) {
    return (
      <div
        className="rounded-[16px] p-12 text-center"
        style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
      >
        <h3 className="font-serif text-[20px] font-semibold text-[var(--color-navy)]">
          Test psychométrique non réalisé
        </h3>
        <p className="mt-2 text-[14px] text-[var(--color-gray-soft)]">
          {client.name.split(" ")[0]} n&apos;a pas encore complété son profil.
        </p>
        <button
          className="mt-6 rounded-[10px] px-5 py-2.5 text-[13px] font-semibold text-white"
          style={{ backgroundColor: "var(--color-gold)" }}
        >
          Envoyer le questionnaire
        </button>
      </div>
    );
  }

  const { axes, themes, objectifs, blocages, dominante } = client.profile;

  function handleSnapshot() {
    if (!client.profile) return;
    setError(null);
    startTransition(async () => {
      const res = await recordProfileSnapshot({
        clientId: client.id,
        axes: client.profile!.axes,
        dominante: client.profile!.dominante,
      });
      if (res.ok) {
        toast.success("Snapshot du profil enregistré");
      } else {
        setError(res.error ?? "Erreur");
        toast.error(res.error ?? "Impossible d'enregistrer le snapshot");
      }
    });
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <section
          className="rounded-[16px] p-6"
          style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
        >
          <header className="mb-4">
            <h3 className="font-serif text-[18px] font-semibold text-[var(--color-navy)]">
              Profil psychométrique
            </h3>
            <p className="text-[12px] text-[var(--color-gray-soft)] mt-0.5">Dominante · {dominante}</p>
          </header>
          <div className="flex justify-center">
            <RadarChart axes={axes} color={client.color} size={280} />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.entries(axes).map(([k, v]) => (
              <div key={k} className="flex items-center justify-between text-[12px]">
                <span className="text-[var(--color-gray-soft)]">{k}</span>
                <span className="font-semibold text-[var(--color-navy)]">{v}%</span>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-5">
          <section
            className="rounded-[16px] p-6"
            style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="font-serif text-[16px] font-semibold text-[var(--color-navy)] mb-3">Thèmes</h3>
            <div className="flex flex-wrap gap-2">
              {themes.map((t) => (
                <Badge key={t} color={client.color}>
                  {t}
                </Badge>
              ))}
            </div>
          </section>

          <section
            className="rounded-[16px] p-6"
            style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="font-serif text-[16px] font-semibold text-[var(--color-navy)] mb-3">Objectifs</h3>
            <ul className="space-y-2">
              {objectifs.map((o) => (
                <li key={o} className="flex items-start gap-2 text-[13px] text-[var(--color-navy)]">
                  <Check size={14} strokeWidth={2.5} className="text-[var(--color-teal)] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="rounded-[16px] p-6"
            style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="font-serif text-[16px] font-semibold text-[var(--color-navy)] mb-3">Blocages</h3>
            <ul className="space-y-2">
              {blocages.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[13px] text-[var(--color-navy)]">
                  <Zap size={14} strokeWidth={2} className="text-[var(--color-red-alert)] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section
        className="rounded-[16px] p-6"
        style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
      >
        <header className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-serif text-[18px] font-semibold text-[var(--color-navy)]">
              Évolution du profil
            </h3>
            <p className="text-[12px] text-[var(--color-gray-soft)] mt-0.5">
              {snapshots.length} snapshot{snapshots.length > 1 ? "s" : ""} enregistré{snapshots.length > 1 ? "s" : ""}
            </p>
          </div>
          <button
            type="button"
            onClick={handleSnapshot}
            disabled={pending}
            className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-[12px] font-semibold text-white disabled:opacity-50"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            <Camera size={14} />
            {pending ? "…" : "Enregistrer un snapshot"}
          </button>
        </header>
        {error && (
          <div className="mb-3 rounded-[10px] bg-red-50 border border-red-200 px-3 py-2 text-[12px] text-red-700">
            {error}
          </div>
        )}
        <EvolutionChart snapshots={snapshots} />
      </section>
    </div>
  );
}
