import FooterLink from "../common/FooterLink";
import IconPayment from "../common/IconPayment";

export default function Footer(){
    return(

    <footer className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div>
                    <h3 className="font-medium text-gray-900 mb-4">Hỗ trợ khách hàng</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>Hotline: <span className="font-medium text-blue-600">1900 6035</span></li>
                        <li className="text-xs">(1000 đ/phút, 8-21h kể cả T7, CN)</li>
                        <li><FooterLink>Các câu hỏi thường gặp</FooterLink></li>
                        <li><FooterLink>Gửi yêu cầu hỗ trợ</FooterLink></li>
                        <li><FooterLink>Hướng dẫn đặt hàng</FooterLink></li>
                        <li><FooterLink>Phương thức vận chuyển</FooterLink></li>
                        <li><FooterLink>Chính sách đổi trả</FooterLink></li>
                        <li><FooterLink>Hướng dẫn trả góp</FooterLink></li>
                        <li><FooterLink>Chính sách hàng nhập khẩu</FooterLink></li>
                    </ul>
                    <div className="mt-4 text-xs text-gray-500 space-y-1">
                        <p>Hỗ trợ khách hàng: <a href="mailto:hotro@tiki.vn" className="text-blue-600 hover:underline">hotro@tiki.vn</a></p>
                        <p>Báo lỗi bảo mật: <a href="mailto:security@tiki.vn" className="text-blue-600 hover:underline">security@tiki.vn</a></p>
                    </div>
                </div>

                <div>
                    <h3 className="font-medium text-gray-900 mb-4">Về Tiki</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><FooterLink>Giới thiệu Tiki</FooterLink></li>
                        <li><FooterLink>Tiki Blog</FooterLink></li>
                        <li><FooterLink>Tuyển dụng</FooterLink></li>
                        <li><FooterLink>Chính sách bảo mật thanh toán</FooterLink></li>
                        <li><FooterLink>Chính sách bảo mật thông tin cá nhân</FooterLink></li>
                        <li><FooterLink>Chính sách giải quyết khiếu nại</FooterLink></li>
                        <li><FooterLink>Điều khoản sử dụng</FooterLink></li>
                        <li><FooterLink>Giới thiệu Tiki Xu</FooterLink></li>
                        <li><FooterLink>Tiếp thị liên kết cùng Tiki</FooterLink></li>
                        <li><FooterLink>Bán hàng doanh nghiệp</FooterLink></li>
                        <li><FooterLink>Điều kiện vận chuyển</FooterLink></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-medium text-gray-900 mb-4">Hợp tác và liên kết</h3>
                    <div className="space-y-3 text-sm text-gray-600">
                        <p><a href="#" className="hover:text-blue-600">Quy chế hoạt động Sàn GDTMĐT</a></p>
                        <p><a href="#" className="hover:text-blue-600">Bán hàng cùng Tiki</a></p>
                    </div>
                    
                    <h4 className="font-medium text-gray-900 mb-3 mt-6">Chứng nhận bởi</h4>
                    <div className="flex space-x-2">
                        <img src="/assets/footerImages/footer1.png" alt="" className="h-8 w-8" />
                        <img src="/assets/footerImages/footer2.svg" alt="" className="h-10 w-10" />
                        <img src="/assets/footerImages/footer3.png" alt="" className="h-8 w-8" />
                    </div>
                </div>

                <div>
                    <h3 className="font-medium text-gray-900 mb-4">Phương thức thanh toán</h3>
                    <div className="grid grid-cols-3 gap-2 mb-6">
                        <IconPayment imageLink={"/assets/footerImages/footerMomo.png"} />
                        <IconPayment imageLink={"/assets/footerImages/footerJCB.jpg"} />
                        <IconPayment imageLink={"/assets/footerImages/footerViettel.png"} />
                        <IconPayment imageLink={"/assets/footerImages/footerVisa.png"} />
                        <IconPayment imageLink={"/assets/footerImages/footerVNPay.png"} />
                    </div>
                    
                    <h4 className="font-medium text-gray-900 mb-3">Dịch vụ giao hàng</h4>
                    <div className="bg-blue-50 p-3 rounded">
                        <div className="text-blue-600 font-bold text-xl">TIKINOW</div>
                    </div>
                </div>

                <div>
                    <h3 className="font-medium text-gray-900 mb-4">Kết nối với chúng tôi</h3>
                    <div className="flex space-x-2 mb-6">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">f</span>
                        </div>
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">▶</span>
                        </div>
                        <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">Z</span>
                        </div>
                    </div>
                    
                    <h4 className="font-medium text-gray-900 mb-3">Tải ứng dụng trên điện thoại</h4>
                    <div className="flex space-x-2">
                        <div className="w-16 h-16 bg-gray-200 border-2 border-dashed border-gray-400 rounded flex items-center justify-center">
                            <div className="text-xs text-gray-500 text-center leading-3">QR<br />Code</div>
                        </div>
                        <div className="space-y-1">
                            <div className="w-24 h-7 bg-black rounded flex items-center justify-center">
                                <span className="text-white text-xs">📱 App Store</span>
                            </div>
                            <div className="w-24 h-7 bg-black rounded flex items-center justify-center">
                                <span className="text-white text-xs">▶ Google Play</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">Công ty TNHH TIKI</h3>
                    <p className="text-sm text-gray-600">Tòa nhà số 52 đường Út Tịch, Phường 4, Quận Tân Bình, Thành phố Hồ Chí Minh</p>
                    <p className="text-sm text-gray-600">Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch và Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.</p>
                    <p className="text-sm text-gray-600">Hotline: <a href="tel:19006035" className="text-blue-600 hover:underline">1900 6035</a></p>
                </div>
                
                <div className="mt-8">
                    <h3 className="font-medium text-gray-900 mb-4">Thương Hiệu Nổi Bật</h3>
                    <div className="text-sm text-gray-600 leading-relaxed">
                        <span className="inline-block mr-2">
                            <FooterLink>vasara</FooterLink>/
                            <FooterLink>dior</FooterLink>/
                            <FooterLink>estee lauder</FooterLink>/
                            <FooterLink>th truemilk</FooterLink>/
                            <FooterLink>barbie</FooterLink>/
                            <FooterLink>owen</FooterLink>/
                            <FooterLink>durex</FooterLink>/
                            <FooterLink>bioderma</FooterLink>/
                            <FooterLink>elly</FooterLink>/
                            <FooterLink>milo</FooterLink>/
                            <FooterLink>skechers</FooterLink>/
                            <FooterLink>aldo</FooterLink>/
                            <FooterLink>nutifood</FooterLink>/
                            <FooterLink>kindle</FooterLink>/
                            <FooterLink>nerman</FooterLink>/
                            <FooterLink>wacom</FooterLink>/
                            <FooterLink>anessa</FooterLink>/
                            <FooterLink>yoosee</FooterLink>/
                            <FooterLink>comfort</FooterLink>/
                            <FooterLink>comfort</FooterLink>/
                            <FooterLink>shiseido</FooterLink>/
                            <FooterLink>langfarm</FooterLink>/
                            <FooterLink>hukan</FooterLink>/
                            <FooterLink>vichy</FooterLink>/
                            <FooterLink>fila</FooterLink>/
                            <FooterLink>tsubaki</FooterLink>/
                        </span>
                    </div>
                </div>
            </div>
            </div>
    </footer>
    )
}