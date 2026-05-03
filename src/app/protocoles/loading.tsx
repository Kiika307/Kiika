import { AppShell } from "@/components/layout/AppShell";
import { Skeleton } from "@/components/ui/Skeleton";

export default function ProtocolesLoading() {
  return (
    <AppShell>
      <header className="mb-6 space-y-2">
        <Skeleton height={28} width={220} />
        <Skeleton height={14} width={300} />
      </header>

      <div className="flex flex-wrap gap-2 mb-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} height={32} width={100} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-[16px] bg-[var(--color-white-soft)] p-5 space-y-3"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <Skeleton height={20} width={80} />
            <Skeleton height={18} width="80%" />
            <Skeleton height={12} width="100%" />
            <Skeleton height={12} width="90%" />
            <div className="flex gap-2 pt-2">
              <Skeleton height={20} width={60} />
              <Skeleton height={20} width={50} />
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
