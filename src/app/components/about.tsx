import React from "react";
import { FaUser } from "react-icons/fa";

const About = () => {
  return (
    <div id="about">
      {/* Background Image Section */}
      <div>
        <img src="/Images/vector-wave.png" alt="alt" className="absolute w-full" />
        <div className="bg-[url(/bg1.jpeg)] relative min-h-screen bg-cover bg-fixed bg-center">
          {/* About Us Title */}
          <h1
            data-aos="fade"
            data-aos-duration="2000"
            className="pt-16 tracking-wider text-3xl font-bold text-green-900 text-center max-sm:text-2xl"
          >
            About Us
          </h1>

          {/* Content Box */}
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="bg-white m-8 bg-opacity-70 max-sm:m-6 max-sm:mb-10"
          >
            <p className="p-10 leading-loose text-lg font-serif max-sm:text-base max-sm:leading-snug max-sm:p-5">
              We are committed to transforming the way you eat by providing fresh,
              healthy, and sustainably sourced foods. Partnering with local
              farmers and trusted suppliers, we offer a variety of farm-fresh
              vegetables, organic fruits, lean proteins, and wholesome grains, all
              carefully selected to ensure high quality and nutrition. We believe
              that food should not only nourish the body but also enrich your
              life, which is why we focus on delivering natural ingredients free
              from harmful additives. Our mission is to inspire healthier living
              by making nutritious eating accessible and enjoyable, all while
              supporting a sustainable future. Join us in embracing a lifestyle
              where every meal fuels both you and the planet.
            </p>

            {/* Button Section */}
            <div className="flex justify-center py-10 hover:scale-105 max-sm:py-5">
              <button className="flex items-center gap-3 bg-pink-600 px-5 py-2 text-xl text-white max-sm:text-base max-sm:px-3 max-sm:py-1">
                <FaUser /> My Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
