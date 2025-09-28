"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { type Input as InputType } from "@/types";

const InputBase = ({
  placeholder = "",
  required = false,
  hasEyeIcon = false,
  name,
  type = "text",
}: InputType) => {
  const hiddenSpanRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    if (hiddenSpanRef.current) {
      setTextWidth(hiddenSpanRef.current.offsetWidth);
    }
  }, [placeholder]);

  return (
    <div className="relative">
      <input
        name={name}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="h-[42px] w-full rounded-xl border border-[#E1DFE1] focus:border-[#10151F] focus:outline-none placeholder-[#3E424A]"
        type={type == "password" ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        style={{
          textIndent: "8px",
        }}
      />
      <span
        ref={hiddenSpanRef}
        className="absolute invisible text-[#3E424A]"
        style={{ left: "12px", top: "50%", transform: "translateY(-50%)" }}
      >
        {placeholder}
      </span>
      {required && (
        <span
          className={`absolute top-1/2 -translate-y-1/2 text-red-500 pointer-events-none ${userInput && "invisible"}`}
          style={{
            left: `${textWidth + 16}px`,
          }}
        >
          *
        </span>
      )}
      {type == "password" && hasEyeIcon && (
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <Image alt="icon" width={17} height={12.5} src="/eye.svg" />
        </button>
      )}
    </div>
  );
};

export const Input = React.memo(InputBase);
