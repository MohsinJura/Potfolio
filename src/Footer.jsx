// Footer.jsx
import {
    FaLinkedinIn,
    FaSkype,
    FaPhoneAlt,
  } from 'react-icons/fa';
  
  export default function Footer() {
    return (
      <footer className="bg-gray-50 py-10 text-center">
        <h1 className="text-2xl font-semibold">
          Dev<span className="text-brandgreen">lopers</span>
        </h1>
  
        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-4 mt-4">
            <a href="tel:+923052792911" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 text-gray-600 hover:text-white hover:bg-brandgreen transition-all duration-300 cursor-pointer">
                <FaPhoneAlt />
            </a>
            <a href="skype:live:mohsinmustafa470?call" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 text-gray-600 hover:text-white hover:bg-brandgreen transition-all duration-300 cursor-pointer">
                <FaSkype />
            </a>
            <a href="https://www.linkedin.com/in/mohsinmustafa" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 text-gray-600 hover:text-white hover:bg-brandgreen transition-all duration-300 cursor-pointer">
                <FaLinkedinIn />
            </a>
        </div>

  
        {/* Email */}
        <a href="mailto:mohsinmustafa470@gmail.com" className="text-2xl font-bold text-slate-800 mt-6 hover:text-brandgreen transition-colors duration-300">
  mohsinmustafa470@gmail.com </a>
  
        {/* Nav Links 
        <div className="mt-4 flex justify-center flex-wrap gap-6 text-slate-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact Us</a>
        </div> */}
  
        {/* Footer Note */}
        <p className="mt-6 text-sm text-slate-500">
          Developed by{' '}
          <span className="text-brandgreen font-medium cursor-pointer hover:underline">Devloprz</span>
        </p>
      </footer>
    );
  }
  