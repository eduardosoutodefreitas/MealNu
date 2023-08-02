import { MenuContext } from "@/contexts/MenuContext";
import { FoodCategory } from "@prisma/client";
import { useContext } from "react";

const useMenuNavigation = () => {
    const { selectedTag, setSelectedTag, searchIsOpen } = useContext(MenuContext);
  const handleCategoryTagClick = (foodCategory: FoodCategory) => {
    if (selectedTag === foodCategory) {
      setSelectedTag(null); // Desmarca a categoria se ela já estiver selecionada
    } else {
      setSelectedTag(foodCategory); // Marca a categoria se ela não estiver selecionada
    }
  };
  return {
    handleCategoryTagClick, selectedTag, searchIsOpen
  }
}

export default useMenuNavigation