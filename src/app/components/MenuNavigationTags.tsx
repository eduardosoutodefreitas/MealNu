"use client";
import CategoryTag from "@/components/CategoryTag";
import { MenuContext } from "@/contexts/MenuContext";
import useMenuNavigation from "@/hooks/useMenuNavigation";
import { FoodCategory } from "@prisma/client";
import React, { useContext } from "react";

interface MenuNavigationTagsProps {
  foodCategories: FoodCategory[];
}
const MenuNavigationTags = ({ foodCategories }: MenuNavigationTagsProps) => {
  const { NavigationTagsClasses, selectedTag, handleCategoryTagClick } = useMenuNavigation()
  return (
    <div className={`flex gap-2 items-center overflow-x-hidden ${NavigationTagsClasses}`}>
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
