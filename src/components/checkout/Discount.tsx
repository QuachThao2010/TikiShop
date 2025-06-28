export default function Discount() {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-md max-w-screen-xl mx-auto">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <svg
          className="w-5 h-5 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
          />
        </svg>
        Ưu đãi thanh toán thẻ
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="border rounded-lg p-4 flex flex-col gap-1 bg-white">
          <p className="text-blue-500 font-bold text-sm">Freeship</p>
          <p className="text-xs text-gray-700">Thẻ Shinhan Platinum</p>
          <p className="text-xs text-orange-500 mt-1">Không giới hạn</p>
        </div>

        <div className="border rounded-lg p-4 flex flex-col gap-1">
          <p className="text-blue-500 font-bold text-sm">Freeship</p>
          <p className="text-xs text-gray-700">Thẻ Shinhan classNameic</p>
          <p className="text-xs text-orange-500 mt-1">Không giới hạn</p>
        </div>

        <div className="border rounded-lg p-4 flex flex-col gap-1">
          <p className="text-blue-500 font-bold text-sm">Giảm 30k</p>
          <p className="text-xs text-gray-700">Đơn từ 200k</p>
          <p className="text-xs text-orange-500 mt-1">Không giới hạn</p>
        </div>

        <div className="border rounded-lg p-4 flex flex-col gap-1">
          <p className="text-blue-500 font-bold text-sm">Giảm 50k</p>
          <p className="text-xs text-gray-700">Đơn từ 300k</p>
          <p className="text-xs text-orange-500 mt-1">Không giới hạn</p>
        </div>

        <div className="border rounded-lg p-4 flex flex-col gap-1">
          <p className="text-blue-500 font-bold text-sm">Giảm 50k</p>
          <p className="text-xs text-gray-700">Đơn từ 300k</p>
          <p className="text-xs text-orange-500 mt-1">Không giới hạn</p>
        </div>

        <div className="border rounded-lg p-4 flex flex-col gap-1">
          <p className="text-blue-500 font-bold text-sm">Giảm 70k</p>
          <p className="text-xs text-gray-700">Đơn từ 500k</p>
          <p className="text-xs text-orange-500 mt-1">Không giới hạn</p>
        </div>

        <div className="border rounded-lg p-4 flex flex-col gap-1">
          <p className="text-blue-500 font-bold text-sm">Giảm 100k</p>
          <p className="text-xs text-gray-700">Đơn từ 700k</p>
          <p className="text-xs text-orange-500 mt-1">Không giới hạn</p>
        </div>

        <div className="border rounded-lg p-4 flex flex-col gap-1">
          <p className="text-blue-500 font-bold text-sm">Giảm 150k</p>
          <p className="text-xs text-gray-700">Đơn từ 1 triệu</p>
          <p className="text-xs text-orange-500 mt-1">Không giới hạn</p>
        </div>

        <div className="border rounded-lg p-4 flex flex-col gap-1">
          <p className="text-blue-500 font-bold text-sm">Giảm 30k</p>
          <p className="text-xs text-gray-700">Đơn từ 200k</p>
          <p className="text-xs text-orange-500 mt-1">Không giới hạn</p>
        </div>

        <div className="border rounded-lg p-4 flex flex-col gap-1">
          <p className="text-blue-500 font-bold text-sm">Giảm 50k</p>
          <p className="text-xs text-gray-700">Đơn từ 300k</p>
          <p className="text-xs text-orange-500 mt-1">Không giới hạn</p>
        </div>

        <div className="border rounded-lg p-4 flex flex-col gap-1">
          <p className="text-blue-500 font-bold text-sm">Giảm 70k</p>
          <p className="text-xs text-gray-700">Đơn từ 500k</p>
          <p className="text-xs text-orange-500 mt-1">Không giới hạn</p>
        </div>

        <div className="border rounded-lg p-4 flex flex-col gap-1">
          <p className="text-blue-500 font-bold text-sm">Freeship</p>
          <p className="text-xs text-gray-700">TIKICARD</p>
          <p className="text-xs text-orange-500 mt-1">Không giới hạn</p>
        </div>
      </div>
    </div>
  );
}
