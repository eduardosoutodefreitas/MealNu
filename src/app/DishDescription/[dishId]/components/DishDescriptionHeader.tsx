import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
const DishDescriptionHeader = () => {
  return (
    <header className="h-[10vh] flex items-center ">
      <Link href="/">
        <BsArrowLeftShort size={30} className="cursor-pointer" />
      </Link>
      <p className="font-medium mx-auto">Descrição do produto</p>
    </header>
  );
};

export default DishDescriptionHeader;
