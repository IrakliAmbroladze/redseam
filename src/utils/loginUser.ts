"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const loginUser = async (_: { message: string }, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  if (!email) {
    return { message: "please, provide an email at 3 characters long" };
  }
  if (email.toString().length < 3) {
    return { message: "Email must be at least 3 characters long." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.toString())) {
    return { message: "Please provide a valid email address." };
  }
  if (!password) {
    return { message: "please, provide a password at 3 characters long" };
  }
  if (password.toString().length < 3) {
    return { message: "Password must be at least 3 characters long." };
  }
  const cookieStore = await cookies();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  try {
    const response = await fetch(
      "https://api.redseam.redberryinternship.ge/api/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      },
    );

    if (!response.ok) {
      return { message: "Can not log in, please Register!" };
    }
    const { token } = await response.json();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: "none",
      path: "/",
    });
  } catch (e) {
    if (e instanceof Error) {
      console.log("error is e.message", e.message);
      return { message: "" };
    } else {
      console.log("Uknown error while logging an user", e);
      return { message: "" };
    }
  }
  redirect("/");
};
