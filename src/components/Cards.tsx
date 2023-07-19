import React, { useContext, useState } from "react";
import { rentals } from "../data";
import { RentalContext } from "../context";
import {
  ChevronLeft,
  ChevronRight,
  Favorite,
  FavoriteBorderOutlined,
  FavoriteOutlined,
} from "@mui/icons-material";

export default function Cards() {
  const [scrollPositions, setScrollPositions] = useState<number[]>([]);
  const [liked, setLiked] = useState<boolean[]>([]);
  const { rentalCategory } = useContext(RentalContext);
  const newRentals = rentals.filter(
    (rental) => rental.category === rentalCategory
  );

  const handleScroll = (index: number, e: React.UIEvent<HTMLElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    setScrollPositions((prevScrollPositions: number[]) => {
      const updatedScrollPositions = [...prevScrollPositions];
      updatedScrollPositions[index] = scrollLeft;
      return updatedScrollPositions;
    });
  };

  const toggleLiked = (index: number) => {
    setLiked((prevLiked: boolean[]) => {
      const updatedLiked = [...prevLiked];
      updatedLiked[index] = !updatedLiked[index];
      return updatedLiked;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 px-8">
      {newRentals.map((rental, index) => {
        const { img, location, price, date, desc, category } = rental;
        const isLiked = liked[index] || false;
        return (
          <div className="flex flex-col group cursor-pointer" key={index}>
            <div className="max-w-full flex-4 relative">
              <div
                className="no-scrollbar overflow-x-scroll flex snap-mandatory snap-x w-72 relative"
                onScroll={(e) => handleScroll(index, e)}
              >
                {img.map((img, i) => (
                  <img
                    className="snap-center rounded-2xl w-72 h-72 aspect-square"
                    src={img}
                    alt=""
                    key={i}
                  />
                ))}
              </div>
              <div
                className="absolute right-4 -top-[24rem]"
                onClick={() => toggleLiked(index)}
              >
                {!isLiked ? (
                  <FavoriteOutlined color="action" />
                ) : (
                  <Favorite color="error" />
                )}
              </div>
            </div>
            <div className="text-left flex-1 flex flex-col relative">
              <div className="absolute left-2 rounded-full hidden group-hover:lg:inline bg-gray-200 bg-opacity-70 hover:bg-white -top-40">
                <ChevronLeft />
              </div>
              <div className="absolute right-2  rounded-full hidden group-hover:lg:inline bg-gray-200 bg-opacity-70 hover:bg-white -top-40">
                <ChevronRight />
              </div>
              <div className="flex justify-center absolute gap-2 -top-8 left-0 right-0">
                {[...Array(img.length)].slice(0, 5).map((_, i) => (
                  <div
                    className={`rounded-full bg-gray-200 h-1.5 w-1.5 ${
                      scrollPositions[index] >= i * 100
                        ? "bg-white"
                        : "bg-gray-300 bg-opacity-90"
                    }`}
                    key={i}
                  />
                ))}
              </div>
              <h1 className="font-bold text-base">{location}</h1>
              <span className="text-gray-500">{date}</span>
              <span className="text-gray-500">{desc}</span>
              <span className="font-bold">${price} night</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
