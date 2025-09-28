"use server";
import { cookies } from "next/headers";

export const addToCart = async ({
  id,
  quantity,
  color,
  size,
}: {
  id: number;
  quantity: number;
  color: string;
  size: "XS" | "S" | "M" | "L" | "XL";
}) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Unauthenticated. Please, login ot register!");
  }
  try {
    const response = await fetch(
      `https://api.redseam.redberryinternship.ge/api/cart/products/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity, color, size }),
      },
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message ?? "Can not log in, please Register!");
    }

    return { message: "Product added to cart!", data };
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
      if (e.message == "Unauthenticated.") {
        return {
          message: "Not authenticated, please Register or Login again!",
        };
      }
    } else {
      console.error("Uknown error: ", e);
    }
    return { message: "Can not log in an user" };
  }
};
