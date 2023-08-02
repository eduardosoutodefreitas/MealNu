"use client";
import { Dish } from "@prisma/client";
import MenuItem from "./MenuItem";
import useMenuListFilter from "@/hooks/useMenuListFilter";
interface MenuListProps {
  dishes: Dish[];
}
const MenuList = ({ dishes }: MenuListProps) => {
  const { filterBySearch, filterByTag } = useMenuListFilter()

  const filteredDishes = dishes.filter((dish) => filterByTag(dish) && filterBySearch(dish));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {filteredDishes.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        filteredDishes.map((dish) => (
          <MenuItem
            key={dish.id}
            id={dish.id}
            description={dish.description}
            name={dish.name}
            imageUrl={dish.imageUrl}
            price={dish.price.toString()}
          />
        ))
      )}
    </div>
  );
};


export default MenuList;
