import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
        <nav className="w-full sticky top-0 flex justify-between px-6 py-3 bg-[#CEE3EC] z-20">
          <div className="inline-flex items-center justify-evenly w-[25%]">
            <Image
              src="/sblogo.png"
              alt=""
              width={56}
              height={82}
              className="w-8 h-auto"
            />
            <h2 className="text-2xl pt-3">
              Surf<del>Bored</del>
            </h2>
          </div>
          <button>Menu</button>
        </nav>
        <main className="w-full h-full min-h-[90vh]">{children}</main>
      </body>
    </html>
  );
}
