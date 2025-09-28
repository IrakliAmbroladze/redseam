"use client";
import { CartBoard, Input } from "@/components";
import { Headline, OrangeButton } from "@/components/atoms";
import { getCart } from "@/lib";
import { CartItem } from "@/types";
import { checkout } from "@/utils";
import { useActionState, useEffect, useState } from "react";

const CheckoutPage = () => {
  const [state, formAction, isPending] = useActionState(checkout, {
    message: "",
  });
  const fields = [
    { name: "name", placeholder: "Name", required: true },
    { name: "surname", placeholder: "Surname", required: true },
    { name: "email", placeholder: "Email", required: true },
    { name: "address", placeholder: "Address", required: true },
    { name: "zipcode", placeholder: "Zip code", required: true },
  ];
  const [cart, setCart] = useState<CartItem[] | null>(null);
  const [status, setStatus] = useState<{
    message: string;
    success: boolean;
  } | null>(null);

  useEffect(() => {
    try {
      const fetchCart = async () => {
        const response = await getCart();
        const { data } = response;
        setCart(data);
      };
      fetchCart();
    } catch (error) {
      if (error instanceof Error) {
        setStatus({ message: error.message, success: false });
      } else {
        setStatus({
          message: "Unknown error while adding to cart",
          success: false,
        });
      }
    } finally {
      console.log(status);
    }
  }, [status]);
  return (
    <div className="px-[100px]">
      <Headline> Checkout</Headline>
      <form action={formAction} className="flex justify-between h-[635px]">
        <div className="h-[635px] w-[1129px] bg-[#F8F6F7] rounded-2xl">
          <div className="w-[578px] flex flex-col gap-10 my-12 mx-8">
            <div className="font-medium text-2xl">Order details</div>
            <div className="flex justify-between ">
              {fields.slice(0, 2).map((f) => (
                <div key={f.name} className="w-[277px] ">
                  <Input {...f} />
                </div>
              ))}
            </div>
            <Input {...fields[2]} />
            <div className="flex justify-between">
              {fields.slice(3).map((f) => (
                <div key={f.name} className="w-[277px]">
                  <Input {...f} />
                </div>
              ))}
            </div>
          </div>
          {state.message && state.message}
        </div>
        <div className="h-[635px] w-[460px] flex flex-col gap-20">
          <CartBoard cart={cart ?? []} setCart={setCart} />
          <OrangeButton px={60} py={16} type="submit">
            {isPending ? "in process ..." : "pay"}
          </OrangeButton>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
