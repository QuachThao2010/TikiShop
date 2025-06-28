import { useCart } from "@/context/AddToCartContext";
import { useBuyNow } from "@/context/BuyNowContext";
import { useOrder } from "@/context/OrderContext";
import { Book } from "@/interfaces/Book";
import { BookWithQuantity } from "@/interfaces/BookWithQuantity";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  book: BookWithQuantity;
}

export default function BuyNow({ book }: Props) {
  const { data: session } = useSession();
  const { addToCart, setCartItems, cartItems } = useCart();
  const { setOrderProducts, setIsBuyNow } = useOrder();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const seller = book.current_seller;
  const quantitySold = book.quantity_sold?.text || "—";
  const rating = book.rating_average?.toFixed(1) || "0.0";

  const listPrice = seller?.price?.toLocaleString("vi-VN") || "—";
  const originalPrice = book.original_price || 0;
  const discount = seller?.price
    ? Math.round(100 - (seller.price / originalPrice) * 100)
    : 0;

  const handleBuyNow = () => {
    if (!session) {
      return signIn(undefined, { callbackUrl: "/checkout" });
    }
    book.quantity = quantity;
    setOrderProducts([{ ...book }]);
    setIsBuyNow(true);
    router.push("/checkout");
  };

  const handleAddToCart = () => {
    if (!session) {
      return signIn(undefined, { callbackUrl: "/cart" });
    }

    const existingbook = cartItems.findIndex((item) => item.id == book.id);
    if (existingbook !== -1) {
      const updateCartItem = [...cartItems];
      updateCartItem[existingbook].quantity += 1;
      setCartItems(updateCartItem);
    } else {
      book.quantity = quantity;
      addToCart(book);
    }
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow border">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <img
              src={seller?.logo || "/logo-tiki.png"}
              alt={seller?.name || "Seller Logo"}
              className="h-5"
            />
            <span>{seller?.name}</span>
          </div>
          <div className="text-yellow-500 text-sm mt-1">
            ⭐ {rating}{" "}
            <span className="text-gray-500 text-xs">({quantitySold})</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold text-sm">Số Lượng</label>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 border rounded"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <span className="px-4 py-1 border rounded">{quantity}</span>
          <button
            className="px-3 py-1 border rounded"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
      </div>

      <div className="mb-4">
        <span className="block text-sm text-gray-500 mb-1">Tạm tính</span>
        <span className="text-2xl font-semibold text-red-600">
          {seller?.price
            ? (seller.price * quantity).toLocaleString("vi-VN")
            : "—"}
          ₫
        </span>
        {discount > 0 && (
          <div className="text-sm text-gray-500 line-through">
            {(originalPrice * quantity).toLocaleString("vi-VN")}₫
          </div>
        )}
      </div>

      <div className="space-y-2">
        <button
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold"
          onClick={handleBuyNow}
        >
          Mua ngay
        </button>
        <button
          className="w-full border border-blue-500 text-blue-600 py-2 rounded font-semibold hover:bg-blue-50"
          onClick={handleAddToCart}
        >
          Thêm vào giỏ
        </button>
        <button className="w-full border border-blue-500 text-blue-600 py-2 rounded font-semibold hover:bg-blue-50">
          Mua trước trả sau
        </button>
      </div>
    </div>
  );
}
