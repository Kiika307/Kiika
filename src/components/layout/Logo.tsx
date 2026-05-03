export function Logo({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="14" stroke="#F5E8C0" strokeWidth="1.2" strokeDasharray="2 3" />
        <ellipse cx="16" cy="16" rx="11" ry="6" stroke="#F5E8C0" strokeWidth="1" strokeDasharray="2 3" />
        <ellipse cx="16" cy="16" rx="6" ry="11" stroke="#F5E8C0" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="16" cy="16" r="2.5" fill="#C8A030" />
      </svg>
      <span className="font-serif text-[18px] font-semibold tracking-[0.18em] text-[var(--color-gold-light)]">
        KIIKA
      </span>
    </div>
  );
}
