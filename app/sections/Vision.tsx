"use client";
const Vision = () => {
  return (
    <section
      className="flex flex-col mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%] pt-28 lg:pt-48 relative"
      id="vision"
      data-aos="fade-up"
    >
      <header className="flex flex-row gap-4 justify-start items-center font-bold">
        <span className="font-bold text-lg sm:text-2xl font-idgrotesk">
          04. My Vision
        </span>
        <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
      </header>
      <div className="flex flex-col gap-5 lg:flex-row w-full py-10 lg:gap-10 items-center">
        <article>
          <p>
            Through this website, I aim to share my insights, experiences, and
            practical advice on HR practices. Whether you’re an HR professional,
            a business leader, or someone interested in workplace dynamics, do
            reach out to me for coaching sessions.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Vision;
