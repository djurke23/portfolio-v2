"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getSecondaryProjects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectCategory } from "@/types";
import { ExternalLink } from "lucide-react";
import { GithubIcon, FigmaIcon } from "@/components/ui/SocialIcons";

export default function ProjectMatrix() {
  const secondaryProjects = getSecondaryProjects();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const { language } = useLanguage();
  const isSr = language === "sr";

  const filters: { label: string; value: ProjectCategory }[] = [
    { label: isSr ? "Svi Radovi" : "All Works", value: "all" },
    { label: isSr ? "Web Sajtovi" : "Websites", value: "website" },
    { label: isSr ? "UI/UX & Dizajn" : "UI/UX & Design", value: "design" },
    { label: isSr ? "Web Aplikacije" : "Web Apps", value: "web-app" },
    { label: isSr ? "Mobilne Aplikacije" : "Mobile Apps", value: "mobile-app" },
  ];

  const filtered = secondaryProjects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 max-w-xl">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
            {isSr ? "[03] Arhiva Projekata" : "[03] Project Archive"}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            {isSr ? "Klijentske Implementacije i Dizajn Koncepti" : "Client Implementations & Design Concepts"}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light">
            {isSr
              ? "Dodatni komercijalni web sajtovi, UI sistemi i projekti isporučeni za klijente."
              : "Additional commercial websites, UI systems, and client delivery projects."}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-neutral-900/60 border border-white/10 self-start">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === filter.value
                  ? "bg-white text-neutral-950 shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/5 hover:border-white/15 transition-colors"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full bg-neutral-950 overflow-hidden border-b border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-neutral-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-neutral-300 uppercase">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Footer Meta & Actions */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-neutral-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-mono text-neutral-500 self-center">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-neutral-400">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub Repository`}
                        className="p-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.figmaUrl && (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Figma File`}
                        className="p-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <FigmaIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Preview`}
                        className="p-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
