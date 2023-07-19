import { createContext, useState } from "react";

interface IContext {
  rentalCategory: string;
  changeRentalCategory: (name:string) => void;
  isHidden: boolean;
  handleScroll: () => void;
}

export const RentalContext = createContext<IContext>({
  rentalCategory: "",
  changeRentalCategory: () => {},
  isHidden: false,
  handleScroll: () => {},
});

export const RentalContextProvider= ({ children }:{children:React.ReactNode}) => {
  const [rentalCategory, setRentalCategory] = useState("rooms");
  const [isHidden, setIsHidden] = useState(false);

  function handleScroll() {
    setIsHidden(true)
    console.log("jdsb");
  }

  const changeRentalCategory = (name: string) => {
    setRentalCategory(name);
  };

  const contextValue: IContext = {
    rentalCategory,
    changeRentalCategory,
    isHidden,
    handleScroll
  };


  return (
    <RentalContext.Provider value={contextValue}>
      {children}
    </RentalContext.Provider>
  );
};
