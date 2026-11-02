import React from "react";
import { authClient } from "@/lib/auth-client";
const UserMenuOpen = ({ user }) => {
  async function handleSignOut() {
    await authClient.signOut();
  }
  return (
    <div className="flex flex-col gap-4  font-sans bg-white w-70 px-5 py-2 pb-12 rounded-2xl">
      <div className="leading-5 ">
        <h1 className="text-xl  font-semibold">{user.name}</h1>
        <h2 className="text-[15px] text-gray-500">{user.email}</h2>
      </div>
      <p className="text-gray-700 cursor-pointer">👤 আমার প্রোফাইল</p>
      <button className="text-start cursor-pointer" onClick={handleSignOut}>
        <span className="text-red-600 mr-1">↩</span>সাইন আউট
      </button>
    </div>
  );
};

export default UserMenuOpen;
