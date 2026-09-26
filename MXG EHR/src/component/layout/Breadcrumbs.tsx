"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  const parts = pathname.split("/").filter(Boolean);

  return (
    <div className="mb-5 flex items-center gap-2 text-sm text-gray-500">
      <Link href="/dashboard" className="hover:text-blue-600">
        Home
      </Link>

      {parts.map((part, index) => {
        const href =
          "/" + parts.slice(0, index + 1).join("/");

        const label = part
          .replace(/-/g, " ")
          .replace(/\b\w/g, (letter) =>
            letter.toUpperCase()
          );

        return (
          <span key={href} className="flex items-center gap-2">
            <span>/</span>

            <Link
              href={href}
              className="hover:text-blue-600"
            >
              {label}
            </Link>
          </span>
        );
      })}
    </div>
  );
}