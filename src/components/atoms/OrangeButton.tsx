import React from "react";

export const OrangeButton = React.memo(function SubmitButton({
  type = "submit",
  children,
  px = 20,
  py = 10,
}: {
  type?: "button" | "submit";
  children: React.ReactNode;
  px?: number;
  py?: number;
}) {
  return (
    <button
      type={type}
      className="bg-[#FF4000] rounded-xl text-white font-medium cursor-pointer active:scale-95 transition-transform ease-in-out duration-150 w-full"
      style={{
        padding: `${py}px ${px}px`,
      }}
    >
      {children}
    </button>
  );
});
