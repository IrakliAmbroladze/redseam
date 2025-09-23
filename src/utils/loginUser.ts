"use server";

import { redirect } from "next/navigation";

export const loginUser = async (prevState: unknown, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log("Email:", email, "Password:", password);
  const response = await fetch(
    "https://api.redseam.redberryinternship.ge/api/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    },
  );

  if (response.ok) {
    console.log("response JSON: ", await response.json());
    redirect("/");
  } else {
    console.log("not logged in");
  }
  return { message: "Login processed" };
};
