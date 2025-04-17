
import React from "react";
import { Category } from "../data/excuses";

interface SituationSelectorProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
}

const SituationSelector: React.FC<SituationSelectorProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Choose a situation:</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all ${
              selectedCategory === category.id
                ? `${category.color} scale-105 shadow-md`
                : "bg-white hover:scale-102 shadow"
            }`}
          >
            <span className="text-3xl mb-2">{category.emoji}</span>
            <span className="text-sm font-medium text-gray-700">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SituationSelector;
