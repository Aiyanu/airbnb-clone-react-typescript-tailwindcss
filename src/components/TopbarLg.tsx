import React, { useState } from "react";
import { Menu,AccountCircle,Language } from "@mui/icons-material";
import SearchBar from "./SearchBar";

export default function TopbarLg() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="grid grid-cols-3 place-content-between w-full justify-start items-center place-items-center">
      <div className="flex items-center justify-center gap-2 cursor-pointer place-self-start my-auto ml-6 p-6">
        <img src="/assets/airbnbLogo1.png" alt="logo" className="w-7" />
        <p className="font-bold text-2xl text-[#ff385c] hidden lg:block" style={{"fontFamily":"Questrial"}}>
        airbnb
        </p>
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="flex items-center gap-4 place-self-end my-auto mr-8">
        <span className="rounded-3xl hover:bg-gray-200 p-4 cursor-pointer">
          Airbnb your home
        </span>
        <div className="hover:bg-gray-200 rounded-full p-4 grid place-items-center">
          <Language fontSize="small" />
        </div>
        <div
          className="flex item-center justify-center gap-2 p-2 shadow-lg hover:shadow-2xl rounded-3xl cursor-pointer border border-gray-200 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu fontSize="small" />
          <AccountCircle color="disabled" />
          <div
            className={`absolute z-20 -bottom-52 right-4 flex flex-col bg-white shadow-xl rounded-lg w-60 gap-4  p-4 ${
              isOpen ? "" : "hidden"
            }`}
          >
            <a href="#signup">Sign up</a>
            <a href="#login">Login</a>
            <hr />
            <a href="#ayh">Airbnb your home</a>
            <a href="#help">help</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
