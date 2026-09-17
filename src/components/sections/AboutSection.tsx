"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { educationList } from "@/data/education";
import SectionHeader from "@/components/ui/SectionHeader";
import { GraduationCap, MapPin, Mail, ArrowUpRight, FileText, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <SectionHeader
        number="07"
        category="Background"
        title="Engineering Foundations & Education"
        description="A look at the academic and practical background shaping my approach to full-stack engineering."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Profile Card & Bio Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="relative group aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl">
            <Image
              src="/assets/images/me.jpg"
              alt="Luka Đurić"
              fill
              className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-white/10 space-y-1">
              <div className="text-sm font-bold text-white font-mono uppercase">
                {siteConfig.name}
              </div>
              <div className="text-xs text-neutral-400 flex items-center justify-between">
                <span>{siteConfig.role}</span>
                <span className="text-emerald-400 font-mono">Belgrade, RS</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            <p>
              I am a Full-Stack Developer with over 6 years of practical experience creating modern, high-performance web applications and digital products.
            </p>
            <p>
              My journey bridges rigorous software engineering with years in live broadcast media production. This unique combination gives me high standards for zero-downtime reliability, real-time performance, and visual polish.
            </p>
          </div>

          <div className="pt-2">
            <a
              href={siteConfig.cvPath}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 text-sm font-medium transition-all group"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Download Official CV (PDF)</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Education Timeline Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>Verified Academic Record</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Higher Education & Qualifications
            </h3>
          </div>

          <div className="space-y-6">
            {educationList.map((edu) => (
              <div
                key={edu.id}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 space-y-4 hover:border-white/20 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/5 pb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-neutral-400">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold self-start sm:self-auto">
                    {edu.period}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{edu.status}</span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-1.5 flex-shrink-0" />
                      <span className="font-light leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
