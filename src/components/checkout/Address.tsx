import { useOrder } from "@/context/OrderContext";

export default function Address() {
  const { address } = useOrder();
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500 font-medium">Giao tới</span>
        <button className="text-sm text-blue-600 font-medium hover:underline">
          Thay đổi
        </button>
      </div>

      <div className="text-sm text-gray-800">
        <p className="font-semibold inline">{address.fullName}</p>
        <span className="font-semibold ml-2">{address.phone}</span>
      </div>

      <div className="text-sm text-gray-600 mt-1">
        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-0.5 rounded-full mr-1">
          {address.addressType}
        </span>
        {address.address}, {address.ward}, {address.district}, {address.city}
      </div>
    </div>
  );
}
