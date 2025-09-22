"use server";
import { Product } from "@/types";

export const getProduct = async (id: number | string) => {
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
