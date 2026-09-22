"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function CustomCursor() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only run on devices with fine pointer (mouse)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaQuery.matches || reducedMotionQuery.matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
        return;
      }

      const interactive = target.closest("a, button, [role='button'], input, textarea, select");
      if (interactive) {
        setCursorText("");
        setIsHovered(true);
        return;
      }

      setCursorText("");
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Outer subtle follower / pill */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorText ? 72 : isHovered ? 44 : 28,
          height: cursorText ? 34 : isHovered ? 44 : 28,
          backgroundColor: cursorText
            ? isLight
              ? "rgba(9, 10, 15, 0.95)"
              : "rgba(255, 255, 255, 0.95)"
            : isHovered
            ? "rgba(16, 185, 129, 0.18)"
            : isLight
            ? "rgba(0, 0, 0, 0.04)"
            : "rgba(255, 255, 255, 0.04)",
          borderColor: cursorText
            ? isLight
              ? "rgba(9, 10, 15, 1)"
              : "rgba(255, 255, 255, 1)"
            : isHovered
            ? "rgba(16, 185, 129, 0.5)"
            : isLight
            ? "rgba(0, 0, 0, 0.22)"
            : "rgba(255, 255, 255, 0.25)",
          borderWidth: cursorText ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
      >
        {cursorText && (
          <span
            className={`text-[10px] font-mono tracking-widest font-semibold uppercase ${
              isLight ? "text-white" : "text-neutral-950"
            }`}
          >
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center pinpoint dot */}
      {!cursorText && (
        <motion.div
          className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none ${
            isLight ? "bg-neutral-950" : "bg-white"
          }`}
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: isHovered ? 0 : 1,
            opacity: isHovered ? 0 : 0.9,
          }}
          transition={{ duration: 0.15 }}
        />
      )}
    </div>
  );
}
