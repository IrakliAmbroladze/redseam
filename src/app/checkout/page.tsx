import { CartBoard } from "@/components";
import { Headline, OrangeButton } from "@/components/atoms";

const CheckoutPage = () => {
  return (
    <div className="px-[100px]">
      <Headline> Checkout</Headline>
      <div className="flex justify-between h-[635px]">
        <div className="h-[635px] w-[1129px] bg-[#F8F6F7] rounded-2xl">
          Order details
        </div>
        <div className="h-[635px] w-[460px] flex flex-col gap-20">
          <CartBoard />
          <OrangeButton px={60} py={16}>
            pay
          </OrangeButton>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
