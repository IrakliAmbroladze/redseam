"use server";
import { type ProductListItem } from "@/types";
export const getProducts = async ({
  page,
  from,
  to,
}: {
  page?: number;
  from?: number;
  to?: number;
} = {}) => {
  const pathname = "https://api.redseam.redberryinternship.ge/api/products";
  const params = new URLSearchParams();

  if (page !== undefined) params.append("page", String(page));
  if (from !== undefined) params.append("filter[price_from]", String(from));
  if (to !== undefined) params.append("filter[price_to]", String(to));

  const url = `${pathname}?${params.toString()}`;
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
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
