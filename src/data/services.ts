export interface ServiceItem {
  id: string;
  icon: "code" | "paint" | "rocket" | "cart" | "mobile" | "search";
  title: {
    en: string;
    sr: string;
  };
  description: {
    en: string;
    sr: string;
  };
  features: {
    en: string[];
    sr: string[];
  };
}

export const services: ServiceItem[] = [
  {
    id: "web-dev",
    icon: "code",
    title: {
      en: "Web Development",
      sr: "Web Development",
    },
    description: {
      en: "Bespoke, high-performance web solutions built from scratch. From responsive websites to complex, cloud-backed web applications.",
      sr: "Izrada prilagođenih veb rešenja po vašoj meri. Od modernog responzivnog dizajna do kompleksnih veb aplikacija i SaaS platformi.",
    },
    features: {
      en: [
        "Responsive & accessible web design",
        "Modern frontend (React, Next.js, TypeScript)",
        "Resilient backend architectures & APIs",
        "Performance optimization & sub-second loading",
      ],
      sr: [
        "Responzivni i pristupačni veb dizajn",
        "Napredni front-end (React, Next.js, TypeScript)",
        "Pouzdana back-end arhitektura i brzi API-ji",
        "Optimizacija performansi i učitavanje ispod sekunde",
      ],
    },
  },
  {
    id: "ui-ux",
    icon: "paint",
    title: {
      en: "UI/UX Design & Systems",
      sr: "UI/UX Dizajn & Sistemi",
    },
    description: {
      en: "Crafting intuitive, human-centered interfaces with strict typography, ergonomic layouts, and scalable design token systems in Figma.",
      sr: "Kreiranje intuitivnih i vizuelno upečatljivih korisničkih interfejsa sa pedantnom tipografijom, ergonomskim rasporedom i Figma dizajn sistemima.",
    },
    features: {
      en: [
        "User research & workflow mapping",
        "Wireframing & clickable Figma prototypes",
        "Design system creation (tokens, components)",
        "Usability testing & ergonomics refinement",
      ],
      sr: [
        "Istraživanje korisničkog toka i potreba",
        "Wireframing i klikabilni Figma prototipovi",
        "Izrada dizajn sistema (tokeni, komponente)",
        "Testiranje upotrebljivosti i ergonomije",
      ],
    },
  },
  {
    id: "mobile-apps",
    icon: "mobile",
    title: {
      en: "Mobile App Development",
      sr: "Razvoj Mobilnih Aplikacija",
    },
    description: {
      en: "Building robust cross-platform mobile apps for iOS and Android with smooth 60 FPS animations and native capabilities.",
      sr: "Izrada robusnih i skalabilnih mobilnih aplikacija za iOS i Android platforme uz fluidne 60 FPS animacije i nativne mogućnosti.",
    },
    features: {
      en: [
        "iOS App Store release & compliance",
        "React Native & Capacitor architecture",
        "In-app subscriptions & RevenueCat billing",
        "Offline-tolerant data synchronization",
      ],
      sr: [
        "Objavljivanje i sertifikacija na Apple App Store",
        "React Native i Capacitor arhitektura",
        "In-app pretplate i integracija RevenueCat naplate",
        "Rad bez interneta i automatska sinhronizacija",
      ],
    },
  },
  {
    id: "ecommerce",
    icon: "cart",
    title: {
      en: "E-Commerce Solutions",
      sr: "E-commerce Rešenja",
    },
    description: {
      en: "Turnkey digital storefronts designed for high conversions, effortless inventory management, and secure payment integrations.",
      sr: "Prilagođena e-commerce rešenja usmerena na visoke konverzije, intuitivno upravljanje zalihama i bezbednu integraciju platnih kartica.",
    },
    features: {
      en: [
        "Custom online store architecture",
        "Seamless payment gateway integration",
        "Real-time cart & inventory management",
        "Conversion rate optimization (CRO)",
      ],
      sr: [
        "Arhitektura online prodavnica po meri brenda",
        "Integracija bezbednih platnih sistema i kartica",
        "Upravljanje korpom, narudžbinama i zalihama",
        "Optimizacija konverzija i brzine plaćanja",
      ],
    },
  },
  {
    id: "seo",
    icon: "search",
    title: {
      en: "Technical & On-Page SEO",
      sr: "SEO Optimizacija",
    },
    description: {
      en: "Elevating your search ranking and organic footprint through structured metadata, schema markup, and Core Web Vitals perfection.",
      sr: "Poboljšanje vidljivosti i organskog saobraćaja kroz tehničku optimizaciju brzine, struktuirane metapodatke i savršene Core Web Vitals ocene.",
    },
    features: {
      en: [
        "Core Web Vitals & speed tuning (LCP, INP, CLS)",
        "Structured Schema.org JSON-LD data",
        "Keyword architecture & semantic tags",
        "Mobile-first search indexing audits",
      ],
      sr: [
        "Podešavanje brzine i Core Web Vitals (LCP, INP)",
        "Strukturirani Schema.org JSON-LD metapodaci",
        "Semantička HTML struktura i ključne reči",
        "Tehnički audit za mobilno indeksiranje",
      ],
    },
  },
  {
    id: "digital-marketing",
    icon: "rocket",
    title: {
      en: "Digital Growth & Analytics",
      sr: "Digitalni Rast & Analitika",
    },
    description: {
      en: "Harnessing analytics, event tracking, and data-driven insights to maximize marketing ROI and user acquisition.",
      sr: "Korišćenje analitičkih alata i praćenja događaja radi maksimalne efikasnosti marketinških kampanja i akvizicije kupaca.",
    },
    features: {
      en: [
        "Event tracking & funnel analytics setup",
        "Landing page conversion optimization",
        "Social media technical integration",
        "Automated inquiry & CRM routing",
      ],
      sr: [
        "Postavljanje analitike i praćenja konverzija",
        "Optimizacija prodajnih 'landing' stranica",
        "Tehnička integracija društvenih mreža",
        "Automatizacija upita i CRM rutiranja",
      ],
    },
  },
];
