

import type { Metadata } from "next";
import {
  Clicker_Script,
  Geist,
  Geist_Mono,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair_display = Playfair_Display({
  variable: "--font-playfair_display",
  subsets: ["latin"],
  weight: ["400"],
});

const clicker_script = Clicker_Script({
  variable: "--font-clicker_script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Bean Scene",
  description:
    "Discover your favorite coffee at our coffee shop. Enjoy freshly brewed coffee, delicious flavors, and a cozy atmosphere.",
  icons: {
    icon: "/images/logo.png",
  },
  keywords: [
    "Coffee Shop",
    "Fresh Coffee",
    "Coffee House",
    "Coffee and Desserts",
    "Best Coffee",
    "Coffee Shop Website",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair_display.variable} ${clicker_script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
