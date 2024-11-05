import Artist_main from "@/app/components/Artist_main"
import Artist_main2 from "@/app/components/Artist_main2"
import Artist_main3 from "@/app/components/artist_main3"
import Sidebar from "@/app/components/sidebar"
import Footer from "@/app/components/Footers"


function Artist() {
  return (
    <>
 <div className="min-h-screen bg-[#EFECE3] relative">
      <Sidebar/>
    
      <Artist_main/>
      <Artist_main2/>
      <Artist_main3/>
      <div className="-mt-24">
      <Footer/>
      </div>
     
    </div>

      </> )
}

export default Artist
