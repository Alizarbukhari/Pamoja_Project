import Footer from "@/app/components/Footers";
import Shop_card from "../components/shop_card";
import Sidebar from "../components/sidebar";


export default function Shop() {
  return (
    <div className="">
      <div className="relative ">
       <div className="absolute z-10"> <Sidebar/></div>
      <Shop_card/>
      </div>
     
   
    <div className="-mt-8 "><Footer/></div>
    </div>
  );
}




