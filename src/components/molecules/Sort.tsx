"use client";
import Image from "next/image";
import { SortModal } from "./SortModal";
import { Dispatch, SetStateAction } from "react";

type SortProps = {
  isSortModalOpen: boolean;
  setIsSortModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsPriceModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const Sort = ({
  isSortModalOpen,
  setIsSortModalOpen,
  setIsPriceModalOpen,
}: SortProps) => {
  return (
    <div className="cursor-pointer relative">
      <div
        className="flex gap-2 items-center"
        onClick={() => {
          setIsPriceModalOpen(false);
          setIsSortModalOpen((prev) => !prev);
        }}
      >
        <span className="text-[16px]">Sort by</span>
        <button className="w-[20px] h-[20px] relative">
          <Image src="/stroke.svg" alt="filter" fill />
        </button>
      </div>
      {isSortModalOpen && <SortModal />}
    </div>
  );
};
