"use server";
import { type ProductListItem } from "@/types";
export const getProducts = async () => {
  try {
    const response = await fetch(
      "https://api.redseam.redberryinternship.ge/api/products",
    );
    const json = await response.json();
    const { data }: { data: ProductListItem[] } = json;
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.warn(error.message);
      return [];
    } else {
      console.log("Uknown error while fetching products");
      return [];
    }
  }
};
