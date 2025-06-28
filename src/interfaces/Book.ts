import { Author } from "./Author";
import { Category } from "./Category";
import { Seller } from "./Seller";
import { Image } from "./Image";
import { Specification } from "./Specification";
import { QuantitySold } from "./QuantitySold";

export interface Book {
  id: string;
  name: string;
  authors?: Author[];
  book_cover: string | null;
  categories: Category;
  current_seller: Seller;
  description: string;
  images: Image[];
  list_price: number;
  original_price: number;
  quantity_sold: QuantitySold;
  rating_average: number;
  short_description: string;
  specifications: Specification[];
}