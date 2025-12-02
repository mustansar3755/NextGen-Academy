import React, { useState } from "react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";
import { links } from "../data";
import { RxHamburgerMenu } from "react-icons/rx"; // Hamburger Icon
import { IoClose } from "react-icons/io5"; // Close Icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent  fixed top-0 z-50 text-white">
      <div className="max-w-8xl mx-auto px-4 md:px-10 lg:px-20 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="logo shrink-0">
          <img
            className="w-14 h-14 md:w-20 md:h-20 rounded-full"
            src={assets.Logo}
            alt="NextGen Academy Logo"
          />
        </div>

        {/* Search Bar (Hidden on mobile) */}
        <div className="hidden md:block">
          <input
            className="border border-gray-50 focus:border-2 transition-all duration-300 outline-none rounded-md px-4 py-2
            w-[300px] lg:w-[420px]"
            type="text"
            placeholder="Search any book notes..."
          />
        </div>

        {/* Links (Hidden on mobile) */}
        <div className="hidden md:block">
          <ul className="flex text-lg md:text-xl font-semibold items-center gap-6">
            {links.map((link) => (
              <li key={link.id} className="relative group">
                <Link to={link.path} className="hover:text-gray-200 transition">
                  {link.title}
                </Link>

                {/* Underline Hover Effect */}
                <span
                  className="absolute left-0 bottom-[-5px] h-0.5 w-0 bg-white 
          transition-all duration-300 group-hover:w-full"
                ></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {/* Mobile Search Bar */}
          <input
            className="border border-gray-500 rounded-md px-4 py-2 w-full outline-none"
            type="text"
            placeholder="Search any book notes..."
          />

          {/* Mobile Links */}
          <ul className="flex flex-col gap-3 text-lg font-semibold">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className="block py-1 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
