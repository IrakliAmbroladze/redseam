"use client";

import React from "react";
import ReactDOM from "react-dom";

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
      <div className="bg-white p-6 w-[540px] shadow-lg relative h-full overflow-y-auto">
        <button
          onClick={() => setIsShown(false)}
          className="absolute top-10 right-10 text-[#10151F] hover:text-gray-700 cursor-pointer text-2xl"
        >
          ✕
        </button>
      </div>
    </div>,
    document.body,
  );
};

{
  /*

;*/
}
