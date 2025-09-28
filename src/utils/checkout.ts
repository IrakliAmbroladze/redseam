"use server";

import { cookies } from "next/headers";
import { deleteCartItem, getCart } from "@/lib";
import { CartItem } from "@/types";
import { revalidatePath } from "next/cache";

export const checkout = async (_: { message: string }, formData: FormData) => {
  const name = formData.get("name");
  const surname = formData.get("surname");
  const email = formData.get("email");
  const address = formData.get("address");
  const zipcode = formData.get("zipcode");
  if (!(name && surname && address && zipcode)) {
    return { message: "Please provide all required fields.", modal: false };
  }

  if (!email || email.toString().length < 3) {
    return {
      message: "Email must be at least 3 characters long.",
      modal: false,
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.toString())) {
    return { message: "Please provide a valid email address.", modal: false };
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Unauthenticated. Please login or register!");
  }
  try {
    const cart = await getCart();

    if (cart?.data) {
      await Promise.all(
        cart.data.map((item: CartItem) =>
          deleteCartItem({ id: item.id, color: item.color, size: item.size }),
        ),
      );
    }
  } catch (e) {
    if (e instanceof Error) {
      return { message: e.message };
    } else {
      console.error(e);
      return { message: "Checkout failed due to an unknown error." };
    }
  }
  revalidatePath("/checkout");
  return { message: "", modal: true };
};
