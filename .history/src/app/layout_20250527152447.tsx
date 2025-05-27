import React, { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Noto_Sans_Lao } from "next/font/google";
import "./globals.css";
import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Header/Navbar";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TEAMPLATE",
  description: "Teamplate site layout",
};

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
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        className={`dark:bg-black ${inter.className} ${notoSansLao.className}`}
      >
        {isPageLoading ? (
          <div className="fixed inset-0 z-[9999] bg-white dark:bg-black flex items-center justify-center">
            <KeyboardDoubleArrowUpIcon className="animate-bounce w-10 h-10 text-blue-500" />
          </div>
        ) : (
          <>
            <Navbar />
            <main>{children}</main>
            <Footer />
            {isVisible && (
              <button
                onClick={scrollToTop}
                className="fixed bottom-2 z-50 right-5 md:bottom-5 md:right-10 bg-blue-500 text-white p-2 md:p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-transform transform hover:scale-110"
              >
                <KeyboardDoubleArrowUpIcon className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            )}
          </>
        )}
      </body>
    </html>
  );
}
