import { AppShell } from "@/components/layout/AppShell";
import { Skeleton, SkeletonCard } from "@/components/ui/Skeleton";

export default function SubscriptionLoading() {
  return (
    <AppShell>
      <div className="space-y-4 max-w-2xl">
        <Skeleton height={28} width={200} />
        <SkeletonCard />
      </div>
    </AppShell>
  );
}
