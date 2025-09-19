import { useState } from "react";

interface SkillsProps {
  skills: {
    name: string;
    level: "Básico" | "Intermediário" | "Avançado" | "Proficiente";
  }[];

  onAddSkill: (skill: {
    name: string;
    level: "Básico" | "Intermediário" | "Avançado" | "Proficiente";
  }) => void;

  onRemoveSkill: (index: number) => void;
}

export default function Skills({
  skills,
  onAddSkill,
  onRemoveSkill,
}: SkillsProps) {
  const [newSkill, setNewSkill] = useState({
    name: "",
    level: "Intermediário" as
      | "Básico"
      | "Intermediário"
      | "Avançado"
      | "Proficiente",
  });

  const handleAdd = () => {
    if (newSkill.name.trim() !== "") {
      onAddSkill(newSkill);
      setNewSkill({ name: "", level: "Intermediário" });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Habilidades</h2>
      <div className="flex items-end space-x-2 mb-4">
        <div className="flex-1">
          <label
            htmlFor="skill-name"
            className="block text-sm font-medium text-gray-700"
          >
            Habilidades
          </label>
          <input
            type="text"
            id="skill-name"
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border"
          />
        </div>
        <div className="w-1/3">
          <label
            htmlFor="skill-level"
            className="block text-sm font-medium text-gray-700"
          >
            Nível
          </label>
          <select
            id="skill-level"
            value={newSkill.level}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border"
            onChange={(e) =>
              setNewSkill({
                ...newSkill,
                level: e.target.value as
                  | "Básico"
                  | "Intermediário"
                  | "Avançado"
                  | "Proficiente",
              })
            }
          >
            <option>Básico</option>
            <option>Intermediário</option>
            <option>Avançado</option>
            <option>Proficiente</option>
          </select>
        </div>
        <button
          onClick={handleAdd}
          className="p-2 border border-blue-500 rounded-md bg-blue-500 text-white hover:bg-blue-600"
        >
          Adicionar
        </button>
      </div>

      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-md"
          >
            <span>
              {skill.name} - {skill.level}
            </span>
            <button
              onClick={() => onRemoveSkill(index)}
              className="text-red-500 hover:text-red-700"
              text-sm
              font-bold
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
