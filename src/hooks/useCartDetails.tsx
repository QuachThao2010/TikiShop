import Cart from "@/interfaces/Cart";
import { useEffect, useState } from "react";

export default function useCartDeatils(userId: string | undefined) {
  const [cart, setCart] = useState<Cart>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;
    const fetchBooks = async () => {
      try {
        const res = await fetch(`http://localhost:3000/carts?userId=${userId}`);
        if (!res.ok) throw new Error("Failed to fetch cart");
        const data = await res.json();
        setCart(data[0]);
        const dataaa = data[0];
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [userId]);
  return { cart, loading, error };
}
