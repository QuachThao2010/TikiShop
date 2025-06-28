import { BookWithQuantity } from "@/interfaces/BookWithQuantity";

type Props = {
  item: BookWithQuantity;
};

export default function ItemRow({ item }: Props) {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-4 px-2 flex items-start space-x-4">
        {/* Product Image */}
        <div className="flex-shrink-0 w-16 h-20 rounded border border-gray-200 overflow-hidden bg-gray-50">
          <img
            src={item.images[0].thumbnail_url}
            alt="Book cover of Chat GPT Thực Chiến, predominantly black cover with text"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Product Info */}
        <div className="flex flex-col">
          <span className="font-semibold">{item.name}</span>
          <small className="text-xs text-gray-500">
            Cung cấp bởi{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Tiki Trading
            </a>
          </small>
          <div className="inline-block bg-yellow-300 text-xs text-blue-800 rounded px-1.5 py-0.5 mt-1 font-semibold select-none w-max">
            30 NGÀY ĐỔI TRẢ
          </div>
          <small className="text-xs text-gray-500 mt-1">
            Sku: {item.current_seller.sku}
          </small>
          <button className="mt-2 px-2 py-1 text-xs border border-blue-400 text-blue-500 rounded hover:bg-blue-50 w-max">
            Chat với nhà bán
          </button>
        </div>
      </td>
      <td className="py-4 px-2">{item.list_price}</td>
      <td className="py-4 px-2 text-center">{item.quantity}</td>
      <td className="py-4 px-2 text-center">
        {(item.list_price - item.original_price) * item.quantity} ₫
      </td>
      <td className="py-4 px-2">{item.original_price * item.quantity}</td>
    </tr>
  );
}
