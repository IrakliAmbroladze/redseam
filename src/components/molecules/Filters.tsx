import Image from "next/image";
import { PriceFilter } from "./PriceFilter";

export const Filters = () => {
  return (
    <div className="flex  items-center gap-8">
      <span className="text-[#3E424A] text-[12px]">
        Showing 1-10 of 100 results
      </span>
      <span className="text-[#E1DFE1] text-[12px]">|</span>
      <PriceFilter />
      <div className="flex gap-2 items-center">
        <span className="text-[16px]">Sort by</span>
        <button className="w-[20px] h-[20px] relative">
          <Image src="/stroke.svg" alt="filter" fill />
        </button>
      </div>
    </div>
  );
};
