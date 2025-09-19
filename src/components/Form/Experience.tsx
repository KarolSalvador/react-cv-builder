import { useState } from "react";

interface ExperienceProps {
  experiences: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    isCurrent: boolean;
    description: string;
  }[];

  onAddExperience: (experience: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    isCurrent: boolean;
    description: string;
  }) => void;

  onRemoveExperience: (index: number) => void;
}

export default function Experience({
  experiences,
  onAddExperience,
  onRemoveExperience,
}: ExperienceProps) {
  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    isCurrent: false,
    description: "",
  });

  const handleAdd = () => {
    if (
      newExperience.company.trim() !== "" &&
      newExperience.position.trim() !== ""
    ) {
      onAddExperience(newExperience);
      setNewExperience({
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        isCurrent: false,
        description: "",
      });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Experiências Profissionais</h2>
      <div className="space-y-4 mb-4">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700"
          >
            Empresa
          </label>
          <input
            type="text"
            id="company"
            value={newExperience.company}
            onChange={(e) =>
              setNewExperience({ ...newExperience, company: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border"
          />
        </div>
        <div>
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700"
          >
            Cargo
          </label>
          <input
            type="text"
            id="position"
            value={newExperience.position}
            onChange={(e) =>
              setNewExperience({ ...newExperience, position: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border"
          />
        </div>
        <div className="flex space-x-4">
          <div>
            <label
              htmlFor="start-date"
              className="block text-sm font-medium text-gray-700"
            >
              Data de Início
            </label>
            <input
              type="month"
              id="start-date"
              value={newExperience.startDate}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  startDate: e.target.value,
                })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border"
            />
          </div>

          <div>
            <label
              htmlFor="end-date"
              className="block text-sm font-medium text-gray-700"
            >
              Data de Saída
            </label>
            <input
              type="month"
              id="end-date"
              value={newExperience.endDate}
              onChange={(e) =>
                setNewExperience({ ...newExperience, endDate: e.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border"
            />
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="is-current"
            checked={newExperience.isCurrent}
            onChange={(e) =>
              setNewExperience({
                ...newExperience,
                isCurrent: e.target.checked,
              })
            }
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label
            htmlFor="is-current"
            className="ml-2 bock text-sm text-gray-900"
          >
            Trabalho atual
          </label>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Descrição
          </label>
          <textarea
            id="description"
            rows={5}
            value={newExperience.description}
            onChange={(e) =>
              setNewExperience({
                ...newExperience,
                description: e.target.value,
              })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border"
          ></textarea>
        </div>
        <button
          onClick={handleAdd}
          className="p-2 border border-blue-500 rounded-md bg-blue-500 text-white hover:bg-blue-600"
        >
          Adicionar
        </button>
      </div>
      <ul className="space-y-4">
        {experiences.map((exp, index) => (
          <li key={index} className="bg-gray-50 p-4 rounded-md relative">
            <h3 className="text-lg font-semibold">{exp.position}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500">
              {exp.startDate} - {exp.isCurrent ? "Trabalho Atual" : exp.endDate}
            </p>
            <p className="text-gray-700 mt-2">{exp.description}</p>
            <button
              onClick={() => onRemoveExperience(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm font-bold"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
