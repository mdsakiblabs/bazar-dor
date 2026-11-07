import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const formatPrice = (price) =>
  new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits: 1,
  }).format(price);

const getUnitName = (unit) => {
  switch (unit) {
    case "kg":
      return "কেজি";
    case "dozen":
      return "ডজন";
    case "litre":
      return "লিটার";
    default:
      return "পিস";
  }
};

const Detailspage = async ({ params }) => {
  const { id } = await params;

  // Authentication Check
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(`/sign-in?callbackURL=${encodeURIComponent(`/details/${id}`)}`);
  }

  // Fetch Product Details
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Product details could not be loaded.");
  }

  const response = await res.json();
  const data = response.data ?? response;

  const {
    nameBn,
    categoryNameBn,
    categoryIcon,
    unit,
    today,
    change,
    markets = [],
  } = data;

  const unitName = getUnitName(unit);

  // Calculate Average Price for Each Market
  const marketData = markets.map((market) => ({
    ...market,
    avg: (market.min + market.max) / 2,
  }));

  // Calculate Overall Market Summary
  const lowestPrice = marketData.length
    ? Math.min(...marketData.map((market) => market.min))
    : 0;

  const highestPrice = marketData.length
    ? Math.max(...marketData.map((market) => market.max))
    : 0;

  const averagePrice = marketData.length
    ? marketData.reduce((total, market) => total + market.avg, 0) /
      marketData.length
    : 0;

  const priceSummary = [
    {
      title: "সর্বনিম্ন দাম",
      price: lowestPrice,
      color: "text-green-600",
    },
    {
      title: "সর্বোচ্চ দাম",
      price: highestPrice,
      color: "text-red-500",
    },
    {
      title: "গড় দাম",
      price: averagePrice,
      color: "text-green-600",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-3 py-5 sm:px-5 sm:py-7 md:px-8">
      <div className="mx-auto max-w-6xl space-y-4">
        {/* Product Overview */}
        <section className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5 md:p-6">
          {/* Product Information */}
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#f0f5f0] text-3xl sm:h-14 sm:w-14">
              {categoryIcon || "🛒"}
            </div>

            <div className="min-w-0">
              <h1 className="text-lg font-bold text-gray-800 sm:text-xl md:text-2xl">
                {nameBn}
              </h1>

              <p className="mt-1 text-sm text-gray-500">প্রতি {unitName}</p>

              <p className="mt-1 text-xs text-gray-500">
                {categoryNameBn} · {nameBn}
              </p>
            </div>
          </div>

          {/* Today's Price */}
          <div className="flex items-center justify-between gap-4 rounded-lg bg-[#f5f8f5] px-4 py-3 sm:min-w-40 sm:flex-col sm:justify-center sm:gap-0 sm:text-center">
            <div>
              <p className="text-xs text-gray-500 sm:text-sm">আজকের দাম</p>

              <p className="mt-1 text-2xl font-bold text-gray-800 sm:text-3xl">
                ৳{formatPrice(today)}
              </p>

              <p className="mt-1 text-xs text-gray-500">টাকা / {unitName}</p>
            </div>

            <p
              className={`text-xs font-semibold sm:mt-2 sm:text-sm ${
                change?.dir === "down"
                  ? "text-green-600"
                  : change?.dir === "up"
                    ? "text-red-500"
                    : "text-gray-500"
              }`}
            >
              {change?.dir === "down" ? "▼" : change?.dir === "up" ? "▲" : "●"}{" "}
              {Math.abs(change?.pct ?? 0)}%
              <span className="ml-1 font-normal">
                {change?.dir === "down"
                  ? "দাম কমেছে"
                  : change?.dir === "up"
                    ? "দাম বেড়েছে"
                    : "কোনো পরিবর্তন নেই"}
              </span>
            </p>
          </div>
        </section>

        {/* Price Summary and Market Prices */}
        <section className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5 md:p-6">
          {/* Price Summary */}
          <h2 className="mb-4 text-base font-bold text-gray-800 sm:text-lg">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {priceSummary.map((item) => (
              <div
                key={item.title}
                className="min-w-0 rounded-lg border border-gray-200 p-2.5 sm:p-4"
              >
                <p className="text-xs font-medium text-gray-600 sm:text-sm">
                  {item.title}
                </p>

                <p
                  className={`mt-2 break-words text-base font-bold sm:text-xl ${item.color}`}
                >
                  ৳{formatPrice(item.price)}
                </p>

                <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                  প্রতি {unitName}
                </p>
              </div>
            ))}
          </div>

          {/* Market Prices Heading */}
          <div className="mb-3 mt-6">
            <h2 className="text-base font-bold text-gray-800 sm:text-lg">
              বাজারভিত্তিক আজকের দাম
            </h2>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              বিভিন্ন বাজারে {nameBn}-এর সর্বনিম্ন, সর্বোচ্চ ও গড় দাম
            </p>
          </div>

          {/* Responsive Market Table */}
          <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-[#f7faf7] text-gray-700">
                  <th className="whitespace-nowrap px-4 py-3 text-left font-semibold">
                    বাজার
                  </th>

                  <th className="whitespace-nowrap px-4 py-3 text-left font-semibold">
                    বিভাগ
                  </th>

                  <th className="whitespace-nowrap px-4 py-3 text-right font-semibold">
                    সর্বনিম্ন দাম
                  </th>

                  <th className="whitespace-nowrap px-4 py-3 text-right font-semibold">
                    সর্বোচ্চ দাম
                  </th>

                  <th className="whitespace-nowrap px-4 py-3 text-right font-semibold">
                    গড় দাম
                  </th>
                </tr>
              </thead>

              <tbody>
                {marketData.map((market, index) => (
                  <tr
                    key={`${market.market}-${index}`}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#f0f5f0]"}
                  >
                    <td className="whitespace-nowrap border-b border-gray-200 px-4 py-3 font-medium text-gray-800">
                      {market.market}
                    </td>

                    <td className="whitespace-nowrap border-b border-gray-200 px-4 py-3 text-gray-700">
                      {market.division}
                    </td>

                    <td className="whitespace-nowrap border-b border-gray-200 px-4 py-3 text-right text-gray-800">
                      ৳{formatPrice(market.min)}
                    </td>

                    <td className="whitespace-nowrap border-b border-gray-200 px-4 py-3 text-right text-gray-800">
                      ৳{formatPrice(market.max)}
                    </td>

                    <td className="whitespace-nowrap border-b border-gray-200 px-4 py-3 text-right font-semibold text-green-700">
                      ৳{formatPrice(market.avg)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Scroll Hint - Mobile */}
          <p className="mt-2 text-xs text-gray-400 sm:hidden">
            ← সম্পূর্ণ টেবিল দেখতে ডানে-বামে স্ক্রল করো →
          </p>

          {/* Empty Market State */}
          {marketData.length === 0 && (
            <p className="py-8 text-center text-sm text-gray-500">
              কোনো বাজারের তথ্য পাওয়া যায়নি।
            </p>
          )}
        </section>
      </div>
    </main>
  );
};

export default Detailspage;
