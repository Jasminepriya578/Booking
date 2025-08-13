"use client"
import React from 'react'
import Header from "../components/Header";  
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!form.name || !form.phoneNumber || !form.email || !form.message) {
      return "Please fill all required fields.";
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      return "Invalid email format.";
    }
    if (!/^\d{10}$/.test(form.phoneNumber)) {
      return "Phone must be 10 digits.";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form about to submit:', form);

    const validationError = validate();
    if (validationError) {
      setStatus(validationError);
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: "", phoneNumber: "", email: "", message: "" });
      } else {
        setStatus(data.message || 'Submission failed.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };


  return (
    
          <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex flex-col text-black">
        <Header />
  <main className="flex-grow">
  <div className="min-h-screen bg-white bg-cover bg-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
    <Navbar className="bg-white" textColor="text-black" />

    <div className="flex flex-col mt-20 ml-0 sm:ml-10 md:ml-20 gap-6 sm:gap-10 max-w-5xl mx-auto">
      <p className="text-base sm:text-lg font-medium text-gray-700">Get Started</p>
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Get in touch with us.<br /> We're here to assist you.
      </h3>
    </div>

  <form 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <label className="mb-2 font-medium text-gray-700">Your Name</label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full h-10 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 font-medium text-gray-700">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full h-10 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 font-medium text-gray-700">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="text"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className="w-full h-10 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="flex flex-col col-span-1 sm:col-span-2 lg:col-span-3">
                <label className="mb-2 font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  required
                ></textarea>
              </div>

              <div className="col-span-1 sm:col-span-2 lg:col-span-3 max-w-5xl mx-auto mt-6 sm:mt-8">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#ED2628]/90 to-[#F3AA45]/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Leave us Message'}
                </button>
              </div>

              {status && (
                <p className="col-span-1 sm:col-span-2 lg:col-span-3 text-center text-red-600 mt-2">{status}</p>
              )}
            </form>


    
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
        <Footer/>
    </div>
    </div>
  )
}

export default Contact
