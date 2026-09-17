"use client";

import React, { useState } from "react";
import { experiences } from "@/data/experience";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronDown, Briefcase, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>("freelance");

  const toggleExpand = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <SectionHeader
        number="06"
        category="Career Path"
        title="Work Experience & Roles"
        description="A timeline of engineering responsibilities, full-stack projects, and high-stakes live broadcast systems."
      />

      <div className="space-y-4">
        {experiences.map((exp) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div
              key={exp.id}
              className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? "border-emerald-500/30 bg-neutral-900/70 shadow-lg shadow-black/40"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {/* Header Row (Clickable) */}
              <button
                type="button"
                onClick={() => toggleExpand(exp.id)}
                className="w-full text-left p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                aria-expanded={isExpanded}
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-bold text-emerald-400">
                      {exp.period}
                    </span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-base text-neutral-400 font-medium">
                      @ {exp.company}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 pt-2 md:pt-0">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>

                  <div
                    className={`p-2 rounded-full bg-white/5 text-neutral-400 transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-white bg-white/10" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Collapsible Content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-2 space-y-6 border-t border-white/5">
                      <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities list */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                          Key Deliverables & Responsibilities
                        </h4>
                        <ul className="space-y-2 text-sm text-neutral-400">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                              <span className="leading-relaxed font-light">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Used */}
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-neutral-300 border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
