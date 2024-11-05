import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Event_navbar() {
  return (
    <div className="w-full h-[100px]  bg-[#D2681E] flex items-center">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:mx-[200px] w-[1000px]">
        <div>
          <input
            type="text"
            placeholder="ALL EVENTS"
            className=" bg-[#D2681E] placeholder:text-white w-[300px] border-white border"
          />
        </div>
        <div className=" flex items-center">
          <IoIosArrowBack className="text-white"/>
          <input
            type="text"
            placeholder="SUN, OCT 6"
            className=" bg-[#D2681E]  placeholder:text-white w-[300px] border-white border"
          />
          <IoIosArrowForward className="text-white"  />

        </div>
      </div>
    </div>
  );
}

