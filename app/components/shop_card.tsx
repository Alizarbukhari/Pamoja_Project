import Image from "next/image";

function Shop_card() {
  return (
    <div className="">
     
      <div className="flex  flex-col">
       
     <div className="flex  flex-col lg:flex-row flex-1 ">
     <div className="flex  relative group">
     <Image
          src="/images/bag1.jpeg"
          height={640}
          width={420}
          alt=""
          className="flex-1  sm:w-[320px] md:w-[360px] lg:w-[420px] xl:w-[720px] " 
          title="Pamooja 1"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">
        <span className="text-white text-xl">Pamooja 1</span>
      </div>
     </div>
 
       <div className="flex relative group">
       <Image
          src="/images/bag2.jpeg"
          height={640}
          width={420}
          alt=""
          className="flex-1  sm:w-[320px] md:w-[360px] lg:w-[420px] xl:w-[720px] "
          title="Pamooja 2"
        /> 
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">
        <span className="text-white text-xl">Pamooja 2</span>
      </div>
       </div>
     </div>
     <div className="flex  flex-col lg:flex-row flex-1 hover:">
     <div className="flex  relative group">
     <Image
          src="/images/confident.png"
          height={640}
          width={420}
          alt=""
          className="flex-1  sm:w-[320px] md:w-[360px] lg:w-[420px] xl:w-[720px] " 
          title="Pamooja 1"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">
        <span className="text-white text-xl">Pamooja 3</span>
      </div>
     </div>
 
       <div className="flex relative group">
       <Image
          src="/images/artistimage1.png"
          height={640}
          width={420}
          alt=""
          className="flex-1  sm:w-[320px] md:w-[360px] lg:w-[420px] xl:w-[720px] "
          title="Pamooja 2"
        /> 
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">
        <span className="text-white text-xl">Pamooja 4</span>
      </div>
       </div>
     </div>
      </div>
    </div>
  );
}

export default Shop_card;

//  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">