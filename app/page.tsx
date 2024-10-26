import AuthCard from "@/components/AuthCard";
import { useSession } from "next-auth/react";
import HomePage from "./_components/HomePage";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return <div>{!session ? <AuthCard /> : <HomePage />}</div>;
}
