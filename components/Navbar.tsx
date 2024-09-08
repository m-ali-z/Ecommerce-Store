import { useSession } from "next-auth/react";
import { auth, signOut } from "@/auth";
const Navbar = async () => {
  const session = await auth();

  return (
    <nav
      id="bg-navbar"
      className="sticky w-[98%] flex p-4 bg-purple-950 text-yellow-200 h-[3rem] m-auto mt-5 items-center z-10"
    >
      <div className="w-full flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">Shop.com</p>
        </div>
        {session && (
          <div>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button type="submit">Sign Out</button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
