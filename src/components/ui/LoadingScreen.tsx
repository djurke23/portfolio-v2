"use client";

import React, { useState, useEffect, useCallback, useSyncExternalStore, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useSound } from "@/context/SoundContext";

let hasSeenIntroInMemory = false;
let replayListeners: Array<() => void> = [];

function subscribeIntro(callback: () => void) {
  replayListeners.push(callback);
  return () => {
    replayListeners = replayListeners.filter((cb) => cb !== callback);
  };
}

function getClientSnapshot(): boolean {
  return hasSeenIntroInMemory;
}

// Render in initial SSR HTML so preloader is visible on frame 0 with zero flash of site
function getServerSnapshot(): boolean {
  return false;
}

interface StageDefinition {
  phase: string;
  stepNumber: string;
  labelSr: string;
  labelEn: string;
  detailSr: string;
  detailEn: string;
  logSr: string;
  logEn: string;
}

const STAGES: StageDefinition[] = [
  {
    phase: "[01/04]",
    stepNumber: "01",
    labelSr: "POKRETANJE SISTEMSKOG JEZGRA",
    labelEn: "BOOTING SYSTEM KERNEL",
    detailSr: "Inicijalizacija Next.js 16, React 19 & memorijskih registara...",
    detailEn: "Initializing Next.js 16, React 19 & runtime memory registers...",
    logSr: "Kernel online // Next.js 16 + React 19 spreman",
    logEn: "Kernel online // Next.js 16 + React 19 ready",
  },
  {
    phase: "[02/04]",
    stepNumber: "02",
    labelSr: "SINHRONIZACIJA PROJEKATA & SERVISA",
    labelEn: "SYNCING PROJECTS & SERVICES",
    detailSr: "Učitavanje inženjerskih radova, CarFlo ekosistema i Go servisa...",
    detailEn: "Fetching engineering archives, CarFlo ecosystem & Go services...",
    logSr: "Servisi sinhronizovani // CarFlo + Pink TV + Go core",
    logEn: "Services synced // CarFlo + Pink TV + Go core",
  },
  {
    phase: "[03/04]",
    stepNumber: "03",
    labelSr: "KALIBRACIJA GRAFIKE & ZVUKA",
    labelEn: "CALIBRATING GRAPHICS & AUDIO",
    detailSr: "Podešavanje hardverskog 120Hz ubrzanja i zvučne kulise...",
    detailEn: "Configuring hardware 120Hz acceleration & spatial sound fx...",
    logSr: "Grafički pipeline kalibrisan na 120Hz",
    logEn: "Graphics pipeline calibrated at 120Hz",
  },
  {
    phase: "[04/04]",
    stepNumber: "04",
    labelSr: "SISTEM VERIFIKOVAN // 100% OK",
    labelEn: "SYSTEM VERIFIED // 100% OK",
    detailSr: "Radni prostor Luke Đurića je u potpunosti spreman...",
    detailEn: "Luka Đurić engineering workstation is fully ready...",
    logSr: "Sigurnosna provera uspešna // Pristup odobren",
    logEn: "Security clearance verified // Access granted",
  },
];

// Toggle to easily re-enable the loading screen whenever needed
const SHOW_LOADING_SCREEN = false;

