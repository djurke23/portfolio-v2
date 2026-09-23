import { Project } from "@/types";

export const projects: Project[] = [
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
    liveUrl: "https://djurke23.github.io/CarFlo/",
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
    id: "rev-and-chill",
    title: "Rev&Chill",
    tagline: "Automotive event registration system and vehicle showcase platform.",
    description:
      "A full-stack registration and moderation system engineered for enthusiast car meets. Enables vehicle owners to submit high-resolution builds, event organizers to curate attendee rosters, and spectators to browse confirmed builds.",
    category: "web-app",
    categoryLabel: "Full-Stack Web App",
    technologies: ["Next.js", "TypeScript", "Cloudflare D1", "Cloudflare R2", "Tailwind CSS", "Server Actions"],
    image: "/assets/images/rev-and-chill.webp",
    featured: true,
    tier: 1,
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
