import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length === 0) return null;

  return (
    <nav className="mb-4 flex items-center gap-1 text-sm text-gray-500">
      <Link to="/dashboard" className="hover:text-teal-600">
        Home
      </Link>
      {parts.map((part, i) => {
        const href = "/" + parts.slice(0, i + 1).join("/");
        const label = part
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
        const isLast = i === parts.length - 1;
        return (
          <span key={href} className="flex items-center gap-1">
            <span className="text-gray-300">/</span>
            {isLast ? (
              <span className="font-medium text-gray-700">{label}</span>
            ) : (
              <Link to={href} className="hover:text-teal-600">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}