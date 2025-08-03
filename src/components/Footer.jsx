import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="font-Open w-full py-0 md:py-20 bg-blue-700">
      <div className="flex flex-col md:flex-row items-center justify-between gap-20 w-full py-2 px-4 md:px-6 lg:px-10 pb-10">
        
        <div className="flex-1"></div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-center gap-8 font-normal text-white text-sm md:text-[18px]">
          <a href="#about" className="hover:text-blue-200">About</a>
          <a href="#services" className="hover:text-blue-200">Services</a>
          <a href="#process" className="hover:text-blue-200">Process</a>
          <a href="#pricing" className="hover:text-blue-200">Pricing</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-end flex-1 space-x-4">
          <a
            href="https://web.facebook.com/ereportdigitalz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 bg-white p-2 rounded-md text-xl"
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
            className="text-blue-600 bg-white p-2 rounded-md text-xl"
          >
            <SiTiktok />
          </a>
        </div>
      </div>

      <div className="h-1 w-full border border-white border-t-0 border-l-0 border-r-0"></div>
   
    <div className='pt-10 pb-10'>
        <p className='text-[12px] md:text-[18px] text-white text-normal text-center'>@2025 E-Report Digitalz, Inc. All rights reserved.</p>
    </div>
    </footer>
  );
};

export default Footer;
