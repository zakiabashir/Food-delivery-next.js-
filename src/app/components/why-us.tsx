import React from "react";
import { FaBus } from "react-icons/fa";

const ChooseUs = () => {
  return (
    < >
    <div id="chose">
      <div className="bg-gradient-to-br from-red-100 via-gray-100 to-teal-100 ">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="py-8 tracking-wider text-3xl font-semibold text-center pt-36 ">
  Why Choose Us
</h1>
<div
  data-aos="fade"
  data-aos-duration="2000"
  className="flex justify-evenly mt-10 p-4 font-semibold max-sm:flex-wrap max-sm:justify-between"
>
  {/* div 1 */}
  <div className="text-center flex justify-center items-center flex-col gap-5">
    <p>
      Our ingredients are handpicked from local farms, ensuring every meal is packed with nutrients and vibrant, fresh flavors.
    </p>
    <p className="text-5xl text-pink-600 rotate-90">....</p>
    <FaBus className="text-5xl mr-8 text-pink-600" />
  </div>

  {/* div 2 */}
  <div className="text-center flex justify-center items-center flex-col max-sm:flex-col-reverse gap-5">
    <FaBus className="text-5xl mr-8 text-teal-500" />
    <p className="text-5xl text-teal-500 rotate-90">....</p>
    <p>
      Our carefully curated meals provide the ideal balance of nutrients, including vitamins, proteins, and healthy fats to support your wellness.
    </p>
  </div>

  {/* div 3 */}
  <div className="text-center flex justify-center items-center flex-col gap-5">
    <p>
      We prioritize sustainability with eco-friendly packaging and responsibly sourced ingredients, so you can enjoy guilt-free meals.
    </p>
    <p className="text-5xl text-pink-600 rotate-90">....</p>
    <FaBus className="text-5xl mr-8 text-pink-600" />
  </div>

  {/* div 4 */}
  <div className="text-center flex justify-center items-center flex-col max-sm:flex-col-reverse gap-5">
    <FaBus className="text-5xl mr-8 text-teal-500" />
    <p className="text-5xl text-teal-500 rotate-90">....</p>
    <p>
      Enjoy a variety of nutritious options delivered right to your door, making healthy eating both convenient and delicious.
    </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ChooseUs;
