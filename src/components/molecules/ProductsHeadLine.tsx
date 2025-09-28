import { Filters } from "@/components";
import { Headline } from "../atoms";
import { Meta } from "@/types";
export const ProductsHeadLine = ({ metaData }: { metaData: Meta }) => {
  return (
    <div className="flex justify-between">
      <Headline>Products</Headline>
      <Filters from={metaData.from} to={metaData.to} total={metaData.total} />
    </div>
  );
};
