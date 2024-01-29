import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
const DishDescriptionHeader = () => {
  return (
    <header className='h-[10vh] flex items-center justify-between border-b border-veryLightGray dark:border-secundaryDark mb-2 px-5 md:px-0'>
      <Link href='/'>
        <BsArrowLeftShort size={30} className='cursor-pointer' />
      </Link>
      <p className='font-medium mx-auto'>Descrição do produto</p>
      <ThemeSwitcher />
    </header>
  );
};

export default DishDescriptionHeader;
