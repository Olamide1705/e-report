import React, { useState } from "react";
import logo from "../assets/e-reportlogo.jpg";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
    <div className="fixed z-50 bg-white w-full">
      <div className="hidden md:flex items-center justify-between border border-gray-300 border-l-0 border-r-0 border-t-0 w-full py-2 md:px-15 lg:px-25">
        <div>
          <img src={logo} alt="" className="w-15 h-15 rounded-md mr-20" />
        </div>
        <div className="flex gap-10 font-normal text-base md:text-[18px] font-Open">
          <a href="#about" className="hover:text-blue-800">About</a>
          <a href="#services" className="hover:text-blue-800">Services</a>
          <a href="#process" className="hover:text-blue-800">Process</a>
        </div>
        <div>
        <a href='mailto:dasebitmoney@gmail.com' className="bg-red-600 px-5 py-2 rounded-md text-white font-semibold">Contact Us</a>
      </div>
      </div>


      <div className="md:hidden flex items-center justify-between w-full py-2 px-3 border border-l-0 border-r-0 border-t-0 border-gray-300">
        <div className="">
          <img src={logo} alt="" className="w-15 h-13 rounded-md mr-20" />
        </div>

        <button
                onClick={() => setSidebarOpen(true)}
                className="px-2 py-0.5 border border-gray-300 rounded-md text-gray-500 text-2xl text-center"
              >
                ☰
        </button>
        </div>    
    </div>

    {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50"
        onClick={() => setSidebarOpen(false)}
        />
    )}

    <aside className=
    {`fixed top-0 w-full bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out
    ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
    `}
    >
    <div className="md:hidden flex w-full justify-between px-3 py-2">
     <div className="">
          <img src={logo} alt="" className="w-15 h-13 rounded-md mr-20" />
        </div>

        <button className="text-gray-500 text-xl"
        onClick={() => setSidebarOpen(false)}>
        ✕
        </button>
    </div>
    <nav className="flex flex-col items-center justify-center space-y-6 text-md font-Open pb-10">
          <a href="#about" 
          className="block hover:text-blue-800" 
          onClick={() => setSidebarOpen(false)}>
            About
            </a>

          <a href="#services" 
          className=" block hover:text-blue-800"
          onClick={() => setSidebarOpen(false)}>
            Services
            </a>

          <a href="#process" 
          className="hover:text-blue-800"
          onClick={() => setSidebarOpen(false)}>
            Process</a>
        
        <a href='mailto:dasebitmoney@gmail.com' 
        className="bg-red-500 px-5 py-2 rounded-md text-white text-center font-semibold w-full max-w-[130px]"
        onClick={() => setSidebarOpen(false)}
        >Contact Us</a>
     

    </nav>
    
    </aside>
    
    </div>
   
  );
};

export default NavBar;
