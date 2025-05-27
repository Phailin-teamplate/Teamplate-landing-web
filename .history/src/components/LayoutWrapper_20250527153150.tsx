// components/LayoutWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Navbar from "@/src/components/Header/Navbar";
import Footer from "@/src/components/Footer/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

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
  );
}
