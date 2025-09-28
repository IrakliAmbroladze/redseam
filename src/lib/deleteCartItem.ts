"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const deleteCartItem = async ({
  id,
  color,
  size,
}: {
  id: number;
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
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: JSON.stringify({ color, size }),
      },
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data?.message ?? "Can not delete!");
    }

    revalidatePath("/");
    return { message: "Product deleted!", data };
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
    return { message: "Cannot delete cart item" };
  }
};
