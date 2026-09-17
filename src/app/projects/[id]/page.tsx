import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectById } from "@/data/projects";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Smartphone,
  Layers,
  Database,
  Server,
  Cloud,
  CheckCircle2,
  AlertTriangle,
  Code2,
} from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects
    .filter((p) => p.caseStudy)
    .map((p) => ({
      id: p.id,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Technical Case Study | Luka Đurić`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  // Other case studies for bottom nav
  const otherProjects = projects.filter((p) => p.caseStudy && p.id !== project.id);

  return (
    <div className="min-h-screen bg-[#070709] text-white pt-24 pb-32">
      {/* Top Breadcrumb & Return Nav */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-emerald-400" />
          <span>Back to Selected Work</span>
        </Link>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Case Study Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold uppercase">
              {project.categoryLabel}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">{project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-300 font-light max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono">
            <div>
              <span className="text-neutral-500 block uppercase">My Role</span>
              <span className="text-white font-medium mt-0.5 block">{caseStudy.role}</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase">Timeline</span>
              <span className="text-white font-medium mt-0.5 block">{caseStudy.timeline}</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase">Target Environment</span>
              <span className="text-white font-medium mt-0.5 block">
                {project.appStoreUrl ? "iOS / Mobile" : "Web / Vercel Edge"}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase">Live Availability</span>
              <span className="text-emerald-400 font-medium mt-0.5 block">Production Live</span>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 text-sm font-semibold hover:bg-neutral-200 transition-all shadow-lg active:scale-95"
              >
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span>Download on App Store</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-700" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/15 transition-all active:scale-95"
              >
                <ExternalLink className="w-4 h-4 text-emerald-400" />
                <span>Visit Live Platform</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </a>
            )}
          </div>
        </header>

        {/* Hero Visual Mockup */}
        <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 1200px) 100vw, 1000px"
          />
        </div>

        {/* Section 1: Overview, Problem & Solution */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
          <div className="md:col-span-4">
            <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
              01. Context & Objectives
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
            <p>{caseStudy.overview}</p>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <h3 className="text-sm font-mono uppercase text-emerald-400 font-semibold">
                The Engineering Challenge
              </h3>
              <p className="text-sm text-neutral-400">{caseStudy.problem}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <h3 className="text-sm font-mono uppercase text-cyan-400 font-semibold">
                The Implemented Solution
              </h3>
              <p className="text-sm text-neutral-400">{caseStudy.solution}</p>
            </div>
          </div>
        </section>

        {/* Section 2: Technical Architecture Breakdown */}
        <section className="space-y-8 pt-12 border-t border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              02. Deep Dive
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              System Architecture & Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.architecture.frontend && (
              <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <Layers className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Frontend Layer
                  </h3>
                </div>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {caseStudy.architecture.frontend}
                </p>
              </div>
            )}

            {caseStudy.architecture.backend && (
              <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center gap-2.5 text-cyan-400">
                  <Server className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Backend & Serverless Handlers
                  </h3>
                </div>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {caseStudy.architecture.backend}
                </p>
              </div>
            )}

            {caseStudy.architecture.database && (
              <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <Database className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Database & Relational Model
                  </h3>
                </div>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {caseStudy.architecture.database}
                </p>
              </div>
            )}

            {caseStudy.architecture.storage && (
              <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center gap-2.5 text-purple-400">
                  <Cloud className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Cloud Storage & Media Pipeline
                  </h3>
                </div>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {caseStudy.architecture.storage}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Key Features */}
        <section className="space-y-8 pt-12 border-t border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              03. Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              Engineered Product Features
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {caseStudy.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-white/15 transition-colors"
              >
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Feature 0{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Real Challenges & Solutions */}
        <section className="space-y-8 pt-12 border-t border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              04. Technical Hardships
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              Engineering Challenges & Tradeoffs
            </h2>
          </div>

          <div className="space-y-6">
            {caseStudy.challenges.map((item, i) => (
              <div
                key={i}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.challenge}
                    </h3>
                  </div>
                </div>

                <div className="pl-8 text-sm text-neutral-300 font-light leading-relaxed border-l-2 border-emerald-500/40 ml-2">
                  <span className="font-mono text-xs text-emerald-400 block uppercase mb-1 font-semibold">
                    Engineered Solution:
                  </span>
                  {item.solution}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Real Outcomes */}
        <section className="space-y-8 pt-12 border-t border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              05. Results
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              Production Results & Reliability
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {caseStudy.outcomes.map((outcome, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/20 space-y-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <p className="text-sm text-neutral-200 font-light leading-relaxed">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation to other case studies */}
        <footer className="pt-20 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          {otherProjects.length > 0 && (
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-xs font-mono text-neutral-500">Next Case Study:</span>
              <Link
                href={`/projects/${otherProjects[0].id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-mono border border-white/10 transition-all"
              >
                <span>{otherProjects[0].title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </Link>
            </div>
          )}
        </footer>
      </article>
    </div>
  );
}
