"use client";
import { Dish } from "@prisma/client";
import MenuItem from "./MenuItem";
import { useContext } from "react";
import { MenuContext } from "@/contexts/MenuContext";
interface MenuListProps {
  dishes: Dish[];
}
const MenuList = ({ dishes }: MenuListProps) => {
  const { selectedTag } = useContext(MenuContext);
  const filteredMenuList = selectedTag
    ? dishes.filter((dish) => dish.foodCategory === selectedTag.name)
    : dishes;
  return (
    <div>
      {filteredMenuList.map((dish) => (
        <MenuItem
          id={dish.id}
          description={dish.description}
          name={dish.name}
          imageUrl={dish.imageUrl}
          price={dish.price.toString()}
          key={dish.id}
        />
      ))}
    </div>
  );
};

export default MenuList;
