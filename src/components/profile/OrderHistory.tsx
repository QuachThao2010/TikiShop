import { useOrderDetails } from "@/hooks/userOrderDetails";
import useUserId from "@/hooks/useUserId";
import { useEffect, useMemo, useState } from "react";
import ItemRow from "./ItemRow";
import { deleteOrder, fetchOrdersByUserId } from "@/servives/orderService";

type Props = {
  setShowCancelModal: (value: boolean) => void;
  isConfirmDeleteOrder: boolean;
  setIsConfirmDeleteOrder: (value: boolean) => void;
};

export default function OrderHistory({
  setShowCancelModal,
  isConfirmDeleteOrder,
  setIsConfirmDeleteOrder,
}: Props) {
  const { userId } = useUserId();
  const { orders, setOrders } = useOrderDetails(userId ?? undefined);
  const [orderId, setOrderId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetch = async () => {
      if (isConfirmDeleteOrder) {
        await deleteOrder(orderId);
        const orderData = await fetchOrdersByUserId(userId);
        setOrders(orderData);
        setIsConfirmDeleteOrder(false);
      }
    };
    fetch();
  }, [isConfirmDeleteOrder]);

  const orderTotals = useMemo(() => {
    return (
      orders?.map(
        (order) =>
          order.products?.reduce((sum, item) => {
            return sum + item.list_price * item.quantity;
          }, 0) ?? 0
      ) ?? []
    );
  }, [orders]);
  return (
    <div className="flex flex-wrap  gap-6 p-4">
      {orders &&
        orders.map((order, index) => (
          <div
            className="w-full flex-shrink-0 bg-white p-6 rounded shadow"
            key={order.id}
          >
            <header className="mb-6 flex justify-between text-sm text-gray-600">
              <h1 className="text-xl font-semibold text-gray-900">
                Chi tiết đơn hàng{" "}
                <span className="font-normal">
                  #861977987 -{" "}
                  <span className="italic">{order.status ?? "Đang xử lý"}</span>
                </span>
              </h1>
              <div>Ngày đặt hàng: {order.createdAt}</div>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-bold mb-2">ĐỊA CHỈ NGƯỜI NHẬN</h3>
                <p className="font-semibold">{order.address.fullName}</p>
                <p className="whitespace-pre-line text-sm text-gray-600 mt-1">
                  Địa chỉ: {order.address.address}, {order.address.ward},{" "}
                  {order.address.district}, {order.address.city}, Việt Nam
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Điện thoại: 0942438693
                </p>
              </div>

              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-bold mb-2">HÌNH THỨC GIAO HÀNG</h3>
                <p>
                  <span className="text-red-600 font-bold mr-1">NOW</span> Giao
                  Siêu Tốc
                </p>
                <p className="text-sm text-gray-600">
                  Giao thứ 6, trước 13h, 28/03
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Được giao bởi TikiNOW Smart Logistics (giao từ Hà Nội)
                </p>
                <p className="text-sm text-gray-600 mt-1 font-semibold">
                  Miễn phí vận chuyển
                </p>
              </div>

              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-bold mb-2">HÌNH THỨC THANH TOÁN</h3>
                <p>Thanh toán tiền mặt khi nhận hàng</p>
              </div>
            </section>

            <section className="bg-white p-6 rounded shadow overflow-x-auto">
              <table className="w-full text-left text-gray-700 text-sm">
                <thead className="border-b border-gray-300">
                  <tr>
                    <th className="py-3 px-2 w-2/5">Sản phẩm</th>
                    <th className="py-3 px-2 w-1/6">Giá</th>
                    <th className="py-3 px-2 w-1/6">Số lượng</th>
                    <th className="py-3 px-2 w-1/6">Giảm giá</th>
                    <th className="py-3 px-2 w-1/6">Tạm tính</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products?.map((item) => (
                    <ItemRow key={item.id} item={item} />
                  ))}
                </tbody>
              </table>

              <div className="mt-6 flex justify-end text-sm text-gray-700">
                <div className="w-64 space-y-1">
                  <div className="flex justify-between border-t border-gray-200 pt-2">
                    <span>Tạm tính</span>
                    <span>{orderTotals[index].toLocaleString()} ₫</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Phí vận chuyển</span>
                    <span>25.000 ₫</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Giảm giá vận chuyển</span>
                    <span>-25.000 ₫</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-gray-200 font-bold text-red-600">
                    <span>Tổng cộng</span>
                    <span>
                      {(orderTotals[index] - 25000).toLocaleString()} ₫
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setShowCancelModal(true), setOrderId(order?.id);
                    }}
                    className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded text-sm w-full max-w-xs transition"
                  >
                    Hủy đơn hàng
                  </button>
                </div>
              </div>
            </section>

            <div className="mt-8 flex items-center space-x-6">
              <a href="#" className="text-blue-700 text-sm hover:underline">
                Quay lại đơn hàng của tôi
              </a>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-5 py-2 rounded font-semibold text-sm transition">
                Theo dõi đơn hàng
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
