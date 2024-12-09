"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  

  };

  return (
    <nav className="w-full bg-white py-[14px]">
  <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
    {/* Left-aligned Desktop Menu */}
    <div className="flex items-center gap-8">
      <Link
        href="/"
        className="text-[#007580] hover:text-blue-600 transition-colors duration-300 text-[14px] font-medium"
      >
        Home
      </Link>
      <Link
        href="/cart"
        className="text-[#736c90] hover:text-blue-600 transition-colors duration-300 text-[14px] font-medium"
      >
        Shop
      </Link>
      <Link
        href="/product"
        className="text-[#736c90] hover:text-blue-600 transition-colors duration-300 text-[14px] font-medium"
      >
        Product
      </Link>
      <Link
        href="/faq"
        className="text-[#736c90] hover:text-blue-600 transition-colors duration-300 text-[14px] font-medium"
      >
        Pages
      </Link>
      <Link
        href="/singleProductPage"
        className="text-[#736c90] hover:text-blue-600 transition-colors duration-300 text-[14px] font-medium"
      > Single Product</Link>

      <Link
        href="/about"
        className="text-[#736c90] hover:text-blue-600 transition-colors duration-300 text-[14px] font-medium"
      >
        About
      </Link>
      <Link
        href="/contact"
        className="text-[#736c90] hover:text-blue-600 transition-colors duration-300 text-[14px] font-medium"
      >
        Contact Us
      </Link>
    </div>

    {/* Right-aligned Contact Information */}
    <div className="flex items-center gap-2">
      <span className="font-normal text-[#636270] text-[14px]">Contact:</span>
      <span className="font-medium text-[#272343] text-[14px]">
        (808) 555-0111
      </span>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
