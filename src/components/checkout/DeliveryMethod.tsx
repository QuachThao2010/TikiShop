export default function DeliveryMethod() {
  return (
    <div className="space-y-2 bg-blue-50 border-blue-500 border rounded-lg p-4 mb-4">
      <label className="flex items-center p-4  cursor-pointer ">
        <input type="radio" name="shipping" className="mr-3 accent-blue-500" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-blue-600 flex items-center gap-1">
            <span className="text-xs bg-red-500 text-white px-1 py-0.5 rounded">
              NOW
            </span>{" "}
            Giao siêu tốc 2h
            <span className="text-green-600 ml-1 font-medium">−25K</span>
          </span>
        </div>
      </label>

      <label className="flex items-center p-4  cursor-pointer">
        <input type="radio" name="shipping" className="mr-3 accent-blue-500" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-800 flex items-center gap-1">
            Giao tiết kiệm{" "}
            <span className="text-green-600 font-medium ml-1">−16K</span>
          </span>
        </div>
      </label>
    </div>
  );
}
