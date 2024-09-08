import NextAuth, { CredentialsSignin } from "next-auth";
import credentials from "next-auth/providers/credentials";
import { connectDb } from "./lib/db";
import { User } from "./models/User";
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: { email: string; password: string }) {
        await connectDb();
        const user = await User.findOne({ email: credentials?.email }).select(
          "+password"
        );
        if (!user) {
          return null;
        }
        const isValidPassword = user.password === credentials?.password;
        if (!isValidPassword) {
          return null;
        }
        console.log("user returned");
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },

  callbacks: {
    async signIn({ user }) {
      console.log(user.id);
      return true;
    },
    async session({ token, session, user }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      session.user.role = "ADMIN";

      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
});
