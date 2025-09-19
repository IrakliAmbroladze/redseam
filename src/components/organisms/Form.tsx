"use client";
import { Input } from "../molecules";
import { type Input as InputType } from "@/types";
import { useActionState } from "react";
export const Form = ({
  title,
  action,
  fields,
}: {
  title: string;
  action: (
    prevState: { message: string },
    formData: FormData,
  ) => Promise<{ message: string }>;
  fields: InputType[];
}) => {
  const [state, formAction, isPending] = useActionState(action, {
    message: "",
  });
  console.log(state.message);
  return (
    <div className="flex flex-col w-full gap-20">
      <div className="text-5xl font-semibold">{title}</div>
      <form
        action={formAction}
        className="flex flex-col justify-between w-full gap-9"
      >
        {fields.map((f, index) => (
          <Input
            key={index}
            placeholder={f.placeholder}
            required={f.required}
            hasEyeIcon={f.hasEyeIcon}
            name={f.name}
            type={f.type}
          />
        ))}
        <div className="flex flex-1 justify-center items-center">
          <button
            type="submit"
            className="h-[42px] bg-[#FF4000] w-full rounded-xl"
          >
            {isPending ? "Logging in" : "Log in"}
          </button>
        </div>
      </form>
    </div>
  );
};
