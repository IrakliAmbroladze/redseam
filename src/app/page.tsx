import { ProductsList, ProductsHeadLine, Pagination } from "@/components";
import { getProducts } from "@/lib";
import { type ProductListItem } from "@/types";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page, from, to } = await searchParams;
  const data: ProductListItem[] = await getProducts({
    page: page ? Number(page) : undefined,
    from: from ? Number(from) : undefined,
    to: to ? Number(to) : undefined,
  });
  return (
    <div className="px-[100px] flex flex-col">
      <ProductsHeadLine />
      <ProductsList products={data} />
      <Pagination />
    </div>
  );
}
