import { Book } from "./Book";

export interface BookWithQuantity extends Book {
   quantity: number;
}