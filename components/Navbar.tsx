"use client";
import { auth, signOut } from "@/auth";
import Link from "next/link";
import SignoutButton from "./SignoutButton";
import { Button } from "./ui/button";
import { GoHeartFill } from "react-icons/go";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <nav
      id="bg-navbar"
      className="sticky flex p-8 bg-[#fff]  h-[3rem] m-auto items-center"
    >
      <div className="w-full flex items-center justify-between">
        <Link className="text-2xl font-bold" href="/">
          Shop.Com
        </Link>
        <div className="text-black text-sm flex gap-4">
          <p>Women</p>
          <p>Men</p>
          <p>Children</p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            className="flex gap-2 items-center justify-center"
            onClick={() => {
              router.push("/favourites");
            }}
          >
            <GoHeartFill />
            <p>Favourites</p>
          </Button>

          {session?.user.role === "Admin" && (
            <div className="flex gap-2 text-xs">
              <Button
                variant={"secondary"}
                size={"sm"}
                className="text-xs hover:bg-black hover:text-white"
              >
                <Link href="/view-products">View Products</Link>
              </Button>
              <Button
                variant={"secondary"}
                size={"sm"}
                className="text-xs hover:bg-black hover:text-white hover:shadow-inner"
              >
                <Link href="/add-products">Add Products</Link>
              </Button>
            </div>
          )}
          {session && <SignoutButton />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
