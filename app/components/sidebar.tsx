import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex ">
      <Link href={"/menupage"}>
        <Image
          className="h-[50px] w-[50px] mt-4 mx-4 hover:border-4 border-blue-700"
          src="/images/sidebutton.svg"
          alt="button"
          height={0}
          width={0}
        />{" "}
      </Link>
    </div>
  );
}
