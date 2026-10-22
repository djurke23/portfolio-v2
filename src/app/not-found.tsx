"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useSound } from "@/context/SoundContext";
import { Search, Home, ArrowUpRight, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  const { language } = useLanguage();
  const { playClick } = useSound();
  const isSr = language === "sr";

  const handleOpenSearch = () => {
    playClick();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-command-palette"));
    }
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-32 pb-20 text-center">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-xl mx-auto space-y-6"
      >
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
          <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
          <span>[404] • {isSr ? "Stranica nije pronađena" : "Lost in the Architecture"}</span>
        </div>

        {/* Huge glitch-aesthetic 404 */}
        <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tighter text-white font-mono select-none">
          4<span className="text-emerald-400">0</span>4
        </h1>

        {/* Message */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {isSr ? "Tražena stranica ne postoji ili je premeštena." : "The requested route does not exist."}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
            {isSr
              ? "URL koji ste uneli ne vodi ni do jednog resursa. Možete se vratiti na početnu ili pretražiti projekte pomoću brze pretrage."
              : "The resource you are looking for has been moved or was not deployed. Return to the home feed or search via the command palette."}
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            onClick={() => playClick()}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-neutral-950 font-semibold text-xs font-mono hover:bg-neutral-200 transition-all shadow-lg active:scale-95"
          >
            <Home className="w-4 h-4 text-emerald-600" />
            <span>{isSr ? "Povratak na početnu" : "Back to Home"}</span>
          </Link>

          <button
            type="button"
            onClick={handleOpenSearch}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-xs font-mono border border-white/10 transition-all active:scale-95"
          >
            <Search className="w-4 h-4 text-emerald-400" />
            <span>{isSr ? "Pretraga (⌘K)" : "Search (⌘K)"}</span>
          </button>
        </div>

        {/* Helpful quick links to flagship projects */}
        <div className="pt-8 border-t border-white/5 text-left">
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block text-center mb-3">
            {isSr ? "Ili istražite najnovije studije slučaja:" : "Or explore flagship case studies:"}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { id: "carflo", name: "CarFlo", tag: isSr ? "iOS Aplikacija" : "iOS App" },
              { id: "fluffyflowers", name: "FluffyFlowers", tag: "E-Commerce" },
              { id: "rev-and-chill", name: "Rev&Chill", tag: "Cloudflare Web" },
            ].map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                onClick={() => playClick()}
                className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-emerald-500/30 transition-all group flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {p.name}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500">{p.tag}</div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-emerald-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
