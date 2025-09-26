import { useState } from "react";
import type { Education as EducationType } from "../../types/cv.types";
import DynamicList from "./DynamicList";

interface EducationProps {
  education: EducationType[];
  onAddEducation: (education: EducationType) => void;
  onRemoveEducation: (index: number) => void;
}

export default function Education({
  education,
  onAddEducation,
  onRemoveEducation,
}: EducationProps) {
  const [newEducation, setNewEducaion] = useState({
    institution: "",
    course: "",
    startDate: "",
    endDate: "",
    status: "Em Andamento" as "Em Andamento" | "Concluído" | "Interrompido",
  });

  const handleAdd = () => {
    if (
      newEducation.institution.trim() !== "" &&
      newEducation.course.trim() !== ""
    ) {
      onAddEducation(newEducation);
      setNewEducaion({
        institution: "",
        course: "",
        startDate: "",
        endDate: "",
        status: "Em Andamento",
      });
    }
  };

  const renderEducationItem = (edu: EducationType) => (
    <div className="flex-1 pr-10">
      <h3 className="text-ls font-semibold">{edu.course}</h3>
      <p className="text-gray-600">{edu.institution}</p>
      <p className="text-sm text-gray-500">
        {edu.startDate} - {edu.endDate} | Status: {edu.status}
      </p>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Formação Acadêmica</h2>

      <div className="space-y-4 mb-4">
        <div>
          <label
            htmlFor="institution"
            className="block text-sm font-medium text-gray-700"
          >
            Instituição
          </label>
          <input
            type="text"
            id="institution"
            value={newEducation.institution}
            onChange={(e) =>
              setNewEducaion({ ...newEducation, institution: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border"
          />
        </div>
        <div>
          <label
            htmlFor="course"
            className="block text-sm font-medium text-gray-700"
          >
            Curso
          </label>
          <input
            type="text"
            id="course"
            value={newEducation.course}
            onChange={(e) =>
              setNewEducaion({ ...newEducation, course: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="start-date-edu"
              className="block text-sm font-medium text-gray-700"
            >
              Data de Início
            </label>
            <input
              type="month"
              id="start-date-edu"
              value={newEducation.startDate}
              onChange={(e) =>
                setNewEducaion({ ...newEducation, startDate: e.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="end-date-edu"
              className="block text-sm font-medium text-gray-700"
            >
              Data de Início
            </label>
            <input
              type="month"
              id="end-date-edu"
              value={newEducation.endDate}
              onChange={(e) =>
                setNewEducaion({ ...newEducation, endDate: e.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="status"
            value={newEducation.status}
            onChange={(e) =>
              setNewEducaion({
                ...newEducation,
                status: e.target.value as
                  | "Em Andamento"
                  | "Concluído"
                  | "Interrompido",
              })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border"
          >
            <option>Em Andamento</option>
            <option>Concluído</option>
            <option>Interrompido</option>
          </select>
        </div>
        <button
          onClick={handleAdd}
          className="p-2 border border-blue-500 rouded-md bg-blue-500 text-white hover:bg-blue-600"
        >
          Adicionar
        </button>
      </div>
      <DynamicList
        items={education}
        renderItem={renderEducationItem}
        onRemove={onRemoveEducation}
      />
    </div>
  );
}
