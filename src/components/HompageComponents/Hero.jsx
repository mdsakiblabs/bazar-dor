import Image from "next/image";
import React from "react";

const Hero = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className=" parent w-full mt-10 px-5 md:px-0">
      <div className="wrappper md:max-w-270   mx-auto md:mx-auto md:flex justify-between items-center border border-gray-200 p-3 rounded-2xl bg-white pb-10 ">
        <div>
          <h1 className="text-green-700 rounded-2xl px-2 py-1 bg-gray-100 inline-flex font-semibold mb-7">
            {date}
          </h1>
          <h2 className="text-4xl font-bold ">আজকের বাজারের দাম এক নজরে</h2>
          <p className="font-extralight inline-flex text-[17px] md:pr-80 md:my-5 mt-5 ">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <button className="px-3 py-2 text[19px]  bg-green-700 rounded text-white font-normal cursor-pointer hidden md:block">
            সব পণ্য দেখুন
          </button>
        </div>
        <div className="-mt-9 md:mt-0">
          <Image
            src={"/bazar-hero.png"}
            width={500}
            height={500}
            alt="hero-png"
            
          ></Image>

        </div>

        {/* mobile view all product button */}
        <button className="px-3 py-2 text[19px]  bg-green-700 rounded text-white font-normal cursor-pointer flex md:hidden mt-5 items-center justify-center w-full ">
          সব পণ্য দেখুন
        </button>
      </div>
    </div>
  );
};

export default Hero;
