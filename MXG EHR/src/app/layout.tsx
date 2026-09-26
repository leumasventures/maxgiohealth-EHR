import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MaxGioHealth EHR",
  description: "Electronic Health Record Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}