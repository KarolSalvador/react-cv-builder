import { useState } from "react";
import type { Languages as LanguagesType } from "../../types/cv.types";
import DynamicList from "./DynamicList";

interface LanguagesProps {
  languages: LanguagesType[];
  onAddLanguage: (language: LanguagesType) => void;
  onRemoveLanguage: (index: number) => void;
}

export default function Languages({
  languages,
  onAddLanguage,
  onRemoveLanguage,
}: LanguagesProps) {
  const [newLanguage, setNewLanguage] = useState({
    name: "",
    level: "Básico" as "Básico" | "Intermediário" | "Avançado" | "Fluente",
  });

  const handleAdd = () => {
    if (newLanguage.name.trim() !== "") {
      onAddLanguage(newLanguage);
      setNewLanguage({ name: "", level: "Básico" });
    }
  };

  const renderLanguageItem = (lang: LanguagesType) => {
    return (
      <span>
        {lang.name} - {lang.level}
      </span>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Idiomas</h2>
      <div className="flex items-end space-x-2 mb-4">
        <div className="flex-1">
          <label
            htmlFor="language-name"
            className="block text-sm font-medium text-gray-700"
          >
            Idioma
          </label>
          <input
            type="text"
            id="language-name"
            value={newLanguage.name}
            onChange={(e) =>
              setNewLanguage({ ...newLanguage, name: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border"
          />
        </div>
        <div className="w-1/3">
          <label
            htmlFor="language-level"
            className="block text-sm font-medium text-gray-700"
          >
            Nível
          </label>
          <select
            id="language-level"
            value={newLanguage.level}
            onChange={(e) =>
              setNewLanguage({
                ...newLanguage,
                level: e.target.value as
                  | "Básico"
                  | "Intermediário"
                  | "Avançado"
                  | "Fluente",
              })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border"
          >
            <option>Básico</option>
            <option>Intermediário</option>
            <option>Avançado</option>
            <option>Fluente</option>
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
        items={languages}
        renderItem={renderLanguageItem}
        onRemove={onRemoveLanguage}
      />
    </div>
  );
}
