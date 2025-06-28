import { Book } from "@/interfaces/Book";

interface Props {
  book: Book;
}

export default function BookInfomation({ book }: Props) {
  const {
    name,
    authors,
    rating_average,
    current_seller,
    original_price,
    specifications,
    description,
  } = book;

  const getSpecValue = (key: string) => {
    for (const spec of specifications || []) {
      const found = spec.attributes.find((attr) => attr.code === key);
      if (found) return found.value;
    }
    return "—";
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Tác giả:
          {authors?.map((author, index) => (
            <a
              key={author.id}
              href={`/tac-gia/${author.slug}`}
              className="text-blue-600 hover:underline ml-1"
            >
              {author.name}
              {index < authors.length - 1 && ","}
            </a>
          ))}
        </h2>
        <h1 className="text-2xl font-bold mt-2">{name}</h1>
        <div className="flex items-center mt-2 space-x-2">
          <span className="text-yellow-500 text-lg">★★★★★</span>
          <span className="text-gray-600">({rating_average})</span>
        </div>
        <div className="flex items-center mt-2 space-x-3">
          <span className="text-red-600 text-2xl font-bold">
            {current_seller?.price?.toLocaleString("vi-VN")}₫
          </span>
          <span className="text-gray-400 line-through">
            {original_price?.toLocaleString("vi-VN")}₫
          </span>
          <span className="text-sm text-red-500">
            -
            {current_seller?.price && original_price
              ? Math.round(100 - (current_seller.price / original_price) * 100)
              : 0}
            %
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Thông tin chi tiết
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200 rounded-lg">
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium text-gray-600 w-1/2">
                  Bookcare
                </td>
                <td className="px-4 py-2">Có</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium text-gray-600">
                  Công ty phát hành
                </td>
                <td className="px-4 py-2">{getSpecValue("publisher_vn")}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium text-gray-600">
                  Ngày xuất bản
                </td>
                <td className="px-4 py-2">
                  {getSpecValue("publication_date")}
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium text-gray-600">
                  Kích thước
                </td>
                <td className="px-4 py-2">{getSpecValue("dimensions")}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium text-gray-600">
                  Dịch Giả
                </td>
                <td className="px-4 py-2">{getSpecValue("dich_gia")}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium text-gray-600">
                  Loại bìa
                </td>
                <td className="px-4 py-2">{getSpecValue("book_cover")}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium text-gray-600">
                  Số trang
                </td>
                <td className="px-4 py-2">{getSpecValue("number_of_page")}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-gray-600">
                  Nhà xuất bản
                </td>
                <td className="px-4 py-2">{getSpecValue("manufacturer")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg mt-6 p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Mô tả chi tiết sản phẩm
        </h3>
        <div
          className="text-sm text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
