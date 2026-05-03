import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 py-12 text-center bg-[var(--color-cream)]">
      <div
        className="rounded-full p-4 mb-5"
        style={{ backgroundColor: "rgba(200,160,48,0.15)" }}
        aria-hidden="true"
      >
        <Search size={36} className="text-[var(--color-gold)]" />
      </div>
      <p className="font-serif text-[64px] sm:text-[80px] font-bold leading-none text-[var(--color-navy)]">
        404
      </p>
      <h1 className="mt-2 font-serif text-[20px] sm:text-[24px] font-semibold text-[var(--color-navy)]">
        Page introuvable
      </h1>
      <p className="mt-2 max-w-md text-[13px] sm:text-[14px] text-[var(--color-gray-soft)] leading-[1.5]">
        Cette page n&apos;existe pas ou a été déplacée. Vérifiez l&apos;URL ou
        retournez à l&apos;accueil.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-[10px] px-5 py-2.5 text-[13px] font-semibold text-white min-h-11"
        style={{ backgroundColor: "var(--color-gold)" }}
      >
        <Home size={14} aria-hidden="true" />
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
