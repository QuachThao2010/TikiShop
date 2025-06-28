import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";

export interface LoginPayload {
  email: string;
  password: string;
}

export const login = async (payload: LoginPayload) => {
  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Đăng nhập thất bại");
  }

  return result;
};

export const getAccessToken = async (req: NextApiRequest) => {
  const token = await getToken({ 
      req, 
      secret: "KJv9zEtO7W2OmlrHDcUJcLZL3If+UG3bVaSeJJzAMXM=" 
    });
  return token;
}

export const getUserId = async (req: NextApiRequest) => {
  const token = await getToken({ 
      req, 
      secret: "KJv9zEtO7W2OmlrHDcUJcLZL3If+UG3bVaSeJJzAMXM=" 
    });

    return token?.sub
}
