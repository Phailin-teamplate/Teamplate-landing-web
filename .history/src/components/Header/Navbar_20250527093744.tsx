"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { fetchLogoUrls } from "../..//lib/fetchLogoUrls";
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
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
 const [logos, setLogos] = useState({ light: "", dark: "" });

  useEffect(() => {
    const load = async () => {
      const urls = await fetchLogoUrls();
      setLogos(urls);
    };
    load();
  }, []);
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/50 dark:bg-black/50 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold"
            >
               {logos.dark && (
        <Image
          src={logos.dark}
          alt="TEAMPLATE"
          width={119}
          height={30}
          className="hidden dark:block w-32 sm:w-40 md:w-48 lg:w-56"
          unoptimized
        />
      )}
      {logos.light && (
        <Image
          src={logos.light}
          alt="TEAMPLATE (2)"
          width={119}
          height={30}
          className="block dark:hidden w-32 sm:w-40 md:w-48 lg:w-56"
          unoptimized
        />
      )}
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 text-black dark:text-white">
            <div className="flex items-center space-x-4">
              
             <ThemeToggler />
            </div>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="relative group">
                <Button
                  variant={pathname === link.href ? "secondary" : "ghost"}
                  className={`
          px-4 py-2 text-sm font-medium transition-all duration-300
          ${pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"}
        `}
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
            {/* <ThemeToggler /> */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="ml-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted hover:text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
