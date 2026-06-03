import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"; // Why curly braces here?
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Portfolio | Sumit Saurav",
  description: "A seasoned frontend developer."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-(--bg) text-(--text)">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          {/* flex-grow */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
