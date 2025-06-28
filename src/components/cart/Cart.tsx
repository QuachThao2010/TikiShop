import { useCart } from "@/context/AddToCartContext";
import CardItem from "./CardItem";
import { Book } from "@/interfaces/Book";
import { useMemo } from "react";

type BookWithQuantity = (Book & { quantity: number }) | undefined;

export default function Cart() {
  const { cartItems } = useCart();
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm  space-y-4 text-sm my-4 max-w-5xl">
      <div className="flex items-center gap-2">
        <input type="checkbox" className="accent-blue-500 w-4 h-4" />
        <span>Tất cả ({cartItems.length})</span>
      </div>
      <div className="flex items-center justify-end font-semibold text-gray-800 border-b pb-2">
        <div className="flex items-center gap-28 mt-2 px-4">
          <span>Đơn giá</span>
          <span>Số lượng</span>
          <span>Thành tiến</span>
        </div>
      </div>
      {cartItems.length > 0 &&
        cartItems.map((item: BookWithQuantity) => (
          <CardItem key={item?.id} book={item} />
        ))}
    </div>
  );
}
