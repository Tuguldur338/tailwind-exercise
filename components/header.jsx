"use client";

import { useState, useEffect, useRef } from "react";
import { CiBank, CiHome } from "react-icons/ci";
import { LuPackage } from "react-icons/lu";
import { BiWallet } from "react-icons/bi";
import { PiMouseMiddleClickThin } from "react-icons/pi";

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-gray-100 h-[90px] content-center"
    >
      <div className="flex justify-between bg-white px-6 rounded-4xl max-w-[2200px] w-[98%] h-[70px] items-center mx-auto shadow-xl transition-shadow duration-200 hover:shadow-xl/30">
        {/* Banking logo */}
        <div className="ml-5 flex items-center gap-2">
          <a href="http://localhost:3000/">
            <CiBank
              size={40}
              className="bg-gray-800 text-neon-yellow p-2 rounded-full shadow-neon-yellow"
              aria-label="Banking icon"
            />
          </a>
          <h1 className="text-gray-800 font-extrabold text-lg">Banking</h1>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-gray-800">
          <div className="flex gap-2 items-center group cursor-pointer">
            <CiHome
              size={20}
              className="text-gray-800 transition-transform duration-300 group-hover:scale-125"
            />
            <span className="font-bold text-gray-800">Home</span>
          </div>
          <div className="flex gap-2 items-center group cursor-pointer">
            <LuPackage
              size={20}
              className="text-gray-800 transition-transform duration-300 group-hover:scale-125"
            />
            <span className="font-bold text-gray-800">Services</span>
          </div>
          <div className="flex gap-2 items-center group cursor-pointer">
            <BiWallet
              size={20}
              className="text-gray-800 transition-transform duration-300 group-hover:scale-125"
            />
            <span className="font-bold text-gray-800">Pricing</span>
          </div>
          <div className="flex gap-2 items-center group cursor-pointer">
            <PiMouseMiddleClickThin
              size={20}
              className="text-gray-800 transition-transform duration-300 group-hover:scale-125"
            />
            <span className="font-bold text-gray-800">Features</span>
          </div>
        </nav>

        <a className="bg-neon-yellow text-gray-800 px-4 py-2 rounded-full inline-block transition-transform duration-150 hover:scale-125 cursor-pointer">
          Open Account
        </a>
      </div>
    </header>
  );
};

export default Header;
