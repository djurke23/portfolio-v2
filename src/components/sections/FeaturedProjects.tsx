"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowUpRight, ArrowRight, Smartphone, ExternalLink, Layers } from "lucide-react";

const srProjectTexts: Record<string, { tagline: string; description: string; categoryLabel: string }> = {
  carflo: {
    tagline: "Vrhunski digitalni dnevnik troškova i održavanja vozila za iOS.",
    description: "Kompletna mobilna platforma za praćenje troškova i servisa vozila dostupna na Apple App Store-u sa offline sinhronizacijom.",
    categoryLabel: "Mobilna & Cloud Platforma",
  },
  fluffyflowers: {
    tagline: "Premijum e-commerce cvećara i radionica sa real-time porudžbinama.",
    description: "Digitalna prodavnica i katalog cvetnih aranžmana sa integrisanim sistemom naručivanja i responzivnim dizajnom.",
    categoryLabel: "E-Commerce & Brand Platforma",
  },
  "rev-and-chill": {
    tagline: "Zajednica entuzijasta automobilske kulture i digitalni medij.",
    description: "Interaktivna web platforma za ljubitelje automobilske kulture, manifestacije i multimedijalni sadržaj.",
    categoryLabel: "Web Platforma & Zajednica",
  },
};

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();
  const { dict, language } = useLanguage();
  const isSr = language === "sr";

  return (
    <section id="work" className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <SectionHeader
        number="02"
        category={dict.featured.eyebrow}
        title={dict.featured.title}
        description={dict.featured.description}
      />

      <div className="space-y-24 sm:space-y-36">
        {featured.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <article
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
              data-cursor="VIEW"
            >
              {/* Content Column */}
              <div
                className={`space-y-6 ${
                  isEven ? "lg:col-span-5 lg:order-2" : "lg:col-span-5 lg:order-1"
                }`}
              >
                {/* Meta Header */}
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-emerald-400 font-bold">
                    0{index + 1}
                  </span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-400 uppercase tracking-wider">
                    {isSr && srProjectTexts[project.id]?.categoryLabel
                      ? srProjectTexts[project.id].categoryLabel
                      : project.categoryLabel}
                  </span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-500">{project.year}</span>
                </div>

                {/* Project Title & Tagline */}
                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg text-emerald-400/90 font-medium">
                    {isSr && srProjectTexts[project.id]?.tagline
                      ? srProjectTexts[project.id].tagline
                      : project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
                  {isSr && srProjectTexts[project.id]?.description
                    ? srProjectTexts[project.id].description
                    : project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-neutral-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {project.caseStudy && (
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-all shadow-md active:scale-95 group"
                    >
                      <span>{dict.featured.viewCaseStudy}</span>
                      <ArrowRight className="w-4 h-4 text-neutral-700 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  )}

                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium border border-white/10 transition-all"
                    >
                      <Smartphone className="w-4 h-4 text-emerald-400" />
                      <span>{dict.featured.appStore}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium border border-white/10 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 text-neutral-400" />
                      <span>{dict.featured.livePreview}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                    </a>
                  )}
                </div>
              </div>

              {/* Visual Showcase Column */}
              <div
                className={`relative ${
                  isEven ? "lg:col-span-7 lg:order-1" : "lg:col-span-7 lg:order-2"
                }`}
              >
                <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-sm p-3 sm:p-4 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-emerald-950/20">
                  {/* Browser / Device Header Bar */}
                  <div className="flex items-center justify-between pb-3 px-2 border-b border-white/5 mb-3 text-xs text-neutral-500 font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                    <div className="text-[11px] truncate max-w-[200px] text-neutral-400">
                      {project.id === "carflo" ? "carflo.app (iOS)" : project.liveUrl?.replace("https://", "")}
                    </div>
                    <Layers className="w-3.5 h-3.5 text-neutral-600" />
                  </div>

                  {/* Image Presentation */}
                  <Link
                    href={project.caseStudy ? `/projects/${project.id}` : (project.liveUrl || project.appStoreUrl || "#")}
                    className="block relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-950"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 650px"
                      priority={index === 0}
                    />

                    {/* Subtle Gradient Veil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
