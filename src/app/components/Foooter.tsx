// src/components/Footer/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  // Function to get current year dynamically
  const getCurrentYear = (): number => {
    return new Date().getFullYear();
  };

  return (
    <footer className="bg-white text-gray-600 py-5 px-6 md:px-[90px] border-t border-gray-200 w-full">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col md:flex-row md:gap-4 items-center mb-6 md:mb-0">
          <a href="/" className="text-sm hover:underline my-2 md:my-0 md:mx-2">
            Home
          </a>
          <a
            href="/about"
            className="text-sm hover:underline my-2 md:my-0 md:mx-2"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="text-sm hover:underline my-2 md:my-0 md:mx-2"
          >
            Contact Us
          </a>
          <a
            href="/terms"
            className="text-sm hover:underline my-2 md:my-0 md:mx-2"
          >
            Terms & Conditions
          </a>
          <a
            href="/privacy"
            className="text-sm hover:underline my-2 md:my-0 md:mx-2"
          >
            Privacy Policy
          </a>
        </div>
        <div className="text-xs text-center md:text-right mt-4 md:mt-0">
          © {getCurrentYear()} Mediversal Healthcare
        </div>
      </div>
    </footer>
  );
};

export default Footer;
