interface RadarChartProps {
  axes: Record<string, number>;
  color: string;
  size?: number;
}

export function RadarChart({ axes, color, size = 280 }: RadarChartProps) {
  const labels = Object.keys(axes);
  const values = Object.values(axes);
  const n = labels.length;
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.36;

  const point = (value: number, i: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const r = (value / 100) * radius;
    return [cx + Math.cos(angle) * r, cy + Math.sin(angle) * r] as const;
  };

  const dataPath = values
    .map((v, i) => {
      const [x, y] = point(v, i);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ") + " Z";

  const grids = [25, 50, 75, 100].map((pct) =>
    labels
      .map((_, i) => {
        const [x, y] = point(pct, i);
        return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ") + " Z",
  );

  const summary = labels.map((l, i) => `${l} ${values[i]}%`).join(", ");

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="block"
      role="img"
      aria-labelledby="radar-title radar-desc"
    >
      <title id="radar-title">Profil psychométrique en radar</title>
      <desc id="radar-desc">Profil sur {n} axes : {summary}.</desc>
      {grids.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#E5E7EB" strokeWidth={1} />
      ))}
      {labels.map((_, i) => {
        const [x, y] = point(100, i);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#E5E7EB" strokeWidth={1} />;
      })}
      <path d={dataPath} fill={`${color}2E`} stroke={color} strokeWidth={2.5} strokeLinejoin="round" />
      {values.map((v, i) => {
        const [x, y] = point(v, i);
        return (
          <circle key={i} cx={x} cy={y} r={4} fill={color} stroke="#fff" strokeWidth={1.5}>
            <title>{`${labels[i]} : ${v}%`}</title>
          </circle>
        );
      })}
      {labels.map((label, i) => {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        const lx = cx + Math.cos(angle) * (radius + 22);
        const ly = cy + Math.sin(angle) * (radius + 22);
        return (
          <text
            key={label}
            x={lx}
            y={ly}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={10}
            fontWeight={700}
            fill="#1B2D47"
            fontFamily="var(--font-sans)"
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}
