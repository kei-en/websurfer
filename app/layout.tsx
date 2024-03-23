import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { NextButtonProvider } from "@/lib/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SurfBored",
  description: "Discover interesting and fun websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextButtonProvider>
          {/* Navbar */}
          <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
          </div>
          <main className="w-full h-full">{children}</main>
        </NextButtonProvider>
      </body>
    </html>
  );
}
