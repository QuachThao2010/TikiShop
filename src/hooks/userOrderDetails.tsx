import { useEffect, useState } from "react";
import { Book } from "@/interfaces/Book";
import Order from "@/interfaces/Order";

export function useOrderDetails(id: string | undefined) {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch(`http://localhost:3000/orders?userId=${id}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch(() => setError("fetch order failed"))
      .finally(() => setLoading(false));
  }, [id]);

  return { orders, loading, error, setOrders };
}
