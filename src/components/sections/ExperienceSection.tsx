"use client";

import React, { useState } from "react";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronDown, MapPin, Radio, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const srExperienceData: Record<
  string,
  {
    role: string;
    type: string;
    description: string;
    responsibilities: string[];
    location: string;
  }
> = {
  freelance: {
    role: "Full-Stack Developer & Product Designer",
    type: "Samostalni projekti",
    location: "Beograd, Srbija / Remote",
    description:
      "Isporuka digitalnih proizvoda po meri, full-stack web aplikacija, e-commerce rešenja i multiplatformskih mobilnih aplikacija za poslovne klijente i sopstvene projekte.",
    responsibilities: [
      "Arhitektura i razvoj full-stack web aplikacija koristeći Next.js, React, TypeScript i Tailwind CSS.",
      "Razvoj mobilnih aplikacija (uključujući CarFlo na iOS App Store-u) uz React Native, Capacitor, Supabase i RevenueCat.",
      "Kreiranje brzih serverless servisa i baza podataka uz Go, Cloudflare D1/R2 i PostgreSQL.",
      "Izrada kohezivnih dizajn sistema, smernica brenda i interaktivnih prototipa u Figmi.",
    ],
  },
  "pink-robotics": {
    role: "Robotičar — Broadcast Robotics Support",
    type: "Broadcast Robotika Uživo",
    location: "Beograd, Srbija",
    description:
      "Deo tehničkog tima za live integraciju humanoidnih platformi Unitree G1 i kvadrupedne platforme Unitree Go2 u TV produkciju. Operacija i kontrola kretanja robota u studiju, safety protokoli, rutiranje video signala i sinhronizacija sa režijom tokom live prenosa.",
    responsibilities: [
      "Operacija i daljinska kontrola kretanja humanoidnog robota Unitree G1 i kvadrupednog robota Unitree Go2 u TV studiju tokom živog programa.",
      "Implementacija i sprovođenje strogih safety protokola, nadzor baterija i telemetrije sistema u realnom vremenu.",
      "Rutiranje video signala sa kamera na robotima i direktna sinhronizacija kadrova sa režijom i rediteljem.",
      "Kalibracija putanja kretanja, navigacija u prostoru oko scenografije i dinamična interakcija sa učesnicima programa.",
    ],
  },
  dms: {
    role: "Developer Web Aplikacija",
    type: "Puno radno vreme",
    location: "Beograd, Srbija",
    description:
      "Razvoj i održavanje full-stack web aplikacija i internih inženjerskih alata unutar agilnog tima.",
    responsibilities: [
      "Razvoj robusnih frontend komponenti i modularnih funkcionalnosti koristeći Angular, Vue.js, JavaScript i SCSS.",
      "Izrada backend servisa i relacionih baza podataka uz Go, PHP i PostgreSQL.",
      "Automatsko testiranje API ugovora i validacija performansi uz Postman.",
      "Aktivno učešće u agilnim ceremonijama, code review procedurama i vođenju projekata kroz Jira, Git i Bitbucket.",
    ],
  },
  "pink-mixer": {
    role: "Video Mikser (Realizator Prenosa)",
    type: "Televizijska Produkcija Uživo",
    location: "Beograd, Srbija",
    description:
      "Upravljanje profesionalnim video mikserom tokom televizijskih prenosa uživo, kontrola prelaza između signala više kamera i video izvora pod pritiskom produkcije u realnom vremenu.",
    responsibilities: [
      "Upravljanje video mikserom tokom televizijskih prenosa uživo visokog formata.",
      "Prebacivanje signala kamera i video izvora sa preciznošću u frejm.",
      "Praćenje i realizacija instrukcija reditelja u realnom vremenu.",
      "Kontrola grafičkih slojeva, prelaza i režije u kontinuitetu emitovanja.",
      "Efikasan rad pod pritiskom bez prekida emitovanja i gubitka signala.",
      "Bliska koordinacija sa rediteljima, kamermanima i tehničkom kontrolom režije.",
      "Praćenje ulaznih i izlaznih signala radi obezbeđivanja visokih standarda emitovanja.",
    ],
  },
  "pink-rco": {
    role: "Operater Daljinske Kontrole (RCO)",
    type: "Emitovanje i Produkcija",
    location: "Beograd, Srbija",
    description:
      "Daljinsko upravljanje i kontrola emisione opreme i robotizovanih kamera u realnom vremenu tokom emisija uživo.",
    responsibilities: [
      "Daljinsko upravljanje robotizovanim PTZ kamerama i namenskom opremom.",
      "Praćenje i izvršavanje direktorskih instrukcija u realnom vremenu.",
      "Kontinuirano praćenje signala i operativno podešavanje parametara.",
      "Koordinacija sa produkcijskim timom radi obezbeđivanja optimalnih kadrova.",
    ],
  },
  "pink-editor": {
    role: "Video Montažer",
    type: "Medijska Produkcija",
    location: "Beograd, Srbija",
    description:
      "Montaža video sadržaja za televizijsko emitovanje, sečenje materijala i priprema vizuelnog paketa pod strogim rokovima.",
    responsibilities: [
      "Montaža i priprema video paketa za televizijski program visoke gledanosti.",
      "Sečenje i aranžiranje materijala sa više kamera u dinamične priloge.",
      "Finalni eksport master materijala prema emisionim standardima.",
      "Kolor korekcija, obrada tona i primena grafičkih elemenata.",
      "Rad u profesionalnim paketima Adobe Premiere Pro i After Effects.",
    ],
  },
  "pink-operator": {
    role: "Operater Emisione Grafike i Sistema",
    type: "Medijsko Emitovanje",
    location: "Beograd, Srbija",
    description:
      "Rad na namenskim računarima i sistemima televizijske grafike, priprema i kontrola grafičkih elemenata u realnom vremenu tokom prenosa uživo.",
    responsibilities: [
      "Upravljanje namenskim računarima i sistemima za plasiranje grafike uživo.",
      "Priprema, provera i kontrola grafičkih elemenata tokom programa.",
      "Upravljanje telopima, rezultatima glasanja i grafičkim trakama u programu.",
      "Praćenje tehničkog izlaza i integriteta signala tokom produkcije.",
    ],
  },
};

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>("freelance");
  const { dict, language } = useLanguage();

  const toggleExpand = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <SectionHeader
        number="07"
        category={dict.experience.eyebrow}
        title={dict.experience.title}
        description={dict.experience.description}
      />

      <div className="space-y-4">
        {experiences.map((exp) => {
          const isExpanded = expandedId === exp.id;
          const isPinkMedia = exp.company === "Pink Media Group";
          const isSr = language === "sr";
          const srData = isSr ? srExperienceData[exp.id] : null;

          const displayRole = srData?.role || exp.role;
          const displayType = srData?.type || exp.type;
          const displayLocation = srData?.location || exp.location;
          const displayDesc = srData?.description || exp.description;
          const displayResponsibilities = srData?.responsibilities || exp.responsibilities;

          return (
            <div
              key={exp.id}
              className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden group ${
                isExpanded
                  ? isPinkMedia
                    ? "border-red-500/30 bg-neutral-900/80 shadow-xl shadow-black/50"
                    : "border-emerald-500/30 bg-neutral-900/80 shadow-xl shadow-black/50"
                  : "border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
              }`}
            >
              {/* Header Row (Clickable) */}
              <button
                type="button"
                onClick={() => toggleExpand(exp.id)}
                className="w-full text-left p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
                aria-expanded={isExpanded}
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isPinkMedia ? "text-amber-400/90" : "text-emerald-400"
                      }`}
                    >
                      {exp.period}
                    </span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5">
                      {displayType}
                    </span>

                    {/* Broadcast Environment Live Badge */}
                    {exp.broadcastContext?.isLive && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/25 text-[10px] font-mono font-semibold text-red-400 tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span>{dict.experience.liveBroadcast}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <h3
                      className={`text-xl sm:text-2xl font-bold text-white tracking-tight transition-colors ${
                        isExpanded
                          ? isPinkMedia
                            ? "text-red-300"
                            : "text-emerald-300"
                          : "group-hover:text-white"
                      }`}
                    >
                      {displayRole}
                    </h3>
                    <span className="text-base text-neutral-400 font-medium">
                      @ {exp.company}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 pt-2 md:pt-0">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{displayLocation}</span>
                  </div>

                  <div
                    className={`p-2 rounded-full bg-white/5 text-neutral-400 transition-all duration-300 group-hover:text-white group-hover:bg-white/10 group-hover:translate-x-0.5 ${
                      isExpanded
                        ? isPinkMedia
                          ? "rotate-180 text-red-400 bg-red-500/10 border border-red-500/20"
                          : "rotate-180 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                        : ""
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
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-3 space-y-6 border-t border-white/5">
                      {/* Broadcast Environment Strip for Pink Media Group */}
                      {exp.broadcastContext && (
                        <div className="p-4 rounded-xl bg-neutral-950/60 border border-red-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                            <Radio className="w-3.5 h-3.5 text-red-400" />
                            <span className="text-neutral-500 font-normal">{dict.experience.environment}</span>
                            <span className="text-neutral-200 font-medium">
                              {dict.experience.environmentDesc}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-1.5">
                            {exp.broadcastContext.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase rounded bg-red-500/10 text-red-300 border border-red-500/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                        {displayDesc}
                      </p>

                      {/* Responsibilities list */}
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2">
                          <Activity
                            className={`w-3.5 h-3.5 ${
                              isPinkMedia ? "text-red-400" : "text-emerald-400"
                            }`}
                          />
                          <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                            {dict.experience.responsibilities}
                          </h4>
                        </div>

                        <ul className="space-y-2 text-sm text-neutral-400">
                          {displayResponsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span
                                className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                                  isPinkMedia ? "bg-red-400" : "bg-emerald-400"
                                }`}
                              />
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
                              className={`px-2.5 py-1 rounded-md text-xs font-mono border transition-colors ${
                                isPinkMedia
                                  ? "bg-red-500/[0.04] text-neutral-300 border-red-500/20"
                                  : "bg-white/5 text-neutral-300 border-white/10"
                              }`}
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
