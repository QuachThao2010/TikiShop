type FilterProps = {
  sortOption: string;
  onSortChange: (value: string) => void;
};

export default function Filter({ sortOption, onSortChange }: FilterProps) {
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow mt-4">
        <h2 className="text-base font-semibold mb-4">Tất cả sản phẩm</h2>

        <div className="flex flex-wrap gap-4 items-center">
          <label className="inline-flex items-center gap-1">
            <input type="checkbox" className="form-checkbox accent-pink-500" />
            <img
              src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
              alt="Giao hang siêu Tốc"
              className="h-4"
            />
            <span className="text-gray-600">Giao siêu tốc 2H</span>
          </label>

          <label className="inline-flex items-center gap-1">
            <input type="checkbox" className="form-checkbox accent-red-500" />
            <img
              src="https://salt.tikicdn.com/ts/upload/b5/aa/48/2305c5e08e536cfb840043df12818146.png"
              alt="Freeship Xtra"
              className="h-4"
            />
            <span className="text-gray-600">Siêu rẻ</span>
          </label>

          <label className="inline-flex items-center gap-1">
            <input type="checkbox" className="form-checkbox accent-blue-500" />
            <img
              src="https://salt.tikicdn.com/ts/upload/2f/20/77/0f96cfafdf7855d5e7fe076dd4f34ce0.png"
              alt="Freeship Xtra"
              className="h-4"
            />
            <span className="text-gray-600">Freeship Extra</span>
          </label>

          <label className="inline-flex items-center gap-1">
            <input
              type="checkbox"
              className="form-checkbox accent-yellow-500"
            />
            <div className="flex text-yellow-400">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
              </svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
              </svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
              </svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
              </svg>
            </div>
            <span className="text-gray-600">từ 4 sao</span>
          </label>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm text-gray-600">Sắp xếp</span>
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className="border rounded-lg px-3 py-1 text-sm text-gray-800"
          >
            <option value="all">Tất cả sản phẩm</option>
            <option value="bestSeller">Bán chạy nhất</option>
            <option value="topRating">Đánh giá tốt nhất</option>
          </select>
        </div>
      </div>
    </>
  );
}
