"use client";

import React, { createContext, useContext, useCallback, useSyncExternalStore } from "react";

export type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "portfolio_theme";

function applyThemeToDOM(newTheme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (newTheme === "light") {
    root.classList.remove("dark");
    root.classList.add("light");
    root.style.colorScheme = "light";
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
    root.style.colorScheme = "dark";
  }
}

function getThemeSnapshot(): Theme {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {
    // Ignore storage errors
  }
  return "dark";
}

function getThemeServerSnapshot(): Theme {
  return "dark";
}

function subscribeTheme(callback: () => void) {
  const handleStorage = (e: StorageEvent) => {
    if (e.key === THEME_STORAGE_KEY) {
      callback();
    }
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener("local-theme-change", callback);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("local-theme-change", callback);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);

  const setTheme = useCallback((newTheme: Theme) => {
    applyThemeToDOM(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      window.dispatchEvent(new Event("local-theme-change"));
    } catch {
      // Ignore storage errors
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const current = getThemeSnapshot();
    const nextTheme: Theme = current === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
