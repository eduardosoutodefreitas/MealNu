import { MenuContext } from '@/contexts/MenuContext';
import { useContext } from 'react';

const useMenuSearch = () => {
  const { setSearchValue, handleSearchToggle, searchIsOpen, searchValue} = useContext(MenuContext);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleButtonClick = () => {
    handleSearchToggle(!searchIsOpen);
    setSearchValue('');
  };

  return { searchValue, searchIsOpen, handleSearchChange, handleButtonClick };
};

export default useMenuSearch;
