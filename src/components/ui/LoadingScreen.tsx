"use client";

import React, { useState, useEffect, useCallback, useSyncExternalStore, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useSound } from "@/context/SoundContext";

const STORAGE_KEY = "portfolio_intro_seen";

let replayListeners: Array<() => void> = [];

function subscribeIntro(callback: () => void) {
  replayListeners.push(callback);
  window.addEventListener("storage", callback);
  return () => {
    replayListeners = replayListeners.filter((cb) => cb !== callback);
    window.removeEventListener("storage", callback);
  };
}

function getClientSnapshot(): boolean {
  try {
    if (typeof window !== "undefined" && window.location.search.includes("loader=1")) {
      return false;
    }
    return sessionStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

// Render in initial SSR HTML so preloader is visible on frame 0 with zero flash of site
function getServerSnapshot(): boolean {
  return false;
}

export default function LoadingScreen() {
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
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage errors
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
    // 2.4s duration gives ample time to comfortably read each stage
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
        // Hold at 100% for 320ms so user clearly reads "SISTEM SPREMAN" before curtain lifts
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

  // Listen for manual replay requests (e.g. from Command Palette)
  useEffect(() => {
    const handleReplayEvent = () => {
      setProgress(0);
      setDismissed(false);
      setReplaying(true);
    };

    window.addEventListener("replay-loading-screen", handleReplayEvent);
    return () => {
      window.removeEventListener("replay-loading-screen", handleReplayEvent);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  // Telemetry stages (carefully paced so each stage is readable)
  const getStageInfo = () => {
    if (progress < 26) {
      return {
        phase: "[01/04]",
        title: isSr ? "POKRETANJE SISTEMSKOG JEZGRA" : "BOOTING SYSTEM KERNEL",
        detail: isSr
          ? "Inicijalizacija Next.js, React 19 i memorijskih registara..."
          : "Initializing Next.js, React 19 & runtime memory registers...",
      };
    }
    if (progress < 56) {
      return {
        phase: "[02/04]",
        title: isSr ? "SINHRONIZACIJA PROJEKATA & SERVISA" : "SYNCING PROJECTS & SERVICES",
        detail: isSr
          ? "Učitavanje inženjerskih radova, CarFlo platforme i Go servisa..."
          : "Fetching engineering archives, CarFlo ecosystem & Go services...",
      };
    }
    if (progress < 86) {
      return {
        phase: "[03/04]",
        title: isSr ? "KALIBRACIJA GRAFIKE & ZVUKA" : "CALIBRATING GRAPHICS & AUDIO",
        detail: isSr
          ? "Podešavanje hardverskog 120Hz ubrzanja i zvučnih efekata..."
          : "Configuring hardware 120Hz acceleration & spatial sound fx...",
      };
    }
    if (progress < 100) {
      return {
        phase: "[04/04]",
        title: isSr ? "SISTEM VERIFIKOVAN // 100% OK" : "SYSTEM VERIFIED // 100% OK",
        detail: isSr
          ? "Radni prostor Luke Đurića je u potpunosti spreman..."
          : "Luka Đurić engineering workstation is fully ready...",
      };
    }
    return {
      phase: "[ONLINE]",
      title: isSr ? "SISTEM ONLINE // PRISTUP ODOBREN" : "SYSTEM ONLINE // ACCESS GRANTED",
      detail: isSr
        ? "Sigurnosna provera uspešna. Dobrodošli u portfolio..."
        : "Security clearance verified. Welcome to portfolio...",
    };
  };

  const stage = getStageInfo();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="app-preloader-root"
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.9,
            ease: [0.77, 0, 0.175, 1],
          }}
          onClick={handleFinish}
          className="fixed inset-0 z-[100000] bg-[#070709] text-white flex flex-col justify-between p-6 sm:p-12 md:p-16 select-none overflow-hidden cursor-pointer"
          title={isSr ? "Klikni bilo gde za preskok" : "Click anywhere to skip"}
        >
          {/* Subtle Cyber Reticle Corners */}
          <div className="absolute top-5 left-5 w-4 h-4 border-t-2 border-l-2 border-emerald-500/30 pointer-events-none" />
          <div className="absolute top-5 right-5 w-4 h-4 border-t-2 border-r-2 border-emerald-500/30 pointer-events-none" />
          <div className="absolute bottom-5 left-5 w-4 h-4 border-b-2 border-l-2 border-emerald-500/30 pointer-events-none" />
          <div className="absolute bottom-5 right-5 w-4 h-4 border-b-2 border-r-2 border-emerald-500/30 pointer-events-none" />

          {/* Background Micro Dot Texture */}
          <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

          {/* Dynamic Ambient Center Radial Pulse */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none transition-all duration-700"
            style={{
              background: `radial-gradient(circle at center, rgba(16, 185, 129, ${
                0.05 + (progress / 100) * 0.08
              }) 0%, transparent 70%)`,
            }}
          />

          {/* TOP BAR */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-neutral-200 tracking-widest uppercase font-mono">
                LUKA ĐURIĆ
              </span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="text-neutral-500 hidden sm:inline tracking-wider font-mono">
                SYSTEM PROTOCOL v2.6
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold tracking-wider">
              <span className="text-neutral-500 font-normal">{isSr ? "FAZA" : "PHASE"}:</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-bold">
                {stage.phase}
              </span>
            </div>
          </div>

          {/* CENTER DISPLAY */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-7 max-w-2xl mx-auto w-full px-4 text-center">
            {/* Solo Leveling / Cyberpunk Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-widest uppercase font-semibold text-[11px] sm:text-xs">
                {progress === 100
                  ? isSr
                    ? "PRISTUP ODOBREN"
                    : "ACCESS GRANTED"
                  : isSr
                  ? "POKRETANJE DIGITALNOG RADNOG PROSTORA"
                  : "INITIALIZING DIGITAL WORKSPACE"}
              </span>
            </div>

            {/* Giant Futuristic Counter with Emerald Drop Shadow */}
            <div className="space-y-3">
              <div className="flex items-baseline justify-center gap-1 sm:gap-2">
                <span className="text-8xl sm:text-[9.5rem] md:text-[11.5rem] leading-none font-black font-mono tracking-tighter text-white tabular-nums drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]">
                  {progress < 10 ? `0${progress}` : progress}
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl font-mono text-emerald-400 font-extrabold">
                  %
                </span>
              </div>

              {/* Progress Line with Laser Pulse */}
              <div className="relative w-64 sm:w-80 md:w-96 h-2 bg-neutral-900 border border-white/10 rounded-full overflow-hidden mx-auto shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-400 rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Glowing Laser Head at the tip */}
                  <div className="absolute right-0 top-0 bottom-0 w-3 bg-white rounded-full shadow-[0_0_12px_#ffffff,0_0_20px_#10b981]" />
                </motion.div>
              </div>
            </div>

            {/* High-Tech Readable Telemetry Terminal Card */}
            <div className="w-full max-w-lg bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 text-left space-y-2 shadow-2xl transition-all duration-300 hover:border-emerald-500/30">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 border-b border-white/5 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">{stage.phase}</span>
                  <span className="text-neutral-200 font-semibold tracking-wide truncate max-w-[240px] sm:max-w-none">
                    {stage.title}
                  </span>
                </div>
                <span className="text-neutral-500 text-[10px] font-mono shrink-0">
                  {progress}%
                </span>
              </div>

              <p className="text-xs sm:text-sm font-mono text-neutral-300 font-light leading-relaxed flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold shrink-0">&gt;</span>
                <span>{stage.detail}</span>
                <span className="inline-block w-1.5 h-3.5 bg-emerald-400 animate-pulse ml-0.5 shrink-0" />
              </p>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-500 pt-4 border-t border-white/5">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-semibold font-mono">BEOGRAD, SRBIJA</span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="text-neutral-500 hidden sm:inline font-mono">
                44.7866° N, 20.4489° E
              </span>
            </div>

            <div className="flex items-center gap-2 text-neutral-400 text-[11px] font-mono">
              <span className="hidden sm:inline">
                {isSr ? "Klikni bilo gde ili pritisni" : "Click anywhere or press"}
              </span>
              <span className="sm:hidden">{isSr ? "Klikni za" : "Tap for"}</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-neutral-200 font-mono">
                ESC
              </kbd>
              <span>{isSr ? "preskok" : "skip"}</span>
            </div>
          </div>

          {/* Glowing bottom laser border as curtain lifts */}
          <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.9)] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
