import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "../atoms";
export const Header = () => {
  return (
    <nav className="fixed h-20 w-[1920px] z-50 flex items-center justify-between py-2.5 px-[100px] bg-white">
      <Link href="/" className="flex items-center text-[#10151F]">
        <div className="w-[24px] h-[24px] relative">
          <Image src="/HandEye.svg" alt="logo" fill />
        </div>
        <span className="text-[16px] font-semibold ">RedSeam Clothing</span>
      </Link>
      <div className="flex gap-5">
        <CartIcon />
        <Link href="/login" className="flex items-center text-[#10151F]">
          <div className="w-[20px] h-[20px] relative">
            <Image src="/user.svg" alt="logo" fill />
          </div>
          <span className="text-xs">Log in</span>
        </Link>
      </div>
    </nav>
  );
};
