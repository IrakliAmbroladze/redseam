import Image from "next/image";
import Link from "next/link";
import { type ProductListItem } from "@/types";
import { getProducts } from "@/lib";
export const ProductsList = async () => {
  const data: ProductListItem[] = await getProducts();
  return (
    <div className="grid grid-cols-4 gap-6">
      {data.map((item) => (
        <div key={item.id}>
          <Link href={`/${item.id}`} className="flex flex-col">
            <Image
              src={item.images[0]}
              alt={item.name}
              width={412}
              height={549}
            />
            <div>{item.name}</div>
            <div>$ {item.price}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
