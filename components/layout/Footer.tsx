"use client";

import Link from "next/link";
import { useState } from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to save the email
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
    // Reset the submitted state after a delay
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Logo size="medium" className="fill-white" />
              <h2 className="text-2xl font-bold ml-2 text-white">
                WorldHackathon
              </h2>
            </div>
            <p className="text-gray-400 mb-4">
              Join the global community of innovators and problem solvers in the world's largest hackathon event.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaDiscord className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/prizes" className="text-gray-400 hover:text-white transition-colors">
                  Prizes
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-gray-400 hover:text-white transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/judges" className="text-gray-400 hover:text-white transition-colors">
                  Judges
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-gray-400 hover:text-white transition-colors">
                  Rules
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates about the hackathon.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary py-2 justify-center"
                >
                  Subscribe
                </button>
              </div>
              {submitted && (
                <p className="text-green-400 text-sm">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} The World's Largest Hackathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 