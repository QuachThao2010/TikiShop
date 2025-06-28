import { useState, useEffect } from "react";
import { useOrder } from "@/context/OrderContext";
import { useCart } from "@/context/AddToCartContext";
import { BookWithQuantity } from "@/interfaces/BookWithQuantity";

type Props = {
  book: any | null;
};

export default function CardItem({ book }: Props) {
  const { setOrderProducts } = useOrder();
  const [itemCount, setItemCount] = useState<number>(book.quantity);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { cartItems, setCartItems } = useCart();

  const increaseCount = () => {
    setItemCount((prevCount) => prevCount + 1);
  };
  const decreaseCount = () => {
    setItemCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);

    if (e.target.checked) {
      setOrderProducts((prevProducts: any[]) => {
        const existingProductIndex = prevProducts.findIndex(
          (product) => product.id === book.id
        );

        if (existingProductIndex !== -1) {
          const updatedProducts = [...prevProducts];
          updatedProducts[existingProductIndex].quantity = itemCount;
          return updatedProducts;
        } else {
          return [...prevProducts, { ...book, quantity: itemCount }];
        }
      });
    } else {
      setOrderProducts((prevProducts: any[]) =>
        prevProducts.filter((product) => product.id !== book.id)
      );
    }
  };

  useEffect(() => {
    const updatedCartItems = [...cartItems];
    const existingBook = updatedCartItems.findIndex(
      (item) => item.id === book.id
    );
    if (existingBook !== -1) {
      console.log("so luong sach" + book.quantity);
      updatedCartItems[existingBook].quantity = itemCount;
      setCartItems(updatedCartItems);
    }
    if (isChecked) {
      setOrderProducts((prevProducts: any[]) => {
        const existingProductIndex = prevProducts.findIndex(
          (product) => product.id === book.id
        );

        if (existingProductIndex !== -1) {
          const updatedProducts = [...prevProducts];
          updatedProducts[existingProductIndex].quantity = itemCount;
          return updatedProducts;
        }
        return prevProducts;
      });
    }
  }, [itemCount]);

  const handleDeleteItem = () => {
    const updateCart = [...cartItems];
    const cart = updateCart.filter((item) => item.id !== book.id);
    setCartItems(cart);
    setIsChecked(false);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm space-y-3">
      <div className="flex items-center gap-2 font-medium text-gray-800">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="accent-blue-500 w-4 h-4"
        />
        <span>MaiHaBooks</span>
      </div>

      <div className="flex items-center gap-4 mt-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="accent-blue-500 w-4 h-4"
        />
        <img
          src={book.images[0].thumbnail_url}
          className="w-16 h-20 object-cover border rounded"
          alt="Book"
        />

        <div className="flex-1 space-y-1">
          <p className="font-medium text-gray-800">{book.name}</p>
          <p className="text-xs text-orange-500">Sách không hỗ trợ Bookcare</p>
        </div>

        <div className="text-right w-1/4 px-8">
          <p className="text-red-600 font-semibold">{book.list_price}₫</p>
          <p className="line-through text-gray-400 text-xs">
            {book.original_price.toLocaleString()} ₫
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded overflow-hidden w-48 justify-between px-2">
            <button
              className="text-gray-500 hover:text-black"
              onClick={decreaseCount}
            >
              −
            </button>
            <span className="font-medium">{itemCount}</span>
            <button
              className="text-gray-500 hover:text-black"
              onClick={increaseCount}
            >
              +
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-red-600 font-semibold w-24 text-right">
              {(book.list_price * itemCount).toLocaleString()}₫
            </div>
            <button
              className="text-gray-400 hover:text-red-600"
              onClick={handleDeleteItem}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
