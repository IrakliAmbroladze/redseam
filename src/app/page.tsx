import { ProductsList, ProductsHeadLine, Pagination } from "@/components";
export default function Home() {
  return (
    <div className="px-[100px] flex flex-col">
      <ProductsHeadLine />
      <ProductsList />
      <Pagination />
    </div>
  );
}
