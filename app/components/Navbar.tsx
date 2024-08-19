import { auth } from "@/auth";
import Link from "next/link";
import React from "react";
import LogOut from "./LogOut";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="border-b bg-background w-full flex items-center">
      <div className="flex w-full items-center justify-between my-4">
        <Link className="font-bold" href="/">
          Home
        </Link>
        <div className="flex items-center gap-x-5">
          <Link className="font-bold" href="/middleware">
            Middleware
          </Link>
          <Link className="font-bold" href="/server">
            Server
          </Link>
        </div>
        <div className="flex items-center gap-x-5">
          {!session?.user ? (
            <Link className="font-bold" href="/sign-in">
              <div className="bg-blue-600 text-white px-4 py-2 text-sm rounded-lg">
                Login
              </div>
            </Link>
          ) : (
            <>
              <div className="flex items-center gap-x-2 text-sm">
                {session?.user?.name}
                {session?.user?.image && (
                  <Image
                    src={session?.user?.image || ""}
                    alt="User Avatar"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                )}
              </div>
              <LogOut />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
