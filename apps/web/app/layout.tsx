import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "MyMedia",
  description: "Personal Netflix-style platform"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-neon-green min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
