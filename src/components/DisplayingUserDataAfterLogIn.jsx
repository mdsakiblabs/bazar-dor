"use client";

import Image from "next/image";
import { useState } from "react";
import UserMenuOpen from "./UserMenuOpen";

const DisplayingUserDataAfterLogIn = ({ user }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  function handleUserMenu() {
    setIsUserMenuOpen((prev) => !prev);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleUserMenu}
        aria-label="Open user menu"
        aria-expanded={isUserMenuOpen}
        className="flex max-w-40 sm:max-w-52 items-center justify-center gap-2 cursor-pointer"
      >
        {user.image ? (
          <Image
            src={user.image}
            width={100}
            height={100}
            alt="User profile"
            className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-green-600 text-lg sm:text-xl text-white">
            {user.name?.[0]?.toUpperCase() || "U"}
          </div>
        )}

        <span className="block max-w-24 sm:max-w-36 md:max-w-44 truncate text-xs sm:text-sm md:text-base font-medium">
          {user.name}
        </span>
      </button>

      {/* User dropdown */}
      {isUserMenuOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-[min(18rem,calc(100vw-1.5rem))] max-w-[calc(100vw-1.5rem)] rounded-xl bg-white shadow-[0_0_15px_rgba(0,0,0,0.15)]">
          <UserMenuOpen user={user} />
        </div>
      )}
    </div>
  );
};

export default DisplayingUserDataAfterLogIn;
