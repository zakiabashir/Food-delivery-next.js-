import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-blue-50 z-50  bottom-0 bg-gradient-to-br from-red-100 via-gray-100 to-teal-100">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={"/images/zlogo.jpeg"}
              alt="It Mate"
              width={100}
              height={100}
              className="w-[80px] h-full shadow-lg rounded-full bg-gradient-to-br from-gray-400 to-white"
            />
            <span className="ml-3 text-xl">ZAKIA BASHIR</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 ZAKIA BASHIR PORTFOLIO
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 gap-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://github.com/zakiabashir"}
              className="text-gray-500"
            >
              <FaGithub  className="text-3xl hover:text-pink-900" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/zakia-bashir-367b41254/"}
              className="text-gray-500"
            >
              <FaLinkedin className="text-3xl hover:text-blue-600" />
            </Link>
            <Link
              target="_blank"
              href={"https://vercel.com/zakiabashirs-projects"}
              className="text-gray-500"
            >
              <IoLogoVercel className="text-3xl hover:text-pink-900" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

      