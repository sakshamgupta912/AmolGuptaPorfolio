"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sections } from "@/datas/data";
import Link from "next/link";
import { HiDocumentText } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "./ThemeSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
  {/* for desktop */}
  <section
    className="hidden lg:flex fixed top-0 h-24 flex-row items-center w-full shadow-sm justify-between px-2 sm:px-16 z-40 backdrop-blur-lg"
    data-aos="fade-down"
  >
    <Link
      href="/"
      className="flex justify-start sm:justify-center items-center uppercase tracking-wider"
    >
      <h1 className="text-3xl sm:text-3xl font-bold lg:text-4xl text-secondary-color-3 "></h1>
      <p className="text-3xl sm:text-3xl font-bold lg:text-4xl ">
        <ThemeSwitcher />
      </p>
    </Link>
    <div className="hidden md:flex items-center gap-2 font-grotesk uppercase">
      <nav className="w-full flex flex-row items-center">
        <ul className="w-full flex flex-row justify-start items-center font-semibold text-lg gap-4">
          {sections.map((section, id) => (
            <Button variant={"link"} key={id} className="hidden lg:inline-block" asChild>
              <Link key={id} href={section.idRoute}>
                {section.name}
              </Link>
            </Button>
          ))}
          <li className="hidden lg:inline-block">
            <Button asChild variant={"outline"}>
              <Link
                href="https://www.linkedin.com/in/amol-gupta-arg/"
                className="border-[1px] border-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
                <HiDocumentText size={25} className="ml-2" />
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  </section>

  {/* for mobile */}
  <section className="lg:hidden fixed z-20 right-0 top-0">
    <div className="m-5">
      <button
        className={`hamburger ${isOpen ? "open" : ""} relative z-30 w-8 h-6 flex flex-col justify-between items-center`}
        onClick={toggleMenu}
      >
        <span className="line block w-full h-1 dark:bg-secondary-color-3 bg-black transition-transform duration-300 ease-in-out origin-center"></span>
        <span className="line block w-full h-1 dark:bg-secondary-color-3 bg-black transition-opacity duration-300 ease-in-out"></span>
        <span className="line block w-full h-1 dark:bg-secondary-color-3 bg-black transition-transform duration-300 ease-in-out origin-center"></span>
      </button>
    </div>
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "100%" }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 w-full h-lvh bg-black bg-opacity-50 lg:hidden"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 right-0 h-full w-3/4 bg-white shadow-lg p-4"
      >
        <nav className="w-full flex flex-col items-center z-40 mt-36 gap-4 justify-center">
          {sections.map((section, id) => (
            <Button variant={"link"} key={id} asChild>
              <Link key={id} href={section.idRoute} className="dark:text-primary-color" onClick={toggleMenu}>
                {section.name}
              </Link>
            </Button>
          ))}
          <Button asChild variant={"outline"}>
            <Link
              href="https://www.linkedin.com/in/amol-gupta-arg"
              className=""
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              View Resume
              <HiDocumentText size={25} />
            </Link>
          </Button>
          <ThemeSwitcher />
        </nav>
      </motion.div>
    </motion.div>
  </section>
</div>

   
  );
};

export default Navbar;
