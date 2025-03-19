"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Prizes", path: "/prizes" },
  { name: "Sponsors", path: "/sponsors" },
  { name: "Judges", path: "/judges" },
  { name: "Rules", path: "/rules" },
  { name: "FAQ", path: "/faq" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-[rgb(var(--background-start-rgb))]/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo 
            size="medium" 
            className={`fill-current ${isScrolled 
              ? "text-[rgb(var(--primary))]" 
              : "text-white"
            }`} 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === link.path
                  ? "text-[rgb(var(--primary))] font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-[rgb(var(--primary))]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/registration" 
            className="ml-2 btn-primary py-2 text-sm"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out absolute w-full bg-white dark:bg-[rgb(var(--background-start-rgb))] shadow-lg ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="container-custom py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === link.path
                  ? "text-[rgb(var(--primary))] font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/registration"
            className="block mt-4 w-full text-center btn-primary"
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
} 