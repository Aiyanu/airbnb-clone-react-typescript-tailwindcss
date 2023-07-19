import React from "react";
import Cards from "./Cards";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { IOSSwitch } from "./Switch";

export default function Main() {
  return (
    <div className="flex-grow pb-8">
      <Cards />
    </div>
  );
}

{/* <div className="flex m-auto justify-between items-center py-4 px-3 border max-w-2xl gap-4 rounded-2xl my-8">
  <div className="flex gap-4">
    <span>Display total price</span>
    <div className="border h-8" />
    <span>Includes all fees, before taxes</span>
  </div>
  <IOSSwitch sx={{ m: 1 }} defaultChecked />
</div> */}