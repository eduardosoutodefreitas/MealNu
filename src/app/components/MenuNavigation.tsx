import { prisma } from "@/lib/prisma";
import { BiSearchAlt } from "react-icons/bi";
import MenuNavigationTags from "./MenuNavigationTags";

const MenuNavigation = async () => {
  const foodCategories = await prisma.foodCategory.findMany({});

  return (
    <div className="flex items-center justify-center gap-2 my-5">
      <BiSearchAlt size={15} className="text-darkGray" />
      <MenuNavigationTags foodCategories={foodCategories} />
    </div>
  );
};

export default MenuNavigation;
