"use client";

import React, { useState } from "react";
import { Link } from "react-scroll";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-navbar-color w-full">
      <div className="  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/">
                <span className="text-font-color-rgb font-bold text-2xl">
                  ivanurra<span className="text-green-primary">.dev</span>
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:block ml-auto">
            <div className="flex items-center space-x-4">
              <Link
                className="text-font-color-rgb hover:text-green-primary px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="text-green-primary">01. </span>
                About
              </Link>
              <Link
                className="text-font-color-rgb hover:text-green-primary px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="text-green-primary">02. </span>
                Jobs
              </Link>
              <Link
                className="text-font-color-rgb hover:text-green-primary px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="text-green-primary">03. </span>
                Portfolio
              </Link>
              <Link
                className="text-font-color-rgb hover:text-green-primary px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="text-green-primary">04. </span>
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="text-font-color-rgb hover:text-green-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="text-green-primary">01. </span>
              About
            </Link>
            <Link
              className="text-font-color-rgb hover:text-green-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="text-green-primary">02. </span>
              Jobs
            </Link>
            <Link
              className="text-font-color-rgb hover:text-green-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="text-green-primary">03. </span>
              Portfolio
            </Link>
            <Link
              className="text-font-color-rgb hover:text-green-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="text-green-primary">04. </span>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};