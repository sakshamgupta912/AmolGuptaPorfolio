import { spotlight } from "@/datas/data";
import Card from "../components/Card";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export default function Work() {
  return (
    <div className="flex flex-col xl:mx-[10%] lg:mx-[7%] mx-0 md:mx-[7%] my-24 mt-24  py-8 gap-16">
      <div className=" flex items-center gap-2 sm:gap-8">
        <Link
          href={"/"}
          className=" p-2 bg-[#FBEDDD] rounded-full text-black flex w-min"
        >
          <IoMdArrowRoundBack size={25} />
        </Link>
        <h1 className=" font-semibold text-4xl sm:text-5xl">Amol in Spotlight</h1>
      </div>
      {spotlight.map(
        (project, id) =>
          project && (
            <Card
              key={id}
              id={id}
              name={project?.name}
              description={project?.description}
              image={"/spotlight"+(project?.image || "")}
              liveLink={project?.link}
              stacks={project?.platforms}
              type={project?.type}
            />
          )
      )}
    </div>
  );
}
