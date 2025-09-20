"use client";
import { CartIconBlack } from "../icons";

export const CartIcon = () => {
  return (
    <button
      onClick={() => {
        alert("hello");
      }}
    >
      <CartIconBlack />
    </button>
  );
};
