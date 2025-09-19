"use client";
import { Input } from "@/components";
import { useActionState } from "react";
export const Form = ({
  children,
  title,
  action,
}: {
  children?: React.ReactNode;
  title: string;
  action: (
    prevState: { message: string },
    formData: FormData,
  ) => Promise<{ message: string }>;
}) => {
  const [state, formAction, isPending] = useActionState(action, {
    message: "",
  });
  console.log(state.message);
  return (
    <div className="flex flex-col">
      <div className="text-5xl font-semibold">{title}</div>
      <div className="flex flex-col w-[554px] h-[240px] bg-amber-400 ">
        <form
          action={formAction}
          className="flex flex-col justify-between w-full gap-9"
        >
          <Input name="email" placeholder="Email" required={true} type="text" />
          <Input
            name="password"
            required={true}
            placeholder="Password"
            hasEyeIcon={true}
            type="password"
          />
          <div className="flex flex-1 bg-blue-900 justify-center items-center">
            <button
              type="submit"
              className="h-[42px] bg-[#FF4000] w-full rounded-xl"
            >
              {isPending ? "Logging in" : "Log in"}
            </button>
          </div>
        </form>
      </div>
      <div>{children}</div>
    </div>
  );
};
