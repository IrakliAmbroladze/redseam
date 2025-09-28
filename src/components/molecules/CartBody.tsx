import { CartItem } from "@/types/CartItem";
import Image from "next/image";

export const CartBody = ({ cart }: { cart: CartItem[] }) => (
  <div className="overflow-y-auto flex flex-col gap-9">
    {cart.map((item) => (
      <div
        key={`${item.id}-${item.color}-${item.size}`}
        className="flex gap-4 "
      >
        <div className="relative w-[100px] h-[134px]">
          <Image
            src={item.images[item.available_colors.indexOf(item.color)]}
            alt="Preview"
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <div className="flex flex-col justify-between py-2 w-full pr-2">
          <div className="flex justify-between">
            <div>{item.name}</div>
            <div className="text-[500] text-[18px]">$ {item.price}</div>
          </div>
          <div className="text-[400] text-[12px]">{item.color}</div>
          <div className="text-[400] text-[12px]">{item.size}</div>
          <div className="flex justify-between">
            <div className="text-[200] text-[12px] border border-[#E1DFE1] rounded-2xl px-2 py-1 flex justify-between">
              <button
                className={`w-4 h-4 ${item.quantity < 2 ? "text-[#E1DFE1]" : ""}`}
              >
                -
              </button>{" "}
              <span className="text-[400] text-[12px]">{item.quantity}</span>
              <button className="w-4 h-4">+</button>
            </div>
            <button className="text-[200] text-[12px] text-[#3E424A]">
              remove
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);
