"use client";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainFooter from "./components/mainFooter";
import { useEffect, useState } from "react";
export default function Home() {
  
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

    
      <div className="relative z-10 min-h-screen flex flex-col ">
        <Header />
         
        <main className="flex-grow">
         <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/Home.jpg')` }}>
         <Navbar  textColor="text-whit" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row justify-between items-center">
    
    <div className="w-full lg:w-1/2 text-white mb-20">
      <img
        src="/car.png"
        alt="Car"
        height={80}
        width={80}
        sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, (max-width: 1280px) 512px, (max-width: 1440px) 576px, 672px"
      />

      <p className="text-left text-sm sm:text-base md:text-lg lg:text-5xl xl:text-3xl 2xl:text-3xl text-white/90 mt-10">
        Premium Chauffeur <br />Services for Every Journey
      </p>

     <button className="mt-4 bg-gradient-to-r from-[#ED2628]/90 to-[#F3AA45]/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition">
  Call Us Now
</button>

      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 mt-6">
        <div className="text-center sm:text-left">
          <p className="text-base lg:text-xl xl:text-2xl font-bold text-white/90">Verified</p>
          <span className="text-sm lg:text-lg text-white/70 block">Chauffeurs</span>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-base lg:text-xl xl:text-2xl font-bold text-white/90">Real-time</p>
          <span className="text-sm lg:text-lg text-white/70 block">Tracking</span>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-base lg:text-xl xl:text-2xl font-bold text-white/90">24×7</p>
          <span className="text-sm lg:text-lg text-white/70 block">Support</span>
        </div>
      </div>
    </div>

  
    <div className="w-full lg:w-[420px] md:w-[440px]  mt-10 lg:mt-0 ">
      <div className="bg-gradient-to-r from-[#ED2628]/90 to-[#F3AA45]/90 text-white p-6 sm:p-6 md:p-8 rounded-2xl shadow-lg backdrop-blur-md">
        <p className="text-center text-lg  sm:text-xl md:text-2xl font-bold mb-4">
          Book Your Ride Instantly
        </p>
 <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="p-3 rounded-md text-white w-full"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="p-3 rounded-md text-white w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-md text-white w-full sm:col-span-2"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="p-3 rounded-md text-white w-full"
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="p-3 rounded-md text-white w-full"
          required
        />
        <select
          name="adults"
          value={formData.adults}
          onChange={handleChange}
          className="p-3 rounded-md w-full text-white font-medium custom-select"
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
          className="p-3 rounded-md w-full text-white font-medium custom-select"
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
          className="p-3 rounded-md text-white w-full sm:col-span-2"
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
          className="p-3 rounded-full bg-gradient-to-r from-[#ED2628]/90 to-[#F3AA45]/90 text-white text-xs w-full hover:opacity-90 transition"
          disabled={loading}
        >
          RESET
        </button>
        <button
          type="submit"
          className="p-3 rounded-full bg-white text-black w-full hover:bg-gray-200 text-xs transition"
          disabled={loading}
        >
          {loading ? 'Booking...' : 'LET’S BOOK NOW'}
        </button>
      </div>
      {status && <p className="mt-3 text-sm text-yellow-200">{status}</p>}
    </form>
      </div>
    </div>

  </div>
</div>

        </main>
        </div>
      <main className="w-full bg-white text-black py-4 px-2 sm:px-4 lg:px-6 xl:px-8">
  <div className="flex flex-col justify-center items-center h-40 text-center mb-8">
    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
      Why <span className="text-orange-500">ENTREX</span>?
    </h1>
    <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl">
      Trusted by hundreds of travelers and corporates across India for a premium ride experience.
    </p>
  </div>
  <div className="hidden lg:block relative max-w-7xl mx-auto">
    <div className="grid grid-cols-3 gap-8 items-center min-h-[500px]">
  
      <div className="space-y-8">
<div className="absolute w-full  bg-black  ">
  <div className=" absolute left-[150px] bottom-10 bg-white  rounded shadow">
    <h3 className="ffont-semibold text-lg font-bold">Premium Chauffeurs</h3>
    <p className="text-gray-600 text-sm ">
      All our drivers are handpicked, background-verified,<br></br> professionally dressed, and trained for <br></br> top-tier customer service.
    </p>
  </div>
</div>

        <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold">🛡️</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Well-Maintained Vehicles</h3>
            <p className="text-gray-600 text-sm">Our fleet is serviced regularly, sanitized daily, and equipped with modern amenities for a smooth and safe ride.</p>
          </div>
        </div>
      
      <div className="absolute w-full  bg-black  ">
  <div className=" absolute left-[150px] top-10 bg-white  rounded shadow">
    <h3 className="ffont-semibold text-lg font-bold">Real-Time Tracking</h3>
    <p className="text-gray-600 text-sm ">
      We offer GPS-enabled rides so you—and <br></br>your loved ones—can track your journey with <br></br>full transparency.
    </p>
  </div>
</div>

      </div>

      <div className="flex justify-center items-center">
        <div className="relative">
     <img
  src="/Car2.png"
  alt="Car"
  className="w-48 sm:w-64 md:w-80 lg:w-[900px] h-auto"
/>

        </div>
      </div>
      <div className="space-y-8">
          
  <div className="absolute right-50 bottom-80  p-4  max-w-sm">
    <h3 className="font-semibold text-lg mb-2">Transparent Pricing</h3>
    <p className="text-gray-600 text-sm">
     No hidden charges. Transparent fare structure with real-time billing through our app. <br></br> top-tier customer service.
    </p>
  </div>


        <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold">⏰</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Punctual & Reliable</h3>
            <p className="text-gray-600 text-sm">Time is valuable. Our chauffeurs arrive ahead of schedule and follow optimized routes for timely arrivals.</p>
          </div>
        </div>

        
        <div className="absolute right-50 bottom-10  p-4  max-w-sm">
    <h3 className="font-semibold text-lg mb-2">24×7 Dedicated Support</h3>
    <p className="text-gray-600 text-sm">
     Our operations team is available around the<br>
     </br> clock to assist with bookings, changes,<br>
     </br> or emergencies.
    </p>
  </div>
     
      </div>
    </div>
  </div>
  <div className="lg:hidden ">

    <div className="flex justify-center mb-8">
      <img src="/Car2.png" alt="Entrex Car" className="w-full  max-w-sm h-auto object-contain" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 ">
      <div className="flex  items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">🔒</span>
        </div>
        <div>
          <h3 className="font-semibold text-base mb-2">Premium Chauffeurs</h3>
          <p className="text-gray-600 text-sm">All our drivers are handpicked, background-verified, professionally dressed, and trained for top-tier customer service.</p>
        </div>
      </div>

      <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">💲</span>
        </div>
        <div>
          <h3 className="font-semibold text-base mb-2">Transparent Pricing</h3>
          <p className="text-gray-600 text-sm">No hidden charges. Transparent fare structure with real-time billing through our app.</p>
        </div>
      </div>

      <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">🛡️</span>
        </div>
        <div>
          <h3 className="font-semibold text-base mb-2">Well-Maintained Vehicles</h3>
          <p className="text-gray-600 text-sm">Our fleet is serviced regularly, sanitized daily, and equipped with modern amenities for a smooth and safe ride.</p>
        </div>
      </div>

      <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">⏰</span>
        </div>
        <div>
          <h3 className="font-semibold text-base mb-2">Punctual & Reliable</h3>
          <p className="text-gray-600 text-sm">Time is valuable. Our chauffeurs arrive ahead of schedule and follow optimized routes for timely arrivals.</p>
        </div>
      </div>

      <div className="flex items-start space-x-3  p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className ="text-white text-xs font-bold">📍</span>
        </div>
        <div>
          <h3 className="font-semibold text-base mb-2">Real-Time Tracking</h3>
          <p className="text-gray-600 text-sm">We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.</p>
        </div>
      </div>

      <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">🎧</span>
        </div>
        <div>
          <h3 className="font-semibold text-base mb-2">24×7 Dedicated Support</h3>
          <p className="text-gray-600 text-sm">Our operations team is available around the clock to assist with bookings, changes, or emergencies.</p>
        </div>
      </div>
    </div>
  </div>
</main>
<main className="w-full bg-white text-black py-4 px-2 sm:px-4 lg:px-6 xl:px-8">
  <div className="flex flex-col justify-center items-center h-40 text-center mb-8">
    <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">In Car Provisions</h3>
    <p className="text-sm md:text-base lg:text-base text-gray-600 max-w-2xl text-semibold">Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.</p>
  </div>

  <div className="block md:hidden">
    <div className="grid grid-cols-2 gap-4 px-4 mb-6">
      <div className="flex justify-center">
        <img src="/bottle.png" className="w-16 h-16 object-contain" alt="Bottle" />
      </div>
      <div className="flex justify-center">
        <img src="/newspaper.png" className="w-16 h-16 object-contain" alt="Newspaper" />
      </div>
      <div className="flex justify-center">
        <img src="/paper.png" className="w-16 h-16 object-contain" alt="Paper" />
      </div>
      <div className="flex justify-center">
        <img src="/cookie.png" className="w-16 h-16 object-contain" alt="Cookie" />
      </div>
      <div className="flex justify-center">
        <img src="/news.png" className="w-16 h-16 object-contain" alt="News" />
      </div>
      <div className="flex justify-center">
        <img src="/cup.png" className="w-16 h-16 object-contain" alt="Cup" />
      </div>
      <div className="flex justify-center">
        <img src="/fire.png" className="w-16 h-16 object-contain" alt="Fire" />
      </div>
      <div className="flex justify-center">
        <img src="/perfume.png" className="w-16 h-16 object-contain" alt="Perfume" />
      </div>
      <div className="flex justify-center">
        <img src="/handphone.png" className="w-16 h-16 object-contain" alt="Handphone" />
      </div>
      <div className="flex justify-center">
        <img src="/gps.png" className="w-16 h-16 object-contain" alt="GPS" />
      </div>
    </div>
    
    <div className="flex justify-center mt-6 space-x-8">
      <div>
        <img src="/umbrella.png" className="w-16 h-16 object-contain" alt="Umbrella" />
      </div>
      <div>
        <img src="/torch.png" className="w-16 h-16 object-contain" alt="Torch" />
      </div>
      <div>
        <img src="/kid.png" className="w-16 h-16 object-contain" alt="Kid" />
      </div>
    </div>
  </div>

  <div className="hidden md:block lg:hidden">
    <div className="grid grid-cols-4 gap-8 px-8 mb-8">
      <div className="flex justify-center">
        <img src="/bottle.png" className="w-20 h-20 object-contain" alt="Bottle" />
      </div>
      <div className="flex justify-center">
        <img src="/newspaper.png" className="w-20 h-20 object-contain" alt="Newspaper" />
      </div>
      <div className="flex justify-center">
        <img src="/paper.png" className="w-20 h-20 object-contain" alt="Paper" />
      </div>
      <div className="flex justify-center">
        <img src="/cookie.png" className="w-20 h-20 object-contain" alt="Cookie" />
      </div>
      <div className="flex justify-center">
        <img src="/news.png" className="w-20 h-20 object-contain" alt="News" />
      </div>
      <div className="flex justify-center">
        <img src="/cup.png" className="w-20 h-20 object-contain" alt="Cup" />
      </div>
      <div className="flex justify-center">
        <img src="/fire.png" className="w-20 h-20 object-contain" alt="Fire" />
      </div>
      <div className="flex justify-center">
        <img src="/perfume.png" className="w-20 h-20 object-contain" alt="Perfume" />
      </div>
      <div className="flex justify-center">
        <img src="/handphone.png" className="w-20 h-20 object-contain" alt="Handphone" />
      </div>
      <div className="flex justify-center">
        <img src="/gps.png" className="w-20 h-20 object-contain" alt="GPS" />
      </div>
    </div>
    
    <div className="flex justify-center mt-10 space-x-16">
      <div>
        <img src="/umbrella.png" className="w-20 h-20 object-contain" alt="Umbrella" />
      </div>
      <div>
        <img src="/torch.png" className="w-20 h-20 object-contain" alt="Torch" />
      </div>
      <div>
        <img src="/kid.png" className="w-20 h-20 object-contain" alt="Kid" />
      </div>
    </div>
  </div>


  <div className="hidden lg:block">
    <div className="grid grid-cols-5 gap-20 ml-20">
      <div className="...">
        <img src="/bottle.png" alt="Bottle" />
      </div>
      <div className="...">
        <img src="/newspaper.png" alt="Newspaper" />
      </div>
      <div className="...">
        <img src="/paper.png" alt="Paper" />
      </div>
      <div className="...">
        <img src="/cookie.png" alt="Cookie" />
      </div>
      <div className="...">
        <img src="/news.png" alt="News" />
      </div>
      <div className="...">
        <img src="/cup.png" alt="Cup" />
      </div>
      <div className="...">
        <img src="/fire.png" alt="Fire" />
      </div>
      <div className="...">
        <img src="/perfume.png" alt="Perfume" />
      </div>
      <div className="...">
        <img src="/handphone.png" alt="Handphone" />
      </div>
      <div className="...">
        <img src="/gps.png" alt="GPS" />
      </div>
    </div>

    <div className="flex justify-center mt-10 space-x-53">
      <div>
        <img src="/umbrella.png" alt="Umbrella" />
      </div>
      <div>
        <img src="/torch.png" alt="Torch" />
      </div>
      <div>
        <img src="/kid.png" alt="Kid" />
      </div>
    </div>
  </div>

  <div className="flex justify-center mt-10">
    <button className="bg-gradient-to-r from-[#ED2628]/90 to-[#F3AA45]/90 text-white px-6 py-3 lg:px-6 lg:py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 rounded-full font-semibold shadow-lg hover:opacity-90 transition text-sm lg:text-base xl:text-lg">
      Book Your Journey Now
    </button>
  </div>
</main>

<main className="w-full bg: #F6F5F8;
 text-black py-4 px-2 sm:px-4 lg:px-6 xl:px-8 mt-20 ">
  <div className="flex flex-col justify-center items-center h-40 text-center mb-10 mt-4">
    <h3 className="text-2xl md:text-3xl lg:text-md xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold mb-4 leading-tight">
      Why ENTREX Is the Preferred Partner <br />
      for Premium Tourist Travel in India
    </h3>
    <p className="text-xs md:xs lg:text-smxl:text-base 2xl:text-md text-gray-600 max-w-2xl lg:max-w-4xl xl:max-w-5xl text-semibold leading-relaxed">
      Why ENTREX Is the Preferred Partner for Premium Tourist Travel in India
      Whether you're an international traveler, a corporate guest, or an expat exploring India, ENTREX delivers <br className="hidden lg:block" />
      a seamless journey with professional chauffeurs, luxury vehicles, and end-to-end travel solutions.
    </p>
  
  </div>
 <div className="relative w-full">

      <img
        src="/Car3.png"
        className="w-[700px] h-auto object-cover mb-10 mx-auto block"
        alt="Car"
      />
      <div
        className={`absolute top-[30%] left-80 transform -translate-y-1/2 px-4 py-4 bg-white shadow-md rounded-lg w-60 transition-all duration-1000 ease-out ${
          loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <p className="font-semibold">Tours Completed</p>
        <p>
          27,632 <span className="text-green-600">+2.5%</span>
        </p>
        <p className="text-sm text-gray-600">Compared to (21340 last year)</p>
      </div>

      <div
        className={`absolute top-[50%] right-90 transform -translate-y-1/2 px-4 py-4 bg-white shadow-md rounded-lg w-60 transition-all duration-1000 ease-out delay-200 ${
          loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <p className="text-lg font-bold text-center">68%</p>
      </div>
    </div>
<div className="grid grid-cols-4 gap-4 p-2 bg-gray-50">

  <div className="bg-white border-2 border-dashed border-gray-300  rounded-lg p-4 text-center">
    <span className="text-gray-600">Multilingual </span>
    <span className="text-orange-500 font-semibold ">Chauffeurs</span>
  </div>
  
  <div className="bg-white border-2 border-dashed border-gray-300  rounded-lg p-4 text-center">
    <span className="text-gray-600">Entrex </span>
    <span className="text-orange-500 font-semibold">Client Kit </span>
    <span className="text-gray-600">for every trip</span>
  </div>
  
  <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
    <span className="text-gray-600">100% Statutory </span>
    <span className="text-orange-500 font-semibold">Compliance </span>
    <span className="text-gray-600">ensured</span>
  </div>
  
  <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
    <span className="text-orange-500 font-semibold">Luxury </span>
    <span className="text-gray-600">and Well maintained vehicles</span>
  </div>

  <div className="col-span-2 bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
    <span className="text-gray-600">Vehicles with average age of </span>
    <span className="text-orange-500 font-semibold">less than 3 years</span>
  </div>
  
  <div className="col-span-2 bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
    <span className="text-orange-500 font-semibold">Best Pricing </span>
    <span className="text-gray-600">among the </span>
    <span className="text-orange-500 font-semibold">Premium segment </span>
    <span className="text-gray-600">service providers</span>
  </div>

  <div className="col-span-2 bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 text-left">
    <span className="text-red-500 font-semibold">ZERO Payment </span>
    <span className="text-gray-600">commitment in case of any flaw in the trip service</span>
  </div>
  
  <div className="col-span-2 bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 text-left">
    <span className="text-red-500 font-semibold">Safety & Security </span>
    <span className="text-gray-600">ensured through high-end GPS based solution and Remote vehicle control</span>
  </div>

  
  <div className="col-span-4 bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
    <span className="text-gray-600">Packaged Solutioning covering Accommodation, Food, Sight-seeing, Tourist Guide etc for </span>
    <span className="text-orange-500 font-semibold">Expat / Executive Tourism.</span>
  </div>

<div className="col-span-4 bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
    <span className="text-gray-600">For long stay Clients, Food, Sight-seeing, <span className="text-orange-500 font-semibold" >dedicated Chauffer & Vehicle</span> for undisturbed service</span>
   
  </div>

</div>

</main>
  
  <MainFooter />
        <Footer />
   
    </div>
  );
}
