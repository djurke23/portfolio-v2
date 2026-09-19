"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

export default function LanguageSwitcher({
  className = "",
  variant = "desktop",
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === "mobile") {
    return (
      <div
        className={`flex items-center justify-between p-2 rounded-2xl bg-white/[0.04] border border-white/10 ${className}`}
        role="group"
        aria-label="Select Language"
      >
        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 pl-2">
          Language / Jezik
        </span>
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
            className={`relative px-3 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all ${
              language === "en"
                ? "text-white bg-white/15 border border-white/20 shadow-sm"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage("sr")}
            aria-pressed={language === "sr"}
            className={`relative px-3 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all ${
              language === "sr"
                ? "text-white bg-white/15 border border-white/20 shadow-sm"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            SR
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center p-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md ${className}`}
      role="group"
      aria-label="Language Switcher"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        data-cursor="EN"
        className={`relative px-2.5 py-1 text-[11px] font-mono font-medium rounded-full transition-colors z-10 ${
          language === "en" ? "text-white" : "text-neutral-400 hover:text-white"
        }`}
      >
        {language === "en" && (
          <motion.span
            layoutId="activeLangIndicator"
            transition={{ type: "spring", stiffness: 450, damping: 32 }}
            className="absolute inset-0 rounded-full bg-white/15 border border-white/20 shadow-sm -z-10"
          />
        )}
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("sr")}
        aria-pressed={language === "sr"}
        data-cursor="SR"
        className={`relative px-2.5 py-1 text-[11px] font-mono font-medium rounded-full transition-colors z-10 ${
          language === "sr" ? "text-white" : "text-neutral-400 hover:text-white"
        }`}
      >
        {language === "sr" && (
          <motion.span
            layoutId="activeLangIndicator"
            transition={{ type: "spring", stiffness: 450, damping: 32 }}
            className="absolute inset-0 rounded-full bg-white/15 border border-white/20 shadow-sm -z-10"
          />
        )}
        SR
      </button>
    </div>
  );
}
