"use client";

import { Product } from "@/types";
import Image from "next/image";
import { OrangeButton } from "../atoms";
import { CartIconWhite } from "../icons";
import { Dispatch, SetStateAction } from "react";
import { addToCart } from "@/lib";
import { useState } from "react";

export const ProductInfo = ({
  product,
  selectedProduct,
  setSelectedProduct,
}: {
  product: Product;
  selectedProduct: {
    quantity: number;
    color: string;
    size: "XS" | "S" | "M" | "L" | "XL";
  };
  setSelectedProduct: Dispatch<
    SetStateAction<{
      quantity: number;
      color: string;
      size: "XS" | "S" | "M" | "L" | "XL";
    }>
  >;
}) => {
  const [status, setStatus] = useState<{
    message: string;
    success: boolean;
  } | null>(null);
  const handleApply = async () => {
    try {
      const response = await addToCart({ ...selectedProduct, id: product.id });
      setStatus({ message: response?.message ?? "Added!", success: true });
    } catch (error) {
      if (error instanceof Error) {
        setStatus({ message: error.message, success: false });
      } else {
        setStatus({
          message: "Unknown error while adding to cart",
          success: false,
        });
      }
    }

    setTimeout(() => setStatus(null), 2000);
  };
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-[21px] font-semibold text-[32px]">
        <div>{product.name}</div>
        <div>$ {product.price}</div>
      </div>
      <div className="flex flex-col gap-[48px] ">
        <div className="flex flex-col gap-4">
          <div>Color: {selectedProduct.color}</div>
          <div className="flex gap-[13px]">
            {product.available_colors.map((c) => (
              <div
                key={c}
                style={{ background: c }}
                className={`w-[38px] h-[38px] rounded-full border border-gray-300 ${c === selectedProduct.color && "ring-4 ring-gray-300"}`}
                onClick={() =>
                  setSelectedProduct((prev) => {
                    return { ...prev, color: c };
                  })
                }
              ></div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>Size: {selectedProduct.size}</div>
          <div className="flex gap-[13px]">
            {product.available_sizes.map((size) => (
              <button
                key={size}
                className={`text-[16px] border w-[70px] h-[42px] rounded-[10px] flex justify-center items-center ${size == selectedProduct.size ? "border-[#10151F]" : "border-[#E1DFE1]"} cursor-pointer`}
                onClick={() =>
                  setSelectedProduct((prev) => {
                    return { ...prev, size };
                  })
                }
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>Quantity</div>

          <select
            className="text-[16px] border w-[70px] h-[42px] rounded-[10px] border-[#E1DFE1] px-[16px]"
            onChange={(e) =>
              setSelectedProduct((prev) => ({
                ...prev,
                quantity: Number(e.target.value),
              }))
            }
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((quantity) => (
              <option key={quantity} value={quantity}>
                {quantity}
              </option>
            ))}
          </select>
        </div>

        <OrangeButton px={60} py={16} onClick={handleApply}>
          <div className="flex justify-center gap-2.5">
            {status ? (
              <div
                className={`text-center font-medium ${
                  status.success ? "text-green-600" : "text-red-100"
                }`}
              >
                {status.message}
              </div>
            ) : (
              <>
                <CartIconWhite />
                <span>Add to Cart</span>
              </>
            )}
          </div>
        </OrangeButton>

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
