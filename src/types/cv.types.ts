export type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
};

export type Education = {
  institution: string;
  course: string;
  startDate: string;
  endDate: string;
  status: "Em Andamento" | "Concluído" | "Interrompido";
};

export type Skill = {
  name: string;
  level: "Básico" | "Intermediário" | "Avançado" | "Proficiente";
};

export type Languages = {
  name: string;
  level: "Básico" | "Intermediário" | "Avançado" | "Nativo";
};

export type CVData = {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    city: string;
    summary: string;
  };
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  languages: Languages[];
};
