import { useRouter, useSearchParams } from "next/navigation";
import { OrangeButton } from "../atoms";
import { Input } from "./Input";

export const PriceModal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleApply = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const from = formData.get("from");
    const to = formData.get("to");
    const params = new URLSearchParams(searchParams);
    if (from) {
      params.set("from", from.toString());
    } else {
      params.delete("from");
    }

    if (to) {
      params.set("to", to.toString());
    } else {
      params.delete("to");
    }

    router.push(`?${params.toString()}`);
  };
  return (
    <div className="flex flex-col w-[392px] bg-white absolute top-10 -right-3.5 rounded-lg border border-[#E1DFE1] p-4 gap-5">
      <h6 className="text-[14px] font-semibold text-start">Select price</h6>
      <form onSubmit={handleApply} className="flex flex-col gap-5 items-end">
        <div className="flex gap-2.5">
          <Input placeholder="from" required name="from" type="number" />
          <Input placeholder="to" required name="to" type="number" />
        </div>
        <div className="w-32 ">
          <OrangeButton type="submit"> apply</OrangeButton>
        </div>
      </form>
    </div>
  );
};
