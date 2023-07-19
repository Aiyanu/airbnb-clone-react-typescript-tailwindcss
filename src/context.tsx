import { createContext, useState } from "react";

interface IRentalContext {
  rentalCategory: string;
  changeRentalCategory: (name: string) => void;
}

export const RentalContext = createContext<IRentalContext>({
  rentalCategory: "",
  changeRentalCategory: () => {},
});

export const RentalContextProvider= ({ children }:{children:React.ReactNode}) => {
  const [rentalCategory, setRentalCategory] = useState("rooms");

  const changeRentalCategory = (name: string) => {
    setRentalCategory(name);
  };

  const rentalContextValue: IRentalContext = {
    rentalCategory,
    changeRentalCategory,
  };

  return (
    <RentalContext.Provider value={rentalContextValue}>
      {children}
    </RentalContext.Provider>
  );
};
