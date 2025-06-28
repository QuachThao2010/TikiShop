import { BookWithQuantity } from "./BookWithQuantity";

export default interface Cart {
    id: string
    userId: string;
    books: BookWithQuantity[];
}