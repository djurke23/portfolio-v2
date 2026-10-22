"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useSound } from "@/context/SoundContext";

export default function BackToTop() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const { playClick } = useSound();
  const isSr = language === "sr";

  useEffect(() => {
    const handleScroll = () => {
      const top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        window.scrollY ||
        (window.__lenis ? window.__lenis.scroll : 0) ||
        0;
      setIsScrolled(top > 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    let lenisTimer: NodeJS.Timeout;
    if (window.__lenis) {
      window.__lenis.on("scroll", handleScroll);
    } else {
      lenisTimer = setInterval(() => {
        if (window.__lenis) {
          window.__lenis.on("scroll", handleScroll);
          clearInterval(lenisTimer);
        }
      }, 200);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (window.__lenis) {
        window.__lenis.off("scroll", handleScroll);
      }
      if (lenisTimer) clearInterval(lenisTimer);
    };
  }, []);

  const scrollToTop = () => {
    playClick();
    if (typeof window !== "undefined") {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={isSr ? "Povratak na vrh stranice" : "Scroll to top of page"}
      title={isSr ? "Povratak na vrh stranice" : "Back to top"}
      data-cursor="TOP"
      className={`group fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[9999] flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full border cursor-pointer select-none font-mono text-xs transition-all duration-300 pointer-events-auto ${
        isScrolled
          ? "bg-[#0c0d12]/95 border-emerald-400 text-white shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_24px_rgba(16,185,129,0.35)] scale-105 hover:scale-110 active:scale-95"
          : "bg-[#0c0d12]/90 border-emerald-500/40 text-neutral-200 hover:text-white hover:border-emerald-400 hover:bg-[#12131a] shadow-[0_8px_24px_rgba(0,0,0,0.7),0_0_15px_rgba(16,185,129,0.15)] active:scale-95"
      }`}
    >
      <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-colors">
        <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
      </div>
      <span className="font-semibold tracking-wider uppercase text-[11px] sm:text-xs">
        {isSr ? "Na vrh" : "Top"}
      </span>
      {isScrolled && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      )}
    </button>
  );
}
