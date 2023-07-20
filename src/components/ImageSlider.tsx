import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React, { useState, useRef, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollPosition = sliderRef.current.scrollLeft;
        const containerWidth = sliderRef.current.offsetWidth;
        const imageIndex = Math.round(scrollPosition / containerWidth);
        setCurrentIndex(imageIndex);
      }
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      sliderRef.current?.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      sliderRef.current?.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };


  return (
    <div className="relative">
      <div
        ref={sliderRef}
        className="no-scrollbar overflow-x-scroll flex snap-mandatory snap-x w-72 relative"
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 snap-start">
            <img
              src={image}
              alt={` ${index}`}
              className="w-full snap-center rounded-2xl aspect-square object-cover"
            />
          </div>
        ))}
      </div>

      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-2 rounded-full group-hover:lg:inline bg-gray-200 bg-opacity-70 hover:bg-white top-1/2"
        >
          <ChevronLeft />
        </button>
      )}
      {currentIndex < images.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-2 rounded-full group-hover:lg:inline bg-gray-200 bg-opacity-70 hover:bg-white top-1/2"
        >
          <ChevronRight />
        </button>
      )}

      <div className="absolute flex justify-center space-x-2 mt-4 left-0 right-0 bottom-2">
        {images.slice(0, 5).map((_, index) => (
          <span
            key={index}
            className={`w-1.5 h-1.5 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
