import { ChevronLeft, ChevronRight, Tune } from "@mui/icons-material";
import React, { useContext, useRef, useState } from "react";
import { categories } from "../data";
import { RentalContext } from "../context";

export default function Filter() {
  const [index, setIndex] = useState(0);
  const { rentalCategory, changeRentalCategory } = useContext(RentalContext);

  const handleClick = (id: number,name:string) => {
    // console.log(name);
    window.scrollTo(0,0)
    setIndex(id);
    changeRentalCategory(name);
    
    
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft -= 100; // Adjust the scroll amount as needed
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleScrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += 100; // Adjust the scroll amount as needed
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      setScrollLeft(container.scrollLeft);
    }
  };

  return (
    <div className="flex gap-4 justify-center items-center px-4 pt-2">
      <div
        className={`mr-2 ${
          scrollLeft === 0 ? "hidden" : "block"
        } max-md:hidden p-1 rounded-full border grid place-items-center cursor-pointer`}
        onClick={handleScrollLeft}
      >
        <ChevronLeft fontSize="small" />
      </div>
      <div
        id="scroll-container"
        style={{ maxWidth: "100%", scrollBehavior: "smooth" }}
        ref={containerRef}
        onScroll={handleScroll}
        className="flex no-scrollbar overflow-x-auto space-x-4 gap-8 px-8"
      >
        {categories.map((category, id) => {
          const { name, img } = category;
          const isActive = index === id;
          return (
            <div
              key={id}
              className="relative cursor-pointer group w-18 pb-2"
              onClick={() => {
                handleClick(id, name);
              }}
            >
              <div className="flex flex-col gap-4 justify-center items-center">
                <img
                  src={img}
                  className={`w-6 ${isActive ? "" : "filter grayscale"}`}
                  alt=""
                />
                <span
                  className={`text-center flex flex-nowrap text-xs w-full capitalize flex-shrink ${
                    isActive ? "" : "text-gray-500"
                  }`}
                >
                  <p className="text-center">{name}</p>
                </span>
              </div>
              <div
                className={`absolute bottom-0 w-full ${
                  isActive ? "border border-black" : ""
                } group-hover:border`}
              />
            </div>
          );
        })}
      </div>
      <div
        className={`p-1 rounded-full ml-4 ${
          containerRef.current &&
          scrollLeft >=
            containerRef.current.scrollWidth - containerRef.current.offsetWidth
            ? "hidden"
            : "block"
        } max-md:hidden full border grid place-items-center cursor-pointer`}
        onClick={handleScrollRight}
      >
        <ChevronRight fontSize="small" />
      </div>
      <div className="border p-4 flex rounded-2xl max-md:hidden cursor-pointer">
        <Tune />
        <span className="capitalize">filters</span>
      </div>
    </div>
  );
}
