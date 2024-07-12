import React, { useState } from "react";
import logo from "../assets/logo.dark.svg";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);
  const toggleNavbar = () => {
    setMobileMenu((mobileMenuOpen) => !mobileMenuOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center px-10 lg:px-20">
          {/* logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">NEPTOO</span>
          </div>
          <ul className="hidden lg:flex space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          {/* 移动端菜单 */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
