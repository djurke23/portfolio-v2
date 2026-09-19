"use client";

import React, { createContext, useContext, useSyncExternalStore, useCallback } from "react";
import { Language, TranslationSchema, translations } from "@/i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: TranslationSchema;
  t: <T = string>(selector: (dict: TranslationSchema) => T) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio_language";

function getSnapshot(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === "en" || saved === "sr") {
      return saved;
    }
  } catch {
    // localStorage may be inaccessible
  }
  return "en";
}

function getServerSnapshot(): Language {
  return "en";
}

function subscribe(callback: () => void) {
  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      callback();
    }
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener("local-language-change", callback);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("local-language-change", callback);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = useCallback((lang: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
      window.dispatchEvent(new Event("local-language-change"));
    } catch {
      // Storage unavailable
    }
  }, []);

  const dict = translations[language];

  const t = useCallback(
    <T = string>(selector: (d: TranslationSchema) => T): T => {
      return selector(dict);
    },
    [dict]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
