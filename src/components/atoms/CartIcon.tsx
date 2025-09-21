"use client";
import { useState } from "react";
import { CartIconBlack } from "../icons";
import { Cart } from "../organisms";

export const CartIcon = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setIsShown((prev) => !prev)}
        className="cursor-pointer"
      >
        <CartIconBlack />
      </button>
      {isShown && <Cart setIsShown={setIsShown} />}
    </>
  );
};
