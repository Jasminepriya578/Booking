'use client';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-gray-50 border-t border-gray-200">
      <footer className="w-full bg-gray-50 text-gray-800">
        
        {/* Main Footer Content */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
          
          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            
            {/* Company Info Section */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:col-span-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                <img
                  src="/logo.png"
                  alt="Entrex Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-17"
                />
                
              </div>
              <p className="text-xs sm:text-sm md:text-base      leading-relaxed text-gray-600">
                We are one of the leading Travel operators in South India with our registered office at Madipakkam, Chennai. We serve leading corporate clients in Chennai and Bangalore regions.
              </p>
            </div>

            {/* Company Links Section */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Company
              </h3>
              <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                <li>
                  <a href="/" className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/compliance" className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Compliance Control
                  </a>
                </li>
                <li>
                  <a href="/security" className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Security Control
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Tours
              </h3>
              <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                <li>
                  <a href="/sales-software" className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Sales software
                  </a>
                </li>
                <li>
                  <a href="/features" className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/privacy" className=" text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Privacy and security
                  </a>
                </li>
                <li>
                  <a href="/marketplace" className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="/status" className="text-xs md:text-sm lg:text-base xl:text-lg  text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Status
                  </a>
                </li>
                <li>
                  <a href="/api" className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    API
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
       <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
  <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">
    Contact
  </h3>
  <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
    <div className="flex flex-col gap-1 sm:gap-2">
      <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed">
        ASK Towers 1st floor, 183-184, 3rd Main Rd, Sri Sai Nagar, Thoraipakkam, Tamil Nadu 600096
      </p>
    </div>
    <div className="flex items-center gap-2 sm:gap-3">
      <a href="#" className="hover:opacity-80 transition-opacity duration-200">
        <img 
          src="ic_mail.png" 
          className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        />
      </a>
      <a href="mailto:bookings@entrex.in" className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200">
        bookings@entrex.in
      </a>
    </div>
    <div className="flex items-center gap-2 sm:gap-3">
      <a href="#" className="hover:opacity-80 transition-opacity duration-200">
        <img 
          src="shape.png" 
          className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
        />
      </a>
      <a href="tel:+914449530055" className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200">
        +91 44 4953 0055
      </a>
    </div>
  </div>
</div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-5 md:py-6 lg:py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
              
              {/* Copyright and Links */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 bg-blue-100 px-2 py-1 rounded border border-blue-300">
                  Copyright © 2025 Entrex. All Rights Reserved.
                </p>
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                  <a href="/terms" className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Terms of Service
                  </a>
                  <a href="/privacy-policy" className="text-xs md:text-sm lg:text-base  text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Privacy Policy
                  </a>
                  <a href="/cookies" className="text-xs md:text-sm lg:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Cookies
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                  <img 
                    src="/Twitter (1).png" 
                    alt="Twitter" 
                   className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                  <img 
                    src="/Facebook.png" 
                    alt="Facebook" 
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                  <img 
                    src="/Linkedin.png" 
                    alt="LinkedIn" 
                   className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9"
                  />
                </a>
              </div>

            </div>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;