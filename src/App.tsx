import { useState, useRef } from "react";
import "./App.css";
import PersonalInfo from "./components/Form/PersonalInfo";
import CVPreview from "./Previw/CVPreview";
import type {
  CVData,
  Skill,
  Experience as ExperienceType,
  Education as EducationType,
  Languages as LanguagesType,
} from "./types/cv.types";
import Skills from "./components/Form/Skills";
import Experience from "./components/Form/Experience";
import Education from "./components/Form/Education";
import Languages from "./components/Form/Languages";
import ExportButton from "./Previw/ExportButton";

function App() {
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      city: "",
      summary: "",
    },
    skills: [],
    experiences: [],
    education: [],
    languages: [],
  });

  const [currentStep, setCurrentStep] = useState(0);

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

  const onAddEducation = (education: EducationType) => {
    setCvData((prevData) => ({
      ...prevData,
      education: [...prevData.education, education],
    }));
  };

  const onRemoveEducation = (indexToRemove: number) => {
    setCvData((prevData) => ({
      ...prevData,
      education: prevData.education.filter(
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

  const onAddLanguage = (language: LanguagesType) => {
    setCvData((prevData) => ({
      ...prevData,
      languages: [...prevData.languages, language],
    }));
  };

  const onRemoveLanguage = (indexToRemove: number) => {
    setCvData((prevData) => ({
      ...prevData,
      languages: prevData.languages.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const cvPreviewRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/2 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {" "}
          Gerador de Curriculo
        </h1>

        {currentStep === 0 && (
          <div>
            <PersonalInfo
              personalInfo={cvData.personalInfo}
              onUpdate={updatePersonalInfo}
            />
            <button
              onClick={nextStep}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Próximo
            </button>
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <Experience
              experiences={cvData.experiences}
              onAddExperience={onAddExperience}
              onRemoveExperience={onRemoveExperience}
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={prevStep}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Anterior
              </button>
              <button
                onClick={nextStep}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <Education
              education={cvData.education}
              onAddEducation={onAddEducation}
              onRemoveEducation={onRemoveEducation}
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={prevStep}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Anterior
              </button>
              <button
                onClick={nextStep}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <Skills
              skills={cvData.skills}
              onAddSkill={onAddSkill}
              onRemoveSkill={onRemoveSkill}
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={prevStep}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Anterior
              </button>
              <button
                onClick={nextStep}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <Languages
              languages={cvData.languages}
              onAddLanguage={onAddLanguage}
              onRemoveLanguage={onRemoveLanguage}
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={prevStep}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Anterior
              </button>
              <ExportButton
                cvElementRef={cvPreviewRef}
                fileName={`CV_${cvData.personalInfo.name || "curriculo"}.pdf`}
              />
            </div>
          </div>
        )}
      </div>

      <div
        className="w-1/2 p-8 bg-white border-l border-gray-200 shadow-lg overflow-y-auto"
        ref={cvPreviewRef}
      >
        <CVPreview cvData={cvData} />
      </div>
    </div>
  );
}

export default App;
