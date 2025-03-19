"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid"; // Importing the arrow icon
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Noto_Sans_Lao } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/navbar";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });
const notoSansLao = Noto_Sans_Lao({ subsets: ["lao"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isVisible, setIsVisible] = useState(false);

  // Detect scroll position and show button when scrolling down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className}  ${notoSansLao.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />

        {/* Popup Button with Icon for Scrolling to Top */}
        {isVisible && (
             <button
             onClick={scrollToTop}
             className="fixed bottom-2 right-5 md:bottom-5 md:right-10 bg-blue-500 text-white p-2 md:p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-transform transform hover:scale-110"
           >
             {/* Heroicon Arrow Up Icon */}
             <ArrowUpIcon className="h-5 w-5 md:h-6 md:w-6" />
           </button>
        )}
      </body>
    </html>
  );
}
