"use client";

import React from "react";
import ReactDOM from "react-dom";
import { CartBody, CartFooter } from "../molecules";

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
      <div className="bg-white p-10 w-[540px] shadow-lg h-full overflow-y-auto flex flex-col">
        <div className="flex justify-between">
          <div className="text-xl">Shopping Cart (0)</div>
          <button
            onClick={() => setIsShown(false)}
            className=" text-[#10151F] hover:text-gray-700 cursor-pointer text-2xl"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col justify-between h-full overflow-hidden">
          <CartBody />
          <CartFooter setIsShown={setIsShown} />
        </div>
      </div>
    </div>,
    document.body,
  );
};
