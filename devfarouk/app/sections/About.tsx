import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { specializations } from "@/datas/data";

const About = () => {
  return (
    <section
      className="flex flex-col pt-28 lg:pt-48 mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%]"
      id="about"
      data-aos="fade-up"
    >
      <div className="flex flex-row gap-4 justify-center lg:justify-end items-center font-bold">
        <div className="w-[5%%] lg:hidden lg:w-36 border-b-[1px] border-b-border-color"></div>
        <span className=" font-bold text-lg sm:text-2xl font-idgrotesk">
          01. About Me
        </span>
        <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
      </div>
      <div className="flex flex-col lg:flex-row w-full py-10 gap-10">
  {/* Left Section: Specializations */}
  <div style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }} 
       className="w-full lg:w-[50%] flex flex-col gap-2 order-2 lg:order-1">
    <h4 className="font-bold">Areas of Specialization</h4>
    <ul className="px-8 py-8 flex flex-col gap-4 w-full font-idgrotesk">
      {specializations.map((spec, index) => (
        <li key={index} className="flex items-start cursor-pointer gap-5 transition-all duration-300">
          <FontAwesomeIcon icon={spec.icon} className="text-2xl" />
          <span>{spec.name}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Right Section: About */}
  <div className="w-full lg:w-[50%] order-1 lg:order-2">
    <article>
      <p>
        <strong>Amol Gupta</strong> is a seasoned Human Resources leader
        with over 23 years of experience across diverse sectors, including
        Financial Services, IT, Pharmaceuticals, and Biotechnology.
        An alumnus of UC Berkeley Extension, Symbiosis Institute of
        Management Studies, Symbiosis Law College, and Delhi University,
        he has further enhanced his expertise with certifications like{" "}
        <strong>SPHR, HRMP, and SHRM-SCP</strong>.
      </p>
      <p>
        Throughout his career, Amol has held pivotal roles in
        organizations such as{" "}
        <strong>
          FIS, Barclays Technology Center India, SunGard, Infosys BPO, and
          Lupin Ltd.
        </strong>.
      </p>
    </article>
  </div>
</div>

    </section>
  );
};

export default About;
