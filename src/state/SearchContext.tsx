import { PropsWithChildren, createContext, useContext, useState } from "react";

type Context = {
  searchValue: string;
  handleSearchChange: (newValue: string) => void;
};

type Provider = PropsWithChildren;

// Create a context for the searchValue
const SearchValueContext = createContext<Context>({
  searchValue: "",
  handleSearchChange: () => null,
});

// Custom hook to access the searchValue and update function
export const useSearchValue = () => useContext(SearchValueContext);

export const SearchValueProvider = ({ children }: Provider) => {
  // State for searchValue
  const [searchValue, setSearchValue] = useState("");
  // console.log(searchValue);

  // Function to update the searchValue
  const handleSearchChange = (newValue: string) => {
    setSearchValue(newValue);
  };

  return (
    <SearchValueContext.Provider value={{ searchValue, handleSearchChange }}>
      {children}
    </SearchValueContext.Provider>
  );
};
