"use client";

import React from "react";
import { bentoGearItems } from "@/data/gear";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Laptop,
  Cpu,
  Smartphone,
  Monitor,
  Layers,
  Camera,
  Video,
  Mic,
  Headphones,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function GearSection() {
  const { dict, language } = useLanguage();
  const isSr = language === "sr";

  const getGearIcon = (iconType: string) => {
    switch (iconType) {
      case "laptop":
        return <Laptop className="w-5 h-5" />;
      case "desktop":
        return <Cpu className="w-5 h-5" />;
      case "phone":
        return <Smartphone className="w-5 h-5" />;
      case "display":
        return <Monitor className="w-5 h-5" />;
      case "gpu":
        return <Layers className="w-5 h-5" />;
      case "camera":
        return <Camera className="w-5 h-5" />;
      case "action":
        return <Video className="w-5 h-5" />;
      case "mic":
        return <Mic className="w-5 h-5" />;
      case "dj":
        return <Headphones className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="gear"
      className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5"
    >
      <SectionHeader
        number="09"
        category={dict.gear.eyebrow}
        title={dict.gear.title}
        description={dict.gear.description}
      />

      {/* Bento Grid — Equal baselines & modular spans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 pt-4">
        {bentoGearItems.map((item, index) => {
          const category = isSr ? item.categoryLabel.sr : item.categoryLabel.en;
          const specs = isSr ? item.specs.sr : item.specs.en;
          const badge = isSr ? item.badge.sr : item.badge.en;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`${item.colSpan} glass-card p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[220px] relative overflow-hidden group`}
            >
              {/* Subtle hover glow accent (desktop only) */}
              <div className="hidden sm:block absolute -top-16 -right-16 w-36 h-36 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/25 transition-all" />

              {/* Top Bar: Icon + Category Badge */}
              <div className="flex items-start justify-between gap-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                  {getGearIcon(item.iconType)}
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 shrink-0">
                  {badge}
                </span>
              </div>

              {/* Bottom Body: Title + Specs */}
              <div className="space-y-1.5 pt-6 relative z-10 mt-auto">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium">
                  {category}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {specs}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
