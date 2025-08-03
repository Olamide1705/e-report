import React from 'react';
import contactUs from '../assets/contact-us-bg-image.webp'

const ContactUs = () => {
  return (
    <>
    <div className="relative">
  
  <div className="w-full h-[500px] md:h-[700px] overflow-hidden">
    <img src={contactUs} alt="Contact Us" className="object-cover w-full h-full" />
  </div>

  
  <div className="absolute top-0 left-0 w-full h-full px-5 md:px-[100px] flex items-center justify-center">
    <div className="font-Open bg-white space-y-2 px-5 md:px-20 py-10 md:py-12 w-full md:max-w-3xl rounded-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-[15px]">
      <h1 className="text-3xl md:text-5xl font-bold pb-5">Contact Us</h1>

      <h4 className="text-base md:text-[20px] font-semibold">ADDRESS</h4>
      <p className="text-sm md:text-base pb-5 leading-7 md:leading-8">
        1600 Amphitheatre Parkway,<br />
        Mountain View,<br />
        CA 94043, USA
      </p>

      <h4 className="text-base md:text-[20px] font-semibold">EMAIL</h4>
      <p className="text-sm md:text-base pb-10">dasebitmoney@gmail.com</p>

      <div>
        <a
          href="mailto:dasebitmoney@gmail.com"
          className="bg-red-600 px-5 py-2 rounded-md text-white font-semibold"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default ContactUs