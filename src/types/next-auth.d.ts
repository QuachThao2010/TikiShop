import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user?: {
      id?: string;
      email?: string;
      name?: string;
    };
  }

  interface User {
    id: string;
    email: string;
    name: string;
    accessToken?: string;
    refreshToken: any;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}