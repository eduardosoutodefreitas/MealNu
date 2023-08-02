import React from "react";
import { BiTime } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";

interface DishDescriptionDetailsProps {
  name: string;
  description: string;
  waitingTime: number;
  peopleServed: number;
}

const DishDescriptionDetails = ({
  description,
  name,
  peopleServed,
  waitingTime,
}: DishDescriptionDetailsProps) => {
  return (
    <>
      <div>
        <h2 className="mb-2 font-semibold">{name}</h2>
        <p className="text-sm mb-3">{description}</p>
      </div>
      <div className="text-sm font-semibold mb-5">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-2">
            <BiTime className="text-specialOrange" size={20} />
            <h3 className=" font-medium">Tempo médio de espera:</h3>
          </div>
          <span>{waitingTime} minutos</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GiKnifeFork className="text-specialOrange" size={20} />
            <h3 className="font-medium">Serve bem até</h3>
          </div>
          <span>{peopleServed} pessoas</span>
        </div>
      </div>
    </>
  );
};

export default DishDescriptionDetails;
