import Image from "next/image";

interface LogoProps {
  size?: number;
  /** When true, hide the "KIIKA" wordmark and show just the symbol. */
  iconOnly?: boolean;
}

export function Logo({ size = 32, iconOnly = false }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/kiika-logo.svg"
        alt="KIIKA"
        width={size}
        height={size}
        priority
        className="shrink-0"
      />
      {!iconOnly && (
        <span className="font-serif text-[18px] font-semibold tracking-[0.18em] text-[var(--color-gold-light)]">
          KIIKA
        </span>
      )}
    </div>
  );
}
