"use client";

import React, { createContext, useContext, useCallback, useRef, useSyncExternalStore } from "react";

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playClick: () => void;
  playOpen: () => void;
  playSuccess: () => void;
  playToggle: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio_sound_muted";

function getSnapshot(): boolean {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      return saved === "true";
    }
  } catch {
    // Ignore storage errors
  }
  // Default to muted for polite, non-intrusive UX
  return true;
}

function getServerSnapshot(): boolean {
  return true;
}

function subscribe(callback: () => void) {
  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      callback();
    }
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener("local-sound-change", callback);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("local-sound-change", callback);
  };
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const isMuted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!audioCtxRef.current) {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        audioCtxRef.current = new AudioCtxClass();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  const toggleMute = useCallback(() => {
    try {
      const current = getSnapshot();
      const next = !current;
      localStorage.setItem(STORAGE_KEY, String(next));
      window.dispatchEvent(new Event("local-sound-change"));
    } catch {
      // Ignore
    }
  }, []);

  // Subtle tactile click (15ms duration, 800Hz decaying to 200Hz)
  const playClick = useCallback(() => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const now = ctx.currentTime;
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.025);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.026);
    } catch {
      // Ignore audio synthesis errors
    }
  }, [isMuted, getAudioContext]);

  // Gentle ascending chime for opening Cmd+K modal (440Hz -> 880Hz)
  const playOpen = useCallback(() => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const now = ctx.currentTime;
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.085);
    } catch {
      // Ignore
    }
  }, [isMuted, getAudioContext]);

  // Pleasing two-tone confirmation for success / copy email (587Hz -> 880Hz)
  const playSuccess = useCallback(() => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      // Note 1 (D5 - 587Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(587.33, now);
      gain1.gain.setValueAtTime(0.035, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.065);

      // Note 2 (A5 - 880Hz)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(880, now + 0.05);
      gain2.gain.setValueAtTime(0.04, now + 0.05);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.05);
      osc2.stop(now + 0.165);
    } catch {
      // Ignore
    }
  }, [isMuted, getAudioContext]);

  // Crisp toggle tick
  const playToggle = useCallback(() => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const now = ctx.currentTime;
      osc.type = "sine";
      osc.frequency.setValueAtTime(620, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.015);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.016);
    } catch {
      // Ignore
    }
  }, [isMuted, getAudioContext]);

  return (
    <SoundContext.Provider
      value={{
        isMuted,
        toggleMute,
        playClick,
        playOpen,
        playSuccess,
        playToggle,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
