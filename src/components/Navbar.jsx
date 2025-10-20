import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import search from "../assets/images/search.png";
import cart from "../assets/images/cart.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#D9D9D9] shadow-md">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-[130px]" />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-[#BF6159]"></span>
              <span className="block w-6 h-0.5 bg-[#BF6159]"></span>
              <span className="block w-6 h-0.5 bg-[#BF6159]"></span>
            </div>
          </button>
        </div>

        {/* Desktop & Tablet Menu */}
        <ul className="hidden md:flex md:flex-row md:items-center md:gap-10 lg:gap-20">
          <li className="text-[#BF6159] font-medium text-[18px] hover:text-[#a54c46] transition">
            <a href="#">Home</a>
          </li>
          <li className="text-[#BF6159] font-medium text-[18px] hover:text-[#a54c46] transition">
            <a href="#">Products</a>
          </li>
          <li className="text-[#BF6159] font-medium text-[18px] hover:text-[#a54c46] transition">
            <a href="#">About</a>
          </li>
          <img src={search} alt="Search" className="w-[18px] h-[18px]" />
          <img src={cart} alt="Cart" className="w-[20px] h-[20px]" />
        </ul>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#D9D9D9] px-6 py-4 space-y-4">
          <ul className="flex flex-col gap-3">
            <li className="text-[#BF6159] font-medium text-[18px]">
              <a href="#">Home</a>
            </li>
            <li className="text-[#BF6159] font-medium text-[18px]">
              <a href="#">Products</a>
            </li>
            <li className="text-[#BF6159] font-medium text-[18px]">
              <a href="#">About</a>
            </li>
          </ul>
          <div className="flex gap-5 pt-2">
            <img src={search} alt="Search" className="w-[18px] h-[18px] " />
            <img src={cart} alt="Cart" className="w-[20px] h-[20px]" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
