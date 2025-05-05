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
    <header className="w-full bg-transparent sticky z-50 mt-6 md:px-[100px]">
      <div className=" mx-auto flex items-center justify-between py-3 px-4">
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
            className="bg-[#0088B1] p-2 rounded-md text-white hover:opacity-90 transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <div className="flex flex-col space-y-4">
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
