import { prisma } from "@/lib/prisma";
import { BiSearchAlt } from "react-icons/bi";
import MenuNavigationTags from "./MenuNavigationTags";

async function getfoodCategories() {
  const foodCategories = await prisma.foodCategory.findMany({});

  return foodCategories;
}

const MenuNavigation = async () => {
  const foodCategories = await getfoodCategories();

  return (
    <div className="flex items-center justify-center gap-2 my-5">
      <BiSearchAlt size={15} className="text-darkGray" />
      <MenuNavigationTags foodCategories={foodCategories} />
    </div>
  );
};

export default MenuNavigation;
