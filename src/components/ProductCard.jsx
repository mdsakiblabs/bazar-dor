import Image from "next/image";
import React from "react";

const ProductCard = ({ data }) => {
  console.log(data);
  return (
    <div className="border border-gray-300 rounded-2xl p-3 cursor-pointer">
      <div className="flex gap-2  items-center">
        <h1 className="text-[20px] p-2 bg-gray-100 flex justify-center items-center rounded-2xl">
          {data.image}
        </h1>

        <div className="leading-5">
          <h2 className="text-[18px] font-bold">{data.nameBn}</h2>
          <p className="flex gap-1 font-light text-[15px]">
            <span>প্রতি</span>
            <span>
              {data.unit === "kg"
                ? "কেজি"
                : data.unit === "dozen"
                  ? "ডজন"
                  : data.unit === "litre"
                    ? "লিটার"
                    : "পিস"}
            </span>
          </p>
        </div>
      </div>

      <div className=" mt-7 leading-5">
        <h2 className="text-[17px] font-medium">আজকের দাম</h2>

        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-bold">{data.today.toLocaleString("bn-BD")} <span className="text-[16px] font-medium">টাকা</span></h2>
          <div className="text-red-500 bg-gray-100 px-2 py-1.25 text-[14px] rounded-full">
            <span>▲</span>
            <span>{data.change.pct.toLocaleString("bn-BD")}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
