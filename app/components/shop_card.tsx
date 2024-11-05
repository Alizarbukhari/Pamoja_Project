import Image from "next/image";
import Sidebar from "./sidebar";

interface ShopDivProps {
  title: string;
  imageUrl: string;
  showIcon?: boolean;
}

export default function ShopCard({ imageUrl, title, showIcon = false }: ShopDivProps) {
  return (
    <div className="relative w-full h-[720px]">
      {showIcon && (
        <div className="absolute z-10">
          <Sidebar/>
        </div>
      )}
      <Image
        src={imageUrl} 
        alt={title}
        className="w-full h-full object-cover"
        layout="fill" // This makes the Image component take the full width and height of the parent div
        objectFit="cover" // This will make the image cover the area while maintaining aspect ratio
      />
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">
        <span className="text-white text-xl">{title}</span>
      </div>
    </div>
  );
}
