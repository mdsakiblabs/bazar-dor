import Image from "next/image";
import React from "react";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="parent flex justify-between items-center w-full max-w-270 mx-auto py-2">
      {/* left side logo and text */}
      <div className="flex gap-2 justify-center items-center">
        <div>
          <Image
            src={"/icons8-shopping-cart-80.png"}
            width={60}
            height={60}
            alt="logo"
          ></Image>
        </div>
        <div className="leading-4">
          <h1 className="text-2xl font-bold">বাজার দর</h1>
          <h2 className="text-[13px] font-normal">{date}</h2>
        </div>
      </div>

        {/* right side buttons */}
      <div className="flex gap-5">
        <button className="text-[18px] font-semibold cursor-pointer">
          সাইন ইন
        </button>
        <button className="px-3 py-1 rounded bg-green-700 text-white text-[18px] font-semibold cursor-pointer">
          সাইন আপ
        </button>
      </div>
    </div>
  );
};

export default Navbar;
