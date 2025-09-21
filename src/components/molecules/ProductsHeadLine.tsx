import { Filters } from "@/components";
import { Headline } from "../atoms";
export const ProductsHeadLine = () => {
  return (
    <div className="flex justify-between">
      <Headline>Products</Headline>
      <Filters />
    </div>
  );
};
