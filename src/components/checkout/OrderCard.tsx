import { Book } from "@/interfaces/Book";
import React from "react";

type Props = {
  book: any;
};

export default function OrderCard({ book }: Props) {
  const price = book.current_seller?.price || 0;
  return (
    <div className="border rounded-xl mb-4 text-sm bg-white overflow-hidden">
      <div className="flex items-center px-4 py-2 border-b border-gray-100">
        <span className="text-green-600 text-base mr-2">🎁</span>
        <span className="text-green-600 font-medium text-sm">
          Gói 1: Giao siêu tốc 2h, trước 12h ngày mai
        </span>
      </div>

      <div className="flex justify-between items-start px-4 py-3">
        <div className="flex gap-3">
          <img
            src={book.images[0].thumbnail_url}
            alt="book"
            className="w-16 h-20 object-cover rounded"
          />
          <div className="text-sm">
            <div className="text-red-600 font-bold mb-1">
              NOW GIAO SIÊU TỐC 2H
            </div>
            <div className="font-medium text-gray-800 mb-1">{book.name}</div>
            <div className="text-gray-500 text-xs ">SL: x{book.quantity}</div>
          </div>
        </div>

        <div>
          <div className="fex gap-4 text-center text-sm font-medium text-gray-800 whitespace-nowrap px-32">
            <span className="line-through text-gray-400 px-4">25.000 ₫</span>
            <span className="text-green-600">MIỄN PHÍ</span>
          </div>
          <div className="text-center py-12">
            <span className="line-through text-gray-400 mr-2 ">
              {book.list_price} ₫
            </span>
            <span className="text-red-500 font-semibold">{price} ₫</span>
          </div>
        </div>
      </div>
    </div>
  );
}
