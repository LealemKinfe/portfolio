import type { Metadata } from "next";
import "../globals.css";
import SideBar from "@/app/ui/SideBar";
import Image from "next/image";
import { ibm } from "@/app/lib/fonts";

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
      <body className={ibm.className}>
        <main className="flex flex-col h-screen lg:flex-row relative lg:overflow-hidden">
          {/* background vector */}
          <Image
            src="/assets/Group258.svg"
            width={2000}
            height={1000}
            alt="background vector"
            className="hidden lg:block absolute object-contain top-0 left-0 right-0 bottom-0"
          />
          <SideBar />
          {children}
        </main>
      </body>
    </html>
  );
}
