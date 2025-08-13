"use client"
import React from 'react'
import Header from "../components/Header";  
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainFooter from "../components/mainFooter";
import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
const Service = () => {
   const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
 const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    adults: "",
    children: "",
    message: ""
  });

    const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.fullName || !formData.phone || !formData.email || !formData.date || !formData.time) {
      return "Please fill all required fields.";
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      return "Invalid email format.";
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      return "Phone must be 10 digits.";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setStatus(validationError);
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Booking successful!');
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          adults: "",
          children: "",
          message: ""
        });
      } else {
        setStatus(data.message || 'Booking failed.');
      }
    } catch (error) {
      setStatus('Server error. Please try again later.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex flex-col text-black">
        <Header />
        <main className="flex-grow">
          <div className="min-h-screen bg-white bg-cover bg-center">
            <Navbar className="bg-white" textColor="text-black" />
            
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 lg:py-20">
       
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col gap-6 max-w-2xl">
                  
                  
                  <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center relative mb-2">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/>
                </svg>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                        < svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                      </svg>
                    </div>
                  </div>
                  
                 
                  <p className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                         EMPLOYEE TRANSPORTATION SERVICES
                  </p>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-black leading-tight">
                    Seamless, Safe, and Smart<br />
                    Commute Solutions for<br />
                    Your Workforce
                  </h1>
      
                  <div className="text-gray-600 text-base leading-relaxed mt-4">
                    <p>ENTREX delivers tech-enabled employee transport solutions that</p>
                        <p>ensure your workforce arrives on time</p>
                <p>— safely, reliably, and at scale.</p>
                  </div>
                  
                </div>
              </div>

<div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full lg:w-[420px] md:w-[440px] mt-10 lg:mt-0">
        <div className="bg-white rounded-3xl shadow-xl border-2 border-orange-300 p-6">
          <h2 className="text-xl font-bold text-center mb-6 text-orange-500">
            Book Your Ride Instantly
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="p-3 rounded-md text-black w-full border border-gray-200 focus:outline-none focus:border-orange-300"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 rounded-md text-black w-full border border-gray-200 focus:outline-none focus:border-orange-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-md text-black w-full sm:col-span-2 border border-gray-200 focus:outline-none focus:border-orange-300"
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="p-3 rounded-md text-black w-full border border-gray-200 focus:outline-none focus:border-orange-300"
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="p-3 rounded-md text-black w-full border border-gray-200 focus:outline-none focus:border-orange-300"
                required
              />
              <select
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className="p-3 rounded-md w-full text-black font-medium custom-select border border-gray-200 focus:outline-none focus:border-orange-300 bg-white"
                required
              >
                <option value="" disabled className="text-black">Adults</option>
                <option className="text-black" value="0">0</option>
                <option className="text-black" value="1">1</option>
                <option className="text-black" value="2">2</option>
                <option className="text-black" value="3">3</option>
              </select>
              <select
                name="children"
                value={formData.children}
                onChange={handleChange}
                className="p-3 rounded-md w-full text-black font-medium custom-select border border-gray-200 focus:outline-none focus:border-orange-300 bg-white"
                required
              >
                <option value="" disabled className="text-black">Children</option>
                <option className="text-black" value="0">0</option>
                <option className="text-black" value="1">1</option>
                <option className="text-black" value="2">2</option>
                <option className="text-black" value="3">3</option>
              </select>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 rounded-md text-black w-full sm:col-span-2 border border-gray-200 focus:outline-none focus:border-orange-300 resize-none"
                rows={3}
              />
              
              <button
                type="reset"
                onClick={() => {
                  setFormData({
                    fullName: "",
                    phone: "",
                    email: "",
                    date: "",
                    time: "",
                    adults: "",
                    children: "",
                    message: ""
                  });
                  setStatus("");
                }}
                className="p-3 rounded-full bg-gradient-to-r from-[#ED2628]/90 to-[#F3AA45]/90 text-black text-xs w-full hover:opacity-90 transition"
                disabled={loading}
              >
                RESET
              </button>
              <button
                type="submit"
                className="p-3 rounded-full bg-white text-black w-full hover:bg-gray-200 text-xs transition border border-gray-200"
                disabled={loading}
              >
                {loading ? 'Booking...' : 'LET\'S BOOK NOW'}
              </button>
            </div>
            {status && <p className="mt-3 text-sm text-yellow-600">{status}</p>}
          </form>
        </div>
      </div>
    </div>
              
            </div>

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
<section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-start gap-16">
      
      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-12">
          Why ENTREX for<br />
          Employee Commute?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time GPS Tracking</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Monitor routes, driver behavior, and vehicle<br />
              status through our centralized tracking system.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Dynamic Shift Management</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Auto-generated rosters based on employee<br />
              shift timings, integrated with your HRMS or<br />
              scheduling platform.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Chauffeurs</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              All drivers undergo background checks, safety<br />
              training, and etiquette certification.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">PAN India Coverage</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Operations across Tier 1, Tier 2, and emerging<br />
              metro regions — no location is out of reach.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 13.5l3.5-2.5 3.5 2.5-3.5 2.5L12 13.5z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24×7 Control Room</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Round-the-clock support for routing,<br />
              rescheduling, or emergency handling.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Data-Driven Reporting</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              MIS reports, trip logs, billing summaries, and<br />
              audit trails — all available via dashboard or<br />
              export.
            </p>
          </div>

        </div>
      </div>

      <div className="w-full lg:w-1/2 mt-40">
        <div className="flex justify-center lg:justify-end">
          <img 
            src="/Image.png" 
            alt="Professional chauffeur service" 
            className="w-full max-w-lg h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>

<section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
  <div className="max-w-7xl mx-auto">
    
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        Why Your Website Is Your Best Salesperson
      </h2>
      <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
        Choose from a wide range of well-maintained vehicles tailored for employee transportation across all business sizes and shift types.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row items-start gap-16">
      
      <div className="w-full lg:w-1/2">
        <div className="flex justify-center lg:justify-start">
          <img 
            src="/nano.jpg" 
            alt="Vehicle Fleet" 
            className="w-full max-w-lg h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hatchbacks & Sedans</h3>
              <p className="text-gray-600 leading-relaxed">
                Ideal for individual pickups, senior staff, or compact city routes.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,5H7C6.45,5 6,5.45 6,6V15C6,15.55 6.45,16 7,16H8.5C8.5,17.38 9.62,18.5 11,18.5S13.5,17.38 13.5,16H15.5C15.5,17.38 16.62,18.5 18,18.5S20.5,17.38 20.5,16H21C21.55,16 22,15.55 22,15V12.5C22,11.95 21.55,11.5 21,11.5H20V8C20,6.9 19.1,6 18,6H17V5M7,7H17V14H7V7M11,15C10.45,15 10,15.45 10,16S10.45,17 11,17 12,16.55 12,16 11.55,15 11,15M18,15C17.45,15 17,15.45 17,16S17.45,17 18,17 19,16.55 19,16 18.55,15 18,15Z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">MUVs & SUVs</h3>
              <p className="text-gray-600 leading-relaxed">
                Spacious, comfortable, and perfect for small teams or mid-range commutes.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18,11H6V6H18M16.5,17A1.5,1.5 0 0,1 15,15.5A1.5,1.5 0 0,1 16.5,14A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 16.5,17M7.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,14A1.5,1.5 0 0,1 9,15.5A1.5,1.5 0 0,1 7.5,17M4,16C4,16.88 4.39,17.67 5,18.22V20A1,1 0 0,0 6,21H7A1,1 0 0,0 8,20V19H16V20A1,1 0 0,0 17,21H18A1,1 0 0,0 19,20V18.22C19.61,17.67 20,16.88 20,16V6C20,2.5 16.42,2 12,2C7.58,2 4,2.5 4,6V16Z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mini & Large Tempo Travelers</h3>
              <p className="text-gray-600 leading-relaxed">
                Best suited for shift-based staff transport and high-volume deployment.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.98C19.47,12.66 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.02L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.65 15.48,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.52,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.02C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.52,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.48,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.98Z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Air-Conditioned Coaches (on request)</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium option for corporate events, long-distance staff movement, or executive group travel.
              </p>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  </div>
</section>
<section className="max-w-6xl mx-auto px-4 py-12">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">How It Works</h2>
  <p className="text-center text-gray-500 mb-10">
    Choose from a wide range of well-maintained vehicles tailored for employee transportation 
    across all business sizes and shift types.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="border border-orange-300 rounded-lg p-6 text-center shadow-sm">
      <div className="text-red-500 mb-3">[Icon Here]</div>
      <h3 className="font-semibold mb-2">Requirement Mapping</h3>
      <p className="text-gray-600 text-sm">
        We understand your workforce size, shifts, routes, and security requirements.
      </p>
    </div>

    <div className="border border-orange-300 rounded-lg p-6 text-center shadow-sm">
      <div className="text-yellow-500 mb-3">[Icon Here]</div>
      <h3 className="font-semibold mb-2">Deployment Plan</h3>
      <p className="text-gray-600 text-sm">
        We prepare routing plans, driver assignments, and pickup/drop schedules using AI-based planning tools.
      </p>
    </div>

    <div className="border border-orange-300 rounded-lg p-6 text-center shadow-sm">
      <div className="text-green-500 mb-3">[Icon Here]</div>
      <h3 className="font-semibold mb-2">Live Execution</h3>
      <p className="text-gray-600 text-sm">
        Vehicles are dispatched on time with real-time monitoring and backup protocols.
      </p>
    </div>

    <div className="border border-orange-300 rounded-lg p-6 text-center shadow-sm">
      <div className="text-green-500 mb-3">[Icon Here]</div>
      <h3 className="font-semibold mb-2">Transparent Billing</h3>
      <p className="text-gray-600 text-sm">
        Automated trip logs, easy reconciliation, and centralized invoicing.
      </p>
    </div>
  </div>
</section>

   <section className="max-w-6xl mx-auto px-4 py-12">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">Who We Serve</h2>
  <p className="text-center text-gray-500 mb-10">
    Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.
  </p>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
    {[
      { icon: "/icons/itcom.png", label: "IT Companies" },
      { icon: "/icons/call.png", label: "BPO & Call Centers" },
      { icon: "/icons/heart.png", label: "Hospitals & Clinics" },
      { icon: "/icons/unit.png", label: "Manufacturing Units" },
      { icon: "/icons/universities.png", label: "Colleges & Universities" },
      { icon: "/icons/business.png", label: "Business Parks" },
      { icon: "/icons/shared.png", label: "Shared Workspaces" },
      { icon: "/icons/hotels.png", label: "Hotels & Hospitality" },
      { icon: "/icons/warehouse.png", label: "Warehousing & Logistics" },
      { icon: "/icons/government.png", label: "Government & PSU" },
    ].map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center text-center bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <img src={item.icon} alt={item.label} className="w-12 h-12 mb-4" />
        <p className="font-medium text-gray-800">{item.label}</p>
      </div>
    ))}
  </div>

  <div className="flex justify-center mt-10">
    <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-medium px-6 py-3 rounded-full shadow-md hover:opacity-90 transition duration-300">
      Book Your Journey Now
    </button>
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
<MainFooter/>
<Footer/>
      </div>
    </div>
  )
}

export default Service;