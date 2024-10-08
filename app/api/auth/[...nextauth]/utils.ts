import { getServerSession } from "next-auth";
// import { authOptions, UserSession } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import NextAuth, { DefaultSession, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

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

const authOptions: NextAuthOptions = {
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

      const userData = await prisma.user.findFirst({
        where: {
          id: (token.user as UserData).id,
        },
      });

      (session as UserSession).data = {
        id: userData!.id,
        username: userData? userData.name! : "",
        email: userData? userData.email! : "",
        password: userData!.password,
        accessToken: accessToken,
        refreshToken: refreshToken,

      }; // get session.user by useSession()

      return session;

    },
  },
}

interface UserSession extends DefaultSession {
  data: UserData;
}

export async function getSessionAndEnsureAuthenticated(): Promise<UserSession | null>{
    const session: UserSession | null = await getServerSession(authOptions);
    if(!session) redirect('/login');
    return session;
}
export async function ensureNotAuthenticated(){
    const session: UserSession | null = await getServerSession(authOptions);
    if(session) redirect('/dashboard');
}