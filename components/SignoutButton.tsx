"use client";
import { signOut } from "@/auth";
import { Button } from "./ui/button";
import { PiSignOut } from "react-icons/pi";
const SignoutButton = () => {
  return (
    <div className="flex">
      <form
        action={async () => {
          await signOut({ redirectTo: "/" });
        }}
      >
        <Button
          type="submit"
          id="button"
          className="transition-all ease-in-out duration-500 border-none border-4 shadow-[inset_0_0_0_0.09px_red] hover:shadow-[inset_250px_0_0_0_red] text-sm flex items-center gap-2 p-4"
        >
          <PiSignOut />
          <p className="text-xs">Sign Out</p>
        </Button>
      </form>
    </div>
  );
};

export default SignoutButton;
