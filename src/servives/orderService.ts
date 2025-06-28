import Order from "@/interfaces/Order";
import { useRouter } from "next/router";

export async function deleteOrder(orderId?: string) {
    if (!orderId) {
    throw new Error("orderid is missing");
  }
  const res = await fetch(`/api/order/${orderId}`, {
    method: "DELETE",
  });
  if (res.status === 500) {
    throw new Error("Please try to login again");
  }

  if (!res.ok) {
    throw new Error("Failed to delete orders");
  }

  return await res.json();
}

export async function fetchOrdersByUserId(userId: string | null): Promise<Order[]> {
    if (userId === null) {
        throw new Error("User not found");
    }
  const res = await fetch(`http://localhost:3000/orders?userId=${userId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }

  return await res.json();
}

