"use client";

import { useState } from "react";
import Link from "next/link";
// import { About } from "@/app/about/page";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-700 shadow-md w-full z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center text-2xl font-bold text-white">
            <Link href="/">MyPortfolio</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-orange-400 hover:underline">Home</Link>
            <Link href="/about" className="text-white hover:text-orange-400 hover:underline">About</Link>
            <Link href="/project" className="text-white hover:text-orange-400 hover:underline">Projects</Link>
            <Link href="/contact" className="text-white hover:text-orange-400 hover:underline">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-indigo-600 focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-zinc-600 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-2">
            <Link href="/" className="block text-white  hover:text-orange-400 px-3 py-2 rounded-md">Home</Link>
            <Link href="/about" className="block text-white  hover:text-orange-400 px-3 py-2 rounded-md">About</Link>
            <Link href="/project" className="block text-white  hover:text-orange-400 px-3 py-2 rounded-md">Projects</Link>
            <Link href="/contact" className="block text-white  hover:text-orange-400 px-3 py-2 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
