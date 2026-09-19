"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronDown, MessageSquare, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const { dict } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5"
    >
      <SectionHeader
        number="08"
        category={dict.faq.eyebrow}
        title={dict.faq.title}
        description={dict.faq.description}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Accordion Questions List */}
        <div className="lg:col-span-8 space-y-4">
          {dict.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const itemNumber = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-emerald-500/30 bg-neutral-900/90 shadow-xl shadow-black/40"
                    : "border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <div className="flex items-baseline gap-3 sm:gap-4">
                    <span className="font-mono text-xs text-emerald-400/80 font-bold shrink-0 mt-0.5">
                      [{itemNumber}]
                    </span>
                    <h3
                      className={`text-base sm:text-lg font-semibold tracking-tight transition-colors ${
                        isOpen ? "text-white" : "text-neutral-200 hover:text-white"
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`shrink-0 p-2 rounded-full bg-white/5 text-neutral-400 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                        : "hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-white/5">
                        <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed pl-7 sm:pl-9">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Side Prompt / Still Have Questions Card */}
        <div className="lg:col-span-4 sticky top-28">
          <div className="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 space-y-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
              <MessageSquare className="w-5 h-5" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-white tracking-tight">
                {dict.faq.promptTitle}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                {dict.faq.promptDesc}
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-white text-neutral-950 text-sm font-semibold hover:bg-neutral-200 transition-all shadow-lg active:scale-95 group/btn"
              data-cursor="TALK"
            >
              <span>{dict.faq.promptButton}</span>
              <ArrowRight className="w-4 h-4 text-neutral-800 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
