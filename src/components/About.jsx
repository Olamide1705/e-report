import React from "react";
import logo1 from "../assets/logo-1.png";
import logo2 from "../assets/logo-2.png";
import logo3 from "../assets/logo-3.png";
import logo4 from "../assets/logo-4.png";

const About = () => {
  return (
    <section id="about">
      <div className="font-Open px-[20px] md:px-[100px] pt-[40px]">
        <div className="flex flex-col md:flex-row gap-15 pt-10 pb-20">
          <div className="flex flex-col space-y-5">
            <h1 className="text-center text-2xl md:text-[26px] lg:text-5xl font-bold pb-2 md:pb-10">
              Boost Your Business with Constant Contact: Your Ultimate Marketing
              Companion
            </h1>
            <a
              href="https://constant-contact.ibfwsl.net/zNPOq7"
              className="text-white text-center font-semibold bg-red-600 px-5 py-3 w-full md:max-w-[150px] rounded-md"
            >
              FREE TRIAL
            </a>
            <p className="italic text-sm md:text-base">
              Disclosure: This post contains affiliate links, and I may earn a
              commission if you sign up for Constant Contact through my links,
              at no extra cost to you. Thank you for supporting my content!
            </p>
          </div>
          <div className="flex flex-col space-y-5 text-sm md:text-base lg:text-[18px] text-justify">
            <p>
              With{" "}
              <span className="font-semibold italic">Constant Contact,</span>{" "}
              you can create effective email marketing and online marketing
              campaigns to meet your business goals.
            </p>
            <p>
              Constant Contact{" "}
              <span className="font-semibold">
                is a cloud-based digital marketing platform focused on email and
                social media marketing, specifically designed for small
                businesses.
              </span>
            </p>
            <p>
              {" "}
              It offers a range of tools to help businesses build email lists,
              automate campaigns, manage social media, and more. It is known for
              its ease of use and is a popular choice for businesses looking to
              simplify their marketing efforts.
            </p>
            <p>Start your FREE trial today!</p>
            <a
              href="https://constant-contact.ibfwsl.net/zNPOq7"
              className="text-white text-center font-semibold bg-red-600 px-5 py-3 rounded-md w-full md:max-w-[150px]"
            >
              SIGN UP
            </a>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 py-7 md:py-10 flex flex-col md:flex-row gap-8 md:gap-[80px] items-center px-10">
        <h3 className="font-Open font-semibold text-[18px] text-center md:text-left md:text-[20px] w-[220px]">
          Our Clients:
        </h3>
        <div className="flex flex-col md:flex-row gap-9 md:gap-[120px]">
          <div className="flex items-center justify-center">
            <img
              src={logo1}
              alt="logo1"
              className="h-auto max-h-[25px] md:max-h-[60px] w-auto"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={logo2}
              alt="logo2"
              className="h-auto max-h-[25px] md:max-h-[60px] w-auto "
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={logo3}
              alt="logo3"
              className="h-auto max-h-[28px] md:max-h-[60px] w-auto "
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={logo4}
              alt="logo4"
              className="h-auto max-h-[25px] md:max-h-[60px] w-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
