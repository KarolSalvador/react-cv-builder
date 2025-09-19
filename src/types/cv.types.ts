export type Skill = {
  name: string;
  level: "Básico" | "Intermediário" | "Avançado" | "Proficiente";
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
};
