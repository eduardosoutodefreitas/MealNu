"use client";
import { FoodCategory } from "@prisma/client";
import { createContext, useState } from "react";

interface IMenuContextProps {
  selectedTag: FoodCategory | null;
  setSelectedTag: (tag: FoodCategory | null) => void;
}

export const MenuContext = createContext<IMenuContextProps>({
  selectedTag: null,
  setSelectedTag: () => {},
});

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTag, setSelectedTag] = useState<FoodCategory | null>(null);
  return (
    <MenuContext.Provider value={{ selectedTag, setSelectedTag }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
