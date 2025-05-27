"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import ThemeToggler from "./ThemeToggler";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Stack", href: "/stacks" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);



  return (
    <nav className="sticky top-0 z-50 w-full bg-white/50 dark:bg-black/50 dark:border-strokedark backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <>
              {/* Dark mode logo */}
              <Image
                src="/images/logo/TEAMPLATE (2).png"
                alt="TEAMPLATE"
                width={119}
                height={30}
                className="hidden dark:block w-32 sm:w-40 md:w-48 lg:w-56"
                priority
              />

              {/* Light mode logo */}
              <Image
                src="/images/logo/TEAMPLATE.png"
                alt="TEAMPLATE (2)"
                width={119}
                height={30}
                className="block dark:hidden w-32 sm:w-40 md:w-48 lg:w-56"
                priority
              />
            </>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 text-black dark:text-white">
            <div className="flex items-center space-x-4">
              <ThemeToggler />
            </div>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="relative group">
                <Button
                  variant={pathname === link.href ? "secondary" : "ghost"}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="ml-2"
            >
              {isOpen ? (
                <X className="h-6 w-6 dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 dark:text-white" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
     {isOpen && (
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.25 }}
    className="fixed inset-0 z-50 bg-white dark:bg-blacksection"
    onClick={() => setIsOpen(false)}
  >
    <div
      className="w-full h-full px-6 py-8 flex flex-col text-gray-800 dark:text-gray-100"
      onClick={(e) => e.stopPropagation()}
    >
     {/* Header */}
<div className="flex justify-between items-center w-full mb-6">
  {/* Left side: Theme toggler */}
  <div className="flex-shrink-0">
    <ThemeToggler />
  </div>

  {/* Right side: Close button */}
  <div className="flex-shrink-0">
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsOpen(false)}
      className="hover:bg-muted" 
    >
      <X className="h-6 w-6 text-gray-700 dark:text-white  pt-8" />
    </Button>
  </div>
</div>


      {/* Navigation */}
      <nav className="flex flex-col gap-4 mt-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`w-full text-center px-5 py-3 rounded-lg text-lg font-medium tracking-wide transition-all duration-200 shadow-sm ${
              pathname === link.href
                ? "bg-primary text-primary-foreground"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:bg-black dark:border-strokedark border dark:hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  </motion.div>
)}

    </nav>
  );
};

export default Navbar;
