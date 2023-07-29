import { MenuContext } from "@/contexts/MenuContext";
import { Dish } from "@prisma/client";
import { useContext } from "react";

const useMenuListFilter = ( ) => {
    const { selectedTag, searchValue } = useContext(MenuContext);

    const normalizedSearchValue = searchValue.toLowerCase();

    const filterByTag = (dish:Dish ) => {
        return !selectedTag || dish.foodCategory.includes(selectedTag.name);
      };
    
      const filterBySearch = (dish: Dish) => {
        const { name, description } = dish;
        return (
          !normalizedSearchValue ||
          name.toLowerCase().includes(normalizedSearchValue) ||
          description.toLowerCase().includes(normalizedSearchValue)
        );
      };
  return {
    filterByTag, filterBySearch
  }
}

export default useMenuListFilter