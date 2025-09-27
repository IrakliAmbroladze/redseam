"use server";

import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "../atoms";
import { cookies } from "next/headers";

export const Header = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const avatar = cookieStore.get("avatar");
  const isLoggedIn = token && Boolean(token.value);
  const hasAvatar = avatar && Boolean(avatar.value);
  return (
    <nav className="fixed h-20 w-[1920px] z-50 flex items-center justify-between py-2.5 px-[100px] bg-white">
      <Link href="/" className="flex items-center text-[#10151F]">
        <div className="w-[24px] h-[24px] relative">
          <Image src="/HandEye.svg" alt="logo" fill />
        </div>
        <span className="text-[16px] font-semibold ">RedSeam Clothing</span>
      </Link>
      <div className="flex gap-5">
        {isLoggedIn && <CartIcon />}
        <div className="w-[20px] h-[20px] relative">
          <Image
            src={hasAvatar ? (avatar?.value ?? "") : "/user.svg"}
            alt="avatar"
            fill
          />
        </div>

        <Link href="/login" className="flex items-center text-[#10151F]">
          {!isLoggedIn && <span className="text-xs">Log in</span>}
        </Link>
      </div>
    </nav>
  );
};
