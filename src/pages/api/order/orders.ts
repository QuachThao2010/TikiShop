import Order from "@/interfaces/Order";
import { getAccessToken } from "@/servives/authService";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const token = await getAccessToken(req);

    if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
    }   
    
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { userId, address, products, status } = req.body as Order;

  if (!userId || !address || !products || !status) {
    return res.status(400).json({ message: "Thiếu thông tin đơn hàng" });
  }
  try {
    debugger;
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.accessToken}`,
      },
      body: JSON.stringify({ userId, address, products, status }),
    });

    if (!response.ok) {
      throw new Error("Failed to create order");
    }

    const createdOrder = await response.json();
    return res.status(201).json(createdOrder);
  } catch (err) {
    return res.status(500).json({ message: "Lỗi tạo đơn hàng", error: err });
  }

  
}
