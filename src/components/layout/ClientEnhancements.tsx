"use client";

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

export default function ClientEnhancements() {
  return (
    <>
      <CustomCursor />
      <BackToTop />
      <CommandPalette />
    </>
  );
}
