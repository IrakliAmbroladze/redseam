"use client";
import { useState } from "react";
import { PriceFilter } from "./PriceFilter";
import { Sort } from "./Sort";

export const Filters = ({
  from,
  to,
  total,
}: {
  from: number;
  to: number;
  total: number;
}) => {
  const [isPriceModalOpen, setIsPriceModalOpen] = useState<boolean>(false);
  const [isSortModalOpen, setIsSortModalOpen] = useState<boolean>(false);
  return (
    <div className="flex  items-center gap-8">
      <span className="text-[#3E424A] text-[12px]">
        {`Showing ${from}-${to} of ${total} results`}
      </span>
      <span className="text-[#E1DFE1] text-[12px]">|</span>
      <PriceFilter
        {...{ isPriceModalOpen, setIsPriceModalOpen, setIsSortModalOpen }}
      />
      <Sort {...{ isSortModalOpen, setIsSortModalOpen, setIsPriceModalOpen }} />
    </div>
  );
};
