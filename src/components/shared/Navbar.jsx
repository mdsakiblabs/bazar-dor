import Image from "next/image";
import SignInSignUpBtn from "../SignInSignUpBtn";
import Link from "next/link";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="w-full px-3 sm:px-5">
      <div className="parent flex w-full max-w-270 mx-auto items-center justify-between gap-2 py-2 sm:py-3">
        {/* Logo and text */}
        <Link href="/">
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
          <Image
            src="/icons8-shopping-cart-80.png"
            width={60}
            height={60}
            alt="বাজার দর logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0"
          />

          <div className="min-w-0 leading-tight">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">
              বাজার দর
            </h1>

            <h2 className="text-[10px] sm:text-xs md:text-[13px] font-normal whitespace-nowrap">
              {date}
            </h2>
          </div>
        </div>
        </Link>

        {/* Authentication buttons / User profile */}
        <div className="shrink-0">
          <SignInSignUpBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
