import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/Form/PersonalInfo";
import CVPreview from "./Previw/CVPreview";
import type {
  CVData,
  Skill,
  Experience as ExperienceType,
} from "./types/cv.types";
import Skills from "./components/Form/Skills";
import Experience from "./components/Form/Experience";

function App() {
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      city: "",
      summary: "",
    },
    skills: [],
    experiences: [],
  });

  const updatePersonalInfo = (data: Partial<CVData["personalInfo"]>) => {
    setCvData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        ...data,
      },
    }));
  };

  const onAddExperience = (experience: ExperienceType) => {
    setCvData((prevData) => ({
      ...prevData,
      experiences: [...prevData.experiences, experience],
    }));
  };

  const onRemoveExperience = (indexToRemove: number) => {
    setCvData((prevData) => ({
      ...prevData,
      experiences: prevData.experiences.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  const onAddSkill = (skill: Skill) => {
    setCvData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, skill],
    }));
  };

  const onRemoveSkill = (indexToRemove: number) => {
    setCvData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((_, index) => index !== indexToRemove),
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/2 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {" "}
          Gerador de Curriculo
        </h1>
        <PersonalInfo
          personalInfo={cvData.personalInfo}
          onUpdate={updatePersonalInfo}
        />
        <Experience
          experiences={cvData.experiences}
          onAddExperience={onAddExperience}
          onRemoveExperience={onRemoveExperience}
        />
        <Skills
          skills={cvData.skills}
          onAddSkill={onAddSkill}
          onRemoveSkill={onRemoveSkill}
        />
      </div>
      <div className="w-1/2 p-8 bg-whote border-l border-gray-200 shadow-lg overflow-y-auto">
        <CVPreview cvData={cvData} />
      </div>
    </div>
  );
}

export default App;
