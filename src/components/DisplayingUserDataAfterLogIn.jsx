import Image from "next/image";
import React, { useState } from "react";
import UserMenuOpen from "./UserMenuOpen";

const DisplayingUserDataAfterLogIn = ({ user }) => {
  const [isUserMenuOpen,setIsUserMenuOpen] = useState(false)

  function handleUserMenu(){
    if(!isUserMenuOpen){
        setIsUserMenuOpen(true)
    }else{
        setIsUserMenuOpen(false)
    }
  }
  return (
    <div className="relative">
    <div 
    className="flex justify-center items-center gap-2 cursor-pointer "
    onClick={handleUserMenu}
    >
      {user.image ? (
        <Image
          src={user.image}
          width={100}
          height={100}
          alt="user-image"
          className="w-10 h-10 flex justify-center items-center rounded-full object-cover"
        ></Image>
      ) : (
        <div className="text-2xl w-10 h-10 flex justify-center items-center rounded-full bg-green-600 text-white">
          {user.name[0]}
        </div>
      )}
      <h1>{user.name}</h1>
    </div>

    {/* user menu */}
    <div className="absolute top-full right-0 z-50 shadow-[0_0_15px_rgba(0,0,0,0.15)]  mt-2 rounded-2xl">
    {isUserMenuOpen ? <UserMenuOpen user={user}/>: null}
    </div>
    </div>
  );
};

export default DisplayingUserDataAfterLogIn;
