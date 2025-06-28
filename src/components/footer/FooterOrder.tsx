export default function FooterOrder() {
  return (
    <footer className="bg-gray-200 text-gray-600 text-xs font-normal py-4 mt-auto  w-full">
      <nav className="flex justify-center space-x-4 mb-2">
        <a href="#" className="hover:underline">
          Đây là trang dùng thử
        </a>
        <a href="#" className="hover:underline">
          Chính sách gọi gọi khách hàng
        </a>
        <a href="#" className="hover:underline">
          Đơn vị bán hàng
        </a>
        <a href="#" className="hover:underline">
          Chính sách xác minh BMI
        </a>
        <a href="#" className="hover:underline">
          Chính sách bảo mật (ngày 24 tháng 4)
        </a>
      </nav>
      <div className="text-center select-none">
        © 2019 - Bản quyền của Công ty CP DN M1 - TXCV
      </div>
    </footer>
  );
}
