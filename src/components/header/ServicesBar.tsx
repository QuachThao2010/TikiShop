import ButtonNavLink from "../common/ButtonNavLink";


export default function ServicesBar(){
    return(
        <div className="w-full border-t border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 h-10 flex items-center text-sm text-gray-700">
        <span className="text-blue-600 font-semibold mr-4">Cam kết</span>
        <div className="flex divide-x divide-gray-300">
          <ButtonNavLink imageLink="/1.png" title="100% hàng thật"/>
          <ButtonNavLink imageLink="/2.png" title="Freeship mọi đơn"/>
          <ButtonNavLink imageLink="/3.png" title="Hoàn 200% nếu hàng giả"/>
          <ButtonNavLink imageLink="/4.png" title="30 ngày đổi trả"/>
          <ButtonNavLink imageLink="/5.png" title="Giao nhanh 2h"/>
        </div>
      </div>
    </div>
    )
}