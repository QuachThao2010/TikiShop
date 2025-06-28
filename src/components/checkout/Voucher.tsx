export default function Voucher() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm max-w-sm mx-auto space-y-3 my-4">
      <div className="flex justify-between items-center text-sm font-medium text-gray-700">
        <span>Tiki Khuyến Mãi</span>
        <span className="text-gray-500 flex items-center gap-1">
          Có thể chọn 1
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
        </span>
      </div>

      <div className="flex items-center justify-between border border-blue-400 bg-blue-50 rounded-lg p-3">
        <div className="flex items-center gap-3">
          <img
            src="https://salt.tikicdn.com/cache/128x128/ts/upload/b4/57/39/dde396bd53a086adf9d421877ad9259a.jpg"
            alt="Freeship"
            className="w-10 h-10 object-contain rounded"
          />
          <span className="text-sm font-medium text-gray-800">Giảm 25K</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-400 cursor-pointer"
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
        <button className="text-sm font-medium text-white border bg-blue-600 rounded px-3 py-1 hover:bg-blue-100 mx-1">
          Bỏ Chọn
        </button>
      </div>

      <button className="flex items-center gap-1 text-sm text-blue-600 font-medium hover:underline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 14l2-2m0 0l2-2m-2 2l2 2m-2-2l-2 2m10-6V5a2 2 0 00-2-2h-2a2 2 0 00-1.414.586l-7 7A2 2 0 004 12v2a2 2 0 002 2h2a2 2 0 001.414-.586l7-7A2 2 0 0018 7z"
          />
        </svg>
        Chọn hoặc nhập mã khác
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
