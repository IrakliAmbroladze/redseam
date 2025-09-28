import { ProductsList, ProductsHeadLine, Pagination } from "@/components";
import { getProducts } from "@/lib";
import { Meta, ProductListItem } from "@/types";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page, from, to, sort } = await searchParams;
  const dataObj: { data: ProductListItem[]; meta: Meta } | undefined =
    await getProducts({
      page: page ? Number(page) : undefined,
      from: from ? Number(from) : undefined,
      to: to ? Number(to) : undefined,
      sort:
        (sort as "price" | "-price" | "created_at" | "-created_at") ??
        undefined,
    });
  if (!dataObj) {
    return <div> no data to show</div>;
  }
  const totalPages = dataObj.meta.last_page;
  return (
    <div className="px-[100px] flex flex-col">
      <ProductsHeadLine />
      <ProductsList products={dataObj.data} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
