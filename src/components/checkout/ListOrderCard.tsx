import { useOrder } from "@/context/OrderContext";
import { Book } from "@/interfaces/Book";
import OrderCard from "./OrderCard";

export default function ListOrderCard() {
  const { orderProducts } = useOrder();

  if (!orderProducts || orderProducts.length === 0) {
    return (
      <div className="p-4 text-gray-500 italic">
        Không có sản phẩm nào để thanh toán.
      </div>
    );
  }

  return (
    <>
      {orderProducts.length > 0 &&
        orderProducts.map((item: Book) => (
          <OrderCard key={item.id} book={item} />
        ))}
    </>
  );
}
