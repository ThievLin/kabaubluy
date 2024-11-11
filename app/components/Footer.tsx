import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaTelegram, FaInstagram, FaAppStore, FaGooglePlay, FaDotCircle } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-600 shadow-sm">
      <div className="flex flex-col md:flex-row items-start">
        <div className="flex flex-col sm:flex-row justify-between m-auto space-y-4 md:space-y-16 space-x-2 md:space-x-8 lg:space-x-24 md:px-4 py-10 md:py-12 lg:py-16">
          {/* Logo and Introduction */}
          <div className="">
            <Image src="/images/logofoot.png" alt="Logo" width={100} height={100} className="w-22 h-16 ml-3" />
            <h1 className="text-xl font-bold text-[#FF6608]">KabaubLuy</h1>
            <p className="text-gray-600 md:mb-0 max-w-xs mt-4">
              Your trusted digital wallet partner that helps you save more.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h2 className="font-semibold">Useful Links</h2>
            <ul className="text-gray-600 space-y-2">
              <li>
                <Link href="/about" className="flex items-center hover:text-primary hover:underline">
                  <FaDotCircle className="mr-2" /> About us
                </Link>
              </li>
              <li>
                <Link href="/screen" className="flex items-center hover:text-primary hover:underline">
                  <FaDotCircle className="mr-2" /> Screens
                </Link>
              </li>
              <li>
                <Link href="/partner-store" className="flex items-center hover:text-primary hover:underline">
                  <FaDotCircle className="mr-2" /> Become our partner store
                </Link>
              </li>
              <li>
                <Link href="/kbl-member" className="flex items-center hover:text-primary hover:underline">
                  <FaDotCircle className="mr-2" /> Become our kbl member
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center hover:text-primary hover:underline">
                  <FaDotCircle className="mr-2" /> Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect with */}
          <div className="space-y-4">
            <h2 className="font-semibold">Connect with us</h2>
            <ul className="text-gray-600 space-y-2">
              <li>
                <Link href="#" className="flex items-center hover:text-primary hover:underline">
                  <FaFacebook className="mr-2" /> Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:text-primary hover:underline">
                  <FaLinkedin className="mr-2" /> LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:text-primary hover:underline">
                  <FaTelegram className="mr-2" /> Telegram
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center hover:text-primary hover:underline">
                  <FaInstagram className="mr-2" /> Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div className="space-y-4">
            <h2 className="font-semibold">Download</h2>
            <ul className="text-gray-600 space-y-2">
              <li className='hover:underline'>
                <Link href="#" className="flex items-center hover:text-primary">
                  <FaAppStore className="mr-2" /> Download App Store
                </Link>
              </li>
              <li className='hover:underline'>
                <Link href="#" className="flex items-center hover:text-primary">
                  <FaGooglePlay className="mr-2" /> Download Google Play
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-start px-4 md:px-16 mt-8 bg-[#223adb] py-4 text-gray-100">
        <span>© 2024 Technovation BSI. All Rights Reserved</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="/term-condition" className="hover:underline">Terms & Conditions</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
