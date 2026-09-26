"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: "▣" },
  { name: "Patients", href: "/patients", icon: "♙" },
  { name: "Appointments", href: "/appointments", icon: "◷" },
  { name: "Calendar", href: "/calendar", icon: "▦" },
  { name: "Encounters", href: "/encounters", icon: "✚" },
  { name: "Clinical Notes", href: "/notes", icon: "☷" },
  { name: "Medications", href: "/medications", icon: "▥" },
  { name: "Prescriptions", href: "/prescriptions", icon: "▤" },
  { name: "Laboratory", href: "/labs", icon: "⚗" },
  { name: "Diagnoses", href: "/diagnoses", icon: "⌁" },
  { name: "Assessments", href: "/assessments", icon: "✓" },
  { name: "Treatment Plans", href: "/treatment-plans", icon: "☑" },
  { name: "Telehealth", href: "/telehealth", icon: "◉" },
  { name: "Messages", href: "/messages", icon: "✉" },
  { name: "Referrals", href: "/referrals", icon: "↗" },
  { name: "Documents", href: "/documents", icon: "▱" },
  { name: "Billing", href: "/billing", icon: "$" },
  { name: "Claims", href: "/claims", icon: "#" },
  { name: "Tasks", href: "/tasks", icon: "☑" },
  { name: "Reports", href: "/reports", icon: "▥" },
  { name: "Settings", href: "/settings", icon: "⚙" },
  { name: "Administration", href: "/admin", icon: "♟" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col bg-slate-950 text-white">
      <div className="border-b border-slate-800 px-5 py-5">
        <h1 className="text-xl font-bold">
          MaxGio<span className="text-blue-400">Health</span>
        </h1>

        <p className="mt-1 text-xs text-slate-400">
          Electronic Health Record
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          {navigation.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span className="w-5 text-center">
                  {item.icon}
                </span>

                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-slate-800 p-4 text-xs text-slate-400">
        MaxGioHealth EHR
        <br />
        Version 1.0.0
      </div>
    </aside>
  );
}