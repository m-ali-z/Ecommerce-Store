import NextAuth, { CredentialsSignin } from "next-auth";
import credentials from "next-auth/providers/credentials";
import { connectDb } from "./lib/db";
import { getUserById } from "./lib/user";
import { User } from "./models/User";
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: any) {
        await connectDb();
        const user = await User.findOne({ email: credentials?.email }).select(
          "+password"
        );
        console.log("auth", user);

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
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      return true;
    },
    async session({ token, session, user }) {
      console.log("user in session", user);
      session.user.role = token.role as "Admin" | "User";
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token, user }) {
      if (!token.sub) return token;
      if (user) {
        token.role = user.role as "Admin" | "User";
        token.sub = user.id;
      }
      return token;
    },
  },
});
