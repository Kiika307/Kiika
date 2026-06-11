import { AppShell } from "@/components/layout/AppShell";
import { Skeleton, SkeletonCard } from "@/components/ui/Skeleton";

export default function SettingsLoading() {
  return (
    <AppShell>
      <div className="space-y-4 max-w-2xl">
        <Skeleton height={28} width={200} />
        <Skeleton height={14} width={300} />
        <div className="space-y-4 mt-4">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </AppShell>
  );
}
