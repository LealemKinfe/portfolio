import type { Metadata } from "next";
import "@/app/globals.css";
import { truculenta } from "@/app/lib/fonts";

export const metadata: Metadata = {
  title: "Lealem Kinfe",
  description: "A page to tell you a bit about myself",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={truculenta.className}>{children}</body>
    </html>
  );
}
