import { FoodCategory } from "@prisma/client";

interface CategoryTagProps {
  foodCategory: FoodCategory;
  isSelected: boolean;
  onClick: () => void;
}
const CategoryTag = ({
  foodCategory,
  isSelected,
  onClick,
}: CategoryTagProps) => {
  const tagClasses = isSelected
    ? "bg-specialOrange text-white "
    : "bg-veryLightGray text-black";
  return (
    <div
      onClick={onClick}
      className={`text-xs py-1 px-5 sm:text-sm whitespace-nowrap rounded-lg cursor-pointer ${tagClasses}`}
    >
      {foodCategory.name}
    </div>
  );
};

export default CategoryTag;
