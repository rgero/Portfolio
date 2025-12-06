import "../styles/globals.css";
import "../styles/globals.scss";

import { Geist, Geist_Mono } from "next/font/google";

import AppBar from "@/components/AppBar";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Roymond.NET",
  description: "Projects written by Roy Gero",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png"
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppBar />
        <main className="pt-16 max-w-5xl mx-auto px-6">{children}</main>
      </body>
    </html>
  );
}
