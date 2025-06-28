import Cart from "@/interfaces/Cart";
import { getAccessToken } from "@/servives/authService";
import { ChartNoAxesColumnIcon } from "lucide-react";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = await getAccessToken(req);
  
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { books } = req.body;

  console.log("items" + books)


  const jsonServerURL = "http://localhost:3000";

  try {
    const userId = token.sub;
    console.log("userID" + userId);
    console.log("Access Token" + token.accessToken)
    
    if (!userId) {
      return res.status(400).json({ message: "User ID not found in token" });
    }

    // Check if user exists
    const getUserResponse = await fetch(`${jsonServerURL}/users/${userId}`);
    if (!getUserResponse.ok) {
      return res.status(404).json({ message: "User not found" });
    }


    let existingCartResponse;
    let  carts: Cart[] = [];
    try {
      existingCartResponse = await fetch(`${jsonServerURL}/carts?userId=${userId}`);
      carts = await existingCartResponse.json() as Cart[];
    } catch (error) {
      console.log("Cart not found, will create new one");
    }

    const headers = {
      "Content-Type": "application/json",
      ...(token.accessToken && { "Authorization": `Bearer ${token.accessToken}` })
    };

    if (carts.length > 0) {
        const cardId = carts[0]?.id;
      // Update existing cart
      const updateResponse = await fetch(`${jsonServerURL}/carts/${cardId}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({id: cardId, userId, books }),
      });
      
      if (!updateResponse.ok) {
        throw new Error(`Failed to update cart: ${updateResponse.statusText}`);
      }
      
    } else {
      // Create new cart
      const createResponse = await fetch(`${jsonServerURL}/carts`, {
        method: "POST",
        headers,
        body: JSON.stringify({ userId, books }),
      });
      
      if (!createResponse.ok) {
        throw new Error(`Failed to create cart: ${createResponse.statusText}`);
      }
    }

    return res.status(200).json({ message: "Cart synced successfully" });
    
  } catch (err) {
    console.error("Cart sync error:", err);
    return res.status(500).json({ 
      message: "Sync failed", 
      error: err instanceof Error ? err.message : "Unknown error" 
    });
  }
}