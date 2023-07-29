import { prisma } from "@/lib/prisma";
interface DishDetailsPageInterface {
  params: {
    dishId: string;
  };
}

const getDishDetails = async (dishId: string) => {
  const dish = await prisma.dish.findUnique({
    where: {
      id: dishId,
    },
  });
  return dish;
};

const DishDetailsPage = async ({ params }: DishDetailsPageInterface) => {
  const dish = await getDishDetails(params.dishId);

  return <div>{dish?.name}</div>;
};

export default DishDetailsPage;
