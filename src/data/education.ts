import { Education } from "@/types";

export const educationList: Education[] = [
  {
    id: "master",
    period: "2024 — 2025",
    degree: "Master of Science — Information Technology Engineer",
    institution: "MEF Faculty (Applied Management, Economics and Finance)",
    location: "Belgrade, Serbia",
    status: "Completed Coursework • Awaiting Thesis Defense",
    details: [
      "Advanced curriculum focused on distributed software systems, cloud infrastructure, and modern architectural patterns.",
      "Specialized in full-stack architecture, microservices, and database performance optimization.",
      "Master's thesis defense in progress.",
    ],
  },
  {
    id: "bachelor",
    period: "2020 — 2024",
    degree: "Bachelor of Science — Information Technology Engineer",
    institution: "MEF Faculty",
    location: "Belgrade, Serbia",
    status: "Graduated",
    details: [
      "Solid foundations in Computer Science: Algorithms, Data Structures, Object-Oriented Programming (Java, C, C++, C#, Python).",
      "Relational Database Design (PostgreSQL, MySQL) and Web Application Engineering.",
      "Practical capstone projects involving cross-functional system design.",
    ],
  },
  {
    id: "highschool",
    period: "2017 — 2020",
    degree: "Multimedia Electrical Technician",
    institution: "Electrical Engineering Technical School",
    location: "Belgrade, Serbia",
    status: "Completed",
    details: [
      "Technical education covering digital audio/video processing, telecommunications, hardware diagnostics, and electronic systems.",
      "Foundation for both low-level hardware comprehension and media production craftsmanship.",
    ],
  },
];
