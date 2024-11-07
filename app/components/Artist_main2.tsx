import React from "react";
import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import ArtistSlider from "./artistslider";
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});
export default function Artist_main2() {
  return (
    <div>
      <div
        className={`grid grid-cols-2 min-h-screen -mt-32 ${beVietnamPro.className}`}
      >
        <div className="bg-[#EFECE3] relative flex items-center justify-center">
          <div className="absolute h-full w-px  " />

          <div className="absolute w-full h-px " />

          <div className="text-center space-y-4 z-10  ">
            <h1 className=" text-xl  sm:text-xl lg:text-3xl font-extrabold ">MEET THE</h1>
            <div className="relative"></div>
            <p className="text-3xl sm:5xl lg:text-7xl font-bold   text-[#CB6C2A]">ARTISTS</p>
          </div>
          <div className="absolute grid mt-[390px]">
           <Image
              src={"/images/pamojablack.svg"}
              height={28}
              width={165.62}
              alt="pamoja"
            /> 
          </div>
        </div>

        <div className="bg-[url('/images/footer.png')]  relative  ">
          <div className=" flex flex-col place-items-center mt-20">
            <p className="text-2xl sm:text-3xl lg:text-5xl font-extrabold p-4 text-white place-items-center tracking-wide bg-[#CB6C2A]">
              LAUREN C.
            </p>
            <div className="mt-20"><ArtistSlider/></div>
          </div>
                  </div>
      </div>
    </div>
  );
}
