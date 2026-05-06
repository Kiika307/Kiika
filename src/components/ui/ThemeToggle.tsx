"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, BookOpen } from "lucide-react";

type Theme = "light" | "dark" | "academia";

const STORAGE_KEY = "intio-theme";
const ORDER: Theme[] = ["light", "dark", "academia"];
const LABEL: Record<Theme, string> = {
  light: "clair",
  dark: "sombre",
  academia: "academia",
};

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark" || value === "academia";
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isTheme(stored)) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);

  const cycle = () =>
    setTheme((t) => ORDER[(ORDER.indexOf(t) + 1) % ORDER.length] as Theme);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Basculer le thème"
        className="inline-flex items-center justify-center rounded-[10px] min-h-9 min-w-9 text-[var(--color-gray-soft)]"
      >
        <Sun size={16} aria-hidden="true" />
      </button>
    );
  }

  const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length] as Theme;

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Thème actuel : ${LABEL[theme]}. Basculer vers ${LABEL[next]}.`}
      title={`Thème : ${LABEL[theme]} → ${LABEL[next]}`}
      className="inline-flex items-center justify-center rounded-[10px] min-h-9 min-w-9 text-[var(--color-gray-soft)] hover:bg-[var(--color-light-gray)] hover:text-[var(--color-navy)] transition-colors press-feedback"
    >
      {theme === "light" && <Moon size={16} aria-hidden="true" />}
      {theme === "dark" && <BookOpen size={16} aria-hidden="true" />}
      {theme === "academia" && <Sun size={16} aria-hidden="true" />}
    </button>
  );
}
