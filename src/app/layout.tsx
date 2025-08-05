import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Common/navbar";
import Footer from "./Common/footer";
import { ThemeProvider } from "./Common/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vijayanga Dissanayaka's Portfolio",
  icons: {
    icon: "/logo/logo.png", // Link to the logo image file located in the 'public' folder
  },
  description:
    "Portfolio website of Vijayanga Dissanayaka , IT undergraduate student showcasing projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class" // This tells next-themes to add 'dark' class to html
          defaultTheme="system" // Default to system theme
          enableSystem // Enable system theme detection
          disableTransitionOnChange // Disable transitions on theme change
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
