import { CartItem } from "@/types";

export const CartTotals = ({ cart }: { cart: CartItem[] }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.total_price, 0);

  const delivery = 5;

  const total = subtotal + delivery;

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex justify-between text-[16px]">
        <div>Items subtotal</div>
        <div>$ {subtotal.toFixed(2)}</div>
      </div>

      <div className="flex justify-between text-[16px]">
        <div>Delivery</div>
        <div>$ {delivery.toFixed(2)}</div>
      </div>

      <div className="flex justify-between text-[20px] font-medium">
        <div>Total</div>
        <div>$ {total.toFixed(2)}</div>
      </div>
    </div>
  );
};
