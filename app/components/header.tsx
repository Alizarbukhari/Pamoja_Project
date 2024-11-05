import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="relative w-full h-[900px]">
        {/* Background Image */}
        <Image
          className="w-full h-full object-cover"
          src={"/header image.svg"}
          layout="fill"
          alt="Header Background"
        />

        {/* Overlay Text at Bottom */}
        <div className="absolute bottom-0 w-full text-center text-white py-8">
          <div className="flex justify-center flex-col items-center text-4xl font-bold mb-2">
            <Image src={"/logo/Group.svg"} height={60} width={60} alt="Logo" />
            <span className="ml-2 text-2xl">PAMOJA</span>
          </div>
          <div className="flex justify-center gap-20 text-lg">
            <div>About Us</div>
            <div>Artist</div>
            <div>Shop</div>
            <div>Event</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
    </>
  );
}
