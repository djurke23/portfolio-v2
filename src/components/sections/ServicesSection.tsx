"use client";

import React from "react";
import { services } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Code2,
  Palette,
  Smartphone,
  ShoppingCart,
  Search,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const { dict, language } = useLanguage();
  const isSr = language === "sr";

  const getIcon = (icon: string) => {
    switch (icon) {
      case "code":
        return <Code2 className="w-5 h-5" />;
      case "paint":
        return <Palette className="w-5 h-5" />;
      case "mobile":
        return <Smartphone className="w-5 h-5" />;
      case "cart":
        return <ShoppingCart className="w-5 h-5" />;
      case "search":
        return <Search className="w-5 h-5" />;
      case "rocket":
        return <Rocket className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5"
    >
      <SectionHeader
        number="04"
        category={dict.services.eyebrow}
        title={dict.services.title}
        description={dict.services.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {services.map((service, index) => {
          const title = isSr ? service.title.sr : service.title.en;
          const description = isSr ? service.description.sr : service.description.en;
          const features = isSr ? service.features.sr : service.features.en;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-emerald-500/30 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle accent glow on hover (desktop only) */}
              <div className="hidden sm:block absolute -top-16 -right-16 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-all">
                  {getIcon(service.icon)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <ul className="space-y-2">
                    {features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-neutral-300 font-light"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 relative z-10 mt-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-emerald-400 transition-colors group/link"
                >
                  <span>{dict.services.ctaButton}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover/link:translate-x-1 group-hover/link:text-emerald-400 transition-transform" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
