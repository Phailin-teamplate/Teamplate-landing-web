"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggler from "./ThemeToggler";

// Type definition
type Menus = {
  id: number;
  title: string;
  path?: string;
  newTab?: boolean;
  submenu?: Menus[];
};

// Menu items
const menuData: Menus[] = [
  { id: 1, title: "About", path: "#about" },
  { id: 2, title: "Service", path: "#services" },
  { id: 3, title: "Contact", path: "#contact" },
];

const Header = () => {
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const pathname = usePathname();

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll and set active link
  const handleSmoothScroll = useCallback((targetId: string) => {
    setMobileOpen(false);
    setActiveLink(targetId);

    if (targetId === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const toggleDropdown = (index: number) => {
    setDropdownIndex((prev) => (prev === index ? null : index));
  };

  // Style helper
  const getButtonClasses = (id: string, isDropdown = false) => {
    const isActive = id === activeLink;
    return `transition-colors duration-200 cursor-pointer ${
      isActive
        ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400"
        : isDropdown
        ? "text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
        : "text-black dark:text-white hover:text-blue-600 hover:border-b-2 hover:border-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400"
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all z-30 ${
        sticky ? "bg-white dark:bg-black shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1390px] mx-auto flex items-center justify-between px-4 md:px-8 py-6">
        {/* Logo + Toggle */}
        <div className="flex items-center justify-between w-full xl:w-auto">
          <div
            onClick={() => handleSmoothScroll("#homepage")}
            className="flex items-center cursor-pointer"
          >
            <Image
              src="/TEAMPLATE (2).png"
              alt="Logo Dark"
              width={119}
              height={30}
              className="hidden dark:block w-32 sm:w-40 md:w-48 lg:w-56"
            />
            <Image
              src="/TEAMPLATE.png"
              alt="Logo Light"
              width={119}
              height={30}
              className="block dark:hidden w-32 sm:w-40 md:w-48 lg:w-56"
            />
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden text-black dark:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <ThemeToggler />
          <nav>
            <ul className="flex items-center gap-8">
              {menuData.map((menuItem, index) => (
                <li key={index} className="relative group">
                  <button
                    onClick={() =>
                      handleSmoothScroll(menuItem.path || "#")
                    }
                    className={getButtonClasses(menuItem.path || "#")}
                  >
                    {menuItem.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-black shadow-2xl p-6 flex flex-col transition-transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out z-30`}
      >
        <div className="flex justify-between items-center pb-4 mt-1">
          <ThemeToggler />
          <button
            className="text-black dark:text-white focus:outline-none"
            onClick={() => setMobileOpen(false)}
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col items-start gap-4 pt-4">
          {menuData.map((menuItem, index) => (
            <button
              key={index}
              onClick={() => handleSmoothScroll(menuItem.path || "#")}
              className={getButtonClasses(menuItem.path || "#")}
            >
              {menuItem.title}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
