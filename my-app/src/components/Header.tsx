import { TbUserExclamation } from "react-icons/tb";
import { HiOutlineSearch } from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";


import React from "react";

const Header = () => {
  return (
    <nav className="w-[1440px] h-[100px] mx-auto flex items-center bg-gray-50 shadow-md">
      <div className="flex space-x-[85px] ml-[505px]">
        <a
          href="#home"
          className="w-[48px] h-[24px] text-[16px] font-[500] leading-[24px] font-poppins hover:text-blue-500 cursor-pointer"
        >
          Home
        </a>
        <a
          href="#shop"
          className="w-[42px] h-[24px] text-[16px] font-[500] leading-[24px] font-poppins hover:text-blue-500 cursor-pointer"
        >
          Shop
        </a>
        <a
          href="#about"
          className="w-[49px] h-[24px] text-[16px] font-[500] leading-[24px] font-poppins hover:text-blue-500 cursor-pointer"
        >
          About
        </a>
        <a
          href="#contact"
          className="w-[66px] h-[24px] text-[16px] font-[500] leading-[24px] font-poppins hover:text-blue-500 cursor-pointer"
        >
          Contact
        </a>
      </div>
      <div className="flex space-x-[30px] ml-[247px]">
      <div className="w-[28px] h-[28px] flex justify-center items-center ">
        <TbUserExclamation className=" w-[22.17px] h-[22.17px] p-[2.33px]" />
      </div>
      <div className="w-[28px] h-[28px] flex justify-center items-center">
        <HiOutlineSearch className="w-[23.33px] h-[20.81px] p-[3.5px]" />
      </div>
      <div className="w-[28px] h-[28px] flex justify-center items-center ">
        <GoHeart className=" w-[24.53px] h-[22.06px] p-[3.55px]" />
      </div>
      <div className="w-[28px] h-[28px] flex justify-center items-center">
        <AiOutlineShoppingCart className=" w-[24.53px] h-[22.06px] p-[3.55px]" />
      </div>
    </div>
    </nav>
  );
}
 

export default Header;






