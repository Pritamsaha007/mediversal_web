// src/components/Footer/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-5 px-10 md:flex md:justify-between md:items-center border-t border-gray-200 w-full">
      <div className="flex flex-col md:flex-row md:gap-4 items-center mb-4 md:mb-0">
        <a href="/" className="text-sm hover:underline mx-2">
          Home
        </a>
        <a href="/about" className="text-sm hover:underline mx-2">
          About Us
        </a>
        <a href="/contact" className="text-sm hover:underline mx-2">
          Contact Us
        </a>
        <a href="/terms" className="text-sm hover:underline mx-2">
          Terms & Conditions
        </a>
        <a href="/privacy" className="text-sm hover:underline mx-2">
          Privacy Policy
        </a>
      </div>
      <div className="text-xs text-center md:text-right">
        © 2025 Mediversal Healthcare
      </div>
    </footer>
  );
};

export default Footer;
