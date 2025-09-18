import { Input } from "@/components";
export default function LoginPage() {
  return (
    <div className="flex flex-1 items-center ">
      <div className="flex flex-col p-40 gap-20">
        <div className="text-5xl font-semibold">Log in</div>
        <div className="flex flex-col w-[554px] h-[240px] bg-amber-400">
          <div className="flex flex-col justify-between h-[108px] w-full">
            <Input
              name="email"
              placeholder="Email"
              required={true}
              type="text"
            />
            <Input
              name="password"
              placeholder="Password"
              hasEyeIcon={true}
              type="password"
            />
          </div>
          <div className="flex flex-1 bg-blue-900 justify-center items-center">
            <button className="h-[42px] bg-[#FF4000] w-full rounded-xl">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
