import { Product } from "@/types";
import Image from "next/image";

export const ProductInfo = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-[21px] font-semibold text-[32px]">
        <div>{product.name}</div>
        <div>$ {product.price}</div>
      </div>
      <div className="flex flex-col gap-[48px] ">
        <div className="flex flex-col gap-4">
          <div>Color: {product.color}</div>
          <div className="flex gap-[13px]">
            {product.available_colors.map((c) => (
              <div
                key={c}
                style={{ background: c }}
                className="w-[38px] h-[38px] rounded-full border border-black"
              ></div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>Size: {product.size}</div>
          <div className="flex gap-[13px]">
            {product.available_sizes.map((size) => (
              <div
                key={size}
                className="text-[16px] border w-[70px] h-[42px] rounded-[10px] flex justify-center items-center border-[#E1DFE1]"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>Quantity</div>
          <select className="text-[16px] border w-[70px] h-[42px] rounded-[10px] border-[#E1DFE1] px-[16px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </div>

        <button>Add to Cart</button>

        <div className="border border-[#E1DFE1]"> </div>

        <div className="flex flex-col gap-[7px]">
          <div className="flex items-center justify-between">
            <h1 className="text-[20px] font-semibold">Details</h1>
            <div className="flex items-center">
              <Image
                src={product.brand.image}
                alt={product.brand.name}
                height={0}
                width={0}
                sizes="100vw"
                className="w-auto h-[61px]"
              />
            </div>
          </div>{" "}
          <div className="text-[16px]">Brand: {product.brand.name}</div>
          <div> {product.description}</div>
        </div>
      </div>
    </div>
  );
};
