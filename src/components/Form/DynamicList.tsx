import type React from "react";

interface DynamicListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  onRemove: (index: number) => void;
}

export default function DynamicList<T>({
  items,
  renderItem,
  onRemove,
}: DynamicListProps<T>) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-gray-50 p-3 rounded-md"
        >
          {renderItem(item, index)}
          <button
            onClick={() => onRemove(index)}
            className="text-red-500 hover:text-red-700 text-sm font-bold"
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}
