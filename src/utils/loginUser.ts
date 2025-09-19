"use server";
export const loginUser = async (prevState: unknown, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log("Email:", email, "Password:", password);

  return { message: "Login processed" };
};
