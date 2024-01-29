import prisma from "@/lib/prisma";
import MenuList from "./MenuList";

const Menu = async () => {
  const dishes = await prisma.dish.findMany({});
  return <MenuList dishes={dishes} />;
};

export default Menu;
