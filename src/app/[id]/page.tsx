import { Product } from "@/types";
import { ProductInfo } from "@/components";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `https://api.redseam.redberryinternship.ge/api/products/${id}`,
  );
  const data: Product = await response.json();
  return (
    <div className="px-[100px]">
      <div>listing/product</div>
      <div className="flex justify-between">
        <div className="flex gap-2.5">
          <div className="flex flex-col gap-[9px]">
            {data &&
              data.images.map((image) => (
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
          {data && <ProductInfo product={data} />}
        </div>
      </div>
    </div>
  );
}
