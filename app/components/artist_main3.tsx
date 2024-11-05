import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";


const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export default function Artist_main3() {
  return (
    <div className="bg-[#EFECE3]">
      <div className="bg-[#EFECE3] text-2xl mx-6  px-7 mt-24 text-[#BC401C] font-semibold">
        <h1>
          HABBYARIMANA <br /> IDDY
        </h1>
      </div>
      <div className="space-y-12 font-satoshi bg-[#EFECE3] text-center capitalize flex flex-col justify-center text-sm leading-relaxed sm:text-base mt-6">
    <p className="mx-auto max-w-[800px] leading-10 align-middle">
        Habyarimana Iddy, born in 1998 in Rusizi, Western Province, Rwanda, is
        a <br />
        professional artist who lives and works in Rwanda. From a young age,{" "}
        <br />
        Habyarimana dreamed of becoming an architect, but by the age of 15 he
        found <br />
        himself drawn to the world of fine art. Influenced by his teachers and
        classmates <br />
        who recognized his talent for Capturing Images From Student Books, he
        chose to <br />
        pursue art in secondary school, eventually enrolling at École d&apos;Art de
        Nyundo. <br />
    </p>
    <p className="mx-auto max-w-[800px] leading-10 align-middle">
        In 2016, Habyarimana put his first brush to canvas, embarking on a
        journey that <br />
        would solidify his love for portraiture and figurative abstraction.
        His work often <br />
        focuses on the lives and experiences of Black People capturing moments
        of <br />
        humanity with a focus on the unique aspects of individual faces. He
        has long been <br />
        fascinated by how we share common physical features yet remain
        visually distinct <br />
        from one another. This curiosity has driven him to study and portray
        these <br />
        differences in his artwork. <br />
    </p>
    <p className="mx-auto max-w-[800px] leading-10 align-middle">
        Primarily working with oil paints and acrylics, Habyarimana&apos;s
        portraits lean toward <br />
        realism. His technique often involves the application of both thick
        and thin layers <br />
        of paint, which lends depth and texture to his works. Through his art,
        he explores <br />
        the complexities of identity and human connection. <br />
    </p>
    <p className="mx-auto max-w-[800px] leading-10 align-middle">
        Habyarimana believes that &apos;art is life, and painting is oxygen.&apos; To
        him, art is a vital <br />
        force that brings joy, freedom, and an ongoing opportunity to learn.
        It allows him <br />
        to connect with people and express the deeper meanings behind their
        visual <br />
        language, sharing those experiences with the world.
    </p>
</div>


      <div className="relative flex bg-[#EFECE3] flex-wrap">
        <div className="absolute -mt-44 flex left-0 h-[396px] w-[270px]">
          <Image
            className="top-[300px] w-auto" // Keep the className for styling
            src="/images/VectorwL.svg" // Keep the leading slash for relative paths
            alt="vactor1"
            width={0} // Specify the width of the image
            height={396} // Specify the height of the image
          />
        </div>
        <div className="absolute -mt-44 flex h-[396px] w-auto right-0">
          <Image
            className="top-[300px] w-auto" // Keep the className for styling
            src="/images/VectorR.svg" // Ensure the leading slash for relative paths
            alt="vactor1"
            width={0} // Use a specific width or calculate it based on your layout
            height={396} // Specify the height of the image
          />
        </div>
      </div>
      <div className="bg-white py-24 px-20 ">
        <div>
          <h1
            className={`text-[#D2681E] font-semibold text-4xl ${beVietnamPro.className}`}
          >
            ARTWORKS DETAILS
          </h1>
          <h1>
            <p className="font-semibold text-4xl leading-9 mt-6">
              HABBYARIMANA IDDY’S <br /> PORTFOLIO
            </p>
          </h1>
          <div>
            <Image
              src={"/images/confident.png"}
              height={404}
              width={501}
              alt="pamoja"
              className="mx-auto flex flex-col"
            />
            <div>
              <h1 className="flex flex-col place-content-center place-items-center gap-5">
                <p className=" flex mt-6">
                  {" "}
                  Title: confidant <br />{" "}
                </p>
                <p>
                  {" "}
                  Original painting <br />{" "}
                </p>
                <p>
                  {" "}
                  Acrylic on canvas <br />{" "}
                </p>
                <p>
                  {" "}
                  Size: 115cm/105cm <br />
                </p>
                <p> Price: 800$ </p>
              </h1>
              <div
                className={`flex w-[192px] mx-auto place-items-center mt-6   py-3 font-bold  text-white  bg-[#CB6C2A] border hover:border-blue-700 ${beVietnamPro.className} `}
              >
                <button className="flex mx-8 px-2 ">ADD TO BAG</button>
              </div>
              <div className="flex items-center justify-center">
              <Image
                className="  mt-14" // Adjusted to center the image with flex properties
                src="/images/artistimage2.png"
                alt="artist_image"
                width={501}
                height={190}
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
