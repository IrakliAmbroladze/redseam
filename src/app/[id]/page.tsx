import { ProductInfo } from "@/components";
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
      <div>listing/product</div>
      <div className="flex justify-between">
        <div className="flex gap-2.5">
          <div className="flex flex-col gap-[9px]">
            {data.images.map((image) => (
              <Image
                key={image}
                src={image}
                width={121}
                height={161}
                alt="image"
              />
            ))}
          </div>
          <Image src={data.cover_image} width={703} height={937} alt="image" />
        </div>
        <div className="w-[703px]">
          <ProductInfo product={data} />
        </div>
      </div>
    </div>
  );
}
