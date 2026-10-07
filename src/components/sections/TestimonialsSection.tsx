"use client";

import React from "react";
import { testimonials } from "@/data/testimonials";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const { dict, language } = useLanguage();
  const isSr = language === "sr";

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5"
    >
      <SectionHeader
        number="10"
        category={dict.testimonials.eyebrow}
        title={dict.testimonials.title}
        description={dict.testimonials.description}
      />

      {/* Trust metric banner */}
      <div className="mb-10 p-5 rounded-2xl glass-card border border-emerald-500/20 bg-emerald-500/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-emerald-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
            ))}
          </div>
          <span className="font-mono text-sm font-bold text-white">
            5.0 / 5.0 Rating
          </span>
        </div>

        <p className="text-xs text-neutral-400 font-mono text-center sm:text-right">
          {dict.testimonials.satisfactionNote}
        </p>
      </div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => {
          const role = isSr ? item.role.sr : item.role.en;
          const projectTag = isSr ? item.projectTag.sr : item.projectTag.en;
          const quote = isSr ? item.quote.sr : item.quote.en;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-emerald-500/30 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle card glow (desktop only) */}
              <div className="hidden sm:block absolute -top-16 -right-16 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />

              <div className="space-y-4 relative z-10">
                {/* Header: Project Badge & Quote Icon */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300">
                    {projectTag}
                  </span>
                  <Quote className="w-4 h-4 text-emerald-400/60" />
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 text-emerald-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-neutral-300 font-light leading-relaxed italic">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  {item.initials}
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm font-semibold text-white truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neutral-500 font-light truncate">
                    {role}
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
