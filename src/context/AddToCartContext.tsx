import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";
import useCartDetails from "@/hooks/useCartDetails";
import useUserId from "@/hooks/useUserId";
import { BookWithQuantity } from "@/interfaces/BookWithQuantity";
import useSyncCart from "@/hooks/useSyncCard";

type AddToCartContextType = {
  cartItems: BookWithQuantity[];
  addToCart: (item: BookWithQuantity) => void;
  setCartItems: (items: BookWithQuantity[]) => void;
};

const AddToCartContext = createContext<AddToCartContextType | undefined>(
  undefined
);

export const AddToCartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<BookWithQuantity[]>([]);
  const { userId } = useUserId();
  const didMount = useRef(false);
  useSyncCart(userId ? cartItems : undefined);

  const { cart } = useCartDetails(userId ?? undefined);

  useEffect(() => {
    if (userId && cart) {
      setCartItems(cart.books ?? []);
    }
    didMount.current = true;
  }, [userId, cart]);

  const addToCart = (item: BookWithQuantity) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <AddToCartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
      {children}
    </AddToCartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(AddToCartContext);
  if (!context) {
    throw new Error("useCart must be used within AddToCartProvider");
  }
  return context;
}
