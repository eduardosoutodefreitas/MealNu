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
      <div className='px-5 md:px-0'>
        <h2 className='mb-2 font-semibold'>{name}</h2>
        <p className='text-sm'>{description}</p>
      </div>
      <div className='font-semibold my-5  px-5 md:px-0'>
        <div className='flex justify-between items-center gap-5 mb-1'>
          <div className='flex items-center gap-2'>
            <BiTime className='text-specialOrange' size={23} />
            <h3 className='font-medium'>Tempo de espera:</h3>
          </div>
          <span>{waitingTime} min.</span>
        </div>
        <div className='flex justify-between items-center  gap-5'>
          <div className='flex items-center gap-2'>
            <GiKnifeFork className='text-specialOrange' size={23} />
            <h3 className='font-medium'>Serve bem até</h3>
          </div>
          <span>{peopleServed} pessoas</span>
        </div>
      </div>
    </>
  );
};

export default DishDescriptionDetails;
