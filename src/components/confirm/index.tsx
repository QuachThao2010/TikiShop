import { useOrder } from "@/context/OrderContext";
import { BookWithQuantity } from "@/interfaces/BookWithQuantity";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function Confirm() {
  const router = useRouter();
  const { orderProducts } = useOrder();

  const total = useMemo(() => {
    return orderProducts.reduce((acc: number, item) => {
      return acc + item.current_seller?.price * item.quantity;
    }, 0);
  }, [orderProducts]);
  const handleClickOrderHistory = () => {
    router.push("/profile");
  };

  const handleClickHome = () => {
    router.push("/home");
  };
  return (
    <div className="bg-gray-100 font-sans text-sm text-gray-700">
      <div className="flex flex-col justify-between">
        <div className="flex-grow min-h-[831px]">
          <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-lg shadow">
              <div className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-4 flex items-center space-x-4 justify-center">
                <div>
                  <h1 className="text-lg font-semibold">
                    Yay, đặt hàng thành công!
                  </h1>
                  <p className="text-sm">
                    Chuẩn bị tiền mặt{" "}
                    <span className="font-semibold">
                      {total.toLocaleString()} ₫
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm p-6">
                <div className="flex justify-between">
                  <span>Phương thức thanh toán</span>
                  <span className="font-medium">Thanh toán tiền mặt</span>
                </div>
                <div className="flex justify-between text-base font-semibold">
                  <span>Tổng cộng</span>
                  <span>{total.toLocaleString()} ₫</span>
                </div>
                <p className="text-xs text-gray-400">(Đã bao gồm VAT nếu có)</p>

                <button
                  onClick={handleClickHome}
                  className="w-full border border-blue-500 text-blue-600 py-2 rounded hover:bg-blue-50 transition"
                >
                  Quay về trang chủ
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 space-y-2">
              <div className="flex justify-between text-sm font-semibold">
                <span>
                  Mã đơn hàng: <span className="text-black">861977987</span>
                </span>
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                  onClick={handleClickOrderHistory}
                >
                  Xem đơn hàng
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                Giao thứ 6, trước 13h, 28/03
              </p>
              {orderProducts.map((item: BookWithQuantity) => (
                <div className="flex items-center gap-3 pt-2">
                  <img
                    src={item.images[0].thumbnail_url}
                    alt="Product"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <p className="text-gray-800 text-sm">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
