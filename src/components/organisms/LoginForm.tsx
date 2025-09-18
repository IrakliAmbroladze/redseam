"use client";
import { Form } from "@/components";
export const LoginForm = () => {
  const loginUser = (prevState: unknown, formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log("Email:", email, "Password:", password);

    return { message: "Login processed" };
  };

  return <Form title="Log in" action={loginUser}></Form>;
};
