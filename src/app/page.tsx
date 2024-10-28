"use client";

import Banner from "./components/banner";
import ChooseUs from "./components/why-us";
import About from "./components/about";
import { FaArrowRight} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "./components/contact";
import Image from 'next/image'
export default function Home() {
  // useeffect for aos
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <>
    
      <div className="bg-[url(/Bg1.jp)] flex justify-around items-center pl-28 max-sm:flex-col-reverse max-sm:pl-0 max-sm:py-8 max-md:pl-10 max-md:py-10 max-md:leading-snug max-lg:pl-20 max-lg:py-24 max-lg:leading-snug ">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="flex flex-col max-sm:text-left mt-8"
        >
          <h1 className="text-5xl text-bold leading-relaxed max-sm:text-3xl max-sm:leading-snug">
  Fresh & Nutritious Meal <br /> Plans
  <span className="text-red-900"> Delivered</span> to ZB
</h1>
<p className="mt-5 font-semibold text-lg max-sm:text-base">
  Enjoy chef-prepared, wholesome meals at your doorstep <br />
  Starting from just 300 RS per week
</p>
          <div className="flex items-center  mt-6 ">
            <button className="bg-pink-600 p-3 text-white font-semibold ">
              Choose Your Meal Plan
            </button>
            <span className="bg-pink-700 p-3.5 hover:translate-x-2 text-white text-xl">
              <FaArrowRight />
            </span>
          </div>
        </div>

        <div className="max-sm:mt-8 mt-8">
          <Image
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            width={400}
            height={100}
            src="/Images/f2.jpeg"
            alt=""
            className="max-sm:w-full rounded-2xl "
          />
        </div>
      </div>

      
      <About />
      <Banner />
      <ChooseUs />
      <Contact/>
      
    </>
  );
}
