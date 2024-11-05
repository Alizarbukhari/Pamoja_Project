import React from 'react'
import Image from 'next/image'
import Sidebar from '@/app/components/sidebar'
function Text() {
  return (
    <div className='flex flex-col bg-[#EFECE3] min-h-screen'>

        <Sidebar/>
        <div className=" flex mx-auto -mt-10 ">
  <Image src={"/images/pamojablack.svg"}  height={28} width={165.62} alt="pamoja" />
</div>
       
<div className="space-y-12 text-center flex flex-col justify-center text-sm leading-relaxed sm:text-base mt-6">
    <p className='mx-auto max-w-[800px] leading-10 align-middle'>
        Pamoja is an innovative virtual gallery and community platform
        dedicated to celebrating and <br /> empowering African artists. Our mission is
        to bridge the gap between local talent and global <br /> opportunities,
        offering a unique space to showcase your exceptional work to an
        international <br /> audience.
    </p>

    <p className='mx-auto max-w-[800px] leading-10 align-middle'>
        Designed with your needs in mind, Pamoja provides tools and resources
        to help you thrive in the <br /> global art scene. We believe in the power of
        art to transcend boundaries and are committed to <br /> ensuring that African
        artists are recognized and celebrated worldwide.
    </p>

    <p className='mx-auto max-w-[800px] leading-10 align-middle'>
        Pamoja is more than just a gallery; it&apos;s a vibrant community where
        creativity flourishes, <br /> collaboration is encouraged, and opportunities
        for growth are abundant. Whether you are an <br /> emerging artist or an
        established creator, Pamoja supports your artistic journey.
    </p>

    <p className="text-gray-700 flex mx-auto">ALL RIGHTS RESERVED PAMOJA © GALLERY
    </p>
</div>

        <div className='relative flex bg-[#EFECE3] flex-wrap'> 
  <div className="absolute -mt-32 flex left-0 ">
    <Image 
      className='top-[300px] h-[396px] w-auto' 
      src="/images/Vector1.svg" 
      alt="vactor1" 
      width={0} // Width ko specify karein
      height={6} // Height ko specify karein
    />
  </div>
  <div className="absolute -mt-36 flex  right-0">
    <Image 
      className='top-[300px] h-[396px] w-auto' 
      src="/images/Vector2.svg" 
      alt="vactor1" 
      width={0} // Width ko specify karein
      height={0} // Height ko specify karein
    />
  </div>
  <div className='flex w-full'>
    <div className="flex top-1/2 mt-7">
      <Image 
        src="/images/pamoja_identity.jpeg" 
        alt="Pamoja_Brand_identity" 
        width={1480} // Width ko specify karein
        height={720} // Height ko specify karein
      />
    </div>
  </div>
</div>
</div>
  )
}

export default Text