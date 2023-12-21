import SectionTitle from "../../components/SectionTitle";
import { FcReading } from "react-icons/fc";

import { FaDev } from "react-icons/fa";
import { BiMath } from "react-icons/bi";
import { FaShop } from "react-icons/fa6";

const Whose = () => {
  return (
    <div>
      <div>
        <SectionTitle heading={"FOR"} subheading={"WHOSE_"}></SectionTitle>
      </div>
      <div className="bg-black flex flex-col md:flex-row justify-center items-center gap-5">
        <div className=" py-5 md:py-10 px-10 border-[#FFB534]">
          <span className="text-7xl flex justify-center md:mb-4 text-[#FFB534]">
            {" "}
            <FcReading></FcReading>{" "}
          </span>
          <h1 className="text-3xl text-white">Students</h1>
        </div>
        <div className=" py-5 md:py-10 px-10 border-[#FFB534]">
          <span className="text-7xl flex justify-center md:mb-4 text-center text-[#FFB534]">
            {" "}
            <FaDev></FaDev>
          </span>
          <h1 className="text-3xl text-white">Developers</h1>
        </div>
        <div className=" py-5 md:py-10 px-10 border-[#FFB534]">
          <span className="text-7xl flex justify-center md:mb-4 text-center text-[#FFB534]">
            {" "}
            <BiMath></BiMath>
          </span>
          <h1 className="text-3xl text-white">Bankers</h1>
        </div>
        <div className=" py-5 md:py-10 px-10 border-[#FFB534]">
          <span className="text-7xl flex justify-center md:mb-4 text-center text-[#FFB534]">
            <FaShop></FaShop>{" "}
          </span>
          <h1 className="text-3xl text-white">ShopKeepers</h1>
        </div>
      </div>
    </div>
  );
};

export default Whose;
