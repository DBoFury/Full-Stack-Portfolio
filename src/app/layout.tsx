import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oleg D.",
  description: "Personal full-stack portfolio of Didechkin Oleg.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
