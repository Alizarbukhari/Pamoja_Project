import Navebar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url('/images/bg.jpeg')] bg-cover bg-center w-full h-full min-h-screen">
      <div className="absolute bottom-0 left-0 right-0 flex justify-center bg-transparent pb-28 ">
        
        <Image
          src={"/images/vertex.svg"}
          height={76.87}
          width={75.96}
          alt="vertex"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center bg-transparent pb-20 ">
        {" "}
        <Image
          src={"/images/pamoja.svg"}
          height={19.01}
          width={112.45}
          alt="pamoja"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center bg-transparent">
        {" "}
        <Navebar />
      </div>
    </div>
  );
}
