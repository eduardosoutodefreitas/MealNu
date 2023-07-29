"use client";
import CategoryTag from "@/components/CategoryTag";
import useMenuNavigation from "@/hooks/useMenuNavigation";
import { FoodCategory } from "@prisma/client";

interface MenuNavigationTagsProps {
  foodCategories: FoodCategory[];
}
const MenuNavigationTags = ({ foodCategories }: MenuNavigationTagsProps) => {
  const { searchIsOpen, selectedTag, handleCategoryTagClick } = useMenuNavigation()
  const NavigationTagsClasses = searchIsOpen ? "hidden" : ''
  return (
    <div className={`flex gap-2 items-center overflow-x-auto scrollbar-none ${NavigationTagsClasses}`}>
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
