"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Avatar } from "@/components/ui/Avatar";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/cn";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Sparkles,
  MessageSquare,
  Video,
  LogOut,
  Menu,
  X,
  Brain,
} from "lucide-react";
import { signOutAction } from "@/app/login/actions";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/agenda", label: "Agenda", icon: CalendarDays },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/protocoles", label: "Protocoles", icon: Sparkles },
  { href: "/kiika", label: "KIIKA", icon: Brain },
  { href: "/messagerie", label: "Messagerie", icon: MessageSquare },
  { href: "/visio", label: "Visio", icon: Video },
];

interface SidebarProps {
  therapistName: string;
  therapistInitials: string;
  therapistRole: string;
}

export function Sidebar({ therapistName, therapistInitials, therapistRole }: SidebarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Ferme le drawer à chaque changement de route
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloque le scroll body quand le drawer est ouvert
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC ferme le drawer
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Topbar mobile (md:hidden) */}
      <div
        className="md:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3 border-b border-black/5"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex items-center justify-center w-11 h-11 rounded-[10px] hover:bg-white/40 text-[var(--color-navy)]"
        >
          <Menu size={22} aria-hidden="true" />
        </button>
        <div className="scale-90 origin-center">
          <Logo />
        </div>
        <Avatar initials={therapistInitials} color="#C8A030" size={36} />
      </div>

      {/* Backdrop mobile */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/55 transition-opacity"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar — md+ statique, mobile drawer */}
      <aside
        id="mobile-nav"
        className={cn(
          "flex flex-col w-[260px] md:w-[222px] shrink-0 h-screen md:sticky md:top-0",
          "fixed md:static top-0 left-0 z-50 transition-transform md:transition-none",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
        style={{ backgroundColor: "var(--color-navy)" }}
        aria-label="Navigation principale"
      >
        <div className="px-6 pt-6 pb-8 flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-[8px] text-white/55 hover:bg-white/10 hover:text-white"
            aria-label="Fermer le menu"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 px-3" aria-label="Sections de l'application">
          <ul className="space-y-1">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative flex items-center gap-3 rounded-[10px] px-3 py-3 md:py-2.5 text-[14px] md:text-[13px] transition-colors min-h-11 md:min-h-0",
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

        <div className="px-4 py-5 border-t border-white/10 flex items-center gap-3">
          <Avatar initials={therapistInitials} color="#C8A030" size={36} />
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-semibold text-white truncate">{therapistName}</div>
            <div className="text-[11px] text-white/55 truncate">{therapistRole}</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="text-white">
              <ThemeToggle />
            </div>
            <form action={signOutAction}>
              <button
                type="submit"
                title="Se déconnecter"
                aria-label="Se déconnecter"
                className="rounded-[8px] p-2 text-white/55 transition-colors hover:bg-white/10 hover:text-white min-w-9 min-h-9 inline-flex items-center justify-center"
              >
                <LogOut size={15} strokeWidth={1.8} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </aside>
    </>
  );
}
