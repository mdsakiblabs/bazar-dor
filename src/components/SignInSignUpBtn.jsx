"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import DisplayingUserDataAfterLogIn from "./DisplayingUserDataAfterLogIn";

const SignInSignUpBtn = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  return user ? (
    <DisplayingUserDataAfterLogIn user={user} />
  ) : (
    <div className="flex items-center gap-2 sm:gap-4">
      <Link
        href="/sign-in"
        className="whitespace-nowrap text-sm sm:text-base md:text-lg font-semibold cursor-pointer"
      >
        সাইন ইন
      </Link>

      <Link
        href="/sign-up"
        className="whitespace-nowrap rounded bg-green-700 px-2.5 py-1.5 sm:px-3 sm:py-2 text-sm sm:text-base md:text-lg font-semibold text-white cursor-pointer hover:bg-green-800 transition-colors"
      >
        সাইন আপ
      </Link>
    </div>
  );
};

export default SignInSignUpBtn;
