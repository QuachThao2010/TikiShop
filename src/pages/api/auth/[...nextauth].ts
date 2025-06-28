import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";


export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });

        const userLogin = await res.json();
        console.log("Returned from login:", userLogin);

        if (res.ok && userLogin) {
          return {
            id: userLogin.user.id,
            email: userLogin.user.email,
            name: userLogin.user.email.split("@")[0],
            accessToken: userLogin.accessToken,
          } as User;
        }

        return null;
      },
    }),
  ],

  secret: "KJv9zEtO7W2OmlrHDcUJcLZL3If+UG3bVaSeJJzAMXM=",

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }) {
    if (user) {
      return {
        ...token,
        accessToken: user.accessToken,
        refreshToken: user.refreshToken, 
        accessTokenExpires: Date.now() + 60 * 60 * 1000,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      };
    }

    if (Date.now() < (token.accessTokenExpires as number)) {
      return token;
    }

    return await refreshAccessToken(token);
  },

    async session({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  }
};

export default NextAuth(authOptions);

async function refreshAccessToken(token: JWT) {
  try {
    const res = await fetch("http://localhost:3000/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refreshToken: token.refreshToken,
      }),
    });
    const refreshed = await res.json();

    return {
      ...token,
      accessToken: refreshed.accessToken,
      accessTokenExpires: Date.now() + 60 * 60 * 1000, // Ví dụ 1 giờ
      refreshToken: refreshed.refreshToken ?? token.refreshToken,
    };
  } catch (error) {
    console.error("Error refreshing token", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

