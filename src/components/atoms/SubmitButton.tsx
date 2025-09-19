import React from "react";

export const SubmitButton = React.memo(function SubmitButton({
  isPending,
  btnText,
}: {
  isPending: boolean;
  btnText: string;
}) {
  console.log("SubmitButton render: ", isPending);

  return (
    <div className="flex flex-1 justify-center items-center">
      <button
        type="submit"
        className="h-[42px] bg-[#FF4000] w-full rounded-xl text-white"
      >
        {isPending ? "processing ..." : btnText}
      </button>
    </div>
  );
});
