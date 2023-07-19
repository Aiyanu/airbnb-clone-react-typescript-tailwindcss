import React, { useContext, useState } from "react";
import { rentals } from "../data";
import { RentalContext } from "../context";
import {
  ChevronLeft,
  ChevronRight,
  Favorite,
  FavoriteOutlined,
  Star,
} from "@mui/icons-material";
import ImageSlider from "./ImageSlider";
// import { Swiper, SwiperSlide } from "swiper/react";

export default function Cards() {
  const [scrollPositions, setScrollPositions] = useState<number[]>([]);
  const [liked, setLiked] = useState<boolean[]>([]);
  const [index, setIndex] = useState();
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
    <>
      <h1 className="text-6xl">Test</h1>
      <div className="container mx-auto grid grid-cols-auto-fit place-items-center overscroll-contain">
        {newRentals.map((rental, index) => {
          const { img, location, price, date, desc, ratings, host } = rental;
          const isLiked = liked[index] || false;
          return (
            <div key={index} className="mb-8 relative">
              <ImageSlider images={rental.img} />
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
              {host && <button className=" absolute top-48 left-4 w-16 h-20 bg-slate-200 shadow-2xl grid place-items-center rounded-l-sm rounded-r-xl ">
                <div className="w-96 h-full absolute z-10 bg-blue left-2" />
                <img
                  className="rounded-full object-cover aspect-square w-12 shadow-lg border-l-2"
                  src={host?.photo}
                  alt=""
                />
              </button>}
            </div>
          );
        })}
      </div>
    </>
  );
}
