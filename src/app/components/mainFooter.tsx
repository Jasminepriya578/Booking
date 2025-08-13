'use client';
import React from 'react'
import { useState } from 'react';
const mainFooter = () => {
  
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

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const renderFaqItem = (item) => (
    <div className="mb-4" key={item.id}>
      <button
        onClick={() => toggleItem(item.id)}
        className={`w-full text-left flex justify-between items-center py-4 px-0 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 ${
          item.isBlue ? 'text-blue-600' : 'text-gray-800'
        }`}
      >
        <span className="font-semibold text-sm md:text-base pr-4">
          {item.question}
        </span>
        <span className="text-xl font-bold flex-shrink-0">
          {openItems[item.id] ? '−' : '+'}
        </span>
      </button>
      {openItems[item.id] && (
        <div className="py-3 px-0 text-gray-600 text-sm leading-relaxed border-b border-gray-100">
          {item.answer}
        </div>
      )}
    </div>
  );
  const faqData = [
    {
      id: 'webflow-1',
      question: 'What is Webflow and why is it the best website builder?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
      isBlue: true
    },
    {
      id: 'template-1',
      question: 'What is your favorite template from BRIX Templates?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
      id: 'clone-1',
      question: 'How do you clone a template from the Showcase?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
      id: 'agency-1',
      question: 'Why is BRIX Templates the best Webflow agency?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
      id: 'launch-1',
      question: 'When was Webflow officially launched?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
      id: 'jetboost-1',
      question: 'How do you integrate Jetboost with Webflow?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    }
  ];

  const faqDataRight = [
    {
      id: 'template-2',
      question: 'What is your favorite template from BRIX Templates?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
      id: 'clone-2',
      question: 'How do you clone a template from the Showcase?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
      id: 'webflow-2',
      question: 'What is Webflow and why is it the best website builder?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
      isBlue: true
    },
    {
      id: 'agency-2',
      question: 'Why is BRIX Templates the best Webflow agency?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
      id: 'launch-2',
      question: 'When was Webflow officially launched?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
      id: 'jetboost-2',
      question: 'How do you integrate Jetboost with Webflow?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    }
  ];
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
  
    <main className="w-full bg-[#F6F5F8] text-black py-16 px-2 sm:px-4 lg:px-6 xl:px-8 mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
          Got questions? We've got answers! Find solutions to common queries about our services, processes, and technology.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {faqData.map(renderFaqItem)}
          </div>
          <div className="space-y-4">
            {faqDataRight.map(renderFaqItem)}
          </div>
        </div>
      </div>

    </main>
 <main className="w-full bg-[#F6F5F8] text-black py-8 px-4 lg:px-8 mt-20">
  <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">News & Updates</h2>
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <img 
        src="/img21.jpg" 
        alt="Business team meeting" 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
          Surviving through tough times as a first time SaaS...
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-orange-100 text-orange-700 text-xs font-medium px-2 py-1 rounded">
              BUSINESS
            </span>
            <span className="text-gray-500 text-xs">Oct 3</span>
            <span className="text-gray-400 text-xs">•</span>
            <span className="text-gray-500 text-xs">7 min read</span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <img 
        src="/img22.png" 
        alt="SaaS development" 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
          SaaS customer development and no-code prototypes
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
              MARKETING
            </span>
            <span className="text-gray-500 text-xs">Oct 3</span>
            <span className="text-gray-400 text-xs">•</span>
            <span className="text-gray-500 text-xs">7 min read</span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <img 
        src="/img23.jpg" 
        alt="Team collaboration" 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
          Highnote Emerges from Stealth with $54 Million in ...
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
              ANALYTICS
            </span>
            <span className="text-gray-500 text-xs">Oct 3</span>
            <span className="text-gray-400 text-xs">•</span>
            <span className="text-gray-500 text-xs">7 min read</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  < div className="text-center mt-10 "  >
    <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
      View more articles
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
  </div>

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
                  className="w-full p-3 md:p-4 lg:p-5 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
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

</main>



 
    </div>
    
  )
}

export default mainFooter
