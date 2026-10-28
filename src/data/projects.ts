import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "the-system-awakening",
    title: "The System: Awakening",
    tagline: "Gamified self-improvement ecosystem inspired by the Solo Leveling HUD — closed beta intake with full web & mobile apps in development.",
    description:
      "A dark-futuristic, gamified productivity and habit-tracking ecosystem inspired by Solo Leveling. Currently deployed as the Founder Hunter registration terminal to recruit and onboard the first 100 closed-beta testers, with a full web platform and native iOS & Android mobile applications currently in active development.",
    category: "web-app",
    categoryLabel: "Web & Mobile Ecosystem",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Mobile App (iOS/Android)", "Cyberpunk HUD"],
    image: "/assets/images/the-system-awakening.webp",
    featured: true,
    tier: 1,
    year: "2025 — Present",
    liveUrl: "https://www.thesystemawakening.com",
    caseStudy: {
      overview:
        "The System: Awakening is an ambitious gamified lifestyle and habit-tracking ecosystem engineered to transform real-world self-improvement (fitness, academics, coding, and discipline) into an RPG-style Hunter leveling experience inspired by Solo Leveling. The initial phase is live as the 'Founder Hunter Application' — a custom terminal portal capturing beta cohort qualifications, platform preferences, and daily commitment levels ahead of the upcoming web platform and cross-platform mobile release.",
      role: "Lead Architect & Full-Stack Developer",
      timeline: "2025 — Present",
      problem:
        "Most habit-tracking and productivity apps feel sterile, uninspiring, or tedious to maintain, resulting in rapid user drop-off. Furthermore, launching a complex cross-platform system requires rigorous early validation and community alignment from dedicated power users before rolling out full cloud infrastructure and mobile builds.",
      solution:
        "Engineered an immersive, cyberpunk-inspired terminal onboarding portal on Vercel Edge with zero latency, retro-futuristic sound effects, and real-time form validation to vet Founder Hunters. Architected the upcoming multiplatform system combining a Next.js web application with cross-platform mobile apps (iOS & Android) featuring daily quest loops, stat attributes (STR, AGI, INT), hunter rank tiers, and Discord community integration.",
      architecture: {
        frontend:
          "Next.js & React with Tailwind CSS, custom CRT scanline cybernetic HUD styling, responsive glassmorphic cards, and interactive audio feedback.",
        backend:
          "Serverless Edge API endpoints with strict input sanitization, rate limiting, and automated webhook dispatching for candidate intake.",
        database:
          "High-throughput serverless relational data store structured for candidate profiling, cohort categorisation, and upcoming player state sync.",
        apis: [
          "Vercel Edge Functions",
          "Discord Webhook Integration",
          "Web Audio API",
          "Vercel Analytics",
        ],
        deployment:
          "Vercel Edge Network with global DNS routing and instant SSL via custom domain (thesystemawakening.com).",
        storage:
          "Optimized vector assets and lightweight cyberpunk visual components with zero third-party script bloat.",
      },
      keyFeatures: [
        {
          title: "Founder Hunter Selection Protocol",
          desc: "Custom-built qualification portal capturing device targets (iOS/Android), discipline paths (Gym, Study, Work, Discipline), and activity tiers.",
        },
        {
          title: "Immersive Cyberpunk Terminal HUD",
          desc: "High-contrast neon cyan aesthetic with CRT scanlines, terminal diagnostics, audio effects, and responsive mobile-first controls.",
        },
        {
          title: "Upcoming Multiplatform Ecosystem",
          desc: "Full web portal and native iOS & Android mobile apps currently in active development, bringing real-life RPG stat progression.",
        },
        {
          title: "Automated Community Pipeline",
          desc: "Seamless triage pipeline connecting applicant data directly to Discord and communication channels for rapid closed-beta onboarding.",
        },
      ],
      challenges: [
        {
          challenge: "Creating an Engaging Lore-Driven Experience with Zero Performance Penalties",
          solution:
            "Authored lightweight CSS scanlines and modular styling instead of heavy canvas or WebGL libraries, keeping initial load sub-second even on mobile networks.",
        },
        {
          challenge: "Architecting Cross-Platform Data Sync Across Web and Upcoming Mobile Apps",
          solution:
            "Structured an extensible schema for hunter profiles, daily quest completion states, and offline-tolerant synchronization designed for the upcoming mobile builds.",
        },
      ],
      outcomes: [
        "Live production onboarding terminal deployed on thesystemawakening.com.",
        "Successfully gathering qualified closed-beta candidates across iOS and Android ecosystems.",
        "Active engineering underway on the full web application and mobile companion apps.",
      ],
    },
  },
  {
    id: "carflo",
    title: "CarFlo Ecosystem",
    tagline: "The ultimate digital vehicle logbook and expense management ecosystem.",
    description:
      "A complete vehicle expense and lifecycle tracking platform available on the iOS App Store. Designed to let motorists effortlessly log fuel stops, recurring maintenance, part replacements, service intervals, and trips with automated analytics.",
    category: "mobile-app",
    categoryLabel: "Mobile & Cloud Platform",
    technologies: ["React Native", "TypeScript", "Capacitor", "Supabase", "PostgreSQL", "RevenueCat", "iOS"],
    image: "/assets/images/carflo-mobile.webp",
    featured: true,
    tier: 1,
    year: "2024 — Present",
    appStoreUrl: "https://apps.apple.com/rs/app/carflo-car-expense-tracker/id6778638970",
    liveUrl: "https://carflo.app",
    caseStudy: {
      overview:
        "CarFlo is an end-to-end automotive utility engineered for car enthusiasts and daily drivers alike. It solves the friction of tracking vehicle costs, maintenance history, and fuel efficiency metrics in one unified, offline-tolerant mobile interface.",
      role: "Lead Full-Stack & Mobile Developer / UI/UX Designer",
      timeline: "2024",
      problem:
        "Most vehicle tracking apps are either cluttered with intrusive ads, suffer from clunky spreadsheet-like interfaces, or lack dependable cloud synchronization. Drivers needed a rapid entry flow (e.g. at a gas station pump) that syncs reliably even in low-connectivity areas.",
      solution:
        "Designed and engineered a cross-platform mobile app leveraging modern TypeScript, Capacitor, and Supabase. Crafted a native-feeling dark UI optimized for single-thumb interactions, coupled with secure authentication and native iOS subscription integration via RevenueCat.",
      architecture: {
        frontend: "React Native & Capacitor with custom native bridges and Tailwind-style design tokens.",
        backend: "Supabase Edge Functions and Row-Level Security (RLS) policies for encrypted user data isolation.",
        database: "PostgreSQL hosted on Supabase with optimized indexes on vehicle IDs and timestamped log entries.",
        apis: ["Supabase Auth & Database REST API", "RevenueCat Purchases SDK for App Store in-app billing"],
        deployment: "Apple App Store (iOS Native Build via Xcode CLI and TestFlight distribution).",
        storage: "Cloud object storage for vehicle photo receipts and service documentation.",
      },
      keyFeatures: [
        {
          title: "Rapid Log Entry Flow",
          desc: "Sub-3-second entry for fuel fill-ups, calculating MPG/L-per-100km on the fly.",
        },
        {
          title: "Predictive Service Reminders",
          desc: "Automated mileage-based and time-based alerts for oil changes, tire rotations, and inspections.",
        },
        {
          title: "Comprehensive Expense Breakdown",
          desc: "Interactive financial charting breaking down total cost of ownership over custom intervals.",
        },
        {
          title: "Cloud Backup & Multi-Vehicle Profiles",
          desc: "Manage multiple cars under a single account with instantaneous real-time sync.",
        },
      ],
      challenges: [
        {
          challenge: "Handling Offline Receipt and Mileage Entry at Gas Stations",
          solution:
            "Implemented an optimistic UI caching layer that queues local writes and synchronizes atomically with Supabase once network connectivity is re-established.",
        },
        {
          challenge: "Native iOS StoreKit & Subscription Entitlements",
          solution:
            "Integrated RevenueCat to abstract StoreKit 2 complexities, managing receipt verification, trial periods, and tier gating cleanly on both device and backend.",
        },
      ],
      outcomes: [
        "Published and actively maintained on the official Apple App Store.",
        "Smooth 60 FPS transitions and native iOS design language adhering to Apple Human Interface Guidelines.",
        "Zero reported data loss incidents across cloud synchronization events.",
      ],
    },
  },
  {
    id: "fluffyflowers",
    title: "FluffyFlowers.rs",
    tagline: "Boutique e-commerce storefront for handcrafted wire plush flowers.",
    description:
      "A tailored e-commerce experience crafted for a unique artisan brand. Features a custom product catalog, shopping bag workflow, interactive gift customization, and high-performance image loading.",
    category: "web-app",
    categoryLabel: "E-Commerce Web App",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "JSON State", "Web APIs"],
    image: "/assets/images/fluffyflowers.webp",
    featured: true,
    tier: 1,
    year: "2024",
    liveUrl: "https://fluffyflowers.rs",
    caseStudy: {
      overview:
        "FluffyFlowers.rs is an online boutique shop dedicated to handcrafted plush wire florals. The client required a bespoke digital storefront reflecting their playful and artisanal identity without the slow overhead and bloated monthly costs of generic e-commerce templates.",
      role: "Solo Full-Stack Developer & UI/UX Designer",
      timeline: "2024",
      problem:
        "Off-the-shelf platforms like Shopify or WooCommerce introduced heavy client-side scripts, sluggish mobile performance, and generic templates that failed to evoke the warmth and craft of handmade wire flowers.",
      solution:
        "Engineered an ultra-fast, modern React and TypeScript application built with Vite and Tailwind CSS. Structured a modular product inventory system with seamless client-side cart persistence and intuitive order routing.",
      architecture: {
        frontend: "React 18 with TypeScript, Vite bundling, Tailwind CSS, and localized micro-interactions.",
        backend: "Headless order processing and customer inquiries routed via validated web endpoints.",
        database: "Structured JSON schema model for fast catalog querying and dynamic filtering.",
        deployment: "Edge static hosting with global CDN caching and automated continuous deployment.",
      },
      keyFeatures: [
        {
          title: "Visual Product Showcase",
          desc: "High-resolution picture zoom, gallery views, and variation selectors (colors, stem counts).",
        },
        {
          title: "Instantaneous Cart State",
          desc: "Frictionless slide-out drawer cart with local state persistence across user sessions.",
        },
        {
          title: "Mobile-First Ordering Flow",
          desc: "Engineered specifically for smartphone shoppers coming directly from Instagram campaigns.",
        },
      ],
      challenges: [
        {
          challenge: "Mobile Image Performance with High-Res Product Photos",
          solution:
            "Implemented next-gen image compression, responsive source sets, and lazy loading to keep initial load times under 1 second on cellular networks.",
        },
        {
          challenge: "Bespoke Brand Styling Without CSS Bloat",
          solution:
            "Authored a custom Tailwind design token system encapsulating typography, pastel palettes, and smooth border transitions with zero unused CSS in production.",
        },
      ],
      outcomes: [
        "Delivered a 100/100 Lighthouse performance rating on desktop and >95 on mobile.",
        "Successful direct sales channel launch with zero operational downtime.",
      ],
    },
  },
  {
    id: "sunshine",
    title: "SUNSHINE — Luxury Spa & Massage",
    tagline: "High-conversion 4-language Jamstack web platform with headless Sanity CMS and 100/100 Core Web Vitals.",
    description:
      "A luxury, multilingual (4 locales: SR, EN, RU, TR) Jamstack web platform engineered for an artisanal massage & wellness studio in Belgrade. Built on Next.js 15, React 19, Sanity Headless CMS, and Tailwind CSS v4, featuring 119+ SSG pre-rendered pages, an interactive Treatment Finder quiz, dynamic duration-based pricing, and full Schema.org structured SEO.",
    category: "website",
    categoryLabel: "Jamstack & Headless CMS",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Sanity CMS",
      "Tailwind CSS v4",
      "next-intl",
      "Framer Motion",
      "Resend",
    ],
    image: "/assets/images/sunshine.webp",
    featured: true,
    tier: 1,
    year: "2024 — 2025",
    liveUrl: "https://sunshinesalonzamasazu.rs",
    caseStudy: {
      overview:
        "SUNSHINE is a premier luxury massage and wellness studio based in Belgrade. The platform was engineered as an ultra-fast, 4-language Jamstack web application optimized for maximum conversion, sub-second load times (100/100 Core Web Vitals), and dominant local SEO rankings. It features 119+ statically pre-rendered pages, an interactive 'Treatment Finder' recommendation quiz, dynamic duration-based pricing calculators, and a self-service Sanity CMS Studio directly embedded at /studio.",
      role: "Lead Full-Stack Engineer & UI/UX Designer",
      timeline: "2024 — 2025",
      problem:
        "Traditional spa websites suffer from sluggish WordPress templates, confusing pricing tables, lack of multilingual accessibility for foreign diplomats and tourists in Belgrade, and reliance on manual developer intervention for every single price or service tweak.",
      solution:
        "Architected a cutting-edge Jamstack application with Next.js 15 App Router, React 19, and Tailwind CSS v4. Integrated next-intl v4 across 4 languages with subpath routing and full Schema.org JSON-LD structured data. Deployed Sanity CMS v3 with an embedded Studio on /studio so the salon team can manage treatments, pricing, and blog content independently, while Next.js Server Actions and Resend handle instant lead delivery without external backend servers.",
      architecture: {
        frontend:
          "Next.js 15 (App Router with React Server Components), React 19, TypeScript 5.7+, Tailwind CSS v4, Framer Motion 12, Lucide React.",
        backend:
          "Next.js Server Actions ('use server') with robust server-side schema validation and anti-spam protection.",
        database:
          "Sanity Headless CMS v3 with GROQ content schemas, PortableText rich text rendering, and embedded Sanity Studio (/studio).",
        apis: [
          "Sanity CMS Content Lake API",
          "Resend Transactional Email API",
          "next-intl v4 Localization Engine",
        ],
        deployment:
          "Vercel Edge Network with automated CI/CD pipeline, Edge Middleware localization, and global CDN caching.",
        storage:
          "Cloud-hosted asset pipeline with automatic next/image conversion to Next-gen AVIF and WebP formats.",
      },
      keyFeatures: [
        {
          title: "119+ SSG Pre-Rendered Pages",
          desc: "Statically pre-rendered routes via generateStaticParams ensuring instantaneous page navigation and zero server load.",
        },
        {
          title: "Quad-Language i18n Architecture",
          desc: "Complete localization across Serbian, English, Russian, and Turkish via next-intl v4 with localized routes and dynamic hreflang tags.",
        },
        {
          title: "Interactive 'Treatment Finder' Quiz",
          desc: "Custom client-side diagnostic component matching user goals (stress relief, back pain, sports recovery) to ideal therapeutic sessions.",
        },
        {
          title: "Dynamic Duration-Based Pricing",
          desc: "Interactive category filtering and on-the-fly price computation across 30, 60, 90, and 120-minute session intervals.",
        },
        {
          title: "Embedded Sanity Studio CMS",
          desc: "Native /studio dashboard enabling the client to autonomously update services, pricing tiers, and publish multilingual blog posts.",
        },
        {
          title: "Exhaustive Schema.org JSON-LD SEO",
          desc: "Rich structured data for LocalBusiness/DaySpa, Service catalog, FAQPage, Article, and BreadcrumbList for top Google SERP visibility.",
        },
      ],
      challenges: [
        {
          challenge: "Scalable Multi-Locale Static Generation with Headless CMS",
          solution:
            "Harmonized next-intl routing with Sanity GROQ queries inside generateStaticParams, compiling 119+ localized pages statically while maintaining on-demand ISR revalidation on CMS publish.",
        },
        {
          challenge: "Sub-Second LCP & Zero CLS on High-Resolution Visual Assets",
          solution:
            "Implemented Tailwind CSS v4's CSS-first engine, localized font preloading, and dynamic AVIF/WebP image transforms via Next.js and Vercel Edge caching to achieve a flat 100/100 Core Web Vitals rating.",
        },
      ],
      outcomes: [
        "Achieved 100/100 Core Web Vitals & Lighthouse score across mobile and desktop devices.",
        "119+ statically generated routes serving zero-latency content across 4 languages (SR, EN, RU, TR).",
        "Eliminated developer maintenance overhead by empowering the salon to manage treatments, prices, and articles via Sanity Studio.",
        "Automated client booking inquiries routed straight to the salon management in real-time via Resend API and Server Actions.",
      ],
    },
  },
  {
    id: "carflo-web",
    title: "carFlo Web Platform",
    tagline: "Modern SaaS landing page, interactive fuel calculator & bilingual web platform.",
    description:
      "An ultra-fast, zero-dependency marketing website and interactive tool suite built for the carFlo automotive logbook app. Engineered with semantic HTML5, modular CSS3, vanilla ES6+, custom client-side i18n engine (EN/SR), real-time fuel calculator, and verified digital service book modal.",
    category: "website",
    categoryLabel: "SaaS Landing & Web Platform",
    technologies: [
      "Semantic HTML5",
      "Modular CSS3",
      "Vanilla JS (ES6+)",
      "i18n Engine",
      "Schema.org",
      "Lucide Icons",
    ],
    image: "/assets/images/carflo-web.webp",
    featured: false,
    tier: 2,
    year: "2024 — Present",
    liveUrl: "https://carflo.app",
    githubUrl: "https://github.com/djurke23/CarFlo",
    caseStudy: {
      overview:
        "carFlo is a modern iOS/Android automotive utility for digital expense tracking, verified service logs, real-world fuel consumption analytics, and 1-tap SMS parking in Serbia. The goal of the web platform was to build an ultra-fast, aesthetically pristine, high-converting landing page that demonstrates product value, establishes trust, hosts interactive browser utilities, and offers seamless bilingual support (EN/SR).",
      role: "Lead Frontend Developer & UI/UX Designer",
      timeline: "2024",
      problem:
        "Most modern SaaS landing pages rely on bloated JavaScript frameworks (React/Vue/Webpack bundles), leading to slow initial paint times on mobile cellular networks, heavy runtime dependencies, and poor conversion. Additionally, users needed interactive vehicle utilities (such as fuel cost calculations and verified digital service book previews) directly in the browser without downloading the app first.",
      solution:
        "Engineered a zero-dependency, pure vanilla frontend architecture leveraging Semantic HTML5, modular CSS3 custom properties, and ES6+ JavaScript. Designed a cohesive design system with dark/light themes, custom client-side i18n engine without page refreshes, and interactive browser tools while achieving perfect 100/100 Core Web Vitals.",
      architecture: {
        frontend:
          "Semantic HTML5 (W3C validated), Modular CSS3 (Custom Properties & Glassmorphism), Vanilla JavaScript (ES6+), Satoshi variable typography.",
        backend:
          "Zero-framework static edge architecture; client-side localStorage state persistence and localized parameter routing.",
        deployment:
          "GitHub Pages with custom domain DNS routing (carflo.app) and Cloudflare edge CDN caching.",
        storage:
          "Optimized SVG vector asset pipeline and modern WebP imagery with inline critical CSS.",
        apis: [
          "Custom Client-Side i18n Engine",
          "Interactive Fuel Cost Calculation Engine",
          "Schema.org JSON-LD (MobileApplication, FAQPage)",
        ],
      },
      keyFeatures: [
        {
          title: "Proprietary Client-Side i18n Engine",
          desc: "Instantaneous EN/SR switching via data-i18n attributes and in-memory translation dictionaries without page reloads, persisting locale in localStorage.",
        },
        {
          title: "Interactive Smart Fuel Cost Calculator",
          desc: "Live calculation of 100km, monthly, and yearly driving costs with quick presets (Eurodiesel, Petrol, Hybrid/EV) and adaptive currency (RSD/EUR).",
        },
        {
          title: "Verified Digital Service Book Modal",
          desc: "Interactive preview demonstrating certified vehicle maintenance history (VIN, mileage, service stamp) designed to boost vehicle resale value.",
        },
        {
          title: "Cross-Platform Flag Engineering",
          desc: "Bypassed Windows OS emoji flag rendering limitations by crafting custom 21x14px SVG badges (Serbian coat of arms & Union Jack).",
        },
        {
          title: "Native Dark / Light Theme Engine",
          desc: "Auto-detection of prefers-color-scheme with manual toggle, localStorage persistence, and zero flash of unstyled content (FOUC).",
        },
        {
          title: "Full Legal & Changelog Subpages",
          desc: "Independent subpages built in the same design system: changelog.html, privacy.html, terms.html, and account deletion compliance.",
        },
      ],
      challenges: [
        {
          challenge: "Windows OS Emoji Flag Rendering Inconsistency",
          solution:
            "Windows browsers fail to render country flag emojis in fonts (displaying box letters like RS/GB). Solved by engineering custom pixel-aligned SVG flag assets ensuring razor-sharp fidelity across Windows, macOS, iOS, Android, and Linux.",
        },
        {
          challenge: "Sub-Second Load Times with Zero Framework Overhead",
          solution:
            "Eliminated client-side bundling overhead completely with vanilla ES6+ modules and scoped CSS variables, achieving sub-second LCP and a perfect 0.00 CLS across all viewports.",
        },
      ],
      outcomes: [
        "Flawless 100/100 Core Web Vitals across mobile and desktop devices with sub-second LCP and 0.00 CLS.",
        "Zero-framework architecture resulting in an ultralight footprint and instantaneous interface transitions.",
        "Substantially higher App Store click-through conversion rates driven by interactive in-browser calculators and verified trust badges.",
      ],
    },
  },
  {
    id: "rev-and-chill",
    title: "Rev&Chill",
    tagline: "Automotive event registration system and vehicle showcase platform.",
    description:
      "A full-stack registration and moderation system engineered for enthusiast car meets. Enables vehicle owners to submit high-resolution builds, event organizers to curate attendee rosters, and spectators to browse confirmed builds.",
    category: "web-app",
    categoryLabel: "Full-Stack Web App",
    technologies: ["Next.js", "TypeScript", "Cloudflare D1", "Cloudflare R2", "Tailwind CSS", "Server Actions"],
    image: "/assets/images/rev-and-chill.webp",
    featured: false,
    tier: 2,
    year: "2024 — Present",
    liveUrl: "https://rev-and-chill-3.vercel.app",
    caseStudy: {
      overview:
        "Rev&Chill manages event applications, vehicle approvals, and public showcases for enthusiast car meets. It gives organizers a streamlined dashboard to review candidate vehicles while giving drivers a pristine platform to showcase their modifications.",
      role: "Full-Stack Engineer & Architect",
      timeline: "2024",
      problem:
        "Car meet organizers historically handled registrations via unorganized Google Forms or direct Instagram DMs, causing lost photo attachments, no public roster preview, and chaos during entrance verification.",
      solution:
        "Built a dedicated Next.js App Router application backed by Cloudflare's serverless edge infrastructure. Drivers submit vehicle specs and multiple photos, which are processed and uploaded straight to Cloudflare R2 object storage with relational metadata saved in Cloudflare D1 SQLite.",
      architecture: {
        frontend: "Next.js (App Router) with React Server Components and modern Tailwind CSS design.",
        backend: "Next.js Server Actions and API Route Handlers running on Vercel edge/serverless runtimes.",
        database: "Cloudflare D1 (serverless relational SQLite distributed at the network edge).",
        storage: "Cloudflare R2 (S3-compatible zero-egress bucket for vehicle photos).",
        deployment: "Vercel + Cloudflare edge infrastructure.",
      },
      keyFeatures: [
        {
          title: "Multi-Image Cloud Pipeline",
          desc: "Client-side image resizing before uploading to Cloudflare R2, cutting bandwidth and latency.",
        },
        {
          title: "Organizer Moderation Dashboard",
          desc: "One-click Accept / Reject / Waitlist controls updating driver status in real-time.",
        },
        {
          title: "Public Event Roster Gallery",
          desc: "Filterable gallery of accepted vehicles with detailed engine and modification breakdowns.",
        },
      ],
      challenges: [
        {
          challenge: "Zero-Cost High-Resolution Image Hosting",
          solution:
            "Utilized Cloudflare R2's zero-egress cost model with custom worker routing to serve optimized vehicle photography at scale without storage budget spikes.",
        },
        {
          challenge: "Edge SQLite Schema Migrations with Cloudflare D1",
          solution:
            "Designed a clean relational schema (Users, Events, Registrations, VehicleImages) using idempotent migration scripts tested against local Wrangler dev runners.",
        },
      ],
      outcomes: [
        "Centralized registration platform handling high-traffic surges when event signups open.",
        "Sub-100ms database response times across European locations thanks to edge SQLite placement.",
      ],
    },
  },
  {
    id: "bgdcars",
    title: "BGDCARS Detailing",
    tagline: "High-end website and service presentation for a premium automotive detailing studio.",
    description:
      "A custom-built, responsive website showcasing ceramic coatings, paint correction, and interior restoration services for luxury vehicles in Belgrade.",
    category: "website",
    categoryLabel: "Commercial Website",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO"],
    image: "/assets/images/bgdcars.webp",
    featured: false,
    tier: 2,
    year: "2023",
    liveUrl: "https://djurke23.github.io/bgdcarsdetailing/",
    githubUrl: "https://github.com/djurke23/bgdcarsdetailing",
  },
  {
    id: "inno-build",
    title: "Inno Build Group",
    tagline: "Corporate showcase for an apartment renovation and interior engineering firm.",
    description:
      "A clean, architectural web presence showcasing residential renovation portfolios, before/after transformations, and client consultation funnels.",
    category: "website",
    categoryLabel: "Corporate Website",
    technologies: ["HTML5", "CSS3", "JavaScript", "Typography", "UI/UX"],
    image: "/assets/images/inno-build.webp",
    featured: false,
    tier: 2,
    year: "2023",
    liveUrl: "https://djurke23.github.io/Inno-Build-Group/",
    githubUrl: "https://github.com/djurke23/Inno-Build-Group",
  },
  {
    id: "monster-gym",
    title: "Monster Gym",
    tagline: "Energetic fitness portal with membership tiers and facility showcases.",
    description:
      "Modern fitness center website designed with high-contrast typography, workout equipment overviews, trainer profiles, and membership information.",
    category: "website",
    categoryLabel: "Gym & Fitness Website",
    technologies: ["WordPress", "HTML5", "CSS3", "CMS Architecture"],
    image: "/assets/images/monster-gym.webp",
    featured: false,
    tier: 2,
    year: "2023",
    liveUrl: "https://djurke23.github.io/monster-gym/",
    githubUrl: "https://github.com/djurke23/monster-gym",
  },
  {
    id: "dental-plus",
    title: "Dental Plus",
    tagline: "Patient-first medical showcase for a modern dental clinic.",
    description:
      "A trustworthy, serene healthcare website featuring service descriptions (implantology, orthodontics, aesthetic dentistry), staff bios, and direct inquiry channels.",
    category: "website",
    categoryLabel: "Medical Clinic Website",
    technologies: ["WordPress", "HTML5", "CSS3", "Accessible Design"],
    image: "/assets/images/dental-plus.webp",
    featured: false,
    tier: 2,
    year: "2023",
    liveUrl: "https://djurke23.github.io/dental-plus/",
    githubUrl: "https://github.com/djurke23/dental-plus",
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker UI",
    tagline: "Visual identity and mobile design system for personal wealth management.",
    description:
      "A comprehensive design project encompassing brand guidelines, typographic hierarchy, dark-mode financial dashboards, and interactive Figma prototypes.",
    category: "design",
    categoryLabel: "UI/UX & Brand Design",
    technologies: ["Figma", "Adobe Illustrator", "Photoshop", "Design Systems"],
    image: "/assets/images/figma-ft.webp",
    featured: false,
    tier: 2,
    year: "2023",
    figmaUrl:
      "https://www.figma.com/make/pDJnGMgjp3XJGJ1i7eS8yC/Finance-Tracker-App?node-id=0-1&p=f&t=HUC5FjnMHuhoDLpB-0&fullscreen=1",
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker UI",
    tagline: "Dark-mode daily wellness and routine tracking design system.",
    description:
      "Designed an intuitive habit formation mobile interface featuring streak metrics, completion micro-rewards, and minimal cognitive load.",
    category: "design",
    categoryLabel: "UI/UX Design & Prototype",
    technologies: ["Figma", "Adobe XD", "Photoshop", "Prototyping"],
    image: "/assets/images/figma-ht.webp",
    featured: false,
    tier: 2,
    year: "2023",
  },
  {
    id: "portfolio-v1",
    title: "Personal Portfolio v1",
    tagline: "Previous iteration of personal portfolio featuring particle interactions.",
    description:
      "The original static portfolio built to showcase early freelance client projects, skills, and broadcast engineering milestones.",
    category: "website",
    categoryLabel: "Web Development",
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    image: "/assets/images/portfolio-v1.webp",
    featured: false,
    tier: 2,
    year: "2022 — 2024",
    liveUrl: "https://djurke23.github.io/portfolio/",
    githubUrl: "https://github.com/djurke23/portfolio",
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured && p.tier === 1);
export const getSecondaryProjects = () => projects.filter((p) => !p.featured || p.tier === 2);
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
