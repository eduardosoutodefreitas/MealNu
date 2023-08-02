import { prisma } from "@/lib/prisma";
import MenuNavigationTags from "./MenuNavigationTags";
import MenuSearch from "./MenuSearch";

const MenuNavigation = async () => {
  const foodCategories = await prisma.foodCategory.findMany({});

  return (
    <div className="flex items-center justify-center gap-4 my-5">
      <MenuSearch />
      <MenuNavigationTags foodCategories={foodCategories} />
    </div>
  );
};

export default MenuNavigation;
