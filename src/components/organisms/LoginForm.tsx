import { Form } from "./Form";
import { loginUser } from "@/utils";
import type { Input } from "@/types";
import Link from "next/link";
export const LoginForm = () => {
  const formFields: Input[] = [
    { name: "email", placeholder: "Email", required: true },
    {
      name: "password",
      placeholder: "Password",
      required: true,
      type: "password",
      hasEyeIcon: true,
    },
  ];
  return (
    <div className="flex w-[554px] justify-center items-center m-40 flex-col gap-5">
      <Form
        title="Log in"
        action={loginUser}
        fields={formFields}
        btnText="Log in"
        type="login"
      />
      <div>
        not a member?{" "}
        <Link href="./registration" className="text-[#FF4000]">
          Register
        </Link>
      </div>
    </div>
  );
};
