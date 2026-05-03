import { AppShell } from "@/components/layout/AppShell";
import { Skeleton, SkeletonCard } from "@/components/ui/Skeleton";

export default function DashboardLoading() {
  return (
    <AppShell>
      <header className="mb-9 space-y-2">
        <Skeleton height={28} width={280} />
        <Skeleton height={14} width={200} />
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-[16px] bg-[var(--color-white-soft)] px-5 py-5 space-y-3"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <Skeleton shape="circle" width={36} height={36} />
            <Skeleton height={28} width="60%" />
            <Skeleton height={11} width="80%" />
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:[grid-template-columns:1.15fr_0.85fr]">
        <div className="space-y-6">
          <SkeletonCard />
          <SkeletonCard />
        </div>
        <div className="space-y-6">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </AppShell>
  );
}
