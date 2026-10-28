# Luka Đurić — Personal Portfolio & Engineering Showcase

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)

A high-performance, dark-futuristic portfolio and engineering showcase engineered with **Next.js 16 (App Router & Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Built to present full-stack web applications, mobile platforms, and deep architectural case studies with sub-second page transitions, interactive sound design, and flawless accessibility.

🌐 **Live Website**: [lukadjuric.dev](https://lukadjuric.dev)

---

## ✨ Highlights & Key Features

- **⚡ Next.js 16 & React 19 Engine**: Built using modern React Server Components, Server Actions, and Turbopack for near-instant compilation and static generation (SSG).
- **🕹️ Command Palette (`Cmd + K` / `Ctrl + K`)**: Global keyboard-first modal enabling instant fuzzy search across all projects, technical case studies, sections, theme switches, and language toggles.
- **🌐 Dual-Language i18n Engine (EN / SR)**: Frictionless client-side localization system switching seamlessly between English and Serbian without page reloads, persisting locale state across sessions.
- **🔊 Web Audio FX System**: Custom synthesized sound effects (click feedback, modal triggers, success cues) engineered with the browser's native Web Audio API — completely toggleable by the user.
- **🎨 Tailwind CSS v4 & Dark / Light Theme**: Built on Tailwind v4's CSS-first architecture with custom design tokens, scanline overlays, glassmorphic surfaces, and zero flash of unstyled content (FOUC).
- **📜 Deep Technical Case Studies (`/projects/[id]`)**: Statically pre-rendered deep-dives covering problem statements, technical architecture layers (Frontend, Backend, Database, Storage, APIs), key features, challenges, and measurable outcomes.
- **📬 Serverless Contact Form**: Validated end-to-end with **Zod** schemas and delivered directly via **Resend Transactional Email API** using secure Next.js API route handlers.
- **🖼️ Automated Dynamic Social Cards**: Custom 1200x630 OpenGraph and Twitter cards statically generated per project using Next.js `@vercel/og` (`ImageResponse`).
- **🌊 Smooth Inertia Scrolling**: Integrated **Lenis** smooth scroll provider coordinated with Framer Motion animations.
- **📈 Comprehensive SEO & Structured Data**: Complete Schema.org JSON-LD structured data (`Person`, `WebSite`, `Article`), dynamic XML sitemap (`sitemap.ts`), `robots.ts`, and PWA web manifest.

---

## 🚀 Featured Flagship Projects

| Project | Category | Technologies | Status / Link |
| :--- | :--- | :--- | :--- |
| **The System: Awakening** | Web & Mobile Ecosystem | Next.js, TypeScript, Tailwind CSS, Vercel, Cyberpunk HUD | [Live Portal](https://www.thesystemawakening.com) |
| **CarFlo Ecosystem** | Mobile & Cloud Platform | React Native, Capacitor, Supabase, PostgreSQL, RevenueCat | [App Store](https://apps.apple.com/rs/app/carflo-car-expense-tracker/id6778638970) • [Web](https://carflo.app) |
| **FluffyFlowers.rs** | E-Commerce Web App | React, TypeScript, Vite, Tailwind CSS, State Management | [Live Storefront](https://fluffyflowers.rs) |
| **SUNSHINE Spa & Massage** | Jamstack & Headless CMS | Next.js 15, React 19, Sanity CMS, next-intl, Tailwind v4 | [Live Website](https://sunshinesalonzamasazu.rs) |
| **Rev&Chill** | Full-Stack Web App | Next.js, Cloudflare D1 (SQLite), Cloudflare R2, Server Actions | [Live App](https://rev-and-chill-3.vercel.app) |

---

## 🛠️ Tech Stack & Tooling

### Core Framework & Runtime
- **Framework**: [Next.js 16.3](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19.2](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode)
- **Runtime**: Node.js 20+

### Styling & Animation
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/postcss`
- **Motion**: [Framer Motion 13](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis 1.3](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`

### Backend, Validation & Delivery
- **Validation**: [Zod 4](https://zod.dev/)
- **Email Service**: [Resend](https://resend.com/)
- **Audio Feedback**: Native Web Audio API (Synthesizer Oscillators & Gain Nodes)
- **Hosting & Edge**: [Vercel](https://vercel.com/) (Edge Network & Serverless Functions)

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── assets/
│   │   ├── icons/            # SVG technology & brand icons
│   │   └── images/           # High-res WebP & PNG project showcases
│   ├── cv/                   # Downloadable resume assets (PDF)
│   ├── favicon.ico
│   └── icon.svg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/      # Resend serverless email dispatch handler
│   │   ├── projects/
│   │   │   └── [id]/         # Dynamic SSG technical case study pages
│   │   │       ├── page.tsx
│   │   │       ├── CaseStudyView.tsx
│   │   │       └── opengraph-image.tsx
│   │   ├── globals.css       # Tailwind CSS v4 configuration & theme tokens
│   │   ├── layout.tsx        # Root layout, metadata, analytics & font setups
│   │   ├── page.tsx          # Single-page portfolio application entrypoint
│   │   ├── not-found.tsx     # Custom 404 page with quick case study links
│   │   ├── sitemap.ts        # Dynamic XML sitemap generator
│   │   ├── robots.ts         # Search engine crawl rules
│   │   └── manifest.ts       # Web application manifest
│   ├── components/
│   │   ├── layout/           # Navbar, Footer, CustomCursor, SmoothScrollProvider
│   │   ├── sections/         # Hero, FeaturedProjects, ProjectMatrix, Services,
│   │   │                     # TechStack, Experience, About, Gear, Testimonials, FAQ
│   │   └── ui/               # CommandPalette, SoundToggle, ThemeToggle, Toast,
│   │                         # MagneticButton, SectionHeader, LiveBelgradeTime
│   ├── context/              # LanguageContext, ThemeContext, SoundContext, ToastContext
│   ├── data/                 # Strongly-typed data records (projects, site, stats, tech)
│   ├── i18n/                 # Translation dictionaries (English & Serbian)
│   ├── lib/                  # Analytics helpers, utilities
│   └── types/                # TypeScript interfaces and schema declarations
├── .env.example              # Environment variables template
├── next.config.ts            # Next.js build optimizations and configuration
├── tsconfig.json             # TypeScript compiler settings
└── package.json              # Dependencies and lifecycle scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version `20.x` or higher recommended)
- [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), or [yarn](https://yarnpkg.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/djurke23/portfolio-v2.git
cd portfolio-v2
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory by copying the example:

```bash
cp .env.example .env.local
```

Fill in your configuration:

```env
# Resend API Key for sending emails through the Contact Form
RESEND_API_KEY=re_your_api_key_here

# Recipient email address for inquiries
CONTACT_EMAIL_TO=lukadjuricdjurke@pm.me

# Verified sender address (or use default Resend testing sandbox)
CONTACT_EMAIL_FROM=Portfolio Contact <onboarding@resend.dev>
```

> **Note**: The portfolio will run completely fine locally without a Resend key; the contact form will simply notify you if the API key is not configured.

### 4. Run the Development Server

Start the Next.js development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run start
```

To run lint checks:

```bash
npm run lint
```

---

## 🚢 Deployment

The easiest way to deploy this portfolio is using the [Vercel Platform](https://vercel.com/):

1. Push your repository to GitHub.
2. Import the repository into your Vercel Dashboard.
3. Configure the environment variables (`RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_FROM`).
4. Click **Deploy**. Next.js will automatically build and distribute the app across the global Vercel Edge Network.

---

## 👨‍💻 Author

**Luka Đurić**  
*Full-Stack Developer & Product Craftsman*  
📍 Belgrade, Serbia

- **Portfolio**: [lukadjuric.dev](https://lukadjuric.dev)
- **GitHub**: [@djurke23](https://github.com/djurke23)
- **LinkedIn**: [in/djurke23](https://www.linkedin.com/in/djurke23/)
- **Email**: [lukadjuricdjurke@pm.me](mailto:lukadjuricdjurke@pm.me)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
