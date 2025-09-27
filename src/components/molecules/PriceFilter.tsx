"use client";
import Image from "next/image";
import { useState } from "react";
import { PriceModal } from "./PriceModal";

export const PriceFilter = () => {
  const [isPriceModalOpen, setIsPriceModalOpen] = useState<boolean>(false);
  return (
    <div className="cursor-pointer relative">
      <div
        className="flex gap-2"
        onClick={() => setIsPriceModalOpen((prev) => !prev)}
      >
        <button className="w-[24px] h-[24px] relative">
          <Image src="/filter.svg" alt="filter" fill />
        </button>
        <span className="text-[16px]">filter</span>
      </div>
      {isPriceModalOpen && <PriceModal />}
    </div>
  );
};
