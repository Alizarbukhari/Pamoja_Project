import Image from "next/image";


interface MemberDivProps {
  title?: string;
}
export default function Member_div({title}:MemberDivProps) {
  return (
    <>
      <div className="w-full h-auto">
        <div className="max-w-[1600px] mx-auto flex flex-wrap justify-between  p-4">
          {/* Conditional rendering for title or placeholder with flex-grow */}
          {title ? (
            <div className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-0 w-full sm:w-auto text-center sm:text-left">
              {title}
            </div>
          ) : (
            <div className="w-full sm:w-auto mb-4 sm:mb-0 mx-28"></div>
          )}
          <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center sm:text-left">
            <div className="text-orange-700 font-semibold text-lg sm:text-xl">Member Early Hour</div>
            <div className="text-lg sm:text-xl mt-2 sm:mt-6">
              <p className="font-semibold">9:30-10:30am</p>
              <p>PAMOJA</p>
              <p>Gallery Experience,</p>
              <p>for members</p>
            </div>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-end">
            <Image src="/images/bg.jpeg" width={300} height={50} alt="" className="w-[80%] sm:w-[300px]" />
          </div>
        </div>
      </div>
    </>
  );
}
