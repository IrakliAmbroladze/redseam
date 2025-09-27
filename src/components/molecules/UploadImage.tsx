"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const UploadImage = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleRemove = () => {
    setPreview(null);
    const input = document.getElementById("avatar") as HTMLInputElement | null;
    if (input) input.value = "";
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <>
      <div className="flex gap-[15px] items-center text-[14px]">
        <label
          htmlFor="avatar"
          className="relative w-[100px] h-[100px] cursor-pointer"
        >
          <Image
            src={preview ?? "/upload.svg"}
            alt="Preview"
            fill
            className="object-cover rounded-full"
          />
        </label>
        <label htmlFor="avatar" className="cursor-pointer">
          Upload {preview ? "new" : "image"}
        </label>
        {preview && (
          <button
            type="button"
            onClick={handleRemove}
            className="cursor-pointer"
          >
            Remove
          </button>
        )}
        <input
          type="file"
          accept="image/*"
          id="avatar"
          name={preview ? "avatar" : undefined}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </>
  );
};
