export type ProductListItem = {
  id: number;
  name: string;
  description: string;
  release_year: number;
  cover_image: string;
  images: string[];
  price: number;
  available_colors: string[];
  available_sizes: ["XS", "S", "M", "L", "XL"];
};

export type Product = ProductListItem & {
  brand: {
    id: number;
    name: string;
    image: string;
  };
  total_price: number;
  quantity: number;
  color: string;
  size: "XS" | "S" | "M" | "L" | "XL";
};
