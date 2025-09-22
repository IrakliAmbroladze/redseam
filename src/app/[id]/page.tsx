import { Product } from "@/types";
import { ProductInfo } from "@/components";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const getProduct = async () => {
    try {
      const response = await fetch(
        `https://api.redseam.redberryinternship.ge/api/products/${id}`,
      );
      const data: Product = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.warn("error while fetching a product: ", error.message);
      } else {
        console.log("Uknown error while fetching a product");
      }
    }
  };
  const data = await getProduct();
  console.log("data is: ", data);
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
          {data && (
            <Image
              src={data.cover_image}
              width={703}
              height={937}
              alt="image"
            />
          )}
        </div>
        <div className="w-[703px]">
          {data && <ProductInfo product={data} />}
        </div>
      </div>
    </div>
  );
}
