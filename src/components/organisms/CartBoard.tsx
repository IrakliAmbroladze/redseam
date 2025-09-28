import { CartItem } from "@/types/CartItem";
import { CartBody, CartTotals } from "../molecules";

export const CartBoard = ({ cart }: { cart: CartItem[] }) => {
  return (
    <div className="flex flex-col justify-between h-full overflow-hidden gap-20">
      <CartBody cart={cart} />
      <CartTotals />
    </div>
  );
};
