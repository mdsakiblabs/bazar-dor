import ProductCard from "@/components/ProductCard";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${id}`,
  );
  const data = await res.json();
  console.log(data.length);

  return (
    <div className="parent w-full mt-10">
      <div className="wrapper max-w-270 mx-auto  ">
        {/* category name and image */}
        <div className="flex gap-2  items-center border border-gray-200 rounded-2xl p-3">
          <h1 className="text-[20px] p-2 bg-gray-100 flex justify-center items-center rounded-2xl">
            {data[0].image}
          </h1>

          <div className="leading-6">
            <h2 className="text-[20px] font-bold">{data[0].categoryNameBn}</h2>
            <p className="flex gap-1 font-light text-[16px]">
              {data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও
              পরিবর্তন
            </p>
          </div>
        </div>

        {/* filter */}
        <div className="flex justify-end items-center my-5 border border-gray-200 rounded-2xl px-8 py-3">
          <div className="flex gap-2 items-center">
            <span className="font-light">সাজান</span>
            <span className="px-2 py-1 border border-gray-200 rounded-2xl cursor-pointer">
              ডিফল্ট 🔽
            </span>
          </div>
        </div>

        {/* product shown text */}

        <div className="mb-5">
          <p className="flex gap-1 font-light text-[16px]">
            মোট {data.length.toLocaleString("bn-BD")}টি পন্য দেখানো হচ্ছে
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-3 gap-5 ">
          {data.map((elem, ind) => {
            return <ProductCard data={elem} key={ind} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
