"use client";
import AuthCard from "@/components/AuthCard";
import { useSession } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <AuthCard />
    </div>
  );
}
