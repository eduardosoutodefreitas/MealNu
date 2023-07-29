import { prisma } from "@/lib/prisma";
import MenuItem from "./MenuItem";

async function getDishes() {
  const dishes = await prisma.dish.findMany({});
  return dishes;
}
const MenuList = async () => {
  const dishes = await getDishes();
  return (
    <div>
      {dishes.map((dish) => (
        <MenuItem
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
