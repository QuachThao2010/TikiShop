import { getUserId } from "@/servives/authService";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = await getUserId(req);
  if (userId) {
    res.status(200).json({ userId });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
