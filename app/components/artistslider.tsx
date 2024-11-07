"use client"
import React, { useState } from "react";
import Image from "next/image";

const ArtistSlider = () => {
  const artists = [
    { name: "Artist 1", imageSrc: "/images/artistimage1.png" },
    { name: "Artist 2", imageSrc: "/images/bag1.jpeg" },
    { name: "Artist 3", imageSrc: "/images/confident.png" },
    { name: "Artist 4", imageSrc: "/images/bag2.jpeg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artists.length);
  };

  return (
    <div className="flex items-center justify-between w-full max-w-lg mx-auto md:items-start md:flex-row">
      {/* Artist Image */}
      <div className="text-center">
        <Image
          src={artists[currentIndex].imageSrc}
          alt={artists[currentIndex].name}
          width={300}
          height={300}
          className="object-contain rounded-lg sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]"
        />
      </div>

      {/* Arrow Button */}
      <button
        className="text-white hover:opacity-75 transition-opacity md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 lg:bottom-0 lg:right-0 lg:translate-y-0"
        onClick={nextSlide}
      >
        <Image
          src="/images/arrow.svg"
          alt="arrow"
          className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px]"
          width={70}
          height={70}
        />
      </button>
    </div>
  );
};

export default ArtistSlider;
