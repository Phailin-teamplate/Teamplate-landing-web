import { useState, useCallback } from "react";
// import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/public/TEAMPLATE.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const router = useRouter();

  // Function for smooth scrolling
  const handleSmoothScroll = useCallback((targetId: string) => {
    setIsOpen(false); // Close the sidebar

    if (targetId === "/") {
      // Scroll to the top of the page when the "About" button is clicked
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to a specific section
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="w-full sticky top-0 z-50 bg-white shadow-md">
      <nav className="flex items-center justify-between p-6">
        {/* Logo */}
        <button
          onClick={() => handleSmoothScroll("/")}
          className="p-0 border-none bg-transparent active:opacity-80"
        >
          <Image
            className="w-32 sm:w-40 md:w-48 lg:w-56"
            src={Logo}
            alt="Appstore"
            priority
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <button
            onClick={() => handleSmoothScroll("#about")}
            className="hover:underline"
          >
            About
          </button>
          <button
            onClick={() => handleSmoothScroll("#services")}
            className="hover:underline"
          >
            Services
          </button>
          <button
            onClick={() => handleSmoothScroll("#contact")}
            className="hover:underline"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl p-6 flex flex-col transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center pb-4 mt-1">
          <h3 className="text-black text-2xl font-semibold">Menu</h3>
          <button
            className="text-black text-3xl font-bold focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-start gap-4 pb-4">
          <button
            onClick={() => handleSmoothScroll("#about")}
            className="hover:underline"
          >
            About
          </button>

          <button
            onClick={() => handleSmoothScroll("#services")}
            className="hover:underline"
          >
            Services
          </button>

          <button
            onClick={() => handleSmoothScroll("#contact")}
            className="hover:underline"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
