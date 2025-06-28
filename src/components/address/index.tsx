import { useOrder } from "@/context/OrderContext";
import { useRouter } from "next/router";
import { use, useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  phone: string;
  city: string;
  district: string;
  ward: string;
  address: string;
  addressType: string;
  isDefault: boolean;
};

export default function ShippingAddressForm() {
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();
  const { setAddress } = useOrder();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  const onSubmit = (data: FormData) => {
    setAddress(data);
  };

  return (
    <div className="w-full max-w-2xl p-6 bg-white rounded shadow">
      <h2 className="font-semibold text-lg mb-2">2. Địa chỉ giao hàng</h2>
      <p className="mb-4 text-gray-700">
        Bạn muốn giao hàng đến địa chỉ khác?{" "}
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-blue-600 hover:underline"
        >
          Thêm địa chỉ giao hàng mới
        </button>
      </p>

      {showForm && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Họ tên</label>
              <input
                type="text"
                {...register("fullName")}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1">Điện thoại di động</label>
              <input
                type="text"
                {...register("phone")}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1">Tỉnh/Thành phố</label>
              <input
                type="text"
                {...register("city")}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1">Quận/Huyện</label>
              <input
                type="text"
                {...register("district")}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1">Phường/Xã</label>
              <input
                type="text"
                {...register("ward")}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1">Địa chỉ</label>
              <textarea
                {...register("address")}
                className="w-full border rounded px-3 py-2"
                placeholder="Ví dụ: 52, đường Trần Hưng Đạo"
              />
            </div>
          </div>

          <div>
            <p className="mb-1">Loại địa chỉ</p>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" value="home" {...register("addressType")} />
                Nhà riêng / Chung cư
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="company"
                  {...register("addressType")}
                />
                Cơ quan / Công ty
              </label>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" {...register("isDefault")} />
            <label>Sử dụng địa chỉ này làm mặc định</label>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 border rounded text-gray-700"
            >
              Hủy bỏ
            </button>
            <button
              onClick={handleBack}
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Giao đến địa chỉ này
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
