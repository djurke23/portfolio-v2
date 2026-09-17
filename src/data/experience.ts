import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "freelance",
    period: "2020 — Present",
    role: "Full-Stack Developer & Product Designer",
    company: "Djurke23 (Freelance)",
    location: "Belgrade, Serbia / Remote",
    type: "Independent",
    description:
      "Delivering bespoke digital products, full-stack web applications, e-commerce storefronts, and cross-platform mobile apps for business clients and proprietary ventures.",
    responsibilities: [
      "Architected and deployed full-stack web applications using Next.js, React, TypeScript, and Tailwind CSS.",
      "Engineered mobile applications (including CarFlo on the iOS App Store) using React Native, Capacitor, Supabase, and RevenueCat.",
      "Constructed performant serverless backends and database architectures utilizing Go, Cloudflare D1/R2, and PostgreSQL.",
      "Created cohesive design systems, brand guidelines, and high-fidelity clickable prototypes in Figma.",
    ],
    technologies: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "Go", "Supabase", "PostgreSQL", "Cloudflare", "Figma"],
  },
  {
    id: "dms",
    period: "2024 — 2025",
    role: "Web Application Developer",
    company: "Digital Media Sistem",
    location: "Belgrade, Serbia",
    type: "Full-time",
    description:
      "Developed and maintained full-stack web applications and internal tools within an agile engineering squad.",
    responsibilities: [
      "Engineered robust frontend features and modular components using Angular, Vue.js, JavaScript, and SCSS.",
      "Developed backend microservices and relational data access layers using Go, PHP, and PostgreSQL.",
      "Executed automated API contract testing and performance validation utilizing Postman.",
      "Participated in agile ceremonies, peer code reviews, and Git repository management via Bitbucket, Fork, Jira, and Slack.",
    ],
    technologies: ["Angular", "Vue.js", "Go", "PostgreSQL", "PHP", "SCSS", "Postman", "Git", "Jira"],
  },
  {
    id: "pink-mixer",
    period: "2023 — 2024",
    role: "Video Mixer",
    company: "Pink Media Group",
    location: "Belgrade, Serbia",
    type: "Live Broadcast",
    description:
      "Managed real-time broadcast switching and multi-signal routing for flagship prime-time television broadcasts.",
    responsibilities: [
      "Switched live video inputs in real time under zero-latency production environments with zero broadcast interruptions.",
      "Coordinated with broadcast directors, camera crews, and audio technicians to orchestrate seamless live television segments.",
    ],
    technologies: ["Production Switchers", "Live Signal Routing", "Broadcast Engineering"],
  },
  {
    id: "pink-rco",
    period: "2022 — 2023",
    role: "Remote Control Operator (RCO)",
    company: "Pink Media Group",
    location: "Belgrade, Serbia",
    type: "Broadcast Media",
    description:
      "Operated specialized remote monitoring systems, PTZ cameras, and automated robotic camera systems for live television.",
    responsibilities: [
      "Controlled precision robotic camera systems to deliver dynamic visual angles during major live productions.",
      "Monitored telemetry, exposure, and tracking systems across multi-studio camera networks.",
    ],
    technologies: ["Robotic PTZ Systems", "Telemetry Control", "Live Camera Ops"],
  },
  {
    id: "pink-editor",
    period: "2021 — 2022",
    role: "Video Editor",
    company: "Pink Media Group",
    location: "Belgrade, Serbia",
    type: "Media Production",
    description:
      "Edited high-pace broadcast segments, dynamic promos, and television content under tight daily turnaround schedules.",
    responsibilities: [
      "Crafted narrative edits and visual treatments using Adobe Premiere Pro and Adobe After Effects.",
      "Designed broadcast motion graphics, overlays, and color grade packages.",
    ],
    technologies: ["Adobe Premiere Pro", "Adobe After Effects", "Motion Graphics", "Color Grading"],
  },
  {
    id: "pink-operator",
    period: "2020 — 2021",
    role: "Computer Operator / Broadcast Technician",
    company: "Pink Media Group",
    location: "Belgrade, Serbia",
    type: "Broadcast Media",
    description:
      "Managed live broadcast computer graphics, interactive viewer commentary feeds, and hardware integration.",
    responsibilities: [
      "Operated on-screen graphics engines for live television voting results and audience engagement.",
      "Monitored technical integration across lighting, video feeds, and digital broadcast equipment.",
    ],
    technologies: ["Broadcast Graphics", "Live Moderation", "Hardware Monitoring"],
  },
];
