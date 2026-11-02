import Image from "next/image";
import React from "react";

const DisplayingUserDataAfterLogIn = ({ user }) => {
  console.log(user);
  return (
    <div className="flex justify-center items-center gap-2">
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
  );
};

export default DisplayingUserDataAfterLogIn;
