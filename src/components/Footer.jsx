import React from "react";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#053B44] text-white pt-10 pb-6  font-sans">
      {/* Top Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-teal-400 pb-10">
        {/* Left Section */}
        <div className="space-y-4 text-center md:text-left">
          <div className="bg-white py-2 px-[80px] inline-block rounded-e-md">
            <img
              src="logo.png"
              alt="Pixel TechnoSol Logo"
              className="w-40 mx-auto md:mx-0"
            />
          </div>
          <div className="w-[60%] ms-auto">
          <p className="text-gray-300 lg:w-[333px] text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
            Crafting websites that inspire, engage, and grow your business.
          </p>
          </div>
        </div>
        <div className="flex">
          {/* Middle Section */}
          <div className="text-center w-[30%] md:text-left">
            <h3 className="text-lg font-bold mb-2 ">Overview</h3>
            <div className="hr w-[4rem]"></div>
            <div className="w-12 h-[2px] bg-teal-400 mx-auto md:mx-0 mb-4"></div>
            <ul className="space-y-2">
              {[
                "Home",
                "Services",
                "Portfolio",
                "Testimonial",
                "Clients",
                "Contact",
              ].map((item, index) => (
                <li key={index}>
                  <button
                    
                    className="hover:text-teal-400 transition text-gray-200 text-sm md:text-base"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="text-center w-[60%] md:text-left">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
              <div className="hr w-[7rem]"></div>
            <div className="w-12 h-[2px] bg-teal-400 mx-auto md:mx-0 mb-4"></div>

            <ul className="text-sm md:text-base text-gray-200 space-y-2">
              <li>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+923121861921"
                  className="hover:text-teal-400 transition"
                >
                  +92 312 1861921
                </a>
              </li>
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@pixeltechnosol.com"
                  className="hover:text-teal-400 transition"
                >
                  info@pixeltechnosol.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Address:</span> <br />
                House# 445, Street# 20 <br />
                Ghouri Town Phase-1, Islamabad, Pakistan
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="w-12 h-[2px] bg-teal-400 mx-auto md:mx-0 mb-3"></div>
              <div className="flex justify-center md:justify-start space-x-4 text-2xl">
                <button
                  className="text-green-500 hover:scale-110 transition-transform"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </button>
                <button
                  className="text-sky-400 hover:scale-110 transition-transform"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane />
                </button>
                <button
                  className="text-blue-600 hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </button>
                <button
                  className="text-blue-700 hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-xs md:text-sm text-gray-400 mt-6">
        © {new Date().getFullYear()} All rights reserved by{" "}
        <button href="#" className="text-teal-400 hover:underline">
          Pixel TechnoSol
        </button>
        .
      </div>
    </footer>
  );
};

export default Footer;
