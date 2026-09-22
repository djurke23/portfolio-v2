"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/context/ToastContext";
import { useSound } from "@/context/SoundContext";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowDown, ArrowUpRight, MapPin, FileText, Copy, Check } from "lucide-react";

export default function HeroSection() {
  const { dict, language } = useLanguage();
  const { copyEmail } = useToast();
  const { playSuccess, playClick } = useSound();
  const [copied, setCopied] = useState(false);
  const isSr = language === "sr";

  const handleCopyEmail = () => {
    playSuccess();
    copyEmail(
      siteConfig.email,
      isSr ? "Email kopiran u clipboard!" : "Email copied to clipboard!"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="space-y-8 max-w-4xl">
        {/* Top Status & Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{dict.hero.availability}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-neutral-500" />
            <span>{dict.hero.location}</span>
          </div>
        </motion.div>

        {/* Hero Title */}
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-500 font-medium">
              {dict.hero.eyebrow}
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white uppercase font-mono mt-1">
              {siteConfig.name}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-300 tracking-tight"
          >
            {dict.hero.role}
          </motion.p>
        </div>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-light"
        >
          {dict.hero.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4"
        >
          <MagneticButton strength={0.3}>
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-all shadow-lg shadow-white/10 active:scale-95"
              data-cursor="WORK"
            >
              <span>{dict.hero.exploreWork}</span>
              <ArrowDown className="w-4 h-4 text-neutral-800 animate-bounce" />
            </a>
          </MagneticButton>

          <MagneticButton strength={0.25}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/15 transition-all active:scale-95"
              data-cursor="TALK"
            >
              <span>{dict.hero.getInTouch}</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </a>
          </MagneticButton>

          {/* Quick Copy Email Button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-white/[0.04] hover:bg-emerald-500/10 text-neutral-300 hover:text-emerald-300 text-sm font-mono border border-white/10 hover:border-emerald-500/30 transition-all active:scale-95 group"
            data-cursor="COPY"
            title={isSr ? "Kopiraj email" : "Copy email address"}
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <Copy className="w-4 h-4 text-neutral-400 group-hover:text-emerald-400 transition-colors shrink-0" />
            )}
            <span className="hidden sm:inline">
              {copied
                ? isSr
                  ? "Kopirano!"
                  : "Copied!"
                : siteConfig.email}
            </span>
            <span className="sm:hidden">
              {copied ? (isSr ? "Kopirano!" : "Copied!") : (isSr ? "Email" : "Email")}
            </span>
          </button>

          <a
            href={siteConfig.cvPath}
            download
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-neutral-400 hover:text-white text-sm font-mono transition-colors group"
            data-cursor="CV"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>{dict.hero.downloadCv}</span>
            <span className="text-xs text-neutral-500 font-normal">(PDF)</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Subtleties */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-16 sm:mt-24 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-neutral-500"
      >
        <div className="flex items-center">
          <span>{dict.hero.footerTech}</span>
        </div>
        <div>
          <span>{dict.hero.footerProcess}</span>
        </div>
      </motion.div>
    </section>
  );
}
