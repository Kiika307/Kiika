import { Skeleton, SkeletonCard } from "@/components/ui/Skeleton";

export default function PortalLoading() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Skeleton height={28} width={220} />
        <Skeleton height={14} width={280} />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
}
