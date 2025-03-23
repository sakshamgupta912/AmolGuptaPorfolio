import { projects } from "@/datas/data";
import Card from "../components/Card";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const Spotlight = () => {
  return (
    <section
      className="flex flex-col mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%] py-28 pb-48 lg:pt-48"
      id="spotlight"
    >
      <header className="flex flex-row gap-4  justify-start lg:justify-end items-center font-b">
        <div className="flex flex-row gap-4 justify-center lg:justify-end items-center font-bold">
          <span className=" font-bold text-lg sm:text-2xl font-idgrotesk">
            03. Amol in Spotlight
          </span>
          <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
        </div>
      </header>
     <p>Coming Soon..</p> 
    </section>
  );
};
export default Spotlight;
