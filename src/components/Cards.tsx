import React, { useContext, useEffect, useState } from "react";
import { rentals } from "../data";
import { RentalContext } from "../context";
import { Favorite, FavoriteOutlined, Star } from "@mui/icons-material";
import ImageSlider from "./ImageSlider";

export default function Cards() {
  const { rentalCategory } = useContext(RentalContext);
  const [liked, setLiked] = useState<boolean[]>([]);
  const [filterCount, setFilterCount] = useState(0); // Add filterCount state
  const [key, setKey] = useState(0); // Add key state for ImageSlider

  const toggleLiked = (index: number) => {
    setLiked((prevLiked: boolean[]) => {
      const updatedLiked = [...prevLiked];
      updatedLiked[index] = !updatedLiked[index];
      return updatedLiked;
    });
  };

  useEffect(() => {
    // Reset the key whenever the filter changes
    setKey((prevKey) => prevKey + 1);
  }, [rentalCategory]);

  useEffect(() => {
    // Reset the state of the Cards component whenever the filter changes
    setLiked([]);
    setFilterCount(0);
  }, [rentalCategory]);

  return (
    <>
      <div className="container mx-auto grid grid-cols-auto-fit place-items-center overscroll-contain overflow-x-hidden">
        {rentals.map((rental, index) => {
          const { img, location, price, date, desc, ratings, host, category } =
            rental;
          const isLiked = liked[index] || false;
          return (
            <div
              key={index}
              className={`${
                category !== rentalCategory ? "hidden" : ""
              } mb-8 relative `}
            >
              <ImageSlider
                key={key} // Add key prop for refreshing state
                images={rental.img}
              />
              <div
                className="absolute right-4 top-4"
                onClick={() => toggleLiked(index)}
              >
                {!isLiked ? (
                  <FavoriteOutlined color="action" />
                ) : (
                  <Favorite color="error" />
                )}
              </div>

              <div className="text-left flex-1 flex flex-col relative">
                <div className="w-full flex justify-between">
                  <h1 className="font-bold text-base inline">{location}</h1>
                  <span className="flex items-center">
                    <Star fontSize="small" />
                    {ratings}
                  </span>
                </div>
                <span className="text-gray-500">{date}</span>
                <span className="text-gray-500">{desc}</span>
                <span className="font-bold">${price} night</span>
              </div>
              {host && (
                <button className=" absolute top-48 left-4 w-16 h-20 bg-slate-200 shadow-2xl grid place-items-center rounded-l-sm rounded-r-xl ">
                  <div className="w-96 h-full absolute z-10 bg-blue left-2" />
                  <img
                    className="rounded-full object-cover aspect-square w-12 shadow-lg border-l-2"
                    src={host?.photo}
                    alt=""
                  />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
