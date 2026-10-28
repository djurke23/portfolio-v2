"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
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

interface CaseStudyViewProps {
  project: Project;
  nextProject: Project | null;
}

const srCaseStudyOverrides: Record<
  string,
  {
    tagline?: string;
    categoryLabel?: string;
    overview?: string;
    problem?: string;
    solution?: string;
    role?: string;
    timeline?: string;
  }
> = {
  "the-system-awakening": {
    categoryLabel: "Web & Mobilni Ekosistem",
    tagline: "Gamifikovani ekosistem za produktivnost inspirisan Solo Leveling sistemom — beta registracija i predstojeća web i mobilna aplikacija.",
    overview:
      "The System: Awakening je ambiciozan gamifikovani ekosistem za lični razvoj i građenje navika, osmišljen da svakodnevni napredak (trening, učenje, rad, disciplina) pretvori u RPG iskustvo napredovanja lovaca inspirisano Solo Leveling konceptom. Prva faza je lansirana kao 'Founder Hunter Application' terminal za registraciju i selekciju 100 beta testera, dok se paralelno pripremaju sveobuhvatna web platforma i mobilne aplikacije za iOS i Android.",
    role: "Glavni Arhitekta & Full-Stack Programer",
    timeline: "2025 — Danas",
    problem:
      "Većina aplikacija za praćenje navika i produktivnost pati od jednoličnog, dosadnog interfejsa zbog čega korisnici brzo odustaju. Takođe, lansiranje kompleksnog multiplatformskog sistema zahteva detaljnu validaciju, prikupljanje povratnih informacija i formiranje posvećene zajednice testera pre konačnog lansiranja cloud infrastrukture i mobilnih verzija.",
    solution:
      "Izgrađen je imerzivni cyberpunk terminal na Vercel Edge infrastrukturi sa trenutnim odzivom i validacijom podataka za selekciju 'Founder Hunter' testera. Postavljena je arhitektura budućeg multiplatformskog ekosistema koji spaja Next.js web platformu i nativne mobilne aplikacije (iOS & Android) sa dnevnim quest-ovima, atributima (snaga, agilnost, inteligencija), lovačkim rangovima i Discord integracijom.",
  },
  carflo: {
    categoryLabel: "Mobilna & Cloud Platforma",
    tagline: "Vrhunski digitalni dnevnik troškova i održavanja vozila za iOS.",
    overview:
      "CarFlo je zaokružena automobilska platforma osmišljena kako za automobilske entuzijaste, tako i za svakodnevne vozače. Uklanja potrebu za nepreglednim beleškama i komplikovanim tabelama, nudeći objedinjeni mobilni interfejs sa praćenjem servisa, potrošnje i troškova koji besprekorno funkcioniše i bez internet konekcije.",
    role: "Glavni Full-Stack & Mobile Developer / UI/UX Dizajner",
    timeline: "2024 — Danas",
    problem:
      "Većina postojećih aplikacija za praćenje vozila je pretrpana oglasima, poseduje zastareo korisnički interfejs ili nema pouzdanu sinhronizaciju u oblaku. Vozačima je bio potreban brz unos podataka (npr. direktno na pumpi) uz garantovano čuvanje podataka čak i na mestima slabog signala.",
    solution:
      "Projektovana i razvijena multiplatformska mobilna aplikacija uz TypeScript, Capacitor i Supabase. Izrađen moderan, ergonomičan dark mode UI optimizovan za korišćenje jednom rukom, sa bezbednom autentifikacijom i nativnim iOS pretplatama preko RevenueCat SDK-a.",
  },
  fluffyflowers: {
    categoryLabel: "E-Commerce & Brand Platforma",
    tagline: "Premijum e-commerce cvećara i radionica sa real-time porudžbinama.",
    overview:
      "FluffyFlowers.rs je digitalna prodavnica unikatnih, ručno izrađenih plišanih cvetnih aranžmana. Klijent je zahtevao personalizovanu digitalnu platformu koja oslikava toplinu i zanatsku estetiku brenda, bez tromosti i mesečnih troškova generičkih šablonskih rešenja.",
    role: "Solo Full-Stack Developer & UI/UX Dizajner",
    timeline: "2024",
    problem:
      "Gotova rešenja poput Shopify-a ili WooCommerce-a donose preveliko opterećenje skripti, lošije performanse na mobilnim mrežama i uniforman izgled koji nije prenosio toplinu ručno rađenih aranžmana.",
    solution:
      "Razvijena izuzetno brza React i TypeScript aplikacija pogonjena Vite alatom i Tailwind CSS sistemom. Implementiran modularni katalog artikala, interaktivna korpa i automatizovano rutiranje porudžbina direktno do radionice.",
  },
  sunshine: {
    categoryLabel: "Jamstack & Headless CMS Platforma",
    tagline: "Moderna, višejezična Jamstack web platforma sa Sanity CMS-om i 100/100 Core Web Vitals ocenom.",
    overview:
      "SUNSHINE je luksuzni salon za profesionalne masaže i velnes u Beogradu. Projekat je realizovan kao napredna, četvorojezična Jamstack platforma optimizovana za visoku stopu konverzije, munjevite performanse (100/100 Core Web Vitals) i besprekoran lokalni SEO. Platforma poseduje preko 119 statički pre-renderovanih stranica, interaktivni 'Treatment Finder' kviz za preporuku masaža, dinamički cenovnik prema trajanju tretmana (30, 60, 90, 120 min) i Sanity Headless CMS sa ugrađenim Studiom (/studio) koji klijentu omogućava samostalno uređivanje ponude.",
    role: "Lead Full-Stack Inženjer & UI/UX Dizajner",
    timeline: "2024 — 2025",
    problem:
      "Uobičajeni sajtovi salona pate od sporih i zastarelih platformi, nepreglednih cenovnika i nedostatka višejezične podrške za inostrane posetioce i diplomate u Beogradu. Pored toga, svaka promena cena ili uvođenje novog tretmana zahtevali su intervenciju programera.",
    solution:
      "Projektovana i implementirana savremena Jamstack arhitektura: Next.js 15 (App Router, Server Actions) i React 19 upareni sa Tailwind CSS v4 i Framer Motion 12. Povezana je kompletna višejezičnost (srpski, engleski, ruski, turski) preko next-intl v4, integrisan je Sanity Headless CMS sa internim Studiom na ruti /studio, a slanje upita je automatizovano preko Resend API-ja bez eksternog backend servera.",
  },
  "carflo-web": {
    categoryLabel: "SaaS Landing & Veb Platforma",
    tagline: "Moderna, ultrabrza SaaS landing stranica i dvojezična web platforma sa kalkulatorom potrošnje.",
    overview:
      "carFlo je moderna mobilna aplikacija namenjena vozačima za digitalnu evidenciju troškova, servisnu knjižicu, praćenje potrošnje goriva i 1-tap SMS parking u Srbiji. Zadatak web platforme (carflo.app) bio je kreiranje ultrabrze, estetski besprekorne, konverzione landing stranice koja demonstrira vrednost aplikacije, gradi poverenje (social proof & trust), omogućava interaktivne alate direktno u browseru i ima punu dvojezičnu podršku (EN / SR).",
    role: "Lead Frontend Developer & UI/UX Dizajner",
    timeline: "2024",
    problem:
      "Većina SaaS landing sajtova se oslanja na teške JavaScript framework-e što dovodi do sporog učitavanja na mobilnim mrežama i lošije konverzije. Takođe, korisnicima je bilo potrebno pružiti interaktivne alate (poput kalkulatora troškova goriva i prikaza verifikovane servisne knjižice) direktno u pregledaču pre samog preuzimanja aplikacije.",
    solution:
      "Izabran je 'zero-dependency / zero-framework' pristup uz semantički HTML5, modularni CSS3 i Vanilla JavaScript (ES6+). Razvijen je klijentski i18n endžin bez osvežavanja stranice, adaptivni dark/light mod, pametni kalkulator goriva sa valutama (RSD/EUR) i rešen je prikaz zastavica na Windows OS-u pomoću prilagođenih SVG vektora.",
  },
  "rev-and-chill": {
    categoryLabel: "Full-Stack Web Aplikacija",
    tagline: "Full-stack sistem za prijavu i moderaciju vozila za automobilske skupove.",
    overview:
      "Rev&Chill platforma upravlja procesom prijava, verifikacije vozila i javnim izlaganjem modifikovanih automobila za skupove entuzijasta. Organizatorima omogućava pregledan administratorski panel za selekciju učesnika, dok vozačima pruža reprezentativnu galeriju za prikaz svih modifikacija.",
    role: "Full-Stack Inženjer & Arhitekta Rešenja",
    timeline: "2024 — Danas",
    problem:
      "Organizatori su ranije prijave primali haotično putem Instagram poruka ili Google formi, što je dovodilo do gubitka slika u visokoj rezoluciji, nedostatka javnog kataloga odobrenih vozila i gužvi na ulazu.",
    solution:
      "Izgrađena namenska Next.js App Router aplikacija na Cloudflare serverless edge infrastrukturi. Vozači unose specifikacije i fotografije koje se direktno skladište na Cloudflare R2 object storage, dok se relacioni podaci vode u distribuiranoj Cloudflare D1 bazi uz Next.js Server Actions.",
  },
};

