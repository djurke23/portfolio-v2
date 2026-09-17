"use client";

import React, { useState } from "react";
import Image from "next/image";
import { technologyCategories } from "@/data/technologies";
import SectionHeader from "@/components/ui/SectionHeader";
import { Code } from "lucide-react";

export default function TechStackSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="stack" className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <SectionHeader
        number="05"
        category="Technology Matrix"
        title="Tools & Technologies"
        description="Curated tools and frameworks honed across production web applications, iOS releases, and agile engineering squads. No arbitrary percentage bars."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologyCategories.map((category, catIndex) => (
          <div
            key={catIndex}
            className="glass-card p-6 rounded-2xl border border-white/10 space-y-6 flex flex-col justify-between hover:border-white/20 transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {category.title}
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 font-medium">
                  {category.skills.length} tools
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {category.skills.map((skill) => {
                const isHovered = hoveredSkill === skill.name;

                return (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-default ${
                      skill.highlighted
                        ? "bg-white/[0.07] text-white border border-white/15"
                        : "bg-white/[0.03] text-neutral-400 border border-white/5"
                    } ${
                      isHovered
                        ? "border-emerald-500/50 text-emerald-300 bg-emerald-500/10 scale-105"
                        : "hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {skill.icon ? (
                      <div className="relative w-3.5 h-3.5 flex-shrink-0">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={14}
                          height={14}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <Code className="w-3 h-3 text-neutral-500" />
                    )}
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
