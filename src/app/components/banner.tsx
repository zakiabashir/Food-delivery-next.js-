import { FaArrowRight } from "react-icons/fa";

import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div id="plan">
    <div className=" relative h-auto overflow-hidden py-20  ">
      <div className="mx-auto relative font-semibold flex flex-wrap ">
        <div>
        <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="py-2  flex-wrap tracking-wider text-green-900 text-2xl font-semibold text-center max-sm:text-2xl max-md:text-3xl"
              >
              Meal Plans
              </p>
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className="py-4 tracking-wider text-3xl font-bold text-center max-sm:text-2xl max-md:text-3xl"
          >
            Taste the Healthy Difference
          </h1>
          <div className="">
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className=" p-20 pb-0 max-sm:px-6 max-sm:pb-32 max-sm:text-base max-md:pr-56 max-lg:pr-72 max-md:text-lg max-lg:text-lg"
            >
              We know that <span className="text-pink-700">time</span> is the
              greatest value in the modern world.Our healthy meal{" "}
              <br className="max-sm:hidden max-md:hidden max-lg:hidden" /> plan
              delivery service Good Food in Miami is the answer for those who
              want to{" "}
              <br className="max-sm:hidden max-md:hidden max-lg:hidden" /> eat
              healthily, saving time for buying food and preparing delicious,
              healthy{" "}
              <br className="max-sm:hidden max-md:hidden max-lg:hidden" />{" "}
              meals.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className=" pl-[35rem] p-20 max-sm:px-6 max-sm:text-base max-md:pl-64 max-md:p-20 max-md:text-lg max-lg:text-lg max-lg:pl-96 max-lg:pr-0"
            >
              We know that <span className="text-pink-700">time</span> is the
              greatest value in the modern world.Our healthy meal{" "}
              <br className="max-sm:hidden max-md:hidden max-lg:hidden" /> plan
              delivery service Good Food in Miami is the answer for those who
              want to{" "}
              <br className="max-sm:hidden max-md:hidden max-lg:hidden" /> eat
              healthily, saving time for buying food and preparing delicious,
              healthy{" "}
              <br className="max-sm:hidden max-md:hidden max-lg:hidden" />{" "}
              meals.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex justify-center items-center mt-4 max-lg:mt-20"
          >
            <button className="bg-pink-600 p-3 text-white font-semibold">
              Choose Your Meal Plan{" "}
            </button>
            <span className="bg-pink-700 p-3.5 hover:translate-x-2 text-white text-xl ">
              <FaArrowRight />
            </span>
          </div>
        </div>
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          <Image
            width={180}
            height={100}
            data-aos="fade-left"
            data-aos-duration="2000"
            className="absolute top-32   right-60 max-sm:right-0 max-sm:w-44  "
            src="/Images/f2.jpeg"
            alt="food"
          />
          <Image
            width={200}
            height={100}
            data-aos="fade-right"
            data-aos-duration="2000"
            className="absolute top-20 left-24 max-sm:w-36  "
            src="/Images/f3.jpeg"
            alt="food"
          />
          <Image
            width={150}
            height={100}
            data-aos="fade-down-right"
            data-aos-duration="2000"
            className="absolute bottom-36   left-72 max-sm:left-44 max-sm:bottom-72 max-md:w-36 max-md:bottom-56 max-md:left-40 max-lg:bottom-64 max-2xl:left-80 "
            src="/Images/f1.jpeg"
            alt="food"
          />
          <Image
            width={200}
            height={100}
            data-aos="fade-right"
            data-aos-duration="2000"
            className="absolute bottom-0 left-24 max-sm:w-64 max-sm:left-0 max-md:w-56"
            src="/Images/f4.jpeg"
            alt="food"
          />
          <Image
            width={200}
            height={100}
            data-aos="fade-left"
            data-aos-duration="2000"
            className="absolute bottom-0  right-28 max-sm:right"
            src="/Images/f5.jpeg"
            alt="apple"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
