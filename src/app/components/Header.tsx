"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full bg-transparent sticky top-0 z-50 md:mt-6 md:px-[100px]">
      <div className="mx-auto flex items-center justify-between py-3 px-4 md:px-0">
        {/* Left section: Logo + Nav */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="./logo.svg"
              alt="Brand Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 md:ml-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`text-sm font-medium transition-colors ${
                  active === link.name
                    ? "text-[#0088B1]"
                    : "text-[#161D1F] hover:text-[#0088B1]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Download App button (desktop only) */}
        <div className="hidden md:flex md:mr-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0088B1] text-white text-sm font-medium hover:opacity-90 transition">
            <Download className="w-4 h-4" />
            Download App
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[#0088B1] p-2 rounded-md text-white hover:opacity-90 transition z-50 relative"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown - Now positioned absolute */}
      {menuOpen && (
        <div className="md:hidden bg-white/5 backdrop-blur-md shadow-lg fixed top-18 left-0 right-0 z-40">
          <div className="flex flex-col items-center py-6 space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActive(link.name);
                  setMenuOpen(false);
                }}
                className={`text-sm font-medium ${
                  active === link.name
                    ? "text-[#0088B1]"
                    : "text-[#161D1F] hover:text-[#0088B1]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="mt-2 flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0088B1] text-white text-sm font-medium hover:opacity-90 transition w-fit">
              <Download className="w-4 h-4" />
              Download App
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
