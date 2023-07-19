import { Search, Tune } from "@mui/icons-material";
import React from "react";

export default function TopBarSm() {
  return (
    <div className="lg:hidden px-8 w-full h-full py-4">
      <div className="rounded-full max-w-lg max-h-fit border m-auto px-3 py-1 flex justify-between items-center shadow-lg">
        <div className="flex justify-between gap-8 items-center">
          <div>
            <Search />
          </div>
          <div className="text-left">
            <div className="font-semibold">Anywhere</div>
            <div className="text-xs text-gray-300 flex gap-1">
              <span>Any week</span>•<span>Add guests</span>
            </div>
          </div>
        </div>
        <div className="border rounded-full grid place-item-center p-2">
          <Tune fontSize="small" />
        </div>
      </div>
    </div>
  );
}
