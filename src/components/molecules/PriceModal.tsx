import { OrangeButton } from "../atoms";
import { Input } from "./Input";

export const PriceModal = () => (
  <div className="flex flex-col w-[392px] bg-white absolute -bottom-48 -right-3.5 rounded-lg border border-[#E1DFE1] p-4 gap-5">
    <h6 className="text-[14px] font-semibold text-start">Select price</h6>
    <form className="flex flex-col gap-5 items-end">
      {/* <input type="number" id="from" name="from" />
      <input type="number" id="to" name="to" />*/}
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
