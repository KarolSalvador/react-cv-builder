import { useState } from "react";
import type { Skill } from "../../types/cv.types";
import DynamicList from "./DynamicList";

interface SkillsProps {
  skills: Skill[];

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

  const renderSkillItem = (skill: Skill) => (
    <span>
      {skill.name} - {skill.level}
    </span>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Habilidades</h2>
      <div className="flex items-end space-x-2 mb-4">
        <div className="flex-1">
          <label
            htmlFor="skill-name"
            className="block text-sm font-medium text-gray-700"
          >
            Habilidade
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

      <DynamicList
        items={skills}
        renderItem={renderSkillItem}
        onRemove={onRemoveSkill}
      />
    </div>
  );
}
