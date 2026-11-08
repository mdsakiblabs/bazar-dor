import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-20 bg-white">
      <div className="max-w-270 mx-auto flex md:justify-between justify-center md:flex-row flex-col gap-2 md:gap-0 text-center px-5 md:px-0 items-center  py-7">
        <p className="text-gray-600 font-normal">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        <p className="text-gray-600 font-normal">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </div>
  );
};

export default Footer;
