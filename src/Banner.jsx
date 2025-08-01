import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between bg-white">
      
      {/* Left image */}
      <div className="w-full md:w-[50%] bg-brandgreen md:-skew-x-10 md:-ml-22">
        <div className="w-full flex items-center justify-center p-4">
          <img 
            src="/avatar-bg.png"
            alt="profile pic" 
            className="object-cover" 
          />
        </div>
      </div>

      {/* Right content */}
      <div className="w-full md:w-[50%] p-14 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <h3 className="text-brandgreen text-3xl font-semibold font-mono mb-2">Assalam o Alikum</h3>
        <h1 className="text-5xl md:text-8xl font-bold text-gray-900 mt-2 uppercase">Mohsin Ali</h1>
        <p className="text-xl md:text-2xl text-gray-600 mt-2 font-serif">Professional Freelance Web Developer</p>
        <p className="text-lg text-justify text-gray-600 mt-4 max-w-md">
            Full Stack MERN Developer with experience in building custom websites & ERP solutions tailored to client needs.
            🎨 Skilled in multiple CSS frameworks with a strong focus on clean, responsive, and modern design.
        </p>
        <a
          href="https://wa.me/923063716840" // Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="w-44 inline-flex items-center justify-center gap-2 mt-5 md:mt-10 px-6 py-3 bg-brandgreen text-white rounded hover:bg-hovargreen transition"
        >
          <FaWhatsapp className="text-3xl" />
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Banner;
