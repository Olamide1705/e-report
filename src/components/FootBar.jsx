import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-50 w-full bg-blue-600">
      <div className="flex items-center justify-between border-t border-gray-300 w-full py-2 px-4 md:px-6 lg:px-10">
        
        {/* Navigation Links */}
        <div className="flex gap-8 font-normal text-white text-sm md:text-base">
          <a href="#" className="hover:text-blue-200">About</a>
          <a href="#" className="hover:text-blue-200">Services</a>
          <a href="#" className="hover:text-blue-200">Process</a>
          <a href="#" className="hover:text-blue-200">Pricing</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://web.facebook.com/ereportdigitalz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 bg-white p-2 rounded-md text-xl"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/ereportdigitalz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 bg-white p-2 rounded-md text-xl"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.tiktok.com/@ereportdigitalz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 bg-white p-2 rounded-md text-xl"
          >
            <SiTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
