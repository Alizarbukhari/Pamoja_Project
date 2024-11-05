
import Navebar from "@/app/components/event_navebar";
import Member_div from "@/app/components/member";

import { MdArrowOutward } from "react-icons/md";
import Footer from "@/app/components/Footers";
import Sidebar from "@/app/components/sidebar";
import Link from "next/link";

export default function Event() {
  return (
    // main div
    <div>
      {/* logo div */}
      <div className="flex flex-row justify-between items-center sm:flex-row sm:justify-center">
        <Sidebar/>
        <div className="flex-1 text-center text-2xl font-bold">PAMOJA</div>
      </div>

      {/* event div */}
      <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:mx-10 lg:mx-48 mt-10">
        <div className="text-center sm:text-left">
          <span className="text-3xl sm:text-5xl font-bold">EVENTS</span>
          <p className="text-orange-700 font-semibold text-lg sm:text-xl">UPCOMING EVENTS</p>
        </div>
        <Link href="/"><div className="font-semibold text-slate-300 text-lg sm:text-xl hover:underline decoration-blue-400  mt-4 flex items-center sm:mt-0">OUR MAILING LIST<MdArrowOutward /></div></Link>
      </div> 
      {/* navbar div */}
      <div className=" mt-4">
        <Navebar/>
      </div>
      {/* member div */}
      <div className=" mt-8 mx-16">
        <Member_div title='Sun, Oct 6'/>
        <Member_div />
        <Member_div title='Mon, Oct 7' />
        <Member_div />
        <Member_div title='Mon, Oct 8'/>
       
      </div>
         <div className= "mt-20"><Footer/></div>
    </div>
  );
}
