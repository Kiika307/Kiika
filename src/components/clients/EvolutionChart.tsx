"use client";

import { useMemo } from "react";
import type { ProfileSnapshot } from "@/lib/types";

interface EvolutionChartProps {
  snapshots: ProfileSnapshot[];
}

const AXIS_COLORS: Record<string, string> = {
  "Émotionnel": "#7C5CBF",
  Cognitif: "#C8A030",
  Somatique: "#2E8A7B",
  Comportemental: "#5B8FB9",
};

const AXES = ["Émotionnel", "Cognitif", "Somatique", "Comportemental"] as const;

const W = 600;
const H = 220;
const PAD_X = 36;
const PAD_Y = 22;

export function EvolutionChart({ snapshots }: EvolutionChartProps) {
  const lines = useMemo(() => {
    if (snapshots.length === 0) return [];
    const innerW = W - PAD_X * 2;
    const innerH = H - PAD_Y * 2;
    const n = snapshots.length;
    const xFor = (i: number) =>
      PAD_X + (n === 1 ? innerW / 2 : (innerW * i) / (n - 1));
    const yFor = (v: number) => PAD_Y + innerH - (v / 100) * innerH;
    return AXES.map((axis) => ({
      axis,
      color: AXIS_COLORS[axis],
      points: snapshots.map((s, i) => ({
        x: xFor(i),
        y: yFor(s.axes[axis] ?? 50),
        v: s.axes[axis] ?? 50,
      })),
    }));
  }, [snapshots]);

  if (snapshots.length === 0) {
    return (
      <div className="rounded-[12px] bg-[var(--color-white-soft)] p-6 text-center text-[12px] text-[var(--color-gray-soft)]">
        Aucun snapshot enregistré. Le profil actuel constitue le premier point — enregistre un snapshot pour suivre l'évolution.
      </div>
    );
  }

  const summary = AXES.map((axis) => {
    const last = snapshots[snapshots.length - 1].axes[axis] ?? 50;
    return `${axis} ${last}%`;
  }).join(", ");

  return (
    <div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-labelledby="evolution-title evolution-desc"
      >
        <title id="evolution-title">Évolution du profil psychométrique</title>
        <desc id="evolution-desc">
          Graphique linéaire avec {snapshots.length} mesure
          {snapshots.length > 1 ? "s" : ""} pour {AXES.length} axes. Dernières
          valeurs : {summary}.
        </desc>
        {[0, 25, 50, 75, 100].map((tick) => {
          const y = PAD_Y + (H - PAD_Y * 2) - (tick / 100) * (H - PAD_Y * 2);
          return (
            <g key={tick}>
              <line
                x1={PAD_X}
                x2={W - PAD_X}
                y1={y}
                y2={y}
                stroke="var(--color-light-gray)"
                strokeDasharray={tick === 50 ? "0" : "2 4"}
                strokeWidth={tick === 50 ? 1 : 0.5}
              />
              <text
                x={PAD_X - 6}
                y={y + 3}
                textAnchor="end"
                fontSize="9"
                fill="var(--color-gray-soft)"
              >
                {tick}
              </text>
            </g>
          );
        })}
        {lines.map((line) => (
          <g key={line.axis}>
            <polyline
              fill="none"
              stroke={line.color}
              strokeWidth={2}
              points={line.points.map((p) => `${p.x},${p.y}`).join(" ")}
            />
            {line.points.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r={3} fill={line.color}>
                <title>{`${line.axis} : ${p.v}% (${new Date(snapshots[i].takenAt).toLocaleDateString("fr-FR")})`}</title>
              </circle>
            ))}
          </g>
        ))}
        {snapshots.map((s, i) => {
          const innerW = W - PAD_X * 2;
          const x =
            PAD_X +
            (snapshots.length === 1 ? innerW / 2 : (innerW * i) / (snapshots.length - 1));
          const d = new Date(s.takenAt);
          return (
            <text
              key={s.id}
              x={x}
              y={H - 4}
              textAnchor="middle"
              fontSize="9"
              fill="var(--color-gray-soft)"
            >
              {d.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })}
            </text>
          );
        })}
      </svg>
      <div className="flex flex-wrap gap-3 mt-2 justify-center">
        {AXES.map((axis) => (
          <span key={axis} className="inline-flex items-center gap-1.5 text-[11px]">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ backgroundColor: AXIS_COLORS[axis] }}
            />
            <span className="text-[var(--color-navy)]">{axis}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
