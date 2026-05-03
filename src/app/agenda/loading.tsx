import { AppShell } from "@/components/layout/AppShell";
import { Skeleton } from "@/components/ui/Skeleton";

export default function AgendaLoading() {
  return (
    <AppShell>
      <header className="flex items-center justify-between mb-6">
        <Skeleton height={28} width={180} />
        <Skeleton height={36} width={140} />
      </header>

      <div
        className="rounded-[16px] bg-[var(--color-white-soft)] p-4 space-y-2"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 py-2">
            <Skeleton width={48} height={14} />
            <Skeleton className="flex-1" height={32} />
          </div>
        ))}
      </div>
    </AppShell>
  );
}
