"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainFooter from "../components/mainFooter";
import { StarIcon } from "@heroicons/react/24/solid";


const About = () => {

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
         <main className="flex-grow">
         <div className="min-h-screen bg-cover bg-center bg-white" >
       <Navbar className="bg-white" textColor="text-black" />
       <div className="grid grid-cols-4 gap-4">
<div className=" col-span-2 bg-cover  p-10 text-black">

  <div className="flex flex-col   ">
  <h3 className="font-bold semibold text-3xl ">India’s Premier <br></br>Chauffeur  Partner forv<br></br> Corporates & Expats</h3>
  <p className="mt-10 ">
ENTREX delivers reliable, professional, and tech-enabled ground transportation <br></br>services across India. Backed by premium vehicles, multilingual chauffeurs, and<br></br> 24×7 operational support, we’re the preferred choice for corporates, expats, and <br></br>high-value travelers seeking more than just a ride.
</p>
<div className="flex gap-7 mt-10">
   <button className="mt-4 bg-gradient-to-r from-[#ED2628]/90 to-[#F3AA45]/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition">
Explore Our Services
</button>
   <button className="mt-4 bg-black text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition">
Talk to Our Team
</button>
</div>

</div>
</div>
<div className="relative  col-span-2 left-[100px]">
  <img src="/businesswoman.png"  
  height={500}
        width={500}></img>
</div>
</div>

</div>
        </main>
          <main className="w-full bg-white text-black py-4 px-2 sm:px-4 lg:px-6 xl:px-8">
          <div className="grid grid-cols-4 gap-4">

  <div className="col-span-2 ">
    <img src="/logo2.png" 
      height={600}
        width={600}
    ></img>
  </div>

  <div className="col-span-2  ">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#ED2628]/90 to-[#F3AA45]/90 bg-clip-text text-transparent mb-10">
 Our Story
</h2>
<p className="mb-4">
  Founded in 2015 with a mission to transform business travel in India, ENTREX <br />
  started as a small operation in Chennai focused on consistent, premium chauffeur<br />
  service. Over the years, we’ve evolved into a pan-India enterprise mobility partner,<br />
  serving MNCs, diplomats, international consultants, and expats with personalized care and operational excellence.<br />
</p>

<span>
  <p className="mt-4">
    We don’t just move people. We manage experiences — using technology,<br />
    compliance, and hospitality to create seamless journeys across cities and states.
  </p>
</span>
</div>

  </div>
        </main>
         <section className="bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              <div className="bg-white rounded-xl border border-orange-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Our Vision</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    To become the most trusted and technologically advanced ground mobility partner for corporates and expats.
                  </p>
                  
                  <div className="space-y-2 sm:space-y-3 w-full">
                    <div className="bg-gray-50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700">
                      Setting new standards in service
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700">
                      Expanding with smart, scalable systems
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700">
                      Earning trust through consistency
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-orange-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
                    </svg>
                  </div>
  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Our Mission</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    To deliver consistent, secure, and high-quality chauffeur-driven experiences through:
                  </p>
           
                  <div className="space-y-2 sm:space-y-3 w-full">
                    <div className="bg-gray-50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700">
                      Verified professionals
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700">
                      A modern, compliant fleet
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700">
                      A technology-first approach to mobility, safety, and customer support
                    </div>
                  </div>
                </div>
              </div>

        
              <div className="bg-white rounded-xl border border-orange-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow md:col-span-2 xl:col-span-1">
                <div className="flex flex-col items-start">
            
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 2L3.86 6.91L2 12L3.86 17.09L6 22L12 20L18 22L20.14 17.09L22 12L20.14 6.91L18 2L12 4L6 2Z"/>
                    </svg>
                  </div>
                           <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Our Core Values</h3>
        
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    We operate with principles that drive excellence in every journey:
                  </p>
            
                  <div className="space-y-2 sm:space-y-3 w-full">
                    <div className="bg-gray-50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700">
                      Lead with integrity and professionalism
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700">
                      Prioritize safety, transparency, and reliability
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700">
                      Embrace innovation to improve every ride
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
<section className="bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-black">
  <div className="flex flex-col justify-center items-center gap-4 mb-12">
    <p className="text-green-600 font-medium text-sm uppercase tracking-wide">Our Team</p>
    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">Meet the Founders</h3>
    <p className="text-gray-600 text-center">Vision-Driven. Execution-Focused.</p>
  </div>
  
  <div className="flex justify-center">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-4xl">

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm mx-auto lg:mx-0">
        <div className="bg-yellow-400 h-80 overflow-hidden">
          <img 
            src="/ent1.png" 
            alt="Mugundhan Sankar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h4 className="text-xl font-bold text-gray-900 mb-2">Mugundhan Sankar</h4>
          <p className="text-sm text-gray-600 mb-4">Founder & Managing Director</p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            With 15+ years in logistics and operations, [Name] built ENTREX to redefine Indian ground transport with global standards and Indian values. His vision continues to guide the company's expansion and operational discipline.
          </p>
       
          <div className="flex gap-3">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm mx-auto lg:mx-0">
        <div className="bg-red-500 h-80 flex items-end justify-center p-4">
          <img 
            src="/ent2.png" 
            alt="Balaji A"
            className="w-64 h-72 object-cover object-top"
          />
        </div>
       
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-xl font-bold text-gray-900">Balaji A</h4>
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">526 × 430</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">Director - Strategy & Partnerships</p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Focused on client growth and digital transformation, [Name] leads ENTREX's enterprise engagements, tech roadmap, and innovation-driven service model.
          </p>
    
          <div className="flex gap-3">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
<div className="grid grid-cols-4  items-center mt-20">

  <div className="col-span-2 ">
    <h3 className="text-3xl font-bold flex justify-center items-center">Join Our Team</h3>
  </div>

  <div className="col-span-2 space-y-4 ">
    <p>
      We believe it takes great people to make a great product. That’s why we hire 
      not only the perfect professional fits, but people who embody our company values.
    </p>
    <button className=" px-4 py-2 rounded hover:bg-green-700 transition text-green-600">
      Explore Integrations
    </button>
  </div>
</div>

</section>

<main className="w-full bg-white text-black py-4 px-2 sm:px-4 lg:px-6 xl:px-8">
  <div className="w-full bg-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
    <div className="text-center mb-16 relative z-10">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#ED2628]/90 to-[#F3AA45]/90 bg-clip-text text-transparent mb-4">
        ENTREX - Our Journey
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#ED2628]/90 to-[#F3AA45]/90 mx-auto rounded-full"></div>
    </div>

    <div className="relative w-full h-[600px] mx-auto max-w-6xl px-4">
    
      <div 
        className="absolute transform transition-all duration-300 hover:scale-110 group cursor-pointer"
        style={{ left: "5%", top: "60%" }}
      >
        <div className="absolute -top-8 left-0 w-20 text-center">
          <span className="text-2xl font-bold text-gray-800">2017</span>
        </div>
        
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg shadow-lg transform perspective-1000">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white bg-opacity-30 rounded transform rotate-45"></div>
            </div>
          </div>
          <div className="absolute top-0 left-20 w-4 h-20 bg-gradient-to-b from-green-400 to-teal-500 opacity-70 transform skew-y-12 origin-left rounded-r-lg"></div>
          <div className="absolute -top-2 left-2 w-20 h-4 bg-gradient-to-r from-green-400 to-teal-500 opacity-90 transform -skew-x-12 origin-bottom rounded-t-lg"></div>
        </div>

        <div className="absolute top-24 left-0 w-64 bg-white p-3 rounded-lg shadow-md border">
          <p className="text-sm font-semibold text-gray-800">ENTREX founded with a mission to redefine corporate transport services.</p>
        </div>
      </div>

   
      <div 
        className="absolute transform transition-all duration-300 hover:scale-110 group cursor-pointer"
        style={{ left: "35%", top: "75%" }}
      >
        <div className="absolute -top-8 left-0 w-20 text-center">
          <span className="text-2xl font-bold text-gray-800">2018</span>
        </div>
        
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg shadow-lg transform perspective-1000">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white bg-opacity-30 rounded transform rotate-45"></div>
            </div>
          </div>
          <div className="absolute top-0 left-20 w-4 h-20 bg-gradient-to-b from-green-500 to-blue-500 opacity-70 transform skew-y-12 origin-left rounded-r-lg"></div>
          <div className="absolute -top-2 left-2 w-20 h-4 bg-gradient-to-r from-green-500 to-blue-500 opacity-90 transform -skew-x-12 origin-bottom rounded-t-lg"></div>
        </div>


        <div className="absolute top-24 left-0 w-64 bg-white p-3 rounded-lg shadow-md border">
          <p className="text-sm font-semibold text-gray-800">Recognized as one of the fastest-growing mobility startups in South India.</p>
        </div>
      </div>


      <div 
        className="absolute transform transition-all duration-300 hover:scale-110 group cursor-pointer"
        style={{ left: "15%", top: "25%" }}
      >
       
        <div className="absolute -top-8 left-0 w-20 text-center">
          <span className="text-2xl font-bold text-gray-800">2019</span>
        </div>
        
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-lg transform perspective-1000">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white bg-opacity-30 rounded transform rotate-45"></div>
            </div>
          </div>
          <div className="absolute top-0 left-20 w-4 h-20 bg-gradient-to-b from-purple-400 to-purple-600 opacity-70 transform skew-y-12 origin-left rounded-r-lg"></div>
          <div className="absolute -top-2 left-2 w-20 h-4 bg-gradient-to-r from-purple-400 to-purple-600 opacity-90 transform -skew-x-12 origin-bottom rounded-t-lg"></div>
        </div>

        <div className="absolute top-24 left-0 w-64 bg-white p-3 rounded-lg shadow-md border">
          <p className="text-sm font-semibold text-gray-800">Registered as Pro Entrex Logistics Pvt. Ltd. to scale nationwide operations.</p>
        </div>
      </div>

      <div 
        className="absolute transform transition-all duration-300 hover:scale-110 group cursor-pointer"
        style={{ left: "45%", top: "25%" }}
      >
  
        <div className="absolute -top-8 left-0 w-20 text-center">
          <span className="text-xl font-bold text-gray-800">2020-21</span>
        </div>
        
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-lg transform perspective-1000">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white bg-opacity-30 rounded transform rotate-45"></div>
            </div>
          </div>
          <div className="absolute top-0 left-20 w-4 h-20 bg-gradient-to-b from-purple-500 to-purple-700 opacity-70 transform skew-y-12 origin-left rounded-r-lg"></div>
          <div className="absolute -top-2 left-2 w-20 h-4 bg-gradient-to-r from-purple-500 to-purple-700 opacity-90 transform -skew-x-12 origin-bottom rounded-t-lg"></div>
        </div>

    
        <div className="absolute top-24 left-0 w-64 bg-white p-3 rounded-lg shadow-md border">
          <p className="text-sm font-semibold text-gray-800">Successfully navigated the COVID-19 pandemic, increasing client servicing amidst crisis.</p>
        </div>
      </div>


      <div 
        className="absolute transform transition-all duration-300 hover:scale-110 group cursor-pointer"
        style={{ left: "65%", top: "65%" }}
      >
        
        <div className="absolute -top-8 left-0 w-20 text-center">
          <span className="text-2xl font-bold text-gray-800">2022</span>
        </div>
        
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-lg transform perspective-1000">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white bg-opacity-30 rounded transform rotate-45"></div>
            </div>
          </div>
          <div className="absolute top-0 left-20 w-4 h-20 bg-gradient-to-b from-purple-600 to-pink-600 opacity-70 transform skew-y-12 origin-left rounded-r-lg"></div>
          <div className="absolute -top-2 left-2 w-20 h-4 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90 transform -skew-x-12 origin-bottom rounded-t-lg"></div>
        </div>

        <div className="absolute top-24 left-0 w-64 bg-white p-3 rounded-lg shadow-md border">
          <p className="text-sm font-semibold text-gray-800">Expanded to become a PAN India corporate transport solutions provider.</p>
        </div>
      </div>

      <div 
        className="absolute transform transition-all duration-300 hover:scale-110 group cursor-pointer"
        style={{ left: "78%", top: "35%" }}
      >
        <div className="absolute -top-8 left-0 w-20 text-center">
          <span className="text-2xl font-bold text-gray-800">2024</span>
        </div>
        
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-lg transform perspective-1000">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white bg-opacity-30 rounded transform rotate-45"></div>
            </div>
          </div>
          <div className="absolute top-0 left-20 w-4 h-20 bg-gradient-to-b from-orange-400 to-red-500 opacity-70 transform skew-y-12 origin-left rounded-r-lg"></div>
          <div className="absolute -top-2 left-2 w-20 h-4 bg-gradient-to-r from-orange-400 to-red-500 opacity-90 transform -skew-x-12 origin-bottom rounded-t-lg"></div>
        </div>

        <div className="absolute top-24 left-0 w-64 bg-white p-3 rounded-lg shadow-md border">
          <p className="text-sm font-semibold text-gray-800">Established as a prime partner for enterprise clients, with services extended to Tier 2 cities across India.</p>
        </div>
      </div>

      <div className="absolute top-8 right-8 transform hover:scale-110 transition-transform duration-300">
        <div className="relative">
          <div className="w-12 h-16 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full shadow-lg">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
            </div>
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-3 border-transparent border-t-purple-700"></div>
        </div>
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="50%" stopColor="#d1d5db" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>
        </defs>
        <path
          d="M 80 300 Q 200 200, 400 180 T 800 350"
          stroke="url(#pathGradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10,5"
          className="animate-pulse"
        />
      </svg>
    </div>

   
    <div className="absolute top-1/4 left-10 w-6 h-6 bg-purple-300 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }}></div>
    <div className="absolute top-1/3 right-20 w-4 h-4 bg-blue-300 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1s' }}></div>
    <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-green-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '2s' }}></div>
  </div>
