"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () => import("@/components/layout/CustomCursor"),
  { ssr: false }
);

const BackToTop = dynamic(
  () => import("@/components/ui/BackToTop"),
  { ssr: false }
);

const CommandPalette = dynamic(
  () => import("@/components/ui/CommandPalette"),
  { ssr: false }
);

function subscribePointer(callback: () => void) {
  const media = window.matchMedia("(hover: hover) and (pointer: fine)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getPointerSnapshot() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function getServerSnapshot() {
  return false;
}

export default function ClientEnhancements() {
  const isPointerFine = useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    getServerSnapshot
  );

  return (
    <>
      {isPointerFine && <CustomCursor />}
      <BackToTop />
      {isPointerFine && <CommandPalette />}
    </>
  );
}
