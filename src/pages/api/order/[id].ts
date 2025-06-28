import { getAccessToken } from "@/servives/authService";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const token = await getAccessToken(req);
     if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
   if (req.method === "DELETE") {
    const { id } = req.query;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Thiếu hoặc sai ID đơn hàng" });
    }

    try {
      const response = await fetch(`http://localhost:3000/orders/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token.accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete order");
      }

      return res.status(200).json({ message: "Đơn hàng đã xoá thành công" });
    } catch (err) {
      return res.status(500).json({ message: "Lỗi xoá đơn hàng", error: err });
    }
    }
}