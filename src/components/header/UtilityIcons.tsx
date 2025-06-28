import { useCart } from "@/context/AddToCartContext";
import { Book } from "@/interfaces/Book";
import Link from "next/link";

export default function UtilityIcons() {
  const { cartItems } = useCart();
  const count = cartItems?.length;
  const detailUrl = "/cart";
  return (
    <div className="flex items-center  space-x-8">
      <Link href={"/home"}>
        <div className="text-center text-xs text-gray-600 flex items-center gap-1">
          <img className="h-5 w-5" src="/home.png" alt="" />
          <span>Trang chủ</span>
        </div>
      </Link>

      <div className="text-center text-xs text-gray-600 flex items-center gap-1">
        <img className="h-5 w-5" src="/smile.png" alt="" />
        <span></span>
        Tài khoản
      </div>
      <Link href={detailUrl}>
        <div className="relative text-center text-xs text-gray-600]">
          <img className="h-8 w-8" src="/shopping.png" alt="" />

          <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-[10px] w-5 h-5 flex items-center justify-center">
            {count ?? 0}
          </span>
        </div>
      </Link>
    </div>
  );
}
