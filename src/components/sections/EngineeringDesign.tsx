"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { Terminal, Layers, PlaySquare, Compass } from "lucide-react";

export default function EngineeringDesign() {
  const { dict } = useLanguage();

  const pillarMeta: Record<string, { icon: typeof Terminal; accent: string }> = {
    code: { icon: Terminal, accent: "from-emerald-500/20 to-transparent" },
    design: { icon: Layers, accent: "from-blue-500/20 to-transparent" },
    motion: { icon: PlaySquare, accent: "from-purple-500/20 to-transparent" },
    product: { icon: Compass, accent: "from-cyan-500/20 to-transparent" },
  };

  return (
    <section id="discipline" className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <SectionHeader
        number="05"
        category={dict.discipline.eyebrow}
        title={dict.discipline.title}
        description={dict.discipline.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dict.discipline.pillars.map((pillar) => {
          const meta = pillarMeta[pillar.id] || { icon: Terminal, accent: "from-emerald-500/20 to-transparent" };
          const Icon = meta.icon;
          return (
            <div
              key={pillar.id}
              className="relative glass-card p-8 rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-white/20"
            >
              {/* Subtle Ambient Gradient Corner */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${meta.accent} blur-2xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity`}
              />

              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-emerald-400 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                    {pillar.eyebrow}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-extrabold tracking-tight text-white font-mono">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="pt-8 relative z-10">
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-neutral-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
