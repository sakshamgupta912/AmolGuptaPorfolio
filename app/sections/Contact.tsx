import { Button } from "@/components/ui/button";
import { socialLinks } from "@/datas/data";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      className=" text-center w-full  sm:w-[85%] m-auto  pb-52 lg:py-52 "
      id="contact"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-2 justify-center items-center w-full sm:w-[85%] m-auto">
        <h2 className=" text-lg sm:text-3xl text-secondary-color-3 font-semibold font-idgrotesk">
          What next?
        </h2>
        <h3 className=" text-2xl sm:text-4xl font-bold">Let’s Connect!</h3>
        <p className="text-base sm:text-lg">
          I believe in the power of collaboration and would love to connect with
          you. Feel free to reach out through the contact page or follow me on
          social media for more updates!
          <br />
          Thank you for visiting my site, and I look forward to sharing this
          journey with you!
          <br />
          Click the button below or send an email to:{" "}
          <Link
            href={"mailto:amol@amolgupta.com"}
            className=" text-secondary-color-3 font-medium"
          >
            amol@amolgupta.com
          </Link>
          .
        </p>
        <Button asChild variant={"outline"}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"mailto:amol@amolgupta.com"}
            className=" text-base flex items-center justify-center gap-3 px-5 py-2  font-bold w-max  mt-5   border-[1px] hover:bg-[#FBEDDD]  transition-all border-black rounded-lg"
          >
            Send A Message
            <Image
              alt="message"
              src={"/svgs/message-programming.svg"}
              width={25}
              height={25}
            />{" "}
          </Link>
        </Button>
      </div>
      <ul className="flex flex-row md:hidden justify-center gap-4 mt-10 items-center">
        {socialLinks.map((socialLink, id) => (
          <li key={id} className={`flex items-center cursor-pointer gap-5`}>
            <Link
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={socialLink.simpleIcon}
                alt={socialLink.name}
                height={20}
                width={20}
                className="transition-all duration-300 filter grayscale dark:grayscale-0 hover:grayscale-0 dark:filter dark:brightness-0 dark:invert hover:dark:brightness-100 hover:dark:invert-0"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Contact;
