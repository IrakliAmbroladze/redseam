import { CartBody, CartTotals } from "../molecules";

export const CartBoard = () => {
  return (
    <div className="flex flex-col justify-between h-full overflow-hidden gap-20">
      <CartBody />
      <CartTotals />
    </div>
  );
};
