import { Form } from "@/components";
import { loginUser } from "@/utils";
export const LoginForm = () => {
  return <Form title="Log in" action={loginUser}></Form>;
};
