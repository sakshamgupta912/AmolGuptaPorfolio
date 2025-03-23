import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import mouseScrollAnimation from "@/public/lottie/mouse-scroll.json"; // Place the JSON file in public/lottie

const Header = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      <header className="flex flex-col lg:flex-row justify-between mx-0 my-24 items-center bg-center xl:mx-[10%] lg:mx-[7%] md:mx-[7%] gap-5">
        <section
          className="w-full xl:w-[70%] relative pb-10 flex flex-col gap-4 lg:w-[70%]"
          data-aos="fade-right"
        >
          <div className="flex flex-col gap-2">
            <span className="font-medium text-lg">Hi, I'm</span>
            <h1 className="font-bold text-6xl md:text-7xl font-grotesk">
              Amol Gupta
            </h1>
          </div>
          <div className="relative">
            <Badge
              variant={"secondary"}
              className="font-grotesk text-bases sm:text-xl"
            >
              Senior HR Leader and Organizational Strategist
            </Badge>
            <p className="mt-2">
              ​I specialize in leading human resources strategies and
              organizational development initiatives, enhancing employee
              experiences, and driving cultural transformation within global
              financial technology organizations.
            </p>
          </div>
          <Button asChild variant={"outline"}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"mailto:amolratan.gupta@gmail.com"}
              className="flex items-center border-black justify-center gap-3 px-5 py-2 font-bold w-max border-[1px] mt-5"
            >
              Get in Touch
            </Link>
          </Button>
        </section>
        <section
          className="w-full justify-center md:justify-center relative flex lg:justify-end items-center xl:w-[30%] h-[25rem] bg-center lg:bg-right bg-contain bg-no-repeat lg:w-[30%]"
          data-aos="zoom-in"
        >
          <div className="relative h-[18rem] w-[18rem] md:h-[20rem] md:w-[20rem] lg:h-[22rem] lg:w-[22rem] rounded-full overflow-hidden shadow-lg z-10">
            <Image
              alt="profile image"
              src={"/profile.jpeg"}
              style={{
                borderRadius: "50%",
                height: "100%",
                width: "100%",
              }}
              objectFit="cover"
              layout="fill"
            />
          </div>
        </section>
      </header>

      {/* Mouse Scroll Animation */}
      <div className="absolute bottom-10">
        <Lottie animationData={mouseScrollAnimation} loop autoplay className="w-0 h-0 md:w-10 md:h-10 dark:invert" />
      </div>
    </div>
  );
};

export default Header;
