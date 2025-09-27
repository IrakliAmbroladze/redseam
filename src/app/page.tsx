import { ProductsList, ProductsHeadLine, Pagination } from "@/components";
import { getProducts } from "@/lib";
import { type ProductListItem } from "@/types";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page, from, to, sort } = await searchParams;
  const data: ProductListItem[] = await getProducts({
    page: page ? Number(page) : undefined,
    from: from ? Number(from) : undefined,
    to: to ? Number(to) : undefined,
    sort:
      (sort as "price" | "-price" | "created_at" | "-created_at") ?? undefined,
  });
  return (
    <div className="px-[100px] flex flex-col">
      <ProductsHeadLine />
      <ProductsList products={data} />
      <Pagination />
    </div>
  );
}
