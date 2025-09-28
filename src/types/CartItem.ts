export type CartItem = {
  id: number;
  name: string;
  description: string;
  release_year: string;
  cover_image: string;
  images: string[];
  price: number;
  available_colors: string[];
  available_sizes: string[];
  total_price: number;
  quantity: 6;
  color: string;
  size: "XS" | "S" | "M" | "L" | "XL";
};
