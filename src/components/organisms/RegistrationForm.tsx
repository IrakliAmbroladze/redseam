import { Form } from "./Form";
import { loginUser } from "@/utils";
import type { Input } from "@/types";
import Link from "next/link";
export const RegistrationForm = () => {
  const formFields: Input[] = [
    { name: "username", placeholder: "Username", required: true },
    { name: "email", placeholder: "Email", required: true },
    {
      name: "password",
      placeholder: "Password",
      required: true,
      type: "password",
      hasEyeIcon: true,
    },
    {
      name: "confirmpassword",
      placeholder: "Confirm password",
      required: true,
      type: "password",
      hasEyeIcon: true,
    },
  ];
  return (
    <div className="flex w-[554px] justify-center items-center m-40 flex-col gap-5">
      <Form
        title="Registration"
        action={loginUser}
        fields={formFields}
        btnText="Registration"
      />
      <div>
        already member?{" "}
        <Link href="./login" className="text-[#FF4000]">
          Log in
        </Link>
      </div>
    </div>
  );
};
