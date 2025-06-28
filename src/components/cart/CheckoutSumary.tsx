import { useOrder } from "@/context/OrderContext";
import React, { useMemo } from "react";
type Props = {
  onBuyClick?: () => void;
};

export default function CheckoutSummary({ onBuyClick }: Props) {
  const { orderProducts } = useOrder();

  const totalListPrice = useMemo(() => {
    return orderProducts.reduce((acc: number, item) => {
      return acc + item.current_seller?.price * item.quantity;
    }, 0);
  }, [orderProducts]);

  return (
    <div className="w-full max-w-xs mx-auto border rounded-lg p-4 bg-white text-sm">
      <div className="flex justify-between mb-1 text-gray-700">
        <span>Tổng tiền hàng</span>
        <span>{totalListPrice.toLocaleString()}</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between mb-1 font-semibold text-red-600 text-base">
        <span>Tổng tiền thanh toán</span>
        <span>{totalListPrice.toLocaleString()}</span>
      </div>
      <div className="text-xs text-gray-500 mb-3">(Đã bao gồm VAT nếu có)</div>
      <button
        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded"
        disabled={orderProducts.length === 0}
        onClick={onBuyClick}
      >
        Mua Hàng ({orderProducts.length})
      </button>
    </div>
  );
}
