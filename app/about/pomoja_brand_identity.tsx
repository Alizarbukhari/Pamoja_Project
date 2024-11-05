import React from "react";
import Image from "next/image";

function Pomoja_brand_identity() {
  return (
    <>
     <div className="w-full min-h-screen">
  <div className="">
    <Image
      src="/images/identity_brand.png" 
      alt="Pamoja_Brand_identity"
      width={1280} 
      height={720}
      className="object-contain w-auto h-auto" 
    />
  </div>
</div>
    </>
  );
}

export default Pomoja_brand_identity;
