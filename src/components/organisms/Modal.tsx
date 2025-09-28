"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OrangeButton } from "../atoms";

export const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white w-[876px] h-[590px] p-6 shadow-lg relative max-h-[90vh] overflow-y-auto">
        <Link
          href={"/"}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          ✕
        </Link>
        <div className="w-full h-full flex flex-col  items-center justify-center gap-20">
          <Image src="/Frame70.png" alt="congrats" width={233} height={216} />
          <Link href={"/"} className="w-[214px]">
            <OrangeButton>Continue shopping</OrangeButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
