import React from "react";
import Link from "next/link";
const SignInSignUpBtn = () => {
  return (
    <div className="flex gap-5">
      <button className="text-[18px] font-semibold cursor-pointer">
        সাইন ইন
      </button>

      <Link href="/sign-up">
        <button className="px-3 py-1 rounded bg-green-700 text-white text-[18px] font-semibold cursor-pointer">
          সাইন আপ
        </button>
      </Link>
    </div>
  );
};

export default SignInSignUpBtn;
