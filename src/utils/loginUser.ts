"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const loginUser = async (_: { message: string }, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const response = await fetch(
    "https://api.redseam.redberryinternship.ge/api/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    },
  );
  const cookieStore = await cookies();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  if (response.ok) {
    const { token } = await response.json();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: "none",
      path: "/",
    });
    redirect("/");
  } else {
    console.log("not logged in");
  }
  return { message: "Login processed" };
};
