import connectMongoDB from "@/libs/mongo";
import USER from "@/model/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const { email, password } = credentials;
        const user = await USER.findOne({ email });
        try {
          await connectMongoDB();
          if (!user) {
            return null;
          }
          return user;
        } catch (error) {
          console.log("error", error);
        }
        return user;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
