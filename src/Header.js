import React from "react";
import { Menu } from "@headlessui/react";
import "remixicon/fonts/remixicon.css"

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white text-black px-6 py-0">
      {/* Left Corner: Company Name */}
      <div className="text-lg font-bold">MyCompany</div>

      {/* Middle: Navigation Links */}
      <nav className="space-x-6">
        <a href="#home" className="hover:text-yellow-400">Home</a>
        <a href="#about" className="hover:text-yellow-400">About Us</a>
        <a href="#services" className="hover:text-yellow-400">Service Page</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </nav>

      {/* Right Corner: Person Icon */}
        <div className="w-7 h-7  rounded-full bg-gray-200 flex items-center space-x-2 justify-center">
          <i className="ri-user-line text-gray-800 text-2xl"></i>
          {/* <span className="text-sm font-bold">P</span> */}
      </div>
    </header>
  );
};

export default Header;
