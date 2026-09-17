"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Terminal, Layers, PlaySquare, Compass } from "lucide-react";

export default function EngineeringDesign() {
  const pillars = [
    {
      id: "code",
      title: "CODE",
      eyebrow: "Engineering Discipline",
      icon: Terminal,
      description:
        "Architecting resilient systems using TypeScript, Go, Next.js, and PostgreSQL. Focused on clean separation of concerns, edge database caching, and type safety from database to UI.",
      tags: ["Full-Stack Architecture", "Type-Safe APIs", "Edge Infrastructure", "Mobile Engines"],
      accent: "from-emerald-500/20 to-transparent",
    },
    {
      id: "design",
      title: "DESIGN",
      eyebrow: "UI/UX & Systems",
      icon: Layers,
      description:
        "Building cohesive design systems in Figma with meticulous spacing, strict token hierarchies, and ergonomic layout systems. Crafting interfaces that look expensive and feel effortless.",
      tags: ["Figma Design Systems", "Responsive Layouts", "Ergonomic UI", "Editorial Typography"],
      accent: "from-blue-500/20 to-transparent",
    },
    {
      id: "motion",
      title: "MOTION",
      eyebrow: "Broadcast & Kinetics",
      icon: PlaySquare,
      description:
        "Leveraging years of live broadcast video mixing, post-production in Premiere & After Effects, and CSS/Framer physics. Motion applied with restraint to clarify context rather than distract.",
      tags: ["Hardware Compositing", "Micro-Interactions", "Video Post-Production", "Fluid Transitions"],
      accent: "from-purple-500/20 to-transparent",
    },
    {
      id: "product",
      title: "PRODUCT",
      eyebrow: "Full Lifecycle Delivery",
      icon: Compass,
      description:
        "Navigating products from blank canvas to App Store validation and Vercel edge releases. Balancing engineering rigor with real-world usability and client business goals.",
      tags: ["End-to-End Delivery", "App Store Pipelines", "In-App Subscriptions", "SEO & Optimization"],
      accent: "from-cyan-500/20 to-transparent",
    },
  ];

  return (
    <section id="discipline" className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <SectionHeader
        number="04"
        category="Differentiator"
        title="Engineering + Design + Motion"
        description="A rare convergence of rigorous full-stack development, professional UI/UX design, and broadcast video production. I don't just write code — I build complete digital products."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              className="relative glass-card p-8 rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-white/20"
            >
              {/* Subtle Ambient Gradient Corner */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${pillar.accent} blur-2xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity`}
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
