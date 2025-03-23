import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";

interface CardProps {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
  stacks: Array<string>;
}

const Card = ({
  id,
  name,
  type,
  description,
  image,
  liveLink,
  githubLink,
  stacks,
}: CardProps) => {
  const isEven = id % 2 === 0;
  return (
    <section
      className={`flex flex-col lg:flex-row w-full md:px-12  items-center px-0`}
      data-aos={`fade-up`}
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div
        className={`w-full sm:w-[90%] lg:w-[60%] ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {liveLink ? (
          <Link
            href={liveLink}
            className="w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image}
              alt={`${name} Image`}
              className=" object-contain h-auto lg:object-cover grayscale hover:grayscale-0 transition-all w-full lg:h-[370px] lg:object-left rounded-t-lg lg:rounded-lg shadow-lg"
            />
          </Link>
        ) : (
          <img
            src={image}
            alt={`${name} Image`}
            className=" object-contain h-auto lg:object-cover grayscale hover:grayscale-0 transition-all w-full lg:h-[370px] lg:object-left  rounded-t-lg lg:rounded-lg shadow-lg"
          />
        )}
      </div>

      <div
        className={` relative z-10 p-4 lg:p-0 w-full sm:w-[90%] lg:w-[40%]  lg:bg-transparent lg:rounded-none rounded-b-lg bg-[#FBEDDD] lg:bg-none ${
          isEven ? "lg:order-2 lg:text-right" : "lg:order-1 lg:text-left"
        }`}
      >
        <h6 className="text-lg text-secondary-color-3 font-semibold font-grotesk">
          {type}
        </h6>
        <h1 className=" text-2xl mt-2 font-bold  dark:lg:text-white dark:text-primary-color">
          {name}
        </h1>
        <div
          className={`  px-0 py-0 lg:px-5 lg:py-7 lg:bg-[#FBEDDD] dark:text-primary-color text-sm lg:text-base mr-0 ml-0 ${
            isEven ? "lg:-ml-16" : "lg:-mr-16"
          }  mt-2 rounded-md relative`}
        >
          {description}
        </div>
        <div className=" px-0 lg:text-left mt-2 lg:px-2 flex gap-2 text-secondary-color-3  text-sm lg:text-base font-medium flex-wrap font-idgrotesk">
          {stacks.map((stack) => (
            <span>{stack}</span>
          ))}
        </div>
        <div
          className={`flex gap-4 items-center justify-normal  ${
            isEven ? " lg:justify-end" : " lg:justify-start"
          } `}
        >
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 flex justify-normal ${
                isEven ? " lg:justify-end" : " lg:justify-start"
              }`}
            >
              <FaArrowUpRightFromSquare
                size={20}
                className={` text-black dark:text-secondary-color-3`}
              />
            </Link>
          )}
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 flex justify-normal ${
                isEven ? " lg:justify-end" : " lg:justify-start"
              }`}
            >
              <img
                src={"https://cdn.simpleicons.org/github"}
                alt={"github repo"}
                height={20}
                width={20}
              />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
export default Card;
