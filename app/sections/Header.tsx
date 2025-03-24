import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import mouseScrollAnimation from "@/public/lottie/mouse-scroll.json"; // Place the JSON file in public/lottie

const Header = () => {const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative">
      <header className="flex flex-col lg:flex-row justify-between mx-0 my-24 items-center bg-center xl:mx-[10%] lg:mx-[7%] md:mx-[7%] gap-2">
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
              Welcome to my corner of the internet! I’m thrilled to share a bit about myself with you.
              <br />
              <div className="mt-2"></div>
              <strong >Who I Am</strong>
              <br />
              I am a passionate HR professional based in Pune, India, dedicated to creating solutions that benefit both organizations and employees. With a focus on fostering a positive workplace culture, I believe that listening and maintaining a positive attitude are key to building strong relationships in any work environment.
              <br />
              <div className="mt-2"></div>
              <strong>My Journey</strong>
              <br />
              Throughout my career, I have gained valuable experience in various aspects of human resources. From recruitment and talent management to employee engagement and performance improvement, I’ve had the opportunity to work with diverse teams and drive initiatives that promote growth and satisfaction.
            </p>
          </div>
          <Button asChild variant={"outline"}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"mailto:amol@amolgupta.com"}
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
