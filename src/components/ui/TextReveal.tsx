"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className = "" }: TextRevealProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.3] flex flex-wrap gap-x-3 gap-y-2 ${
        isLight ? "text-neutral-500" : "text-neutral-600"
      } ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={`${i}-${theme}`}
            progress={scrollYProgress}
            range={[start, end]}
            isLight={isLight}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
  isLight,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  isLight: boolean;
}) {
  const mid = range[0] + (range[1] - range[0]) * 0.5;

  const opacity = useTransform(
    progress,
    range,
    isLight ? [0.28, 1] : [0.18, 1]
  );

  // In light mode: muted slate -> emerald highlight animation -> deep obsidian black
  // In dark mode: dim zinc -> emerald highlight animation -> crisp pure white
  const color = useTransform(
    progress,
    [range[0], mid, range[1]],
    isLight
      ? ["#94a3b8", "#059669", "#090a0f"]
      : ["#52525b", "#34d399", "#ffffff"]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="transition-colors inline-block select-none"
    >
      {children}
    </motion.span>
  );
}
