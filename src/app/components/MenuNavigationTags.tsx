"use client";
import CategoryTag from "@/components/CategoryTag";
import { MenuContext } from "@/contexts/MenuContext";
import { FoodCategory } from "@prisma/client";
import React, { useContext, useState } from "react";

interface MenuNavigationTagsProps {
  foodCategories: FoodCategory[];
}
const MenuNavigationTags = ({ foodCategories }: MenuNavigationTagsProps) => {
  const { selectedTag, setSelectedTag } = useContext(MenuContext);
  const handleCategoryTagClick = (foodCategory: FoodCategory) => {
    if (selectedTag === foodCategory) {
      setSelectedTag(null); // Desmarca a categoria se ela já estiver selecionada
    } else {
      setSelectedTag(foodCategory); // Marca a categoria se ela não estiver selecionada
    }
  };
  return (
    <div className="flex gap-2 items-center overflow-x-hidden">
      {foodCategories.map((foodCategory) => (
        <CategoryTag
          foodCategory={foodCategory}
          key={foodCategory.id}
          isSelected={selectedTag?.id === foodCategory.id}
          onClick={() => handleCategoryTagClick(foodCategory)}
        />
      ))}
    </div>
  );
};

export default MenuNavigationTags;
