"use client";

import Header from "./sections/Header";
import About from "./sections/About";
import Spotlight from "./sections/Spotlight";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Vision from "./sections/Vision";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {  // Prevents SSR issues
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: false,
      });
      AOS.refresh();
    }
  }, []);

  return (
    <main>
      <Header />
      <About />
      <Experience />
      <Spotlight />
      <Vision />
      <Contact />
    </main>
  );
}