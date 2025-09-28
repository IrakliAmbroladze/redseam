import { type Input as InputType } from "@/types";
import React from "react";
import { Input } from "./Input";
import { UploadImage } from "./UploadImage";

export const FieldList = React.memo(function FieldList({
  fields,
  formType,
}: {
  fields: InputType[];
  formType: "login" | "register";
}) {
  return (
    <>
      {formType == "register" && <UploadImage />}

      {fields.map((f) => (
        <Input key={f.name} {...f} />
      ))}
    </>
  );
});
