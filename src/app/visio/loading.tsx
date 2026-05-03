import { AppShell } from "@/components/layout/AppShell";
import { Skeleton } from "@/components/ui/Skeleton";

export default function VisioLoading() {
  return (
    <AppShell>
      <header className="mb-6 space-y-2">
        <Skeleton height={28} width={120} />
        <Skeleton height={14} width={260} />
      </header>
      <div className="grid gap-3 sm:gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="bg-[var(--color-white-soft)] rounded-[var(--radius-card-lg)] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 border border-black/5"
          >
            <div className="flex items-center gap-4 flex-1">
              <Skeleton shape="circle" width={48} height={48} />
              <div className="flex-1 space-y-2">
                <Skeleton height={15} width="60%" />
                <Skeleton height={11} width="40%" />
              </div>
            </div>
            <div className="flex gap-2">
              <Skeleton height={36} width={70} />
              <Skeleton height={36} width={90} />
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
