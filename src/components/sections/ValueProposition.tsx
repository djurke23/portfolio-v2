"use client";

import React from "react";
import TextReveal from "@/components/ui/TextReveal";
import { Code2, Smartphone, Palette, Zap } from "lucide-react";

export default function ValueProposition() {
  const manifesto =
    "I believe great digital products require more than clean code. They demand an understanding of user psychology, disciplined software architecture, and tactile motion design. From database schema to the final keyframe — I build complete experiences that feel purposeful and built to last.";

  const capabilities = [
    {
      icon: Code2,
      title: "Full-Stack Engineering",
      desc: "Robust TypeScript, Go microservices, relational databases, and edge caching.",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      desc: "Cross-platform mobile apps with native bridges and App Store release pipelines.",
    },
    {
      icon: Palette,
      title: "UI/UX & Design Systems",
      desc: "Pixel-accurate Figma design systems, accessibility tokens, and editorial aesthetics.",
    },
    {
      icon: Zap,
      title: "Motion & Performance",
      desc: "Hardware-accelerated fluid transitions, 60 FPS interactions, and sub-second load times.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="space-y-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
          <span className="text-neutral-500 font-normal">[01]</span>
          <span>Core Philosophy</span>
        </div>

        {/* Scroll Reveal Manifesto */}
        <div className="max-w-5xl">
          <TextReveal text={manifesto} />
        </div>

        {/* Capability Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl space-y-3 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
