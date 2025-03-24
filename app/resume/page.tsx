import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="flex flex-col xl:mx-[10%] lg:mx-[7%] mx-0 md:mx-[7%] my-24 mt-24 py-8 gap-16">
      <div className="flex items-center gap-2 sm:gap-8">
        <Link
          href={"/"}
          className="p-2 bg-[#FBEDDD] rounded-full text-black flex w-min"
        >
          <IoMdArrowRoundBack size={25} />
        </Link>
        <h1 className="font-semibold text-4xl sm:text-5xl">Resume</h1>
      </div>

      {/* Display PDF using iframe */}
      <div className="w-full h-[80vh] border rounded-lg shadow-md">
        <iframe
          src="/Resume.pdf" // 
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
