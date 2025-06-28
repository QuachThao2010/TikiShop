export default function BookInfo() {
  return (
    <>
      <div className="bg-green-50 text-green-700 text-sm px-4 py-2 rounded-lg border border-green-200">
        🎁 Gói: Giao siêu tốc 2h, trước 13h hôm nay
      </div>

      <div className="border rounded-lg p-8 gap-4 items-start">
        <div className="flex justify-between pr-96 my-4">
          <p className="text-xs text-red-500 font-bold flex items-center gap-1">
            <span className="text-[10px] bg-red-500 text-white px-1 py-0.5 rounded">
              NOW
            </span>{" "}
            GIAO SIÊU TỐC 2H
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="line-through text-gray-400">25.000 ₫</span>
            <span className="text-green-600 font-semibold">MIỄN PHÍ</span>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <img
            src="https://cdn0.fahasa.com/media/catalog/product/c/h/chatgpt_thucchien.jpg"
            alt="Chat GPT Thực Chiến"
            className="w-16 h-20 object-cover rounded border"
          />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Chat GPT Thực Chiến</p>

            <div className="flex items-center justify-between gap-2 text-sm">
              <p className="text-xl text-gray-600">SL: x1</p>
              <div className=" flex gap-2 pr-96">
                <span className="line-through text-gray-400">169.000 ₫</span>
                <span className="text-red-600 font-semibold">110.000 ₫</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="flex items-center gap-1 text-sm text-blue-600 mt-2">
        <svg
          className="w-4 h-4 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 14l2-2m0 0l2-2m-2 2l2 2m-2-2l-2 2m7-10h2a2 2 0 012 2v2a2 2 0 01-.586 1.414l-7 7a2 2 0 01-1.414.586H5a2 2 0 01-2-2v-2a2 2 0 01.586-1.414l7-7A2 2 0 0112 4z"
          />
        </svg>
        Thêm mã khuyến mãi của Shop
      </button>
    </>
  );
}
