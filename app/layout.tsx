import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/app/UI/SideBar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lealem Kinfe",
  description: "Welcome To My Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col h-screen lg:flex-row relative lg:overflow-hidden">
          {/* background vector */}
          <Image
            src="/assets/Group1.svg"
            width={2000}
            height={1000}
            alt="background vector"
            className="absolute object-contain top-0 left-0 right-0 bottom-0"
          />
          <SideBar />
          {children}
        </main>
      </body>
    </html>
  );
}
