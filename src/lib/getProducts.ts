"use server";
import { Meta, ProductListItem } from "@/types";

type DataObj = { data: ProductListItem[]; meta: Meta };

export const getProducts = async ({
  page,
  from,
  to,
  sort,
}: {
  page?: number;
  from?: number;
  to?: number;
  sort?: "price" | "-price" | "created_at" | "-created_at";
} = {}) => {
  const pathname = "https://api.redseam.redberryinternship.ge/api/products";
  const params = new URLSearchParams();

  if (page !== undefined) params.append("page", String(page));
  if (from !== undefined) params.append("filter[price_from]", String(from));
  if (to !== undefined) params.append("filter[price_to]", String(to));
  if (sort !== undefined) params.append("sort", sort);

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
    const dataObj: DataObj = await response.json();
    return dataObj;
  } catch (error) {
    if (error instanceof Error) {
      console.warn(error.message);
    } else {
      console.log("Uknown error while fetching products");
    }
  }
};
