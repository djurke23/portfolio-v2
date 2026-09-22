"use client";

import React from "react";
import { useSound } from "@/context/SoundContext";
import { useLanguage } from "@/context/LanguageContext";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundToggle({ className = "" }: { className?: string }) {
  const { isMuted, toggleMute, playToggle } = useSound();
  const { language } = useLanguage();
  const isSr = language === "sr";

  const handleClick = () => {
    toggleMute();
    // Play a preview tick when unmuting
    if (isMuted) {
      setTimeout(() => playToggle(), 20);
    }
  };

  const label = isMuted
    ? isSr
      ? "Zvuk: Utišan"
      : "Sound: Muted"
    : isSr
    ? "Zvuk: Uključen"
    : "Sound: Active";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      title={label}
      className={`p-2 rounded-full transition-all active:scale-90 ${
        isMuted
          ? "text-neutral-500 hover:text-neutral-300 hover:bg-white/5"
          : "text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10"
      } ${className}`}
      data-cursor="SOUND"
    >
      {isMuted ? (
        <VolumeX className="w-4 h-4 transition-transform duration-200" />
      ) : (
        <Volume2 className="w-4 h-4 transition-transform duration-200" />
      )}
    </button>
  );
}
