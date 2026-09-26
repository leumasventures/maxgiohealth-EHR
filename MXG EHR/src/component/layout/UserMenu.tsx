"use client";

import { usePathname } from "next/navigation";
import UserMenu from "./UserMenu";

export default function Header() {
  const pathname = usePathname();

  const title =
    pathname
      .split("/")
      .filter(Boolean)
      .pop()
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase()) ||
    "Dashboard";

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          {title}
        </h2>

        <p className="text-xs text-gray-500">
          MaxGioHealth EHR
        </p>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100">
          🔔
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <UserMenu />
      </div>
    </header>
  );
}