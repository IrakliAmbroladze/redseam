import { Headline } from "@/components/atoms";

const CheckoutPage = () => {
  return (
    <div className="px-[100px]">
      <Headline> Checkout</Headline>
      <div className="flex justify-between">
        <div>Order details</div>
        <div>cart</div>
      </div>
    </div>
  );
};

export default CheckoutPage;
