"use client";

import React from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { OrangeButton } from "../atoms";
import { CartBoard } from "./CartBoard";

export const Cart = ({
  setIsShown,
}: {
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsShown(false);
    }
  };
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-[#10151F]/30 flex items-center justify-end z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-10 w-[540px] shadow-lg max-h-dvh  flex flex-col gap-20">
        <div className="flex justify-between">
          <div className="text-xl">Shopping Cart (0)</div>
          <button
            onClick={() => setIsShown(false)}
            className=" text-[#10151F] hover:text-gray-700 cursor-pointer text-2xl"
          >
            ✕
          </button>
        </div>
        <CartBoard />
        <Link href="/checkout" onClick={() => setIsShown(false)}>
          <OrangeButton px={60} py={16}>
            Go to checkout
          </OrangeButton>
        </Link>
      </div>
    </div>,
    document.body,
  );
};
