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
      <input type="file" accept="image/*" id="avatar" name="avatar" />
      {fields.map((f) => (
        <Input key={f.name} {...f} />
      ))}
    </>
  );
});
