import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({
  children,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      <div className="ml-64 min-h-screen">
        <Header />

        <main className="p-6">
          <Breadcrumbs />

          {children}
        </main>
      </div>
    </div>
  );
}