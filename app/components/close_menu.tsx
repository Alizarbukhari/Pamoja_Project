"use client"

import Link from 'next/link'
import Image from 'next/image'
export default function Close_menu()
 {
  
  return (
    <div>
    <Link href="/about" className="absolute left-4 top-4 hover:border-4 border-blue-700 transition-opacity">
      <div className="h-[61px] w-[61px] flex items-center justify-center">
        <Image src="/images/close_button.svg" alt="close button" width={61} height={61} />
      </div>
      <span className="sr-only">Close menu</span>
    </Link>
  </div>
  )
}
