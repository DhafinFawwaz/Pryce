import NextAuth, { DefaultSession, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { getServerSession } from 'next-auth';
import { redirect } from "next/navigation";

import type { NextAuthOptions } from 'next-auth'
import prisma from "@/lib/prisma";

type UserData = {
  id: string;
  username: string;
  email: string;
  password: string;
  accessToken: string;
  refreshToken: string;
}
export interface UserSession extends DefaultSession {
    data: UserData;
}

export const authOptions: NextAuthOptions = {
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
              email: {
                label: "Email",
                type: "email",
                placeholder: "example@example.com",
              },
              username: {
                label: "Username",
                type: "username",
                placeholder: "example",
              },
              password: { label: "Password", type: "password" },
              id: { label: "ID", type: "id" },
        },
        async authorize(credentials) {
          console.log("authorize");
          console.log(credentials);
          try {
            const user = await prisma.user.findFirst({
              where: {
                email: credentials!.email,
                password: credentials!.password,
              },
            })
            return user;
          } catch (error) {
            console.log(error);
          }

          return null;
        },
      }),
    ],
  
    callbacks: {
      async jwt({ token, user }) {// user is returned from authorize() above
        if(user) token.user = user;
        return token;
      },
  
      async session({ session, token }) { // token is returned from jwt() above
        console.log("session");
        console.log(session);
        
        const accessToken = (token.user as UserData).accessToken;
        const refreshToken = (token.user as UserData).refreshToken;

        const userData: UserData = await prisma.user.findFirst({
          where: {
            id: (token.user as UserData).id,
          },
        });
        (session as UserSession).data = userData; // get session.user by useSession()

        return session;

      },
    },
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
