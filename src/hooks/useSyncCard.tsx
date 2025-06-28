import { BookWithQuantity } from "@/interfaces/BookWithQuantity";
import { Router } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function useSyncCart(cartItems: BookWithQuantity[] | undefined) {
  const router = useRouter();
  const prevCart = useRef<BookWithQuantity[] | undefined>(undefined);

  useEffect(() => {
    if (prevCart.current !== undefined && prevCart.current !== cartItems) {
      const syncCart = async () => {
        try {
          const res = await fetch("/api/cart/sync", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ books: cartItems }),
          });

          if (res.status === 500) {
            router.push("/login");
          }
        } catch (error) {
          console.error("error sync the cart:", error);
        }
      };

      syncCart();
    }

    prevCart.current = cartItems;
  }, [cartItems]);
}
