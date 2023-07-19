import React from "react";
import {Search} from "@mui/icons-material"

export default function SearchBar() {
    return (
      <div >
        <section className="shadow-lg hover:shadow-2xl rounded-3xl flex gap-4 cursor-pointer py-2 px-4 text-md items-center border border-gray-200">
          <div>Anywhere</div>
          <div className="border h-8" />
          <div>Anyway</div>
          <div className="border h-8" />
          <div>Add guests</div>
          <div className="rounded-full bg-[#ff385c] grid item-center text-white p-1">
            <Search fontSize="small" />
          </div>
        </section>
      </div>
    );
}
