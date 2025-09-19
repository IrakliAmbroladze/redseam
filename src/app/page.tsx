import { Filters } from "@/components";
export default function Home() {
  return (
    <div className="px-[100px] flex justify-between">
      <h1 className="text-[64px] font-semibold">Products</h1>
      <Filters />
    </div>
  );
}
