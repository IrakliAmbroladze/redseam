import Link from "next/link";
import { OrangeButton } from "../atoms";

export const CartFooter = ({
  setIsShown,
}: {
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div className="flex flex-col gap-[100px] pt-2.5">
    <div className="flex flex-col gap-[16px]">
      <div className="flex justify-between text-[16px]">
        <div>Items subtotal</div>
        <div>$ 50</div>
      </div>
      <div className="flex justify-between text-[16px]">
        <div>Delivery</div>
        <div>$ 5</div>
      </div>

      <div className="flex justify-between text-[20px] font-medium">
        <div>Total</div>
        <div>$ 55</div>
      </div>
    </div>
    <Link href="/checkout" onClick={() => setIsShown(false)}>
      <OrangeButton px={60} py={16}>
        Go to checkout
      </OrangeButton>
    </Link>
  </div>
);
