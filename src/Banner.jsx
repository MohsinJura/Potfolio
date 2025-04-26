import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="relative flex items-center justify-between h-screen bg-white overflow-hidden">
      {/* Skewed green background */}
      <div className="absolute inset-0 -mx-20 w-2/5 bg-brandgreen transform -skew-x-10 origin-left z-0"></div>

      {/* Left Text Content */}
      <div className="relative z-10 w-2/5 flex">
        <img 
          src="/avatar-bg.png"
          alt="profile pic" 
          className="min-w-fit ml-12 rounded-full" 
        />
      </div>

      {/* Right Image */}
      <div className="relative z-10 w-3/5 pl-26">
        <h3 className="text-brandgreen text-3xl font-semibold font-mono">Hello I'm</h3>
        <h1 className="text-8xl font-bold text-gray-900 mt-2 uppercase">Mohsin Ali</h1>
        <p className="text-2xl text-gray-600 mt-2 font-serif">Professional Freelance Web Developer</p>
        <p className="text-lg text-gray-500 mt-4 max-w-md">
            Full Stack MERN Developer with experience in building custom websites & ERP solutions tailored to client needs.
            🎨 Skilled in multiple CSS frameworks with a strong focus on clean, responsive, and modern design.
        </p>
        <a
          href="https://wa.me/923063716840" // Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-10 px-6 py-2 bg-brandgreen text-white rounded hover:bg-hovargreen transition"
        >
          <FaWhatsapp className="text-3xl" />
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Banner;
