import { Book } from "@/interfaces/Book";
import React from "react";

type Props = {
  books: Book[];
};

export default function BestSellingBooks({ books }: Props) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md my-4">
      <h2 className="text-xl font-semibold mb-4">
        Top Bán Chạy Sản Phẩm Nhà Sách Tiki
      </h2>
      <ol className="space-y-3 list-decimal list-inside">
        {books.map((book, index) => (
          <li key={index} className="flex justify-between">
            <a
              href=""
              className="text-blue-600 hover:underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              {index + 1}. {book.name}
            </a>
            <span className="font-semibold">{book.current_seller.price}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