</main>

<section className="bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-black">
  <h3 className="flex justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
    What Our Clients Say
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center mt-10 md:mt-20 px-20">
    <div className="w-80 h-80 max-w-sm rounded-lg shadow p-6 border flex flex-col justify-between">
      <p>
        “Reliable, courteous, and always on time. ENTREX
        <br /> is more than a transport
        <br />
        provider—they’re our mobility partner.”
      </p>
      <div className="mt-6">
        <p>
          Ramesh Iyer
          <br />
          Cricket Enthusiast, Mumbai
        </p>
      </div>
      <div className="flex items-center gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
    </div>

    <div className="w-80 h-80 max-w-sm rounded-lg shadow p-6 border flex flex-col justify-between">
      <p>
        “As an expat, I felt completely at ease with ENTREX.
        <br /> Every ride was smooth, safe, and incredibly professional.”
      </p>
      <div className="mt-6">
        <p>
          Sneha Pillai
          <br />
          Fitness Coach, Bangalore
        </p>
      </div>
      <div className="flex items-center gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
    </div>

    <div className="w-80 h-80 max-w-sm  rounded-lg shadow p-6 border flex flex-col justify-between">
      <p>
        "Best football I’ve used in a while. My entire team
        <br /> now orders from here – reliable and affordable."
      </p>
      <div className="mt-6">
        <p>
          Ramesh Iyer
          <br />
          Cricket Enthusiast, Mumbai
        </p>
      </div>
      <div className="flex items-center gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
    </div>

  </div>
</section>
<MainFooter/>
<Footer/>

      </div>
    </div>
  );
};

export default About;
