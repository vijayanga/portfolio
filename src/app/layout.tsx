import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Common/navbar";
import Footer from "./Common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Doe - IT Student Portfolio",
  description:
    "Portfolio website of John Doe, IT undergraduate student showcasing projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
