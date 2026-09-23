import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import dynamic from "next/dynamic";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { ToastProvider } from "@/context/ToastContext";
import { SoundProvider } from "@/context/SoundContext";
import AmbientBackground from "@/components/ui/AmbientBackground";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

import ClientEnhancements from "@/components/layout/ClientEnhancements";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lukadjuric.dev"),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Luka Đurić",
    "Full-Stack Developer",
    "Web Application Developer",
    "React Native",
    "Next.js",
    "TypeScript",
    "Go",
    "Belgrade Developer",
    "UI/UX Designer",
    "Software Engineer",
  ],
  authors: [{ name: "Luka Đurić", url: "https://lukadjuric.dev" }],
  creator: "Luka Đurić",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/images/portfolio-v1.webp",
        width: 1200,
        height: 630,
        alt: "Luka Đurić — Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/assets/images/portfolio-v1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://lukadjuric.dev/#person",
      name: "Luka Đurić",
      jobTitle: "Full-Stack Developer & Product Craftsman",
      url: "https://lukadjuric.dev",
      image: "https://lukadjuric.dev/assets/images/portfolio-v1.webp",
      email: "mailto:lukadjuricdjurke@pm.me",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Belgrade",
        addressCountry: "Serbia",
      },
      sameAs: [
        siteConfig.socials.github,
        siteConfig.socials.linkedin,
        siteConfig.socials.instagram,
      ].filter(Boolean),
      knowsAbout: [
        "Full-Stack Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Go",
        "React Native",
        "Tailwind CSS",
        "PostgreSQL",
        "REST APIs",
        "UI/UX Design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://lukadjuric.dev/#website",
      url: "https://lukadjuric.dev",
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": "https://lukadjuric.dev/#person",
      },
      inLanguage: ["en", "sr"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('portfolio_theme');
                  if (t === 'light') {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#070709] text-[#f4f4f7] font-sans antialiased overflow-x-hidden selection:bg-emerald-500/30 selection:text-white"
      >
        <ThemeProvider>
          <LanguageProvider>
            <SoundProvider>
              <ToastProvider>
                <SmoothScrollProvider>
                  <ScrollProgressBar />
                  <AmbientBackground />
                  {children}
                  <ClientEnhancements />
                </SmoothScrollProvider>
              </ToastProvider>
            </SoundProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
