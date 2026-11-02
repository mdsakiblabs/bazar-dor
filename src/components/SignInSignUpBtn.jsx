"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import DisplayingUserDataAfterLogIn from "./DisplayingUserDataAfterLogIn";

const SignInSignUpBtn = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  return user ? (
    <DisplayingUserDataAfterLogIn user={user} />
  ) : (
    <div className="flex gap-5">
      <Link href="/sign-in">
        <button className="text-[18px] font-semibold cursor-pointer">
          সাইন ইন
        </button>
      </Link>
      <Link href="/sign-up">
        <button className="px-3 py-1 rounded bg-green-700 text-white text-[18px] font-semibold cursor-pointer">
          সাইন আপ
        </button>
      </Link>
    </div>
  );
};

export default SignInSignUpBtn;
