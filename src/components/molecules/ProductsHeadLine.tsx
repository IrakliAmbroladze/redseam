import { Filters } from "@/components";
export const ProductsHeadLine = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-[64px] font-semibold">Products</h1>
      <Filters />
    </div>
  );
};
