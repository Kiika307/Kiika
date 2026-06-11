import { AppShell } from "@/components/layout/AppShell";
import { Skeleton, SkeletonCard } from "@/components/ui/Skeleton";

export default function KiikaLoading() {
  return (
    <AppShell>
      <div className="space-y-4">
        <Skeleton height={28} width={220} />
        <Skeleton height={14} width={320} />
        <div className="grid gap-4 sm:grid-cols-2 mt-4">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </AppShell>
  );
}
