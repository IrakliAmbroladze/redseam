"use client";
import React from "react";
import { FieldList } from "../molecules";
import { type Input as InputType } from "@/types";
import { useActionState } from "react";
import { SubmitButton } from "../atoms";

export const Form = ({
  title,
  action,
  fields,
  btnText = "submit",
}: {
  title: string;
  action: (
    prevState: { message: string },
    formData: FormData,
  ) => Promise<{ message: string }>;
  fields: InputType[];
  btnText?: string;
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
        <FieldList fields={fields} />
        <SubmitButton isPending={isPending} btnText={btnText} />
      </form>
    </div>
  );
};
