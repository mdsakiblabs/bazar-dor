import Link from "next/link";
import React from "react";

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const data = await res.json();

  return (
    <div className="parent w-full max-w-270 mx-auto border-t border-b border-gray-200 py-4 overflow-x-auto">
      <div className=" flex items-center md:gap-7 gap-5 w-max min-w-full">
        <div className="w-5 shrink-0 md:hidden" />

        {data.map((elem) => (
          <Link
            href={`/category/${elem.id}`}
            key={elem.id}
            className="shrink-0"
          >
            <div className="flex cursor-pointer">
              <span>{elem.icon}</span>
              <h2 className="font-semibold">{elem.nameBn}</h2>
            </div>
          </Link>
        ))}

        <div className="w-5 shrink-0 md:hidden" />
      </div>
    </div>
  );
};

export default NavLinks;