export default function LoadingScreen() {
  if (!SHOW_LOADING_SCREEN) {
    return null;
  }

  const hasSeenIntro = useSyncExternalStore(
    subscribeIntro,
    getClientSnapshot,
    getServerSnapshot
  );

  const [dismissed, setDismissed] = useState(false);
  const [replaying, setReplaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const { language } = useLanguage();
  const { playClick, playSuccess, playOpen } = useSound();
  const isSr = language === "sr";

  const soundPlayedRef = useRef<{ [key: number]: boolean }>({});

  const isVisible = (!hasSeenIntro && !dismissed) || replaying;

  const handleFinish = useCallback(() => {
    setDismissed(true);
    setReplaying(false);
    hasSeenIntroInMemory = true;
    if (typeof window !== "undefined") {
      window.__introDone = true;
      try {
        sessionStorage.removeItem("portfolio_intro_seen");
      } catch {}
      window.dispatchEvent(new CustomEvent("intro-finish"));
    }
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    if (window.__lenis) {
      window.__lenis.start();
    }
    playOpen();
  }, [playOpen]);

  // Lock scroll when visible and drive smooth 2.4s cinematic progress
  useEffect(() => {
    if (!isVisible) return;

    soundPlayedRef.current = {};
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (window.__lenis) {
      window.__lenis.stop();
    }

    const startTime = performance.now();
    // 2.4s duration gives ample time to comfortably absorb the telemetry
    const duration = 2400;

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const t = Math.min(1, elapsed / duration);

      // Smooth custom S-curve easing with slight pacing holds
      const eased =
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const currentVal = Math.min(100, Math.round(eased * 100));

      setProgress(currentVal);

      // Trigger subtle tactile clicks at milestones
      if (currentVal >= 25 && !soundPlayedRef.current[25]) {
        soundPlayedRef.current[25] = true;
        playClick();
      } else if (currentVal >= 50 && !soundPlayedRef.current[50]) {
        soundPlayedRef.current[50] = true;
        playClick();
      } else if (currentVal >= 75 && !soundPlayedRef.current[75]) {
        soundPlayedRef.current[75] = true;
        playClick();
      } else if (currentVal >= 100 && !soundPlayedRef.current[100]) {
        soundPlayedRef.current[100] = true;
        playSuccess();
      }

      if (t >= 1) {
        clearInterval(interval);
        // Hold at 100% for 320ms so user clearly reads final status before curtain lifts
        setTimeout(handleFinish, 320);
      }
    }, 20);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearInterval(interval);
        setProgress(100);
        handleFinish();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    };
  }, [isVisible, handleFinish, playClick, playSuccess]);

  // Keep window state in sync
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.__introDone = !isVisible;
    }
  }, [isVisible]);

  // Listen for manual replay requests (e.g. from Command Palette)
  useEffect(() => {
    const handleReplayEvent = () => {
      hasSeenIntroInMemory = false;
      if (typeof window !== "undefined") {
        window.__introDone = false;
      }
      setProgress(0);
      setDismissed(false);
      setReplaying(true);
      replayListeners.forEach((cb) => cb());
    };

    window.addEventListener("replay-loading-screen", handleReplayEvent);
    return () => {
      window.removeEventListener("replay-loading-screen", handleReplayEvent);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  // Determine active stage index (0..3)
  const stageIndex = progress < 26 ? 0 : progress < 56 ? 1 : progress < 86 ? 2 : 3;
  const currentStage = STAGES[stageIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="app-preloader-root"
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.85,
            ease: [0.77, 0, 0.175, 1],
          }}
          onAnimationComplete={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("intro-complete"));
            }
          }}
          onClick={handleFinish}
          className="fixed inset-0 z-[100000] bg-[#06070a] text-white flex flex-col justify-between p-6 sm:p-10 md:p-14 select-none overflow-hidden cursor-pointer"
          title={isSr ? "Klikni bilo gde za preskok" : "Click anywhere to skip"}
        >
          {/* Subtle Cyber Reticle Corners with coordinate labels */}
          <div className="absolute top-5 left-5 pointer-events-none flex flex-col items-start gap-1">
            <div className="w-5 h-5 border-t-2 border-l-2 border-emerald-500/40" />
            <span className="text-[9px] font-mono text-emerald-500/40 pl-0.5 select-none">[SYS.01]</span>
          </div>
          <div className="absolute top-5 right-5 pointer-events-none flex flex-col items-end gap-1">
            <div className="w-5 h-5 border-t-2 border-r-2 border-emerald-500/40" />
            <span className="text-[9px] font-mono text-emerald-500/40 pr-0.5 select-none">[SYS.02]</span>
          </div>
          <div className="absolute bottom-5 left-5 pointer-events-none flex flex-col items-start gap-1">
            <span className="text-[9px] font-mono text-emerald-500/40 pl-0.5 select-none">[44°N 20°E]</span>
            <div className="w-5 h-5 border-b-2 border-l-2 border-emerald-500/40" />
          </div>
          <div className="absolute bottom-5 right-5 pointer-events-none flex flex-col items-end gap-1">
            <span className="text-[9px] font-mono text-emerald-500/40 pr-0.5 select-none">[V2.6.PROD]</span>
            <div className="w-5 h-5 border-b-2 border-r-2 border-emerald-500/40" />
          </div>

          {/* Background Micro Dot Texture */}
          <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

          {/* Dynamic Ambient Center Radial Pulse */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full pointer-events-none transition-all duration-700"
            style={{
              background: `radial-gradient(circle at center, rgba(16, 185, 129, ${
                0.07 + (progress / 100) * 0.12
              }) 0%, rgba(6, 182, 212, ${
                0.03 + (progress / 100) * 0.05
              }) 42%, transparent 72%)`,
            }}
          />

          {/* Center Holographic HUD Vector Reticle (Rotates smoothly behind number) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-[340px] sm:w-[460px] md:w-[560px] h-[340px] sm:h-[460px] md:h-[560px] flex items-center justify-center opacity-35">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full animate-[spin_60s_linear_infinite]"
            >
              {/* Outer dashed radar ring */}
              <circle
                cx="200"
                cy="200"
                r="185"
                fill="none"
                stroke="rgba(16, 185, 129, 0.25)"
                strokeWidth="1.2"
                strokeDasharray="4 14"
              />
              {/* Concentric subtle solid ring */}
              <circle
                cx="200"
                cy="200"
                r="165"
                fill="none"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="1"
              />
              {/* Cardinal tick lines */}
              <line x1="200" y1="4" x2="200" y2="22" stroke="rgba(16, 185, 129, 0.55)" strokeWidth="1.5" />
              <line x1="200" y1="378" x2="200" y2="396" stroke="rgba(16, 185, 129, 0.55)" strokeWidth="1.5" />
              <line x1="4" y1="200" x2="22" y2="200" stroke="rgba(16, 185, 129, 0.55)" strokeWidth="1.5" />
              <line x1="378" y1="200" x2="396" y2="200" stroke="rgba(16, 185, 129, 0.55)" strokeWidth="1.5" />
            </svg>
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full animate-[spin_38s_linear_infinite_reverse]"
            >
              {/* Inner segment arcs */}
              <circle
                cx="200"
                cy="200"
                r="135"
                fill="none"
                stroke="rgba(6, 182, 212, 0.22)"
                strokeWidth="1.5"
                strokeDasharray="24 76"
              />
            </svg>
          </div>

          {/* TOP BAR */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              </span>
              <span className="font-bold text-white tracking-[0.22em] uppercase font-mono text-xs sm:text-sm">
                LUKA ĐURIĆ
              </span>
              <span className="text-neutral-600 hidden sm:inline">//</span>
              <span className="text-neutral-500 hidden sm:inline tracking-wider font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/5">
                SYSTEM PROTOCOL v2.6
              </span>
            </div>

            {/* 4-Step Segmented Phase Indicator */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:flex items-center gap-1.5">
                {STAGES.map((s, idx) => {
                  const isDone = idx < stageIndex;
                  const isCurrent = idx === stageIndex;
                  return (
                    <div
                      key={s.stepNumber}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all duration-300 ${
                        isDone
                          ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-semibold"
                          : isCurrent
                          ? "bg-emerald-500/30 border border-emerald-400 text-white font-bold shadow-[0_0_10px_rgba(16,185,129,0.4)] animate-pulse"
                          : "bg-white/[0.03] border border-white/10 text-neutral-600"
                      }`}
                    >
                      {s.stepNumber}
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold tracking-wider">
                <span className="text-neutral-500 font-normal hidden xs:inline">
                  {isSr ? "FAZA" : "PHASE"}:
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-bold text-xs shadow-sm">
                  {currentStage.phase}
                </span>
              </div>
            </div>
          </div>

          {/* CENTER DISPLAY */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-6 sm:space-y-7 max-w-2xl mx-auto w-full px-2 sm:px-4 text-center">
            {/* Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 shadow-[0_0_22px_rgba(16,185,129,0.18)] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#10b981]" />
              <span className="tracking-[0.16em] uppercase font-semibold text-[11px] sm:text-xs">
                {progress === 100
                  ? isSr
                    ? "PRISTUP ODOBREN // SISTEM ONLINE"
                    : "ACCESS GRANTED // SYSTEM ONLINE"
                  : isSr
                  ? "POKRETANJE DIGITALNOG RADNOG PROSTORA"
                  : "INITIALIZING DIGITAL WORKSPACE"}
              </span>
            </div>

            {/* Giant Futuristic Counter - With generous padding & normal tracking to prevent glyph clipping */}
            <div className="space-y-4 w-full">
              <div className="relative flex items-baseline justify-center overflow-visible select-none py-1">
                {/* Luminous aura duplicate behind */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-baseline justify-center overflow-visible pointer-events-none select-none blur-2xl opacity-40"
                >
                  <span className="font-mono font-black text-7xl sm:text-9xl md:text-[11rem] leading-none text-emerald-400 tabular-nums px-3">
                    {progress < 10 ? `0${progress}` : progress}
                  </span>
                  <span className="font-mono font-black text-3xl sm:text-5xl md:text-6xl text-emerald-400 ml-1 sm:ml-2">
                    %
                  </span>
                </div>

                {/* Primary crisp digits (safe bounding box prevents right edge clipping) */}
                <span className="relative inline-block font-mono font-black text-7xl sm:text-9xl md:text-[11rem] leading-none tracking-normal tabular-nums text-white px-3 sm:px-4 drop-shadow-[0_0_35px_rgba(16,185,129,0.35)] overflow-visible">
                  {progress < 10 ? `0${progress}` : progress}
                </span>

                {/* Styled HUD % Unit Symbol */}
                <span className="relative inline-block font-mono font-black text-3xl sm:text-5xl md:text-6xl leading-none text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.7)] ml-1 sm:ml-2.5 select-none align-baseline">
                  %
                </span>
              </div>

              {/* Progress Rail with Glowing Laser Spark */}
              <div className="relative w-72 sm:w-96 md:w-[440px] mx-auto space-y-2">
                <div className="relative h-2 sm:h-2.5 bg-neutral-950/80 border border-white/10 rounded-full p-[2px] overflow-hidden shadow-inner backdrop-blur-sm">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 via-teal-300 to-cyan-300 rounded-full relative"
                    style={{ width: `${progress}%` }}
                  >
                    {/* Glowing Laser Head at the tip */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_10px_#ffffff,0_0_20px_#10b981,0_0_30px_#06b6d4]" />
                  </motion.div>
                </div>

                {/* Graduation calibration ticks */}
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 px-1">
                  <span>00%</span>
                  <span className="hidden sm:inline">25%</span>
                  <span>50%</span>
                  <span className="hidden sm:inline">75%</span>
                  <span className="text-emerald-400 font-semibold">100%</span>
                </div>
              </div>
            </div>

            {/* High-Tech Readable Telemetry Terminal Console */}
            <div className="w-full max-w-lg bg-[#0b0c11]/85 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 text-left space-y-3 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(16,185,129,0.06)] hover:border-emerald-500/30 transition-all duration-300">
              {/* Console Header Bar */}
              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27CA3F]/80" />
                  </div>
                  <span className="text-neutral-400 font-medium ml-1 text-[11px] sm:text-xs">
                    luka_daemon.sh
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                    {currentStage.phase}
                  </span>
                  <span className="text-neutral-400 text-[11px] font-mono tabular-nums font-semibold">
                    {progress}%
                  </span>
                </div>
              </div>

              {/* Dynamic Console Output Logs */}
              <div className="space-y-1.5 font-mono">
                {/* Previously completed steps */}
                {STAGES.slice(0, stageIndex).map((s) => (
                  <div
                    key={s.stepNumber}
                    className="text-neutral-500 flex items-center gap-2 text-[11px] truncate opacity-70"
                  >
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span className="text-neutral-400 truncate">
                      {isSr ? s.logSr : s.logEn}
                    </span>
                  </div>
                ))}

                {/* Active current step */}
                <div className="pt-0.5 space-y-1">
                  <div className="text-neutral-200 font-semibold flex items-center gap-2 text-xs sm:text-[13px]">
                    <span className="text-emerald-400 font-bold shrink-0">&gt;</span>
                    <span className="text-white">
                      {isSr ? currentStage.labelSr : currentStage.labelEn}
                    </span>
                  </div>
                  <p className="text-emerald-400/90 text-[11px] sm:text-xs pl-4 flex items-center gap-1 leading-relaxed">
                    <span>
                      {isSr ? currentStage.detailSr : currentStage.detailEn}
                    </span>
                    <span className="inline-block w-1.5 h-3 bg-emerald-400 animate-pulse shrink-0 ml-0.5 shadow-[0_0_8px_#10b981]" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-500 pt-4 border-t border-white/5">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs">
              <span className="text-emerald-400 font-semibold font-mono">BEOGRAD, SRBIJA</span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="text-neutral-500 hidden sm:inline font-mono">
                44.7866° N, 20.4489° E
              </span>
              <span className="text-neutral-600 hidden md:inline">•</span>
              <span className="text-neutral-500 hidden md:inline font-mono">
                120Hz ACCEL
              </span>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleFinish();
              }}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 text-neutral-400 hover:text-emerald-300 transition-all cursor-pointer text-[11px] font-mono active:scale-95 shadow-sm"
              title={isSr ? "Preskoči učitavanje" : "Skip sequence"}
            >
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-[10px] text-neutral-200 font-mono group-hover:text-emerald-300 group-hover:border-emerald-500/30">
                ESC
              </kbd>
              <span>{isSr ? "PRESKOČI PROTOKOL" : "SKIP SEQUENCE"}</span>
            </button>
          </div>

          {/* Glowing bottom laser border as curtain lifts */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 via-teal-300 to-cyan-400 shadow-[0_0_25px_rgba(16,185,129,1)] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}