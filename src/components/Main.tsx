import React, { useContext } from "react";
import Cards from "./Cards";
import { Map } from "@mui/icons-material";
import { RentalContext } from "../context";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import { IOSSwitch } from "./Switch";

export default function Main() {
  return (
    <div className="flex-grow pb-10 relative">
      <Cards />
      <div
        className={`cursor-pointer flex justify-center fixed bottom-20 z-10 left-0 right-0 `}
      >
        <div className="bg-[#222] rounded-full text-white text-center p-3 inline-block">
          <span className="text-base capitalize">
            <span className="max-md:hidden">show</span> map
          </span>{" "}
          <Map fontSize="medium" />
        </div>
      </div>
    </div>
  );
}