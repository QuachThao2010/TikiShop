import { useCart } from "@/context/AddToCartContext";
import { useOrder } from "@/context/OrderContext";
import useUserId from "@/hooks/useUserId";
import { Book } from "@/interfaces/Book";
import Order from "@/interfaces/Order";
import { useRouter } from "next/router";
import { useMemo } from "react";

type BookWithQuantity = Book & { quantity: number };

export default function OrderPaymentDetails() {
  const router = useRouter();
  const { address } = useOrder();
  const { cartItems, setCartItems } = useCart();
  const { userId } = useUserId();
  const { orderProducts, isBuyNow } = useOrder();

  // const books: BookWithQuantity[] = useMemo(() => {
  //   return cartItems.reduce((acc: BookWithQuantity[], item) => {
  //     const existingBook = acc.find((book) => book?.id === item.id);
  //     if (existingBook) {
  //       existingBook.quantity += 1;
  //     } else {
  //       acc.push({ ...item, quantity: 1 });
  //     }
  //     return acc;
  //   }, []);
  // }, [cartItems]);

  // const totalListPrice = useMemo(() => {
  //   return cartItems.reduce((acc: number, item) => {
  //     return acc + item.list_price * item.quantity;
  //   }, 0);
  // }, [cartItems]);

  // const discount = useMemo(() => {
  //   return cartItems.reduce((acc: number, item) => {
  //     const price = item.current_seller?.price || 0;
  //     const listPrice = item.list_price || price;
  //     const discount = (listPrice - price) * item.quantity;
  //     return acc + discount;
  //   }, 0);
  // }, [cartItems]);

  const totalListPrice = useMemo(() => {
    return orderProducts.reduce((acc: number, item) => {
      return acc + item.list_price * item.quantity;
    }, 0);
  }, [orderProducts]);

  const discount = useMemo(() => {
    return orderProducts.reduce((acc: number, item) => {
      const price = item.current_seller?.price || 0;
      const listPrice = item.list_price || price;
      const discount = (listPrice - price) * item.quantity;
      return acc + discount;
    }, 0);
  }, [orderProducts]);

  const handleOrderClick = async () => {
    if (!address) {
      router.push("/address");
      return;
    }
    const orderDetails: Order = {
      createdAt: new Date().toISOString(),
      userId: userId ?? "123",
      paymentMethod: "cod",
      address: address,
      products: orderProducts,
      status: "pending",
    };

    const response = await fetch("/api/order/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    });

    if (response.ok) {
      const order = await response.json();
      let idsToRemove: string[] = [];
      order.products.forEach((item: BookWithQuantity) => {
        idsToRemove.push(item.id);
      });
      const dataCart = cartItems.filter(
        (item) => !idsToRemove.includes(item.id)
      );
      setCartItems(dataCart);
      router.push("/order-confirm");
    } else {
      console.error("Đặt hàng thất bại");
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md max-w-sm mx-auto space-y-3 text-sm">
      <div className="flex justify-between items-center font-medium text-gray-800">
        <span>Đơn hàng</span>
        <span className="text-blue-500 cursor-pointer hover:underline">
          Xem thông tin
        </span>
      </div>
      <p className="text-gray-500">
        {isBuyNow ? orderProducts.length : cartItems.length} sản phẩm.
      </p>
      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <span>Tổng tiền hàng</span>
          <span>{totalListPrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Phí vận chuyển</span>
          <span>25.000đ</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Giảm giá trực tiếp</span>
          <span>-{discount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-green-600 items-center">
          <div className="flex items-center gap-1">
            <span>Giảm giá vận chuyển</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
              />
            </svg>
          </div>
          <span>-25.000đ</span>
        </div>
      </div>

      <div className="border-t pt-3 space-y-1">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">Tổng Thanh toán</span>
          <span className="text-red-600 text-xl font-bold">
            {(totalListPrice - discount).toLocaleString()}
          </span>
        </div>
      </div>

      <p className="text-xs text-gray-400">
        (Giá này đã bao gồm thuế GTGT, phí đóng gói, phí vận chuyển và các chi
        phí phát sinh khác)
      </p>

      <button
        className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600"
        onClick={handleOrderClick}
      >
        Đặt hàng
      </button>
    </div>
  );
}
