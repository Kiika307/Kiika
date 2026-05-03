interface MatchBarProps {
  score: number;
  color: string;
}

export function MatchBar({ score, color }: MatchBarProps) {
  const clamped = Math.max(0, Math.min(100, score));
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="relative flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#E9EBF0" }}>
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${clamped}%`,
            background: `linear-gradient(90deg, ${color}99, ${color})`,
          }}
        />
      </div>
      <span className="w-9 text-right font-bold text-[13px]" style={{ color }}>
        {clamped}%
      </span>
    </div>
  );
}
