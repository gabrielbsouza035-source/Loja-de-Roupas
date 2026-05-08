export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  featured: boolean;
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  tags?: string[];
}

export interface Category {
  name: string;
  slug: string;
  image: string;
  description: string;
}
