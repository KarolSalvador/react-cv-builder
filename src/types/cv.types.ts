export type Skill = {
  name: string;
  level: "Básico" | "Intermediário" | "Avançado" | "Proficiente";
};

export type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
};

export type CVData = {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    city: string;
    summary: string;
  };
  skills: Skill[];
  experiences: Experience[];
};
