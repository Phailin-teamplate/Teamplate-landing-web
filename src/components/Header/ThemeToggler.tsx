"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-2 dark:bg-dark-bg absolute md:right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static"
      aria-label="Toggle Theme"
    >
      <Image
        src="/images/icon/moon.png"
        alt="Moon Icon"
        width={21}
        height={21}
        className="block dark:hidden hover:opacity-80 transition-opacity duration-300 ease-in-out"
      />
      <Image
        src="/images/icon/sun.png"
        alt="Sun Icon"
        width={21}
        height={21}
        className="hidden dark:block hover:opacity-80 transition-opacity duration-300 ease-in-out"
      />
    </button>
  );
  
};

export default ThemeToggler;
