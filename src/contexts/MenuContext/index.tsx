"use client";
import { FoodCategory } from "@prisma/client";
import { createContext, useState } from "react";

interface IMenuContextProps {
  selectedTag: FoodCategory | null;
  setSelectedTag: (tag: FoodCategory | null) => void;
  searchIsOpen: boolean;
  handleSearchToggle: (state: boolean) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const MenuContext = createContext<IMenuContextProps>({
  selectedTag: null,
  searchIsOpen: false,
  setSelectedTag: () => { },
  handleSearchToggle: (state) => { },
  searchValue: '',
  setSearchValue: () => { },
});

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTag, setSelectedTag] = useState<FoodCategory | null>(null);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const handleSearchToggle = (state: boolean) => {
    setSearchIsOpen(state);
    if (selectedTag !== null) {
      setSelectedTag(null)
    }
  };
  return (
    <MenuContext.Provider
      value={{ selectedTag, searchIsOpen, searchValue, setSelectedTag, handleSearchToggle, setSearchValue }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
