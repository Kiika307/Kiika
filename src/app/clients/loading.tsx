import { AppShell } from "@/components/layout/AppShell";
import { Skeleton, SkeletonCard } from "@/components/ui/Skeleton";

export default function ClientsLoading() {
  return (
    <AppShell>
      <div className="md:flex md:gap-6">
        <aside className="md:w-[272px] md:flex-shrink-0 mb-4 md:mb-0">
          <div className="rounded-[16px] bg-[var(--color-white-soft)] p-4 space-y-3">
            <Skeleton height={20} width={100} />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <Skeleton shape="circle" width={40} height={40} />
                <div className="flex-1 space-y-1">
                  <Skeleton height={12} width="70%" />
                  <Skeleton height={10} width="40%" />
                </div>
              </div>
            ))}
          </div>
        </aside>
        <main className="flex-1 space-y-4">
          <SkeletonCard />
          <SkeletonCard />
        </main>
      </div>
    </AppShell>
  );
}
