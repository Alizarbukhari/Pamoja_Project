import Close_menu from "@/app/components/close_menu"
import Link from "next/link"

export default function MenuPage() {
  return (
    <div className="bg-[url('/images/footer.png')] h-screen w-screen flex place-items-center justify-center relative">
    
      <Close_menu/>
      <nav className="flex flex-col font-extrabold items-center justify-center h-full gap-6 -mt-20 text-3xl sm:text-4xl">
        <Link 
          href="/shop" 
          className="text-white  hover:opacity-70 transition-opacity"
        >
          SHOP
        </Link>
        <Link 
          href="/artists" 
          className="text-black hover:opacity-70 transition-opacity"
        >
          ARTISTS
        </Link>
        <Link 
          href="/about-us" 
          className="text-white hover:opacity-70 transition-opacity"
        >
          ABOUT US
        </Link>
        <Link 
          href="/contact" 
          className="text-black hover:opacity-70 transition-opacity"
        >
          CONTACT
        </Link>
        <Link 
          href="/events" 
          className="text-white hover:opacity-70 transition-opacity"
        >
          EVENTS
        </Link>
      </nav>
    </div>
  )
}