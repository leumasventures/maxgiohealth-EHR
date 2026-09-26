import React from "react";

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function Card({
  children,
  title,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${className}`}
    >
      {title && (
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          {title}
        </h3>
      )}

      {children}
    </div>
  );
}