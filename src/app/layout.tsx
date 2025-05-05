"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Noto_Sans_Lao } from "next/font/google";
import "./globals.css";
// import Navbar from "@/src/components/navbar";
import Footer from "../components/footer";
import Header from "@/src/components/Header";

// Font setups
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
  const [isLoading, setIsLoading] = useState(true); // ✅ added

  // Show loading for initial render (simulate with timeout)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Optional: adjust timing
    return () => clearTimeout(timer);
  }, []);

  // Scroll button visibility logic
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`dark:bg-black ${inter.className} ${notoSansLao.className}`}>
        {isLoading ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Layout Sections */}
            {/* <Navbar /> */}
            <Header />
            <main>{children}</main>
            <Footer />

            {/* Scroll-to-Top Button */}
            {isVisible && (
              <button
                onClick={scrollToTop}
                className="fixed bottom-2 z-999 right-5 md:bottom-5 md:right-10 bg-blue-500 text-white p-2 md:p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-transform transform hover:scale-110"
              >
                <ArrowUpIcon className=" h-5 w-5 md:h-6 md:w-6" />
              </button>
            )}
          </>
        )}
      </body>
    </html>
  );
}
