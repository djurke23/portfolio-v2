export type ProjectCategory = 'all' | 'web-app' | 'mobile-app' | 'website' | 'design';

export interface ArchitectureBlock {
  frontend?: string;
  backend?: string;
  database?: string;
  apis?: string[];
  deployment?: string;
  storage?: string;
}

export interface KeyFeature {
  title: string;
  desc: string;
}

export interface TechnicalChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectCaseStudy {
  overview: string;
  role: string;
  timeline: string;
  problem: string;
  solution: string;
  architecture: ArchitectureBlock;
  keyFeatures: KeyFeature[];
  challenges: TechnicalChallenge[];
  outcomes: string[];
  metrics?: { label: string; value: string }[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  technologies: string[];
  image: string;
  featured: boolean;
  tier: 1 | 2;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  figmaUrl?: string;
  caseStudy?: ProjectCaseStudy;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  broadcastContext?: {
    isLive?: boolean;
    tags: string[];
  };
}

export interface Education {
  id: string;
  period: string;
  degree: string;
  institution: string;
  location: string;
  status: string;
  details: string[];
}

export interface TechnologyItem {
  name: string;
  icon?: string;
  highlighted?: boolean;
}

export interface TechnologyCategory {
  title: string;
  description: string;
  skills: TechnologyItem[];
}

declare global {
  interface Window {
    __lenis?: import("lenis").default;
  }
}
