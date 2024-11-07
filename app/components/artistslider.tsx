"use client";
import React, { useState } from "react";
import Image from "next/image";

const ArtistSlider = () => {
  const artists = [
    { name: "Lauren C.", imageSrc: "/images/artistimage1.png" },
    { name: "Artist 2", imageSrc: "/images/bag1.jpeg" },
    { name: "Artist 3", imageSrc: "/images/confident.png" },
    { name: "Artist 4", imageSrc: "/images/bag2.jpeg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artists.length);
  };

  return (
    <div className="flex flex-col items-center mt-20">
      {/* Artist Name */}
      <p className="text-2xl sm:text-3xl lg:text-5xl font-extrabold p-4 text-white tracking-wide bg-[#CB6C2A] uppercase">
        {artists[currentIndex].name}
      </p>

      {/* Container for Image and Arrow */}
      <div className="flex items-center justify-center mt-10">
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

        {/* Arrow Button on Right Side */}
        <button
          className="ml-4 text-white hover:opacity-75 transition-opacity"
          onClick={nextSlide}
        >
          <Image
            src="/images/arrow.svg"
            alt="Next"
            className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px]"
            width={70}
            height={70}
          />
        </button>
      </div>
    </div>
  );
};

export default ArtistSlider;