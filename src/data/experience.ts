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
    id: "pink-robotics",
    period: "2025 — 2026",
    role: "Robotics Operator — Broadcast Robotics Support",
    company: "Pink Media Group",
    location: "Belgrade, Serbia",
    type: "Broadcast Robotics",
    description:
      "Part of the technical crew for live television integration of Unitree G1 humanoid platforms and Unitree Go2 quadruped platform in broadcast production. Studio motion operation, safety protocols, video routing, and real-time director synchronization.",
    responsibilities: [
      "Remote teleoperation and kinematic motion control of humanoid (Unitree G1) and quadruped (Unitree Go2) robotic platforms in live TV studio environments.",
      "Execution of rigorous studio safety protocols, emergency fail-safes, and battery telemetry monitoring during live broadcasts.",
      "Video signal routing from onboard robotic camera feeds and low-latency synchronization with the master control room and director.",
      "Calibration of movement routines, obstacle navigation around complex stage sets, and dynamic on-air interactions with television talent.",
    ],
    technologies: [
      "Unitree G1 Humanoid",
      "Unitree Go2 Quadruped",
      "Remote Teleoperation",
      "Robot Kinematics",
      "Live TV Broadcast",
      "Video Signal Routing",
      "Studio Safety Protocols",
    ],
    broadcastContext: {
      isLive: true,
      tags: ["BROADCAST ROBOTICS", "UNITREE G1 & GO2", "LIVE INTEGRATION"],
    },
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
    type: "Live Broadcast Production",
    description:
      "Operating a professional video switcher / production mixer during live broadcasts, managing transitions between multiple camera feeds and video sources under live production pressure.",
    responsibilities: [
      "Operating a professional video switcher / production mixer during high-stakes live broadcasts.",
      "Switching between cameras and live video sources with frame-accurate timing.",
      "Following the director's instructions in real time during live multi-camera production.",
      "Managing transitions and graphical overlays between different signal sources.",
      "Working under real-time broadcast pressure while maintaining continuous transmission.",
      "Coordinating closely with directors, camera operators, and the technical control room.",
      "Monitoring incoming and outgoing video feeds to ensure signal fidelity and broadcast standards.",
    ],
    technologies: [
      "Production Switchers",
      "Live Video Mixing",
      "SDI Signal Routing",
      "Multi-Camera Control",
      "Broadcast Systems",
    ],
    broadcastContext: {
      isLive: true,
      tags: ["LIVE BROADCAST", "VIDEO SWITCHING", "REAL-TIME PRODUCTION"],
    },
  },
  {
    id: "pink-rco",
    period: "2022 — 2023",
    role: "Remote Control Operator (RCO)",
    company: "Pink Media Group",
    location: "Belgrade, Serbia",
    type: "Broadcast Media",
    description:
      "Remote operation and control of production-related broadcast equipment, managing multi-camera systems in real time during live broadcasts.",
    responsibilities: [
      "Remote operation and control of production-related broadcast equipment and camera systems.",
      "Managing and controlling robotic PTZ units and remote equipment during live production.",
      "Following production and director instructions in real time with high precision.",
      "Monitoring broadcast systems continuously and making required operational adjustments.",
      "Coordinating with the broader production team to ensure smooth visual coverage.",
    ],
    technologies: [
      "Remote Control Systems",
      "Robotic PTZ Systems",
      "Telemetry & Shading",
      "Broadcast Monitoring",
    ],
    broadcastContext: {
      isLive: true,
      tags: ["REMOTE CONTROL", "ROBOTIC SYSTEMS", "LIVE MONITORING"],
    },
  },
  {
    id: "pink-editor",
    period: "2021 — 2022",
    role: "Video Editor",
    company: "Pink Media Group",
    location: "Belgrade, Serbia",
    type: "Media Production",
    description:
      "Editing video content for broadcast and media production, cutting footage and preparing visual material under tight broadcast turnaround schedules.",
    responsibilities: [
      "Editing video content for broadcast and media production across high-volume schedules.",
      "Cutting and arranging multi-camera footage into engaging broadcast packages.",
      "Preparing and exporting master video material for scheduled television broadcast.",
      "Applying appropriate transitions, color corrections, audio leveling, and visual adjustments.",
      "Working with professional video editing software including Adobe Premiere Pro and After Effects.",
    ],
    technologies: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Video Editing",
      "Broadcast Packaging",
      "Color & Audio Correction",
    ],
    broadcastContext: {
      isLive: false,
      tags: ["VIDEO EDITING", "POST-PRODUCTION", "MEDIA PACKAGING"],
    },
  },
  {
    id: "pink-operator",
    period: "2020 — 2021",
    role: "Computer Operator / Broadcast Graphics",
    company: "Pink Media Group",
    location: "Belgrade, Serbia",
    type: "Broadcast Media",
    description:
      "Operating computers and broadcast graphics systems, preparing and controlling graphical elements and real-time on-screen content during live broadcasts.",
    responsibilities: [
      "Operating dedicated broadcast computers and real-time graphics playout systems.",
      "Preparing, verifying, and controlling graphical elements used during live broadcasts.",
      "Managing on-screen graphical content including lower thirds, voting results, and ticker feeds.",
      "Operating production software and broadcast-related hardware systems.",
      "Monitoring technical output and signal integrity during live television production.",
    ],
    technologies: [
      "Broadcast Graphics Systems",
      "Playout Automation",
      "Live On-Screen Overlays",
      "Technical Control Systems",
    ],
    broadcastContext: {
      isLive: true,
      tags: ["BROADCAST GRAPHICS", "PLAYOUT SYSTEMS", "TECHNICAL OUTPUT"],
    },
  },
];
