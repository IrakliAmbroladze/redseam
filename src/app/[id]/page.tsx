import { Breadcrumbs, Product } from "@/components";
import { getProduct } from "@/lib";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getProduct(id);
  if (!data)
    return (
      <div className="w-full min-h-dvh flex justify-center items-center ">
        Product not available
      </div>
    );
  return (
    <div className="px-[100px]">
      <Breadcrumbs id={id} />
      <Product product={data} />
    </div>
  );
}
