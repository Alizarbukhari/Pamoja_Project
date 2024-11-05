import Image from "next/image";
import Navebar from "@/app/components/Navbar";

export default function Footer() {
  return (
    <div className="bg-[url('/images/footer.png')] h-[375px] w-full flex place-items-center justify-center relative">
      {/* Vertex Image */}
      <div className="absolute top-0 flex justify-center my-4 md:my-8">
        <Image
          src={"/images/vertex.svg"}
          height={70} // Small screen size
          width={70} // Small screen size
          alt="vertex"
          className="md:h-[141.12px] md:w-[139.46px]" // Medium and larger screens
        />
      </div>

      {/* Pamoja Logo */}
      <div className="absolute top-[150px] md:top-[200px] flex justify-center">
        <Image
          src={"/images/pamoja.svg"}
          height={14} // Small screen size
          width={90} // Small screen size
          alt="pamoja"
          className="md:h-[19.01px] md:w-[112.45px]" // Medium and larger screens
        />
      </div>

      {/* Navbar */}
      <div className="absolute bottom-10 md:bottom-14 flex justify-center w-full">
        <Navebar />
      </div>

      {/* Footer Text */}
      <p className="absolute bottom-2 font-thin text-xs md:text-sm lg:text-base text-white flex justify-center w-full">
        ALL RIGHTS RESERVED PAMOJA © GALLERY
      </p>
    </div>
  );
}
