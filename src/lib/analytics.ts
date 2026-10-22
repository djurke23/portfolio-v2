/**
 * Unified Analytics & Event Tracking
 * Supports Google Analytics (GA4), Plausible, and Umami out of the box.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
    umami?: {
      track: (eventName: string, data?: Record<string, unknown>) => void;
    };
  }
}

export type AnalyticsEvent =
  | "download_cv"
  | "copy_email"
  | "contact_submit"
  | "project_click"
  | "sound_toggle"
  | "theme_toggle"
  | "language_change"
  | "search_open"
  | "external_link_click";

export function trackEvent(
  eventName: AnalyticsEvent | string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;

  // 1. Google Analytics 4
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // 2. Plausible
  if (typeof window.plausible === "function") {
    window.plausible(eventName, { props: params });
  }

  // 3. Umami
  if (window.umami && typeof window.umami.track === "function") {
    window.umami.track(eventName, params);
  }

  // Development logger
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event] %c${eventName}`, "color: #10b981; font-weight: bold;", params ?? {});
  }
}

// Convenient helper functions
export const trackCvDownload = (source: string) => {
  trackEvent("download_cv", { source, file: "Luka_Djuric_CV.pdf" });
};

export const trackEmailCopy = (source: string) => {
  trackEvent("copy_email", { source, email: "lukadjuricdjurke@pm.me" });
};

export const trackContactSubmit = (success: boolean, serviceCount?: number) => {
  trackEvent("contact_submit", { status: success ? "success" : "error", serviceCount });
};

export const trackProjectClick = (projectId: string, destination: string) => {
  trackEvent("project_click", { projectId, destination });
};

export const trackSearchOpen = (source: string) => {
  trackEvent("search_open", { source });
};