export default function CaseStudyView({ project, nextProject }: CaseStudyViewProps) {
  const { dict, language } = useLanguage();
  const isSr = language === "sr";
  const { caseStudy } = project;

  if (!caseStudy) return null;

  const overrides = isSr ? srCaseStudyOverrides[project.id] : undefined;

  const categoryLabel = overrides?.categoryLabel || project.categoryLabel;
  const tagline = overrides?.tagline || project.tagline;
  const overview = overrides?.overview || caseStudy.overview;
  const problem = overrides?.problem || caseStudy.problem;
  const solution = overrides?.solution || caseStudy.solution;
  const role = overrides?.role || caseStudy.role;
  const timeline = overrides?.timeline || caseStudy.timeline;

  return (
    <div className="min-h-screen bg-[#070709] text-white pt-24 pb-32">
      {/* Top Breadcrumb & Return Nav */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-emerald-400" />
          <span>{dict.caseStudy.backToWork}</span>
        </Link>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Case Study Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold uppercase">
              {categoryLabel}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">{project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-300 font-light max-w-3xl leading-relaxed">
            {tagline}
          </p>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono">
            <div>
              <span className="text-neutral-500 block uppercase">{dict.caseStudy.role}</span>
              <span className="text-white font-medium mt-0.5 block">{role}</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase">{dict.caseStudy.timeline}</span>
              <span className="text-white font-medium mt-0.5 block">{timeline}</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase">{dict.caseStudy.environment}</span>
              <span className="text-white font-medium mt-0.5 block">
                {project.appStoreUrl ? "iOS / Mobile" : "Web / Vercel Edge"}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase">{dict.caseStudy.availability}</span>
              <span className="text-emerald-400 font-medium mt-0.5 block">{dict.caseStudy.statusLive}</span>
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
                <span>{dict.caseStudy.downloadApp}</span>
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
                <span>{dict.caseStudy.visitLive}</span>
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
              {dict.caseStudy.contextTitle}
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
            <p>{overview}</p>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <h3 className="text-sm font-mono uppercase text-emerald-400 font-semibold">
                {dict.caseStudy.challengeTitle}
              </h3>
              <p className="text-sm text-neutral-400">{problem}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <h3 className="text-sm font-mono uppercase text-cyan-400 font-semibold">
                {dict.caseStudy.solutionTitle}
              </h3>
              <p className="text-sm text-neutral-400">{solution}</p>
            </div>
          </div>
        </section>

        {/* Section 2: Technical Architecture Breakdown */}
        <section className="space-y-8 pt-12 border-t border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              {dict.caseStudy.archEyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              {dict.caseStudy.archTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.architecture.frontend && (
              <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <Layers className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {dict.caseStudy.frontendLayer}
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
                    {dict.caseStudy.backendLayer}
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
                    {dict.caseStudy.dataLayer}
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
                    {dict.caseStudy.storageLayer}
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
              {dict.caseStudy.capabilitiesEyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              {dict.caseStudy.capabilitiesTitle}
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
                  <span>{dict.caseStudy.featurePrefix} 0{i + 1}</span>
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
              {dict.caseStudy.hurdlesEyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              {dict.caseStudy.hurdlesTitle}
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
                    {dict.caseStudy.hurdlesSolution}
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
              {dict.caseStudy.resultsEyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              {dict.caseStudy.resultsTitle}
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
            <span>{dict.caseStudy.returnToPortfolio}</span>
          </Link>

          {nextProject && (
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-xs font-mono text-neutral-500">{dict.caseStudy.nextCaseStudy}</span>
              <Link
                href={`/projects/${nextProject.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-mono border border-white/10 transition-all"
              >
                <span>{nextProject.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </Link>
            </div>
          )}
        </footer>
      </article>
    </div>
  );
}
