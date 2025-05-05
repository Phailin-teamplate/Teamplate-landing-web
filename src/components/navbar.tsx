"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "@/public/TEAMPLATE.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleSmoothScroll = useCallback((targetId: string) => {
    setIsOpen(false);
    setActiveSection(targetId);

    if (targetId === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const navLinks = [
    { label: "About", id: "#about" },
    { label: "Services", id: "#services" },
    { label: "Contact", id: "#contact" },
  ];

  const getButtonClasses = (id: string) =>
    `transition-colors duration-200 cursor-pointer pb-1 ${
      activeSection === id
        ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400"
        : "text-black dark:text-white hover:text-blue-600 hover:border-b-2 hover:border-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400"
    }`;

  return (
    <div className="w-full sticky top-0 z-50 bg-white dark:bg-black shadow-md">
      <nav className="flex items-center justify-between p-6">
        {/* Logo */}
        <button
          onClick={() => handleSmoothScroll("/")}
          className="p-0 border-none bg-transparent active:opacity-80"
        >
          <Image
            className="w-32 sm:w-40 md:w-48 lg:w-56"
            src={Logo}
            alt="TEAMPLATE Logo"
            priority
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 ">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleSmoothScroll(id)}
              className={getButtonClasses(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden focus:outline-none text-black dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-black shadow-2xl p-6 flex flex-col transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center pb-4">
          <h3 className="text-black dark:text-white text-2xl font-semibold">Menu</h3>
          <button
            className="text-black dark:text-white focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-start gap-4 pt-4">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleSmoothScroll(id)}
              className={getButtonClasses(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
