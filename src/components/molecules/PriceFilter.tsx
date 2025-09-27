"use client";
import Image from "next/image";
import { PriceModal } from "./PriceModal";
import { Dispatch, SetStateAction } from "react";

type PriceFilterProps = {
  isPriceModalOpen: boolean;
  setIsSortModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsPriceModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const PriceFilter = ({
  isPriceModalOpen,
  setIsPriceModalOpen,
  setIsSortModalOpen,
}: PriceFilterProps) => {
  return (
    <div className="cursor-pointer relative">
      <div
        className="flex gap-2"
        onClick={() => {
          setIsSortModalOpen(false);
          setIsPriceModalOpen((prev) => !prev);
        }}
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
