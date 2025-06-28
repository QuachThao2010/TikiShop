import { Book } from "@/interfaces/Book";
import Link from "next/dist/client/link";
import React from "react";

interface Props {
  book: Book;
  showBadges?: boolean;
  showAd?: boolean;
  showDiscountTags?: boolean;
  showDeliveryInfo?: boolean;
  compact?: boolean;
  href?: string;
}

export default function BookCard({
  book,
  showBadges = true,
  showAd = false,
  showDiscountTags = true,
  showDeliveryInfo = true,
  compact = false,
  href,
}: Props) {
  const image = book.images?.[0]?.large_url || "";
  const price = book.current_seller?.price || 0;
  const listPrice = book.list_price || price;
  const discount = Math.round(((listPrice - price) / listPrice) * 100);
  const rating = book.rating_average || 0;
  const sold = book.quantity_sold?.value || 0;

  const detailUrl = href || `/books/${book.id}`;

  return (
    <Link href={detailUrl}>
      <div className="relative border rounded-lg shadow-sm p-2 bg-white w-full hover:shadow-md transition cursor-pointer">
        {showAd && (
          <div className="absolute top-1 right-1 text-[10px] text-gray-400 font-semibold bg-gray-100 px-1 py-[1px] rounded">
            AD
          </div>
        )}

        <img
          src={image}
          alt={book.name}
          className={`w-full ${
            compact ? "h-[140px]" : "h-[180px]"
          } object-contain mb-2`}
        />

        {showBadges && (
          <div className="flex items-center gap-1 mb-1">
            <span className="bg-red-500 text-white text-[10px] px-1 py-[1px] rounded font-bold">
              🔥 TOP DEAL
            </span>
            <span className="bg-blue-500 text-white text-[10px] px-1 py-[1px] rounded font-semibold">
              ✅ CHÍNH HÃNG
            </span>
          </div>
        )}

        <div className="flex items-center gap-2 text-red-500 font-semibold text-sm">
          <span>{price.toLocaleString("vi-VN")}₫</span>
          {discount > 0 && (
            <>
              <span className="text-xs text-gray-500 line-through">
                {listPrice.toLocaleString("vi-VN")}₫
              </span>
              <span className="ml-auto text-xs text-white bg-red-500 px-1 rounded">
                -{discount}%
              </span>
            </>
          )}
        </div>

        <div className="mt-1 text-sm font-medium line-clamp-2 leading-tight text-gray-800">
          {book.name}
        </div>

        <div className="text-[11px] text-gray-500 mt-1 line-clamp-1 uppercase font-semibold">
          {book.authors?.map((a) => a.name).join(", ")}
        </div>

        <div className="flex items-center text-[11px] text-yellow-500 mt-1 gap-1">
          <span>⭐ {rating.toFixed(1)}</span>
          <span className="text-gray-500">• Đã bán {sold}</span>
        </div>

        {showDiscountTags && (
          <div className="flex items-center mt-1 gap-2 flex-wrap">
            <span className="bg-gray-100 text-gray-700 text-[11px] px-1 py-[1px] rounded">
              Mua 3 giảm 5%
            </span>
            <span className="bg-blue-100 text-blue-600 text-[11px] px-1 py-[1px] rounded">
              Giảm 5%
            </span>
          </div>
        )}

        {showDeliveryInfo && (
          <div className="text-[11px] text-pink-600 mt-1 font-medium">
            🚀 Giao siêu tốc 2h
          </div>
        )}
      </div>
    </Link>
  );
}
