"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const registerUser = async (
  _: { message: string },
  formData: FormData,
) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const password_confirmation = formData.get("password_confirmation");
  if (!username) {
    return { message: "please, provide an usename at least 3 characters long" };
  }
  if (username.toString().length < 3) {
    return { message: "Username must be at least 3 characters long." };
  }
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
  if (!password_confirmation) {
    return { message: "please, confirm the password" };
  }
  if (password.toString() !== password_confirmation.toString()) {
    return { message: "Please make sure your passwords match" };
  }
  const cookieStore = await cookies();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  try {
    const response = await fetch(
      "https://api.redseam.redberryinternship.ge/api/register",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      },
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data?.message ?? "Can not register, try again!");
    }
    const { token } = data;
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: "none",
      path: "/",
    });
  } catch (e) {
    if (e instanceof Error) {
      return { message: e.message };
    } else {
      console.log(e);
      return { message: "Can not register an user" };
    }
  }
  redirect("/");
};
