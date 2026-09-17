"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowDown, ArrowUpRight, MapPin, FileText } from "lucide-react";

export default function HeroSection() {
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
            <span>{siteConfig.availability}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-neutral-500" />
            <span>Based in {siteConfig.location}</span>
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
              Digital Product Engineering
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
            Full-Stack Developer & Product Craftsman
          </motion.p>
        </div>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-light"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 pt-4"
        >
          <MagneticButton strength={0.3}>
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-all shadow-lg shadow-white/10 active:scale-95"
              data-cursor="WORK"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-4 h-4 text-neutral-800 animate-bounce" />
            </a>
          </MagneticButton>

          <MagneticButton strength={0.25}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/15 transition-all active:scale-95"
              data-cursor="TALK"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </a>
          </MagneticButton>

          <a
            href={siteConfig.cvPath}
            download
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-neutral-400 hover:text-white text-sm font-mono transition-colors group"
            data-cursor="CV"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Download CV</span>
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
          <span>Next.js • TypeScript • React Native • Go • PostgreSQL</span>
        </div>
        <div>
          <span>Idea → Architecture → Code → Production</span>
        </div>
      </motion.div>
    </section>
  );
}
