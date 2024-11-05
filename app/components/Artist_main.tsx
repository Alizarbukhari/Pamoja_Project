import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

function Artist_main() {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-dvh relative ${beVietnamPro.className}`}
    >
      <div className="absolute h-dvh w-px  top-0" />

      <div className="text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl  sm:text-4xl font-bold  -mt-60 tracking-wide">
            MEET THE
          </h1>
          <p className="text-4xl sm:text-5xl font-bold tracking-wide text-[#CB6C2A]">
            ARTISTS
          </p>
        </div>
      </div>

      <div className=" top-[540px] tracking-widest">
        <Image
          src={"/images/pamojablack.svg"}
          height={28}
          width={165.62}
          alt="pamoja"
        />
      </div>
    </div>
  );
}

export default Artist_main;
