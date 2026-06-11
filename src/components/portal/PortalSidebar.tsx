"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  ClipboardList,
  MessageSquare,
  BookOpen,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { academiaFeaturePhotos } from "@/lib/academia-photos";

const navItems = [
  { href: "/portail", label: "Mon espace", icon: LayoutDashboard, exact: true },
  { href: "/portail/seances", label: "Mes séances", icon: CalendarDays },
  { href: "/portail/journal", label: "Mon journal", icon: BookOpen },
  { href: "/portail/documents", label: "Mes documents", icon: FileText },
  { href: "/portail/devoirs", label: "Mes devoirs", icon: ClipboardList },
  { href: "/portail/messagerie", label: "Messagerie", icon: MessageSquare },
];

interface PortalSidebarProps {
  clientName: string;
  clientInitials: string;
  therapistName: string;
}

export function PortalSidebar({ clientName, clientInitials, therapistName }: PortalSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className="flex flex-col w-full md:w-[240px] shrink-0 md:min-h-screen md:self-stretch border-b md:border-b-0 md:border-r border-black/5"
      style={{ backgroundColor: "var(--color-navy)", color: "white" }}
      aria-label="Navigation portail client"
    >
      <div className="px-4 md:px-6 pt-4 md:pt-6 pb-2 md:pb-4">
        <div className="font-serif text-[20px] md:text-[22px] tracking-[0.18em] font-bold">KIIKA</div>
        <div className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-[var(--color-gold)]">
          Espace personnel
        </div>
      </div>

      <nav className="flex-1 px-3 py-2 relative" aria-label="Sections">
        {/* Photo décorative academia — desktop uniquement (n'encombre pas le
            bandeau de nav mobile horizontal). */}
        <div
          className="aca-only hidden md:block pointer-events-none absolute left-0 right-0 bottom-0 h-[42%] aca-sidebar-photo"
          style={
            {
              "--aca-photo": `url(${academiaFeaturePhotos.sidebarFooter})`,
              opacity: 0.7,
              WebkitMaskImage: "linear-gradient(to top, black 30%, transparent 100%)",
              maskImage: "linear-gradient(to top, black 30%, transparent 100%)",
              borderRadius: "12px",
              zIndex: 0,
            } as React.CSSProperties
          }
          aria-hidden="true"
        />
        {/* Mobile : rangée horizontale scrollable ; desktop : liste verticale */}
        <ul
          className="flex md:flex-col gap-1 relative overflow-x-auto md:overflow-visible pb-1 md:pb-0"
          style={{ zIndex: 1 }}
        >
          {navItems.map(({ href, label, icon: Icon, exact }) => {
            const active = exact ? pathname === href : pathname.startsWith(href);
            return (
              <li key={href} className="shrink-0">
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-2 md:gap-3 rounded-[10px] px-3 py-2.5 text-[13px] whitespace-nowrap transition-colors",
                    active
                      ? "text-[var(--color-gold-light)] font-semibold"
                      : "text-white/70 hover:bg-white/5 hover:text-white",
                  )}
                  style={
                    active
                      ? {
                          backgroundColor: "rgba(200,160,48,0.14)",
                          borderLeft: "3px solid var(--color-gold)",
                          paddingLeft: "calc(0.75rem - 3px)",
                        }
                      : undefined
                  }
                >
                  <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-4 py-3 md:py-5 border-t border-white/10 flex items-center gap-3 md:block">
        <div className="flex items-center gap-3 flex-1 min-w-0 md:mb-3">
          <div
            className="inline-flex items-center justify-center w-9 h-9 rounded-full font-semibold text-[12px] shrink-0"
            style={{ backgroundColor: "var(--color-gold)", color: "var(--color-navy)" }}
          >
            {clientInitials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-semibold truncate">{clientName}</div>
            <div className="text-[10.5px] text-white/55 truncate">avec {therapistName}</div>
          </div>
        </div>
        <form action="/portail/login/signout" method="post" className="shrink-0 md:w-full">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-1.5 rounded-[8px] border border-white/15 px-3 py-2 text-[12px] text-white/70 hover:bg-white/5 hover:text-white md:w-full"
            aria-label="Se déconnecter"
          >
            <LogOut size={12} strokeWidth={1.8} />
            <span className="hidden md:inline">Se déconnecter</span>
          </button>
        </form>
      </div>
    </aside>
  );
}
