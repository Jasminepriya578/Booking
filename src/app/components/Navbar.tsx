'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from "next/navigation";
interface NavbarProps {
  className?: string;
  textColor?:string;
}

const Navbar = ({ className = "",textColor = "text-white" }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`w-full ${className}  px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 lg:px-12 lg:py-5 xl:px-16 xl:py-6`}>
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-4">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={50} 
            height={50}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
          />
        </div>


        <div className={`hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 ${textColor}`}>
          
             <div className={`hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 ${textColor}`}>
          <button
            onClick={() => router.push('/aboutus')}
            className="text-xs md:text-sm lg:text-base xl:text-lg hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            About Us
          </button>
        </div>
          
          <Link 
            href="/services"
            className="text-xs md:text-sm lg:text-base xl:text-lghover:text-blue-600 transition-colors duration-200 font-medium"
          >
            Services
          </Link>
          
          <Link 
            href="/tourpackages"
            className="text-xs md:text-sm lg:text-base xl:text-lg hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            Tour Packages
          </Link>
          
          <Link 
            href="/luxurycarrentals"
            className="text-xs md:text-sm lg:text-base xl:text-lg hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            Luxury Car Rentals
          </Link>
          
          <Link 
            href="/clients"
            className="text-xs md:text-sm lg:text-base xl:text-lg hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            Clients
          </Link>
          
          <Link 
            href="/contactus"
            className="text-xs md:text-sm lg:text-base xl:text-lg hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            Contact Us
          </Link>
          
        </div>

        <div className="sm:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (

              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
      </div>


      <div className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen 
          ? 'max-h-96 opacity-100 mt-4' 
          : 'max-h-0 opacity-0 mt-0'
      }`}>
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
          
          <Link 
            href="/aboutus"
            onClick={closeMenu}
            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
          >
            About Us
          </Link>
          
          <Link 
            href="/services"
            onClick={closeMenu}
            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
          >
            Services
          </Link>
          
          <Link 
            href="/tourpackages"
            onClick={closeMenu}
            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
          >
            Tour Packages
          </Link>
          
          <Link 
            href="/luxurycarrentals"
            onClick={closeMenu}
            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
          >
            Luxury Car Rentals
          </Link>
          
          <Link 
            href="/clients"
            onClick={closeMenu}
            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
          >
            Clients
          </Link>
          
          <Link 
            href="/contactus"
            onClick={closeMenu}
            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
          >
            Contact Us
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;