import React from "react";
import hero from "../assets/hero-image-consulting.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-[20px] md:px-[100px] pt-[120px] md:pt-[170px] ">
      <div className="font-Open space-y-5 md:space-y-10 w-full md:max-w-[800px]">
        
        <h1 className="text-red-700 text-[32px] md:text-6xl md:text-6xl font-bold ">
          E-Report Digitalz
        </h1>
        <p className="text-xl md:text-[28px] text-gray-700 leading-7 md:leading-11 pb-3 md:pb-6">
          Welcome to your number one stop for accurate information on brands,
          deals, products and services as well as legitimate Making-Money-Online
          programs.
        </p>
        <a
          href="#services"
          className="text-white font-semibold bg-red-600 px-5 py-3 rounded-md"
        >
          Our services
        </a>
      </div>

      <div className="w-full">
        <img
          src={hero}
          alt="hero-image"
          className="bg-white shadow-[0_10px_20px_rgba(255,0,0,0.15)] backdrop-blur-[25px] rounded-[30px] w-full md:max-w-[700px] md:h-[400px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
