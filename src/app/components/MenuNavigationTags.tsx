"use client";
import CategoryTag from "@/components/CategoryTag";
import { FoodCategory } from "@prisma/client";
import React, { useState } from "react";

interface MenuNavigationTagsProps {
  foodCategories: FoodCategory[];
}
const MenuNavigationTags = ({ foodCategories }: MenuNavigationTagsProps) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategoryTagClick = (foodCategoryId: string) => {
    if (selectedCategory === foodCategoryId) {
      setSelectedCategory(""); // Desmarca a categoria se ela já estiver selecionada
    } else {
      setSelectedCategory(foodCategoryId); // Marca a categoria se ela não estiver selecionada
    }
  };
  return (
    <div className="flex gap-2 items-center overflow-x-hidden">
      {foodCategories.map((foodCategory) => (
        <CategoryTag
          foodCategory={foodCategory}
          key={foodCategory.id}
          isSelected={selectedCategory === foodCategory.id}
          onClick={() => handleCategoryTagClick(foodCategory.id)}
        />
      ))}
    </div>
  );
};

export default MenuNavigationTags;
