import ShippingAddress from "./ShippingAddress";
import { Book } from "./Book";
import { BookWithQuantity } from "./BookWithQuantity";

export default interface Order {
  id?: string;
  createdAt: string;
  userId: string;
  paymentMethod: string;
  address: ShippingAddress;
  products: BookWithQuantity[];
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
}

