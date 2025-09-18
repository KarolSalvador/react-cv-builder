import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/Form/PersonalInfo";
import CVPreview from "./Previw/CVPreview";
import type { CVData } from "./types/cv.types";

function App() {
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: {
      name: "Karoline Salvador",
      email: "karol.salvador.910@gmail.com",
      phone: "+55(88)9967-0749",
      linkedin: "https://www.linkedin.com/in/karolisalvador/",
      city: "Fortaleza",
      summary:
        "Busco uma oportunidade como estagiária em Desenvolvimento de Software...",
    },
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
      </div>
      <div className="w-1/2 p-8 bg-whote border-l border-gray-200 shadow-lg overflow-y-auto">
        <CVPreview cvData={cvData} />
      </div>
    </div>
  );
}

export default App;
