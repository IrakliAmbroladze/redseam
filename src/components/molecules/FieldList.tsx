import { type Input as InputType } from "@/types";
import React from "react";
import { Input } from "./Input";

export const FieldList = React.memo(function FieldList({
  fields,
}: {
  fields: InputType[];
}) {
  return (
    <>
      {fields.map((f) => (
        <Input key={f.name} {...f} />
      ))}
    </>
  );
});
