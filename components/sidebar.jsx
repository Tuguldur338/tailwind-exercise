import Image from "next/image";
import { MdOutlineSpeed } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";
import { TbChartBarPopular } from "react-icons/tb";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import { LuBlocks } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { SlSettings } from "react-icons/sl";

const SideBar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed top-22.5 left-0 h-screen bg-white w-30 shadow-lg flex flex-col rounded-[25] border-[2] border-gray-200 items-center ml-5 mt-10">
        {/* Logo / Header */}
        <div className="w-[75] h-[80px] border-b-[2.5] border-gray-200 mt-[10px]">
          <Image
            src="/images/profile-image.png"
            alt="profile picture"
            width={100}
            height={100}
            className="mb-[2] p-[3px] rounded-[30px] border-[1px] border-white/10 transition-colors duration-300 hover:border-white"
          />
        </div>

        {/* Navigation */}
        <nav className="space-y-4 text-center h-[335px] w-[75px] border-b-[2.5] border-gray-200 mt-[5px]">
          <div className="flex group">
            <a
              href="#"
              className="flex justify-center items-center rounded-md hover:bg-gray-300 transition duration-300 text-gray-800 w-[70px] h-[70px]"
            >
              <MdOutlineSpeed size={20} />
            </a>

            <span className="absolute top-[120px] left-[100px] text-white bg-gray-800 rounded-[4px] w-[80px] h-[30px] text-center content-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
              Dashboard
            </span>
          </div>

          <div className="flex group">
            <a
              href="#"
              className="flex justify-center items-center rounded-md hover:bg-gray-300 transition duration-300 text-gray-800 w-[70px] h-[70px]"
            >
              <BsCalendar2Event size={20} />
            </a>

            <span className="absolute top-[205px] left-[100px] text-white bg-gray-800 rounded-[4px] w-[80px] h-[30px] text-center content-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              History
            </span>
          </div>

          <div className="flex group">
            <a
              href="#"
              className="flex justify-center items-center rounded-md hover:bg-gray-300 transition duration-300 text-gray-800 w-[70px] h-[70px]"
            >
              <TbChartBarPopular size={20} />
            </a>

            <span className="absolute top-[290px] left-[100px] text-white bg-gray-800 rounded-[4px] w-[80px] h-[30px] text-center content-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Analysis
            </span>
          </div>

          <div className="flex group">
            <a
              href="#"
              className="flex justify-center items-center rounded-md hover:bg-gray-300 transition duration-300 text-gray-800  w-[70px] h-[70px]"
            >
              <RiArrowLeftRightLine size={20} />
            </a>

            <span className="absolute top-[375px] left-[100px] text-white bg-gray-800 rounded-[4px] w-[80px] h-[30px] text-center content-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Finances
            </span>
          </div>
        </nav>

        <div className="mt-[5px] h-[200px] w-[75px] border-b-2.5 border-gray-200 justify-center">
          <div>
            <a
              href="#"
              className="flex justify-center items-center rounded-md hover:bg-gray-300 transition duration-300 text-gray-800 w-[70px] h-[70px]"
            >
              <FaRegEnvelope size={20} />
            </a>
          </div>

          <div>
            <a
              href="#"
              className="flex justify-center items-center rounded-md hover:bg-gray-300 transition duration-300 text-gray-800 w-[70px] h-[70px]"
            >
              <FaRegFolder size={20} />
            </a>
          </div>

          <div>
            <a
              href="#"
              className="flex justify-center items-center rounded-md hover:bg-gray-300 transition duration-300 text-gray-800 w-[70px] h-[70px]"
            >
              <LuBlocks size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
