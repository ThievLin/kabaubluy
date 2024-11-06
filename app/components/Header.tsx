'use client'; // This directive ensures the component is client-side

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaBars, FaTimes, FaApple } from 'react-icons/fa'; // Importing icons

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  const handleScroll = () => {
    // Check if the page has been scrolled down by 100px
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Check for window resize to auto-close the mobile menu
  const handleResize = () => {
    if (window.innerWidth >= 1000) {
      setIsMenuOpen(false); // Close menu if screen size is 1000px or more
    }
  };

  // Attach the scroll event listener and window resize listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize); // Listen for window resize

    // Run the function once to close the menu if needed when the component mounts
    handleResize();

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`bg-gradient-to-r from-blue-600 to-blue-500 py-4 px-4 md:px-8 lg:px-12 flex items-center justify-between transition-all duration-300 ${isSticky ? 'sticky top-0 z-20 shadow-lg' : ''}`}>
      <div className="flex items-center">
        {/* Clickable logo and text */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="logo" width={200} height={200} className="h-8 w-8 mr-2" />
          <span className="text-white font-bold text-xl">KabaubLuy</span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
      </button>

      {/* Overlay Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-20 bg-blue-500 flex flex-col items-center justify-center"> {/* Change to blue background */}
          <div className="items-center mb-4">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="logo" width={200} height={200} className="h-8 w-8 mr-2" />
              <span className="text-white font-bold text-xl">KabaubLuy</span>
            </Link>
          </div>
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes className="h-6 w-6" />
          </button>
          <nav className="flex flex-col items-center space-y-4">
            <a href="/about" className="text-white hover:text-white/80">About us</a>
            <a href="/screen" className="text-white hover:text-white/80">Screens</a>
            <div
              className="relative flex items-center"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <a href="#" className="text-white hover:text-white/80 flex items-center">
                Become our member <FaChevronDown className="ml-2" />
              </a>
              {isDropdownOpen && (
                <div className="absolute left-0 top-4 mt-2 bg-white shadow-lg rounded-md py-2 z-10 w-52">
                  <a href="/partner-store" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Be our partner store</a>
                  <a href="/kbl-member" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Be our KBL member</a>
                </div>
              )}
            </div>
            <a href="/career" className="text-white hover:text-white/80">Careers</a>
            <a href="/contact" className="text-white hover:text-white/80">Contact us</a>
          </nav>
        </div>
      )}

      {/* Desktop Links */}
      <nav className={`hidden lg:flex items-center space-x-6`}>
        <a href="/about" className="text-white hover:text-white/80">About us</a>
        <a href="/screen" className="text-white hover:text-white/80">Screens</a>
        {/* Dropdown for 'Become our member' with an icon */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <a href="#" className="text-white hover:text-white/80 flex items-center">
            Become our member <FaChevronDown className="ml-2" />
          </a>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md py-2 z-10 w-52">
              <a href="/partner-store" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Be our partner store</a>
              <a href="/kbl-member" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Be our KBL member</a>
            </div>
          )}
        </div>
        <a href="/career" className="text-white hover:text-white/80">Careers</a>
        <a href="/contact" className="text-white hover:text-white/80">Contact us</a>
      </nav>

      <a href="#" className="bg-black text-tiny text-white px-4 py-1 rounded-lg hidden lg:flex items-center">
      <FaApple className="mr-2 h-8 w-8" />
      Download on the 
      <br />
      App Store
      </a>
    </header>
  );
};

export default Header;
