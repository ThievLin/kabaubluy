import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedin, FaTelegram, FaInstagram, FaAppStore, FaGooglePlay, FaDotCircle } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-blue-600 text-white">
      <div className="flex flex-col md:flex-row items-start">
        <div className="flex flex-col sm:flex-row justify-between m-auto space-y-4 md:space-y-16 space-x-2 md:space-x-8 lg:space-x-24 py-10 md:py-12 lg:py-16">
          {/* Logo and Introduction */}
          <div className="space-y-4">
            <Image src="/https://kbl.bsi.com.kh/images/logo/logo-removebg-preview.png" alt="Logo" width={100} height={100} className="w-12 h-12 mr-2" />
            <h1 className="text-xl font-bold">KabaubLuy</h1>
            <p className="text-muted-foreground mb-6 md:mb-0 max-w-sm">
              Your trusted digital wallet partner that helps you save more.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h2 className="font-semibold">Useful Links</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <a href="/about" className="flex items-center hover:text-primary hover:underline">
                  <FaDotCircle className="mr-2" /> About us
                </a>
              </li>
              <li>
                <a href="/screen" className="flex items-center hover:text-primary hover:underline">
                  <FaDotCircle className="mr-2" /> Screens
                </a>
              </li>
              <li>
                <a href="/partner-store" className="flex items-center hover:text-primary hover:underline">
                  <FaDotCircle className="mr-2" /> Become our partner store
                </a>
              </li>
              <li>
                <a href="/kbl-member" className="flex items-center hover:text-primary hover:underline">
                  <FaDotCircle className="mr-2" /> Become our kbl member
                </a>
              </li>
              <li>
                <a href="/contact" className="flex items-center hover:text-primary hover:underline">
                  <FaDotCircle className="mr-2" /> Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Connect with */}
          <div className="space-y-4">
            <h2 className="font-semibold">Connect with us</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <a href="#" className="flex items-center hover:text-primary hover:underline">
                  <FaFacebook className="mr-2" /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-primary hover:underline">
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-primary hover:underline">
                  <FaTelegram className="mr-2" /> Telegram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-primary hover:underline">
                  <FaInstagram className="mr-2" /> Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div className="space-y-4">
            <h2 className="font-semibold">Download</h2>
            <ul className="text-muted-foreground space-y-2">
              <li className='hover:underline'>
                <a href="#" className="flex items-center hover:text-primary">
                  <FaAppStore className="mr-2" /> Download App Store
                </a>
              </li>
              <li className='hover:underline'>
                <a href="#" className="flex items-center hover:text-primary">
                  <FaGooglePlay className="mr-2" /> Download Google Play
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-start px-4 md:px-16 mt-8 bg-gray-700 py-4 text-gray-100">
        <span>© 2024 Technovation BSI. All Rights Reserved</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/term-condition" className="hover:underline">Terms & Conditions</a>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
