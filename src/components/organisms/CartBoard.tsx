import { CartItem } from "@/types/CartItem";
import { CartBody, CartTotals } from "../molecules";
import { Dispatch, SetStateAction } from "react";

export const CartBoard = ({
  cart,
  setCart,
}: {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[] | null>>;
}) => {
  return (
    <div className="flex flex-col justify-between h-full overflow-hidden gap-20">
      <CartBody cart={cart} setCart={setCart} />
      <CartTotals cart={cart} />
    </div>
  );
};
