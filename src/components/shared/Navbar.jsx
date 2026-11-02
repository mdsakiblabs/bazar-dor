import Image from "next/image";
import Link from "next/link";
import React from "react";
import SignInSignUpBtn from "../SignInSignUpBtn";

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
      <SignInSignUpBtn />
    </div>
  );
};

export default Navbar;
