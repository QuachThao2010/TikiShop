export default function Payment() {
  return (
    <div className="bg-white p-6  max-w-screen-xl mx-auto">
      <h2 className="text-base font-semibold mb-4">
        Chọn hình thức thanh toán
      </h2>

      <div className="space-y-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="radio" name="payment" className="accent-blue-600" />
          <img
            src="https://img.icons8.com/fluency/24/000000/cash-in-hand.png"
            alt="Cash Icon"
            className="w-6 h-6"
          />
          <span className="text-sm font-medium text-gray-800">
            Thanh toán tiền mặt
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input type="radio" name="payment" className="accent-red-500" />
          <img
            src="/assets/viettel.webp"
            alt="Viettel Money"
            className="w-6 h-6"
          />
          <span className="text-sm font-medium text-gray-800">
            Viettel Money
          </span>
        </label>
      </div>
    </div>
  );
}
