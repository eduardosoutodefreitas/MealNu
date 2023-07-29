import { prisma } from "@/lib/prisma";
import MenuItem from "./MenuItem";

const MenuList = async () => {
  const dishes = await prisma.dish.findMany({});
  return (
    <div>
      {dishes.map((dish) => (
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
