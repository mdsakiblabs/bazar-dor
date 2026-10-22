import React from "react";
import Link from "next/link";
import { Span } from "next/dist/trace";
const AllProductsMarquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();
  //   console.log(data);

  return (
    <div className="overflow-hidden whitespace-nowrap ">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div className="flex shrink-0  border-gray-200 border-b" key={copy}>
            {data.map((elem) => {
              return (
                <Link
                  href={`/details/${elem.id}`}
                  key={elem.id}
                  className="shrink-0"
                >
                  <div className="flex gap-2  items-center justify-center">
                    {/* icon and name */}
                    <div className="flex gap-2">
                      <span>{elem.categoryIcon}</span>
                      <span className="text-[18px] font-semibold">
                        {elem.nameBn}
                      </span>
                    </div>

                    {/* taka and unit */}
                    <div className="text-[18px]">
                      <p>
                        <span> {elem.today.toLocaleString("bn-BD")} </span>
                        <span>
                          {elem.unit === "kg"
                            ? "টাকা/কেজি"
                            : elem.unit === "piece"
                              ? "টাকা/গ্রাম"
                              : "টাকা/লিটার"}
                        </span>
                      </p>
                    </div>

                    {/* up/down prise symbol */}

                    <div className="flex justify-center items-center text-[18px]">
                      {elem.change.dir === "up" ? (
                        <span className="text-red-700">▲</span>
                      ) : elem.change.dir === "down" ? (
                        <span className="text-green-500 pt-1 ">▼</span>
                      ) : (
                        ""
                      )}

                      {elem.change.dir === "flat" ? (
                        ""
                      ) : elem.change.dir === "up" ? (
                        <span className="text-red-700">
                          {Math.abs(elem.change.pct).toLocaleString("bn-BD")}%
                        </span>
                      ) : elem.change.dir === "down" ? (
                        <span className="text-green-700 ">
                          {Math.abs(elem.change.pct).toLocaleString("bn-BD")}%
                        </span>
                      ) : null}
                    </div>

                    <span className="devider w-[0.8px]  flex justify-center bg-gray-200 self-stretch h-10 mx-7"></span>
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsMarquee;
