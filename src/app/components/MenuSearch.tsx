"use client";

import { BiSearchAlt } from "react-icons/bi";
import MenuSearchInput from "./MenuSearchInput";
import useMenuSearch from "@/hooks/useMenuSearch";

const MenuSearch = () => {
  const { searchIsOpen, handleButtonClick } = useMenuSearch()

  return (
    <>
      {searchIsOpen && (
        <MenuSearchInput />
      )}
      {!searchIsOpen && (
        <button onClick={handleButtonClick}>
          <BiSearchAlt size={15} className="text-darkGray cursor-pointer" />
        </button>
      )}
    </>
  );
};

export default MenuSearch;
