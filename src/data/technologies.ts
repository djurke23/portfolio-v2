import { TechnologyCategory } from "@/types";

export const technologyCategories: TechnologyCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, accessible, and high-performance user interfaces with clean component architectures.",
    skills: [
      { name: "React", icon: "/assets/icons/react.svg", highlighted: true },
      { name: "Next.js", icon: "/assets/icons/nextjs.svg", highlighted: true },
      { name: "TypeScript", icon: "/assets/icons/typescript.svg", highlighted: true },
      { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
      { name: "Tailwind CSS", icon: "/assets/icons/tailwindcss.svg", highlighted: true },
      { name: "HTML5", icon: "/assets/icons/html5.svg" },
      { name: "CSS3 / SCSS", icon: "/assets/icons/css.svg" },
      { name: "Angular", highlighted: false },
      { name: "Vue.js", highlighted: false },
    ],
  },
  {
    title: "Backend & Databases",
    description: "Architecting resilient APIs, microservices, and edge database infrastructure with type safety.",
    skills: [
      { name: "Go (Golang)", highlighted: true },
      { name: "Node.js", icon: "/assets/icons/nodejs.svg", highlighted: true },
      { name: "PostgreSQL", highlighted: true },
      { name: "Supabase", icon: "/assets/icons/supabase.svg", highlighted: true },
      { name: "Cloudflare D1 (Edge SQL)", highlighted: true },
      { name: "PHP", highlighted: false },
      { name: "Python", icon: "/assets/icons/python.svg", highlighted: false },
      { name: "RESTful APIs", highlighted: false },
    ],
  },
  {
    title: "Mobile & Cloud Infrastructure",
    description: "Developing cross-platform mobile experiences, native bridges, and serverless cloud storage.",
    skills: [
      { name: "React Native", icon: "/assets/icons/react.svg", highlighted: true },
      { name: "Capacitor", icon: "/assets/icons/capacitor.svg", highlighted: true },
      { name: "Apple App Store / iOS", icon: "/assets/icons/xcode.svg", highlighted: true },
      { name: "RevenueCat (In-App Subscriptions)", icon: "/assets/icons/revenuecat.svg", highlighted: true },
      { name: "Cloudflare R2 (Object Storage)", highlighted: true },
      { name: "Firebase", icon: "/assets/icons/firebase.svg" },
      { name: "Docker", icon: "/assets/icons/docker.svg" },
    ],
  },
  {
    title: "Design & Creative Systems",
    description: "Combining product thinking, UI/UX systems, and broadcast-grade motion graphics.",
    skills: [
      { name: "Figma", icon: "/assets/icons/figma.svg", highlighted: true },
      { name: "UI/UX Design Systems", highlighted: true },
      { name: "Adobe Illustrator", highlighted: false },
      { name: "Adobe Photoshop", highlighted: false },
      { name: "Adobe Premiere Pro", highlighted: true },
      { name: "Adobe After Effects", highlighted: true },
      { name: "Adobe XD", highlighted: false },
    ],
  },
  {
    title: "Workflow & Engineering Tools",
    description: "Industry-standard version control, API testing, and agile team collaboration tools.",
    skills: [
      { name: "Git", icon: "/assets/icons/git.svg", highlighted: true },
      { name: "GitHub", icon: "/assets/icons/github.svg", highlighted: true },
      { name: "Postman", icon: "/assets/icons/postman.svg", highlighted: true },
      { name: "Jira", icon: "/assets/icons/jira.svg" },
      { name: "Notion", icon: "/assets/icons/notion.svg" },
      { name: "Linux / macOS", highlighted: false },
    ],
  },
];
