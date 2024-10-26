import "next-auth";
import { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: "Admin" | "User";
};
declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }

  interface User {
    role: "Admin" | "User";
  }
}

declare module "next-aut/jwt" {
  interface JWT {
    role: string;
  }
}

interface User {
  role: "Admin" | "User";
}
