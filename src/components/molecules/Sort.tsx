"use client";
import Image from "next/image";
import { useState } from "react";
import { SortModal } from "./SortModal";

export const Sort = () => {
  const [isSortModalOpen, setIsSortModalOpen] = useState<boolean>(false);
  return (
    <div className="cursor-pointer relative">
      <div
        className="flex gap-2 items-center"
        onClick={() => setIsSortModalOpen((prev) => !prev)}
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
