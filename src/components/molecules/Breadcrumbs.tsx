import Link from "next/link";

export const Breadcrumbs = ({ id }: { id: string | number }) => (
  <div className="text-[14px] py-8">
    <Link href={"./"}>Listing</Link> / Product {id}
  </div>
);
