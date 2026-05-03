import { AppShell } from "@/components/layout/AppShell";
import { Skeleton } from "@/components/ui/Skeleton";

export default function MessagerieLoading() {
  return (
    <AppShell>
      <header className="mb-6 space-y-2">
        <Skeleton height={28} width={180} />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-0 h-[calc(100dvh-7rem)] bg-[var(--color-white-soft)] rounded-[var(--radius-card-lg)] overflow-hidden border border-black/5">
        <aside className="flex flex-col border-r border-black/5">
          <div className="p-4 border-b border-black/5">
            <Skeleton height={36} />
          </div>
          <ul className="flex-1 overflow-y-auto p-2 space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i} className="flex items-center gap-3 px-2 py-3">
                <Skeleton shape="circle" width={40} height={40} />
                <div className="flex-1 space-y-1">
                  <Skeleton height={12} width="70%" />
                  <Skeleton height={10} width="50%" />
                </div>
              </li>
            ))}
          </ul>
        </aside>
        <section className="hidden md:flex flex-col">
          <header className="px-6 py-4 border-b border-black/5 flex items-center gap-3">
            <Skeleton shape="circle" width={36} height={36} />
            <div className="space-y-1">
              <Skeleton height={14} width={140} />
              <Skeleton height={10} width={90} />
            </div>
          </header>
          <div className="flex-1 px-6 py-6 space-y-3 bg-[var(--color-cream)]/40">
            <Skeleton height={50} width="60%" className="rounded-[14px]" />
            <Skeleton height={70} width="50%" className="rounded-[14px] ml-auto" />
            <Skeleton height={40} width="55%" className="rounded-[14px]" />
          </div>
        </section>
      </div>
    </AppShell>
  );
}
