"use client";
import { Product as ProductType } from "@/types";
import { ProductInfo } from "./ProductInfo";
import Image from "next/image";
import { useState } from "react";

export const Product = ({ product }: { product: ProductType }) => {
  const initialProduct = {
    quantity: 1,
    color: product.available_colors[0],
    size: product.available_sizes[0],
  };
  const [selectedProduct, setSelectedProduct] = useState<{
    quantity: number;
    color: string;
    size: "XS" | "S" | "M" | "L" | "XL";
  }>(initialProduct);
  return (
    <div className="flex justify-between">
      <div className="flex gap-2.5">
        <div className="flex flex-col gap-[9px]">
          {product.images.map((image) => (
            <Image
              key={image}
              src={image}
              width={121}
              height={161}
              alt="image"
            />
          ))}
        </div>
        <Image
          src={
            product.images[
              product.available_colors.indexOf(selectedProduct.color)
            ]
          }
          width={703}
          height={937}
          alt="image"
        />
      </div>
      <div className="w-[703px]">
        <ProductInfo
          product={product}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      </div>
    </div>
  );
};
