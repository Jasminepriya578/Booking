'use client';
import React from 'react'
import { useState } from 'react';
import Footer from "../components/Footer";
import { StarIcon } from "@heroicons/react/24/solid";
const client = () => {
     const [openItems, setOpenItems] = useState({});
        const [status, setStatus] = useState("");
      const [loading, setLoading] = useState(false);
       const [form, setForm] = useState({
        name: '',
        email: '',
        services: '',
        budget: '',
        message: ''
      });
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
      }
     const validate = () => {
        if (!form.name  || !form.email || !form.budget || !form.message) {
          return "Please fill all required fields.";
        }
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
          return "Invalid email format.";
        }
    
        return "";
      };
      
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationError = validate();
        if (validationError) {
          setStatus(validationError);
          return;
        }
        setLoading(true);
        setStatus("");
    
        try {
          const res = await fetch('http://localhost:5000/api/enquiries', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
          });
    
          const data = await res.json();
    
          if (res.ok) {
            setStatus('Enquiry submitted successfully!');
            setForm({ name: "", email: "", budget: "", services: "", message: "" });
          } else {
            setStatus(data.message || 'Submission failed.');
          }
        } catch (error) {
          setStatus('Server error. Please try again later.');
        } finally {
          setLoading(false);
        }
      };
  return (
    <div>
        

            <main className="w-full bg: #F6F5F8;
 text-black py-4 px-2 sm:px-4 lg:px-6 xl:px-8 mt-20 ">
    <div className="flex flex-col justify-center items-center h-40 text-center mb-10 mt-4">
      <h3 className="text-2xl md:text-3xl lg:text-md xl:text-xl 2xl:text-5xl 3xl:text-6xl font-bold mb-4 leading-tight">Trusted by 1500+ popular companies</h3>
          <p className="text-xs md:xs lg:text-smxl:text-base 2xl:text-md text-gray-600 max-w-2xl lg:max-w-4xl xl:max-w-5xl text-semibold leading-relaxed">Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.</p>
  </div>
    
      <div className="grid grid-cols-5 gap-4">
  <div className="..."><img src="/google.png"></img></div>
  <div className="..."><img src="/creative.png"/></div>
  <div className="..."><img src="/airnub.png"/></div>
    <div className="..."><img src="/shopify.png"/></div>
  <div className="..."><img src="/amazon.png"/></div>

   <div className="..."><img src="/drop.png"/></div>
  <div className="..."><img src="/spotify.png"/></div>
  <div className="..."><img src="/asana.png"/></div>
    <div className="..."><img src="/delivero.png"/></div>
  <div className="..."><img src="/Nissan.png"/></div>
  </div>
  
  </main>   
   <section className="flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-12 md:py-20 lg:py-24">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
    What We Offer
  </h2>
  <p className="max-w-2xl text-gray-600 text-base md:text-lg leading-relaxed mb-12 md:mb-16">
    Our services are designed to simplify business mobility while delivering consistent, comfortable, and compliant ground transportation.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
    
    <div className="flex flex-col items-start text-left">
      <div className="w-16 h-16 bg-cyan-200 rounded-xl flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        Executive Chauffeur Services
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Discreet, professional chauffeurs for directors, VIPs, and senior leadership.
      </p>
    </div>

    <div className="flex flex-col items-start text-left">
      <div className="w-16 h-16 bg-yellow-200 rounded-xl flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        Airport Transfers
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Punctual pickups and drop-offs with live flight tracking and zero waiting time.
      </p>
    </div>

    <div className="flex flex-col items-start text-left">
      <div className="w-16 h-16 bg-orange-200 rounded-xl flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        Employee Commute Programs
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Safe, app-tracked transportation for staff with route optimization and rostering.
      </p>
    </div>

    <div className="flex flex-col items-start text-left">
      <div className="w-16 h-16 bg-purple-200 rounded-xl flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        Expat & Guest Handling
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Hospitality-trained chauffeurs and multilingual support for global visitors and delegations.
      </p>
    </div>
    <div className="flex flex-col items-start text-left">
      <div className="w-16 h-16 bg-cyan-200 rounded-xl flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        Centralized Billing & MIS Reports
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Transparent invoicing with detailed ride history, analytics, and corporate summaries.
      </p>
    </div>

    <div className="flex flex-col items-start text-left">
      <div className="w-16 h-16 bg-yellow-200 rounded-xl flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        App-Based Booking & Trip Management
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Real-time tracking, instant bookings, and secure ride monitoring via our digital platform.
      </p>
    </div>

  </div>
</section>
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
      <main className="w-full bg-[#F6F5F8] text-black py-16 px-2 sm:px-4 lg:px-6 xl:px-8 mt-20">
  <div className="max-w-6xl mx-auto">
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        <div className="flex flex-col items-center text-center">
          <img src="/Itta.png" className="w-32 h-32 mb-6 object-contain" alt="ITTA Certification" />
          <h4 className="font-bold text-sm mb-3 text-gray-800">
            Affiliations: IATO – Indian Association of Tour Operators
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
          </p>
        </div>

        <div className="flex flex-col items-center text-center relative">
          <div className="relative mb-6">
            <img src="/sheild.png"  alt="Shield Background" />
        
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                  Our<br />Certifications
                </h2>
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/iato.png" className="w-32 h-32 mb-6 object-contain" alt="IATO Certification" />
          <h4 className="font-bold text-sm mb-3 text-gray-800">
            Affiliations: IATO – Indian Association of Tour Operators
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
          </p>
        </div>
        
      </div>
    
  </div>
</main>
  <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          
    
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6 md:mb-8">Let's Talk</h1>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black mb-2 md:mb-3">Email</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">bookings@entrex.in</p>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black mb-3 md:mb-4">Socials</h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-black cursor-pointer transition-colors">Instagram</li>
                <li className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-black cursor-pointer transition-colors">Twitter</li>
                <li className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-black cursor-pointer transition-colors">Facebook</li>
              </ul>
            </div>
          </div>
          
       
          <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-sm ">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 md:p-4 lg:p-5 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 md:p-4 lg:p-5 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  What service are you interested in
                </label>
                <select
                  name="services"
                  value={form.services}
                  onChange={handleChange}
                  className="w-full p-3 md:p-4 lg:p-5 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500 transition-all"
                >
                  <option value="">Select project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Budget
                </label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full p-3 md:p-4 lg:p-5 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500 transition-all"
                >
                  <option value="">Select project budget</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 md:p-4 lg:p-5 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all text-black"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white py-3 md:py-4 lg:py-5 px-6 md:px-8 lg:px-10 rounded-md font-medium text-sm md:text-base lg:text-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Submit
              </button>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default client
