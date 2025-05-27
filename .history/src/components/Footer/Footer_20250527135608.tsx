"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border  dark:border-strokedark ">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 md:text-left text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-gradient mb-4 text-blue-500">
              Teamplate Sole Co., Ltd
            </div>
            <p className="text-muted-foreground max-w-md text-black dark:text-white hover:text-gray-400">
              IT Center, Lao Youth Union, Vientiane Prefecture, Laos
            </p>
          </div>

          {/* Navigation links */}
          <div className="text-black dark:text-white hover:text-gray-400">
            <h3 className="text-sm font-bold  uppercase mb-4 text-primary">
              Navigation
            </h3>
            <ul className="space-y-3">
              {["/", "/about", "/stacks", "/contact"].map((path, index) => {
                const names = ["Home", "About", "Stacks", "Contact"];
                return (
                  <li key={path}>
                    <Link
                      href={path}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {names[index]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social icons */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4 text-black dark:text-white hover:text-gray-400">
              Connect
            </h3>
            <div className="flex space-x-4 md:justify-start justify-center">
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
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 border-t border-border pt-8 text-black  dark:border-strokedark  dark:text-white hover:text-gray-400">
          <p className="text-muted-foreground text-sm text-center">
            &copy; {currentYear} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
