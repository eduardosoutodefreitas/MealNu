'use client'
import { AiOutlineClose } from "react-icons/ai";
import useMenuSearch from "@/hooks/useMenuSearch";

const MenuSearchInput = () => {
  const { searchValue, handleSearchChange, handleButtonClick } = useMenuSearch();

  return (
    <div className="px-5 py-1 flex gap-1 items-center justify-between w-screen border border-specialOrange rounded-lg">
      <input
        value={searchValue}
        onChange={handleSearchChange}
        autoFocus={true}
        type="text"
        placeholder="Pesquisar"
        className="text-sm bg-transparent outline-none border-none w-5/6 placeholder:text-lightGray placeholder:text-xs"
      />
      <button onClick={handleButtonClick} className="text-specialOrange">
        <AiOutlineClose size={20} />
      </button>
    </div>
  );
};

export default MenuSearchInput;