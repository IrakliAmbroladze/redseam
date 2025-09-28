"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { OrangeButton } from "../atoms";
import { CartBoard } from "./CartBoard";
import { getCart } from "@/lib";
import { CartItem } from "@/types/CartItem";

export const Cart = ({
  setIsShown,
}: {
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsShown(false);
    }
  };
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-[#10151F]/30 flex items-center justify-end z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-10 w-[540px] shadow-lg max-h-dvh  flex flex-col gap-20">
        <div className="flex justify-between">
          <div className="text-xl">Shopping Cart ({cart?.length || 0})</div>
          <button
            onClick={() => setIsShown(false)}
            className=" text-[#10151F] hover:text-gray-700 cursor-pointer text-2xl"
          >
            ✕
          </button>
        </div>
        <CartBoard cart={cart ?? []} />
        <Link href="/checkout" onClick={() => setIsShown(false)}>
          <OrangeButton px={60} py={16}>
            Go to checkout
          </OrangeButton>
        </Link>
      </div>
    </div>,
    document.body,
  );
};
