"use client";

import React from "react";
import Script from "next/script";

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

  return (
    <>
      {/* Google Analytics (GA4) */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      )}

      {/* Plausible Analytics (Privacy-friendly, GDPR compliant) */}
      {plausibleDomain && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}

      {/* Umami Analytics (Self-hosted or cloud) */}
      {umamiWebsiteId && (
        <Script
          async
          defer
          data-website-id={umamiWebsiteId}
          src="https://cloud.umami.is/script.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
