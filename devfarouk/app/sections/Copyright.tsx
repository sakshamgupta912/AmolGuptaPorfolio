import Link from "next/link";

const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className="  py-6  flex flex-col justify-center items-center font-medium text-base sm:text-lg border-t ">
      <p className=" text-center">
        Amol Gupta
      </p>
      <div></div>
      <p className=" ">&copy; {year} All rights reserved.</p>
    </div>
  );
};
export default Copyright;
