import { prisma } from "@/lib/prisma";
import { BiTime } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import DishDescriptionHeader from "./components/DishDescriptionHeader";
import Image from "next/image";
import DishDescriptionFooter from "./components/DishDescriptionFooter";
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

  if (!dish) return null;
  return (
    <div className="container mx-auto">
      <DishDescriptionHeader />
      <div className="w-full aspect-video relative mt-2 mb-3">
        <Image
          fill
          src={dish.imageUrl}
          alt={dish.name}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="px-5">
        <h2 className="mb-2 font-semibold">{dish.name}</h2>
        <p className="text-sm mb-3">{dish.description}</p>
      </div>
      <div className="text-sm px-5 mb-5">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-1">
            <BiTime className="text-specialOrange" size={20} />
            <h3 className=" font-medium">Tempo médio de espera:</h3>
          </div>
          <span>{dish.waitingTime} minutos</span>
        </div>
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-1">
            <GiKnifeFork className="text-specialOrange" size={20} />
            <h3 className="font-medium">Serve bem até</h3>
          </div>
          <span>{dish.peopleServed} pessoas</span>
        </div>
      </div>
      <DishDescriptionFooter price={dish.price.toString()} />
    </div>
  );
};

export default DishDetailsPage;
