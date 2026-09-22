"use client";

import React, { useEffect, useState, useRef } from "react";
import { impactStats } from "@/data/stats";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useInView, animate } from "framer-motion";
import { TrendingUp } from "lucide-react";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div className="flex items-baseline gap-0.5">
      <span
        ref={ref}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-white tracking-tight tabular-nums"
      >
        {displayValue}
      </span>
      <span className="text-xl sm:text-2xl font-mono text-emerald-400 font-bold">
        {suffix}
      </span>
    </div>
  );
}

export default function StatsBanner() {
  const { dict, language } = useLanguage();
  const isSr = language === "sr";

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      {/* Top subtle banner label */}
      <div className="flex items-center justify-between pb-6 border-b border-white/5">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>{dict.stats.eyebrow}</span>
        </div>
        <p className="text-xs text-neutral-500 font-mono hidden sm:block">
          {dict.stats.subtext}
        </p>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6">
        {impactStats.map((stat, index) => {
          const label = isSr ? stat.label.sr : stat.label.en;
          const sublabel = isSr ? stat.sublabel.sr : stat.sublabel.en;

          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-5 sm:p-7 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />

              <div className="space-y-2 relative z-10">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />

                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-semibold text-neutral-200 tracking-tight">
                    {label}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-500 font-light leading-snug">
                    {sublabel}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
