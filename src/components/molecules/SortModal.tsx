import { useRouter, useSearchParams } from "next/navigation";

export const SortModal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const updateSortParam = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    router.push(`?${params.toString()}`);
  };
  return (
    <div className="flex flex-col w-[223px] bg-white absolute top-10 -right-3.5 rounded-lg border border-[#E1DFE1] p-4 gap-5">
      <h6 className="text-[14px] font-semibold text-start">Sort by</h6>
      <div className="flex flex-col gap-5 items-start">
        <button
          type="button"
          name="sort"
          value="created_at"
          onClick={updateSortParam}
        >
          New products first
        </button>
        <button
          type="button"
          name="sort"
          value="price"
          onClick={updateSortParam}
        >
          Price, low to high
        </button>
        <button
          type="button"
          name="sort"
          value="-price"
          onClick={updateSortParam}
        >
          Price, high to low
        </button>
      </div>
    </div>
  );
};
