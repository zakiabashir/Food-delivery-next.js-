import Link from "next/link";
import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <header
      data-aos="fade"
      className=" z-30 sticky top-0 flex justify-between p-4 max-sm:flex-col max-sm:items-center bg-gradient-to-br from-green-600 via-red-400 to-gray-700"
    >
      <div data-aos="fade-up"
          data-aos-duration="2000">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={"/zlogo.jpeg"}  
              alt="zlogo"
              width={65}  
              height={65} 
              className="w-[65px] h-full shadow-lg rounded-full "
            />
            <span className="text-3xl text-pink-600 rounded-2xl font-bold cursor-pointer font-my_font px-2 py-2   font-semibold text-pink-900 text-xl bg-gradient-to-br from-red-600 via-white to-gray-700">
            Wellnessfoods</span>
          </a>
      </div>
      <div>
        <nav>
          <ul 
          data-aos="fade-up"
          data-aos-duration="2000"
          className="  md:ml-auto md:mr-auto  flex flex-wrap items-center text-center rounded-lg  justify-center gap-4 px-2 py-2 font-semibold text-pink-900 text-xl bg-gradient-to-br from-red-600 via-white to-gray-700">
            <li className="hover:text-green-600 max-sm:text-base mr-5 gap-2 p-2 px-2 py-2  rounded-lg  font-semibold text-pink-900 text-xl bg-gradient-to-br from-red-600 via-white to-gray-700">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-green-600 px-2 py-2  rounded-lg font-semibold text-pink-900 text-xl bg-gradient-to-br from-red-600 via-white to-gray-700">
              <Link href="#about">About</Link>
            </li>
            <li className="hover:text-green-600 px-2 py-2  rounded-lg font-semibold text-pink-900 text-xl bg-gradient-to-br from-red-600 via-white to-gray-700">
              <Link href="#plan">Plans</Link>
            </li>
            <li className="hover:text-green-600 px-2 py-2 rounded-lg  font-semibold text-pink-900 text-xl bg-gradient-to-br from-red-600 via-white to-gray-700">
              <Link href="#chose">Chooseus</Link>
            </li>
            <li className="hover:text-green-600 px-2 py-2 rounded-lg  font-semibold text-pink-900 text-xl bg-gradient-to-br from-red-600 via-white to-gray-700">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
