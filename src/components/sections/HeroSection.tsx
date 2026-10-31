"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/context/ToastContext";
import { useSound } from "@/context/SoundContext";
import MagneticButton from "@/components/ui/MagneticButton";
import CodeWindow from "@/components/ui/CodeWindow";
import { ArrowDown, ArrowUpRight, MapPin, FileText, Copy, Check } from "lucide-react";
import { trackEmailCopy, trackCvDownload } from "@/lib/analytics";

export default function HeroSection() {
  const { dict, language } = useLanguage();
  const { copyEmail } = useToast();
  const { playSuccess } = useSound();
  const [copied, setCopied] = useState(false);
  const isSr = language === "sr";

  const handleCopyEmail = () => {
    playSuccess();
    trackEmailCopy("hero");
    copyEmail(
      siteConfig.email,
      isSr ? "Email kopiran u clipboard!" : "Email copied to clipboard!"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* 2-Column Responsive Layout: Text Left + CodeWindow Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
        {/* Left Column: Content */}
        <div className="lg:col-span-7 xl:col-span-7 space-y-8 max-w-2xl">
          {/* Top Status & Positioning */}
          <div className="flex flex-wrap items-center gap-3 hero-animate">
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
          </div>

          {/* Hero Title */}
          <div className="space-y-2">
            <div className="hero-animate hero-delay-1">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-500 font-medium">
                {dict.hero.eyebrow}
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white uppercase font-mono mt-1">
                {siteConfig.name}
              </h1>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-300 tracking-tight hero-animate hero-delay-2">
              {dict.hero.role}
            </p>
          </div>

          {/* Narrative Description */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-light hero-animate hero-delay-3">
            {dict.hero.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 hero-animate hero-delay-4">
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
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-white/[0.04] hover:bg-emerald-500/10 text-neutral-300 hover:text-emerald-300 text-sm font-mono border border-white/10 hover:border-emerald-500/30 transition-all active:scale-95 group cursor-pointer"
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
              download="Luka_Djuric_CV.pdf"
              onClick={() => trackCvDownload("hero")}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-neutral-400 hover:text-white text-sm font-mono transition-colors group"
              data-cursor="CV"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>{dict.hero.downloadCv}</span>
              <span className="text-xs text-neutral-500 font-normal">(PDF)</span>
            </a>
          </div>
        </div>

        {/* Right Column (Desktop) / Below CTAs (Mobile): Interactive Code Window */}
        <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end w-full hero-animate hero-delay-3">
          <CodeWindow />
        </div>
      </div>

      {/* Floating Subtleties */}
      <div className="mt-14 sm:mt-20 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-neutral-500 hero-animate hero-delay-5">
        <div className="flex items-center">
          <span>{dict.hero.footerTech}</span>
        </div>
        <div>
          <span>{dict.hero.footerProcess}</span>
        </div>
      </div>
    </section>
  );
}
