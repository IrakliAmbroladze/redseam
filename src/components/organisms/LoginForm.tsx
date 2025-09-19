import { Form } from "@/components";
import { loginUser } from "@/utils";
import type { Input } from "@/types";
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
    <div className="flex w-[554px] items-center m-40">
      <Form title="Log in" action={loginUser} fields={formFields} />
    </div>
  );
};
