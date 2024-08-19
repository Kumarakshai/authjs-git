"use client";

import { logout } from "@/actions/auth";

const LogOut = () => {
  return (
    <div onClick={() => logout()}>
      <div className="bg-gray-600 text-white text-sm px-4 py-2 rounded-lg cursor-pointer">
        Log out
      </div>
    </div>
  );
};

export default LogOut;
