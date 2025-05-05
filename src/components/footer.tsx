import React from "react";
import { cn } from "@/src/lib/utils";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className={cn(
        // "bg-gray-700  shadow-sm dark:bg-black text-white py-8 px-4"
        "border-t border-stroke bg-whitesection dark:border-strokedark dark:bg-blacksection  text-black dark:text-white py-8 px-4 " 
      )}
    >
      <div className="max-w-[1390px] mx-auto md:flex items-center justify-between px-4 md:px-8 2xl:px-0 py-0">
        {/* Left Section */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start gap-3">
          <h3 className="text-xl font-bold">Teamplate Sole Co., Ltd</h3>
          <p className="text-sm">
            IT Center, Lao Youth Union, Vientiane Prefecture, Laos
          </p>
          <p className="text-sm">&copy; 2025 All Rights Reserved.</p>
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-black dark:text-white hover:text-gray-400  transition-colors text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-black dark:text-white hover:text-gray-400 transition-colors text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-black dark:text-white hover:text-gray-400 transition-colors text-lg"
            >
              <FaTiktok />
            </a>
            <a
               href={`https://wa.me/8562098270483`}
               target="_blank"
               rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-gray-400 transition-colors text-lg"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:gap-2 text-center md:text-left gap-3 mt-4 md:mt-0">
          <h4 className="font-bold text-lg mb-2 cursor-pointer">Privacy Policy</h4>
          <h4 className="font-bold text-lg mb-2 cursor-pointer">Terms of Service</h4>
        </div>
      </div>
    </footer>
  );
}
