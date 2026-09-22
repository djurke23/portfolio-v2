export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: {
    en: string;
    sr: string;
  };
  sublabel: {
    en: string;
    sr: string;
  };
}

export const impactStats: StatItem[] = [
  {
    id: "years",
    value: 6,
    suffix: "+",
    label: {
      en: "Years Experience",
      sr: "Godina Iskustva",
    },
    sublabel: {
      en: "Software & Digital Craft",
      sr: "Softver i produkcija",
    },
  },
  {
    id: "projects",
    value: 30,
    suffix: "+",
    label: {
      en: "Shipped Projects",
      sr: "Završenih Projekata",
    },
    sublabel: {
      en: "Web, Mobile & Systems",
      sr: "Web, mobilne i cloud platforme",
    },
  },
  {
    id: "technologies",
    value: 15,
    suffix: "+",
    label: {
      en: "Mastered Tech",
      sr: "Savladanih Tehnologija",
    },
    sublabel: {
      en: "Modern Stack & Tooling",
      sr: "Savremeni inženjerski alati",
    },
  },
  {
    id: "clients",
    value: 10,
    suffix: "+",
    label: {
      en: "Satisfied Clients",
      sr: "Zadovoljnih Klijenata",
    },
    sublabel: {
      en: "Direct Business Impact",
      sr: "Direktan poslovni uspeh",
    },
  },
];
