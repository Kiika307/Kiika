"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  ClipboardList,
  MessageSquare,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { academiaFeaturePhotos } from "@/lib/academia-photos";

const navItems = [
  { href: "/portail", label: "Mon espace", icon: LayoutDashboard, exact: true },
  { href: "/portail/seances", label: "Mes séances", icon: CalendarDays },
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
      <div className="px-6 pt-6 pb-4">
        <div className="font-serif text-[22px] tracking-[0.18em] font-bold">KIIKA</div>
        <div className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-[var(--color-gold)]">
          Espace personnel
        </div>
      </div>

      <nav className="flex-1 px-3 py-2 relative" aria-label="Sections">
        {/* Photo décorative academia (cohérence avec le portail thérapeute) */}
        <div
          className="aca-only pointer-events-none absolute left-0 right-0 bottom-0 h-[42%] aca-sidebar-photo"
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
        <ul className="space-y-1 relative" style={{ zIndex: 1 }}>
          {navItems.map(({ href, label, icon: Icon, exact }) => {
            const active = exact ? pathname === href : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-[13px] transition-colors",
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

      <div className="px-4 py-5 border-t border-white/10">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="inline-flex items-center justify-center w-9 h-9 rounded-full font-semibold text-[12px]"
            style={{ backgroundColor: "var(--color-gold)", color: "var(--color-navy)" }}
          >
            {clientInitials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-semibold truncate">{clientName}</div>
            <div className="text-[10.5px] text-white/55 truncate">avec {therapistName}</div>
          </div>
        </div>
        <form action="/portail/login/signout" method="post">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-1.5 rounded-[8px] border border-white/15 px-3 py-2 text-[12px] text-white/70 hover:bg-white/5 hover:text-white"
          >
            <LogOut size={12} strokeWidth={1.8} />
            Se déconnecter
          </button>
        </form>
      </div>
    </aside>
  );
}
